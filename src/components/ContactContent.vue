<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="form.name" type="text" id="name" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="form.email" type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea v-model="form.message" id="message" required></textarea>
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Sending...' : 'Send Message' }}
      </button>

      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      loading: false,
      successMessage: '',
    }
  },
  methods: {
    async submitForm() {
      if (!this.form.name || !this.form.email || !this.form.message) {
        alert('Please fill out all fields.')
        return
      }

      this.loading = true
      this.successMessage = ''

      // Simulate sending data (e.g., to a backend)
      setTimeout(() => {
        this.successMessage = 'Message sent successfully!'
        this.form = { name: '', email: '', message: '' }
        this.loading = false
      }, 1500)
    },
  },
}
</script>

<style scoped>
.contact-form {
  max-width: 500px;
  background-color: #DCDCDC;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: 600;
}

input,
textarea {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #aaa;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #808080;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
button:hover{
    background-color:#3b3b3b;
    cursor: pointer;
}
button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.success {
  margin-top: 15px;
  color: green;
  text-align: center;
}
</style>
