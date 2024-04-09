<template>
  <h1>Login</h1>
  <form v-on:submit.prevent="login">
    
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        
        let email=ref("");
        let password=ref("");
        let login=()=>{
            console.log(email.value,password.value)
        }

        return {email,password,login}
    }
}
</script>

<style>

</style>