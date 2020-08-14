<template>
  <div class="accordion">
    <div class="accordion__selectors">
      <div class="accordion__btn" @click="setAccordion(0)">Accordion 1</div>
      <div class="accordion__btn" @click="setAccordion(1)">Accordion 2</div>
      <div class="accordion__btn" @click="setAccordion(2)">Accordion 3</div>
    </div>
    <div class="accordion__selection">{{ currentSelection }}</div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  data() {
    return {
      currentSelection: "",
      accordionData: ["Test 1", "Test 2", "Test 3"],
    };
  },
  mounted() {
    this.currentSelection = this.accordionData[0];
  },
  methods: {
    setAccordion(selection) {
      switch (selection) {
        case 0:
          this.currentSelection = this.accordionData[0];
          break;
        case 1:
          this.currentSelection = this.accordionData[1];
          break;
        case 2:
          this.currentSelection = this.accordionData[2];
          break;
      }
    },
  },
};
</script>
