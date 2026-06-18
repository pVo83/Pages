import { ref, computed } from "vue"
import { books } from "@/pages/model/constsPages/Index"

const ITEMS_PER_PAGE = 6

export function useStoreFilters() {
  const activeTab = ref("All")
  const currentPage = ref(1)

  const filteredBooks = computed(() => {
    if (activeTab.value === "All") return books
    return books.filter((book) => book.category === activeTab.value)
  })

  const totalPages = computed(() => Math.ceil(filteredBooks.value.length / ITEMS_PER_PAGE))

  const paginatedBooks = computed(() => {
    const start = (currentPage.value - 1) * ITEMS_PER_PAGE
    return filteredBooks.value.slice(start, start + ITEMS_PER_PAGE)
  })

  function handleTabChange(tabValue) {
    activeTab.value = tabValue
    currentPage.value = 1
  }

  return { activeTab, currentPage, paginatedBooks, totalPages, handleTabChange }
}
