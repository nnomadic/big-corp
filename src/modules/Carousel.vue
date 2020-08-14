<template>
  <div class="glide multi1">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <img src="https://picsum.photos/300/200" />
        </li>
        <li class="glide__slide">
          <img src="https://picsum.photos/300/200" />
        </li>
        <li class="glide__slide">
          <img src="https://picsum.photos/300/200" />
        </li>
        <li class="glide__slide">
          <img src="https://picsum.photos/300/200" />
        </li>
        <li class="glide__slide">
          <img src="https://picsum.photos/300/200" />
        </li>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        <!-- <img src="@/assets/chevron.png" alt="Left Arrow" class="arrow left" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          class="arrow left"
        >
          <path
            d="M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z"
          />
        </svg>
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        <!-- <img src="@/assets/chevron.png" alt="Right Arrow" class="arrow right" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          class="arrow right"
        >
          <path
            d="M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import Glide from "@glidejs/glide";

export default {
  mounted() {
    var glideMulti1 = new Glide(".multi1", {
      type: "carousel",
      autoplay: 3500,
      perView: 4,
      breakpoints: {
        768: {
          perView: 1,
        },
        992: {
          perView: 2,
        },
      },
    });

    glideMulti1.mount();
  },
};
</script>

<style lang="scss" scoped>
.arrow {
  width: 30px;
  height: 40px;

  path {
    fill: $primary;
  }

  &.left {
    transform: rotate(90deg);
  }
  &.right {
    transform: rotate(-90deg);
  }
}
</style>
