<template>
  <form>
    <textarea placeholder="Text message and press Enter to send" v-model="message" v-on:keypress.enter="handleSubmit"></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'
import { timeStamp } from '../firebase/config';
import getUser from '../composables/getUser';
import useCollection from '../composables/useCollection';
export default {
    setup(){
        let {user}=getUser();

        let {error,addDoc}=useCollection('messages');

        let message=ref("");
        let handleSubmit=async()=>{
            let chat={
            message:message.value,
            name:user.value.displayName,
            created_At:timeStamp()
        }
        // console.log(chat);
        await addDoc(chat);
        message.value="";
        };

        

        return {message,handleSubmit,error}
    }
}
</script>

<style>
    form{
        margin: 10px;
    }
    textarea{
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
</style>