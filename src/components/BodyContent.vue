<template>
    <div class="body_content">
        <div>
            <router-link to="/services">
                <img :src="require('@/assets/coding.png')"/>
            </router-link>
        </div>
    <div class="student">
        <p>Are you a student looking for assistance with programming projects or assignments? Create your student profile</p>
        <router-link to="/login" class="btn">Student</router-link>
        <p>We provide transformation among businesses through technology, our organization offers solutions in web development,
            mobile applications, electronics and digital marketing in various companies abroad</p>
        <router-link to="/login" class="btn">Client</router-link>
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
    width: 80%;
    justify-content: center;
    text-align: center;
    background-color: #DCDCDC;
    margin: 4px auto;
    padding: 12px;
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
}
.student p{
    color: black;
    font-size: 18px;
    margin: 2rem 0;
    text-align: center;
}
.bnt{
    text-decoration: none;
    padding: 8px 16px;
    background-color: #A9A9A9;
    border-radius: 6px;
    color: black;
}
</style>