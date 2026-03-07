<template>
  <header :class="[
    'fixed inset-x-0 top-0 z-50 transition-all duration-300',
    isScrolled
      ? 'bg-white/95 backdrop-blur shadow-sm border-b border-gray-100'
      : 'bg-brand-green/40 backdrop-blur-sm'
  ]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 h-[80px] flex items-center justify-between">

      <!-- Logo -->
      <a href="#home" @click="$emit('navigate', 'home')" class="flex items-center gap-2.5">
        <img src="../assets/logo-transparent.png" alt="Women Concern" class="w-32 h-24 object-contain" />
        <span :class="['font-display font-semibold text-2xl leading-none transition-colors',
          isScrolled ? 'text-gray-900' : 'text-white']">
          Women<span class="text-brand-yellow">Concern</span>
        </span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-7">

        <!-- ① What We Do dropdown -->
        <div class="relative" @mouseenter="whatOpen = true" @mouseleave="whatOpen = false">
          <button @click="navigateToWhat(null)" :class="['nav-link flex items-center gap-1 text-sm font-medium transition-colors',
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
              class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div
                class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
              <div class="py-2">
                <a v-for="sub in whatItems" :key="sub.anchor" @click="navigateToWhat(sub.anchor); whatOpen = false"
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

        <!-- ② About Us dropdown — scrolls to sections on who-we-are page -->
        <div class="relative" @mouseenter="aboutOpen = true" @mouseleave="aboutOpen = false">
          <button @click="navigateToAbout(null)" :class="['nav-link flex items-center gap-1 text-sm font-medium transition-colors',
            isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80']">
            {{ t({ en: 'About Us', fr: 'À Propos' }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="aboutOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-show="aboutOpen"
              class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div
                class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
              <div class="py-2">
                <a v-for="sub in aboutItems" :key="sub.anchor" @click="navigateToAbout(sub.anchor); aboutOpen = false"
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

        <!-- ③ Blogs/News — simple link -->
        <a @click="navigate('blog')" :class="['nav-link text-sm font-medium transition-colors cursor-pointer',
          isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80']">
          {{ t({ en: 'Blogs/News', fr: 'Blogs/Actualités' }) }}
        </a>

        <!-- ④ Get Involved dropdown -->
        <div class="relative" @mouseenter="involvedOpen = true" @mouseleave="involvedOpen = false">
          <button :class="['nav-link flex items-center gap-1 text-sm font-medium transition-colors',
            isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80']">
            {{ t({ en: 'Get Involved', fr: "S'Impliquer" }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="involvedOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-show="involvedOpen"
              class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div
                class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
              <div class="py-2">
                <a v-for="sub in involvedItems" :key="sub.page" @click="navigate(sub.page); involvedOpen = false"
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

        <!-- ⑤ Malkia Pads — simple link -->
        <a @click="navigate('malkia-pads')" :class="['nav-link text-sm font-medium transition-colors cursor-pointer',
          isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80']">
          {{ t({ en: 'Malkia Pads', fr: 'Malkia Pads' }) }}
        </a>

        <!-- ⑥ GLFX — simple link -->
        <a @click="navigate('glfx')" :class="['nav-link text-sm font-medium transition-colors cursor-pointer',
          isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80']">
          GLFX
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
      :style="mobileOpen ? 'max-height:1200px;opacity:1' : 'max-height:0;opacity:0'">
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
            :style="mobileWhat ? 'max-height:500px;opacity:1' : 'max-height:0;opacity:0'">
            <a v-for="sub in whatItems" :key="sub.anchor"
              @click="navigateToWhat(sub.anchor); mobileOpen = false; mobileWhat = false"
              class="flex items-center gap-3 pl-3 py-2.5 text-sm text-gray-600 hover:text-brand-green transition-colors cursor-pointer">
              <span>{{ sub.emoji }}</span>
              <span class="font-medium">{{ t(sub) }}</span>
            </a>
          </div>
        </div>

        <!-- About Us mobile -->
        <div class="border-b border-gray-50">
          <button @click="mobileAbout = !mobileAbout"
            class="w-full flex items-center justify-between py-2.5 text-sm font-medium text-gray-700">
            {{ t({ en: 'About Us', fr: 'À Propos' }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200 text-gray-400"
              :class="mobileAbout ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="overflow-hidden transition-all duration-300"
            :style="mobileAbout ? 'max-height:500px;opacity:1' : 'max-height:0;opacity:0'">
            <a v-for="sub in aboutItems" :key="sub.anchor"
              @click="navigateToAbout(sub.anchor); mobileOpen = false; mobileAbout = false"
              class="flex items-center gap-3 pl-3 py-2.5 text-sm text-gray-600 hover:text-brand-green transition-colors cursor-pointer">
              <span>{{ sub.emoji }}</span>
              <span class="font-medium">{{ t(sub) }}</span>
            </a>
          </div>
        </div>

        <!-- Blogs/News mobile -->
        <a @click="navigate('blog'); mobileOpen = false"
          class="block py-2.5 text-sm font-medium text-gray-700 border-b border-gray-50 cursor-pointer hover:text-brand-green transition-colors">
          {{ t({ en: 'Blogs/News', fr: 'Blogs/Actualités' }) }}
        </a>

        <!-- Get Involved mobile -->
        <div class="border-b border-gray-50">
          <button @click="mobileInvolved = !mobileInvolved"
            class="w-full flex items-center justify-between py-2.5 text-sm font-medium text-gray-700">
            {{ t({ en: 'Get Involved', fr: "S'Impliquer" }) }}
            <svg class="w-3.5 h-3.5 transition-transform duration-200 text-gray-400"
              :class="mobileInvolved ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="overflow-hidden transition-all duration-300"
            :style="mobileInvolved ? 'max-height:400px;opacity:1' : 'max-height:0;opacity:0'">
            <a v-for="sub in involvedItems" :key="sub.page"
              @click="navigate(sub.page); mobileOpen = false; mobileInvolved = false"
              class="flex items-center gap-3 pl-3 py-2.5 text-sm text-gray-600 hover:text-brand-green transition-colors cursor-pointer">
              <span>{{ sub.emoji }}</span>
              <span class="font-medium">{{ t(sub) }}</span>
            </a>
          </div>
        </div>

        <!-- Malkia Pads mobile -->
        <a @click="navigate('malkia-pads'); mobileOpen = false"
          class="block py-2.5 text-sm font-medium text-gray-700 border-b border-gray-50 cursor-pointer hover:text-brand-green transition-colors">
          {{ t({ en: 'Malkia Pads', fr: 'Malkia Pads' }) }}
        </a>

        <!-- GLFX mobile -->
        <a @click="navigate('glfx'); mobileOpen = false"
          class="block py-2.5 text-sm font-medium text-gray-700 border-b border-gray-50 cursor-pointer hover:text-brand-green transition-colors">
          GLFX
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

const whatOpen = ref(false)
const aboutOpen = ref(false)
const involvedOpen = ref(false)

const mobileWhat = ref(false)
const mobileAbout = ref(false)
const mobileInvolved = ref(false)

const isScrolled = computed(() => scrolledDown.value)

// ── What We Do items (anchor-based) ─────────────────────────
const whatItems = [
  { anchor: 'women-economic-empowerment', emoji: '💼', en: 'Women Economic Empowerment', fr: 'Autonomisation Économique des Femmes', sub: { en: 'Livelihoods & financial inclusion', fr: 'Moyens de subsistance & inclusion financière' } },
  { anchor: 'education-girls-empowerment', emoji: '📚', en: 'Education & Girls Empowerment', fr: 'Éducation & Autonomisation des Filles', sub: { en: 'Learning & leadership for girls', fr: 'Apprentissage & leadership pour les filles' } },
  { anchor: 'land-restoration-climate', emoji: '🌱', en: 'Land Restoration & Climate Resilience', fr: 'Restauration des Terres & Résilience Climatique', sub: { en: 'Environment & sustainable futures', fr: 'Environnement & avenirs durables' } },
  { anchor: 'peace-building-disarmament', emoji: '🕊️', en: 'Peace Building & Disarmament', fr: 'Consolidation de la Paix & Désarmement', sub: { en: 'Community peace & security', fr: 'Paix et sécurité communautaires' } },
  { anchor: 'research-learning', emoji: '🔬', en: 'Research & Learning', fr: 'Recherche & Apprentissage', sub: { en: 'Evidence-based programmes', fr: 'Programmes fondés sur des données' } },
  { anchor: 'advocacy', emoji: '📣', en: 'Advocacy', fr: 'Plaidoyer', sub: { en: 'Policy change & rights', fr: 'Changement de politique & droits' } },
]

// ── About Us items (anchor-based — all on who-we-are page) ───
// Each `anchor` matches the section id in WhoWeAre.vue
const aboutItems = [
  { anchor: 'our-story', emoji: '💚', en: 'Who We Are', fr: 'Qui Nous Sommes', sub: { en: 'Our identity & values', fr: 'Notre identité & valeurs' } },
  { anchor: 'mission-vision', emoji: '🎯', en: 'Vision & Mission', fr: 'Vision & Mission', sub: { en: 'What drives us every day', fr: 'Ce qui nous anime chaque jour' } },
  { anchor: 'core-values', emoji: '⭐', en: 'Our Core Values', fr: 'Nos Valeurs Fondamentales', sub: { en: 'The principles we live by', fr: 'Les principes qui nous guident' } },
  { anchor: 'history-milestones', emoji: '📖', en: 'Our History & Milestones', fr: 'Notre Histoire & Jalons', sub: { en: 'How it all started', fr: 'Comment tout a commencé' } },
  { anchor: 'our-team', emoji: '👥', en: 'Our Team', fr: 'Notre Équipe', sub: { en: 'The people behind the work', fr: 'Les personnes derrière le travail' } },
  { anchor: 'donors-partners', emoji: '🤝', en: 'Our Donors & Partners', fr: 'Nos Donateurs & Partenaires', sub: { en: 'Those who make it possible', fr: 'Ceux qui rendent cela possible' } },
  { anchor: 'our-approach', emoji: '🗺️', en: 'Our Approach', fr: 'Notre Approche', sub: { en: 'How we work & why it matters', fr: 'Comment nous travaillons & pourquoi' } },
]

// ── Get Involved items (page-based) ─────────────────────────
const involvedItems = [
  { page: 'volunteer', emoji: '🙌', en: 'Volunteer', fr: 'Bénévolat', sub: { en: 'Give your time & skills', fr: 'Donnez votre temps & compétences' } },
  { page: 'partnerships', emoji: '🌍', en: 'Partnerships', fr: 'Partenariats', sub: { en: 'Organisations we work with', fr: 'Organisations partenaires' } },
  { page: 'donate', emoji: '💛', en: 'Donate', fr: 'Faire un Don', sub: { en: 'Support our programmes', fr: 'Soutenir nos programmes' } },
  { page: 'contact-us', emoji: '✉️', en: 'Contact Us', fr: 'Contactez-Nous', sub: { en: 'Get in touch with us', fr: 'Prenez contact avec nous' } },
]

// ── Navigation helpers ───────────────────────────────────────
const navigate = (page) => emit('navigate', page)

const scrollToAnchor = (anchor, offset = 90) => {
  if (!anchor) { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.getElementById(anchor)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

// What We Do — single page + scroll
const navigateToWhat = (anchor) => {
  if (props.currentPage === 'what-we-do') {
    scrollToAnchor(anchor)
  } else {
    emit('navigate', 'what-we-do')
    if (anchor) setTimeout(() => scrollToAnchor(anchor), 350)
  }
}

// About Us — single page (who-we-are) + scroll
const navigateToAbout = (anchor) => {
  if (props.currentPage === 'who-we-are') {
    scrollToAnchor(anchor)
  } else {
    emit('navigate', 'who-we-are')
    if (anchor) setTimeout(() => scrollToAnchor(anchor), 350)
  }
}

const onScroll = () => { scrolledDown.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>