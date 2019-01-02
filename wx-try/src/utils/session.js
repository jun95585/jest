/**
 * 用来存储登录信息
 */
const SESSION_KEY = 'ft_store'

const Session = {
    get: function () {
        return wx.getStorageSync(SESSION_KEY) || null
    },

    set: function (session) {
        var currentSession = wx.getStorageSync(SESSION_KEY) || null
        wx.setStorageSync(SESSION_KEY, Object.assign({}, currentSession, session))
    },

    clear: function () {
        wx.removeStorageSync(SESSION_KEY)
    }
}

export default Session
