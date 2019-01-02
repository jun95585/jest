<template>
    <div class="tools-wrap" :class="type">
        <input
            class="input-area"
            :placeholder="'请输入'"
            :type="'text'"
            placeholder-style="color: #A7BBC4; line-height: 52rpx;"
            :cursor-spacing="52"
            :adjust-position="true"
            @blur="handleBlur"
            @focus="handleFocus"
            @input="handleInput"
            :value="inputValue"
        />
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: [],
    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "./index.styl"
</style>
