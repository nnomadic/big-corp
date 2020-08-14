<template>
  <div class="home">
    Homepage
    <div class="glide multi1">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">1</li>
          <li class="glide__slide">2</li>
          <li class="glide__slide">3</li>
          <li class="glide__slide">4</li>
          <li class="glide__slide">5</li>
          <li class="glide__slide">6</li>
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          prev
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          next
        </button>
      </div>
    </div>
    <accordion></accordion>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";

export default {
  name: "Home",
  components: {},
  directives: {},
  mounted() {
    var glideMulti1 = new Glide(".multi1", {
      type: "carousel",
      autoplay: 3500,
      perView: 4,
    });

    glideMulti1.mount();
  },
};
</script>
