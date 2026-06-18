<template>
  <main class="contacts-page">
    <ContactsHero />
    <ContactsInfo :info-list="infoList" />

    <section class="contacts-form-section">
      <div class="container">
        <ContactForm />
      </div>
    </section>

    <ContactsFaq :faqs="faqs" />

    <section class="contacts-map">
      <div class="container">
        <div class="contacts-map__wrapper">
          <Map />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ContactsHero from "@/section/ContactsHero.vue"
import ContactsInfo from "@/section/ContactsInfo.vue"
import ContactsFaq from "@/section/ContactsFaq.vue"
import ContactForm from "@/components/ui/contact-form/ContactForm.vue"
import Map from "@/components/ui/map/Map.vue"
import { faqs, infoList } from "@/pages/model/constsContacts/index"
</script>

<style lang="scss" scoped>
.contacts-form-section {
  padding: 60px 0;
  background-color: var(--neutral-100);
}

.contacts-map {
  padding: 60px 0 100px;
  background-color: var(--neutral-100);

  &__wrapper {
    border-radius: 20px;
    overflow: hidden;
  }
}
</style>
