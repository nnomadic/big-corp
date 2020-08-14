<template>
  <div>{{ posts }}</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: null,
      endpoint: "http://jsonplaceholder.typicode.com/posts?_page=1&_limit=6",
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get(this.endpoint)
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
