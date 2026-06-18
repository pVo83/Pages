<template>
  <section class="team">
    <div class="container">
      <Heading title="Meet Our Team" align="center" />
      <div class="team__grid">
        <div class="team__card" v-for="team in teams" :key="team.id">
          <picture class="team__picture">
            <source :srcset="team.avatar.replace('.png', '.webp')" type="image/webp" />
            <img
              class="team__avatar"
              loading="lazy"
              :src="team.avatar"
              :alt="team.name"
              width="120"
              height="120"
            />
          </picture>
          <h4 class="team__name">{{ team.name }}</h4>
          <span class="team__role">{{ team.role }}</span>
          <p class="team__bio">{{ team.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
defineProps({
  teams: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.team {
  padding: 0 0 80px;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 0 0 60px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;

    @include small-tablet {
      grid-template-columns: repeat(2, 1fr);

      .team__card:last-child {
        grid-column: span 2;
        max-width: 50%;
        justify-self: center;
      }
    }

    @include mobile {
      grid-template-columns: repeat(1, 1fr);

      .team__card:last-child {
        grid-column: span 1;
        max-width: 100%;
        justify-self: center;
      }
    }
  }

  &__card {
    text-align: center;
    padding: 16px;
  }

  &__picture {
    display: block;
    margin-bottom: 20px;
  }

  &__avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__name {
    margin-bottom: 5px;
    font-size: var(--fs-22);
    font-weight: 400;
  }

  &__role {
    color: var(--accent-color);
    font-size: var(--fs-14);
    font-weight: 400;
  }

  &__bio {
    margin-top: 15px;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }
}
</style>
