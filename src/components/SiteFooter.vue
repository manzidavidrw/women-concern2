<template>
  <footer class="relative bg-brand-green overflow-hidden">

    <!-- Watermark -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <span class="text-white/[0.03] font-display font-black text-[18vw] leading-none whitespace-nowrap">WOMEN
        CONCERN</span>
    </div>

    <!-- Top accent -->
    <div class="h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

      <!-- ── Top band: brand + donate ── -->
      <div
        class="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/10">
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-3 group">
          <LogoMark :size="36" />
          <div>
            <span class="font-display font-black text-xl text-white tracking-tight">
              Women<span class="text-brand-yellow">Concern</span>
            </span>
            <p class="text-white/30 text-[10px] tracking-widest uppercase">Goma · DRC</p>
          </div>
        </a>

        <!-- Tagline -->
        <p class="text-white/40 text-sm leading-relaxed max-w-sm hidden lg:block">
          {{ t({
            en: `A grassroots NGO dedicated to dignity, rights, and empowerment of women and girls in Eastern
          DRC.`, fr: `Une ONG de base dédiée à la dignité, aux droits et à l\'autonomisation des femmes dans l\'est de
          la RDC.` }) }}
        </p>

        <!-- Donate -->
        <a href="https://gogetfunding.com/emergency-humanitarian-response-in-goma-north-kivu/" target="_blank"
          rel="noopener"
          class="flex-shrink-0 inline-flex items-center gap-2 bg-brand-yellow text-brand-green font-black text-sm px-7 py-3.5 rounded-full hover:brightness-105 transition-all hover:scale-105 shadow-lg shadow-black/20">
          <span>♥</span>
          <span>{{ t({ en: 'Donate Now', fr: 'Donner Maintenant' }) }}</span>
        </a>
      </div>

      <!-- ── Main 3-col grid ── -->
      <div class="py-12 grid md:grid-cols-3 gap-10 border-b border-white/10">

        <!-- Col 1: Navigate -->
        <div>
          <h4 class="text-brand-yellow text-[10px] font-black uppercase tracking-[0.25em] mb-6">
            {{ t({ en: 'Navigate', fr: 'Navigation' }) }}
          </h4>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.id">
              <button @click="$emit('navigate', item.id)"
                class="group flex items-center gap-2 text-white/45 text-sm hover:text-white transition-colors duration-200">
                <span
                  class="w-0 group-hover:w-4 h-px bg-brand-yellow transition-all duration-300 overflow-hidden"></span>
                {{ t(item) }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Col 2: Programs -->
        <div>
          <h4 class="text-brand-yellow text-[10px] font-black uppercase tracking-[0.25em] mb-6">
            {{ t({ en: 'Our Programs', fr: 'Nos Programmes' }) }}
          </h4>
          <ul class="space-y-3">
            <li v-for="prog in programs" :key="prog.id">
              <button @click="$emit('navigate', 'what-we-do')"
                class="group flex items-center gap-2 text-white/45 text-sm hover:text-white transition-colors duration-200 text-left">
                <span
                  class="w-0 group-hover:w-4 h-px bg-brand-yellow transition-all duration-300 overflow-hidden"></span>
                {{ t(prog) }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contact -->
        <div>
          <h4 class="text-brand-yellow text-[10px] font-black uppercase tracking-[0.25em] mb-6">Contact</h4>
          <ul class="space-y-5">
            <li class="flex items-start gap-3">
              <span class="text-brand-yellow text-base mt-0.5 flex-shrink-0">📍</span>
              <span class="text-white/45 text-sm leading-relaxed">Bukavu, South Kivu<br>Democratic Republic of
                Congo</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-brand-yellow text-base flex-shrink-0">✉️</span>
              <a href="mailto:info@women-concern.org" class="text-white/45 text-sm hover:text-white transition-colors">
                info@women-concern.org
              </a>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-brand-yellow text-base flex-shrink-0">📞</span>
              <a href="tel:+243820539830" class="text-white/45 text-sm hover:text-white transition-colors">
                +243 820 539 830
              </a>
            </li>
          </ul>

          <!-- Socials -->
          <div class="flex gap-2.5 mt-8">
            <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank" rel="noopener"
              :aria-label="social.label"
              class="w-9 h-9 rounded-full border border-white/15 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-green text-white/40 flex items-center justify-center transition-all duration-200">
              <svg v-if="social.label === 'Facebook'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
              <svg v-else-if="social.label === 'LinkedIn'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <svg v-else-if="social.label === 'Twitter'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <!-- ── Bottom bar ── -->
      <div class="py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-white/20 text-xs">
          © {{ currentYear }} Women Concern NGO. {{ t({ en: 'All rights reserved.', fr: 'Tous droits réservés.' }) }}
        </p>
        <p class="text-white/20 text-xs flex items-center gap-1">
          {{ t({ en: 'Made with', fr: 'Fait avec' }) }}
          <span class="text-brand-yellow mx-1">♥</span>
          {{ t({ en: 'for the women of Goma', fr: 'pour les femmes de Goma' }) }}
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
import LogoMark from './LogoMark.vue'

defineEmits(['navigate'])
const { t } = useLang()
const currentYear = new Date().getFullYear()

const navItems = [
  { id: 'who-we-are', en: 'Who We Are', fr: 'Qui Nous Sommes' },
  { id: 'what-we-do', en: 'What We Do', fr: 'Ce Que Nous Faisons' },
  { id: 'our-mission', en: 'Our Mission', fr: 'Notre Mission' },
  { id: 'our-history', en: 'Our History', fr: 'Notre Histoire' },
  { id: 'donors-partners', en: 'Donors & Partners', fr: 'Donateurs & Partenaires' },
  { id: 'blog', en: 'Blog', fr: 'Blog' },
  { id: 'contact-us', en: 'Contact Us', fr: 'Contactez-Nous' },
]

const programs = [
  { id: 'wee', en: 'Women\'s Economic Empowerment', fr: 'Autonomisation Économique' },
  { id: 'edu', en: 'Girls\' Education', fr: 'Éducation des Filles' },
  { id: 'climate', en: 'Land Restoration & Climate', fr: 'Restauration & Climat' },
  { id: 'peace', en: 'Peace Building', fr: 'Consolidation de la Paix' },
  { id: 'research', en: 'Research & Learning', fr: 'Recherche & Apprentissage' },
  { id: 'advocacy', en: 'Advocacy', fr: 'Plaidoyer' },
]

const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
]
</script>