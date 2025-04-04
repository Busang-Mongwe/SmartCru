<template>
    <div>
        <h3>{{ fullName }}</h3>
        <nav>
            <ul>
                <li><router-link to="/">
                    <font-awesome-icon icon="cogs" />
                    Manage
                </router-link></li>

                <li><router-link to="/invoice">
                    <font-awesome-icon icon="user" />
                    Invoices
                </router-link></li>

                <li><router-link to="/inbox">
                    <font-awesome-icon icon="inbox" />
                    Inbox
                </router-link></li>

                <li><router-link to="/profile">
                    <font-awesome-icon icon="user" />
                    Profile
                </router-link></li>

            </ul>
        </nav>
    </div>
    <router-view></router-view>
</template>

<script>
export default{
    data(){
        return{
           fullName: "Busang Mongwe", 
        }
    }
}

</script>

<style scoped>
    div{
        border: solid 1px #ddd;
        display: inline-block;
        background: #81B1CE ;
        border-radius: 6px;;
    }
    div h3{
       
        padding: 20px;
        background-color: #8eb1c7;
        text-align: center;
        border-radius: 6px;
        margin: 0;
        outline: 0;
        color: white;
    }
    ul li{
        border: solid 1px #ddd;
        border-radius: 6px;
        list-style-type: none;
        padding: 10px;
        margin-right: 40px;
        margin-top: 6px;
    }
    ul li:hover{
        background:#6c9dbb;
    }
    ul li a{
        text-decoration: none;
        color: white;
        padding: 10px;
        margin: 10px;
        width: 100%;
    }

</style>