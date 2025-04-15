<template>
    <div class="message-container">
        <form @submit.prevent="handleMessage">
            <h3>Reply Client</h3>
            <textarea v-model="message" id="message" placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  </template>
  
  <script>
  import emitter from '@/eventBus';
  
  export default{
    name: "MessageComp",
    data(){
        return{
            message: "",
        };
    },
    methods: {
        handleMessage(){
            // Emit the message to anyone listening 
            emitter.emit('client-message', this.message)
            
            this.message = '' // Clear input after sending
        },
    }
  }
  </script>
  
  <style scoped>
    .message-container{
       width: 70%;
       margin: 4px auto;
       border: solid 1px #ddd;
       border-radius: 4px; 
       background: #DCDCDC;
    }
    h3{
        text-align: center;
    }
    form{
        display: grid;
    }
    label{
        margin: 4px 10px;
    }
    textarea{
        width: 88%;
        margin: 10px auto;
        padding: 10px;
        border-radius: 4px;
        height: 30vh;
    }
    button{
        width: 90%;
        margin: 10px auto;
        padding: 10px;
        border-radius: 4px;
    }
    button:hover{
        background: #A9A9A9;
        border-bottom: solid 2px blue;
        cursor: pointer; 
    }
  </style>