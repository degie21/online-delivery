<template>
    <div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        in</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not yet registered?
                <router-link to="/register" href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create your account</router-link>
            </p>
            <div class="flex flex-col gap-5 items-center">
                <div class="w-full mt-10 text-center relative">
                    <div class="h-px w-full absolute border-b-2 border-slate-200 top-0 bottom-0 my-auto -z-1"></div>
                    <span class="z-10 relative bg-white px-3">
                        Or continue with
                    </span>
                </div>
                <a class="border-2 py-2 px-8 rounded-md border-slate-200 hover:scale-105 transition-all duration-300 flex items-center gap-3" href="#">
                    <img class="w-6" :src="googleIcon" alt=""> Google
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import googleIcon from '../assets/logos/Google.svg'


export default {
    data(){
        return{
            googleIcon : googleIcon
        }
    }
}
</script>

<style lang="scss" scoped></style>