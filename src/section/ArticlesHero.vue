<template>
  <section class="articles-hero">
    <div class="container">
      <div class="articles-hero__content">
        <span class="articles-hero__badge">Blog & Resources</span>
        <Heading class="articles-hero__title" align="center">
          Articles <span class="text-accent">& Resources</span>
        </Heading>
        <p class="articles-hero__desc">
          Explore our curated collection of articles, reading guides, and literary insights from
          authors and editors around the world.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
</script>

<style lang="scss" scoped>
.articles-hero {
  padding: 80px 0 60px;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  &__badge {
    display: inline-block;
    margin-bottom: 20px;
    color: var(--accent-color);
    font-size: var(--fs-14);
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  &__title {
    margin: 0 0 20px;
  }

  &__desc {
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }
}
</style>
