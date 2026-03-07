<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-brand-green">

    <!-- Slides -->
    <transition-group name="slide-fade" tag="div" class="absolute inset-0">
      <div v-for="(post, i) in posts" :key="post.id" v-show="current === i" class="absolute inset-0 flex items-center">

        <!-- Background image with faded overlay -->
        <div class="absolute inset-0 pointer-events-none">
          <img v-if="post.image" :src="post.image" :alt="t(post.title)" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-brand-green via-transparent to-brand-green opacity-60" />
          <div class="absolute inset-0 bg-gradient-to-b from-brand-green/40 via-transparent to-brand-green/60" />
          <div class="absolute inset-0" :style="{ background: post.bg, opacity: 0.7 }" />
        </div>

        <!-- Noise texture -->
        <div class="absolute inset-0 opacity-40 pointer-events-none"
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
              <button @click="emit('navigate', 'blog-' + post.id)"
                class="pulse-btn bg-brand-yellow text-brand-green font-semibold px-7 py-3.5 rounded-full text-sm hover:brightness-105 transition-all cursor-pointer shadow-xl">
                {{ t({ en: 'Read Article →', fr: "Lire l'Article →" }) }}
              </button>
              <button @click="emit('navigate', 'blog')"
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
    <div class="absolute bottom-0 inset-x-0 z-10 pointer-events-none">
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
import closing1 from '../assets/blogs/closing1.png'
import launch1 from '../assets/blogs/launch1.jpg'
import uwezo1 from '../assets/blogs/uwezo1.jpeg'
import youth1 from '../assets/blogs/youth1.jpg'

const emit = defineEmits(['navigate'])
const { t } = useLang()

const current = ref(0)
let timer = null

const posts = [
  {
    id: 8,
    image: launch1,
    bg: 'linear-gradient(135deg, #7c1d6f 0%, #4a0e42 100%)', emoji: '📢',
    authorEmoji: '👩🏾‍💻', author: 'Women Concern Team', date: '25 November 2025',
    category: { en: 'Campaign & Activism', fr: 'Campagne & Activisme' },
    readTime: { en: '3 min read', fr: '3 min de lecture' },
    title: {
      en: `Launch of the 16 Days of Activism Campaign Against Online GBV`,
      fr: `Lancement de la Campagne des 16 Jours d'Activisme Contre les VBG en Ligne`
    },
    excerpt: {
      en: `On 25 November 2025, Women Concern through the Umoja Network officially launched its #16Days of Activism campaign, placing a special focus on online violence — an emerging and rapidly growing threat in our communities.`,
      fr: `Le 25 novembre 2025, Women Concern, à travers le Réseau Umoja, a lancé sa campagne #16Jours d'Activisme avec un accent particulier sur les violences en ligne — une menace émergente et croissante dans nos communautés.`
    },
  },
  {
    id: 6,
    image: closing1,
    bg: 'linear-gradient(135deg, #1E4D35 0%, #0f3d26 100%)', emoji: '🎓',
    authorEmoji: '👩🏿', author: 'Women Concern Team', date: 'December 2025',
    category: { en: 'Advocacy & Awareness', fr: 'Plaidoyer & Sensibilisation' },
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: {
      en: 'Closing the 16 Days of Activism: Reaching Over 1,000 Students at Institut de Goma',
      fr: 'Clôture des 16 Jours d\'Activisme : Plus de 1 000 Élèves Touchés à l\'Institut de Goma'
    },
    excerpt: {
      en: 'On the final day of the 16 Days of Activism Against GBV, Women Concern and the Uwezo Network engaged nearly 1,000 students at Institut de Goma — sparking the creation of a GBV Ambassadors Club.',
      fr: 'Le dernier jour des 16 Jours d\'Activisme contre les VBG, Women Concern et le Réseau Uwezo ont engagé près de 1 000 élèves à l\'Institut de Goma — donnant naissance à un Club d\'Ambassadeurs VBG.'
    },
  },
  {
    id: 7,
    image: uwezo1,
    bg: 'linear-gradient(135deg, #2d1b69 0%, #1a0f3e 100%)', emoji: '🔬',
    authorEmoji: '👨🏿‍💼', author: 'Uwezo Network', date: 'November 2025',
    category: { en: 'Research & Advocacy', fr: 'Recherche & Plaidoyer' },
    readTime: { en: '4 min read', fr: '4 min de lecture' },
    title: {
      en: 'Uwezo Network Launches Study on Needs of Women Survivors of SGBV',
      fr: 'Le Réseau Uwezo Lance une Étude sur les Besoins Non Satisfaits des Survivantes de VSBG en Zone de Conflit'
    },
    excerpt: {
      en: 'On November 7, 2025, the Uwezo Network held a landmark workshop launching a study on the unmet needs of women survivors of SGBV in North and South Kivu, while strengthening inter-organizational coordination among its members.',
      fr: 'Le 7 novembre 2025, le Réseau Uwezo a tenu un atelier marquant le lancement d\'une étude sur les besoins non satisfaits des survivantes de VSBG au Nord et Sud-Kivu, tout en renforçant la coordination inter-organisationnelle.'
    },
  },
  {
    id: 9,
    image: youth1,
    bg: 'linear-gradient(135deg, #0f4c75 0%, #063050 100%)', emoji: '🎤',
    authorEmoji: '👩🏿', author: 'Women Concern Team', date: '10 December 2025',
    category: { en: 'Youth & Activism', fr: 'Jeunesse & Activisme' },
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: {
      en: 'Youth Voices Rising: Women Concern Concludes 16 Days of Activism at Institut Mikeno, Goma',
      fr: "Les Voix de la Jeunesse S'élèvent : Women Concern Clôture les 16 Jours d'Activisme à l'Institut Mikeno, Goma"
    },
    excerpt: {
      en: 'On December 10, 2025, Women Concern through the Uwezo Network brought a powerful message of prevention and empowerment to 600 students and teachers at Institut Mikeno in Goma — uniting youth voices against digital violence.',
      fr: "Le 10 décembre 2025, Women Concern à travers le Réseau Uwezo a apporté un puissant message de prévention à 600 élèves et enseignants de l'Institut Mikeno à Goma."
    },
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