<template>
  <h1>Login to my chatroom app</h1>
  <form v-on:submit.prevent="login">
    
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">
      {{error}}
    </div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin'
export default {
    setup(props,context){
        
        let email=ref("");
        let password=ref("");

        let {error,signin}=useLogin();

        let login=async()=>{
            let res=await signin(email.value,password.value);
            if(res){
              // console.log(res.user)
              context.emit('enterChatroom');
            }
        }

        return {email,password,login,error}
    }
}
</script>

<style>

</style>