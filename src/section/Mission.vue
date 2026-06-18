<template>
  <section class="mission">
    <div class="container">
      <Heading title="Our mission" align="center" />
      <div class="mission__grid">
        <div class="mission__card" v-for="mission in missions" :key="mission.id">
          <div class="mission__icon">
            <svg class="icon" width="45" height="45">
              <use :href="`#${mission.icon}`"></use>
            </svg>
          </div>
          <h3 class="mission__title">{{ mission.title }}</h3>
          <p class="mission__desc">{{ mission.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
defineProps({
  missions: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.mission {
  padding: 80px 0;
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @include small-tablet {
      grid-template-columns: repeat(2, 1fr);

      .mission__card:last-child {
        grid-column: span 2;
        max-width: 50%;
        justify-self: center;
      }
    }

    @include mobile {
      grid-template-columns: repeat(1, 1fr);

      .mission__card:last-child {
        grid-column: span 1;
        max-width: 100%;
        justify-self: center;
      }
    }
  }

  &__card {
    text-align: center;
    padding: 16px;
    background: rgb(255 255 255 / 5%);
  }

  &__title {
    margin: 20px 0 10px;
    color: var(--primary-color);
    font-size: var(--fs-24);
    font-weight: 400;
  }

  &__desc {
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }

  &__icon {
    color: var(--neutral-200);
  }
}
</style>
