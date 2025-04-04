<template>
    <div class="manage-container" >
        <ProjectComp/>
    </div>
</template>
<script>
import ProjectComp from '../components/manage/ProjectComp.vue';

export default{
    components: {
        ProjectComp,
    }
}

</script>

<style>
.manage-container{
    position: absolute;
    top: 24px;
    height: 32vh;
    width: 60%;
    background-color: white;
}
</style>