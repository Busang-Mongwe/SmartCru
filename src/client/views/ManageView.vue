<template>
    <div class="manage-btn">
        <button @click="componentId = 'ProjectComp'">Project</button>
        <button @click="componentId = 'StatusComp'">Status</button>

        <component :is="componentId"></component>
    </div>
</template>

<script> 
import ProjectComp from '../components/manage/ProjectComp.vue';
import StatusComp from '../components/manage/StatusComp.vue';

export default{
    name: 'ManageView',
    data(){
        return{
            componentId: ''
        };
    },
    components: {
        ProjectComp,
        StatusComp
    }
}

</script>
<style scoped>
.manage-btn{
    position: absolute;
    top: 108px;
    background: none;
    border: none;
}
button{
    padding: 8px;
    margin: 0 4px;
    width: 90px;
}
</style>