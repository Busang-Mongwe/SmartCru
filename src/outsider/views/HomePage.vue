<template>
<div class="main_container">
    <h1 class="company_name">SmartCru Tech Solutions </h1>
    <h2>We lead to a success</h2>
    <p>We pride ourselves with providing services with unquestionable quality not just that, but we are expandable.</p>
    <router-link class="more_btn" to="/about" >More</router-link>
</div>

<!--Body Content Component-->
<div>
    <BodyContent/>
</div>

<!--About Component-->
<div id="about">
    <AboutContent/>
</div>

<!--Services Component-->
<div id="services">
    <ServiceContent/>
</div>
<!--Slide Show Component-->
<div>
    <SlideShow/>
</div>
<!--Contact Component-->
<div id="contact">
    <ContactContent/>
</div>


</template>
<script>
import AboutContent from '@/components/AboutContent.vue';
import BodyContent from '@/components/BodyContent.vue';
import ContactContent from '@/components/ContactContent.vue';
import ServiceContent from '@/components/ServiceContent.vue';
import SlideShow from '@/components/SlideShow.vue';
export default{
    name: 'HomePage',
    components: { BodyContent, SlideShow, AboutContent, ServiceContent, ContactContent },
}
</script>

<style scoped>
.main_container{
    margin: 1rem auto;
    width: 100%;
    z-index: 1;
    text-align:center;
    justify-content: center;
}
.company_name{
    color: #DC143C;
}
.main_container p {
    font-size: 18px;
}
.more_btn{
    text-decoration: none;
    padding: 8px 16px;
    background-color: #A9A9A9;
    border-radius: 6px;
    color: black;
}
.more_btn:hover{
    border-bottom: solid 2px blue;
    cursor: pointer; 
}

 @media only screen and (max-width: 960px){
    .main_container h1{
        font-size: 22px;
    }
    .main_container h2{
        font-size: 18px;
    }
    .main_container p {
        font-size: 16px;
}
 }
</style>