<template>
  <div class="home">
    Homepage
    <Carousel></Carousel>
    <Accordion></Accordion>
    <Blurb></Blurb>
  </div>
</template>

<script>
import Carousel from "@/modules/Carousel.vue";
import Accordion from "@/modules/Accordion.vue";
import Blurb from "@/modules/Blurb.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Accordion,
    Blurb,
  },
};
</script>
