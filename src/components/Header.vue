<template>
  <header class="header" :class="{ 'header--active': isMenuOpen || isScrolled }">
    <div class="container">
      <div class="header__content">
        <div class="row-group">
          <Logo />
          <Social variant="header" hide-at="desktop" :links="headerSocialLinks" />
        </div>
        <div class="row-group">
          <Navigation :is-open="isMenuOpen" :social-links="headerSocialLinks" @close="closeMenu" />
          <Cart />
          <Button
            class="header__btn"
            size="medium"
            title="Order Today"
            @click="router.push('/our-store')"
          />
          <Burger :is-open="isMenuOpen" @toggle="toggleMenu" />
        </div>
      </div>
    </div>

    <div class="overlay" :class="{ 'overlay--open': isMenuOpen }" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import Cart from "@/components/ui/cart/cart.vue"
import Burger from "@/components/ui/burger/burger.vue"
import Button from "@/components/ui/button/Button.vue"
import Logo from "@/components/ui/logo/logo.vue"
import Navigation from "@/components/ui/navigation/navigation.vue"
import Social from "@/components/ui/social/Social.vue"
import { useMenuResize } from "@/composables/useMenuResize.js"
import { useBodyLock } from "@/composables/useBodyLock"
import { useScrolled } from "@/composables/useScrolled"

const router = useRouter()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const { isScrolled } = useScrolled()

useMenuResize(closeMenu)
useBodyLock(isMenuOpen)

const headerSocialLinks = [
  {
    name: "Facebook",
    icon: "fb",
    url: "#",
    iconWidth: 9,
    iconHeight: 15,
  },
  {
    name: "Twitter",
    icon: "tw",
    url: "#",
    iconWidth: 14,
    iconHeight: 12,
  },
  {
    name: "LinkedIn",
    icon: "in",
    url: "#",
    iconWidth: 13,
    iconHeight: 13,
  },
]
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--primary-color);
  transition: box-shadow var(--trs-35);
  min-height: 109px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__btn {
    @include small-tablet {
      display: none;
    }
  }
}

.header--active {
  box-shadow: 0 3px 8px -3px rgb(0 0 0 / 50%);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

.overlay--open {
  visibility: visible;
  opacity: 1;
}
</style>

<style>
._lock {
  overflow: hidden;
}
</style>
