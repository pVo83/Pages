<template>
  <main class="articles-page">
    <ArticlesHero />
    <ArticlesSection />
    <EditorsPick :picks="editorsPicks" />
    <Subscribe />
  </main>
</template>

<script setup>
import ArticlesHero from "@/section/ArticlesHero.vue"
import ArticlesSection from "@/section/Articles.vue"
import EditorsPick from "@/section/EditorsPick.vue"
import Subscribe from "@/section/Subscribe.vue"
import { editorsPicks } from "./model/constsArticles/index"
</script>
