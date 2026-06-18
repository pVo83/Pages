<template>
  <section class="contacts-hero">
    <div class="container">
      <div class="contacts-hero__content">
        <span class="contacts-hero__badge">Get In Touch</span>
        <Heading class="contacts-hero__title" align="center">
          Let's Start <span class="text-accent">A Conversation</span>
        </Heading>
        <p class="contacts-hero__desc">
          We believe that bookstores are essential to a healthy culture. They're where authors can
          connect with readers, where we discover new writers.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
</script>

<style lang="scss" scoped>
.contacts-hero {
  padding: 80px 0 60px;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

  &__badge {
    display: inline-block;
    margin-bottom: 20px;
    color: var(--accent-color);
    font-size: var(--fs-14);
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  &__title {
    margin: 0 0 20px;
  }

  &__desc {
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }
}
</style>
