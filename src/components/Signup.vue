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
import {auth} from '../firebase/config'
export default {
    setup(){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");

        let error=ref(null);

        let signup=async()=>{
            try{
                let res=await auth.createUserWithEmailAndPassword(email.value,password.value);
                if(!res){
                    throw new Error('could not create new user')
                }
                res.user.updateProfile({displayName:displayName.value})
                console.log(res.user)
            }catch(err){
                error.value=err.message;
                console.log(error.value);
            }
            
        }

        return {displayName,email,password,signup}
    }
}
</script>

<style>

</style>