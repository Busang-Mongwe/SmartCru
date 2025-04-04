<template>
  <div>
    <CompanyLogo/>
    <NavbarComp/>
  </div>
  
</template>

<script>
import CompanyLogo from './client/components/CompanyLogo.vue';
import NavbarComp from './client/components/NavbarComp.vue';
 export default{
  components: {
    CompanyLogo,
    NavbarComp,
  }
 }
</script>