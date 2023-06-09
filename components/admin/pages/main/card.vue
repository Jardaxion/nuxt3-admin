<template lang="">
    <div class="card">
        <img :src="img" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-white">{{title}}</h5>
            <p class="card-text text-white">{{desc}}</p>
            <nuxt-link :to="hrefLink" class="btn btn-light w-100">{{textLink}}</nuxt-link>
        </div>
    </div>
</template>
<script setup lang="ts">
    let props: any = defineProps({
        title: String,
        desc: String,
        hrefLink: String,
        textLink: String,
        img: String,
    })
</script>
<style lang="scss">
    .card{
        --bs-card-bg: #212529;
    }
</style>