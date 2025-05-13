<template>
    <div class="body_content">
        <div>
            <router-link to="/services">
                <img :src="require('@/assets/coding.png')"/>
            </router-link>
        </div>
        <div class="student">
            <p style="width: 80%; margin: 60px auto 20px">Are you a student looking for assistance with programming projects or assignments? Create your student profile</p>
            <router-link to="/login" class="btn">Student</router-link>
                <p style="width: 80%;  margin: 40px auto 20px;">We provide transformation among businesses through technology, our organization offers solutions in web development,
                mobile applications, electronics and digital marketing in various companies abroad</p>
            <router-link to="/login" class="btn">Client</router-link>

            <div  style="margin-top: 20px;">
                 <img  src="../assets/lamp.png" alt="Lamp Icon"
                 style="height: 80px; width: 80px; border: none;"  /> 
            </div>
        </div>
        <div class="company_img">
            <router-link to="/services">
                <img :src="require('@/assets/SmartCru.png')">
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default{
    name: 'BodyContent'
}
</script>

<style scoped> 
.body_content{
    display: flex;
    width: 98%;
    justify-content: center;
    text-align: center;
    background-color: #DCDCDC;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 4px auto;
    padding: 12px;
    overflow-wrap: break-word;
    word-break: break-word;
}
img{
    height: 480px;
    width: 480px;
    border: solid 1px #ddd;
    border-radius: 6px;
    margin: 0 10px;
}
.student{
    height: 480px;
    width: 480px;
    background: #A9A9A9;
    border-radius: 6px;
    margin: 0 10px;
    flex-shrink: 0;
    flex-grow: 0;
}
.student p{
    color: black;
    font-size: 18px;
    margin: 2rem 0;
    text-align: center;
}
.btn{
    text-decoration: none;
    padding: 8px 16px;
    background-color: #808080;
    border-radius: 6px;
    color: black;
}
.btn:hover{
    border-bottom: solid 2px blue;
    cursor: pointer; 
}
@media only screen and (max-width: 960px){
    .body_content{
        display: grid;
    }
    img{
        height: 420px;
        width: 420px;
        border: solid 1px #ddd;
        border-radius: 6px;
        margin: 4px 0;
    }
    .student{
       height: 420px;
       width: 420px; 
       background: #A9A9A9;
       border-radius: 6px;
       margin: 4px 0;
    }
    .student p{
        color: black;
        font-size: 16px;
        margin: 2rem 0;
        text-align: center;
    }
}
</style>