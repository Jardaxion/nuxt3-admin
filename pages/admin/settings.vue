<template>
    <NuxtLayout name="admin">
        <section class="settings">
            <div class="container">
                <div class="settings__inner d-flex">
                    <div class="settings__left">
                        <ul class="list-group position-sticky top">
                            <a href="" class="list-group-item text-white" @click.prevent="changeActive(index)" :class="{active: active == index}" v-for="(page, index) in adminSettings.pages">{{page.title}}</a>
                        </ul>
                    </div>
                    <div class="settings__right" :class="{active: active == title}" v-for="(page, title) in adminSettings.pages">
                        <p class="text-center text-white fs-2">{{page.title}}</p>
                        <div class="settings__page border border-secondary text-white p-4 rounded d-flex flex-column">
                            <div class="mb-3" v-for="input in page.inputs">
                                <label for="exampleInputEmail1" class="form-label">{{input.title}}</label>
                                <input :type="input.type" class="form-control" id="exampleInputEmail1" aria-describedby="siteName">
                                <div id="siteName" class="form-text text-white-50" v-if="input.subtitle != ''">{{ input.subtitle }}</div>
                                <hr class="mb-0">
                            </div>
                            <button class="btn btn-success ms-auto">Применить</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
<script setup>
    import adminSettings from "@/app/adminSettings.json";
    import {ref} from 'vue';

    let active = ref("MainSettings");

    const changeActive = (namePage) => {
        active.value = namePage;
    }
</script>
<style lang="scss" scoped>
    .settings{
        *{
            transition: .3s ease all;
        }
        &__left{
            width: 25%;
            margin-right: 30px;
            top: 0;
            margin-top: 63px;
        }
        &__right{
            display: none;
            &.active{
                display: block;
            }
        }
        &__page{
            background: #212529;
        }
        &__right{
            width: 70%;
        }
        .list-group-item{
            --bs-list-group-bg: #212529;
            --bs-list-group-border-color: #212529;
            transition: .3s ease all;
            &:hover{
                --bs-list-group-bg: #15171a;
                --bs-list-group-border-color: #15171a;
            }
        }
        .list-group{
            top: 70px;
        }
    }
</style>