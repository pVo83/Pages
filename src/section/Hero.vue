<template>
  <section class="hero">
    <div class="container | hero__container | grid">
      <div class="hero__content">
        <span class="hero__subtitle">Welcome to Pages</span>
        <h1 class="hero__title">Your Books From The Best Writer.</h1>
        <p class="hero__desc">
          We believe that reading books are essential to a healthy culture. They're where authors
          can connect with readers.
        </p>

        <div class="hero__buttons">
          <Button size="medium" title="Order Today" @click="router.push('/our-store')" />
          <a class="hero__read-link" href="#">Read Free Demo</a>
        </div>

        <ul class="specification">
          <li class="specification__item" v-for="item in specificationItems" :key="item.meta">
            <Dots :count="1" size="lg" :gradient="false" />
            <div class="specification__content">
              <span class="specification__meta">{{ item.meta }}:</span>
              <span class="specification__value">{{ item.value }}</span>
            </div>
          </li>
        </ul>
      </div>

      <OffsetImage
        webpSrc="/img/hero-img.webp"
        fallbackSrc="/img/hero-img.png"
        :width="592"
        :height="800"
        alt="img-books"
        customClass="hero__image-wrapper"
      />
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router"
import Button from "@/components/ui/button/Button.vue"
import OffsetImage from "@/components/ui/offset-image/OffsetImage.vue"
import Dots from "@/components/ui/dots/Dots.vue"

const router = useRouter()

const specificationItems = [
  { meta: "Pages", value: "250pages" },
  { meta: "Length", value: "10 Hours" },
  { meta: "Rating", value: "4.5/5 (305 ratings)" },
]
</script>

<style lang="scss" scoped>
.hero {
  padding: 100px 0;
  background-color: var(--primary-color);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__container {
    gap: 70px;
    align-items: center;

    @include tablet {
      gap: 50px 0;
    }
  }

  &__content {
    grid-column: 6 span;
    align-self: center;
    max-width: 550px;
    width: 100%;

    @include tablet {
      order: 1;
      grid-column: 12 span;
      max-width: 100%;
    }
  }

  &__subtitle {
    position: relative;
    display: block;
    margin-bottom: 10px;
    color: var(--neutral-100);
    font-family: var(--ff-secondary);
    font-size: var(--fs-22);
    font-weight: 400;
    letter-spacing: 1.2px;
    text-indent: 50px;

    &::after {
      position: absolute;
      top: 50%;
      left: 0;
      width: 35px;
      height: 2px;
      border-radius: 5px;
      background-color: var(--accent-color);
      transform: translateY(-50%);
      content: "";
    }
  }

  &__title {
    margin: 0;
    margin-bottom: 24px;
    color: var(--neutral-100);
    font-family: var(--ff-secondary);
    font-size: var(--fs-62);
    font-weight: 400;
    line-height: 1.4;
    transition: font-size var(--trs-35);
    letter-spacing: 1.3px;

    @include mobile {
      font-size: var(--fs-54);
      line-height: 1.2;
    }
  }

  &__desc {
    margin: 0;
    margin-bottom: 42px;
    color: var(--neutral-200);
    font-family: var(--ff-primary);
    font-size: var(--fs-18);
    font-weight: 400;

    @include mobile {
      font-size: var(--fs-16);
      line-height: 1.4;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-bottom: 50px;

    @include mobile {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__read-link {
    position: relative;
    color: var(--neutral-100);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    letter-spacing: 0.38px;

    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 10;
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

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 5px;
      background-color: var(--neutral-100);
      content: "";
    }
  }

  &__image-wrapper {
    grid-column: 6 span;
    max-width: 450px;
    margin-left: auto;

    @include tablet {
      grid-column: 12 span;
      margin-inline: auto;
    }
  }
}

.specification {
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;

  @include mobile {
    flex-direction: column;
    gap: 10px 0;
  }

  &__item {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 12px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    @include mobile {
      flex-direction: row;
      align-items: baseline;
      gap: 12px;
    }
  }

  &__meta {
    color: var(--neutral-100);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
    letter-spacing: 0.48px;
  }

  &__value {
    color: var(--neutral-200);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    white-space: nowrap;
  }
}
</style>
