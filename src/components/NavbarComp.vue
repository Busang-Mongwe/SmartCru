<template>
    <div class="navbar">
        
        <!--Users Navbar-->
        <ul v-if="user">
            <li><router-link to="/manage">
                <font-awesome-icon icon="gears" class="icon"/>
                <span>Manage</span>
            </router-link></li>

            <li><router-link to="/invoice">
                <font-awesome-icon icon="file-invoice" class="icon"/>
                <span>Invoice</span>
            </router-link></li>

            <li><router-link to="/inbox">
                <font-awesome-icon icon="envelope" class="icon"/>
                <span>Inbox</span>
            </router-link></li>

            <li><router-link to="/profile">
                <font-awesome-icon icon="user-circle" class="icon"/>
                <span>Profile</span>
            </router-link></li>
        </ul>
        
        <!--Admin Navbar-->
        <ul v-if="admin">
            <li><router-link to="/admin-project">
                <font-awesome-icon icon="gears" class="icon"/>
                <span>Project</span>
            </router-link></li>

            <li><router-link to="/admin-invoice">
                <font-awesome-icon icon="file-invoice" class="icon"/>
                <span>Invoice</span>
            </router-link></li>

            <li><router-link to="/admin-inbox">
                <font-awesome-icon icon="envelope" class="icon"/>
                <span>Inbox</span>
            </router-link></li>

            <li><router-link to="/admin-user">
                <font-awesome-icon icon="users" class="icon"/>
                <span>Users</span>
            </router-link></li>

            <li><router-link to="/admin-profile">
                <font-awesome-icon icon="user-circle" class="icon"/>
                <span>Profile</span>
            </router-link></li>

        </ul>
        <button>
            <font-awesome-icon icon="right-from-bracket" class="icon"/>
            <span>Log out</span>
        </button>
    </div>
    <router-view></router-view>
</template>

<script>
export default{
    name: "NavbarComp",
    data(){
        return{
            user: false,
            admin: true,
        };
    },
}
</script>

<style scoped>
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
    }

    
    @media only screen and (max-width: 960px){
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