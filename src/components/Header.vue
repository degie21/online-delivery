<template>
    <div class="w-100 px-[5%] bg-slate-100">
        <div class="flex flex-row justify-between h-20 items-center text-slate-900 ">
            <div class="text-2xl">
                Logo Here
            </div>
            <div class="flex flex-row gap-10">
                <router-link to="/" href="#" class="hover:text-slate-500 transition-all duration-300">Home</router-link>
                <router-link to="/products" href="#" class="hover:text-slate-500 transition-all duration-300">Products</router-link>
                <router-link to="/login" href="#" class="hover:text-slate-500 transition-all duration-300">Login</router-link>
                <router-link to="/register" href="#" class="hover:text-slate-500 transition-all duration-300">Register</router-link>
                <a href="#" class="hover:text-slate-500 transition-all duration-300">
                    <ShoppingCartIcon class="h-6 w-6" />

                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
export default {
    components:{
        ShoppingCartIcon
    }

}
</script>

<style lang="scss" scoped></style>