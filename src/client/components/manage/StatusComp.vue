<template>
    <div class="status-container">
        <div id="pending">
            <h1>Pending</h1>
        </div>

        <div id="progress">
            <h1>In Progress</h1>
        </div>

        <div id="completed">
            <h1>Completed</h1>
        </div>
    </div>
</template>

<script>
export default{
    name: "StatusComp"
}
</script>

<style scoped>
    .status-container{
        width: 70%;
        margin: 4px auto;
        padding: 10px 0;
        border: solid 1px #ddd;
        border-radius: 4px; 
        background: #DCDCDC;
    }
    .status-container div{
        text-align: center;
        width: 80%;
        margin: 8px auto;
        border-radius: 4px;
        padding: 10px;
    }
    #pending{
        background: red;
    }
    #progress{
        background: yellow;
    }
    #completed{
        background: green;
    }
    @media only screen and (max-width: 960px){
        .status-container{
            margin: 30px auto;
        }
    }
</style>