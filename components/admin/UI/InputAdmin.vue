<template>
    <div class="form-floating mb-3 w-100">
        <input :type="type" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">{{ placeholder }}</label>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        placeholder: String,
        type: String,
    })
</script>