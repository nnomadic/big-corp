<template>
  <form class="contact-form">
    <input
      v-model="message"
      placeholder="Enter your name"
      class="input__name"
    />
    <input
      v-model="message"
      placeholder="Enter your email"
      class="input__email"
    />
    <textarea
      v-model="message"
      placeholder="Enter your message"
      class="input__body"
    ></textarea>
    <button class="btn" type="submit">Submit</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-flow: column;
  padding: 50px;

  .btn {
    width: fit-content;
    align-self: flex-end;
  }
}

.input {
  &__name,
  &__email {
    width: 50%;
    height: 40px;
    margin: 20px 0;
  }

  &__body {
    min-height: 300px;
    margin: 20px 0;
  }
}
</style>
