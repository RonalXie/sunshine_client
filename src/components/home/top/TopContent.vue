<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column is-half">
        <carousel-card/>
      </div>
      <div class="column is-one-quarter">
        <div class="box shadow"></div>
        <div class="box shadow"></div>
        <div class="box shadow"></div>
      </div>
      <div class="column is-one-quarter">
          <user-card/>
      </div>
    </div>
    <div class="columns is-multiline">
      <div class="column is-2" v-for="i in 6" :key="i">
          <div class="box shadow ">
          </div>
      </div>

    </div>
  </div>

</template>
<script>
import CarouselCard from "@/components/home/top/CarouselCard.vue";
import UserCard from "@/components/home/top/UserCard.vue";
export default {
  components: {UserCard, CarouselCard}
}
</script>
<style scoped>

</style>
