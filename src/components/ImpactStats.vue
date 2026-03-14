<template>
  <section class="py-10 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <div v-for="stat in stats" :key="stat.n" class="reveal">
          <div class="stat-val">{{ stat.n }}</div>
          <div class="accent-rule mx-auto my-3" />
          <p class="text-gray-400 text-sm">{{ t(stat) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLang } from '../composables/useLang.js'
import { useReveal } from '../composables/useReveal.js'

const { t } = useLang()
useReveal()

const stats = [
  { n: '5,000+', en: 'Women Supported', fr: 'Femmes Soutenues' },
  { n: '12+', en: 'Active Projects', fr: 'Projets Actifs' },
  { n: '500+', en: 'Girls with Pads', fr: 'Filles Aidées' },
  { n: '6 yrs', en: 'Years of Impact', fr: "Ans d'Impact" },
]
</script>
