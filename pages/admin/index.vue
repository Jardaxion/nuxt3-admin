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
</style>