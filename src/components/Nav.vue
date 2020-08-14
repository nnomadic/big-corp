<template>
  <nav id="nav" class="nav">
    <div class="nav-lg">
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
    </div>

    <div class="nav-sm" @click="menuOpen = !menuOpen">
      <button class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </button>

      <div
        v-if="menuOpen"
        class="nav-sm__menu"
        :class="{ active: menuOpen == true }"
      >
        <router-link to="/"
          ><button class="btn nav__item">Home</button></router-link
        >
        <router-link to="/news"
          ><button class="btn nav__item">News</button></router-link
        >
        <router-link to="/contact"
          ><button class="btn">Contact</button></router-link
        >
        <button class="btn" @click="showLoginModal = true">
          Login
        </button>
      </div>
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
                <button class="btn" @click="showLoginModal = false">
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
      menuOpen: false
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
// @import "@/styles/_media.scss";

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

  .modal-body {
    display: flex;
    flex-flow: column;

    input {
      height: 25px;
      margin: 10px auto;
    }
  }
}

.nav-lg {
  display: none;
  @include lg {
    display: flex;
  }
}

.nav-sm {
  display: block;

  @include lg {
    display: none;
  }

  .btn {
    svg path {
      fill: $white;
    }
  }

  &__menu {
    width: 0;
    transition: 1s ease;
    opacity: 0;
    display: flex;
    flex-flow: column;

    &.active {
      width: 100%;
      opacity: 1;
    }
  }
}
</style>
