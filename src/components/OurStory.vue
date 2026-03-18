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
        <div class="reveal space-y-4">

          <!-- Mission Card -->
          <div class="group relative bg-brand-green rounded-2xl p-6 overflow-hidden
                      shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div class="absolute -right-3 -bottom-4 font-display font-black text-[110px]
                        leading-none text-white/[0.06] select-none pointer-events-none">M</div>
            <div class="relative z-10 flex items-start gap-5">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15
                          flex items-center justify-center text-2xl shadow-inner">
                🎯
              </div>
              <div>
                <p class="text-brand-yellow text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                  {{ t({ en: 'Mission', fr: 'Mission' }) }}
                </p>
                <h3 class="font-display font-bold text-white text-xl mb-2 leading-snug">
                  {{ t({ en: 'What We Do', fr: 'Ce que nous faisons' }) }}
                </h3>
                <p class="text-white/80 text-sm leading-relaxed">
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
          <div class="group relative bg-gray-900 rounded-2xl p-6 overflow-hidden
                      shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div class="absolute -right-3 -bottom-4 font-display font-black text-[110px]
                        leading-none text-white/[0.05] select-none pointer-events-none">V</div>
            <div class="absolute left-0 top-6 bottom-6 w-1 bg-brand-yellow rounded-r-full"></div>
            <div class="relative z-10 flex items-start gap-5">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10
                          flex items-center justify-center text-2xl shadow-inner">
                👁️
              </div>
              <div>
                <p class="text-brand-yellow text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                  {{ t({ en: 'Vision', fr: 'Vision' }) }}
                </p>
                <h3 class="font-display font-bold text-white text-xl mb-2 leading-snug">
                  {{ t({ en: 'Where We\'re Going', fr: 'Là où nous allons' }) }}
                </h3>
                <p class="text-white/70 text-sm leading-relaxed">
                  {{ t({
                    en: 'A society where the dignity of women and girls prevails.',
                    fr: 'Une société où la dignité des femmes et des filles prévaut.'
                  }) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Motto Card -->
          <div class="group relative bg-brand-yellow rounded-2xl p-6 overflow-hidden
                      shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div class="absolute -right-3 -bottom-4 font-display font-black text-[110px]
                        leading-none text-black/[0.06] select-none pointer-events-none">"</div>
            <div class="relative z-10 flex items-start gap-5">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-black/10
                          flex items-center justify-center text-2xl shadow-inner">
                ✨
              </div>
              <div>
                <p class="text-brand-green text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                  {{ t({ en: 'Our Motto', fr: 'Notre Devise' }) }}
                </p>
                <h3 class="font-display font-bold text-gray-900 text-xl mb-2 leading-snug">
                  {{ t({ en: 'Our Words to Live By', fr: 'Nos mots pour vivre' }) }}
                </h3>
                <p class="text-gray-800 text-sm leading-relaxed font-medium">
                  {{ t({
                    en: 'Dignifying women\'s life',
                    fr: 'Dignifier la vie des femmes'
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