<template>
    <header class="header d-flex justify-content-between bg-black py-2 px-4 w-100 fixed-top">
        <leftHeader />
        <AdminPagesHeaderRightHeader />
    </header>
</template>


<script setup lang="ts">
    import leftHeader from './header/leftHeader.vue';
</script>

<style scoped lang="scss">
    .header{
        z-index: 1 !important;
    }
</style>