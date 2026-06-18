<template>
  <section class="articles">
    <div class="container">
      <Heading>Articles <span class="text-accent">&amp; Resources</span></Heading>

      <ul class="articles__list | grid">
        <li class="articles__item">
          <picture class="articles__picture">
            <source :srcset="publicUrl('img/articles/1.webp')" type="image/webp" />
            <img
              class="articles__img"
              loading="lazy"
              :src="publicUrl('img/articles/1.jpg')"
              width="420"
              height="350"
              alt="images"
            />
          </picture>
          <div class="articles__content">
            <h4 class="articles__content-title">Significant reading has more info number</h4>
            <p class="articles__content-desc">
              Override the digital divide with additional clickthroughs from DevOps for real-time
              schemas.
            </p>
            <div class="articles__content-bottom">
              <a href="#">Readmore</a>
              <time datetime="2021-10-06">October 6, 2021</time>
            </div>
          </div>
        </li>
        <li class="articles__item">
          <picture class="articles__picture">
            <source :srcset="publicUrl('img/articles/2.webp')" type="image/webp" />
            <img
              class="articles__img"
              loading="lazy"
              :src="publicUrl('img/articles/2.jpg')"
              width="420"
              height="350"
              alt="images"
            />
          </picture>
          <div class="articles__content">
            <h4 class="articles__content-title">Many variations of pass majority have suffered</h4>
            <p class="articles__content-desc">
              Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta
              test.
            </p>
            <div class="articles__content-bottom">
              <a href="#">Readmore</a>
              <time datetime="2021-10-06">October 6, 2021</time>
            </div>
          </div>
        </li>
        <li class="articles__item">
          <picture class="articles__picture">
            <source :srcset="publicUrl('img/articles/3.webp')" type="image/webp" />
            <img
              class="articles__img"
              loading="lazy"
              :src="publicUrl('img/articles/3.jpg')"
              width="420"
              height="350"
              alt="images"
            />
          </picture>
          <div class="articles__content">
            <h4 class="articles__content-title">Words which don’t look even slightly believable</h4>
            <p class="articles__content-desc">
              Podcasting operational change management inside of workflows to establish a framework.
            </p>
            <div class="articles__content-bottom">
              <a href="#">Readmore</a>
              <time datetime="2021-10-06">October 6, 2021</time>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
import { publicUrl } from "@/utils/publicUrl"
</script>

<style lang="scss" scoped>
.articles {
  padding: 100px 0;
  background-color: var(--neutral-bg);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__title {
    margin: 0;
    margin-bottom: 23px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-42);
    font-weight: 400;
    text-align: center;
  }

  &__list {
    margin-top: 60px;
    padding: 0;
    gap: 20px;
    list-style: none;

    @include tablet {
      grid-template-columns: repeat(1, 1fr);
    }

    @include mobile {
      gap: 20px 0;
    }
  }

  &__item {
    grid-column: 4 span;
    background-color: var(--neutral-100);
    box-shadow: 0 0 13px 0 hsl(0deg 0% 0% / 7%);

    @include tablet {
      display: flex;
      grid-column: 1 span;
    }

    @include small-tablet {
      display: grid;
    }
  }

  &__picture {
    display: block;
    overflow: hidden;

    @include tablet {
      width: 100%;
      max-width: 420px;
    }

    @include small-tablet {
      max-width: 100%;
    }
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    max-width: 420px;
    object-fit: cover;
    object-position: center center;

    &:hover {
      transform: scale(1.05);
    }

    @include small-tablet {
      max-width: 100%;
    }
  }

  &__content {
    padding: 25px 30px;
    transition: padding var(--trs-35);

    @include tablet {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    @include mobile {
      padding: 25px 20px;
    }
  }

  &__content-title {
    display: -webkit-box;
    margin: 0;
    margin-bottom: 20px;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
    overflow: hidden;
    text-align: left;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__content-desc {
    display: -webkit-box;
    margin: 0;
    margin-bottom: 15px;
    color: var(--neutral-300);
    font-family: var(--ff-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    overflow: hidden;
    text-align: left;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &__content-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;

    a {
      position: relative;
      padding-right: 10px;
      color: var(--primary-color);
      font-family: var(--ff-secondary);
      font-size: var(--fs-16);
      font-weight: 400;
      line-height: 1.4375rem;
      letter-spacing: 0.3px;
      text-align: left;

      &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
        width: 0%;
        height: 2px;
        border-radius: 5px;
        background-color: var(--accent-color);
        transition: width var(--trs-35);
        content: "";
      }

      &:hover::before {
        width: 100%;
      }

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        border-radius: 5px;
        background-color: var(--primary-color);
        content: "";
      }
    }

    time {
      color: var(--primary-color);
      font-family: var(--ff-primary);
      font-size: var(--fs-16);
      font-weight: 400;
      text-align: left;
    }
  }
}
</style>
