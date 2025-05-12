<template>
  <div>
    <ToolBar/>
    <FooterComp/>
  </div>
</template>

<script>
import ToolBar from './outsider/ToolBar.vue';
import FooterComp from './components/FooterComp.vue';
export default{
  name: "App",
  components: {
    ToolBar,
    FooterComp,
  }
}

</script>