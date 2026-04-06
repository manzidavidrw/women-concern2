<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden" @mouseenter="pauseTimer"
    @mouseleave="resumeTimer" @touchstart="pauseTimer" @touchend="resumeTimer">

    <!-- ── Slides ─────────────────────────────────────────── -->
    <transition-group name="slide-fade" tag="div" class="absolute inset-0">
      <div v-for="(post, i) in posts" :key="post.id" v-show="current === i" class="absolute inset-0">

        <!-- Background image — full bleed, no dimming from the image itself -->
        <div class="absolute inset-0 pointer-events-none">
          <img v-if="post.image" :src="post.image" :alt="t(post.title)"
            class="w-full h-full object-cover object-center" />

          <!-- Single clean gradient: dark on left for text, transparent on right to show photo -->
          <div class="absolute inset-0"
            style="background: linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0.05) 100%)" />

          <!-- Subtle top & bottom fade for nav/wave blending -->
          <div class="absolute inset-x-0 top-0 h-32"
            style="background: linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)" />
          <div class="absolute inset-x-0 bottom-0 h-40"
            style="background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)" />

          <!-- Accent colour tint — very light, just adds brand warmth -->
          <div class="absolute inset-0" :style="{ background: post.tint }" />
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full flex items-center min-h-screen"
          style="padding-top: 120px; padding-bottom: 160px;">
          <div class="max-w-xl">

            <!-- Category badge -->
            <div
              class="inline-flex items-center gap-2 mb-5 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-black/20 pointer-events-none">
              <span class="text-base leading-none">{{ post.emoji }}</span>
              <span class="text-white/80 text-xs font-semibold tracking-widest uppercase">
                {{ t(post.category) }}
              </span>
            </div>

            <!-- Headline -->
            <h1
              class="font-display font-bold text-white leading-[1.08] mb-5 text-4xl md:text-5xl lg:text-6xl pointer-events-none"
              style="text-shadow: 0 2px 24px rgba(0,0,0,0.4)">
              {{ t(post.title) }}
            </h1>

            <!-- Excerpt -->
            <p class="text-white/75 text-base leading-relaxed max-w-md mb-8 pointer-events-none"
              style="text-shadow: 0 1px 8px rgba(0,0,0,0.4)">
              {{ t(post.excerpt) }}
            </p>

            <!-- CTAs -->
            <div class="relative z-30 flex flex-wrap gap-3">
              <button @click="emit('navigate', 'blog-' + post.id)"
                class="bg-brand-yellow text-brand-green font-bold px-7 py-3.5 rounded-full text-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer shadow-xl">
                {{ t({ en: 'Read Article →', fr: "Lire l'Article →" }) }}
              </button>
              <button @click="emit('navigate', 'blog')"
                class="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/15 active:scale-95 transition-all cursor-pointer backdrop-blur-sm">
                {{ t({ en: 'All Stories', fr: 'Toutes les Histoires' }) }}
              </button>
            </div>

          </div>
        </div>

      </div>
    </transition-group>

    <!-- ── Slide indicator strip (bottom left) ────────────── -->
    <div class="absolute bottom-20 left-6 lg:left-10 z-20 flex items-center gap-4">

      <!-- Dot indicators -->
      <div class="flex items-center gap-2">
        <button v-for="(_, i) in posts" :key="i" @click="goTo(i)" :class="['rounded-full transition-all duration-400',
          current === i
            ? 'w-8 h-2 bg-brand-yellow shadow-lg'
            : 'w-2 h-2 bg-white/35 hover:bg-white/60']" />
      </div>

      <!-- Counter -->
      <span class="text-white/40 text-xs font-mono">
        {{ String(current + 1).padStart(2, '0') }}&thinsp;/&thinsp;{{ String(posts.length).padStart(2, '0') }}
      </span>

    </div>

    <!-- ── Prev / Next arrows (bottom right) ─────────────── -->
    <div class="absolute bottom-16 right-6 lg:right-10 z-20 flex items-center gap-2">
      <button @click="prev"
        class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/12 hover:text-white transition-all backdrop-blur-sm bg-black/25">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="next"
        class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/12 hover:text-white transition-all backdrop-blur-sm bg-black/25">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- ── Progress bar ───────────────────────────────────── -->
    <div class="absolute bottom-0 inset-x-0 z-20 h-0.5 bg-white/10 pointer-events-none">
      <div class="h-full bg-brand-yellow transition-none"
        :style="{ width: progressWidth + '%', transition: paused ? 'none' : 'width 6s linear' }" />
    </div>

    <!-- ── Bottom wave ────────────────────────────────────── -->
    <div class="absolute bottom-0 inset-x-0 z-10 pointer-events-none">
      <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 30C480 60 960 0 1440 30V54H0V30Z" fill="white" />
      </svg>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang.js'
import closing1 from '../assets/blogs/closing1.png'
import launch1 from '../assets/blogs/launch1.jpg'
import uwezo1 from '../assets/blogs/uwezo1.jpeg'
import youth1 from '../assets/blogs/youth1.jpg'

const emit = defineEmits(['navigate'])
const { t } = useLang()

const current = ref(0)
const progressWidth = ref(0)
let timer = null
let progTimer = null
const paused = ref(false)

