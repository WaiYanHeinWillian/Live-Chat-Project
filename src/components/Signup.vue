<template>
  <h1>Sign Up</h1>
  <form v-on:submit.prevent="signup">
    <input type="text" placeholder="Display Name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        let signup=()=>{
            console.log(displayName.value,email.value,password.value)
        }

        return {displayName,email,password,signup}
    }
}
</script>

<style>

</style>