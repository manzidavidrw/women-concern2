<template>
  <section id="involved" class="py-10 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <span class="section-label">{{ t({ en: 'Get Involved', fr: "S'Impliquer" }) }}</span>
        <h2 class="font-display font-bold text-gray-900 text-4xl md:text-5xl">
          {{ t({ en: 'There Are Many Ways to Help.', fr: "Il y a Plusieurs Façons d'Aider." }) }}
        </h2>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-7">
        <div v-for="way in ways" :key="way.en_title"
          class="card-lift reveal bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col">
          <div class="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-2xl mb-5">
            {{ way.emoji }}
          </div>
          <h3 class="font-display font-bold text-gray-900 text-xl mb-3">
            {{ t({ en: way.en_title, fr: way.fr_title }) }}
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
            {{ t({ en: way.en_desc, fr: way.fr_desc }) }}
          </p>

          <!-- Donate: external link -->
          <a v-if="way.type === 'external'" :href="way.link" target="_blank" rel="noopener"
            class="inline-block bg-brand-green text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors text-center">
            {{ t({ en: way.en_cta, fr: way.fr_cta }) }}
          </a>

          <!-- Partnership: navigate to page -->
          <button v-else-if="way.type === 'navigate'" @click="$emit('navigate', way.page)"
            class="inline-block bg-brand-green text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors text-center cursor-pointer">
            {{ t({ en: way.en_cta, fr: way.fr_cta }) }}
          </button>

          <!-- Career: navigate to page -->
          <button v-else-if="way.type === 'career'" @click="$emit('navigate', 'career')"
            class="inline-block bg-brand-green text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors text-center cursor-pointer">
            {{ t({ en: way.en_cta, fr: way.fr_cta }) }}
          </button>

          <!-- Default: mailto -->
          <a v-else :href="way.link"
            class="inline-block bg-brand-green text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors text-center">
            {{ t({ en: way.en_cta, fr: way.fr_cta }) }}
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
import { useReveal } from '../composables/useReveal.js'

defineEmits(['navigate'])
const { t } = useLang()
useReveal()

const ways = [
  {
    emoji: '💰',
    type: 'external',
    link: 'https://gogetfunding.com/emergency-humanitarian-response-in-goma-north-kivu/',
    en_title: 'Donate', fr_title: 'Faire un Don',
    en_desc: 'Fund emergency relief for Goma or buy Malkia Pads for girls. Every dollar is tracked and reported.',
    fr_desc: "Financer l'aide d'urgence pour Goma ou acheter des Malkia Pads. Chaque dollar est suivi.",
    en_cta: 'Donate Now', fr_cta: 'Donner Maintenant',
  },
  {
    emoji: '💼',
    type: 'career',
    en_title: 'Career', fr_title: 'Carrière',
    en_desc: 'Join our growing team. Create an account to explore open positions and apply to roles in Goma or remotely.',
    fr_desc: 'Rejoignez notre équipe. Créez un compte pour explorer les postes ouverts et postuler à Goma ou à distance.',
    en_cta: 'View Opportunities', fr_cta: 'Voir les Opportunités',
  },
  {
    emoji: '🤝',
    type: 'navigate',
    page: 'partnerships',
    en_title: 'Partner With Us', fr_title: 'Devenir Partenaire',
    en_desc: 'Are you an organisation, funder, or institution? Reach out to explore a partnership with Women Concern.',
    fr_desc: 'Êtes-vous une organisation, un bailleur ou une institution ? Contactez-nous pour explorer un partenariat.',
    en_cta: 'Get in Touch', fr_cta: 'Nous Contacter',
  },
]
</script>