<template>
    <div class="game-wrap">
        <DialogCards :dialog="dialog" :type="dialog.type" :key="dialog.id" v-for="dialog in dialogs"></DialogCards>
        <Tools/>
    </div>
</template>

<script>
    /* 页面组件 */
    import DialogCards from './components/DialogCard'
    import Tools from './components/Tools'

    export default {
        components: {
            DialogCards,
            Tools,
        },
        data () {
            return {
                dialogs: [
                    {
                        author: {
                            nickname: 1,
                        },
                        content: 'lala'
                    },
                    {
                        author: {
                            nickname: 2,
                        },
                        content: 'lalala'
                    },
                ]
            }
        },
        created () {
            this.dialogs = [
                {
                    author: {
                        nickname: 1,
                    },
                    content: 'lala'
                },
                {
                    author: {
                        nickname: 2,
                    },
                    content: 'lalala'
                },
            ]
        }
    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "./index.styl"
</style>
