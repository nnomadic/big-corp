<template>
  <div class="header">
    <img src="@/assets/logo.png" alt="Big Corp Logo" />
  </div>
</template>

<style lang="scss" scoped></style>

<style lang="scss" scoped>
.header {
  min-width: inherit;
  max-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 55px auto;

  img {
    max-width: 250px;
    max-height: 150px;
    @include lg {
      max-width: 600px;
      max-height: 250px;
    }
  }
}
</style>
