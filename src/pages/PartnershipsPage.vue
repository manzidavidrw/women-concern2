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
            and girls in DRC.Together, we amplify our impact.`,
              fr: `Nous collaborons avec des organisations et institutions incroyables qui partagent notre vision
            d\'autonomiser les femmes et les filles en RDC. Ensemble, nous amplifions notre impact.`
            }) }}
          </p>
        </div>
      </div>

      <!-- Decorative wave -->
      <div class="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C480 60 960 0 1440 30V54H0V30Z" fill="#F9FAFB" />
        </svg>
      </div>
    </section>

    <!-- Strategic Partners Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-brand-green/20 rounded-full px-4 py-1.5 bg-brand-green/5">
            <span class="text-xl">🤝</span>
            <span class="text-brand-green text-xs font-medium tracking-widest uppercase">Strategic Partners</span>
          </div>
          <h2 class="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {{ t({ en: 'Strategic Partners', fr: 'Partenaires Stratégiques' }) }}
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            {{ t({
              en: 'Long-term partners who provide critical support and resources.',
              fr: 'Partenaires à long terme qui fournissent un soutien et des ressources essentiels.'
            }) }}
          </p>
        </div>

        <!-- Partners Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <a v-for="partner in strategicPartners" :key="partner.name" :href="partner.website" target="_blank"
            rel="noopener noreferrer"
            class="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">

            <!-- Logo Container -->
            <div
              class="w-full h-32 mb-6 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-brand-green/5 transition-colors">
              <img :src="partner.logo" :alt="partner.name"
                class="max-w-[180px] max-h-[100px] object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>

            <!-- Partner Name -->
            <h3
              class="font-display font-bold text-xl text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
              {{ partner.name }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
              {{ t(partner.description) }}
            </p>

            <!-- Visit Link -->
            <div
              class="inline-flex items-center gap-2 text-brand-green font-semibold text-sm group-hover:gap-3 transition-all">
              <span>{{ t({ en: 'Visit Website', fr: 'Visiter le Site' }) }}</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>

    <!-- Program Partners Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-brand-green/20 rounded-full px-4 py-1.5 bg-brand-green/5">
            <span class="text-xl">🎯</span>
            <span class="text-brand-green text-xs font-medium tracking-widest uppercase">Program Partners</span>
          </div>
          <h2 class="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {{ t({ en: 'Program Partners', fr: 'Partenaires de Programme' }) }}
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            {{ t({
              en: 'Organizations collaborating on specific initiatives and programs.',
              fr: 'Organisations collaborant sur des initiatives et programmes spécifiques.'
            }) }}
          </p>
        </div>

        <!-- Partners Grid (Compact) -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <a v-for="partner in programPartners" :key="partner.name" :href="partner.website" target="_blank"
            rel="noopener noreferrer"
            class="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center">

            <!-- Logo -->
            <div class="w-full h-24 mb-4 flex items-center justify-center">
              <img :src="partner.logo" :alt="partner.name"
                class="max-w-[120px] max-h-[80px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>

            <!-- Partner Name -->
            <p class="font-semibold text-sm text-gray-700 group-hover:text-brand-green transition-colors text-center">
              {{ partner.name }}
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>

    <!-- Funding Partners Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-brand-green/20 rounded-full px-4 py-1.5 bg-brand-green/5">
            <span class="text-xl">💰</span>
            <span class="text-brand-green text-xs font-medium tracking-widest uppercase">Funding Partners</span>
          </div>
          <h2 class="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {{ t({ en: 'Funding Partners', fr: 'Partenaires Financiers' }) }}
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            {{ t({
              en: 'Generous funders making our work possible.',
              fr: 'Bailleurs généreux rendant notre travail possible.'
            }) }}
          </p>
        </div>

        <!-- Funders Logo Wall (Simple) -->
        <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          <a v-for="funder in fundingPartners" :key="funder.name" :href="funder.website" target="_blank"
            rel="noopener noreferrer" :title="funder.name" class="group">
            <img :src="funder.logo" :alt="funder.name"
              class="h-16 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
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

// Import partner logos
import unwomenLogo from '../assets/partners/hesperian.png'
import unicefLogo from '../assets/partners/hesperian.png'
import usaidLogo from '../assets/partners/hesperian.png'
import whoLogo from '../assets/partners/ipb.svg'
import oxfamLogo from '../assets/partners/ican.jpeg'
import carelogo from '../assets/partners/dovetail.png'
import ircLogo from '../assets/partners/cifor-icraf-logo.webp'
import redcrossLogo from '../assets/partners/mundo.png'

const emit = defineEmits(['navigate'])
const { t } = useLang()

// Strategic Partners - Major collaborators with detailed descriptions
const strategicPartners = [
  {
    name: 'UN Women',
    logo: unwomenLogo,
    website: 'https://www.unwomen.org',
    description: {
      en: 'Supporting our programs for women\'s economic empowerment and leadership development across DRC.',
      fr: 'Soutient nos programmes pour l\'autonomisation économique des femmes et le développement du leadership à travers la RDC.'
    }
  },
  {
    name: 'UNICEF',
    logo: unicefLogo,
    website: 'https://www.unicef.org',
    description: {
      en: 'Partnering on girls\' education initiatives and menstrual health programs in conflict-affected regions.',
      fr: 'Partenariat sur les initiatives d\'éducation des filles et les programmes de santé menstruelle dans les régions affectées par les conflits.'
    }
  },
  {
    name: 'USAID',
    logo: usaidLogo,
    website: 'https://www.usaid.gov',
    description: {
      en: 'Providing critical funding for our emergency response and long-term development programs.',
      fr: 'Fournit un financement essentiel pour notre réponse d\'urgence et nos programmes de développement à long terme.'
    }
  },
  {
    name: 'World Health Organization',
    logo: whoLogo,
    website: 'https://www.who.int',
    description: {
      en: 'Collaborating on reproductive health services and community health worker training.',
      fr: 'Collaboration sur les services de santé reproductive et la formation des agents de santé communautaire.'
    }
  },
  {
    name: 'Oxfam International',
    logo: oxfamLogo,
    website: 'https://www.oxfam.org',
    description: {
      en: 'Joint efforts in humanitarian response and women\'s rights advocacy in Eastern DRC.',
      fr: 'Efforts conjoints dans la réponse humanitaire et le plaidoyer pour les droits des femmes dans l\'est de la RDC.'
    }
  },
  {
    name: 'CARE International',
    logo: carelogo,
    website: 'https://www.care.org',
    description: {
      en: 'Working together on microfinance programs and women\'s economic empowerment initiatives.',
      fr: 'Travail conjoint sur les programmes de microfinance et les initiatives d\'autonomisation économique des femmes.'
    }
  }
]

// Program Partners - Organizations working on specific initiatives
const programPartners = [
  {
    name: 'International Rescue Committee',
    logo: ircLogo,
    website: 'https://www.rescue.org'
  },
  {
    name: 'Red Cross',
    logo: redcrossLogo,
    website: 'https://www.icrc.org'
  },
  {
    name: 'Save the Children',
    logo: unwomenLogo, // Replace with actual logo
    website: 'https://www.savethechildren.org'
  },
  {
    name: 'Action Against Hunger',
    logo: unicefLogo, // Replace with actual logo
    website: 'https://www.actionagainsthunger.org'
  },
  {
    name: 'Plan International',
    logo: usaidLogo, // Replace with actual logo
    website: 'https://plan-international.org'
  },
  {
    name: 'Women for Women International',
    logo: whoLogo, // Replace with actual logo
    website: 'https://www.womenforwomen.org'
  },
  {
    name: 'Mercy Corps',
    logo: oxfamLogo, // Replace with actual logo
    website: 'https://www.mercycorps.org'
  },
  {
    name: 'Global Fund for Women',
    logo: carelogo, // Replace with actual logo
    website: 'https://www.globalfundforwomen.org'
  }
]

// Funding Partners - Simple logo wall
const fundingPartners = [
  {
    name: 'Bill & Melinda Gates Foundation',
    logo: unwomenLogo, // Replace with actual logo
    website: 'https://www.gatesfoundation.org'
  },
  {
    name: 'Global Affairs Canada',
    logo: unicefLogo, // Replace with actual logo
    website: 'https://www.international.gc.ca'
  },
  {
    name: 'European Union',
    logo: usaidLogo, // Replace with actual logo
    website: 'https://ec.europa.eu'
  },
  {
    name: 'UK Aid',
    logo: whoLogo, // Replace with actual logo
    website: 'https://www.gov.uk/government/organisations/foreign-commonwealth-development-office'
  }
]
</script>