<template>
  <div :class="['offset-image-wrapper', customClass]">
    <div class="offset-image">
      <picture>
        <source :srcset="resolvedWebpSrc" type="image/webp" />
        <img
          class="offset-image__img"
          :class="imgClass"
          loading="lazy"
          :src="resolvedFallbackSrc"
          :width="width"
          :height="height"
          :alt="alt"
        />
      </picture>
      <div class="offset-image__border"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"

import { publicUrl } from "@/utils/publicUrl"

const props = defineProps({
  webpSrc: { type: String, required: true },
  fallbackSrc: { type: String, required: true },
  width: { type: [String, Number], default: "525" },
  height: { type: [String, Number], default: "620" },
  alt: { type: String, default: "" },
  customClass: { type: String, default: "" },
  imgClass: { type: String, default: "" },
})

const resolvedWebpSrc = computed(() => publicUrl(props.webpSrc))
const resolvedFallbackSrc = computed(() => publicUrl(props.fallbackSrc))
</script>

<style lang="scss" scoped>
.offset-image-wrapper {
  display: block;
  width: 100%;
  max-width: 525px;

  @include tablet {
    margin-inline: auto;
  }
}

.offset-image {
  position: relative;
  left: -30px;
  display: inline-block;
  width: auto;

  @include tablet {
    left: 0;
    display: block;
    width: 100%;
  }

  picture {
    display: block;
  }

  &__img {
    position: relative;
    z-index: 2;
    display: block;
    width: 100%;
    height: auto;
    box-shadow: 0 0 20px 0 hsl(217deg 57% 25% / 30%);
    object-fit: cover;
    object-position: center center;
  }

  &__border {
    position: absolute;
    top: -30px;
    left: 30px;
    width: 100%;
    height: 100%;
    border: 10px solid hsl(43deg 100% 63%);
    pointer-events: none;
    transition: left var(--trs-35);

    @include small-tablet {
      left: 0;
    }
  }
}
</style>
