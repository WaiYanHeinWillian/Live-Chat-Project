<template>
  <div class="chat-window">
    <div class="messages">
        <div class="single" v-for="messageData in formattedMessages" :key="messageData.id">
            <span class="created-at">{{messageData.created_At}}</span>
            <span class="name">{{messageData.name}}</span>
            <span class="message">{{messageData.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { db } from '../firebase/config'
import {formatDistanceToNow} from 'date-fns'
export default {
    setup(){

        let messageDatas=ref([]);

        let formattedMessages=computed(()=>{
            return messageDatas.value.map((msg)=>{
                let formatTime=formatDistanceToNow(msg.created_At.toDate());
                return {...msg,created_At:formatTime}
            })
        });

        db.collection('messages').orderBy("created_At").onSnapshot((snap)=>{
            let results=[];
            snap.docs.forEach((doc)=>{
                let document={id:doc.id,...doc.data()};
                if(doc.data().created_At){
                    results.push(document);
                }// doc.data().created_At && results.push(document);
            })
            
            messageDatas.value=results;
        })
        return{messageDatas,formattedMessages};
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