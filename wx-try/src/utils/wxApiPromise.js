/**
 * wx方法的promise化
 */

function promiseFn(fn) {
    return function (opts = {}) {
        return new Promise((resolve, reject) => {
            opts.success = res => resolve(res)
            opts.fail = (res) => reject(res)

            if (fn) {
                fn(opts)
            } else {
                reject({ msg: '当前版本不支持该方法！' })
            }
        })
    }
}

export const wxLogin = promiseFn(wx.login)
export const wxGetUserInfo = promiseFn(wx.getUserInfo)
export const wxGetImageInfo = promiseFn(wx.getImageInfo)
export const wxGetSystemInfo = promiseFn(wx.getSystemInfo)
export const wxNavigateTo = promiseFn(wx.navigateTo)
export const wxRedirectTo = promiseFn(wx.redirectTo)
export const wxReLaunch = promiseFn(wx.reLaunch)
export const wxSwitchTab = promiseFn(wx.switchTab)
export const wxNavigateBack = promiseFn(wx.navigateBack)
export const wxVibrateShort = promiseFn(wx.vibrateShort)
export const wxStopPullDownRefresh = promiseFn(wx.stopPullDownRefresh)
export const wxShowToast = promiseFn(wx.showToast)
export const wxShowLoading = promiseFn(wx.showLoading)
export const wxHideLoading = promiseFn(wx.hideLoading)
export const wxShowModal = promiseFn(wx.showModal)
