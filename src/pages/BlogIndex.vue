<template>
  <div class="pb-20 min-h-screen bg-white">

    <!-- Breadcrumb -->
    <div class="pt-24 bg-white border-b border-gray-100 px-6 lg:px-10">
      <div class="max-w-6xl mx-auto py-3 flex items-center gap-2 text-xs text-gray-400 font-medium">
        <button @click="$emit('navigate', 'home')"
          class="hover:text-brand-green transition-colors flex items-center gap-1">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10" />
          </svg>
          {{ t({ en: 'Home', fr: 'Accueil' }) }}
        </button>
        <svg class="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-brand-green font-semibold">{{ t({ en: 'Stories', fr: 'Histoires' }) }}</span>
      </div>
    </div>

    <!-- Header -->
    <div class="max-w-6xl mx-auto px-6 lg:px-10 pt-14 pb-10">
      <span class="section-label">{{ t({ en: 'Our Stories', fr: 'Nos Histoires' }) }}</span>
      <h1 class="font-display font-bold text-gray-900 text-4xl md:text-5xl mt-1 mb-3">
        {{ t({ en: 'From the Field', fr: 'Du Terrain' }) }}
      </h1>
      <p class="text-gray-400 max-w-xl text-base leading-relaxed">
        {{ t({
          en: `Real stories of change from Goma and Eastern DRC — written by our teams and the women we serve.',
        fr: 'De vraies histoires de changement de Goma et de l\'est de la RDC — écrites par nos équipes et les femmes
        que nous servons.` }) }}
      </p>
    </div>

    <!-- Cards grid -->
    <div class="max-w-6xl mx-auto px-6 lg:px-10">
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <article v-for="post in posts" :key="post.id" @click="$emit('navigate', 'blog-' + post.id)"
          class="group cursor-pointer bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          <!-- Card top color band -->
          <div class="h-48 flex items-end p-6 relative overflow-hidden" :style="{ background: post.bg }">
            <div class="absolute inset-0 opacity-30"
              style="background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.06%22/%3E%3C/svg%3E')" />
            <div class="relative z-10 flex items-center justify-between w-full">
              <span
                class="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-white/80 text-xs font-medium">
                {{ post.emoji }} {{ t(post.category) }}
              </span>
              <span class="text-white/40 text-xs">{{ post.date }}</span>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-6">
            <h2
              class="font-display font-bold text-gray-900 text-xl leading-tight mb-3 group-hover:text-brand-green transition-colors">
              {{ t(post.title) }}
            </h2>
            <p class="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
              {{ t(post.excerpt) }}
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-brand-green/10 flex items-center justify-center text-sm">{{
                  post.authorEmoji }}</span>
                <div>
                  <p class="text-gray-700 text-xs font-semibold">{{ post.author }}</p>
                  <p class="text-gray-400 text-xs">{{ t(post.readTime) }}</p>
                </div>
              </div>
              <span
                class="text-brand-green text-xs font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                {{ t({ en: 'Read', fr: 'Lire' }) }}
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none"
                  stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
defineEmits(['navigate'])
const { t } = useLang()

const posts = [
  {
    id: 1, bg: 'linear-gradient(135deg, #1E4D35 0%, #163a28 100%)', emoji: '🚨',
    authorEmoji: '👩🏾', author: 'Marie K.', date: 'March 2024',
    category: { en: 'Emergency Response', fr: 'Réponse d\'Urgence' },
    readTime: { en: '4 min read', fr: '4 min de lecture' },
    title: { en: 'Standing With Goma in Its Darkest Hour', fr: 'Aux Côtés de Goma dans Son Heure la Plus Sombre' },
    excerpt: { en: 'As conflict intensifies in Eastern DRC, Women Concern teams are on the ground delivering emergency relief to thousands of displaced women and children.', fr: 'Alors que le conflit s\'intensifie dans l\'est de la RDC, les équipes de Women Concern sont sur le terrain pour apporter une aide d\'urgence.' },
  },
  {
    id: 2, bg: 'linear-gradient(135deg, #1a4530 0%, #0f2e1e 100%)', emoji: '🌸',
    authorEmoji: '👩🏽', author: 'Amina T.', date: 'February 2024',
    category: { en: 'Malkia Pads', fr: 'Malkia Pads' },
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: { en: 'How a Pack of Pads Keeps a Girl in School', fr: 'Comment un Paquet de Serviettes Garde une Fille à l\'École' },
    excerpt: { en: 'Meet Zawadi, 14, who missed school every month until Malkia Pads reached her village. Her story is one of 500 — and counting.', fr: 'Rencontrez Zawadi, 14 ans, qui manquait l\'école chaque mois jusqu\'à ce que Malkia Pads atteigne son village.' },
  },
  {
    id: 3, bg: 'linear-gradient(135deg, #1E4D35 0%, #2d5c3e 100%)', emoji: '💼',
    authorEmoji: '👩🏿', author: 'Grace N.', date: 'January 2024',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    readTime: { en: '6 min read', fr: '6 min de lecture' },
    title: { en: 'From Displacement Camp to Business Owner', fr: 'Du Camp de Déplacés à Chef d\'Entreprise' },
    excerpt: { en: 'After fleeing conflict with nothing, Esperance used our microloan program to build a thriving tailoring business that now employs three other women.', fr: 'Après avoir fui le conflit sans rien, Espérance a utilisé notre programme de microcrédit pour créer une entreprise prospère.' },
  },
  {
    id: 4, bg: 'linear-gradient(135deg, #163a28 0%, #1E4D35 100%)', emoji: '✨',
    authorEmoji: '👩🏻', author: 'Claire M.', date: 'December 2023',
    category: { en: 'GLFX Program', fr: 'Programme GLFX' },
    readTime: { en: '3 min read', fr: '3 min de lecture' },
    title: { en: 'GLFX: The Next Generation of Women Leaders', fr: 'GLFX : La Prochaine Génération de Femmes Leaders' },
    excerpt: { en: 'Our Girls Leadership & Futures Exchange program has graduated its first cohort of 40 young women, ready to lead in their communities and beyond.', fr: 'Notre programme GLFX a diplômé sa première cohorte de 40 jeunes femmes, prêtes à diriger dans leurs communautés.' },
  },
]
</script>