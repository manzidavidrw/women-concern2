<template>
  <section id="projects" class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <span class="section-label">{{ t({ en: 'Our Work', fr: 'Notre Travail' }) }}</span>
        <h2 class="font-display font-bold text-gray-900 text-4xl md:text-5xl mt-1 mb-4">
          {{ t({ en: 'What We Do', fr: 'Ce Que Nous Faisons' }) }}
        </h2>
        <p class="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
          {{ t({
            en: `Six interconnected pillars of impact — transforming lives, restoring land, and building lasting peace.`,
            fr: `Six piliers d\'impact interconnectés — transformer des vies, restaurer les terres et bâtir une paix
          durable.`
          }) }}
        </p>
      </div>

      <!-- Pillars grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 reveal">
        <div v-for="(pillar, i) in pillars" :key="i" @click="$emit('navigate', 'what-we-do')"
          class="group relative rounded-2xl overflow-hidden cursor-pointer" :style="{ animationDelay: i * 80 + 'ms' }">
          <!-- Background image or color block -->
          <div class="aspect-[4/3] w-full flex flex-col items-start justify-end p-6 relative"
            :style="{ background: pillar.bg }">
            <!-- Subtle pattern -->
            <div class="absolute inset-0 opacity-20"
              style="background-image: radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px); background-size: 20px 20px;">
            </div>

            <!-- Hover green overlay -->
            <div
              class="absolute inset-0 bg-brand-green opacity-0 group-hover:opacity-90 transition-opacity duration-400">
            </div>

            <!-- Default state content -->
            <div class="relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-3 shadow-sm"
                :style="{ background: pillar.iconBg }">
                {{ pillar.emoji }}
              </div>
              <h3 class="font-display font-bold text-gray-900 text-base leading-tight">
                {{ t(pillar.title) }}
              </h3>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">
                {{ t(pillar.tagline) }}
              </p>
            </div>

            <!-- Hover state content -->
            <div
              class="absolute inset-0 z-20 flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span class="text-3xl mb-3">{{ pillar.emoji }}</span>
              <h3 class="font-display font-bold text-white text-base leading-tight mb-1">
                {{ t(pillar.title) }}
              </h3>
              <p class="text-white/75 text-xs leading-relaxed mb-4">
                {{ t(pillar.tagline) }}
              </p>
              <span class="inline-flex items-center gap-1.5 text-brand-yellow text-xs font-bold">
                {{ t({ en: 'Explore', fr: 'Explorer' }) }}
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center reveal">
        <button @click="$emit('navigate', 'what-we-do')"
          class="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-8 py-4 rounded-full text-sm hover:brightness-110 transition-all shadow-lg hover:shadow-brand-green/30 hover:-translate-y-0.5">
          {{ t({ en: 'Explore all our programs', fr: 'Explorer tous nos programmes' }) }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
import { useReveal } from '../composables/useReveal.js'

const { t } = useLang()
useReveal()

defineEmits(['navigate'])

const pillars = [
  {
    emoji: '💼',
    bg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
    iconBg: 'rgba(255,255,255,0.7)',
    title: { en: "Women's Economic Empowerment", fr: 'Autonomisation Économique des Femmes' },
    tagline: { en: 'Ultra-Poor Graduation — pathways out of extreme poverty.', fr: 'Graduation Ultra-Pauvre — voies hors de la pauvreté extrême.' },
  },
  {
    emoji: '📚',
    bg: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)',
    iconBg: 'rgba(255,255,255,0.7)',
    title: { en: "Girls' Education & Empowerment", fr: 'Éducation et Autonomisation des Filles' },
    tagline: { en: 'Keeping girls in school and equipping them to lead.', fr: 'Maintenir les filles à l\'école et les préparer à diriger.' },
  },
  {
    emoji: '🌱',
    bg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
    iconBg: 'rgba(255,255,255,0.7)',
    title: { en: 'Land Restoration & Climate Resilience', fr: 'Restauration des Terres et Résilience Climatique' },
    tagline: { en: 'GLFx Kivu — community-led landscape action.', fr: 'GLFx Kivu — action paysagère communautaire.' },
  },
  {
    emoji: '🕊️',
    bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
    iconBg: 'rgba(255,255,255,0.7)',
    title: { en: 'Peace Building & Disarmament', fr: 'Consolidation de la Paix et Désarmement' },
    tagline: { en: 'Women-centred conflict transformation in Eastern DRC.', fr: 'Transformation des conflits centrée sur les femmes.' },
  },
  {
    emoji: '🔬',
    bg: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
    iconBg: 'rgba(255,255,255,0.7)',
    title: { en: 'Research & Learning', fr: 'Recherche et Apprentissage' },
    tagline: { en: 'Evidence-based advocacy for systemic change.', fr: 'Plaidoyer fondé sur des preuves pour un changement systémique.' },
  },
  {
    emoji: '📣',
    bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    iconBg: 'rgba(255,255,255,0.7)',
    title: { en: 'Community-Led Advocacy', fr: 'Plaidoyer Communautaire' },
    tagline: { en: 'Empowering women to influence policy and social norms.', fr: 'Permettre aux femmes d\'influencer les politiques.' },
  },
]
</script>