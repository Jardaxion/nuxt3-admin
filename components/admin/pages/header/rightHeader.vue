<template lang="">
    <div class="header__right d-flex align-items-center">
        <nuxt-link to="/admin/settings" title="Настройки">
            <i class="fa-solid fa-gear fa-xl text-white header__settings me-3"></i>
        </nuxt-link>
        <nuxt-link to="/admin/logout" title="Logout">
            <i class="fa-solid fa-user fa-xl text-white header__profile"></i>
        </nuxt-link>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
    .header{
        &__settings{
            transition: .3s ease all;
            &:hover{
                transform: rotate(90deg);
            }
        }

        &__profile{
            transition: .3s ease all;
            &:hover{
                transform: translateY(-2px);
            }
        }
    }
</style>