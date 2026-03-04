<template>
  <div class="pb-20 min-h-screen bg-white">

    <!-- ─────────────────────────────────────────────
         HERO — full bleed green from top-0.
         Transparent navbar floats over it.
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

      <!-- Breadcrumb -->
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
            {{ t({ en: 'Who We Are', fr: 'Qui Nous Sommes' }) }}
          </span>
        </div>
      </div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <span
          class="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          💚 {{ t({ en: 'Our Story', fr: 'Notre Histoire' }) }}
        </span>
        <h1 class="font-display font-bold text-white text-5xl md:text-6xl leading-tight mt-2">
          {{ t({ en: 'Who We Are', fr: 'Qui Nous Sommes' }) }}
        </h1>
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

      <!-- Identity -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <span class="section-label">{{ t({ en: 'Our Identity', fr: 'Notre Identité' }) }}</span>
          <h2 class="font-display font-bold text-gray-900 text-3xl md:text-4xl mb-5 leading-tight">
            {{ t({ en: 'A Movement Born in Goma', fr: 'Un Mouvement Né à Goma' }) }}
          </h2>
          <p class="text-gray-500 text-base leading-relaxed mb-4">
            {{ t({
              en: `Women Concern is a grassroots NGO founded in Goma, North Kivu, DRC. We exist to uplift, protect, and
            empower women and girls in one of the world's most vulnerable regions.`,
              fr: `Women Concern est une ONG de base fondée à Goma, Nord-Kivu, RDC. Nous existons pour élever, protéger et
            autonomiser les femmes et les filles dans l'une des régions les plus vulnérables du monde.`
            }) }}
          </p>
          <p class="text-gray-500 text-base leading-relaxed">
            {{ t({
              en: `We are not just an organisation — we are a community of changemakers who believe that when a
            woman rises, her family, her community, and her nation rise with her.`,
              fr: `Nous ne sommes pas seulement une organisation — nous sommes une communauté de changeurs qui croient
            que lorsqu'une femme s'élève, sa famille, sa communauté et sa nation s'élèvent avec elle.`
            }) }}
          </p>
        </div>
        <div class="bg-gray-50 rounded-3xl h-72 flex items-center justify-center border border-gray-100">
          <div class="text-center p-8">
            <div class="text-6xl mb-4">💚</div>
            <p class="font-display font-semibold text-2xl text-brand-green">Women Concern</p>
            <p class="text-gray-400 text-sm mt-1">Goma, Nord-Kivu, DRC</p>
          </div>
        </div>
      </div>

      <!-- Values -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <span class="section-label">{{ t({ en: 'Our Values', fr: 'Nos Valeurs' }) }}</span>
          <h2 class="font-display font-bold text-gray-900 text-3xl md:text-4xl">
            {{ t({ en: 'What We Stand For', fr: 'Ce Pour Quoi Nous Nous Battons' }) }}
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="val in values" :key="val.en"
            class="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-yellow/40 hover:bg-brand-green/5 transition-all">
            <div class="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-xl mb-4">
              {{ val.emoji }}
            </div>
            <h3 class="font-display font-bold text-gray-900 text-lg mb-2">{{ t(val) }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ t(val.desc) }}</p>
          </div>
        </div>
      </div>

      <!-- Stats CTA -->
      <div class="relative overflow-hidden rounded-3xl" style="background: #1E4D35;">
        <div class="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%); transform: translate(30%, -30%);" />
        <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%); transform: translate(-30%, 30%);" />
        <div class="relative z-10 p-10 md:p-14 text-center">
          <span
            class="inline-block bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {{ t({ en: 'By the Numbers', fr: 'En Chiffres' }) }}
          </span>
          <h2 class="font-display font-bold text-white text-3xl md:text-4xl mb-10">
            {{ t({ en: 'Our Reach & Impact', fr: 'Notre Portée & Impact' }) }}
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="s in stats" :key="s.n">
              <div class="font-display font-bold text-brand-yellow text-4xl mb-1">{{ s.n }}</div>
              <div class="accent-rule mx-auto my-2" />
              <p class="text-white/60 text-sm">{{ t(s) }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
defineEmits(['navigate'])
const { t } = useLang()

const values = [
  {
    emoji: '🛡️',
    en: 'Dignity',
    fr: 'Dignité',
    desc: { en: 'Every woman and girl deserves respect and dignity without exception.', fr: 'Chaque femme et fille mérite respect et dignité sans exception.' }
  },
  {
    emoji: '⚖️',
    en: 'Justice',
    fr: 'Justice',
    desc: { en: 'We advocate for equal rights and fair treatment for all women in our communities.', fr: "Nous défendons l'égalité des droits et le traitement équitable de toutes les femmes." }
  },
  {
    emoji: '💪',
    en: 'Empowerment',
    fr: 'Autonomisation',
    desc: { en: 'We give women the tools, knowledge, and support to shape their own futures.', fr: 'Nous donnons aux femmes les outils et soutien pour façonner leur avenir.' }
  },
  {
    emoji: '🤝',
    en: 'Community',
    fr: 'Communauté',
    desc: { en: 'We believe in the power of collective action and community-led solutions.', fr: "Nous croyons au pouvoir de l'action collective et des solutions communautaires." }
  },
  {
    emoji: '🌱',
    en: 'Sustainability',
    fr: 'Durabilité',
    desc: { en: 'Our programs are designed for lasting change, not just short-term relief.', fr: 'Nos programmes sont conçus pour un changement durable, pas un soulagement immédiat.' }
  },
  {
    emoji: '🔍',
    en: 'Transparency',
    fr: 'Transparence',
    desc: { en: 'We are accountable to our donors, partners, and the communities we serve.', fr: 'Nous rendons compte à nos donateurs, partenaires et communautés que nous servons.' }
  },
]

const stats = [
  { n: '5,000+', en: 'Women Supported', fr: 'Femmes Soutenues' },
  { n: '12+', en: 'Active Projects', fr: 'Projets Actifs' },
  { n: '500+', en: 'Girls with Pads', fr: 'Filles Aidées' },
  { n: '6 yrs', en: 'Years of Impact', fr: "Ans d'Impact" },
]
</script>