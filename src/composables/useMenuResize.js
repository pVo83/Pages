import { onMounted, onUnmounted } from "vue"

export function useMenuResize(closeMenu, breakpoint = 1024) {
  const handleResize = () => {
    if (window.innerWidth > breakpoint) {
      closeMenu()
    }
  }

  onMounted(() => window.addEventListener("resize", handleResize, { passive: true }))
  onUnmounted(() => window.removeEventListener("resize", handleResize))
}
