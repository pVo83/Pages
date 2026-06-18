<template>
  <li class="book-card" :class="{ 'book-card--plain': plain }">
    <picture class="book-card__picture">
      <source :srcset="webpUrl" type="image/webp" />
      <img
        class="book-card__img"
        loading="lazy"
        :src="imageUrl"
        :width="width"
        :height="height"
        :alt="alt"
      />
    </picture>
    <div class="book-card__content">
      <h3 class="book-card__name">{{ title }}</h3>
      <span class="book-card__price">{{ price }}</span>
      <p class="book-card__desc">{{ description }}</p>

      <div class="book-card__meta">
        <Dots :count="1" size="lg" :gradient="false" />
        <span class="book-card__meta-text">Printed Book</span>
      </div>

      <Button
        class="book-card__btn"
        title="Order Today"
        variant="outline"
        :size="btnSize"
        @click="router.push('/our-store')"
      />
    </div>
  </li>
</template>

<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"
import Button from "../button/Button.vue"
import Dots from "../dots/Dots.vue"

const router = useRouter()

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "As the book contains theoretical content as well as solved questions.",
  },
  imageName: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    default: 285,
  },
  height: {
    type: [String, Number],
    default: 382,
  },
  btnSize: {
    type: String,
    default: "small",
  },
  plain: {
    type: Boolean,
    default: false,
  },
})

import { publicUrl } from "@/utils/publicUrl"

const imageUrl = computed(() => publicUrl(`img/${props.imageName}.png`))
const webpUrl = computed(() => publicUrl(`img/${props.imageName}.webp`))
</script>

<style lang="scss" scoped>
.book-card {
  display: flex;
  border-radius: 16px;
  background-color: var(--neutral-100);
  gap: 30px;
  grid-column: 6 span;

  &--plain {
    padding: 0;
    border-radius: 0;
    background-color: transparent;
  }

  @include tablet {
    grid-column: 12 span;
    justify-content: center;
  }

  @include mobile {
    flex-direction: column;
  }

  &__picture {
    display: inline-block;
    width: 100%;
    height: 100%;

    @include tablet {
      width: auto;
    }
  }

  &__img {
    display: block;
    height: 100%;
    object-fit: contain;
    object-position: center center;

    @include mobile {
      margin-inline: auto;
    }
  }

  &__content {
    width: 100%;
    max-width: 315px;
    align-self: center;

    @include tablet {
      max-width: 50%;
    }

    @include mobile {
      max-width: 100%;
      text-align: center;
    }
  }

  &__name {
    margin: 0;
    margin-bottom: 7px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-32);
    font-weight: 400;
    letter-spacing: 0.32px;
  }

  &__price {
    display: block;
    margin-bottom: 13px;
    color: var(--accent-color);
    font-family: var(--ff-primary);
    font-size: var(--fs-22);
    font-weight: 400;
  }

  &__desc {
    margin: 0;
    margin-bottom: 17px;
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;

    @include mobile {
      max-width: 500px;
      margin-inline: auto;
      margin-bottom: 17px;
    }
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 27px;
  }

  &__printed {
    position: relative;
    display: inline-block;
    margin-bottom: 27px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
    transition: color var(--trs-35);
    text-indent: 25px;

    &:focus {
      outline: none;
    }

    &:hover {
      color: var(--accent-color);
    }
  }

  &__btn {
    display: block;
    transition: var(--trs-35);

    @include mobile {
      margin-inline: auto;
      width: 100%;
    }
  }
}
</style>
