import {
    defineStore
} from "pinia";

export const useUserStore = defineStore("UserStore", {
    //state
    state: () => ({
        user: []
    }),
    //getters
    getters: {
        getUser(state) {
            return state.user
        }
    },
    //actions
    actions: {

    },
})