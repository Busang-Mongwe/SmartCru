<template>
    <div class="manage-comp">
        <button @click="currentComponet='ProjectComp'">Project</button>
        <button @click="currentComponet='StatusComp'">Status</button>
    </div>
    <component :is="currentComponet"></component>
</template>

<script>
import ProjectComp from '../components/manage/ProjectComp.vue';
import StatusComp from '../components/manage/StatusComp.vue';

    export default{
        name: "ManageView",
        data(){
            return{
                currentComponet: 'ProjectComp'
            };
        },
        components: {
            ProjectComp,
            StatusComp,
        }
    }
</script>

<style scoped>
    .manage-comp{
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
        .manage-comp{
            margin: 20px auto;
        }
    }
</style>