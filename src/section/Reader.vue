<template>
  <section class="reader">
    <div class="container | reader__container | grid">
      <div class="reader__content">
        <Heading align="left">Words From <span class="text-accent">Our Readers</span></Heading>
        <p class="reader__desc">
          We believe that bookstores are essential to a healthy culture. They're where authors can
          connect with readers, where we discover new writers, where children get hooked on the
          thrill of reading that can last a lifetime.
        </p>
        <div class="rating">
          <div class="rating__info">
            <svg width="120" height="20">
              <use href="#circle2"></use>
            </svg>
            <span class="rating__value">(4.8/5)</span>
          </div>
          <span class="rating__text">Overall Customer Ratings</span>
        </div>
      </div>

      <div class="reviews">
        <div class="reviews-grid">
          <div class="reviews-grid__card">
            <div class="review-card">
              <div class="review-card__info">
                <picture class="review-card__picture">
                  <source :srcset="publicUrl(`img/avatar/${reviews[0].avatarName}.webp`)" type="image/webp" />
                  <img
                    class="review-card__avatar"
                    loading="lazy"
                    :src="publicUrl(`img/avatar/${reviews[0].avatarName}.png`)"
                    width="85"
                    height="85"
                    :alt="reviews[0].name"
                  />
                </picture>
                <div class="review-card__info-text">
                  <h3 class="review-card__title">{{ reviews[0].name }}</h3>
                  <svg width="76" height="13"><use :href="`#${reviews[0].ratingIcon}`"></use></svg>
                </div>
              </div>
              <span class="review-card__quote">"{{ reviews[0].quote }}"</span>
              <p class="review-card__desc">{{ reviews[0].description }}</p>
            </div>
          </div>

          <div class="reviews-grid__card reviews-grid__card--center">
            <div class="review-card">
              <div class="review-card__info">
                <picture class="review-card__picture">
                  <source :srcset="publicUrl(`img/avatar/${reviews[1].avatarName}.webp`)" type="image/webp" />
                  <img
                    class="review-card__avatar"
                    loading="lazy"
                    :src="publicUrl(`img/avatar/${reviews[1].avatarName}.png`)"
                    width="85"
                    height="85"
                    :alt="reviews[1].name"
                  />
                </picture>
                <div class="review-card__info-text">
                  <h3 class="review-card__title">{{ reviews[1].name }}</h3>
                  <svg width="76" height="13"><use :href="`#${reviews[1].ratingIcon}`"></use></svg>
                </div>
              </div>
              <span class="review-card__quote">"{{ reviews[1].quote }}"</span>
              <p class="review-card__desc">{{ reviews[1].description }}</p>
            </div>
          </div>

          <div class="reviews-grid__card">
            <div class="review-card">
              <div class="review-card__info">
                <picture class="review-card__picture">
                  <source :srcset="publicUrl(`img/avatar/${reviews[2].avatarName}.webp`)" type="image/webp" />
                  <img
                    class="review-card__avatar"
                    loading="lazy"
                    :src="publicUrl(`img/avatar/${reviews[2].avatarName}.png`)"
                    width="85"
                    height="85"
                    :alt="reviews[2].name"
                  />
                </picture>
                <div class="review-card__info-text">
                  <h3 class="review-card__title">{{ reviews[2].name }}</h3>
                  <svg width="76" height="13"><use :href="`#${reviews[2].ratingIcon}`"></use></svg>
                </div>
              </div>
              <span class="review-card__quote">"{{ reviews[2].quote }}"</span>
              <p class="review-card__desc">{{ reviews[2].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
import { publicUrl } from "@/utils/publicUrl"

const reviews = [
  {
    name: "James Williams",
    quote: "Great Books Collections",
    description:
      "I was searching this book for many years and I was happy that I could find it here.",
    avatarName: "James-Williams",
    ratingIcon: "circle2",
  },
  {
    name: "Chris Adams",
    quote: "Perfect Response Author",
    description: "I had a question about the book and the author response was great & comfort.",
    avatarName: "Chris-Adams",
    ratingIcon: "circle1",
  },
  {
    name: "Angeline Flora",
    quote: "Creative Writing Skill",
    description:
      "Sent an email after to books arrived to ask about the author & I received a reply.",
    avatarName: "Angeline-Flora",
    ratingIcon: "circle2",
  },
]
</script>

<style lang="scss" scoped>
.reader {
  padding: 100px 0;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__container {
    gap: 30px;

    @include mobile {
      gap: 30px;
    }
  }

  &__content {
    grid-column: 4 span;
    align-self: center;

    @include tablet {
      grid-column: 6 span;
    }

    @include small-tablet {
      grid-column: 12 span;
    }

    @include mobile {
      padding: 0 20px;
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

  &__desc {
    display: -webkit-box;
    margin-top: 33px;
    margin-bottom: 33px;
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    @include tablet {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @include mobile {
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

.rating {
  &__info {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 10px;
  }

  &__value {
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-22);
    font-weight: 400;
  }

  &__text {
    color: var(--primary-color);
    font-family: var(--ff-primary);
    font-size: var(--fs-18);
    font-weight: 400;
  }
}

.reviews {
  grid-column: span 8;

  @include tablet {
    grid-column: 6 span;
  }

  @include small-tablet {
    grid-column: 12 span;
  }
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 20px;

  &__card {
    &--center {
      grid-column: 2;
      grid-row: 1 / 3;
      align-self: center;
    }
  }

  @include tablet {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.review-card {
  padding: 30px 35px;
  background-color: var(--primary-color);

  &__info {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  &__avatar {
    border: 3px solid var(--neutral-100);
    border-radius: 100vw;
    background-color: var(--neutral-100);
  }

  &__info-text {
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin: 0;
    margin-bottom: 16px;
    color: var(--neutral-100);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
  }

  &__quote {
    display: block;
    margin-bottom: 15px;
    color: var(--neutral-100);
    font-family: var(--ff-secondary);
    font-size: var(--fs-22);
    font-weight: 400;
    text-align: left;
  }

  &__desc {
    display: -webkit-box;
    margin: 0;
    color: var(--neutral-200);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @include mobile {
      -webkit-line-clamp: 4;
    }
  }
}
</style>
