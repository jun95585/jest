<template>
    <section :class="['my-info-container', className]" >
        <Avatar :avatar="avatar"/>
        <Nickname :nickname="nickname"/>
    </section>
</template>

<script>
// Use Vuex

    import Avatar from '../Avatar'
    import Nickname from '../Nickname'

    export default {
        components: {
            Avatar,
            Nickname,
        },

        name: 'ActionSheet',
        props: {
            className: {
                type: String,
                default: '',
            },
            nickname: {
                type: String,
                default: '',
            },
            avatar: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "./index.styl"
</style>
