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

<button>
    <font-awesome-icon icon="right-from-bracket" class="icon"/>
    <span>Sign-in</span>
</button>

</div>

<router-view></router-view>
</template>

<script>
export default{
    name: 'ToolBar'
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
    width: 86%;
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
    margin: auto 0;
    background: #A9A9A9;
    border-radius: 4px;
    border: none;
}
button:hover{
    border-bottom: solid 2px blue;
    cursor: pointer; 
}
.icon{
    padding: 0 4px;
    color: black;
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