<template>
  <section class="contacts-faq">
    <div class="container">
      <div class="contacts-faq__header">
        <Heading class="contacts-faq__title" align="center">
          Frequently <span class="text-accent">Asked Questions</span>
        </Heading>
        <p class="contacts-faq__text">
          Scroll right to see more
          <svg class="icon" width="20" height="20" aria-hidden="true">
            <use href="#arrow-right" />
          </svg>
        </p>
      </div>

      <div class="faq-scroll">
        <div class="faq-scroll__container">
          <div class="faq-card" v-for="(faq, index) in faqs" :key="index">
            <Dots :count="3" size="md" :gradient="false" />
            <div class="faq-card__info">
              <h3 class="faq-card__question">{{ faq.question }}</h3>
              <p class="faq-card__answer">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
import Dots from "@/components/ui/dots/Dots.vue"

defineProps({
  faqs: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.contacts-faq {
  padding: 80px 0;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__header {
    margin-bottom: 40px;
    text-align: center;
  }

  &__title {
    margin: 0 0 20px;
  }

  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 0;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;

    @include tablet {
      display: flex;
    }
  }
}

.faq-scroll {
  position: relative;

  &__container {
    display: flex;
    gap: 24px;
    padding: 20px 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: var(--neutral-200);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--accent-color);
    }
  }
}

.faq-card {
  display: flex;
  flex-direction: column;
  flex: 0 0 350px;
  gap: 16px;
  padding: 24px;
  background-color: var(--neutral-bg);
  scroll-snap-align: start;
  transition: transform var(--trs-35);

  &__question {
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
  }

  &__answer {
    margin: 0;
    color: var(--neutral-200);
    font-size: var(--fs-16);
    line-height: 1.4;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @include mobile {
    flex: 0 0 280px;
  }
}
</style>
