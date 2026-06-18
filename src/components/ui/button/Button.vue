<template>
  <button :class="buttonClasses" :disabled="disabled" :type="type" @click="$emit('click', $event)">
    <slot>{{ title }}</slot>
    <svg v-if="icon" class="icon" width="18" height="18" aria-hidden="true">
      <use :href="icon" />
    </svg>
  </button>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "outline", "outline-light"].includes(value),
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
    validator: (value) => ["button", "submit", "reset"].includes(value),
  },
  icon: {
    type: String,
    default: null,
  },
})

defineEmits(["click"])

const buttonClasses = computed(() => {
  return ["btn", `btn--${props.variant}`, `btn--${props.size}`, { "btn--disabled": props.disabled }]
})
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 59px;
  border: 2px solid transparent;
  font-family: var(--ff-secondary);
  font-weight: 400;
  cursor: pointer;
  transition: var(--trs-35);
  outline: none;
  white-space: nowrap;

  &:focus-visible {
    box-shadow: 0 0 0 5px var(--accent-color);
  }

  &--small {
    height: 49px;
    padding: 0 22px;
    font-size: 16px;
  }

  &--medium {
    height: 59px;
    padding: 0 32px;
    font-size: 19px;
  }

  &--large {
    height: 48px;
    padding: 0 24px;
    font-size: 16px;
  }

  &--primary {
    background-color: var(--accent-color);
    color: var(--primary-color);
    border-color: var(--accent-color);

    &:hover:not(.btn--disabled) {
      border-color: var(--accent-color);
      background-color: transparent;
      color: var(--neutral-100);
    }
  }

  &--secondary {
    background-color: #6c757d;
    color: #fff;
    border-color: #6c757d;

    &:hover:not(.btn--disabled) {
      border-color: #5a6268;
      background-color: #5a6268;
    }
  }

  &--outline {
    background-color: transparent;
    color: var(--primary-color);
    border-color: var(--accent-color);

    &:hover:not(.btn--disabled) {
      background-color: var(--accent-color);
      color: var(--primary-color);
    }
  }

  &--outline-light {
    background-color: transparent;
    color: var(--neutral-100);
    border-color: var(--accent-color);

    &:hover:not(.btn--disabled) {
      background-color: var(--accent-color);
      color: var(--primary-color);
    }
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;

    &:hover {
      transform: none;
    }
  }
}
</style>
