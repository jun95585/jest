<template>
    <section :class="['avatar-container', className]">
        <img :src="avatar">
    </section>
</template>

<script>
    export default {
        props: {
            className: {
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
