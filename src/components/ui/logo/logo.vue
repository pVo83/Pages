<template>
  <router-link class="link-logo" to="/" aria-label="Pages Bookstore — Home">
    <svg width="119" height="35" aria-hidden="true">
      <use href="#logo"></use>
    </svg>
  </router-link>
</template>

<script setup></script>

<style lang="scss" scoped>
.link-logo {
  display: flex;

  @include mobile {
    margin-right: auto;
  }
}
</style>
