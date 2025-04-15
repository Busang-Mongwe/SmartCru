<template>
    <div class="invoice-comp">
        <button @click="currentComponent='InvoiceComp'">Generate Invoice</button>
        <button @click="currentComponent='StatusComp'">Invoice Status</button>
    </div>
    <component :is="currentComponent"></component>
</template>

<script>
import InvoiceComp from '../components/admin-invoice/InvoiceComp.vue';
import StatusComp from '../components/admin-invoice/StatusComp.vue';

export default{
    name: 'AdminInvoice',

    data(){
        return{
            currentComponent: 'InvoiceComp',
        };
    },
    components:{
        InvoiceComp,
        StatusComp,
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