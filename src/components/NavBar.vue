<template>
  <header :class="[
    'fixed inset-x-0 top-0 z-50 transition-all duration-300',
    isScrolled
      ? 'bg-white/95 backdrop-blur shadow-sm border-b border-gray-100'
      : 'bg-brand-green/40 backdrop-blur-sm'
  ]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">

      <!-- Logo -->

      <a href="#home" @click="$emit('navigate', 'home')" class="flex items-center gap-2.5">
        <img src="../assets/LOGO_transparent.PNG" alt="Women Concern" class="w-24 h-20 object-contain" />
        <span :class="['font-display font-semibold text-xl leading-none transition-colors',
          isScrolled ? 'text-gray-900' : 'text-white']">
          Women<span class="text-brand-yellow">Concern</span>
        </span>
      </a>

      <nav class="hidden lg:flex items-center gap-8">

        <!-- ① Our Story dropdown -->
        <div class="relative" @mouseenter="storyOpen = true" @mouseleave="storyOpen = false">
          <button :class="['nav-link flex items-center gap-1 text-sm font-medium transition-colors',
            isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80']">
            {{ t({ en: 'Our Story', fr: 'Notre Histoire' }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="storyOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-show="storyOpen"
              class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div
                class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
              <div class="py-2">
                <a v-for="sub in storyItems" :key="sub.page" @click="navigate(sub.page); storyOpen = false"
                  class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group cursor-pointer">
                  <span
                    class="w-8 h-8 rounded-lg bg-brand-green/8 flex items-center justify-center text-base flex-shrink-0 group-hover:bg-brand-green/15 transition-colors">
                    {{ sub.emoji }}
                  </span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800 group-hover:text-brand-green transition-colors">{{
                      t(sub) }}</p>
                    <p class="text-xs text-gray-400 mt-0.5">{{ t(sub.sub) }}</p>
                  </div>
                </a>
              </div>
              <div class="h-1 bg-gradient-to-r from-brand-green to-brand-yellow" />
            </div>
          </transition>
        </div>

        <!-- ② Our Board dropdown — now includes Get Involved, Partnerships, Our Team -->
        <div class="relative" @mouseenter="boardOpen = true" @mouseleave="boardOpen = false">
          <button :class="['nav-link flex items-center gap-1 text-sm font-medium transition-colors',
            isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80']">
            {{ t({ en: 'Our Board', fr: 'Notre Conseil' }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="boardOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-show="boardOpen"
              class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div
                class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
              <div class="py-2">
                <a v-for="sub in boardItems" :key="sub.page" @click="navigate(sub.page); boardOpen = false"
                  class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group cursor-pointer">
                  <span
                    class="w-8 h-8 rounded-lg bg-brand-green/8 flex items-center justify-center text-base flex-shrink-0 group-hover:bg-brand-green/15 transition-colors">
                    {{ sub.emoji }}
                  </span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800 group-hover:text-brand-green transition-colors">{{
                      t(sub) }}</p>
                    <p class="text-xs text-gray-400 mt-0.5">{{ t(sub.sub) }}</p>
                  </div>
                </a>
              </div>
              <div class="h-1 bg-gradient-to-r from-brand-green to-brand-yellow" />
            </div>
          </transition>
        </div>

        <!-- ③ What We Do dropdown -->
        <div class="relative" @mouseenter="whatOpen = true" @mouseleave="whatOpen = false">
          <button :class="['nav-link flex items-center gap-1 text-sm font-medium transition-colors',
            isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80']">
            {{ t({ en: 'What We Do', fr: 'Ce Que Nous Faisons' }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="whatOpen ? 'rotate-180' : ''" fill="none"
              stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-show="whatOpen"
              class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div
                class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
              <div class="py-2">
                <a v-for="sub in whatItems" :key="sub.page" @click="navigate(sub.page); whatOpen = false"
                  class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group cursor-pointer">
                  <span
                    class="w-8 h-8 rounded-lg bg-brand-green/8 flex items-center justify-center text-base flex-shrink-0 group-hover:bg-brand-green/15 transition-colors">
                    {{ sub.emoji }}
                  </span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800 group-hover:text-brand-green transition-colors">{{
                      t(sub) }}</p>
                    <p class="text-xs text-gray-400 mt-0.5">{{ t(sub.sub) }}</p>
                  </div>
                </a>
              </div>
              <div class="h-1 bg-gradient-to-r from-brand-green to-brand-yellow" />
            </div>
          </transition>
        </div>

        <!-- ④ Blog — simple link -->
        <a @click="navigate('blog')" :class="['nav-link text-sm font-medium transition-colors cursor-pointer',
          isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80']">
          {{ t({ en: 'Blog', fr: 'Blog' }) }}
        </a>

      </nav>

      <div class="flex items-center gap-3">
        <div class="hidden md:flex rounded-full overflow-hidden border text-xs"
          :class="isScrolled ? 'border-gray-200' : 'border-white/40'">
          <button @click="lang = 'en'" :class="['px-3 py-1 font-medium transition-colors',
            lang === 'en' ? 'bg-brand-yellow text-brand-green'
              : isScrolled ? 'text-gray-500 hover:text-gray-700' : 'text-white hover:text-white/80']">EN</button>
          <button @click="lang = 'fr'" :class="['px-3 py-1 font-medium transition-colors',
            lang === 'fr' ? 'bg-brand-yellow text-brand-green'
              : isScrolled ? 'text-gray-500 hover:text-gray-700' : 'text-white hover:text-white/80']">FR</button>
        </div>
        <a href="#donate"
          class="pulse-btn hidden md:inline-block bg-brand-yellow text-brand-green font-semibold text-sm px-5 py-2 rounded-full hover:brightness-105 transition-all">
          ♥ {{ lang === 'en' ? 'Donate' : 'Donner' }}
        </a>
        <button @click="mobileOpen = !mobileOpen" class="lg:hidden p-1"
          :class="isScrolled ? 'text-gray-700' : 'text-white'">
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

    <!-- ── Mobile menu ── -->
    <div class="lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300"
      :style="mobileOpen ? 'max-height:1000px;opacity:1' : 'max-height:0;opacity:0'">
      <div class="px-6 py-5">

        <!-- Language toggle -->
        <div class="flex gap-2 pb-4 border-b border-gray-100 mb-3">
          <button @click="lang = 'en'"
            :class="['text-xs px-3 py-1 rounded-full font-medium border transition-colors',
              lang === 'en' ? 'bg-brand-yellow text-brand-green border-brand-yellow' : 'text-gray-500 border-gray-200']">EN</button>
          <button @click="lang = 'fr'"
            :class="['text-xs px-3 py-1 rounded-full font-medium border transition-colors',
              lang === 'fr' ? 'bg-brand-yellow text-brand-green border-brand-yellow' : 'text-gray-500 border-gray-200']">FR</button>
        </div>

        <!-- Our Story mobile -->
        <div class="border-b border-gray-50">
          <button @click="mobileStory = !mobileStory"
            class="w-full flex items-center justify-between py-2.5 text-sm font-medium text-gray-700">
            {{ t({ en: 'Our Story', fr: 'Notre Histoire' }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200 text-gray-400"
              :class="mobileStory ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="overflow-hidden transition-all duration-300"
            :style="mobileStory ? 'max-height:400px;opacity:1' : 'max-height:0;opacity:0'">
            <a v-for="sub in storyItems" :key="sub.page"
              @click="navigate(sub.page); mobileOpen = false; mobileStory = false"
              class="flex items-center gap-3 pl-3 py-2.5 text-sm text-gray-600 hover:text-brand-green transition-colors cursor-pointer">
              <span>{{ sub.emoji }}</span>
              <span class="font-medium">{{ t(sub) }}</span>
            </a>
          </div>
        </div>

        <!-- Our Board mobile — includes Get Involved, Partnerships, Our Team -->
        <div class="border-b border-gray-50">
          <button @click="mobileBoard = !mobileBoard"
            class="w-full flex items-center justify-between py-2.5 text-sm font-medium text-gray-700">
            {{ t({ en: 'Our Board', fr: 'Notre Conseil' }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200 text-gray-400"
              :class="mobileBoard ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="overflow-hidden transition-all duration-300"
            :style="mobileBoard ? 'max-height:260px;opacity:1' : 'max-height:0;opacity:0'">
            <a v-for="sub in boardItems" :key="sub.page"
              @click="navigate(sub.page); mobileOpen = false; mobileBoard = false"
              class="flex items-center gap-3 pl-3 py-2.5 text-sm text-gray-600 hover:text-brand-green transition-colors cursor-pointer">
              <span>{{ sub.emoji }}</span>
              <span class="font-medium">{{ t(sub) }}</span>
            </a>
          </div>
        </div>

        <!-- What We Do mobile -->
        <div class="border-b border-gray-50">
          <button @click="mobileWhat = !mobileWhat"
            class="w-full flex items-center justify-between py-2.5 text-sm font-medium text-gray-700">
            {{ t({ en: 'What We Do', fr: 'Ce Que Nous Faisons' }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200 text-gray-400"
              :class="mobileWhat ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="overflow-hidden transition-all duration-300"
            :style="mobileWhat ? 'max-height:160px;opacity:1' : 'max-height:0;opacity:0'">
            <a v-for="sub in whatItems" :key="sub.page"
              @click="navigate(sub.page); mobileOpen = false; mobileWhat = false"
              class="flex items-center gap-3 pl-3 py-2.5 text-sm text-gray-600 hover:text-brand-green transition-colors cursor-pointer">
              <span>{{ sub.emoji }}</span>
              <span class="font-medium">{{ t(sub) }}</span>
            </a>
          </div>
        </div>

        <!-- Blog mobile -->
        <a @click="navigate('blog'); mobileOpen = false"
          class="block py-2.5 text-sm font-medium text-gray-700 border-b border-gray-50 cursor-pointer hover:text-brand-green transition-colors">
          {{ t({ en: 'Blog', fr: 'Blog' }) }}
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang.js'

const props = defineProps({
  currentPage: { type: String, default: 'home' }
})

const emit = defineEmits(['navigate'])
const { lang, t } = useLang()

const scrolledDown = ref(false)
const mobileOpen = ref(false)
const storyOpen = ref(false)
const boardOpen = ref(false)
const whatOpen = ref(false)
const mobileStory = ref(false)
const mobileBoard = ref(false)
const mobileWhat = ref(false)

// Navbar stays transparent on all pages, turns white only on scroll
const isScrolled = computed(() => scrolledDown.value)

const storyItems = [
  { page: 'who-we-are', emoji: '💚', en: 'Who We Are', fr: 'Qui Nous Sommes', sub: { en: 'Our identity & values', fr: 'Notre identité & valeurs' } },
  { page: 'our-mission', emoji: '🎯', en: 'Our Mission', fr: 'Notre Mission', sub: { en: 'What drives us every day', fr: 'Ce qui nous anime chaque jour' } },
  { page: 'our-history', emoji: '📖', en: 'Our History', fr: 'Notre Histoire', sub: { en: 'How it all started', fr: 'Comment tout a commencé' } },
  { page: 'donors-partners', emoji: '🤝', en: 'Donors & Partners', fr: 'Donateurs & Partenaires', sub: { en: 'Those who make it possible', fr: 'Ceux qui rendent cela possible' } },
  { page: 'faqs', emoji: '❓', en: 'FAQs', fr: 'FAQ', sub: { en: 'Common questions answered', fr: 'Questions fréquentes' } },
  { page: 'contact-us', emoji: '✉️', en: 'Contact Us', fr: 'Contactez-Nous', sub: { en: 'Get in touch with us', fr: 'Prenez contact avec nous' } },
]

// Our Board now contains: Our Board page + Get Involved + Partnerships + Our Team
const boardItems = [
  { page: 'our-board', emoji: '🏛️', en: 'Our Board', fr: 'Notre Conseil', sub: { en: 'Meet our leadership team', fr: 'Rencontrez notre direction' } },
  { page: 'get-involved', emoji: '🙌', en: 'Get Involved', fr: "S'Impliquer", sub: { en: 'Ways you can help us', fr: 'Comment vous pouvez aider' } },
  { page: 'partnerships', emoji: '🌍', en: 'Partnerships', fr: 'Partenariats', sub: { en: 'Organisations we work with', fr: 'Organisations partenaires' } },
  { page: 'our-team', emoji: '👥', en: 'Our Team', fr: 'Notre Équipe', sub: { en: 'The people behind the work', fr: 'Les personnes derrière le travail' } },
]

const whatItems = [
  { page: 'malkia-pads', emoji: '🌸', en: 'Malkia Pads', fr: 'Malkia Pads', sub: { en: 'Dignity & health for girls', fr: 'Dignité et santé pour les filles' } },
  { page: 'glfx', emoji: '✨', en: 'GLFX', fr: 'GLFX', sub: { en: 'Girls leadership & futures', fr: 'Leadership et avenir des filles' } },
]

const navigate = (page) => emit('navigate', page)
const onScroll = () => { scrolledDown.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>