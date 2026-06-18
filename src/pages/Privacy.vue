<template>
  <main class="privacy-page">
    <section class="privacy-hero">
      <div class="container">
        <div class="privacy-hero__content">
          <span class="privacy-hero__badge">Legal</span>
          <Heading align="center">
            Privacy <span class="text-accent">Policy</span>
          </Heading>
          <p class="privacy-hero__desc">Last updated: January 1, 2025</p>
        </div>
      </div>
    </section>

    <section class="privacy-content">
      <div class="container">
        <div class="privacy-content__body">
          <div class="privacy-section" v-for="section in sections" :key="section.id">
            <h2 class="privacy-section__title">{{ section.title }}</h2>
            <p class="privacy-section__text">{{ section.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"

const sections = [
  {
    id: 1,
    title: "Information We Collect",
    text: "We collect information you provide directly to us when you place an order, create an account, or contact our support team. This includes your name, email address, shipping address, and payment information.",
  },
  {
    id: 2,
    title: "How We Use Your Information",
    text: "We use the information we collect to process your orders, send order confirmations and shipping updates, respond to your comments and questions, and send you promotional communications if you've opted in.",
  },
  {
    id: 3,
    title: "Information Sharing",
    text: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, as long as those parties agree to keep this information confidential.",
  },
  {
    id: 4,
    title: "Cookies",
    text: "We use cookies to enhance your experience on our site, analyze site usage, and assist in our marketing efforts. You can choose to disable cookies through your browser settings, though this may affect site functionality.",
  },
  {
    id: 5,
    title: "Data Security",
    text: "We implement a variety of security measures to maintain the safety of your personal information. All transactions are processed through a secure server and your payment information is encrypted using SSL technology.",
  },
  {
    id: 6,
    title: "Contact Us",
    text: "If you have any questions about this Privacy Policy, please contact us at support@pages.com or write to us at 24A Kingston St, Las Vegas NV 28202, USA.",
  },
]
</script>

<style lang="scss" scoped>
.privacy-hero {
  padding: 80px 0 60px;
  background-color: var(--neutral-100);

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

  &__desc {
    margin-top: 16px;
    color: var(--neutral-300);
    font-size: var(--fs-16);
  }
}

.privacy-content {
  padding: 80px 0 120px;
  background-color: var(--neutral-100);

  &__body {
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: 800px;
    margin: 0 auto;
  }
}

.privacy-section {
  &__title {
    margin: 0 0 16px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
  }

  &__text {
    margin: 0;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.8;
  }
}
</style>
