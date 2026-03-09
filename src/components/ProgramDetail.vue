<!-- ProgramDetail.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section - Full Image Display -->
    <section class="relative h-[500px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <img v-if="program.hero" :src="program.hero" :alt="t(program.title)" class="w-full h-full object-cover" />
        <!-- Subtle gradient only at bottom for text readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
        <!-- Breadcrumb -->
        <button @click="$emit('navigate', 'what-we-do')"
          class="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm mb-6 transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {{ t({ en: 'Back to What We Do', fr: 'Retour à Ce Que Nous Faisons' }) }}
        </button>

        <span
          :class="`inline-block ${program.tagColor} text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4 shadow-lg`">
          {{ program.emoji }} {{ t(program.category) }}
        </span>
        <h1
          class="text-white font-display text-5xl lg:text-6xl font-black leading-none tracking-tight mb-4 drop-shadow-lg">
          {{ t(program.title) }}
        </h1>
        <p class="text-white text-lg max-w-2xl leading-relaxed drop-shadow-md">
          {{ t(program.subtitle) }}
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <div class="max-w-5xl mx-auto px-6 lg:px-10 py-16">

      <!-- Overview -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-6">
          <div :class="`w-12 h-12 rounded-xl ${program.accentBg} flex items-center justify-center text-2xl`">
            {{ program.emoji }}
          </div>
          <h2 class="text-3xl font-display font-bold text-gray-900">
            {{ t({ en: 'Overview', fr: 'Aperçu' }) }}
          </h2>
        </div>
        <p class="text-gray-700 leading-relaxed text-lg">
          {{ t(program.overview) }}
        </p>
      </div>

      <!-- Key Objectives -->
      <div v-if="program.objectives" class="mb-16">
        <h2 class="text-3xl font-display font-bold text-gray-900 mb-8">
          {{ t({ en: 'Key Objectives', fr: 'Objectifs Principaux' }) }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="(objective, index) in t(program.objectives)" :key="index"
            class="flex gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all">
            <div
              :class="`flex-shrink-0 w-8 h-8 rounded-lg ${program.accentBg} flex items-center justify-center font-bold ${program.accentText}`">
              {{ index + 1 }}
            </div>
            <p class="text-gray-700 leading-relaxed">{{ objective }}</p>
          </div>
        </div>
      </div>

      <!-- Key Activities -->
      <div v-if="program.activities" class="mb-16">
        <h2 class="text-3xl font-display font-bold text-gray-900 mb-8">
          {{ t({ en: 'Key Activities', fr: 'Activités Principales' }) }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="(activity, index) in t(program.activities)" :key="index"
            class="p-6 bg-white rounded-2xl border-2 border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
            <div class="flex items-start gap-3 mb-3">
              <div
                :class="`w-6 h-6 rounded-lg ${program.accentBg} flex items-center justify-center flex-shrink-0 mt-0.5`">
                <span :class="`text-sm ${program.accentText}`">✓</span>
              </div>
              <h3 class="font-bold text-gray-900 text-lg">{{ activity.title }}</h3>
            </div>
            <p class="text-gray-600 leading-relaxed ml-9">{{ activity.description }}</p>
          </div>
        </div>
      </div>

      <!-- Impact / Outcomes -->
      <div v-if="program.impact" class="mb-16">
        <h2 class="text-3xl font-display font-bold text-gray-900 mb-8">
          {{ t({ en: 'Impact & Outcomes', fr: 'Impact & Résultats' }) }}
        </h2>
        <div :class="`${program.accentBg} p-10 rounded-3xl border-2 ${program.accentBg.replace('bg-', 'border-')}`">
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(stat, index) in t(program.impact)" :key="index" class="text-center">
              <div :class="`text-5xl font-black ${program.accentText} mb-3`">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-700 font-semibold">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Success Stories -->
      <div v-if="program.stories" class="mb-16">
        <h2 class="text-3xl font-display font-bold text-gray-900 mb-8">
          {{ t({ en: 'Success Stories', fr: 'Témoignages de Réussite' }) }}
        </h2>
        <div class="space-y-6">
          <div v-for="(story, index) in t(program.stories)" :key="index"
            class="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
            <div class="flex items-start gap-5 mb-5">
              <div
                :class="`w-20 h-20 rounded-full ${program.accentBg} flex items-center justify-center text-3xl flex-shrink-0`">
                👤
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-xl mb-1">{{ story.name }}</h3>
                <p class="text-sm text-gray-500">{{ story.location }}</p>
              </div>
            </div>
            <p class="text-gray-700 leading-relaxed text-lg italic pl-1 border-l-4 border-gray-200 ml-1">"{{ story.quote
            }}"</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-gradient-to-br from-brand-green to-emerald-700 rounded-3xl p-12 text-center text-white shadow-2xl">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/20 mb-6">
          <span class="text-3xl">💚</span>
        </div>
        <h2 class="text-4xl font-display font-bold mb-4">
          {{ t({ en: 'Support This Program', fr: 'Soutenez Ce Programme' }) }}
        </h2>
        <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          {{ t({
            en: `Your contribution directly funds this life-changing work. Help us expand our impact and reach more women
          and girls.`,
            fr: `Votre contribution finance directement ce travail qui change des vies. Aidez-nous à étendre notre impact
          et à toucher plus de femmes et de filles.`
          }) }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button @click="$emit('navigate', 'donate')"
            class="bg-brand-yellow text-brand-green font-black px-10 py-4 rounded-full hover:brightness-105 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            {{ t({ en: '♥ Donate Now', fr: '♥ Faire un Don' }) }}
          </button>
          <button @click="$emit('navigate', 'contact-us')"
            class="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-brand-green transition-all hover:-translate-y-1">
            {{ t({ en: 'Get Involved', fr: 'S\'Impliquer' }) }}
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '../composables/useLang.js'
import { programsData } from '../data/programsData.js'

const props = defineProps({
  programId: String
})

const emit = defineEmits(['navigate'])
const { t } = useLang()

const program = computed(() => programsData[props.programId] || {})
</script>