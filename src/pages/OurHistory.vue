<template>
  <div class="pb-20 min-h-screen bg-white">

    <!-- ─────────────────────────────────────────────
         HERO — full bleed green from top-0.
         Transparent navbar floats over it.
         padding-top: 68px keeps content below navbar.
    ───────────────────────────────────────────── -->
    <div class="relative overflow-hidden" style="background: #1E4D35; padding-top: 68px;">

      <!-- Yellow diagonal wash -->
      <div class="absolute inset-0 pointer-events-none"
        style="background: linear-gradient(135deg, transparent 40%, rgba(212,160,23,0.12) 100%);" />
      <!-- Decorative rings -->
      <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />
      <div
        class="absolute -bottom-16 -left-16 w-52 h-52 rounded-full border border-brand-yellow/10 pointer-events-none" />
      <!-- Yellow left accent bar -->
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow opacity-60" />

      <!-- Breadcrumb — matches DonorsPage exactly -->
      <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 pt-5 pb-0">
        <div class="flex items-center gap-2 text-xs text-white/40 font-medium">
          <button @click="$emit('navigate', 'home')" class="hover:text-white transition-colors flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10" />
            </svg>
            {{ t({ en: 'Home', fr: 'Accueil' }) }}
          </button>
          <svg class="w-3 h-3 text-white/20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-brand-yellow font-semibold">
            {{ t({ en: 'Our History', fr: 'Notre Histoire' }) }}
          </span>
        </div>
      </div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <span
          class="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          📖 {{ t({ en: 'Our Story', fr: 'Notre Histoire' }) }}
        </span>
        <h1 class="font-display font-bold text-white text-5xl md:text-6xl leading-tight mt-2">
          {{ t({ en: 'Our History', fr: 'Notre Histoire' }) }}
        </h1>
        <p class="text-white/55 text-lg max-w-xl mt-4">
          {{ t({
            en: 'From a small community circle to a growing movement.',
            fr: "D'un petit cercle communautaire à un mouvement croissant."
          }) }}
        </p>
      </div>

      <!-- Wave transition into white -->
      <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full block">
        <path d="M0 20C480 40 960 0 1440 20V40H0V20Z" fill="white" />
      </svg>
    </div>


    <!-- ─────────────────────────────────────────────
         PAGE BODY
    ───────────────────────────────────────────── -->
    <div class="max-w-4xl mx-auto px-6 lg:px-10 py-16">

      <!-- The Beginning -->
      <div class="max-w-2xl mb-16">
        <span class="section-label">{{ t({ en: 'The Beginning', fr: 'Le Début' }) }}</span>
        <h2 class="font-display font-bold text-gray-900 text-3xl md:text-4xl mb-5">
          {{ t({ en: 'It Started With One Question', fr: 'Tout a Commencé par Une Question' }) }}
        </h2>
        <p class="text-gray-500 text-base leading-relaxed mb-4">
          {{ t({
            en: `In 2018, our founder Marie stood in a displacement camp on the outskirts of Goma and asked: "Why are the
          women always the last to receive help?" That question became the seed of Women Concern.`,
            fr: `En 2018, notre fondatrice Marie se tenait dans un camp de déplacés à la périphérie de Goma et demandait:
          \"Pourquoi les femmes sont-elles toujours les dernières à recevoir de l'aide ?\" Cette question est devenue la
          graine de Women Concern.`
          }) }}
        </p>
        <p class="text-gray-500 text-base leading-relaxed">
          {{ t({
            en: `What started as a small support circle of 12 women has grown into a full NGO touching thousands of lives
          across Eastern DRC.`,
            fr: `Ce qui a commencé comme un petit cercle de soutien de 12 femmes est devenu une ONG à part entière
          touchant des milliers de vies dans l'est de la RDC.`
          }) }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="mb-20">
        <span class="section-label">{{ t({ en: 'Timeline', fr: 'Chronologie' }) }}</span>
        <h2 class="font-display font-bold text-gray-900 text-3xl mb-10">
          {{ t({ en: 'Milestones', fr: 'Jalons' }) }}
        </h2>
        <div class="relative">
          <div class="absolute left-5 top-0 bottom-0 w-px bg-gray-200 md:left-1/2"></div>
          <div v-for="(event, i) in timeline" :key="event.year" class="relative flex items-start gap-6 mb-12"
            :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
            <div
              class="absolute left-5 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-green border-4 border-white shadow md:left-1/2 z-10 mt-1.5">
            </div>
            <div class="hidden md:block md:w-1/2"></div>
            <div class="ml-12 md:ml-0 md:w-1/2 md:px-8">
              <div
                class="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-yellow/30 hover:bg-brand-green/5 transition-all">
                <div
                  class="inline-block bg-brand-green text-brand-yellow text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {{ event.year }}
                </div>
                <h3 class="font-display font-bold text-gray-900 text-xl mb-2">{{ t(event) }}</h3>
                <p class="text-gray-400 text-sm leading-relaxed">{{ t(event.desc) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-gray-50 rounded-3xl p-10 text-center border border-gray-100">
        <div class="text-5xl mb-4">📖</div>
        <h2 class="font-display font-bold text-gray-900 text-2xl mb-3">
          {{ t({ en: 'Be Part of Our Next Chapter', fr: 'Faites Partie de Notre Prochain Chapitre' }) }}
        </h2>
        <p class="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
          {{ t({
            en: 'The story is still being written — and you can be part of it.',
            fr: "L'histoire est encore en cours d'écriture — et vous pouvez en faire partie."
          }) }}
        </p>
        <a href="https://gogetfunding.com/PLACEHOLDER" target="_blank"
          class="inline-block bg-brand-green text-white font-semibold px-7 py-3 rounded-full text-sm hover:opacity-90 transition-opacity">
          {{ t({ en: 'Join the Mission', fr: 'Rejoindre la Mission' }) }}
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
defineEmits(['navigate'])
const { t } = useLang()

const timeline = [
  {
    year: '2018',
    en: 'Women Concern Founded',
    fr: 'Fondation de Women Concern',
    desc: {
      en: 'Marie K. gathers 12 displaced women in Goma to form a support circle focused on health and safety.',
      fr: 'Marie K. rassemble 12 femmes déplacées à Goma pour former un cercle de soutien axé sur la santé et la sécurité.'
    }
  },
  {
    year: '2019',
    en: 'First Health Clinic',
    fr: 'Première Clinique de Santé',
    desc: {
      en: 'We launched our first mobile health clinic, reaching over 300 women in displacement camps in 3 months.',
      fr: 'Lancement de notre première clinique mobile, atteignant plus de 300 femmes dans les camps en 3 mois.'
    }
  },
  {
    year: '2020',
    en: 'Malkia Pads Initiative Launched',
    fr: "Lancement de l'Initiative Malkia Pads",
    desc: {
      en: 'Responding to school dropout rates linked to menstrual health, we launched Malkia Pads for girls in Goma schools.',
      fr: 'En réponse aux abandons scolaires liés à la santé menstruelle, nous avons lancé Malkia Pads pour les filles.'
    }
  },
  {
    year: '2021',
    en: 'Economic Empowerment Program',
    fr: "Programme d'Autonomisation Économique",
    desc: {
      en: 'Launched microloans and business training for 150 women entrepreneurs, generating $45,000 in community income.',
      fr: 'Lancement de microcrédits et de formation pour 150 femmes entrepreneures, générant 45 000 $ de revenus communautaires.'
    }
  },
  {
    year: '2022',
    en: 'GLFX Girls Leadership Program',
    fr: 'Programme GLFX de Leadership Féminin',
    desc: {
      en: 'Created GLFX, a leadership and mentorship program equipping young women with skills, confidence, and vision.',
      fr: 'Création de GLFX, un programme de leadership et de mentorat équipant les jeunes femmes de compétences et de vision.'
    }
  },
  {
    year: '2024',
    en: '5,000+ Lives Touched',
    fr: 'Plus de 5 000 Vies Touchées',
    desc: {
      en: 'Women Concern reaches a major milestone — over 5,000 women and girls supported across Eastern DRC.',
      fr: "Women Concern atteint un jalon majeur — plus de 5 000 femmes et filles soutenues dans l'est de la RDC."
    }
  },
]
</script>