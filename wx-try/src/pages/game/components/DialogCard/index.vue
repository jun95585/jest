<template>
    <div class="dialog-wrap" :class="type">
        <LeftDialog v-if="!fromMe" :author="dialog.author" :content="dialog.content"/>
        <RightDialog v-if="fromMe" :author="dialog.author" :content="dialog.content"/>
    </div>
</template>

<script>
    import LeftDialog from './LeftDialog.vue'
    import RightDialog from './RightDialog.vue'

    export default {
        components: {
            LeftDialog,
            RightDialog,
        },
        props: ['dialog', 'type'],

        computed: {
            fromMe () {
                return this.type === 'mine'
            },
        }

    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "./index.styl"
</style>
