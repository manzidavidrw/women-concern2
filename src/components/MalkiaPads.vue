<template>
  <section id="pads" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Visual card -->
        <div class="reveal order-2 lg:order-1">
          <div class="relative">
            <div class="bg-gray-50 border border-gray-100 rounded-3xl h-[420px] flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 rounded-full bg-brand-green/8 flex items-center justify-center mx-auto mb-5">
                  <span class="text-5xl">🌸</span>
                </div>
                <p class="font-display font-semibold text-4xl text-brand-green">Malkia Pads</p>
                <p class="text-gray-400 text-sm mt-2">
                  {{ t({ en: 'Dignity · Health · Education', fr: 'Dignité · Santé · Éducation' }) }}
                </p>
              </div>
            </div>

            <!-- Floating stat badge -->
            <div class="absolute -bottom-5 -right-5 bg-brand-yellow rounded-2xl px-6 py-4 shadow-md">
              <p class="font-display font-bold text-2xl text-brand-green">500+</p>
              <p class="text-brand-green/70 text-xs font-medium mt-0.5">
                {{ t({ en: 'Girls helped', fr: 'Filles aidées' }) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="reveal order-1 lg:order-2">
          <span class="section-label">Malkia Pads</span>

          <h2 class="font-display font-bold text-gray-900 leading-tight mb-5 text-4xl md:text-5xl">
            {{ t({ en: 'Give a Girl Her Dignity.', fr: 'Donnez-lui Sa Dignité.' }) }}
          </h2>

          <p class="text-gray-500 text-base leading-relaxed mb-6">
            {{
              t({
                en: "Millions of girls miss school every month because they can't afford sanitary pads. Through Malkia Pads, you can purchase pads that are delivered directly to girls in Goma and surrounding areas.",
                fr: "Des millions de filles manquent l'école chaque mois faute de serviettes hygiéniques. Grâce aux Malkia Pads, vous pouvez acheter des serviettes directement livrées aux filles à Goma.",
              })
            }}
          </p>

          <ul class="space-y-3 mb-8">
            <li v-for="point in points" :key="point.en" class="flex items-start gap-3">
              <span
                class="mt-0.5 w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
              <span class="text-gray-500 text-sm">{{ t(point) }}</span>
            </li>
          </ul>

          <button disabled
            class="inline-block bg-brand-green text-white font-semibold px-7 py-3.5 rounded-full text-sm opacity-60 cursor-not-allowed">
            {{ t({ en: 'Shop Coming Soon', fr: 'Boutique Bientôt' }) }}
          </button>

          <p class="text-gray-400 text-xs mt-3">
            {{
              t({
                en: 'E-commerce launching soon — your purchases will ship pads directly to girls in need.',
                fr: 'E-commerce bientôt lancé — vos achats envoient des serviettes directement aux filles dans le besoin.',
              })
            }}
          </p>
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

const points = [
  { en: 'Pads delivered directly to girls in Goma schools', fr: 'Serviettes livrées aux filles dans les écoles de Goma' },
  { en: 'Each pack keeps a girl in school for a full month', fr: "Chaque paquet garde une fille à l'école pendant un mois" },
  { en: '100% traceable — you know exactly where your pads go', fr: '100% traçable — vous savez où vont vos serviettes' },
]
</script>
