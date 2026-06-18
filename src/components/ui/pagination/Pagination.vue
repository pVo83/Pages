<template>
  <div class="pagination" v-if="totalPages > 1">
    <div class="pagination__controls">
      <Button
        class="pagination__btn"
        size="small"
        variant="outline"
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        Previous
      </Button>

      <Button
        v-for="page in visiblePages"
        :key="page"
        size="small"
        variant="outline"
        class="pagination__btn"
        :class="{ 'pagination__btn--active': currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </Button>

      <Button
        class="pagination__btn"
        size="small"
        variant="outline"
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        Next
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../button/Button.vue"
import { computed } from "vue"

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  maxVisible: {
    type: Number,
    default: 3,
  },
})

const emit = defineEmits(["update:currentPage"])

const visiblePages = computed(() => {
  const pages = []
  let startPage = Math.max(1, props.currentPage - Math.floor(props.maxVisible / 2))
  let endPage = Math.min(props.totalPages, startPage + props.maxVisible - 1)

  if (endPage - startPage + 1 < props.maxVisible) {
    startPage = Math.max(1, endPage - props.maxVisible + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  return pages
})

const goToPage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("update:currentPage", page)
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  padding: 40px 0;

  &__controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  &__btn {
    &--active {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: var(--primary-color);
    }
  }
}
</style>
