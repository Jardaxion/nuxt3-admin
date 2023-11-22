<template>
    <NuxtLayout name="login-admin">
        <p class="text-center fs-4 text-white w-100">Вход</p>
        <AdminUIInputAdmin class="form-floating" :type="'login'" :placeholder="'Логин'" />
        <AdminUIInputAdmin class="form-floating" :type="'password'" :placeholder="'Пароль'" />
        <button type="submit" class="btn btn-success w-100 mb-2 py-1">Войти</button>
        <button type="submit" class="btn btn-danger w-100 py-1">Вернуться на сайт</button>
    </NuxtLayout>
</template>

<script setup lang="ts">
    useHead({
        title: 'Аунтетификация'
    })
</script>

<style scoped lang="scss">
    .form-floating{
        width: 600px !important;
    }
</style>