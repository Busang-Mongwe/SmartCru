<template>
    <div class="invoice-btn">
        <button @click="componentId='ViewComp'">View</button>
        <button @click="componentId='OptionComp'">Option</button>
    </div>
    <component :is="componentId"></component>
</template>

<script>
import ViewComp from '../components/invoice/ViewComp.vue';
import OptionComp from '../components/invoice/OptionComp.vue';

export default{
    data(){
        return{
            componentId: "",
        };
    },
    components: {
        ViewComp,
        OptionComp,
    }
}
</script>

<style>
.invoice-btn{
    position: absolute;
    top: 152px;
    left: 24vh;
}
button{
    padding: 8px;
    margin: 0 4px;
    width: 90px;
}
</style>