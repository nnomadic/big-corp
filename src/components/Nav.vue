<template>
  <nav id="nav" class="nav">
    <div>
      <router-link to="/"
        ><button class="btn nav__item">Home</button></router-link
      >
      <router-link to="/news"
        ><button class="btn nav__item">News</button></router-link
      >
      <router-link to="/contact"
        ><button class="btn">Contact</button></router-link
      >
    </div>
    <div>
      <button class="btn" @click="showLoginModal = true">
        Login
      </button>
    </div>

    <div id="loginModal" v-if="showLoginModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-body">
                <input placeholder="Username" />
                <input placeholder="Password" />
              </div>
              <div class="modal-footer">
                <button
                  class="modal-default-button"
                  @click="showLoginModal = false"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showLoginModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 10px;
  z-index: 2;
  position: fixed;
  top: 0;
  width: inherit;

  &__item {
    margin-right: 10px;
  }
}
</style>
