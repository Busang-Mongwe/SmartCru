<template>
    <div class="invoice-comp">
        <button @click="currentComponent='PrintComp'">Print Invoice</button>
        <button @click="currentComponent='ViewComp'">View Invoice</button>
    </div>
    <component :is="currentComponent"></component>
</template>

<script>
import PrintComp from '../components/invoice/PrintComp.vue';
import ViewComp from '../components/invoice/ViewComp.vue';

export default{
    data(){
        return{
            currentComponent: "PrintComp",
        };
    },
    components:{
        PrintComp,
        ViewComp,
    }
}
</script>

<style scoped>
    .invoice-comp{
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

</style>