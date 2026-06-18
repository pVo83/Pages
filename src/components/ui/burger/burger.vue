<template>
  <button
    class="burger"
    :class="{ 'burger--active': isOpen }"
    :aria-label="isOpen ? 'Close menu' : 'Open menu'"
    :aria-expanded="isOpen"
    aria-controls="primary-navigation"
    @click="$emit('toggle')"
  >
    <span class="burger__label">
      <span class="burger__line burger__line--one"></span>
      <span class="burger__line burger__line--two"></span>
      <span class="burger__line burger__line--three"></span>
    </span>
  </button>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

defineEmits(["toggle"])
</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  z-index: 1;
  display: none;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  order: 1;

  @include tablet {
    display: block;
  }

  &__label {
    position: relative;
    display: block;
    width: 30px;
    height: 40px;
    cursor: pointer;

    &:hover .burger__line {
      background-color: var(--accent-color);
      transition: background-color var(--trs-35);
    }
  }

  &--active {
    .burger__line {
      background-color: var(--accent-color);
    }
  }

  &__line {
    position: absolute;
    right: 0;
    display: inline-block;
    width: 30px;
    height: 2px;
    background-color: var(--neutral-100);

    &--one {
      top: 9px;
    }

    &--two {
      top: 50%;
      width: 25px;
      transform: translateY(-50%);
    }

    &--three {
      bottom: 9px;
    }
  }
}
</style>
