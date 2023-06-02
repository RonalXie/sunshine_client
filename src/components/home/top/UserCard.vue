<template>
  <div class="box shadow user">
    <div class="has-text-centered" style="position: absolute;bottom: 14px;left: 0;right:0;margin:auto;">
      <div style="width: 108px;height: 108px;overflow: hidden;border-radius: 50%;margin: 0 auto">
        <b-image
            src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top"
            alt=""
            ratio="1by1"
            rounded
        />
      </div>
      <p class="has-text-weight-bold">
        RonalXie
      </p>
      <p class="has-text-grey">Life is fantastic</p>
      <br>
      <div style="font-size: large">
        <span>文章: 18</span>
        <span>分类: 18</span>
        <span>标签: 18</span>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "UserCard"
}
</script>

<style>
.user img:hover {
  transform: scale(1.1);
}
.user img{
  transition: all 800ms ease-in-out;
}

.user {
  background: url("https://pandapro.halo.nicetheme.xyz/upload/img00051.jpg") no-repeat;
  background-size: 100% 50%;
  height: 324px;
  position: relative;
}

</style>
