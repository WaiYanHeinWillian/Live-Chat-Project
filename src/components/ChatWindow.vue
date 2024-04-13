<template>
  <div class="chat-window">
    <div class="messages" v-for="messageData in messageDatas" :key="messageData.id">
        <div class="single">
            <span class="created-at">{{messageData.created_At}}</span>
            <span class="name">{{messageData.name}}</span>
            <span class="message">{{messageData.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { db } from '../firebase/config'
export default {
    setup(){

        let messageDatas=ref([]);

        db.collection('messages').orderBy("created_At").onSnapshot((snap)=>{
            let results=[];
            snap.docs.forEach((doc)=>{
                let document={id:doc.id,...doc.data()};
                results.push(document);
            })
            
            messageDatas.value=results;
        })
        return{messageDatas};
    }
}
</script>

<style>
    .chat-window{
        background: #fafafa;
        padding: 30px 20px;
    }
    .single{
        margin: 18px 0;
    }
    .created-at{
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .name{
        font-weight: bold;
        margin-right: 6px;
    }
    .messages{
        max-height: 400px;
        overflow: auto;
    }
</style>