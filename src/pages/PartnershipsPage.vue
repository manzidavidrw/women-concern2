<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-brand-green to-brand-green/90 text-white py-20 overflow-hidden">
      <div class="absolute inset-0 opacity-10"
        style="background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.06%22/%3E%3C/svg%3E')" />

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-white/20 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
            <span class="text-xl">🌍</span>
            <span class="text-white/80 text-xs font-medium tracking-widest uppercase">Collaborations</span>
          </div>
          <h1 class="font-display font-bold text-5xl md:text-6xl mb-6">
            {{ t({ en: 'Our Partnerships', fr: 'Nos Partenariats' }) }}
          </h1>
          <p class="text-white/80 text-lg leading-relaxed max-w-2xl">
            {{ t({
              en: `We collaborate with incredible organizations and institutions that share our vision of empowering women
            and girls in DRC. Together, we amplify our impact.`,
              fr: `Nous collaborons avec des organisations et institutions incroyables qui partagent notre vision
            d\'autonomiser les femmes et les filles en RDC. Ensemble, nous amplifions notre impact.`
            }) }}
          </p>
        </div>
      </div>

      <div class="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C480 60 960 0 1440 30V54H0V30Z" fill="#F9FAFB" />
        </svg>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-24 relative" style="background: rgba(15, 35, 24, 0.08);">

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-brand-green/20 rounded-full px-4 py-1.5 bg-brand-green/5">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
            <span class="text-brand-green text-xs font-medium tracking-widest uppercase">
              {{ t({ en: 'All Partners', fr: 'Tous les Partenaires' }) }}
            </span>
          </div>
          <h2 class="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {{ t({ en: 'Working Together', fr: 'Travailler Ensemble' }) }}
          </h2>
          <p class="text-gray-500 text-lg max-w-xl mx-auto">
            {{ t({
              en: 'Organizations and institutions united by a shared mission.',
              fr: 'Organisations et institutions unies par une mission commune.'
            }) }}
          </p>
        </div>

        <!-- Partners Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <a v-for="partner in allPartners" :key="partner.name" :href="partner.website" target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg"
            style="background: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.8); backdrop-filter: blur(8px);"
            @mouseenter="e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.style.transform = 'translateY(-3px)' }"
            @mouseleave="e => { e.currentTarget.style.background = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateY(0)' }">
            <div class="h-14 flex items-center justify-center w-full">
              <img :src="partner.logo" :alt="partner.name"
                class="max-w-[110px] max-h-[52px] object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <p class="text-xs font-semibold text-gray-500 group-hover:text-brand-green transition-colors leading-tight">
              {{ partner.name }}
            </p>
          </a>
        </div>

        <!-- Partner count badge -->
        <div class="flex justify-center mt-12">
          <div
            class="inline-flex items-center gap-3 bg-white/70 border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span class="text-sm text-gray-500 font-medium">
              {{ t({
                en: `${allPartners.length} organizations working alongside us`,
                fr: `${allPartners.length} organisations travaillant à nos côtés`
              }) }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Become a Partner CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/20 mb-6">
          <span class="text-3xl">🤝</span>
        </div>
        <h2 class="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
          {{ t({ en: 'Become a Partner', fr: 'Devenez Partenaire' }) }}
        </h2>
        <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          {{ t({
            en: `Interested in partnering with us? We\'re always looking for organizations that share our mission and
          values.`,
            fr: `Intéressé à devenir partenaire ? Nous recherchons toujours des organisations qui partagent notre mission
          et nos valeurs.`
          }) }}
        </p>
        <a href="#contact-us" @click.prevent="$emit('navigate', 'contact-us')"
          class="inline-flex items-center gap-2 bg-brand-yellow text-brand-green font-semibold px-8 py-4 rounded-full text-sm hover:brightness-105 transition-all shadow-lg cursor-pointer">
          <span>{{ t({ en: 'Get in Touch', fr: 'Contactez-Nous' }) }}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

import hesperian from '../assets/partners/hesperian.png'
import girls from '../assets/partners/girls.jpeg'
import mundo from '../assets/partners/mundo.png'
import ipb from '../assets/partners/ipb.svg'
import ican from '../assets/partners/ican.jpeg'
import GLF from '../assets/partners/GLF.png'
import ircLogo from '../assets/partners/cifor-icraf-logo.webp'
import upenergy from '../assets/partners/upenergy.png'
import dovetail from '../assets/partners/dovetail.png'

const emit = defineEmits(['navigate'])
const { t } = useLang()

const allPartners = [
  { name: 'Hesperian', logo: hesperian, website: 'https://hesperian.org/' },
  { name: 'Girls Not Brides', logo: girls, website: 'https://www.girlsnotbrides.org/' },
  { name: 'Mundo Cooperante', logo: mundo, website: 'https://mundocooperante.org/' },
  { name: 'International Peace Bureau', logo: ipb, website: 'https://www.ipb.org' },
  { name: 'ICAN', logo: ican, website: 'https://www.icanw.org/' },
  { name: 'Global Landscapes Forum', logo: GLF, website: 'https://www.globallandscapesforum.org/' },
  { name: 'CIFOR-ICRAF', logo: ircLogo, website: 'https://www.cifor-icraf.org/' },
  { name: 'Up Energy', logo: upenergy, website: 'https://www.upenergygroup.com/' },
  { name: 'Dovetail', logo: dovetail, website: 'https://dovetailimpact.org/' }
]
</script>