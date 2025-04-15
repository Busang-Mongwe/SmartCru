<template>
    <div class="inbox-comp">
        <button @click="currentComponet='MessageComp'">Message</button>
        <button @click="currentComponet='ResponseComp'">Reply</button>
    </div>
    <component :is="currentComponet"></component>
</template>

<script>
import MessageComp from '../components/admin-inbox/MessageComp.vue';
import ResponseComp from '../components/admin-inbox/ResponseComp.vue';

    export default{
        name: "InboxView",
        data(){
            return{
                currentComponet: 'MessageComp'
            };
        },
        components: {
            MessageComp,
            ResponseComp,
        }
    }
</script>

<style scoped>
    .inbox-comp{
        margin: 10px auto;
        width: 25%;
        text-align: center;
        border: 2px solid  #ddd;
        padding: 5px;
    }
    button{
        margin: 4px;
        padding: 10px 20px;
        border-radius: 4px;
    }
    button:hover{
        background: #A9A9A9;
        border-bottom: solid 2px blue;
        cursor: pointer; 
    }
    @media only screen and (max-width: 960px){
        .inbox-comp{
            margin: 30px auto;
        }
    }

</style>