<template>
  <section class="author">
    <div class="container">
      <Heading>The Author's <span class="text-accent">Book</span></Heading>

      <ul class="author__list | grid">
        <BookCard
          v-for="book in books"
          :key="book.title"
          :title="book.title"
          :price="book.price"
          :image-name="book.imageName"
          :alt="book.alt"
          btn-size="medium"
          :plain="true"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import BookCard from "@/components/ui/book-card/BookCard.vue"
import Heading from "@/components/ui/heading/Heading.vue"

const books = [
  {
    title: "Atomic One's",
    price: "$ 13.84 USD",
    imageName: "hero-img2",
    alt: "book hover Atomic One’s",
  },
  {
    title: "The Dark Light",
    price: "$ 86.11 USD",
    imageName: "hero-img3",
    alt: "book hover The Dark Light",
  },
]
</script>

<style lang="scss" scoped>
.author {
  padding: 80px 0 0;

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
    padding: 60px 0;
    gap: 20px;

    @include mobile {
      gap: 40px 0;
    }
  }
}
</style>
