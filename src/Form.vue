<template>

    <div class='flex flex-col items-center h-screen gap-y-5'>
        <h1 class="text-slate-200 text-5xl font-bold">Welcome on Job<span class="text-emerald-300 text-8xl">.</span></h1>
        <p v-if="error" class='border border-red-500 p-3 rounded text-red-500'>Wrong username or password!
        </p>
        <form method="POST" @submit.prevent="login" class='rounded border border-emerald-500 w-80 sm:w-96 basis-96 flex flex-col space-y-5 items-center justify-center'>
            <h2 class='text-xl text-slate-400'>Login to see the available jobs</h2>
            <!-- <Field v-for="field in fields" v-bind="field" :data="data"/> -->
            <!-- <label :for="content.toLowerCase()">{{ content }}</label>
    <input type='text' :name='content' :id='content.toLowerCase()' v-model="data">
    <br/> -->

            <div class='field flex flex-col gap-y-2'>
                <label for='username'>Username</label>
                <input type='text' name='username' id='username' v-model="data.username" class='text-slate-200 p-2 bg-slate-900 rounded border border-emerald-500'>
            </div>
            <div class='field flex flex-col gap-y-2'>
                <label for='password'>Password</label>
            <input type='text' name='password' id='password' v-model="data.password" class='text-slate-200 p-2 bg-slate-900 rounded border border-emerald-500'><p></p>
            </div>
            
            <button type='submit' class='rounded px-4 py-2 bg-emerald-500 font-bold hover:bg-emerald-600 ease-out duration-300 transition'>Log in</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue'
// import Field from './components/Field.vue'

// const fields = ref(
//     [{id: 0, content: 'Username'}, {id: 1, content: 'Password'}]
// )
const error = ref(false)

const data = ref({
    username: '', password: ''
})

const login = () => {
    let { username, password } = data.value

    username = username.trim()
    password = password.trim()

    if (username === 'john.doe' && password === 'test123') {
        error.value = false
        return
    }
    error.value = true;
    data.value.username = ''
    data.value.password = ''
}

/*
{
    "username": "john.doe",
    "password" : "test123"
}


*/
</script>