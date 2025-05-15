<template>
    <div class="service_container">
        <div class="about_services">
            <p>
                Transforming businesses through technology and unlocking digital success for businesses.
                We offer professional audit services designed to meticulously review and refine projects before publication to ensure that it meets the standard of quality and accuracy.
                Evaluate the effectiveness of mentorship and support to struggling students, such tutoring through online
                forums.
                Track student progress through assessment abd projects to ensure that they are meeting learning objective.
            </p>

            <p><i>For tech industry solutions, please reach out to us for consultation and services.</i></p>
            <router-link class="btn" :to="{ path: '/', hash: '#contact' }">Contact</router-link>
        </div>        
        <div class="services_img">
            <img :src="require('@/assets/SmartCru.png')"/>
        </div>
    </div>
</template>

<script>
export default{
    name: 'ServiceContent',
}
</script>

<style scoped>
.service_container{
    display: flex;
    max-width: 960px;
    width: 60%;
    justify-content: center;
    text-align: center;
    background-color: #DCDCDC;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 20px auto;
    padding: 12px; 
}
img{
    height: 380px;
    width: 480px;
    border: solid 1px #ddd;
    border-radius: 6px;
    margin: 0 10px;
}
.btn{
    text-decoration: none;
    border: none;
    padding: 8px 16px;
    background-color: #808080;
    border-radius: 6px;
    color: black;
}
.btn:hover{
    border-bottom: solid 2px blue;
    cursor: pointer;
}
</style>