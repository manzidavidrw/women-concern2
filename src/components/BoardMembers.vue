<template>
  <section id="board" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <span class="section-label">{{ t({ en: 'Leadership', fr: 'Direction' }) }}</span>
        <h2 class="font-display font-bold text-gray-900 text-4xl md:text-5xl">
          {{ t({ en: 'Meet Our Board', fr: "Notre Conseil d'Administration" }) }}
        </h2>
      </div>

      <!-- Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
        <div v-for="member in board" :key="member.name"
          class="card-lift reveal text-center bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
          <div
            class="avatar-ring w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-3xl mx-auto mb-4">
            {{ member.emoji }}
          </div>
          <h3 class="font-display font-bold text-gray-900 text-lg mb-0.5">{{ member.name }}</h3>
          <p class="text-brand-yellow text-xs font-semibold uppercase tracking-wide mb-3">
            {{ t({ en: member.role_en, fr: member.role_fr }) }}
          </p>
          <p class="text-gray-400 text-xs leading-relaxed">
            {{ t({ en: member.bio_en, fr: member.bio_fr }) }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
import { useReveal } from '../composables/useReveal.js'

const { t } = useLang()
useReveal()

const board = [
  {
    name: 'Marie K.', emoji: '👩🏾',
    role_en: 'Executive Director', role_fr: 'Directrice Exécutive',
    bio_en: 'Founder of Women Concern, born in Goma with 10+ years in humanitarian work.',
    bio_fr: "Fondatrice de Women Concern, née à Goma avec 10+ ans d'expérience humanitaire.",
  },
  {
    name: 'Amina T.', emoji: '👩🏽',
    role_en: 'Programs Director', role_fr: 'Directrice des Programmes',
    bio_en: '15 years of humanitarian experience across DRC and East Africa.',
    bio_fr: "15 ans d'expérience humanitaire à travers la RDC et l'Afrique de l'Est.",
  },
  {
    name: 'Claire M.', emoji: '👩🏻',
    role_en: 'Finance & Legal', role_fr: 'Finance & Juridique',
    bio_en: 'CPA specialised in NGO governance and international compliance.',
    bio_fr: 'Experte-comptable spécialisée en gouvernance ONG et conformité internationale.',
  },
  {
    name: 'Grace N.', emoji: '👩🏿',
    role_en: 'Community Liaison', role_fr: 'Liaison Communautaire',
    bio_en: 'Born in North Kivu, Grace connects the organisation to local communities.',
    bio_fr: "Née au Nord-Kivu, Grace relie l'organisation aux communautés locales.",
  },
]
</script>
