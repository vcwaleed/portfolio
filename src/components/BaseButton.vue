<template>
<button @click="onClick" :class="computedClasses" class="p-2 px-24 md:px-9 rounded transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
    <slot></slot>
</button>
</template>

<script>
export default {
    props: {
        onClick: Function,
        extraClasses: {
            type: String,
            default: "bg-btn_col mt-3 text-text_col border border-transparent hover:border-btn_col hover:bg-hov_col hover:text-text_col",
        },
    },
    computed: {
        computedClasses() {
            return this.extraClasses;
        },
    },
};
</script>
