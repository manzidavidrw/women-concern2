<template>
  <section id="home" class="hero-grain relative min-h-screen flex items-center overflow-hidden bg-brand-green">
    <!-- Subtle decorative rings -->
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 -mr-64 pointer-events-none" />
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-white/5 -mr-40 pointer-events-none" />

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-36 w-full">
      <div class="max-w-2xl">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 mb-8 border border-white/15 rounded-full px-4 py-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
          <span class="text-white/70 text-xs font-medium tracking-widest uppercase">
            {{ t({ en: 'Responding to the Goma crisis', fr: 'En réponse à la crise de Goma' }) }}
          </span>
        </div>

        <!-- Headline -->
        <h1 class="font-display font-bold text-white leading-[1.06] mb-7 text-6xl md:text-7xl lg:text-8xl">
          {{ t({ en: 'Standing for', fr: 'Debout pour les' }) }}<br />
          {{ t({ en: 'Women &', fr: 'Femmes &' }) }}<br />
          <span class="text-brand-yellow">{{ t({ en: 'Girls.', fr: 'Filles.' }) }}</span>
        </h1>

        <!-- Sub -->
        <p class="text-white/55 text-lg leading-relaxed max-w-md mb-10">
          {{
            t({
              en: 'A grassroots NGO rooted in Goma, DRC — providing dignity, health, and opportunity to those who need it most.',
              fr: 'Une ONG enracinée à Goma, RDC — offrant dignité, santé et opportunité à celles qui en ont le plus besoin.',
            })
          }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4">
          <a href="#donate"
            class="pulse-btn bg-brand-yellow text-brand-green font-semibold px-7 py-3.5 rounded-full text-sm hover:brightness-105 transition-all">
            {{ t({ en: '♥ Support Goma', fr: '♥ Soutenir Goma' }) }}
          </a>
          <a href="#story"
            class="border border-white/25 text-white font-medium px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all">
            {{ t({ en: 'Our Story →', fr: 'Notre Histoire →' }) }}
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom wave -->
    <div class="absolute bottom-0 inset-x-0 z-10">
      <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30C480 60 960 0 1440 30V54H0V30Z" fill="white" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
const { t } = useLang()
</script>
