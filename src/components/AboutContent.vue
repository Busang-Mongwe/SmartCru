<template>
    
    <div class="about_container">
        
        <div class="about_smartcru">
            <p>Two directors who were once high school students created the SmartCru. Although they enrolled in different
                courses -Bsc in Mathematical Science and Bsc in Physical Science graduated from <a href="https://www.ul.ac.za"><i>University of Limpopo</i></a>.
                SmartCru is an IT solutions firm that primarily helps businesses by creating and managing websites.
                Nevertheless, we also offer our services to students in the department of engineering and information technology
                , helping them with their coursework in Cisco networking and also programming languages. <br><br>
                As tech-savvy team, we discovered a pattern of websites that were difficult for different users to navigate after
                browsing through a variety of websites. Social media has demonstrated that most internet users lack website navigation
                skills. As SmartCru solutions, we think that the words "secure and simple" are synonymous. Creating a safe and eas-to-use
                virtual environment for our customers by means of websites that, with a quick click will teach you our objective is to
                broaden our offerings to include electronics services providers, which will enhance our networking offerings.
            </p>        
        </div>
        <!--#endregion-->
        <div>
            <router-link to="/services">
                <img :src="require('@/assets/laptop.png')"/>
            </router-link>
        </div>
    </div>
</template>
<script>
export default{
    name: 'AboutContent',
}
</script>

<style scoped>
.about_container{
    display: flex;
    max-width: 960px;
    width: 60%;
    justify-content: center;
    text-align: center;
    background-color: #DCDCDC;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 4px auto;
    padding: 12px;
}
.about_smartcru{
    max-width: 480px;
    width: 100%;
    height: auto;
    padding: 10px;
}
img{
    height: 380px;
    width: 480px;
    border: solid 1px #ddd;
    border-radius: 6px;
    margin: 0 10px;
}
@media only screen and ( max-width: 1800px){
    .about_container{
        display: grid;
        width: auto;
        padding: 0 6px;
    }
    .about_smartcru p{
        width: 90%;
        margin: 10px auto;
    }
    
}
@media only screen and (max-width: 960px){
    .about_container{
        display: grid;
        width: 98%;
    }
    img{
        max-width: 460px;
        width: 90%;
        margin: 10px auto;
    }
}

</style>