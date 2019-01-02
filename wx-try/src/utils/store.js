import Vue from 'vue'

/**
 * bus用于跨页面、跨组件订阅触发事件，传递数据
 */

/* bus 事件记录 */

/* --- login --- */
// login:success 登录成功 (utils/login.js)
// login:expire 登录过期/用户不存在 (apis/request.js) 每个请求都会判断token是否过期
// login:fail 登录失败 (utils/login.js)
// login:checkSuc 验证登录成功 (components/LoginLayer.js) 登录浮层，如果需要手动授权，在授权登录成功后发布事件

export default {
    bus: new Vue()
}
