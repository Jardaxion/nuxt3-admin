<template>
    <div>
        <AdminPagesHeader />
        <AdminPagesHeaderMenuHeader />
        <main class="" style="background-color: #101010;">
            <slot />
        </main>
        <UNotifications />
    </div>
</template>

<script lang="ts" setup>
    import { useAdminStore } from '~/stores/adminStore';

    let adminStore = useAdminStore();

    useHead({
        title: adminStore.adminTitle
    })
</script>

<style scoped lang="scss">
    main{
        min-height: 100vh;
        padding-top: 88px;
    }
</style>