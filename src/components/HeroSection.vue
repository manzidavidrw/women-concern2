<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-brand-green">

    <!-- Slides -->
    <transition-group name="slide-fade" tag="div" class="absolute inset-0">
      <div v-for="(post, i) in posts" :key="post.id" v-show="current === i" class="absolute inset-0 flex items-center">

        <!-- Background image with faded overlay -->
        <div class="absolute inset-0">
          <img v-if="post.image" :src="post.image" :alt="t(post.title)" class="w-full h-full object-cover" />
          <!-- Multiple gradient overlays for smooth fade effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-brand-green via-transparent to-brand-green opacity-60" />
          <div class="absolute inset-0 bg-gradient-to-b from-brand-green/40 via-transparent to-brand-green/60" />
          <div class="absolute inset-0" :style="{ background: post.bg, opacity: 0.7 }" />
        </div>

        <!-- Noise texture -->
        <div class="absolute inset-0 opacity-40"
          style="background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.06%22/%3E%3C/svg%3E')" />

        <!-- Decorative circles -->
        <div
          class="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 -mr-64 pointer-events-none" />
        <div
          class="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-white/5 -mr-40 pointer-events-none" />

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full"
          style="padding-top: 140px; padding-bottom: 140px;">

          <div class="max-w-2xl">

            <!-- Category badge -->
            <div
              class="inline-flex items-center gap-2 mb-6 border border-white/15 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/5">
              <span class="text-base">{{ post.emoji }}</span>
              <span class="text-white/70 text-xs font-medium tracking-widest uppercase">
                {{ t(post.category) }}
              </span>
            </div>

            <!-- Headline -->
            <h1
              class="font-display font-bold text-white leading-[1.06] mb-5 text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
              {{ t(post.title) }}
            </h1>

            <!-- Excerpt -->
            <p class="text-white/70 text-lg leading-relaxed max-w-md mb-8 drop-shadow-lg">
              {{ t(post.excerpt) }}
            </p>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-4">
              <button @click.stop="emit('navigate', 'blog-' + post.id)"
                class="pulse-btn bg-brand-yellow text-brand-green font-semibold px-7 py-3.5 rounded-full text-sm hover:brightness-105 transition-all cursor-pointer shadow-xl">
                {{ t({ en: 'Read Article →', fr: "Lire l'Article →" }) }}
              </button>
              <button @click.stop="emit('navigate', 'blog')"
                class="border border-white/25 text-white font-medium px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm">
                {{ t({ en: 'All Stories', fr: 'Toutes les Histoires' }) }}
              </button>
            </div>

          </div>

        </div>
      </div>
    </transition-group>

    <!-- Slide controls — centered bottom -->
    <div class="absolute bottom-16 inset-x-0 z-20 flex items-center justify-center gap-5">

      <!-- Prev -->
      <button @click="prev"
        class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm bg-black/20">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Dots -->
      <div class="flex items-center gap-2">
        <button v-for="(_, i) in posts" :key="i" @click="goTo(i)" :class="['rounded-full transition-all duration-300',
          current === i
            ? 'w-6 h-2 bg-brand-yellow'
            : 'w-2 h-2 bg-white/30 hover:bg-white/60']" />
      </div>

      <!-- Next -->
      <button @click="next"
        class="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm bg-black/20">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Counter -->
      <span class="text-white/30 text-xs font-medium backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
        {{ String(current + 1).padStart(2, '0') }} / {{ String(posts.length).padStart(2, '0') }}
      </span>

    </div>

    <!-- Bottom wave -->
    <div class="absolute bottom-0 inset-x-0 z-10">
      <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30C480 60 960 0 1440 30V54H0V30Z" fill="white" />
      </svg>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang.js'
import project1 from '../assets/project1.jpeg'

const emit = defineEmits(['navigate'])
const { t } = useLang()

const current = ref(0)
let timer = null

const posts = [
  {
    id: 1,
    bg: 'linear-gradient(135deg, #1E4D35 0%, #163a28 100%)',
    image: project1,
    emoji: '🚨',
    category: { en: 'Emergency Response', fr: "Réponse d'Urgence" },
    title: { en: 'Standing With Goma in Its Darkest Hour', fr: 'Aux Côtés de Goma dans Son Heure la Plus Sombre' },
    excerpt: { en: 'As conflict intensifies in Eastern DRC, Women Concern teams are on the ground delivering emergency relief to thousands of displaced women and children.', fr: "Alors que le conflit s'intensifie dans l'est de la RDC, les équipes de Women Concern sont sur le terrain pour apporter une aide d'urgence." },
  },
  {
    id: 2,
    bg: 'linear-gradient(135deg, #1a4530 0%, #0f2e1e 100%)',
    image: project1,
    emoji: '🌸',
    category: { en: 'Malkia Pads', fr: 'Malkia Pads' },
    title: { en: 'How a Pack of Pads Keeps a Girl in School', fr: "Comment un Paquet de Serviettes Garde une Fille à l'École" },
    excerpt: { en: 'Meet Zawadi, 14, who missed school every month until Malkia Pads reached her village. Her story is one of 500 — and counting.', fr: "Rencontrez Zawadi, 14 ans, qui manquait l'école chaque mois jusqu'à ce que Malkia Pads atteigne son village." },
  },
  {
    id: 3,
    bg: 'linear-gradient(135deg, #1E4D35 0%, #2d5c3e 100%)',
    image: project1,
    emoji: '💼',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'From Displacement Camp to Business Owner', fr: "Du Camp de Déplacés à Chef d'Entreprise" },
    excerpt: { en: 'After fleeing conflict with nothing, Esperance used our microloan program to build a thriving tailoring business that now employs three other women.', fr: "Après avoir fui le conflit sans rien, Espérance a utilisé notre programme de microcrédit pour créer une entreprise prospère." },
  },
  {
    id: 4,
    bg: 'linear-gradient(135deg, #163a28 0%, #1E4D35 100%)',
    image: project1,
    emoji: '✨',
    category: { en: 'GLFX Program', fr: 'Programme GLFX' },
    title: { en: 'GLFX: The Next Generation of Women Leaders', fr: 'GLFX : La Prochaine Génération de Femmes Leaders' },
    excerpt: { en: 'Our Girls Leadership & Futures Exchange program has graduated its first cohort of 40 young women, ready to lead in their communities and beyond.', fr: 'Notre programme GLFX a diplômé sa première cohorte de 40 jeunes femmes, prêtes à diriger dans leurs communautés.' },
  },
]

const next = () => { current.value = (current.value + 1) % posts.length }
const prev = () => { current.value = (current.value - 1 + posts.length) % posts.length }
const goTo = (i) => { current.value = i; resetTimer() }

const resetTimer = () => {
  clearInterval(timer)
  timer = setInterval(next, 6000)
}

onMounted(() => { timer = setInterval(next, 6000) })
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>