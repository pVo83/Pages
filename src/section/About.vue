<template>
  <section class="about">
    <div class="container | about__container | grid">
      <OffsetImage
        webpSrc="/img/about-img.webp"
        fallbackSrc="/img/about-img.jpg"
        :width="525"
        :height="620"
        alt="About the author"
        customClass="about__picture"
      />

      <div class="about__content">
        <Heading align="left">About the <span class="text-accent">Author</span></Heading>

        <p class="about__descr">
          We believe that bookstores are essential to a healthy culture. They’re where authors can
          connect with readers, where we discover new writers, where children get hooked on the
          thrill of reading that can last a lifetime.
        </p>

        <ul class="characteristic">
          <li v-for="item in items" :key="item.meta" class="characteristic__item">
            <span class="characteristic__value">{{ item.value }}</span>
            <span class="characteristic__meta">{{ item.meta }}</span>
          </li>
        </ul>

        <div class="about__contact">
          <picture class="about__images">
            <source :srcset="publicUrl('img/qar-code-img.webp')" type="image/webp" />
            <img
              class="qar-code"
              loading="lazy"
              :src="publicUrl('img/qar-code-img.png')"
              width="130"
              height="130"
              alt="images qar-code"
            />
          </picture>

          <address class="address">
            <span class="address__name">John Abraham, Ph.d</span>
            <div class="address__mail-wrapper">
              <div class="address__mail">
                Mail:
                <a href="mailto:johnabraham@gmail.com">johnabraham@gmail.com</a>
              </div>
              <div class="address__tel">
                Phone:
                <a href="tel:+21235459000">(+2) 123 545 9000</a>
              </div>
            </div>
          </address>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
import OffsetImage from "@/components/ui/offset-image/OffsetImage.vue"
import { publicUrl } from "@/utils/publicUrl"

const items = [
  { value: "02", meta: "Books Published" },
  { value: "4.5", meta: "User Reviews" },
  { value: "04", meta: "Best Seller Awards" },
]
</script>

<style lang="scss" scoped>
.about {
  padding: 100px 0;
  background-color: var(--neutral-bg);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 100px 0 60px;
  }

  &__container {
    gap: 60px;
    align-items: center;

    @include tablet {
      gap: 50px 0;
    }
  }

  &__picture {
    grid-column: 6 span;
    position: relative;
    left: 30px;

    @include tablet {
      grid-column: 12 span;
      margin-inline: auto;
      left: 0;
    }

    @include small-tablet {
      left: 0;
    }
  }

  &__content {
    grid-column: 6 span;
    align-self: center;

    @include tablet {
      grid-column: 12 span;
      margin-inline: auto;
    }
  }

  &__title {
    margin: 0;
    margin-bottom: 23px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-42);
    font-weight: 400;
  }

  &__descr {
    width: 100%;
    margin: 0;
    margin-top: 23px;
    margin-bottom: 34px;
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    max-width: 559px;

    @include tablet {
      max-width: 886px;
    }
  }

  &__contact {
    display: inline-flex;
    gap: 40px;
    align-items: center;
    padding: 15px 40px 15px 20px;
    background-color: var(--primary-color);

    @include mobile {
      gap: 0;
    }
  }
}

.qar-code {
  background-color: white;

  @include mobile {
    display: none;
  }
}

.characteristic {
  display: flex;
  margin: 0;
  margin-bottom: 55px;
  padding: 0;
  list-style: none;

  @include mobile {
    flex-direction: column;
  }

  &__item:not(:last-child) {
    margin-right: 25px;
    padding-right: 25px;
    border-right: 1px solid var(--accent-color);

    @include mobile {
      margin-right: 0;
      padding-right: 0;
      border-right: 0 solid var(--accent-color);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;

    @include mobile {
      flex-direction: row;
      align-items: baseline;
      gap: 20px;
    }
  }

  &__value {
    margin: 0;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-54);
    font-weight: 400;
  }

  &__meta {
    margin: 0;
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
  }
}

.address {
  font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 10px;

  &__mail-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__name {
    display: block;
    margin: 0;
    margin-bottom: 10px;
    color: var(--accent-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-22);
    font-weight: 400;
  }

  &__mail,
  &__tel {
    color: var(--neutral-200);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;

    a {
      color: var(--neutral-200);
      transition: color var(--trs-35);

      &:hover {
        color: var(--neutral-100);
      }
    }
  }
}
</style>
