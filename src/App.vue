<template>
  <div id="app" class="container">
    <nav-bar></nav-bar>
    <custom-header></custom-header>
    <router-view />
    <custom-footer></custom-footer>
  </div>
</template>

<style lang="scss">
@import "./styles/app.scss";
</style>
