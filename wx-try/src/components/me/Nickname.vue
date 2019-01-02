<template>
    <section :class="['my-nickname-container', className]" >
        <Nickname :nickname="nickname"/>
    </section>
</template>

<script>
    import Session from '@utils/session'
    import Store from '@utils/store'

    import Nickname from '@components/Nickname'

    /**
     * 由于使用缓存数据，需要在缓冲更新时，重新获取缓存数据，所以独立成组件，更新头像
     */
    export default {
        components: {
            Nickname,
        },
        props: {
            className: {
                type: String,
                default: ''
            },
            nickname: {
                type: String,
                default: ''
            },
        },

        data () {
            return {
                nickname: this.getNickname()
            }
        },

        created () {
            Store.bus.$on('login:login', this.getNickname)
        },

        methods: {
            getNickname () {
                const {
                    user: {
                        nickName
                    } = {}
                } = Session.get() || {}

                return nickName
            }
        }
    }
</script>

<style scoped lang="less">
    .my-nickname-container {
        margin: auto;
    }
</style>
