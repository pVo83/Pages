<template>
  <section class="skills">
    <div class="container">
      <Heading>What Will You <span class="text-accent">Learn?</span></Heading>

      <div class="skills__content | grid">
        <ul class="skills-list | grid">
          <li class="skills-list__item" v-for="(item, index) in skillsList" :key="index">
            <span class="skills-list__counter"></span>
            <p class="skills-list__descr">{{ item.description }}</p>
          </li>
        </ul>

        <OffsetImage
          webpSrc="/img/skills-img.webp"
          fallbackSrc="/img/skills-img.jpg"
          :width="535"
          :height="632"
          alt="What Will You Learn"
          customClass="skills__picture"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Heading from "@/components/ui/heading/Heading.vue"
import OffsetImage from "@/components/ui/offset-image/OffsetImage.vue"

const skillsList = [
  { description: "Use HDFS & Map Reduce for storing & analyzing data at scale." },
  { description: "Consume streaming data using Spark Streaming, Flink, and Storm." },
  { description: "Choose an appropriate data storage technology for your application" },
  { description: "Analyze non-relational data using HBase, Cassandra, and MongoDB." },
]
</script>

<style lang="scss" scoped>
.skills {
  padding: 100px 0;
  background-color: var(--neutral-100);
  transition: padding var(--trs-35);

  @include mobile {
    padding: 60px 0;
  }

  &__content {
    align-items: center;
    margin-top: 80px;
    gap: 50px;

    @include mobile {
      gap: 50px 0;
    }
  }

  &__picture {
    grid-column: 6 span;
    position: relative;
    left: 0;
    margin-left: auto;

    @include tablet {
      grid-column: 12 span;
      margin-inline: auto;
      left: 0;
    }
  }
}

.skills-list {
  padding: 0;
  grid-column: 6 span;
  counter-reset: counter;
  align-self: center;
  gap: 10px;
  list-style: none;

  @include tablet {
    order: 1;
    grid-column: 12 span;
  }

  &__item {
    padding: 30px;
    background-color: var(--neutral-bg);
    grid-column: 6 span;

    @include mobile {
      grid-column: 12 span;
    }
  }

  &__counter {
    display: block;
    margin-bottom: 30px;

    &::after {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 100vw;
      background-color: var(--accent-color);
      counter-increment: counter;
      content: counter(counter, decimal-leading-zero);
    }
  }

  &__descr {
    display: -webkit-box;
    margin: 0;
    color: var(--primary-color);
    font-family: var(--ff-secondary);
    font-size: var(--fs-24);
    font-weight: 400;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>
