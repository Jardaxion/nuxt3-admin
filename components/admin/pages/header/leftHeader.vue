<template>
    <div class="header__left d-flex align-items-center">
        <div class="header__menu d-flex flex-column me-3" @click="changeActiveMenu()">
            <div class="header__menu-item w-50 bg-light"></div>
            <div class="header__menu-item w-75 bg-light"></div>
            <div class="header__menu-item w-100 bg-light"></div>
        </div>
        <NuxtLink to="/admin" class="header__logo text-decoration-none fs-3 text-white my-0">{{ adminStore.adminName }}</NuxtLink>
    </div>
</template>

<script setup lang="ts">
    import { useAdminStore } from '~/stores/adminStore';

    let adminStore = useAdminStore();

    let changeActiveMenu = () => {
        adminStore.changeActiveMenu();
    }
</script>

<style scoped lang="scss">
    .header{
        &__menu{
            width: 25px;
            cursor: pointer;
            &:hover{
                .header__menu-item{
                    width: 100% !important;
                }
            }
            &-item{
                height: 2px;
                transition: .3s ease all;
                &:nth-of-type(2){
                    margin: 5px 0;
                }
            }
        }

        &__logo{
            transition: .3s ease all;
            &:hover{
                text-shadow: 0 0 15px white;
            }
        }
    }
</style>