<template>
  <div>
    <!--    header-->
    <div>
      <header-bar/>
    </div>
    <br>
    <!--    content-->
    <div class="container">
      <router-view/>
    </div>
    <br>
    <!--    footer-->
    <div>

    </div>
  </div>
</template>
<script>
import HeaderBar from "@/components/navbar/HeaderBar.vue";

export default {
  components: {
    HeaderBar
  }


}
</script>

<style>

</style>
