<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer__list">
        <li class="footer__item">
          <router-link to="/" class="footer__link-logo" aria-label="Pages Bookstore — Home">
            <svg width="119" height="35" aria-hidden="true">
              <use href="#logo"></use>
            </svg>
          </router-link>
          <Social variant="footer" :links="footerSocialLinks" :filled="false" />
        </li>

        <li class="footer__item" v-for="column in footerColumns" :key="column.title">
          <h3 class="footer__item-title">{{ column.title }}</h3>
          <router-link
            v-for="link in column.links"
            :key="link.to"
            class="footer__link"
            :to="link.to"
          >
            <DotIcon :count="3" size="sm" :gradient="false" />
            {{ link.label }}
          </router-link>
        </li>

        <li class="footer__item">
          <h3 class="footer__item-title">Keep in Touch</h3>
          <address>
            <div v-for="contact in contacts" :key="contact.label" class="footer__contact">
              <span class="footer__contact-left">{{ contact.label }} :</span>
              <component
                :is="contact.isLink ? 'a' : 'div'"
                class="footer__contact-right"
                :class="{ 'footer__contact-right--color': contact.isLink }"
                :href="contact.isLink ? contact.href : undefined"
              >
                {{ contact.value }}
              </component>
            </div>
          </address>
        </li>
      </ul>
    </div>

    <div class="footer__bottom">
      <small>&copy; 2024 Pages Bookstore. Built with Vue 3.</small>
    </div>
  </footer>
</template>

<script setup>
import Social from "@/components/ui/social/Social.vue"
import DotIcon from "@/components/ui/dots/Dots.vue"

const footerColumns = [
  {
    title: "Explore",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/articles", label: "Articles" },
      { to: "/our-store", label: "Our Store" },
      { to: "/contacts-us", label: "Contact Us" },
    ],
  },
  {
    title: "Store Info",
    links: [
      { to: "/shipping", label: "Shipping & Returns" },
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/contacts-us", label: "FAQ" },
    ],
  },
]

const footerSocialLinks = [
  { name: "Facebook", icon: "fb", url: "#", iconWidth: 9, iconHeight: 15 },
  { name: "Twitter", icon: "tw", url: "#", iconWidth: 14, iconHeight: 12 },
  { name: "LinkedIn", icon: "in", url: "#", iconWidth: 13, iconHeight: 13 },
  { name: "Instagram", icon: "insta", url: "#", iconWidth: 17, iconHeight: 18 },
]

const contacts = [
  {
    label: "Address",
    value: "24A Kingston St, Las Vegas NV 28202, USA.",
    isLink: false,
  },
  {
    label: "Mail",
    value: "support@pages.com",
    isLink: true,
    href: "mailto:support@pages.com",
  },
  {
    label: "Phone",
    value: "(+22) 123-4567-900",
    isLink: true,
    href: "tel:+221234567900",
  },
]
</script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  padding-top: 100px;
  background-color: var(--primary-color);
  transition: padding-top var(--trs-35);

  @include mobile {
    padding-top: 60px;
  }

  &__item:nth-of-type(1) {
    @include tablet {
      width: 100%;
    }
  }

  &__list {
    display: grid;
    margin: 0;
    padding: 0;
    padding-bottom: 70px;
    transition: padding-bottom var(--trs-35);
    grid-template-columns: repeat(3, 1fr) 1.2fr;
    gap: 40px;
    list-style: none;

    @include tablet {
      display: flex;
      flex-wrap: wrap;
      gap: 40px 80px;
      padding-bottom: 70px;
    }

    @include mobile {
      padding-bottom: 30px;
    }
  }

  &__link-logo {
    display: block;
    margin-bottom: 10px;
  }

  &__item-title {
    margin: 0;
    margin-bottom: 25px;
    color: var(--neutral-100);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
    letter-spacing: 0.3px;
    text-align: left;
  }

  &__link {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 35px;
    color: var(--neutral-200);
    font-size: var(--fs-16);
    font-weight: 400;
    transition: color var(--trs-35);

    &:hover {
      color: var(--neutral-100);
    }
  }

  &__contact:not(:last-child) {
    margin-bottom: 20px;
  }

  &__contact {
    display: flex;
    gap: 20px;
    font-style: normal;
  }

  &__contact-left {
    width: 70px;
    color: var(--neutral-100);
    font-family: var(--ff-secondary);
    font-size: var(--fs-18);
    font-weight: 400;
    letter-spacing: 0.3px;
    text-align: right;
    white-space: nowrap;
  }

  &__contact-right {
    color: hsl(218deg 52% 81% / 100%);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    text-align: left;

    &--color {
      transition: color var(--trs-35);

      &:hover {
        color: var(--accent-color);
      }
    }
  }

  &__bottom {
    padding: 25px 0;
    color: var(--neutral-200);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    letter-spacing: 0.1px;
    text-align: center;

    span {
      color: var(--neutral-100);
    }
  }
}
</style>
