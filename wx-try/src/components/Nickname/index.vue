<template>
    <section :class="['nickname-container', className]" >
        {{ nickname }}
    </section>
</template>

<script>
    export default {
        props: {
            className: {
                type: String,
                default: '',
            },
            nickname: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "./index.styl"
</style>
