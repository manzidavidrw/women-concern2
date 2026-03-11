<template>
  <section id="donate" class="py-20 bg-white relative overflow-hidden">

    <!-- Subtle brand-green tint in corners -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="siren-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-green/5">
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">

      <!-- Emergency header bar -->
      <div class="flex items-center justify-center gap-4 mb-8">
        <div class="siren-light flex-shrink-0">
          <div class="siren-outer w-8 h-8 rounded-full bg-red-500/15 flex items-center justify-center">
            <div class="siren-inner w-4 h-4 rounded-full bg-red-500"></div>
          </div>
        </div>

        <span class="text-brand-green text-xs font-bold uppercase tracking-[0.3em]">
          🚨 {{ t({ en: 'Emergency Response Active', fr: 'Réponse d\'Urgence Active' }) }}
        </span>

        <div class="siren-light siren-delay flex-shrink-0">
          <div class="siren-outer w-8 h-8 rounded-full bg-red-500/15 flex items-center justify-center">
            <div class="siren-inner w-4 h-4 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>

      <!-- Main card — brand-green background like your other CTAs -->
      <div
        class="relative bg-brand-green border border-brand-green rounded-3xl overflow-hidden shadow-2xl shadow-brand-green/20">

        <!-- Top yellow alert strip -->
        <div class="h-1 w-full bg-gradient-to-r from-brand-yellow/40 via-brand-yellow to-brand-yellow/40 alert-strip">
        </div>

        <div class="p-8 md:p-14">

          <!-- Slide counter + progress -->
          <div class="flex items-center justify-between mb-8">
            <div class="flex gap-2">
              <button v-for="(_, i) in actions" :key="i" @click="goTo(i)"
                class="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                :class="i === current ? 'w-12 bg-white/20' : 'w-4 bg-white/10 hover:bg-white/20'">
                <div v-if="i === current" class="absolute inset-y-0 left-0 bg-brand-yellow rounded-full"
                  :style="{ width: progressWidth + '%', transition: 'width ' + tickInterval + 'ms linear' }"></div>
              </button>
            </div>
            <span class="text-white/30 text-xs font-mono">{{ current + 1 }} / {{ actions.length }}</span>
          </div>

          <!-- Slides -->
          <transition :name="slideDirection" mode="out-in">
            <div :key="current" class="min-h-[280px] flex flex-col">

              <!-- Location tag -->
              <div class="flex items-center gap-2 mb-5">
                <div class="w-2 h-2 rounded-full bg-red-500 pulse-dot"></div>
                <span class="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
                  {{ t(actions[current].location) }}
                </span>
              </div>

              <!-- Headline -->
              <h2 class="font-bold text-white mb-4 leading-tight text-3xl md:text-4xl lg:text-5xl">
                {{ t(actions[current].headline) }}
              </h2>

              <!-- Body -->
              <p class="text-white/60 text-base leading-relaxed mb-8 max-w-2xl">
                {{ t(actions[current].body) }}
              </p>

              <!-- CTAs -->
              <div class="flex flex-col sm:flex-row gap-3 mt-auto">
                <a :href="actions[current].primaryUrl" target="_blank" rel="noopener"
                  class="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-green font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg hover:brightness-105 hover:scale-105">
                  <span>{{ t(actions[current].primaryLabel) }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a v-if="actions[current].secondaryUrl" :href="actions[current].secondaryUrl"
                  class="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-brand-yellow/60 text-white/70 hover:text-white font-medium px-8 py-4 rounded-full text-sm transition-all">
                  {{ t(actions[current].secondaryLabel) }}
                </a>
              </div>

              <!-- Trust line -->
              <p class="text-white/25 text-xs mt-5">
                {{ t(actions[current].trust) }}
              </p>

            </div>
          </transition>

        </div>

        <!-- Nav arrows -->
        <button @click="prev"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/50 hover:text-white flex items-center justify-center transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="next"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/50 hover:text-white flex items-center justify-center transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Bottom strip -->
        <div class="h-1 w-full bg-gradient-to-r from-brand-yellow/40 via-brand-yellow to-brand-yellow/40 alert-strip">
        </div>
      </div>

      <!-- Quick-link pills -->
      <div class="flex flex-wrap justify-center gap-3 mt-6">
        <button v-for="(action, i) in actions" :key="i" @click="goTo(i)"
          class="text-xs px-4 py-2 rounded-full border transition-all" :class="i === current
            ? 'border-brand-green bg-brand-green/10 text-brand-green font-semibold'
            : 'border-gray-200 text-gray-400 hover:border-brand-green/40 hover:text-brand-green'">
          {{ t(action.shortLabel) }}
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

const current = ref(0)
const progressWidth = ref(0)
const slideDirection = ref('slide-left')
const tickInterval = 5000
let timer = null
let progressTimer = null

const actions = [
  {
    location: { en: 'Goma, North Kivu — DRC', fr: 'Goma, Nord-Kivu — RDC' },
    headline: { en: 'People in Goma Need You Today.', fr: 'Les Gens de Goma Ont Besoin de Vous.' },
    body: {
      en: 'Thousands of displaced women and children in Goma face hunger, violence, and medical emergencies every day. Your donation goes directly to emergency relief on the ground.',
      fr: "Des milliers de femmes et enfants déplacés à Goma font face à la faim, la violence et des urgences médicales chaque jour. Votre don va directement à l'aide d'urgence sur le terrain."
    },
    primaryLabel: { en: '♥ Donate Emergency Relief', fr: "♥ Donner pour l'Urgence" },
    primaryUrl: 'https://gogetfunding.com/emergency-humanitarian-response-in-goma-north-kivu/',
    secondaryLabel: { en: 'Learn More', fr: 'En Savoir Plus' },
    secondaryUrl: '#about',
    trust: { en: '100% of donations reach beneficiaries directly.', fr: '100% des dons atteignent directement les bénéficiaires.' },
    shortLabel: { en: 'Emergency Relief', fr: "Aide d'Urgence" }
  },
  {
    location: { en: 'Girls in Crisis — Eastern DRC', fr: 'Filles en Crise — Est de la RDC' },
    headline: { en: 'Give Girls Dignity. Buy Pads.', fr: 'Donnez de la Dignité aux Filles.' },
    body: {
      en: 'Girls in displacement camps miss school every month because they lack sanitary pads. A small donation keeps them safe, in school, and with dignity intact.',
      fr: "Les filles dans les camps de déplacement manquent l'école chaque mois faute de serviettes hygiéniques. Un petit don les maintient en sécurité et à l'école."
    },
    primaryLabel: { en: '📦 Buy Pads for Girls', fr: '📦 Acheter des Serviettes' },
    primaryUrl: '#pads',
    secondaryLabel: { en: 'See Impact', fr: "Voir l'Impact" },
    secondaryUrl: '#programs',
    trust: { en: 'Each pack supports one girl for one month.', fr: 'Chaque paquet soutient une fille pendant un mois.' },
    shortLabel: { en: 'Pads for Girls', fr: 'Serviettes' }
  },
  {
    location: { en: 'Women at Risk — Bukavu, DRC', fr: 'Femmes à Risque — Bukavu, RDC' },
    headline: { en: 'Protect Survivors of Violence.', fr: 'Protégez les Survivantes de Violence.' },
    body: {
      en: 'Women survivors of gender-based violence need safe shelter, legal aid, and psychosocial support. Fund a safe space that gives them a path forward.',
      fr: "Les survivantes de violence basée sur le genre ont besoin d'un abri sûr, d'une aide juridique et d'un soutien psychosocial. Financez un espace sûr."
    },
    primaryLabel: { en: '🛡️ Fund Safe Shelter', fr: '🛡️ Financer un Refuge' },
    primaryUrl: 'https://gogetfunding.com/emergency-humanitarian-response-in-goma-north-kivu/',
    secondaryLabel: { en: 'Our GBV Programs', fr: 'Nos Programmes VBG' },
    secondaryUrl: '#programs',
    trust: { en: 'Verified impact — audited annually.', fr: 'Impact vérifié — audité chaque année.' },
    shortLabel: { en: 'Safe Shelter', fr: 'Refuge Sûr' }
  }
]

const goTo = (i) => {
  slideDirection.value = i > current.value ? 'slide-left' : 'slide-right'
  current.value = i
  resetProgress()
}
const next = () => {
  slideDirection.value = 'slide-left'
  current.value = (current.value + 1) % actions.length
  resetProgress()
}
const prev = () => {
  slideDirection.value = 'slide-right'
  current.value = (current.value - 1 + actions.length) % actions.length
  resetProgress()
}
const resetProgress = () => {
  progressWidth.value = 0
  clearInterval(progressTimer)
  clearTimeout(timer)
  startTimers()
}
const startTimers = () => {
  const steps = 100
  const stepTime = tickInterval / steps
  let step = 0
  progressTimer = setInterval(() => {
    step++
    progressWidth.value = step
    if (step >= steps) clearInterval(progressTimer)
  }, stepTime)
  timer = setTimeout(() => {
    slideDirection.value = 'slide-left'
    current.value = (current.value + 1) % actions.length
    resetProgress()
  }, tickInterval)
}

onMounted(() => startTimers())
onUnmounted(() => { clearInterval(progressTimer); clearTimeout(timer) })
</script>

<style scoped>
.siren-inner {
  animation: siren-pulse 1s ease-in-out infinite;
}

.siren-outer {
  animation: siren-glow-ring 1s ease-in-out infinite;
}

.siren-delay .siren-inner {
  animation-delay: 0.5s;
}

.siren-delay .siren-outer {
  animation-delay: 0.5s;
}

@keyframes siren-pulse {

  0%,
  100% {
    opacity: 0.2;
    transform: scale(0.85);
    box-shadow: none;
  }

  50% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 0 14px 5px rgba(239, 68, 68, 0.7);
  }
}

@keyframes siren-glow-ring {

  0%,
  100% {
    background-color: rgba(239, 68, 68, 0.05);
  }

  50% {
    background-color: rgba(239, 68, 68, 0.2);
  }
}

.siren-glow {
  animation: ambient-glow 3s ease-in-out infinite;
}

@keyframes ambient-glow {

  0%,
  100% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.08);
  }
}

.alert-strip {
  background-size: 200% 100%;
  animation: strip-shimmer 2.5s linear infinite;
}

@keyframes strip-shimmer {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

.pulse-dot {
  animation: dot-pulse 1.5s ease-in-out infinite;
}

@keyframes dot-pulse {

  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.6);
  }

  50% {
    opacity: 0.6;
    box-shadow: 0 0 0 5px rgba(239, 68, 68, 0);
  }
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>