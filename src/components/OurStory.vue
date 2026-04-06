<template>
  <section id="story" class="pt-16 pb-10 bg-gray-50">
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

        <!-- Cards: Mission, Vision, Motto (motto last) -->
        <!-- MISSION / VISION / MOTTO - HERO STYLE -->
        <div class="reveal mt-20">

          <div class="grid lg:grid-cols-2 gap-10 items-stretch">

            <!-- 🔥 BIG MISSION BLOCK -->
            <div class="relative bg-brand-green text-white rounded-3xl p-12
                shadow-2xl flex flex-col justify-between
                hover:scale-[1.01] transition duration-300">

              <div>
                <p class="text-brand-yellow uppercase tracking-[0.25em] text-xs font-bold mb-4">
                  {{ t({ en: 'Mission', fr: 'Mission' }) }}
                </p>

                <h3 class="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
                  {{ t({ en: 'What Drives Us', fr: 'Ce qui nous motive' }) }}
                </h3>

                <p class="text-white/80 text-lg leading-relaxed">
                  {{ t({
                    en: `Lead rural women and girls to discover their potential,
                  support them in their promotion, enhancement and exploitation
                  for inclusive development.`,
                    fr: `Accompagner les femmes et les filles rurales à découvrir leur potentiel
                  et les soutenir pour un développement inclusif.`
                  }) }}
                </p>
              </div>

              <div class="text-6xl opacity-10 absolute bottom-6 right-6">🎯</div>
            </div>

            <!-- SIDE STACK -->
            <div class="flex flex-col gap-8">

              <!-- 👁️ VISION -->
              <div class="relative bg-gray-900 text-white rounded-3xl p-10
                  shadow-xl hover:-translate-y-1 transition">

                <p class="text-brand-yellow uppercase tracking-[0.25em] text-xs font-bold mb-3">
                  {{ t({ en: 'Vision', fr: 'Vision' }) }}
                </p>

                <h3 class="font-display text-2xl font-bold mb-4">
                  {{ t({ en: 'Where We’re Going', fr: 'Là où nous allons' }) }}
                </h3>

                <p class="text-white/70 leading-relaxed">
                  {{ t({
                    en: 'A society where the dignity of women and girls prevails.',
                    fr: 'Une société où la dignité des femmes et des filles prévaut.'
                  }) }}
                </p>

                <div class="text-4xl opacity-10 absolute bottom-4 right-4">👁️</div>
              </div>

              <!-- ✨ MOTTO (VERY DIFFERENT STYLE) -->
              <div class="relative bg-brand-yellow text-gray-900 rounded-3xl p-10
                  shadow-xl flex items-center justify-center text-center
                  hover:-translate-y-1 transition">

                <div>
                  <p class="uppercase tracking-[0.25em] text-xs font-bold mb-3 text-brand-green">
                    {{ t({ en: 'Motto', fr: 'Devise' }) }}
                  </p>

                  <p class="font-display text-2xl md:text-3xl font-bold leading-snug">
                    “{{ t({
                      en: 'Dignifying women\'s life',
                      fr: 'Dignifier la vie des femmes'
                    }) }}”
                  </p>
                </div>
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