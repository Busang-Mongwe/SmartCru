<template>
    <div>
        <!-- Button to toggle the form-->
        <button @click="toggleFormVisibility">{{ showForm ? 'Cancel' : 'Project' }}</button>

        <div v-if="showForm" class="form-container">

            <label for="project-description">Project Description:</label>
            <textarea id="project-description" v-model="project.description" rows="4" placeholder="Enter project description..."></textarea>
    
            <label for="project-documentation">Documentation Link:</label>      
            <input type="text" id="project-documentation" v-model="project.documentation" placeholder="Enter documentation URL...">

            <label for="project-date">Expected Completion Date:</label>
            <input type="date" id="project-date" v-model="project.expectedDate">

            <button @click="submitProject">Submit Project</button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            showForm: false, // To toggle form visibility
            project: {
                description: "",
                documentation: "",
                expectedDate: "",
            }
        };
    },
    methods: {
        toggleFormVisibility() {
          this.showForm = !this.showForm;
        },
        submitProject() {
          if (!this.project.description || !this.project.documentation || !this.project.expectedDate) {
            alert("Please fill in all fields.");
            return;
          }

          // Simulate submission (you can replace this with API calls)
          alert(`Project Created!\nDescription: ${this.project.description}\nDocumentation: ${this.project.documentation}\nExpected Date: ${this.project.expectedDate}`);

          // Reset the form after submission
          this.project.description = '';
          this.project.documentation = '';
          this.project.expectedDate = '';
          this.showForm = false; // Hide the form after submission
        }
      }
}
</script>

<style>
.form-container {
      margin-top: 20px;
    }
    .form-container input,
    .form-container textarea,
    .form-container button {
      margin-bottom: 10px;
      padding: 10px;
      width: 100%;
    }
    button {
      cursor: pointer;
      background-color: #8eb1c7;
      color: white;
      border: solid 1px #ddd;
      padding: 10px 20px;
      border-radius: 6px;
    }
    button:hover {
      background-color: #6c9dbb;
    }

</style>