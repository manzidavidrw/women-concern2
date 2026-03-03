<template>
  <section id="donors" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <span class="section-label">{{ t({ en: 'Our Supporters', fr: 'Nos Soutiens' }) }}</span>
        <h2 class="font-display font-bold text-gray-900 text-4xl md:text-5xl">
          {{ t({ en: 'Donors & Partners', fr: 'Donateurs & Partenaires' }) }}
        </h2>
        <p class="text-gray-400 mt-4 max-w-md mx-auto text-sm">
          {{
            t({
              en: 'Thank you to every individual and organisation that makes our work possible.',
              fr: 'Merci à chaque individu et organisation qui rend notre travail possible.',
            })
          }}
        </p>
      </div>

      <!-- Donor grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
        <div v-for="donor in donors" :key="donor.name"
          class="card-lift reveal bg-white h-24 rounded-xl flex flex-col items-center justify-center gap-1.5 border border-gray-100 shadow-sm">
          <span class="text-2xl">{{ donor.emoji }}</span>
          <span class="text-gray-600 text-sm font-medium">{{ donor.name }}</span>
        </div>
      </div>

      <!-- Become a partner CTA -->
      <div class="reveal bg-white rounded-2xl border border-gray-100 p-10 text-center shadow-sm max-w-xl mx-auto">
        <h3 class="font-display font-bold text-gray-900 text-2xl mb-2">
          {{ t({ en: 'Become a Partner', fr: 'Devenir Partenaire' }) }}
        </h3>
        <p class="text-gray-400 text-sm mb-6">
          {{
            t({
              en: 'Partner with us to create lasting impact in Eastern DRC.',
              fr: "Associez-vous à nous pour un impact durable dans l'est de la RDC.",
            })
          }}
        </p>
        <a href="mailto:partners@women-concern.org"
          class="inline-block bg-brand-green text-white font-semibold px-7 py-3 rounded-full text-sm hover:opacity-90 transition-opacity">
          {{ t({ en: 'Get in Touch', fr: 'Nous Contacter' }) }}
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
import { useReveal } from '../composables/useReveal.js'

const { t } = useLang()
useReveal()

const donors = [
  { name: 'UN Women', emoji: '🇺🇳' },
  { name: 'USAID', emoji: '🇺🇸' },
  { name: 'ECHO / EU', emoji: '🇪🇺' },
  { name: 'Individual Donors', emoji: '❤️' },
]
</script>
