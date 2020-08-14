<template>
  <form>
    <input v-model="message" placeholder="Enter your name" />
    <input v-model="message" placeholder="Enter your email" />
    <textarea v-model="message" placeholder="Enter your message"></textarea>
    <button class="btn" type="submit">Submit</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
