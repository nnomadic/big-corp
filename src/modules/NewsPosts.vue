<template>
  <div class="news-posts">
    <button
      v-for="post in posts"
      :key="post.id"
      @click="openModal(post.id)"
      class="news-posts__title btn"
    >
      {{ post.title }}
    </button>

    <div id="modal" v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-body" v-if="modalPost">
                <h3>
                  {{ modalPost.body }}
                </h3>
              </div>
              <div class="modal-footer" v-if="modalComments">
                <div
                  v-for="comment in modalComments"
                  :key="comment.id"
                  class="comment"
                >
                  <h4>{{ comment.name }} | {{ comment.email }}</h4>
                  <p>
                    {{ comment.body }}
                  </p>
                </div>
                <button class="btn" @click="showModal = false">
                  Close
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
@import "@/styles/_colours.scss";

.news-posts {
  display: inline-block;
  margin: 0 auto;

  &__title {
    width: 100%;
    min-height: 50px;
    margin: 25px auto;
    display: block;
    text-align: left;
    text-transform: capitalize;

    @include lg {
      width: 1000px;
      height: 100px;
    }
  }
}

.comment {
  display: inline-block;
  width: 95%;
  margin: 10px;
  padding: 10px;
  background-color: $secondary;
}
</style>
