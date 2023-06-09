import { defineStore } from "pinia";

export const useAdminStore = defineStore('adminStore', {
    state: () => {
        return {
            adminName: 'Admin',
            adminTitle: 'Admin panel',
            activeMenu: false,
        }
    },
    actions: {
        changeActiveMenu(){
            this.activeMenu = !this.activeMenu
        }
    },
})