<template>
  <div>
    <NavbarComp />
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default{
  name: "App",
  components: {
    NavbarComp,
    FooterComp,
  }
}

</script>