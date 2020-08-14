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
  display: flex;
  align-content: flex-start;
  justify-content: space-around;
  padding: 30px;

  &__text {
    max-width: 350px;
  }

  &__link-lockup {
    display: grid;
  }
}
</style>
