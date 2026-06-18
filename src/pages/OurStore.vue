<template>
  <main class="store-page">
    <section class="products-hero">
      <div class="container">
        <Heading align="center">Our <span class="text-accent">Store</span></Heading>
        <p class="products-hero__desc">
          Discover our curated collection of best-selling books across multiple genres
        </p>
      </div>
    </section>

    <section class="filters">
      <div class="container">
        <div class="filters__tabs">
          <Tabs :tabs="tabs" :active-tab="activeTab" @update:active="handleTabChange" />
        </div>
      </div>
    </section>

    <section class="products-grid">
      <div class="container">
        <ul class="products-grid__list">
          <BookCard
            v-for="book in paginatedBooks"
            :key="book.id"
            :title="book.title"
            :price="book.price"
            :image-name="book.imageName"
            :alt="book.alt"
          />
        </ul>
      </div>
    </section>

    <Pagination v-model:current-page="currentPage" :total-pages="totalPages" />
  </main>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
import BookCard from "@/components/ui/book-card/BookCard.vue"
import Pagination from "@/components/ui/pagination/Pagination.vue"
import Tabs from "@/components/ui/tabs/Tabs.vue"
import { useStoreFilters } from "@/composables/useStoreFilters"

const tabs = [
  { id: 1, label: "All", value: "All" },
  { id: 2, label: "Fiction", value: "Fiction" },
  { id: 3, label: "Non-Fiction", value: "Non-Fiction" },
  { id: 4, label: "Children", value: "Children" },
  { id: 5, label: "Academic", value: "Academic" },
]

const { activeTab, currentPage, paginatedBooks, totalPages, handleTabChange } = useStoreFilters()
</script>

<style lang="scss" scoped>
.products-hero {
  padding: 60px 0 0;

  &__desc {
    max-width: 600px;
    margin: 34px auto 0;
    color: var(--neutral-300);
    text-align: center;
    font-size: var(--fs-16);
    line-height: 1.6;
  }
}

.filters {
  padding: 30px 0;

  &__tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
}

.products-grid {
  padding: 30px 0;

  &__list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
}
</style>
