<template>
    <div>
        <main class="loginLayout d-flex align-items-center justify-content-center" style="background-color: #101010;">
            <div class="login__inputs p-4 bg-dark rounded d-flex flex-column align-items-end">
                <slot />
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
    main{
        height: 100vh;
    }
</style>