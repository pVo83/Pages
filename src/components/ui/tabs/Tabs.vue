<template>
  <div class="tabs">
    <div class="tabs__list">
      <Button
        v-for="tab in tabs"
        :key="tab.id"
        class="tabs__btn"
        variant="outline"
        size="small"
        :class="{ 'tabs__btn--active': activeTab === tab.value }"
        @click="$emit('update:active', tab.value)"
      >
        {{ tab.label }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../button/Button.vue"
defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
})

defineEmits(["update:active"])
</script>

<style lang="scss" scoped>
.tabs {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
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
