import { defineStore } from "pinia";

export let useAdminStore = defineStore('adminStore', {
    state: () => {
        return {
            adminName: 'Admin'
        }
    },
})