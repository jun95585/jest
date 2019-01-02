<template>
    <div class="dialog-container" :class="className || ''" >
        {{content}}
    </div>
</template>

<script>
    export default {
        props: {
            content: {
                type: String,
                default: '',
            },
            className: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "./index.styl"
</style>
