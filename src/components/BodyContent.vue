<template>
    <div class="body_content">
        <div>
            <router-link to="/services">
                <img :src="require('@/assets/coding.png')"/>
            </router-link>
        </div>
        <div class="student">
            <p style="width: 80%; margin: 60px auto 20px">Are you a student looking for assistance with programming projects or assignments? Create your student profile</p>
            <button class="btn open-btn" @click="showDialog = true">Student</button>
                <p style="width: 80%;  margin: 40px auto 20px;">We provide transformation among businesses through technology, our organization offers solutions in web development,
                mobile applications, electronics and digital marketing in various companies abroad</p>
            <button class="btn open-btn" @click="showDialog = true">Client</button>

            <div  style="margin-top: 20px;">
                 <img class="lamb_img"  src="../assets/lamp.png" alt="Lamp Icon"
                  /> 
            </div>
        </div>
        <div class="company_img">
            <router-link to="/services">
                <img :src="require('@/assets/SmartCru.png')">
            </router-link>
        </div>
        
    </div>
    
    <!--Add a dialog that display when user enter Syudent or Client button-->
    <div v-if="showDialog" class="modal-overlay" @click.self="closeDialog">
    <div class="modal">
        <AuthComponent/>
    </div>
</div>
</template>

<script>
import AuthComponent from './AuthComponent.vue';
export default{
    name: 'BodyContent',
    components: {AuthComponent},
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
    border: none;
    padding: 8px 16px;
    background-color: #808080;
    border-radius: 6px;
    color: black;
}
.btn:hover{
    background: #555;
    cursor: pointer; 
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
.lamb_img{
    height: 80px;
    width: 80px;
     border: none; 
}
@media only screen and (max-width: 960px){
    .body_content{
        display: grid;
        width: 98%;
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
    .lamb_img{
        height: 50px;
        width: 50px;
    }
}
</style>