<template>
  <div class="dots" :class="[`dots--${size}`, { 'dots--gradient': gradient }]">
    <span class="dots__item" v-for="i in count" :key="i"></span>
  </div>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    default: 3,
  },
  size: {
    type: String,
    default: "md",
    validator: (val) => ["sm", "md", "lg"].includes(val),
  },
  gradient: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss" scoped>
.dots {
  display: flex;
  gap: 8px;

  &__item {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--accent-color);
    opacity: 1;
  }

  &--sm .dots__item {
    width: 6px;
    height: 6px;
  }

  &--md .dots__item {
    width: 8px;
    height: 8px;
  }

  &--lg .dots__item {
    width: 16px;
    height: 16px;
  }

  &--gradient {
    .dots__item {
      &:first-child {
        opacity: 1;
      }

      &:nth-child(2) {
        opacity: 0.7;
      }

      &:last-child {
        opacity: 0.3;
      }
    }
  }
}
</style>
