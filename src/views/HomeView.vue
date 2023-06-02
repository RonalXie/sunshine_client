<template>
  <div class="home">
<!--    头部内容-->
    <top-content/>
    <br>
<!--    分类选项卡-->
    <div class="box shadow">

    </div>
    <!--    文章卡片-->

    <article-card-list/>

<!--    分页条-->
    <div class="box shadow">
      <b-pagination
          :total="100"
          size="8"
      ></b-pagination>
    </div>



  </div>
</template>

<script>


import TopContent from "@/components/home/top/TopContent.vue";
import ArticleCardList from "@/components/home/content/ArticleCardList.vue";

export default {
  name: 'HomeView',
  components: {
    ArticleCardList,
    TopContent,
  }
}
</script>
