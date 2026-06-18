<template>
  <section class="editors-pick">
    <div class="container">
      <Heading class="editors-pick__title" align="center">
        Editor's <span class="text-accent">Pick</span>
      </Heading>
      <div class="editors-pick__grid">
        <article class="featured-card" v-for="pick in picks" :key="pick.id">
          <div class="featured-card__meta">
            <span class="featured-card__category">{{ pick.category }}</span>
            <time class="featured-card__date" :datetime="pick.datetime">{{ pick.date }}</time>
          </div>
          <h3 class="featured-card__title">{{ pick.title }}</h3>
          <p class="featured-card__desc">{{ pick.desc }}</p>
          <div class="featured-card__bottom">
            <a href="#" class="featured-card__link">Read article</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"

defineProps({
  picks: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.editors-pick {
  padding: 100px 0;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__title {
    margin: 0 0 50px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);

      .featured-card:last-child {
        grid-column: span 2;
        max-width: 50%;
        justify-self: center;
      }
    }

    @include small-tablet {
      grid-template-columns: 1fr;

      .featured-card:last-child {
        grid-column: span 1;
        max-width: 100%;
        justify-self: center;
      }
    }
  }
}

.featured-card {
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: var(--neutral-bg);

  &__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 20px;
  }

  &__category {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 12px;
    border-radius: 100px;
    background-color: var(--accent-color);
    color: var(--primary-color);
    font-family: var(--ff-primary);
    font-size: var(--fs-12);
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  &__date {
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-14);
  }

  &__title {
    margin: 0 0 16px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
    line-height: 1.3;
  }

  &__desc {
    flex-grow: 1;
    margin: 0 0 24px;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }

  &__link {
    position: relative;
    display: inline-block;
    padding-right: 10px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 400;
    letter-spacing: 0.3px;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 5px;
      background-color: var(--primary-color);
      content: "";
    }

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 0%;
      height: 2px;
      border-radius: 5px;
      background-color: var(--accent-color);
      transition: width var(--trs-35);
      content: "";
    }

    &:hover::before {
      width: 100%;
    }
  }
}
</style>
