<template>
  <div class="auth-container">
    <h2 v-if="isLogin">Login</h2>
    <h2 v-else>Register</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="name" v-if="!isLogin" placeholder="Full Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">{{ isLogin ? "Login" : "Register" }}</button>
    </form>
    <p @click="toggleForm">{{ isLogin ? "Create an account" : "Already have an account? Login" }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
    handleSubmit() {
      if (this.isLogin) {
        // Simulate Login
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === this.email && storedUser.password === this.password) {
          alert("Login successful!");
          window.location.href = "/manage";
          //this.$router.push('/manage')
        } else {
          alert("Invalid credentials!");
        }
      } else {
        // Simulate Registration
        const newUser = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        alert("User registered successfully!");
        this.isLogin = true;
      }
    },
  },
};
</script>

<style scoped>
template{
    font-family:Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
}
.auth-container{
    border: solid 1px #1d1d1d;
    border-radius: 4px;
    padding: 10px;
    width: 80%;
    margin: 60px auto;
    text-align: center;
}
input{
    display: block;
    width: 94%;
    margin: 10px 0;
    padding: 8px;
}
button{
    width: 100%;
    padding: 8px;
    background-color: #404040;
    color: white;
    border: none;
}
button:hover{
    background-color: #1d1d1d;
    cursor: pointer;
}
p{
    color: blue;
    cursor: pointer;
}
</style>
