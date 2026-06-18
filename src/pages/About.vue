<template>
  <main class="about-page">
    <AboutHero :stats="stats" />
    <OurStory :story="story" />
    <Mission :missions="missions" />
    <Team :teams="teams" />
  </main>
</template>

<script setup>
import AboutHero from "@/section/AboutHero.vue"
import Mission from "@/section/Mission.vue"
import OurStory from "@/section/OurStory.vue"
import Team from "@/section/Team.vue"
import { teams, stats, missions, story } from "./model/constsAbout/index"
</script>
