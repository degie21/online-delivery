import {
    defineStore
} from "pinia";

export const useProductStore = defineStore("ProductStore", {
    //state
    state: () => ({
        products: []
    }),
    //getters
    getters: {
        getProdcuts(state) {
            return state.products
        }
    },
    //actions
    actions: {

    },
})