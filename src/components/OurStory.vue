<template>
  <section id="story" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Text -->
        <div class="reveal">
          <span class="section-label">{{ t({ en: 'Our Story', fr: 'Notre Histoire' }) }}</span>

          <h2 class="font-display font-bold text-gray-900 leading-tight mb-6 text-4xl md:text-5xl">
            {{ t({ en: 'Born from the Heart of DRC.', fr: 'Née du Cœur de la RDC.' }) }}
          </h2>

          <p class="text-gray-500 text-base leading-relaxed mb-4">
            {{
              t({
                en: `Women Concern was founded in Bukavu, Democratic Republic of Congo — a city that has endured decades of
            conflict and displacement. We saw women and girls bearing the heaviest burden, and we chose to act.`,
                fr: `Women Concern a été fondée à Bukavu, RDC — une ville qui a enduré des décennies de conflits et de
            déplacements. Nous avons vu les femmes et les filles porter le fardeau le plus lourd, et nous avons choisi
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

        <!-- Cards: Motto, Mission, Vision -->
        <div class="reveal space-y-6">

          <!-- Motto Card -->
          <div
            class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-brand-yellow">
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-2xl">
                ✨
              </div>
              <div class="flex-1">
                <h3 class="font-display font-bold text-gray-900 text-lg mb-2">
                  {{ t({ en: 'Our Motto', fr: 'Notre Devise' }) }}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ t({
                    en: 'Dignifying women\'s life',
                    fr: 'Dignifier la vie des femmes'
                  }) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Mission Card -->
          <div
            class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-brand-green">
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-2xl">
                🎯
              </div>
              <div class="flex-1">
                <h3 class="font-display font-bold text-gray-900 text-lg mb-2">
                  {{ t({ en: 'Our Mission', fr: 'Notre Mission' }) }}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ t({
                    en: `Lead rural women and girls to discover their potential, support them in their promotion,
                  enhancement and exploitation for inclusive development.`,
                    fr: `Accompagner les femmes et les filles rurales à découvrir leur potentiel, les soutenir dans leur
                  promotion, valorisation et exploitation pour un développement inclusif.`
                  }) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Vision Card -->
          <div
            class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500">
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl">
                👁️
              </div>
              <div class="flex-1">
                <h3 class="font-display font-bold text-gray-900 text-lg mb-2">
                  {{ t({ en: 'Our Vision', fr: 'Notre Vision' }) }}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ t({
                    en: 'A society where the dignity of women and girls prevails.',
                    fr: 'Une société où la dignité des femmes et des filles prévaut.'
                  }) }}
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