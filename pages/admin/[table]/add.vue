<template>
    <NuxtLayout name="admin">
        <div class="addPage">
            <div class="container">
                <div class="addPage__inner">
                    <div class="tablePage__top d-flex justify-content-between align-items-center">
                        <p class="tablePage__title text-white fs-2">{{ route.params.table }}</p>
                        <nuxt-link class="btn btn-primary me-2" :to="'/admin/' + route.params.table + '/show'">Вернуть</nuxt-link>
                    </div>
                    <div class="addPage__inputs p-4 bg-dark rounded d-flex flex-column align-items-end">
                        <div class="form-floating mb-3 w-100">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Название</label>
                        </div>
                        <div class="form-floating mb-3 w-100">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">URL</label>
                        </div>
                        <button type="submit" class="btn btn-success fs-5 px-4">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    const route:any = useRoute();
</script>