// login.js
import { wxLogin, wxGetUserInfo, wxNavigateTo } from './wxApiPromise'
import Session from './session'
import Store from './store'
import { login as loginApi } from '@apis/auth'
import { getMe } from '@apis/user'
import config from '@/config'

async function login() {
    try {
        const loginData = await wxLogin()
        if (!loginData.code) {
            Store.bus.$emit('login:fail')
            return Promise.reject({ text: '登录：失败' })
        }

        const userInfo = await wxGetUserInfo()
        if (!userInfo.userInfo || !userInfo.encryptedData || !userInfo.iv) {
            Store.bus.$emit('login:fail')
            return Promise.reject({ text: '登录：获取用户信息失败' })
        }
        const {
            data: {
                account_id: uid,
                access_token: accessToken,
            } = {}
        } = await loginApi({
            code: loginData.code,
            encrypted_data: userInfo.encryptedData,
            iv: userInfo.iv,
            nickname: userInfo.userInfo.nickName,
            avatar_url: userInfo.userInfo.avatarUrl,
            appid: config.appid
        })

        // 更新Session
        Session.set({ accessToken, uid, nickname: userInfo.userInfo.nickName })

        // 请求user，如果不存在就创建用户
        await getMe()

        // 广播登陆成功，相关组件更新状态
        Store.bus.$emit('login:success')

        return Promise.resolve({
            loginData,
            userInfo
        })
    } catch (err) {
        Store.bus.$emit('login:fail')
        return Promise.reject(err)
    }
}

/**
 * 工具方法，用于全局记录是否登陆成功(loginChecked)，如已经登陆成功，返回promise.resove
 */
const singletonLoginCheckPromise = new Promise((resolve) => {
    const session = Session.get()
    // 如果需要登录，清除全局登录状态
    if (!session || !session.uid || !session.accessToken) {
        Session.clear()

        login()
            .then(data => {
                // 自动登录成功
                resolve()
            })
            .catch(() => {
                // 有错的话，不需要处理，会唤起登录浮层，登陆成功后通知loginCheck成功
                // console.error(err)

                // 订阅login:checkSuc成功
                Store.bus.$once('login:checkSuc', () => {
                    resolve()
                })

                wxNavigateTo({ url: '/pages/login/main' })
            })
    } else {
        resolve()
    }
})

export default login
export function loginCheck() {
    return singletonLoginCheckPromise
}

