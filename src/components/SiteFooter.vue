<template>
  <footer class="bg-[#0f0f0f] py-16 px-6 lg:px-10">
    <div class="max-w-7xl mx-auto">

      <!-- Grid -->
      <div class="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/8">

        <!-- Brand -->
        <div class="md:col-span-2">
          <a href="#home" class="flex items-center gap-2.5 mb-4">
            <LogoMark :size="34" />
            <span class="font-display font-semibold text-lg text-white">
              Women<span class="text-brand-yellow">Concern</span>
            </span>
          </a>
          <p class="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
            {{
              t({
                en: 'A grassroots NGO dedicated to the dignity and empowerment of women and girls in Goma, DRC.',
                fr: "Une ONG de base dédiée à la dignité et l'autonomisation des femmes et filles à Goma, RDC.",
              })
            }}
          </p>
          <a href="https://gogetfunding.com/emergency-humanitarian-response-in-goma-north-kivu/" target="_blank"
            rel="noopener"
            class="pulse-btn inline-block bg-brand-yellow text-brand-green font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-105 transition-all">
            ♥ {{ t({ en: 'Donate Now', fr: 'Donner Maintenant' }) }}
          </a>
        </div>

        <!-- Navigate -->
        <div>
          <h4 class="text-white/45 text-xs font-semibold uppercase tracking-widest mb-5">
            {{ t({ en: 'Navigate', fr: 'Navigation' }) }}
          </h4>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.id">
              <a :href="'#' + item.id" class="text-white/35 text-sm hover:text-white/80 transition-colors">
                {{ t(item) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white/45 text-xs font-semibold uppercase tracking-widest mb-5">Contact</h4>
          <ul class="space-y-3 text-white/35 text-sm">
            <li>📍 Bukavu,DRC</li>
            <li>✉️ info@women-concern.org</li>
            <li>📞 +243 820 539 830
            </li>
          </ul>
          <div class="flex gap-2 mt-6">
            <a v-for="s in socials" :key="s" href="#"
              class="w-8 h-8 rounded-full bg-white/8 hover:bg-brand-yellow hover:text-brand-green text-white/35 flex items-center justify-center text-xs font-bold transition-all">{{
                s }}</a>
          </div>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-white/20 text-xs">
          © 2024 Women Concern NGO.
          {{ t({ en: 'All rights reserved.', fr: 'Tous droits réservés.' }) }}
        </p>
        <p class="text-white/20 text-xs">
          {{ t({ en: 'Made with ♥ for the women of Goma', fr: 'Fait avec ♥ pour les femmes de Goma' }) }}
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
import LogoMark from './LogoMark.vue'

const { t } = useLang()

const navItems = [
  { id: 'story', en: 'Our Story', fr: 'Notre Histoire' },
  { id: 'projects', en: 'Projects', fr: 'Projets' },
  { id: 'board', en: 'Our Board', fr: 'Notre Conseil' },
  { id: 'pads', en: 'Malkia Pads', fr: 'Malkia Pads' },
  { id: 'involved', en: 'Get Involved', fr: "S'Impliquer" },
  { id: 'donors', en: 'Donors', fr: 'Donateurs' },
]

const socials = ['f', 'in', 'tw']
</script>
