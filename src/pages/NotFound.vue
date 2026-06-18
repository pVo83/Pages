<template>
  <main class="not-found">
    <div class="container">
      <div class="not-found__content">
        <span class="not-found__code">404</span>
        <h1 class="not-found__title">Page Not Found</h1>
        <p class="not-found__desc">
          Looks like this page went on a reading adventure and hasn't come back yet.
        </p>
        <Button title="Back to Home" variant="outline" size="large" @click="router.push('/')" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router"
import Button from "@/components/ui/button/Button.vue"

const router = useRouter()
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  align-items: center;
  height: 100dvh;
  padding: 80px 0;
  background-color: var(--neutral-100);

  .container {
    display: flex;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 560px;
    text-align: center;
    justify-content: center;
  }

  &__code {
    display: block;
    margin-bottom: 16px;
    color: var(--accent-color);
    font-family: var(--ff-secondary);
    font-size: 140px;
    font-weight: 700;
    line-height: 1;

    @include mobile {
      font-size: 90px;
    }
  }

  &__title {
    margin: 0 0 20px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-40);
    font-weight: 400;
  }

  &__desc {
    margin: 0 0 40px;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }
}
</style>
