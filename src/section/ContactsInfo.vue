<template>
  <section class="contacts-info">
    <div class="container">
      <div class="contacts-info__grid">
        <div class="contacts-info__item" v-for="info in infoList" :key="info.id">
          <div class="contacts-info__icon">
            <svg class="icon" width="24" height="24">
              <use :href="info.icon" />
            </svg>
          </div>
          <div class="contacts-info__content">
            <h3 class="contacts-info__title">{{ info.title }}</h3>
            <div class="contacts-info__value-wrapper">
              <p class="contacts-info__value">{{ info.value }}</p>
              <p class="contacts-info__small">{{ info.small }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  infoList: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.contacts-info {
  padding: 60px 0;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);

      .contacts-info__item:last-child {
        grid-column: span 2;
        max-width: 50%;
        justify-self: center;
      }
    }

    @include mobile {
      grid-template-columns: repeat(1, 1fr);

      .contacts-info__item:last-child {
        grid-column: span 1;
        max-width: 100%;
        justify-self: center;
      }
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 30px;
    text-align: center;
  }

  &__title {
    margin: 0 0 8px;
    color: var(--neutral-200);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
  }

  &__value-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__value {
    margin: 0;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: var(--neutral-100);
    fill: var(--neutral-100);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__small {
    color: var(--accent-color);
    font-size: var(--fs-14);
    line-height: 1.6;
  }
}
</style>
