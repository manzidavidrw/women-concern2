<template>
  <section id="donate" class="py-20 bg-gray-50">
    <div class="max-w-5xl mx-auto px-6 lg:px-10">
      <div class="relative overflow-hidden bg-brand-green rounded-3xl p-10 md:p-16 text-center">
        <!-- Decorative rings -->
        <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
        <div class="absolute -bottom-16 -left-16 w-52 h-52 rounded-full border border-white/5 pointer-events-none" />

        <div class="relative z-10">
          <!-- Tag -->
          <span
            class="inline-block border border-brand-yellow/40 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            🚨 {{ t({ en: 'Urgent — Goma, DRC', fr: 'Urgent — Goma, RDC' }) }}
          </span>

          <!-- Headline -->
          <h2 class="font-display font-bold text-white mb-5 leading-tight text-4xl md:text-5xl">
            {{ t({ en: 'People in Goma Need You Today.', fr: 'Les Gens de Goma Ont Besoin de Vous.' }) }}
          </h2>

          <!-- Body -->
          <p class="text-white/55 max-w-xl mx-auto text-base mb-10 leading-relaxed">
            {{
              t({
                en: 'Thousands of displaced women and children in Goma face hunger, violence, and medical emergencies every day. Your donation goes directly to emergency relief on the ground.',
                fr: "Des milliers de femmes et enfants déplacés à Goma font face à la faim, la violence et des urgences médicales chaque jour. Votre don va directement à l'aide d'urgence sur le terrain.",
              })
            }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://gogetfunding.com/PLACEHOLDER" target="_blank" rel="noopener"
              class="pulse-btn bg-brand-yellow text-brand-green font-bold px-9 py-4 rounded-full text-base hover:brightness-105 transition-all">
              ♥ {{ t({ en: 'Donate on GoGetFunding', fr: 'Donner sur GoGetFunding' }) }}
            </a>
            <a href="#pads"
              class="border border-white/20 text-white font-medium px-9 py-4 rounded-full text-base hover:bg-white/10 transition-all">
              {{ t({ en: '📦 Buy Pads for Girls', fr: '📦 Acheter des Serviettes' }) }}
            </a>
          </div>

          <p class="text-white/25 text-xs mt-6">
            {{ t({
              en: '100% of donations reach beneficiaries directly.',
              fr: '100% des dons atteignent directement les bénéficiaires.'
            }) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>
