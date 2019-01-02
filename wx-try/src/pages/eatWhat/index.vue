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
        async mounted () {
            // env是你云开发的环境id。
            const db = wx.cloud.database({ env: 'choose-foods' })
            db.collection('meels').get()
                .then(res => {
                    console.log(res.data)
                    // 可以进行数据初始化
                })
                .cache(console.error)
        }
    }
</script>

<style scoped>
</style>
