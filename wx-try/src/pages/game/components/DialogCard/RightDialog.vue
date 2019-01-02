<template>
    <div class="right-dialog-wrap">
        <DialogItem :content="content"/>
        <Avatar :avatar="author.avatar"/>
    </div>
</template>

<script>
    import DialogItem from '@components/DialogItem'
    import Avatar from '@components/Avatar'

    export default {
        components: {
            DialogItem,
            Avatar,
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
