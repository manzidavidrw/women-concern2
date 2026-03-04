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
            {{ t({ en: 'Our Mission', fr: 'Notre Mission' }) }}
          </span>
        </div>
      </div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <span
          class="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          🎯 {{ t({ en: 'Our Story', fr: 'Notre Histoire' }) }}
        </span>
        <h1 class="font-display font-bold text-white text-5xl md:text-6xl leading-tight mt-2">
          {{ t({ en: 'Our Mission', fr: 'Notre Mission' }) }}
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

      <!-- Mission Statement -->
      <div class="text-center mb-20">
        <span class="section-label">{{ t({ en: 'Mission Statement', fr: 'Énoncé de Mission' }) }}</span>
        <blockquote
          class="font-display font-bold text-brand-green text-3xl md:text-4xl leading-tight max-w-3xl mx-auto mt-4 mb-6">
          "{{ t({
            en: `To empower women and girls in Goma and Eastern DRC
          through education, health, and economic opportunity —
          so they can live with dignity and lead with strength.`,
            fr: `Autonomiser les femmes et les filles à Goma et dans l'est de la RDC
          grâce à l'éducation, la santé et les opportunités économiques —
          pour qu'elles vivent avec dignité et dirigent avec force.`
          }) }}"
        </blockquote>
        <div class="accent-rule mx-auto" />
      </div>

      <!-- Vision -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div class="bg-gray-50 rounded-3xl h-72 flex items-center justify-center border border-gray-100">
          <div class="text-center p-8">
            <div class="text-6xl mb-4">🎯</div>
            <p class="font-display font-semibold text-2xl text-brand-green">{{ t({
              en: 'Vision 2030', fr: 'Vision 2030'
              }) }}</p>
            <p class="text-gray-400 text-sm mt-1">{{ t({
              en: `A just future for every woman', fr: 'Un avenir juste pour
              chaque femme` }) }}</p>
          </div>
        </div>
        <div>
          <span class="section-label">{{ t({ en: 'Our Vision', fr: 'Notre Vision' }) }}</span>
          <h2 class="font-display font-bold text-gray-900 text-3xl mb-5">
            {{ t({ en: "A World Where Every Woman Thrives", fr: "Un Monde Où Chaque Femme s'Épanouit" }) }}
          </h2>
          <p class="text-gray-500 text-base leading-relaxed">
            {{ t({
              en: `We envision a Goma where no woman is held back by poverty, violence, or lack of opportunity. Where
            every girl goes to school, every mother receives proper healthcare, and every woman has the economic freedom
            to provide for her family.`,
              fr: `Nous imaginons un Goma où aucune femme n'est retenue par la pauvreté, la
            violence ou le manque d'opportunités. Où chaque fille va à l'école et chaque mère reçoit des soins de santé
            appropriés.`
            }) }}
          </p>
        </div>
      </div>

      <!-- Strategic Pillars -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <span class="section-label">{{ t({ en: 'Strategic Pillars', fr: 'Piliers Stratégiques' }) }}</span>
          <h2 class="font-display font-bold text-gray-900 text-3xl md:text-4xl">
            {{ t({ en: 'How We Achieve Our Mission', fr: 'Comment Nous Réalisons Notre Mission' }) }}
          </h2>
        </div>
        <div class="space-y-5">
          <div v-for="(pillar, i) in pillars" :key="pillar.en"
            class="flex gap-5 items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-yellow/30 hover:bg-brand-green/5 transition-all">
            <div
              class="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-brand-yellow font-bold font-display text-lg flex-shrink-0">
              {{ i + 1 }}
            </div>
            <div>
              <h3 class="font-display font-bold text-gray-900 text-xl mb-1">{{ t(pillar) }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ t(pillar.desc) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-brand-green rounded-3xl p-10 text-center">
        <h2 class="font-display font-bold text-white text-3xl mb-3">
          {{ t({ en: 'Help Us Fulfil Our Mission', fr: 'Aidez-Nous à Réaliser Notre Mission' }) }}
        </h2>
        <p class="text-white/55 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          {{ t({
            en: 'Every donation, volunteer hour, and partnership brings us one step closer to the world we envision.',
            fr: 'Chaque don, heure de bénévolat et partenariat nous rapproche du monde que nous imaginons.'
          }) }}
        </p>
        <a href="https://gogetfunding.com/PLACEHOLDER" target="_blank"
          class="pulse-btn inline-block bg-brand-yellow text-brand-green font-bold px-8 py-4 rounded-full hover:brightness-105 transition-all">
          ♥ {{ t({ en: 'Donate Now', fr: 'Donner Maintenant' }) }}
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
defineEmits(['navigate'])
const { t } = useLang()

const pillars = [
  {
    en: 'Health & Well-being',
    fr: 'Santé & Bien-être',
    desc: {
      en: 'Providing access to maternal healthcare, mental health support, and menstrual hygiene products.',
      fr: "Accès aux soins maternels, soutien en santé mentale et produits d'hygiène menstruelle."
    }
  },
  {
    en: 'Education & Literacy',
    fr: 'Éducation & Alphabétisation',
    desc: {
      en: 'Keeping girls in school through scholarships, school kits, and safe learning environments.',
      fr: "Maintenir les filles à l'école grâce aux bourses, kits scolaires et environnements sûrs."
    }
  },
  {
    en: 'Economic Empowerment',
    fr: 'Autonomisation Économique',
    desc: {
      en: 'Training women in entrepreneurship, providing microloans, and creating pathways to financial independence.',
      fr: "Former les femmes à l'entrepreneuriat, fournir des microcrédits et créer des voies vers l'indépendance."
    }
  },
  {
    en: 'Psychosocial Support',
    fr: 'Soutien Psychosocial',
    desc: {
      en: 'Offering trauma recovery programs and counselling to survivors of conflict and gender-based violence.',
      fr: 'Offrir des programmes de rétablissement du traumatisme aux survivantes de conflits et de violences.'
    }
  },
]
</script>