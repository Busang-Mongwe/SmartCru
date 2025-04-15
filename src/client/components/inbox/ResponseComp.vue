<template>
    <div class="response-container">
        <div id="response">
            {{ response }}
        </div>
        <p id="responder">
           From: {{ name }} <!--Email of the person who replied-->
        </p>
    </div>
</template>

<script>
export default{
    name: "ResponseComp",

    data(){
        return{
            response: "No reply",
            name: "N/A"
        };
    }
}
</script>

<style scoped>
    .response-container{
        width: 70%;
        margin: 4px auto;
        border: solid 1px #ddd;
        border-radius: 4px; 
        background: #DCDCDC;   
    }
    #response{
        height: 30vh;
        border: dashed 1px black;
        border-radius: 4px;
        padding: 10px;
        margin: 5px;
    }
    #responder{
        margin: 5px;
        padding: 10px;
        border-bottom: solid 1px black;
    }

</style>