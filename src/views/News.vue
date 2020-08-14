<template>
  <div class="news">
    <NewsPosts></NewsPosts>
  </div>
</template>
<script>
import NewsPosts from "@/modules/NewsPosts.vue";
export default {
  name: "News",
  components: {
    NewsPosts,
  },
};
</script>
