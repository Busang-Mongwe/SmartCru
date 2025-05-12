<template>
  <div>
    <ToolBar/>
  </div>
</template>

<script>
import ToolBar from './outsider/ToolBar.vue';
export default{
  name: "App",
  components: {
    ToolBar,
  }
}

</script>