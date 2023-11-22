// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', rel: 'stylesheet'},
            ]
        }
    },
    modules: [
        '@pinia/nuxt',
        '@nuxt/ui'
    ],
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        '@sweetalert2/theme-dark',
    ],
})
