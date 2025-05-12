<template>
<div class="main_container">
    <h2 class="company_name">SmartCru Tech Solutions </h2>
    <h3>We lead to a success</h3>
    <p>We pride ourselves with providing services with unquestionable quality not just that, but we are expandable.</p>
    <router-link to="/about" >More</router-link>
</div>

<!--Body Content Component-->
<BodyContent/>

</template>
<script>
import BodyContent from './outsider/components/BodyContent.vue'
export default{
    name: 'HomePage',
    components: { BodyContent },
}
</script>

<style scoped>
.main_container{
    margin: 1rem auto;
    width: 100%;
    z-index: 1;
    text-align:center;
    justify-content: center;
}
.company_name{
    color: #DC143C;
}
button{
    height: 30px;
    margin: auto 0;
    background: #A9A9A9;
    border-radius: 4px;
    border: none;
}
button:hover{
    border-bottom: solid 2px blue;
    cursor: pointer; 
}
</style>