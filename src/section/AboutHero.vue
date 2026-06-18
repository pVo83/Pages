<template>
  <section class="about-hero">
    <div class="container">
      <div class="about-hero__content">
        <span class="about-hero__subtitle">Who We Are</span>
        <Heading tag="h1" class="about-hero__title" align="left">
          We Bring Stories <span class="about-hero__title-accent">To Life</span>
        </Heading>
        <p class="about-hero__desc">
          We believe that bookstores are essential to a healthy culture. They're where authors can
          connect with readers, where we discover new writers, where children get hooked on the
          thrill of reading that can last a lifetime.
        </p>
        <ul class="stat">
          <li class="stat__item" v-for="stat in stats" :key="stat.id">
            <span class="stat__number">{{ stat.value }}</span>
            <span class="stat__label">{{ stat.text }}</span>
          </li>
        </ul>
      </div>
      <div class="about-hero__image">
        <picture>
          <source :srcset="publicUrl('img/about-img.webp')" type="image/webp" />
          <img :src="publicUrl('img/about-img.jpg')" alt="About us" />
        </picture>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
import { publicUrl } from "@/utils/publicUrl"

defineProps({
  stats: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.about-hero {
  padding: 80px 0 60px;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;

    @include small-tablet {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__subtitle {
    color: var(--accent-color);
    font-size: 18px;
    letter-spacing: 2px;
  }

  &__title {
    margin: 20px 0;

    &-accent {
      color: var(--accent-color);
    }
  }

  &__desc {
    margin-bottom: 40px;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }
}

.stat {
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__number {
    color: var(--accent-color);
    font-size: var(--fs-32);
    font-weight: 700;
  }

  &__label {
    color: var(--neutral-300);
    font-size: var(--fs-14);
  }
}
</style>
