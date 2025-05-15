<!-- SimpleSlideshow.vue -->
<template>
  <div class="slideshow-box">
    <!-- Slide Content -->
    <div v-show="current === 0" class="slide">
      <p>
        <router-link to="/" style="text-decoration: none; color: #DC143C;"><b>SmartCru Tech Solution</b></router-link> was founded in 2024 out of a passion for technology.
        Founded by two University of Limpopo students, SmartCru addresses the gap between graduation and industrial experience for students.
      </p>

      <p>
        We aim to expose students to real-world tech challenges and bridge usability gaps we observe in poorly designed websites. SmartCru offers web & mobile development, electronics, and digital marketing.
      </p>
      <router-link class="btn" :to="{ path: '/', hash: '#about'}">About</router-link>
    </div>

    <div v-show="current === 1" class="slide">
      <div style="display: flex;">
        <img :src="require('@/assets/Busang.jpeg')" alt="Busang Mongwe" class="slide-img"/>  
        <p>
           <b>Busang Mongwe</b>, a University of Limpopo alumnus, specializes in web development, data analysis, and programming languages like Python, JS, and C++.
           As the founder of SmartCru Tech, he offers mentorship and consultation to startups and students.
         </p>
      </div>
      <a href="mailto:busangmongwe37@gmail.com" class="btn">Contact Me</a>
    </div>

    <div v-show="current === 2" class="slide">
      <div style="display: flex;">
        <!--Still waiting for professional picture-->
        <img :src="require('@/assets/nhleko.jpeg')" alt="Nhleko Mabunda" class="slide-img" />
        <p>
          <b>Nhleko Success Mabunda</b> has strong skills in Java, Python, and C++, as well as OS configuration, networking, and computer engineering.
          He is also proficient with Kali Linux, virtualization, and troubleshooting.
        </p>
      </div>
      <a href="mailto:nhlekosuccessmabunda9@gmail.com" class="btn">Contact Me</a>
    </div>

    <!-- Navigation Buttons -->
    <div class="nav-buttons">
      <button @click="prev">Prev</button>
      <button @click="next">Next</button>
    </div>

    <!-- Dots Navigation -->
    <div class="dots">
      <span
        v-for="(n, index) in 3"
        :key="index"
        :class="{ active: current === index }"
        @click="current = index"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleSlideshow',
  data() {
    return {
      current: 0
    }
  },
  methods: {
    next() {
      this.current = (this.current + 1) % 3
    },
    prev() {
      this.current = (this.current - 1 + 3) % 3
    }
  }
}
</script>

<style scoped>
.slideshow-box {
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background: #DCDCDC;
}
.slide {
  padding: 20px;
  animation: fade 0.5s ease-in-out;
}
.slide-img {
  width: 280px;
  height: auto;
  border-radius: 8px;
  margin: 0 15px 15px 0;
}
.btn {
    text-decoration: none;
    padding: 8px 16px;
    background-color: #808080;
    border-radius: 6px;
    color: black;
}
.about_btn:hover{
    border-bottom: solid 2px blue;
    cursor: pointer;     
}
.btn:hover {
    border-bottom: solid 2px blue;
    cursor: pointer;
}
.slideshow_logo {
  color: #1976d2;
  text-decoration: none;
}

.nav-buttons {
  margin-top: 20px;
  text-align: center;
}

.nav-buttons button {
  padding: 8px 16px;
  margin: 0 5px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.nav-buttons button:hover {
  background: #555;
}

.dots {
  text-align: center;
  margin-top: 15px;
}

.dots span {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background: #999;
  border-radius: 50%;
  cursor: pointer;
}

.dots span.active {
  background: #333;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 960px){
  .slide-img {
  width: 220px;
  height: auto;
}
}
</style>
