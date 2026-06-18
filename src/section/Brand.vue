<template>
  <section class="brand">
    <div class="container">
      <Heading>Trusted By <span class="text-accent">The Best</span></Heading>
      <ul class="brand__list grid">
        <li v-for="brand in brands" :key="brand.name" class="brand__item">
          <picture class="brand__picture">
            <source :srcset="publicUrl(`img/brands/${brand.imageName}.webp`)" type="image/webp" />
            <img
              class="brand__img"
              loading="lazy"
              :src="publicUrl(`img/brands/${brand.imageName}.png`)"
              width="100"
              height="100"
              :alt="brand.alt"
            />
          </picture>
          <h4 class="brand__name">{{ brand.name }}</h4>
          <p class="brand__desc">{{ brand.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
import { publicUrl } from "@/utils/publicUrl"

const brands = [
  {
    name: "Amazen Corp.",
    description:
      "They has been helping readers, music lovers, and videophiles find quality material.",
    imageName: "Amazen-Corp",
    alt: "images amazen-corp brands",
  },
  {
    name: "Megan Books",
    description: "We help physical bookstores manage their overstock to the book inventory.",
    imageName: "Megan-Books",
    alt: "images megan-books brands",
  },
  {
    name: "Megank",
    description: "Bookstore serving up the full spectrum of Black literature and wine black books.",
    imageName: "Megank",
    alt: "images megank brands",
  },
  {
    name: "Urban Store",
    description: "We also carry the latest records, issues of all of your favorite comic books.",
    imageName: "Urban-Store",
    alt: "images urban-store brands",
  },
]
</script>

<style lang="scss" scoped>
.brand {
  padding: 100px 0;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__title {
    margin: 0;
    margin-bottom: 23px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-42);
    font-weight: 400;
    text-align: center;
  }

  &__list {
    margin: 0;
    margin-top: 50px;
    padding: 0;
    gap: 47px;
    list-style: none;
    text-align: center;

    @include mobile {
      gap: 50px 0;
    }
  }

  &__item {
    grid-column: 3 span;

    @include tablet {
      grid-column: 6 span;
    }

    @include mobile {
      grid-column: 12 span;
    }
  }

  &__picture {
    display: block;
    width: 100%;
    max-width: 100px;
    height: 100px;
    overflow: hidden;
    margin-inline: auto;
  }

  &__img {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &__name {
    margin: 19px 0;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
    text-align: center;
  }

  &__desc {
    display: -webkit-box;
    margin: 0 auto;
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    overflow: hidden;
    text-align: center;
    max-width: 290px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @include tablet {
      max-width: 400px;
    }

    @include mobile {
      -webkit-line-clamp: 4;
    }
  }
}
</style>
