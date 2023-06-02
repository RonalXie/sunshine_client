<template>
  <div class="columns is-flex-wrap-wrap">
    <div class="column is-one-quarter" v-for="i in 8" :key="i">
      <div class="box shadow p-0" style="overflow: hidden">
        <div style="width: 100%;height: 200px;overflow: hidden;">
          <router-link to="">
            <b-image
                class="image-scale"
                src="https://pandapro.halo.nicetheme.xyz/upload/img00027.jpg"
            />
          </router-link>

        </div>

        <div class="p-4 content">
          <router-link to=""><h4>标题001</h4></router-link>

        </div>

      </div>
    </div>
  </div>

</template>
<script>
export default {

}
</script>

<style scoped>

</style>
