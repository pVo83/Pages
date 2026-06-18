<template>
  <nav class="nav" :class="{ 'nav--open': isOpen }" aria-label="primary-navigation">
    <div class="nav__inner">
      <div class="nav__top">
        <router-link
          to="/"
          class="nav__logo"
          aria-label="Pages Bookstore — Home"
          @click="$emit('close')"
        >
          <svg width="100" height="30" aria-hidden="true">
            <use href="#logo"></use>
          </svg>
        </router-link>
      </div>

      <ul class="nav__list">
        <li class="nav__item" v-for="item in items" :key="item.id">
          <router-link
            :to="item.path"
            class="nav__link"
            :class="{ 'nav__link--active': route.path === item.path }"
            @click="$emit('close')"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <div class="nav__footer">
        <Button
          class="nav__cta"
          title="Order Today"
          variant="primary"
          size="medium"
          @click="goToStore"
        />
        <Social
          v-if="socialLinks.length"
          class="nav__social"
          variant="footer"
          :links="socialLinks"
          :filled="false"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import Button from "@/components/ui/button/Button.vue"
import Social from "@/components/ui/social/Social.vue"

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  socialLinks: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(["close"])

const route = useRoute()
const router = useRouter()

const items = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Articles", path: "/articles" },
  { id: 4, name: "Our Store", path: "/our-store" },
  { id: 5, name: "Contact Us", path: "/contacts-us" },
]

const goToStore = () => {
  router.push("/our-store")
  emit("close")
}
</script>

<style lang="scss" scoped>
.nav {
  @include tablet {
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 1000;
    width: 100%;
    max-width: 400px;
    height: 100dvh;
    background-color: var(--primary-color);
    transition:
      max-width var(--trs-35),
      left var(--trs-35);
    overflow: auto;
  }

  @include mobile {
    max-width: 280px;
  }

  &--open {
    @include tablet {
      left: 0;
    }
  }

  &__inner {
    display: flex;
    flex-direction: row;
    align-items: center;

    @include tablet {
      flex-direction: column;
      align-items: stretch;
      height: 100%;
      padding: 28px 32px;
    }
  }

  &__top {
    display: none;

    @include tablet {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }

  &__logo {
    display: flex;
    fill: var(--neutral-100);
    opacity: 0.9;
    transition: opacity var(--trs-25);

    &:hover {
      opacity: 1;
    }
  }

  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    @include tablet {
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }

  &__item:not(:last-child) {
    margin-right: 2.9375rem;

    @include tablet {
      margin-right: 0;
    }
  }

  &__link {
    color: var(--neutral-100);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    text-decoration: none;
    letter-spacing: 0.17px;
    transition: color var(--trs-35);

    &--active {
      color: var(--accent-color);
    }

    &:focus {
      outline: none;
    }

    &:hover {
      color: var(--accent-color);
    }

    @include tablet {
      display: block;
      padding: 10px 0;
      font-size: 22px;
      line-height: 1.3;
      text-align: center;
    }
  }

  &__footer {
    display: none;

    @include tablet {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      padding-top: 32px;
      border-top: 1px solid hsl(0deg 0% 100% / 12%);
    }
  }

  &__cta {
    @include tablet {
      width: 100%;
    }
  }

  &__social {
    margin-right: 0;
  }
}
</style>
