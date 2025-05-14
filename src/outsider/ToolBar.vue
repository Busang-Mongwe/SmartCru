<template>
<div class="navbar">

<div class="logo">
    <router-link to="/about">
        <img src="../assets/logo.png"
        alt="Logo"
        height="36px"
        width="36px"
    >
    </router-link>
</div>
    
<ul>
    <li><router-link to="/">
        <font-awesome-icon icon="house" class="icon"/>
          <span>Home</span>
    </router-link></li>

    <li><router-link to="/about">
        <font-awesome-icon icon="user-circle" class="icon"/>
        <span>About</span>
    </router-link></li>

    <li><router-link to="/services">
        <font-awesome-icon icon="gears" class="icon"/>
        <span>Services</span>
        </router-link></li>

    <li><router-link to="/contact">
        <font-awesome-icon icon="user-circle" class="icon"/>
        <span>Contact</span>
        </router-link></li>
</ul>

<button @click="showDialog = true" class="open-btn">
    <font-awesome-icon icon="right-from-bracket" class="icon"/>
    <span>Sign-in</span>
</button>

</div>

<div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
    <div class="modal">
        <AuthComponent/>
    </div>
</div>

<router-view></router-view>
</template>

<script>
import AuthComponent from '@/components/AuthComponent.vue';
export default{
    name: 'ToolBar',
    components: { AuthComponent },
    data(){
        return{
            showDialog: false,
        }
    },
    methods: {
        closeDialog(){
            this.showDialog = false
        }
    }
}
</script>
<style scoped>
.logo{
    margin: auto 0;
}
.logo img{
    border: 1px solid #eee;
    border-radius: 20px;
}
.navbar{
    display: flex;
    width: 100%;
    background: #DCDCDC;
    color: black;
}
.navbar ul{
    display: flex;
    width: 80%;
    margin: 5px;
    padding: 10px;
    list-style-type: none;
}
.navbar ul li{
    margin: 2px 10px;
    border: solid 1px #ddd;
    background: #A9A9A9;
    padding: 8px 0;
    border-radius: 4px;
}
.navbar a{
    text-decoration: none;
    color: black;
    padding: 4px 16px;
}
.navbar a:hover{
    border-bottom: solid 2px blue;
    cursor: pointer;
}
button{
    height: 30px;
    margin: auto;
    background: #A9A9A9;
    border-radius: 4px;
    border: none;
}
button:hover{
    background: #555;
    cursor: pointer; 
}
.icon{
    padding: 0 4px;
    color: black;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 16px;
  border-radius: 10px;
  width: 80%;
  max-width: 700px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}
@media only screen and (max-width: 960px){
    .logo{
        width: 100%;
        margin: 6px 0;
        text-align: center;
    }
    .logo img{
        height: 180px;
        width: 80%;
        border: 1px solid #eee;
        border-radius: 20px;
    }
    .navbar{
        display: inline-grid;
    }
    .navbar ul{
        display: inline-grid;
        width: 40%;
        margin: 0 auto;
    }
    .navbar ul li{
        text-align: center;
    }
    button{
        width: 100%;
        margin: -5px auto 10px;
    }
}
</style>