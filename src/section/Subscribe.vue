<template>
  <section class="subscribe">
    <div class="container">
      <div class="subscribe__content">
        <Heading title="Get The Best Updates" lineColor="var(--primary-color)" />
        <p class="subscribe__desc">
          Subscribe with your email to get the latest book editions and exclusive offers delivered
          straight to your inbox.
        </p>

        <template v-if="!submitted">
          <form class="subscribe__form" @submit.prevent="handleSubmit">
            <div class="subscribe__label">
              <label for="subscribe-email" class="visually-hidden">Your email address</label>
              <input
                id="subscribe-email"
                v-model="email"
                type="text"
                class="input-reset subscribe__input"
                placeholder="Your Email ID..."
                autocomplete="email"
                :disabled="loading"
                :aria-describedby="error ? 'subscribe-error' : undefined"
                :aria-invalid="!!error"
              />
            </div>
            <button class="btn | subscribe__btn" :disabled="loading">
              {{ loading ? "Sending..." : "Subscribe" }}
            </button>
            <span v-if="error" id="subscribe-error" class="subscribe__error" role="alert">
              {{ error }}
            </span>
          </form>
        </template>

        <p v-else class="subscribe__success">Thank you! You've successfully subscribed.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
import { useSubscribeForm } from "@/composables/useSubscribeForm"

const { email, error, loading, submitted, handleSubmit } = useSubscribeForm()
</script>

<style lang="scss" scoped>
.subscribe {
  padding: 100px 0;
  background-color: transparent;
  transition:
    padding var(--trs-35),
    margin var(--trs-35);

  @include small-tablet {
    background-color: var(--accent-color);
  }

  @include mobile {
    padding: 60px 0;
  }

  &__content {
    position: relative;
    height: 464px;
    padding: 95px;
    background-color: var(--accent-color);

    @include small-tablet {
      height: auto;
      padding: 0 35px;
      background-color: transparent;
    }

    @include mobile {
      padding: 0 16px;
    }
  }

  &__title {
    margin: 0;
    margin-bottom: 24px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-42);
    font-weight: 400;
    text-align: center;
  }

  &__desc {
    margin: 0;
    margin-top: 25px;
    margin-bottom: 50px;
    color: var(--primary-color);
    font-family: var(--ff-primary);
    font-size: var(--fs-18);
    font-weight: 400;
    text-align: center;
    max-width: 550px;
    margin-inline: auto;
  }

  &__form {
    position: relative;
    display: flex;
    width: 100%;
    gap: 20px;

    @include small-tablet {
      flex-direction: column;
    }
  }

  &__label {
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    padding: 0 40px;
    background-color: var(--neutral-100);
  }

  &__input {
    width: 100%;
    background-color: transparent;
    color: var(--primary-color);
    font-family: var(--ff-primary);
    font-size: var(--fs-18);
    font-weight: 400;
    letter-spacing: 0.1px;
    text-align: left;
  }

  &__error {
    position: absolute;
    bottom: -30px;
    left: 50%;
    display: block;
    margin-top: 12px;
    color: var(--danger-color);
    font-family: var(--ff-primary);
    font-size: 13px;
    transform: translateX(-50%);
    text-align: center;
  }

  &__success {
    position: absolute;
    bottom: 114px;
    left: 50%;
    margin: 0;
    color: var(--primary-color);
    font-family: var(--ff-primary);
    font-size: var(--fs-18);
    font-weight: 500;
    transform: translateX(-50%);
    text-align: center;
  }

  &__btn {
    height: 65px;
    padding: 0 125px;
    border: 2px solid transparent;
    background-color: var(--primary-color);
    color: var(--neutral-100);
    transition:
      background-color var(--trs-35),
      fill var(--trs-35),
      border var(--trs-35),
      padding var(--trs-35),
      color var(--trs-35);

    &:hover {
      border: 2px solid var(--primary-color);
      background-color: transparent;
      color: var(--primary-color);
      fill: var(--accent-color);
    }

    @include tablet {
      padding: 0 45px;
    }
  }
}
</style>
