<template>
    <div class="container" @click="clickHandle('test click', $event)">
>
        <a href="/pages/game/main" class="counter">去往GAME</a>
        <a href="/pages/eatWhat/main" class="counter">吃什么</a>
    </div>
</template>

<script>
    import card from '@/components/card'

    export default {
        data () {
            return {
                motto: 'Hello World',
                userInfo: {}
            }
        },

        components: {
            card
        },

        methods: {
            bindViewTap () {
                const url = '../logs/main'
                wx.navigateTo({ url })
            },
            getUserInfo () {
                // 调用登录接口
                wx.login({
                    success: () => {
                        wx.getUserInfo({
                            success: (res) => {
                                this.userInfo = res.userInfo
                            }
                        })
                    }
                })
            },
            clickHandle (msg, ev) {
                console.log('clickHandle:', msg, ev)
            }
        },

        created () {
            // 调用应用实例的方法获取全局数据
            this.getUserInfo()
        }
    }
</script>

<style scoped>
.userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
}

.userinfo-nickname {
    color: #aaa;
}

.usermotto {
    margin-top: 150px;
}

.form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
}

.counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
}
</style>
