<template>
  <section class="our-story">
    <div class="container">
      <div class="our-story__grid">
        <div class="our-story__text">
          <span class="our-story__badge">Our Journey</span>
          <Heading tag="h2" class="our-story__title" align="left">
            The Story <span class="text-accent">Behind Pages</span>
          </Heading>
          <p class="our-story__desc">
            What started as a passion for great literature has grown into a community of readers,
            authors and stories that change lives. Every book we publish carries the same belief:
            that the right words at the right time can transform a person.
          </p>
          <p class="our-story__desc">
            We work closely with authors, editors and readers to bring meaningful stories to those
            who seek them — across every genre, age group and corner of the globe.
          </p>
        </div>

        <ul class="our-story__timeline">
          <li class="our-story__milestone" v-for="item in story" :key="item.id">
            <span class="our-story__year">{{ item.year }}</span>
            <p class="our-story__milestone-text">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"

defineProps({
  story: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.our-story {
  padding: 80px 0;
  background-color: var(--neutral-bg);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;

    @include small-tablet {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__badge {
    display: inline-block;
    margin-bottom: 16px;
    color: var(--accent-color);
    font-size: var(--fs-14);
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  &__title {
    margin: 0 0 24px;
  }

  &__desc {
    margin: 0 0 16px;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }

  &__timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__milestone {
    position: relative;
    display: flex;
    gap: 24px;
    padding: 0 0 32px;

    &:not(:last-child)::after {
      position: absolute;
      top: 28px;
      left: 26px;
      width: 2px;
      height: calc(100% - 28px);
      background-color: var(--neutral-200);
      content: "";
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  &__year {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: var(--neutral-100);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 400;
    text-align: center;
  }

  &__milestone-text {
    margin: 0;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }
}
</style>
