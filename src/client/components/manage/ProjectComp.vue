<template>
    <div class="project-container">
        <form @submit.prevent="submitForm">
            <h3>Request Project</h3>

            <label>Project Name <span>*</span></label>
            <input type="text" v-model="form.projectName" placeholder="Enter Project Name" required>

            <label>Description <span>*</span></label>
            <textarea v-model="form.description" placeholder="Project description" scroll></textarea>

            <label>Attach Documents <span>*</span></label>
            <input @change="handleFileUpload" type="file" multiple required>

            <label>Expected Date</label>
            <input type="date" v-model="form.dueDate" id="date" required>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default{
    name: "ProjectComp",
    data(){
        return{
            form: {
                projectName: '',
                description: '',
                documents: [],
                dueDate: '',
            },
        };
    },
    methods: {
        handleFileUpload(event){
            this.form.documents = Array.from(event.target.files)
        },
        submitForm(){
            console.log('Form Data', this.form)

            //Send Data to API endpoint

            //Reset the form after submtting
            this.form.projectName = ""
            this.form.description = ""
            this.form.documents = []
            this.form.dueDate = ""
        },
    }
    }
</script>

<style scoped>
    .project-container{
       width: 70%;
       margin: 4px auto;
       border: solid 1px #ddd;
       border-radius: 4px; 
       background: #DCDCDC;
    }
    h3{
        text-align: center;
    }
    form{
        display: grid;
    }
    label{
        margin: 4px 10px;
    }
    input, textarea{
        margin: 4px 10px;
        padding: 10px;
    }
    span{
        color: red;
    }
    #date{
        width: 100px;
    }
    button{
        width: 90%;
        margin: 10px auto;
        padding: 10px;
        border-radius: 4px;
    }
    button:hover{
        background: #A9A9A9;
        border-bottom: solid 2px blue;
        cursor: pointer; 
    }
    @media only screen and (max-width: 960px){
        .project-container{
            margin: 30px auto;
        }
    }

</style>