<template>
  <div
    class="social"
    :class="[`social--${variant}`, { 'social--filled': filled }, hideAt ? `social--hide-${hideAt}` : '']"
  >
    <a
      v-for="item in links"
      :key="item.name"
      class="social__link"
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="item.name"
    >
      <svg :width="item.iconWidth" :height="item.iconHeight">
        <use :href="`#${item.icon}`"></use>
      </svg>
    </a>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "header",
    validator: (val) => ["header", "footer", "sidebar"].includes(val),
  },
  links: {
    type: Array,
    required: true,
    validator: (val) => val.every((item) => item.name && item.icon && item.url),
  },
  filled: {
    type: Boolean,
    default: true,
  },
  hideAt: {
    type: String,
    default: null,
    validator: (val) => ["desktop", "tablet", "small-tablet", "mobile"].includes(val),
  },
})
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  gap: 0.625rem;

  &--header {
    margin-right: auto;
  }

  &--footer {
    margin: 0;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    transition:
      fill var(--trs-35),
      border var(--trs-35),
      background-color var(--trs-35),
      box-shadow var(--trs-35);

    &:focus {
      outline: none;
    }

    &:hover {
      fill: var(--accent-color);
    }

    &:focus-visible {
      box-shadow: 0 0 0 3px var(--focus-visible);
    }
  }
}

.social--hide-desktop {
  @include desktop {
    display: none;
  }
}

.social--hide-tablet {
  @include tablet {
    display: none;
  }
}

.social--hide-small-tablet {
  @include small-tablet {
    display: none;
  }
}

.social--hide-mobile {
  @include mobile {
    display: none;
  }
}

.social--filled {
  .social__link {
    border: 2px solid var(--neutral-100);
    background-color: var(--neutral-100);
    fill: var(--primary-color);

    &:hover {
      fill: var(--accent-color);
      border: 2px solid var(--accent-color);
      background-color: transparent;
    }
  }
}

.social:not(.social--filled) {
  .social__link {
    border: 2px solid var(--accent-color);
    background-color: transparent;
    fill: var(--neutral-100);

    &:hover {
      fill: var(--primary-color);
      border: 2px solid var(--neutral-100);
      background-color: var(--neutral-100);
    }
  }
}
</style>
