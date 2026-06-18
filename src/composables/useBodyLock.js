import { watch } from "vue"

export function useBodyLock(isLocked, className = "_lock") {
  watch(isLocked, (locked) => {
    document.body.classList.toggle(className, locked)
  })
}
