<template>
  <section class="extension">
    <div class="container">
      <Heading>Enhance knowledge <span class="text-accent">&amp; Vision</span></Heading>

      <ul class="chapter-list | grid">
        <li v-for="chapter in chapters" :key="chapter.title" class="chapter-card">
          <h4 class="chapter-card__title">{{ chapter.title }}</h4>
          <p class="chapter-card__desc">{{ chapter.description }}</p>
          <div class="chapter-card__values">
            <div class="chapter-card__pages">
              <Dots :count="1" size="lg" :gradient="false" />
              <div class="chapter-card__content">
                <span class="chapter-card__meta">Pages:</span>
                <span class="chapter-card__value">{{ chapter.pages }}</span>
              </div>
            </div>
            <div class="chapter-card__length">
              <Dots :count="1" size="lg" :gradient="false" />
              <div class="chapter-card__content">
                <span class="chapter-card__meta">Length:</span>
                <span class="chapter-card__value">{{ chapter.length }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <Button class="extension__btn" variant="outline" title="Start a 15-Days Free Trial" />
      <span class="extension__text">Short description about each chapter</span>
      <div class="extension__link">
        <b>Have any questions?</b>
        <router-link to="/contacts-us">Contact us</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue"
import Heading from "@/components/ui/heading/Heading.vue"
import Dots from "@/components/ui/dots/Dots.vue"

const chapters = [
  {
    title: "Chapter-1 Get Started Intro",
    description:
      "You can double your knowledge by reading this ever needed book that can last a lifetime.",
    pages: "250pages",
    length: "4 Hours",
  },
  {
    title: "Chapter-2 The Roman Culture",
    description:
      "It will help to improve your life career with the perfect and needed knowledge about your life.",
    pages: "250pages",
    length: "4 Hours",
  },
  {
    title: "Chapter-3 How They Survived",
    description: "We wanted to create an easy, convenient way for you to get your books & support.",
    pages: "250pages",
    length: "4 Hours",
  },
  {
    title: "Chapter-4 The End Of Romans",
    description: "Promote your book via Pages shop to support your writing & reading career.",
    pages: "250pages",
    length: "4 Hours",
  },
]
</script>

<style lang="scss" scoped>
.extension {
  padding: 100px 0;
  background-color: var(--neutral-bg);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__btn {
    display: block;
    margin-inline: auto;
    margin-bottom: 34px;

    @include mobile {
      width: 100%;
      padding: 1.125rem 0;
    }
  }

  &__text {
    display: block;
    margin: 0 0 16px;
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-18);
    font-weight: 400;
    text-align: center;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: var(--primary-color);
    font-family: var(--ff-primary);
    font-size: var(--fs-18);
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.19px;
    gap: 8px;

    a {
      color: var(--accent-color);
    }
  }
}

.chapter-list {
  margin: 70px 0 60px;
  padding: 0;
  gap: 30px;
  list-style: none;

  @include small-tablet {
    gap: 20px 0;
  }
}

.chapter-card {
  grid-column: 6 span;
  padding: 40px;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include small-tablet {
    grid-column: 12 span;
  }

  @include mobile {
    padding: 40px 20px;
  }

  &__title {
    margin: 0;
    margin-bottom: 21px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
  }

  &__desc {
    margin: 0;
    margin-bottom: 10px;
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
  }

  &__values {
    display: flex;
    align-items: center;
    gap: 30px;

    @include tablet {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 20px;
    }
  }

  &__pages,
  &__length {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__meta {
    margin: 0;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-22);
    font-weight: 400;
  }

  &__value {
    margin: 0;
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
  }
}
</style>
