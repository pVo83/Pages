<template>
  <component
    :is="tag"
    class="heading"
    :class="[`heading--${tag}`, `heading--${align}`, { 'heading--with-line': withLine }]"
  >
    <span class="heading__title" :style="titleStyle">
      <slot>
        {{ title }}
      </slot>
    </span>
    <div v-if="withLine" class="heading__line" :style="lineStyle"></div>
  </component>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "h2",
    validator: (val) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(val),
  },
  align: {
    type: String,
    default: "center",
    validator: (val) => ["left", "center", "right"].includes(val),
  },
  withLine: {
    type: Boolean,
    default: true,
  },
  textColor: {
    type: String,
    default: "var(--primary-color)",
  },
  lineColor: {
    type: String,
    default: "var(--accent-color)",
  },
  lineWidth: {
    type: String,
    default: "50px",
  },
  lineHeight: {
    type: String,
    default: "3px",
  },
})

const titleStyle = computed(() => ({
  color: props.textColor,
}))

const lineStyle = computed(() => ({
  width: props.lineWidth,
  height: props.lineHeight,
  backgroundColor: props.lineColor,
}))
</script>

<style lang="scss" scoped>
.heading {
  display: block;
  margin: 0;

  .heading__title {
    display: block;
    margin: 0;
    margin-bottom: 22px;
    text-align: center;
    font-family: var(--ff-secondary);
    font-weight: 400;
  }

  .heading__line {
    margin: 0 auto;
  }

  // Размеры шрифта для разных тегов
  &--h1 .heading__title {
    font-size: var(--fs-48);
  }

  &--h2 .heading__title {
    font-size: var(--fs-42);
  }

  // Выравнивание
  &--left {
    .heading__title {
      text-align: left;
    }

    .heading__line {
      margin: 0;
    }
  }

  &--right {
    .heading__title {
      text-align: right;
    }

    .heading__line {
      margin-right: 0;
      margin-left: auto;
    }
  }

  &--center {
    .heading__title {
      text-align: center;
    }

    .heading__line {
      margin-inline: auto;
    }
  }

  // Если линии нет
  &--with-line {
    .heading__title {
      margin-bottom: 23px;
    }
  }
}
</style>
