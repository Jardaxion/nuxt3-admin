<template>
    <div class="header__menu-background position-absolute top-0 start-0 w-100 h-100 bg-black z-2" 
        :class="{'active': adminStore.activeMenu}"
        @click.self="changeActiveMenu()"></div>
    <div class="header__menu d-flex position-absolute w-25 h-100 bg-black p-5 z-3" 
        :class="{'active': adminStore.activeMenu}">
        <div class="header__menu-inner position-relative w-100">
            <i class="fa-solid fa-xmark text-white fa-xl position-absolute end-0 top-0 header__menu-close"
            @click="changeActiveMenu()"></i>
            <nuxt-link class="header__menu-link text-white fs-5 text-decoration-none position-relative" to="/admin/routes/show">Роуты</nuxt-link>
        </div>
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
            transition: .3s ease all;
            transform: translateX(-100%);
            &.active{
                transform: translate(0);
            }
            &-background{
                opacity: 0;
                pointer-events: none;
                transition: .3s ease all;
                &.active{
                    opacity: 0.5;
                    pointer-events: all;
                }
            }
            &-close{
                cursor: pointer;
            }
            &-link{
                &:first-of-type{
                    padding-top: 15px;
                }
                &:not(:last-of-type){
                    margin-top: 10px;
                }
                &:hover{
                    &::after{
                        width: 100%;
                    }
                }
                &::after{
                    width: 0;
                    content: '';
                    height: 2px;
                    background: white;
                    left: 50%;
                    transform: translateX(-50%);
                    position: absolute;
                    bottom: -3px;
                    transition: .3s ease all;
                }
            }
        }
    }
</style>