<template>
  <section id="involved" class="py-24 bg-white">
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
          class="card-lift reveal bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <div class="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-2xl mb-5">
            {{ way.emoji }}
          </div>
          <h3 class="font-display font-bold text-gray-900 text-xl mb-3">
            {{ t({ en: way.en_title, fr: way.fr_title }) }}
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            {{ t({ en: way.en_desc, fr: way.fr_desc }) }}
          </p>
          <a :href="way.link"
            class="inline-block bg-brand-green text-white font-medium text-sm px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors">
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

const { t } = useLang()
useReveal()

const ways = [
  {
    emoji: '💰', link: '#donate',
    en_title: 'Donate', fr_title: 'Faire un Don',
    en_desc: 'Fund emergency relief for Goma or buy Malkia Pads for girls. Every dollar is tracked and reported.',
    fr_desc: "Financer l'aide d'urgence pour Goma ou acheter des Malkia Pads. Chaque dollar est suivi.",
    en_cta: 'Donate Now', fr_cta: 'Donner Maintenant',
  },
  {
    emoji: '🙌', link: 'mailto:volunteer@women-concern.org',
    en_title: 'Volunteer', fr_title: 'Bénévolat',
    en_desc: 'Join our teams in Goma or support us remotely in health, tech, or communications.',
    fr_desc: 'Rejoignez nos équipes à Goma ou soutenez-nous à distance avec vos compétences.',
    en_cta: 'Apply Now', fr_cta: 'Postuler',
  },
  {
    emoji: '📢', link: 'mailto:partners@women-concern.org',
    en_title: 'Spread the Word', fr_title: 'Faire Passer le Mot',
    en_desc: 'Share our mission on social media or advocate for the women of Goma in your community.',
    fr_desc: 'Partagez notre mission sur les réseaux ou défendez les femmes de Goma dans votre communauté.',
    en_cta: 'Share Our Story', fr_cta: 'Partager',
  },
]
</script>
