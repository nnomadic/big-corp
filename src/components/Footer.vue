<template>
  <footer class="footer">
    <div class="footer__link-lockup">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <div class="footer__link-lockup">
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
      <a href="#">Link 6</a>
    </div>

    <div class="footer__text">
      <p>
        Et sint quis ea enim in consectetur cillum ipsum Lorem officia excepteur
        quis. Ut voluptate aliquip veniam aliqua aliquip aliquip ad cupidatat
        qui ea incididunt adipisicing in irure. Cillum culpa eu laboris fugiat
        sint cillum sint.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: inherit;
  background-color: $secondary;

  @include lg {
    position: absolute;
    bottom: 0;
    height: 150px;
    display: flex;
    align-content: flex-start;
    justify-content: space-around;
  }

  padding: 30px;

  &__text {
    max-width: 350px;
    margin: 0 auto;

    @include lg {
      margin: 25px;
    }
  }

  &__link-lockup {
    display: grid;
    align-content: space-around;
    text-align: center;

    a {
      margin-bottom: 10px;

      @include lg {
        margin-bottom: auto;
      }
    }
  }
}
</style>
