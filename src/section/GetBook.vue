<template>
  <section class="get-book">
    <div class="container | get-book__container | grid">
      <div class="get-book__content">
        <Heading align="left" text-color="var(--neutral-100)">Get Book Copy <span class="text-accent">Today!</span></Heading>
        <p class="get-book__descr">
          We believe that bookstores are essential to a healthy culture. They’re where authors can
          connect with readers.
        </p>
        <Button
          class="get-book__btn"
          variant="outline-light"
          size="medium"
          title="Order Today"
          @click="router.push('/our-store')"
        />
      </div>
      <picture class="get-book__picture">
        <source :srcset="publicUrl('img/get-book.webp')" type="image/webp" />
        <img
          class="get-book__img"
          loading="lazy"
          :src="publicUrl('img/get-book.png')"
          width="560"
          height="394"
          alt="images"
        />
      </picture>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router"
import Button from "@/components/ui/button/Button.vue"
import Heading from "@/components/ui/heading/Heading.vue"
import { publicUrl } from "@/utils/publicUrl"

const router = useRouter()
</script>

<style lang="scss" scoped>
.get-book {
  padding: 80px 0;
  background-color: var(--primary-color);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__container {
    gap: 70px;

    @include tablet {
      gap: 50px 0;
    }
  }

  &__content {
    grid-column: 6 span;
    align-self: center;

    @include tablet {
      order: 1;
      grid-column: 12 span;
      margin-inline: auto;
    }

    @include mobile {
      text-align: center;
    }
  }

  &__title {
    margin: 0;
    margin-bottom: 27px;
    color: var(--neutral-100);
    font-family: var(--ff-secondary);
    font-size: var(--fs-45);
    font-weight: 400;
  }

  &__descr {
    width: 100%;
    margin: 0;
    margin-top: 27px;
    margin-bottom: 27px;
    color: var(--neutral-200);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    max-width: 610px;

    @include tablet {
      max-width: 886px;
    }
  }

  &__picture {
    grid-column: 6 span;
    margin-left: auto;

    @include tablet {
      grid-column: 12 span;
      margin-inline: auto;
    }
  }

  &__img {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &__btn {
    @include mobile {
      width: 100%;
    }
  }
}

.decor-line {
  &--cntr {
    @include mobile {
      margin-inline: auto;
    }
  }
}
</style>
