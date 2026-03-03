<template>
  <header :class="[
    'fixed inset-x-0 top-0 z-50 transition-all duration-300',
    scrolled ? 'bg-white/95 backdrop-blur shadow-sm border-b border-gray-100' : 'bg-transparent'
  ]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">

      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2.5">
        <LogoMark :size="38" />
        <span :class="[
          'font-display font-semibold text-xl leading-none transition-colors',
          scrolled ? 'text-gray-900' : 'text-white'
        ]">
          Women<span class="text-brand-yellow">Concern</span>
        </span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center gap-8">
        <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" :class="[
          'nav-link text-sm font-medium transition-colors',
          scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
        ]">
          {{ t(item) }}
        </a>
      </nav>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <!-- Language toggle -->
        <div class="hidden md:flex rounded-full overflow-hidden border text-xs"
          :class="scrolled ? 'border-gray-200' : 'border-white/25'">
          <button @click="lang = 'en'" :class="[
            'px-3 py-1 font-medium transition-colors',
            lang === 'en'
              ? 'bg-brand-yellow text-brand-green'
              : scrolled ? 'text-gray-500 hover:text-gray-700' : 'text-white/70 hover:text-white'
          ]">EN</button>
          <button @click="lang = 'fr'" :class="[
            'px-3 py-1 font-medium transition-colors',
            lang === 'fr'
              ? 'bg-brand-yellow text-brand-green'
              : scrolled ? 'text-gray-500 hover:text-gray-700' : 'text-white/70 hover:text-white'
          ]">FR</button>
        </div>

        <!-- Donate CTA -->
        <a href="#donate"
          class="pulse-btn hidden md:inline-block bg-brand-yellow text-brand-green font-semibold text-sm px-5 py-2 rounded-full hover:brightness-105 transition-all">
          ♥ {{ lang === 'en' ? 'Donate' : 'Donner' }}
        </a>

        <!-- Burger -->
        <button @click="mobileOpen = !mobileOpen" class="lg:hidden p-1"
          :class="scrolled ? 'text-gray-700' : 'text-white'" aria-label="Toggle menu">
          <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300"
      :style="mobileOpen ? 'max-height: 540px; opacity: 1;' : 'max-height: 0; opacity: 0;'">
      <div class="px-6 py-5">
        <!-- Lang in mobile -->
        <div class="flex gap-2 pb-4 border-b border-gray-100 mb-3">
          <button @click="lang = 'en'"
            :class="['text-xs px-3 py-1 rounded-full font-medium border transition-colors',
              lang === 'en' ? 'bg-brand-yellow text-brand-green border-brand-yellow' : 'text-gray-500 border-gray-200']">EN</button>
          <button @click="lang = 'fr'"
            :class="['text-xs px-3 py-1 rounded-full font-medium border transition-colors',
              lang === 'fr' ? 'bg-brand-yellow text-brand-green border-brand-yellow' : 'text-gray-500 border-gray-200']">FR</button>
        </div>

        <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" @click="mobileOpen = false"
          class="block py-2.5 text-sm font-medium text-gray-700 border-b border-gray-50">
          {{ t(item) }}
        </a>

        <a href="#donate" @click="mobileOpen = false"
          class="mt-4 block text-center bg-brand-yellow text-brand-green font-semibold py-3 rounded-full text-sm">
          ♥ {{ lang === 'en' ? 'Donate Now' : 'Donner Maintenant' }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang.js'
import LogoMark from './LogoMark.vue'

const { lang, t } = useLang()
const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { id: 'story', en: 'Our Story', fr: 'Notre Histoire' },
  { id: 'projects', en: 'Projects', fr: 'Projets' },
  { id: 'board', en: 'Our Board', fr: 'Notre Conseil' },
  { id: 'pads', en: 'Malkia Pads', fr: 'Malkia Pads' },
  { id: 'involved', en: 'Get Involved', fr: "S'Impliquer" },
  { id: 'donors', en: 'Donors', fr: 'Donateurs' },
]

const onScroll = () => { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
