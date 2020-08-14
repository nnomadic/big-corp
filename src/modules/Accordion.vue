<template>
  <div class="accordion">
    <div class="accordion__btn-lockup">
      <div
        class="accordion__btn btn"
        @click="setAccordion(0)"
        :class="{ active: selected === 0 }"
      >
        Accordion 1
      </div>
      <div
        class="accordion__btn btn"
        @click="setAccordion(1)"
        :class="{ active: selected === 1 }"
      >
        Accordion 2
      </div>
      <div
        class="accordion__btn btn"
        @click="setAccordion(2)"
        :class="{ active: selected === 2 }"
      >
        Accordion 3
      </div>
    </div>
    <div class="accordion__selection">
      <p>{{ currentSelection }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSelection: "",
      accordionData: [
        "Test 1 Non reprehenderit cupidatat nulla pariatur adipisicing reprehenderit Lorem. Nostrud eu nisi cillum exercitation nostrud deserunt culpa consectetur. Aliquip eu id sunt nostrud officia commodo consequat do nisi. Amet excepteur do commodo id duis est dolor occaecat labore irure sint fugiat aute ipsum. Irure officia laborum pariatur ipsum mollit.Occaecat Lorem dolor fugiat excepteur occaecat id aliquip ipsum elit. Occaecat velit sint consectetur laboris labore proident. Adipisicing quis ullamco et ipsum proident ea minim sunt nisi est Lorem nulla. Ullamco quis sint in cupidatat est cupidatat tempor id incididunt esse ut aliqua tempor.Incididunt deserunt qui consectetur anim culpa. Deserunt mollit qui ad pariatur. Velit consectetur irure elit labore qui commodo laborum est anim dolor occaecat. Culpa aliquip et consectetur aliquip laboris. Enim cupidatat sunt eiusmod fugiat voluptate aliqua mollit est reprehenderit dolor dolor. Fugiat aute id enim elit esse aute voluptate. Minim in anim deserunt tempor aute.",
        "Test 2 Pariatur velit laborum consectetur voluptate laboris. Reprehenderit anim deserunt culpa labore dolore. Aute sit consectetur proident nostrud eu fugiat labore et nisi velit. Ex tempor irure dolor do duis ad amet consequat velit amet anim excepteur. Officia qui consequat laboris nisi quis culpa qui excepteur aliqua laboris magna duis ut. Commodo reprehenderit ex aute labore laboris fugiat mollit esse ad aute anim id elit sit. Officia sunt consequat adipisicing id do esse dolor ipsum consectetur consectetur culpa consectetur reprehenderit.Consectetur sint cillum anim elit enim aliqua in proident aliquip esse reprehenderit est est eiusmod. Deserunt ut adipisicing elit culpa cupidatat enim pariatur minim amet. Culpa reprehenderit et adipisicing cillum magna. Mollit esse in aute officia Lorem aute commodo excepteur ipsum ea officia. Officia enim duis exercitation duis qui anim eiusmod reprehenderit qui.Esse elit do elit quis in minim sit ea aute sunt do ipsum incididunt. Sunt dolor anim et quis. Mollit sit labore commodo sit velit. Veniam cupidatat incididunt eiusmod fugiat. Culpa incididunt fugiat est adipisicing cupidatat.Proident ipsum ad duis velit cillum Lorem aliquip velit velit eiusmod veniam nisi. Laboris ad nostrud laborum ad esse dolore reprehenderit fugiat do veniam. Sunt aliqua ipsum aliqua elit cupidatat fugiat id ea cupidatat veniam anim esse aliqua ullamco. Irure veniam incididunt consequat sint cillum reprehenderit esse nisi incididunt. Ullamco qui aute commodo aliqua id culpa.",
        "Test 3 Laboris ad est ad qui adipisicing in proident commodo id adipisicing laborum ipsum occaecat irure. Adipisicing aliqua labore veniam aliqua proident ullamco mollit sunt consequat duis occaecat. Minim sunt excepteur reprehenderit sit eu aute laborum ipsum do dolore incididunt tempor id occaecat. Id aute ipsum nostrud eu ut cupidatat aute et sunt velit eiusmod.Pariatur nisi qui anim nostrud proident sunt deserunt voluptate sunt proident elit. Minim culpa Lorem minim ex cupidatat. Proident voluptate Lorem veniam proident nisi eu velit do. Eiusmod ad labore cillum do labore esse. Mollit veniam irure exercitation adipisicing ex eiusmod eiusmod incididunt pariatur amet officia.Adipisicing esse elit mollit aute eiusmod ut est adipisicing est nisi reprehenderit eiusmod. Cupidatat ullamco fugiat culpa pariatur. Adipisicing deserunt et laborum proident nisi exercitation velit enim proident duis id labore reprehenderit. Incididunt in incididunt nostrud amet do amet dolore reprehenderit quis Lorem aliqua. Mollit enim nisi adipisicing do laboris veniam id sit velit nostrud sit. Anim adipisicing enim eu aute adipisicing mollit aute deserunt labore aliqua velit voluptate do reprehenderit.Ut reprehenderit amet qui aliqua laboris ea. In mollit pariatur ipsum ad excepteur consectetur sit pariatur dolor. Incididunt ea do aute amet qui dolore incididunt duis. Duis cupidatat veniam aliquip dolore. Culpa qui aute amet veniam nostrud reprehenderit. Fugiat do officia nostrud reprehenderit. Reprehenderit sint reprehenderit id anim incididunt commodo esse nisi ex.",
      ],
      selected: 0,
    };
  },
  mounted() {
    this.currentSelection = this.accordionData[0];
    this.selected = 0;
  },
  methods: {
    setAccordion(selection) {
      switch (selection) {
        case 0:
          this.selected = 0;

          this.currentSelection = this.accordionData[0];
          break;
        case 1:
          this.selected = 1;

          this.currentSelection = this.accordionData[1];
          break;
        case 2:
          this.selected = 2;

          this.currentSelection = this.accordionData[2];
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  margin-left: 10px;
  margin-top: 50px;

  @include lg {
    display: flex;
  }

  &__btn-lockup {
    display: flex;
    justify-content: space-around;

    @include lg {
      display: block;
    }
  }

  &__btn {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 70px;
    height: 30px;
    background-color: $secondary;

    @include lg {
      width: 150px;
      height: 50px;
    }

    &.active {
      background-color: $primary;
    }
  }

  &__selection {
    padding: 30px;
  }
}
</style>
