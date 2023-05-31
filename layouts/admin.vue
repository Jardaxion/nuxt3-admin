<template>
    <div>
        <AdminPagesHeader />
        <main>
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
    import Swal from 'sweetalert2';

    useHead({
        title: 'Админ панель'
    })
</script>