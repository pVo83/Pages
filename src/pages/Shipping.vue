<template>
  <main class="shipping-page">
    <section class="shipping-hero">
      <div class="container">
        <div class="shipping-hero__content">
          <span class="shipping-hero__badge">Store Policy</span>
          <Heading align="center">
            Shipping <span class="text-accent">&amp; Returns</span>
          </Heading>
          <p class="shipping-hero__desc">
            We want your books to arrive safely and on time. Here's everything you need to know
            about our delivery and return policy.
          </p>
        </div>
      </div>
    </section>

    <section class="shipping-content">
      <div class="container">
        <div class="shipping-content__grid">
          <div class="policy-card" v-for="item in policyItems" :key="item.id">
            <div class="policy-card__icon">
              <svg class="icon" width="40" height="40">
                <use :href="`#${item.icon}`"></use>
              </svg>
            </div>
            <h3 class="policy-card__title">{{ item.title }}</h3>
            <p class="policy-card__desc">{{ item.desc }}</p>
          </div>
        </div>

        <div class="shipping-table">
          <h2 class="shipping-table__title">Delivery Options</h2>
          <div class="shipping-table__grid">
            <div class="shipping-table__row shipping-table__row--head">
              <span>Method</span>
              <span>Timeframe</span>
              <span>Cost</span>
            </div>
            <div class="shipping-table__row" v-for="row in deliveryOptions" :key="row.method">
              <span data-label="Method">{{ row.method }}</span>
              <span data-label="Timeframe">{{ row.timeframe }}</span>
              <span data-label="Cost">{{ row.cost }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"

const policyItems = [
  {
    id: 1,
    icon: "envelope",
    title: "Free Shipping",
    desc: "Free standard shipping on all orders over $50. Orders under $50 are shipped at a flat rate of $4.99.",
  },
  {
    id: 2,
    icon: "geo",
    title: "Worldwide Delivery",
    desc: "We ship to over 100 countries. International shipping rates and delivery times vary by destination.",
  },
  {
    id: 3,
    icon: "chevron-right",
    title: "Easy Returns",
    desc: "Not satisfied? Return any book within 30 days of delivery in its original condition for a full refund.",
  },
]

const deliveryOptions = [
  { method: "Standard Shipping", timeframe: "5–7 business days", cost: "$4.99 (free over $50)" },
  { method: "Express Shipping", timeframe: "2–3 business days", cost: "$12.99" },
  { method: "Overnight Shipping", timeframe: "Next business day", cost: "$24.99" },
  { method: "International", timeframe: "10–20 business days", cost: "From $14.99" },
]
</script>

<style lang="scss" scoped>
.shipping-hero {
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
    margin-top: 20px;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }
}

.shipping-content {
  padding: 80px 0 120px;
  background-color: var(--neutral-100);

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 80px;

    @include small-tablet {
      grid-template-columns: repeat(2, 1fr);

      .policy-card:last-child {
        grid-column: span 2;
        max-width: 50%;
        justify-self: center;
      }
    }

    @include mobile {
      grid-template-columns: 1fr;

      .policy-card:last-child {
        grid-column: span 1;
        max-width: 100%;
      }
    }
  }
}

.policy-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  background-color: var(--neutral-bg);
  text-align: center;

  &__icon {
    margin-bottom: 20px;
    color: var(--neutral-200);
  }

  &__title {
    margin: 0 0 12px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
  }

  &__desc {
    margin: 0;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }
}

.shipping-table {
  &__title {
    margin: 0 0 30px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-32);
    font-weight: 400;
    text-align: center;
  }

  &__grid {
    border: 1px solid var(--neutral-bg);
    overflow: hidden;
  }

  &__row {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    padding: 16px 24px;
    border-bottom: 1px solid var(--neutral-bg);
    color: var(--neutral-300);
    font-size: var(--fs-16);

    &:last-child {
      border-bottom: none;
    }

    &--head {
      background-color: var(--primary-color);
      color: var(--neutral-100);
      font-weight: 600;
    }

    @include mobile {
      grid-template-columns: 1fr;
      padding: 20px 24px;
      gap: 0;

      &--head {
        display: none;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 0;
        border-bottom: 1px solid rgb(255 255 255 / 6%);

        &:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        &::before {
          color: var(--primary-color);
          font-size: var(--fs-12);
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          content: attr(data-label);
        }
      }
    }
  }
}
</style>
