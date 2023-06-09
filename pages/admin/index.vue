<template>
    <NuxtLayout :name="'admin'">
        <section class="mainPage">
            <div class="container">
                <div class="mainPage__inner">
                    <card 
                        :title="'Заголовок'"
                        :desc="'Текст епта'"
                        :href-link="'/admin'"
                        :text-link="'Перейти'" />
                    <card 
                        :title="'Заголовок'"
                        :desc="'Текст епта'"
                        :href-link="'/admin'"
                        :text-link="'Перейти'" />
                    <card 
                        :title="'Заголовок'"
                        :desc="'Текст епта'"
                        :href-link="'/admin'"
                        :text-link="'Перейти'" />
                </div>
            </div>
        </section>
        <nuxt-link to="/admin/mainpage/settings"  class="settingMain bg-secondary" title="Перейти к настройкам главной страницы">
                <i class="fa-solid fa-gear fa-beat fa-xl text-white settingMain__icon"></i>
        </nuxt-link>
    </NuxtLayout>
</template>

<script setup lang="ts">
    import card from '~/components/admin/pages/main/card.vue';
</script>

<style lang="scss">
    .mainPage{
        &__inner{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }
    }

    .settingMain{
        padding: 10px;
        border-radius: 50%;
        position: fixed;
        bottom: 45px;
        right: 45px;
        transition: .3s ease all;
        &:hover{
            transform: scale(1.1);
        }
    }
</style>e