<template>
    <div class="left-dialog-wrap">
        <Avatar :avatar="author.avatar"/>
        <Nickname :nickname="author.nickname"/>
        <DialogItem :content="content"/>
    </div>
</template>

<script>
    import Avatar from '../../../../components/Avatar'
    import Nickname from '../../../../components/Nickname'
    import DialogItem from '../../../../components/DialogItem'

    export default {
        components: {
            Avatar,
            Nickname,
            DialogItem,
        },
        props: {
            author: {
                type: Object,
                default: {},
            },
            content: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "./index.styl"
</style>
