<template>
  <div>
    <div v-for="post in posts" :key="post.id" @click="openModal(post.id)">
      {{ post.title }}
    </div>

    <div id="modal" v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-body" v-if="modalPost">
                {{ modalPost.body }}
              </div>
              <div class="modal-footer" v-if="modalComments">
                <div v-for="comment in modalComments" :key="comment.id">
                  {{ comment.name }}
                  {{ comment.email }}
                  {{ comment.body }}
                </div>
                <button class="modal-default-button" @click="showModal = false">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: null,
      endpoint: "http://jsonplaceholder.typicode.com/posts?_page=1&_limit=6",
      showModal: false,
      modalPost: null,
      modalComments: null,
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
    openModal(id) {
      this.modalPost = null;
      this.modalComments = null;
      this.showModal = false;
      axios
        .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          this.modalPost = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => {
          this.modalComments = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
