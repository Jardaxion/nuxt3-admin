<template lang="">
    <header class="d-flex justify-content-between bg-black py-2 px-4">
        <div class="header__left d-flex align-items-center">
            <div class="header__menu d-flex flex-column me-3">
                <div class="header__menu-item w-100 bg-light"></div>
                <div class="header__menu-item w-100 bg-light"></div>
                <div class="header__menu-item w-100 bg-light"></div>
            </div>
            <p class="header__logo fs-3 text-white my-0">{{ adminStore.adminName }}</p>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { useAdminStore } from '~/stores/adminStore';

    let adminStore = useAdminStore();
</script>

<style scoped lang="scss">
    .header{
        &__menu{
            width: 25px;
            cursor: pointer;
            &-item{
                height: 2px;
                &:nth-of-type(2){
                    margin: 5px 0;
                }
            }
        }
    }
</style>