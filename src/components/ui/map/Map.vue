<template>
  <div class="map">
    <iframe
      class="map__iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.476315582937!2d39.715392!3d47.222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b8e7b7b7b7b7%3A0x0!2z0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMsINCj0LsuINCb0LXRgNC80L7QvdGC0L7QstGB0LrQsNGPLCDQtNC-0Lwg0LjQstCwINC-0ZQuINC40LTRg9C8INC00L7QvA!5e0!3m2!1sru!2sru!4v1234567890"
      width="100%"
      height="100%"
      style="border: 0"
      title="Store location map"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="map__address">
      <div class="map__pin">
        <svg class="icon" width="24" height="24" aria-hidden="true">
          <use href="#geo" />
        </svg>
      </div>
      <div>
        <span>24A Kingston St, Las Vegas NV 28202, USA.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.476315582937!2d39.715392!3d47.222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b8e7b7b7b7b7%3A0x0!2z0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMsINCj0LsuINCb0LXRgNC80L7QvdGC0L7QstGB0LrQsNGPLCDQtNC-0Lwg0LjQstCwINC-0ZQuINC40LTRg9C8INC00L7QvA!5e0!3m2!1sru!2sru!4v1234567890",
  },
  address: {
    type: String,
    default: "24A Kingston St, Las Vegas NV 28202, USA.",
  },
})
</script>

<style lang="scss" scoped>
.map {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;

  &__iframe {
    display: block;
    width: 100%;
    height: 400px;
  }

  &__address {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 10;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    border-radius: 12px;
    background: rgb(255 255 255 / 80%);
    gap: 12px;
    backdrop-filter: blur(8px);

    div {
      display: flex;
      flex-direction: column;

      span {
        color: var(--primary-color);
        font-size: var(--fs-12);
      }
    }
  }

  &__pin {
    font-size: 24px;
  }
}
</style>
