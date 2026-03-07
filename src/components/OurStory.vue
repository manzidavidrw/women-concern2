<template>
  <section id="story" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Text -->
        <div class="reveal">
          <span class="section-label">{{ t({ en: 'Our Story', fr: 'Notre Histoire' }) }}</span>

          <h2 class="font-display font-bold text-gray-900 leading-tight mb-6 text-4xl md:text-5xl">
            {{ t({ en: 'Born from the Heart of DRC.', fr: 'Née du Cœur de RDC.' }) }}
          </h2>

          <p class="text-gray-500 text-base leading-relaxed mb-4">
            {{
              t({
                en: `Women Concern was founded in Bukavu, Democratic Republic of Congo — a city that has endured decades of
            conflict and displacement.We saw women and girls bearing the heaviest burden, and we chose to act.`,
                fr: `Women Concern a été fondée à Bukavu, RDC — une ville qui a enduré des décennies de conflits et de
            déplacements.Nous avons vu les femmes et les filles porter le fardeau le plus lourd, et nous avons choisi
            d'agir.`,
              })
            }}
          </p>

          <p class="text-gray-500 text-base leading-relaxed mb-8">
            {{
              t({
                en: `Today we run programs in health, education, economic empowerment, and psychosocial support — touching
            thousands of lives across Eastern DRC.`,
                fr: `Aujourd'hui nous gérons des programmes en santé, éducation, autonomisation économique et soutien
            psychosocial — touchant des milliers de vies dans l'est de la RDC.`,
              })
            }}
          </p>

          <a href="#involved"
            class="inline-flex items-center gap-2 text-brand-green font-semibold text-sm border-b-2 border-brand-yellow pb-0.5 hover:opacity-70 transition-opacity">
            {{ t({ en: 'Join our mission →', fr: 'Rejoindre notre mission →' }) }}
          </a>
        </div>

        <!-- Visual grid -->
        <div class="reveal grid grid-cols-2 gap-4 h-[380px]">
          <div class="rounded-2xl bg-brand-green flex items-center justify-center">
            <div class="text-center text-white p-4">
              <div class="text-5xl mb-3">🌍</div>
              <p class="font-display font-semibold text-lg">Bukavu, DRC</p>
              <p class="text-white/45 text-xs mt-1">Sud-Kivu</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex-1 rounded-2xl bg-brand-yellow flex items-center justify-center">
              <div class="text-center p-3">
                <div class="text-4xl mb-2">💪</div>
                <p class="font-display font-semibold text-brand-green">
                  {{ t({ en: 'Since 2018', fr: 'Depuis 2018' }) }}
                </p>
              </div>
            </div>
            <div class="flex-1 rounded-2xl bg-gray-200 flex items-center justify-center">
              <div class="text-center p-3">
                <div class="text-4xl mb-2">🤝</div>
                <p class="font-display font-semibold text-gray-700 text-sm">
                  {{ t({ en: 'Community First', fr: "Communauté d'abord" }) }}
                </p>
              </div>
            </div>
          </div>
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
</script>
