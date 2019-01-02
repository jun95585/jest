<template>
    <section :class="['my-avatar-container', className]">
        <Avatar :src="avatar"/>
    </section>
</template>

<script>
    import Session from '@utils/session'
    import Store from '@utils/store'

    import Avatar from '@components/Avatar'

    /**
     * 由于使用缓存数据，需要在缓冲更新时，重新获取缓存数据，所以独立成组件，更新头像
     */
    export default {
        components: {
            Avatar,
        },
        props: {
            className: {
                type: String,
                default: ''
            },
            avatar: {
                type: String,
                default: ''
            },
        },

        data () {
            return {
                img: this.getAvatar()
            }
        },

        created () {
            Store.bus.$on('login:login', this.getAvatar)
        },

        methods: {
            getAvatar () {
                const {
                    user: {
                        avatarUrl
                    } = {}
                } = Session.get() || {}

                return avatarUrl
            }
        }
    }
</script>

<style scoped lang="less">
    .avatar-container {
        width: 128rpx;
        height: 128rpx;
        margin: 20rpx;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>