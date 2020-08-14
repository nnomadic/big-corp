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
        <img src="@/assets/chevron.png" alt="Left Arrow" class="arrow left" />
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        <img src="@/assets/chevron.png" alt="Right Arrow" class="arrow right" />
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
  max-width: 30px;
  max-height: 40px;

  &.left {
    transform: rotate(90deg);
  }
  &.right {
    transform: rotate(-90deg);
  }
}
</style>