const INTERVAL = 6000

const startProgress = () => {
  progressWidth.value = 0
  clearInterval(progTimer)
  progTimer = setInterval(() => {
    if (!paused.value) progressWidth.value = Math.min(progressWidth.value + (100 / (INTERVAL / 100)), 100)
  }, 100)
}

const next = () => { current.value = (current.value + 1) % posts.length; resetTimer() }
const prev = () => { current.value = (current.value - 1 + posts.length) % posts.length; resetTimer() }
const goTo = (i) => { current.value = i; resetTimer() }

const pauseTimer = () => { paused.value = true; clearInterval(timer) }
const resumeTimer = () => { paused.value = false; resetTimer() }

const resetTimer = () => {
  clearInterval(timer)
  startProgress()
  if (!paused.value) timer = setInterval(next, INTERVAL)
}

onMounted(() => { resetTimer() })
onUnmounted(() => { clearInterval(timer); clearInterval(progTimer) })

const posts = [
  {
    id: 8,
    image: launch1,
    // Very subtle green tint — just brand warmth, not a blanket
    tint: 'linear-gradient(135deg, rgba(20,83,45,0.18) 0%, transparent 60%)',
    emoji: '📢',
    author: 'Women Concern Team', date: '25 November 2025',
    category: { en: 'Campaign & Activism', fr: 'Campagne & Activisme' },
    title: {
      en: 'Launch of the 16 Days of Activism Campaign Against Online GBV',
      fr: "Lancement de la Campagne des 16 Jours d'Activisme Contre les VBG en Ligne"
    },
    excerpt: {
      en: 'On 25 November 2025, Women Concern through the Umoja Network officially launched its #16Days of Activism campaign, placing a special focus on online violence — an emerging and rapidly growing threat in our communities.',
      fr: "Le 25 novembre 2025, Women Concern, à travers le Réseau Umoja, a lancé sa campagne #16Jours d'Activisme avec un accent particulier sur les violences en ligne."
    },
  },
  {
    id: 6,
    image: closing1,
    tint: 'linear-gradient(135deg, rgba(14,53,35,0.20) 0%, transparent 60%)',
    emoji: '🎓',
    author: 'Women Concern Team', date: 'December 2025',
    category: { en: 'Advocacy & Awareness', fr: 'Plaidoyer & Sensibilisation' },
    title: {
      en: 'Closing the 16 Days of Activism: Reaching Over 1,000 Students at Institut de Goma',
      fr: "Clôture des 16 Jours d'Activisme : Plus de 1 000 Élèves Touchés à l'Institut de Goma"
    },
    excerpt: {
      en: 'On the final day of the 16 Days of Activism Against GBV, Women Concern and the Uwezo Network engaged nearly 1,000 students at Institut de Goma — sparking the creation of a GBV Ambassadors Club.',
      fr: "Le dernier jour des 16 Jours d'Activisme contre les VBG, Women Concern et le Réseau Uwezo ont engagé près de 1 000 élèves à l'Institut de Goma."
    },
  },
  {
    id: 7,
    image: uwezo1,
    tint: 'linear-gradient(135deg, rgba(30,15,70,0.18) 0%, transparent 60%)',
    emoji: '🔬',
    author: 'Uwezo Network', date: 'November 2025',
    category: { en: 'Research & Advocacy', fr: 'Recherche & Plaidoyer' },
    title: {
      en: 'Uwezo Network Launches Study on Needs of Women Survivors of SGBV',
      fr: 'Le Réseau Uwezo Lance une Étude sur les Besoins Non Satisfaits des Survivantes de VSBG'
    },
    excerpt: {
      en: 'On November 7, 2025, the Uwezo Network held a landmark workshop launching a study on the unmet needs of women survivors of SGBV in North and South Kivu.',
      fr: "Le 7 novembre 2025, le Réseau Uwezo a tenu un atelier marquant le lancement d'une étude sur les besoins non satisfaits des survivantes de VSBG au Nord et Sud-Kivu."
    },
  },
  {
    id: 9,
    image: youth1,
    tint: 'linear-gradient(135deg, rgba(7,36,58,0.18) 0%, transparent 60%)',
    emoji: '🎤',
    author: 'Women Concern Team', date: '10 December 2025',
    category: { en: 'Youth & Activism', fr: 'Jeunesse & Activisme' },
    title: {
      en: 'Youth Voices Rising: Women Concern Concludes 16 Days of Activism at Institut Mikeno',
      fr: "Les Voix de la Jeunesse S'élèvent : Women Concern Clôture les 16 Jours d'Activisme à l'Institut Mikeno"
    },
    excerpt: {
      en: 'On December 10, 2025, Women Concern through the Uwezo Network brought a powerful message of prevention and empowerment to 600 students and teachers at Institut Mikeno in Goma.',
      fr: "Le 10 décembre 2025, Women Concern à travers le Réseau Uwezo a apporté un puissant message de prévention à 600 élèves et enseignants de l'Institut Mikeno à Goma."
    },
  },
]
</script>

<style scoped>
.slide-fade-enter-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.slide-fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
  pointer-events: none !important;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: scale(1.03) translateX(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: scale(0.98) translateX(-20px);
}
</style>