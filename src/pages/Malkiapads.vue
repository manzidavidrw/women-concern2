<template>
  <div class="font-sans text-gray-900 overflow-x-hidden">

    <!-- ── HERO ─────────────────────────────────────────────────── -->
    <section
      class="relative min-h-[88vh] flex items-center bg-gradient-to-br from-green-900 via-green-700 to-green-600 overflow-hidden pt-20">
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute w-96 h-96 rounded-full bg-yellow-400 opacity-20 blur-3xl -top-24 -right-16 animate-pulse" />
        <div class="absolute w-64 h-64 rounded-full bg-green-300 opacity-20 blur-3xl bottom-10 -left-10" />
        <div class="absolute w-44 h-44 rounded-full bg-white opacity-10 blur-2xl top-1/2 right-1/4" />
      </div>
      <div class="relative z-10 max-w-2xl px-8 md:px-12 py-16">
        <span class="inline-block text-yellow-400 text-sm font-medium tracking-wide mb-4">
          🌸 {{ t({ en: 'A Women Concern Initiative', fr: 'Une Initiative de Women Concern' }) }}
        </span>
        <h1 class="font-serif text-7xl md:text-8xl font-black leading-none text-white mb-3">
          Malkia<br /><em class="italic text-yellow-400">Pad</em>
        </h1>
        <p class="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
          {{ t({ en: 'Dignity. Health. Empowerment.', fr: 'Dignité. Santé. Autonomisation.' }) }}
        </p>
        <p class="text-white/80 text-sm leading-relaxed max-w-lg mb-8">
          {{ t({
            en: `Addressing menstrual poverty among girls and women in the Democratic Republic of Congo — through
          sustainable, locally made, and socially impactful solutions.`,
            fr: `Lutter contre la pauvreté menstruelle chez les filles et les femmes en RDC — grâce à des solutions
          durables, fabriquées localement et à impact social.`
          }) }}
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#join"
            class="bg-green-800 text-white font-semibold text-sm px-7 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all">
            {{ t({ en: 'Join the Movement', fr: 'Rejoindre le Mouvement' }) }}
          </a>
          <a href="#impact"
            class="border-2 border-white/50 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 transition-all">
            {{ t({ en: 'See Our Impact', fr: 'Voir Notre Impact' }) }}
          </a>
        </div>
      </div>
    </section>

    <!-- ── PHOTO SECTION ─────────────────────────────────────────── -->
    <section class="bg-white py-14">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">

          <!-- Main photo -->
          <div class="lg:col-span-3 relative rounded-2xl overflow-hidden h-72 lg:h-auto group">
            <!-- Replace src with your own photo, e.g: src="../assets/malkia-photo.jpg" -->
            <img src="../assets/malkia.jpeg" alt="Women receiving Malkia Pads"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
            <div
              class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 max-w-xs shadow-lg">
              <span class="text-2xl">🌸</span>
              <p class="text-green-800 text-xs font-semibold leading-snug">
                {{ t({ en: 'Restoring dignity, one kit at a time', fr: 'Restaurer la dignité, un kit à la fois' }) }}
              </p>
            </div>
          </div>

          <!-- Side cards -->
          <div class="lg:col-span-2 flex flex-col gap-4">
            <div class="bg-gradient-to-br from-green-800 to-green-600 rounded-2xl p-6 flex-1">
              <strong class="font-serif text-4xl font-black text-yellow-400 block leading-none mb-2">10,000+</strong>
              <p class="text-white/80 text-sm leading-relaxed">
                {{ t({ en: 'Kits produced locally in DRC', fr: 'Kits produits localement en RDC' }) }}
              </p>
            </div>
            <div class="bg-yellow-50 rounded-2xl p-6 flex-1">
              <span class="font-serif text-5xl text-yellow-400 leading-none block -mb-1">"</span>
              <p class="text-green-800 text-sm font-semibold italic leading-relaxed mb-2">
                {{ t({
                  en: `No girl should be limited by her period.`, fr: `Aucune fille ne devrait être limitée par ses
                règles.` }) }}
              </p>
              <span class="text-gray-400 text-xs">— Malkia Pad</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in ['#MalkiaPad', '#DignityForAll', '#EndPeriodPoverty']" :key="tag"
                class="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MISSION ────────────────────────────────────────────── -->
    <section class="bg-white py-14">
      <div class="max-w-6xl mx-auto px-6">
        <span
          class="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          🎯 {{ t({ en: 'Our Mission', fr: 'Notre Mission' }) }}
        </span>
        <h2 class="font-serif text-4xl font-black leading-tight mb-4 text-gray-900">
          {{ t({ en: 'Every girl deserves', fr: 'Chaque fille mérite' }) }}<br />
          <span class="text-green-700 italic">{{ t({ en: 'safe & dignified', fr: 'une hygiène sûre &' }) }}</span>
          {{ t({ en: 'hygiene', fr: 'digne' }) }}
        </h2>
        <p class="text-gray-500 text-sm leading-relaxed max-w-xl mb-8">
          {{ t({
            en: `To ensure that every girl and woman — especially the most vulnerable — has access to safe, dignified, and
          sustainable menstrual hygiene.`,
            fr: `Garantir que chaque fille et femme — en particulier les plus vulnérables — ait accès à une hygiène
          menstruelle sûre, digne et durable.`
          }) }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div v-for="f in focusGroups" :key="f.en"
            class="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-4 flex items-center gap-3 hover:-translate-y-1 hover:shadow-md transition-all">
            <span class="text-2xl">{{ f.emoji }}</span>
            <p class="text-green-800 text-xs font-semibold leading-snug">{{ t(f) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CHALLENGE ─────────────────────────────────────────── -->
    <section class="bg-gradient-to-br from-green-900 to-green-700 py-14">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              class="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              🚨 {{ t({ en: 'The Challenge', fr: 'Le Défi' }) }}
            </span>
            <h2 class="font-serif text-3xl font-black text-white leading-tight mb-5">
              {{ t({
                en: `Thousands of girls face this every single month`, fr: `Des milliers de filles vivent cela
              chaque mois` }) }}
            </h2>
            <ul class="space-y-3 mb-5">
              <li v-for="c in challenges" :key="c.en" class="flex items-center gap-3 text-white/90 text-sm">
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0" />
                {{ t(c) }}
              </li>
            </ul>
            <p class="text-white/55 text-xs italic">
              {{ t({
                en: `For vulnerable women, this becomes a major barrier to dignity and empowerment.`, fr: `Pour les
              femmes vulnérables, cela devient un obstacle majeur à la dignité et à l\'autonomisation.` }) }}
            </p>
          </div>
          <div class="flex flex-col items-center gap-4">
            <div class="relative w-48 h-48 flex items-center justify-center">
              <svg viewBox="0 0 200 200" class="absolute inset-0 w-full h-full">
                <circle cx="100" cy="100" r="85" stroke="#ffffff22" stroke-width="12" fill="none" />
                <circle cx="100" cy="100" r="85" stroke="#F7C948" stroke-width="12" fill="none" stroke-dasharray="534"
                  stroke-dashoffset="134" stroke-linecap="round" transform="rotate(-90 100 100)" />
              </svg>
              <span class="font-serif text-4xl font-black text-yellow-400 relative z-10">75%</span>
            </div>
            <p class="text-white/60 text-xs text-center max-w-[200px] leading-relaxed">
              {{ t({
                en: `of school absences in target areas are menstruation-related`, fr: `des absences scolaires dans
              les zones cibles sont liées aux menstruations` }) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── DISTRIBUTION MODEL ─────────────────────────────────── -->
    <section class="bg-green-50 py-14">
      <div class="max-w-6xl mx-auto px-6">

        <span
          class="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          🚚 {{ t({ en: 'Our Distribution Model', fr: 'Notre Modèle de Distribution' }) }}
        </span>

        <h2 class="font-serif text-4xl font-black text-gray-900 leading-tight mb-10">
          {{ t({ en: 'How we reach every girl', fr: 'Comment nous atteignons chaque fille' }) }}<br />
          <span class="text-green-700 italic">
            {{ t({ en: 'sustainably & inclusively', fr: 'durablement et inclusivement' }) }}
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- CARD -->
          <div v-for="(item, index) in distributionModels" :key="index"
            class="bg-white rounded-2xl overflow-hidden border border-green-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">

            <!-- 🖼️ IMAGE -->
            <div class="relative h-44 overflow-hidden group">
              <img :src="item.image" alt="distribution image"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/20"></div>
            </div>

            <!-- 📦 CONTENT -->
            <div class="p-6">

              <div class="text-3xl mb-3">{{ item.emoji }}</div>

              <h3 class="font-serif text-lg font-bold text-green-800 mb-3">
                {{ t(item.title) }}
              </h3>

              <!-- BULLETS -->
              <ul class="space-y-2 mb-4">
                <li v-for="(point, i) in item.points" :key="i" class="flex gap-2 text-xs text-gray-600">
                  <span class="text-green-600 mt-[2px]">✓</span>
                  <span>{{ t(point) }}</span>
                </li>
              </ul>

              <!-- READ MORE -->
              <div v-if="expanded[index]" class="mt-3">
                <p class="text-gray-500 text-xs leading-relaxed">
                  {{ t(item.full) }}
                </p>
              </div>

              <!-- BUTTON -->
              <button @click="toggle(index)" class="mt-4 text-green-700 text-xs font-semibold hover:underline">
                {{
                  expanded[index]
                    ? t({ en: 'Show Less', fr: 'Voir Moins' })
                    : t({ en: 'Read More', fr: 'Lire Plus' })
                }}
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="bg-green-50 py-14">
      <div class="max-w-6xl mx-auto px-6">

        <span
          class="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          🚚 {{ t({ en: 'Our Distribution Model', fr: 'Notre Modèle de Distribution' }) }}
        </span>

        <h2 class="font-serif text-4xl font-black text-gray-900 leading-tight mb-10">
          {{ t({ en: 'How we reach every girl', fr: 'Comment nous atteignons chaque fille' }) }}<br />
          <span class="text-green-700 italic">
            {{ t({ en: 'sustainably & inclusively', fr: 'durablement et inclusivement' }) }}
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- CARD -->
          <div v-for="(item, index) in distributionModels" :key="index"
            class="bg-white rounded-2xl p-6 border border-green-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">

            <div class="text-3xl mb-3">{{ item.emoji }}</div>

            <h3 class="font-serif text-lg font-bold text-green-800 mb-3">
              {{ t(item.title) }}
            </h3>

            <!-- ✅ ALWAYS VISIBLE BULLETS -->
            <ul class="space-y-2 mb-4">
              <li v-for="(point, i) in item.points" :key="i" class="flex gap-2 text-xs text-gray-600">
                <span class="text-green-600 mt-[2px]">✓</span>
                <span>{{ t(point) }}</span>
              </li>
            </ul>

            <!-- ✅ READ MORE CONTENT -->
            <div v-if="expanded[index]" class="mt-3">
              <p class="text-gray-500 text-xs leading-relaxed">
                {{ t(item.full) }}
              </p>
            </div>

            <!-- BUTTON -->
            <button @click="toggle(index)" class="mt-4 text-green-700 text-xs font-semibold hover:underline">
              {{
                expanded[index]
                  ? t({ en: 'Show Less', fr: 'Voir Moins' })
                  : t({ en: 'Read More', fr: 'Lire Plus' })
              }}
            </button>

          </div>

        </div>
      </div>
    </section>

    <!-- ── IMPACT ─────────────────────────────────────────────── -->
    <section id="impact" class="bg-white py-14">
      <div class="max-w-6xl mx-auto px-6">
        <span
          class="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          📊 {{ t({ en: 'Our Impact', fr: 'Notre Impact' }) }}
        </span>
        <h2 class="font-serif text-4xl font-black text-gray-900 leading-tight mb-8">
          {{ t({ en: 'Behind each number is', fr: 'Derrière chaque chiffre se trouve' }) }}<br />
          <span class="text-green-700 italic">{{ t({ en: 'a life transformed', fr: 'une vie transformée' }) }}</span>
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div v-for="stat in stats" :key="stat.en"
            class="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform">
            <span class="text-2xl block mb-2">{{ stat.emoji }}</span>
            <strong class="font-serif text-3xl font-black text-green-800 block">{{ stat.value }}</strong>
            <p class="text-gray-500 text-xs mt-1 font-medium">{{ t(stat) }}</p>
          </div>
        </div>
        <div class="bg-green-50 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div v-for="w in whyReasons" :key="w.en" class="flex gap-2 items-start text-green-700 text-sm font-medium">
            <span class="flex-shrink-0">✅</span>
            <span>{{ t(w) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── STORIES ─────────────────────────────────────────────── -->
    <section class="bg-gradient-to-br from-green-900 to-green-700 py-14">
      <div class="max-w-6xl mx-auto px-6">
        <span
          class="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          💬 {{ t({ en: 'Stories of Change', fr: 'Histoires de Changement' }) }}
        </span>
        <h2 class="font-serif text-4xl font-black text-white leading-tight mb-8">
          {{ t({
            en: 'Real women. Real lives. Real change.', fr: 'De vraies femmes. De vraies vies. Un vrai changement.'
          }) }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div v-for="s in stories" :key="s.name"
            class="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:-translate-y-1 transition-all">
            <div class="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-xl mb-4">{{ s.avatar }}
            </div>
            <blockquote class="text-white/85 text-sm italic leading-relaxed mb-4">{{ t(s.quote) }}</blockquote>
            <p class="text-yellow-400 text-xs font-bold">{{ s.name }}</p>
            <p class="text-white/50 text-xs">{{ t(s.role) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── JOIN ───────────────────────────────────────────────── -->
    <section id="join" class="bg-green-50 py-14">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span
              class="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              🤝 {{ t({ en: 'Join the Movement', fr: 'Rejoindre le Mouvement' }) }}
            </span>
            <h2 class="font-serif text-4xl font-black text-gray-900 leading-tight mb-3">
              {{ t({ en: 'Be part of the', fr: 'Faites partie de la' }) }}<br />
              <span class="text-green-700 italic">{{ t({ en: 'solution', fr: 'solution' }) }}</span>
            </h2>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ t({
                en: `You can help us change the story for thousands of girls and women.`, fr: `Vous pouvez nous
              aider à changer le destin de milliers de filles et de femmes.` }) }}
            </p>
          </div>
          <div class="flex flex-col gap-3">
            <div v-for="a in actions" :key="a.en"
              class="bg-white flex gap-4 items-start rounded-2xl p-4 border border-green-100 hover:shadow-md transition-shadow">
              <span class="text-2xl">{{ a.emoji }}</span>
              <div>
                <p class="text-green-800 text-sm font-semibold">{{ t(a) }}</p>
                <p class="text-gray-400 text-xs mt-0.5">{{ t(a.sub) }}</p>
              </div>
            </div>
            <a href="#donate"
              class="block text-center bg-green-700 text-white font-semibold text-sm py-3 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all mt-1">
              ♥ {{ t({ en: 'Sponsor a Kit', fr: 'Parrainer un Kit' }) }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FOOTER CTA ─────────────────────────────────────────── -->
    <section class="bg-yellow-50 py-14 text-center relative overflow-hidden">
      <span class="absolute text-6xl opacity-10 top-4 left-12 -rotate-12 pointer-events-none select-none">🌸</span>
      <span class="absolute text-6xl opacity-10 bottom-4 right-12 rotate-12 pointer-events-none select-none">🌸</span>
      <div class="relative z-10 max-w-2xl mx-auto px-6">
        <h2 class="font-serif text-4xl font-black text-green-800 leading-tight mb-3">
          {{ t({
            en: `Because no girl should be limited by her period.`, fr: `Parce qu\'aucune fille ne devrait être
          limitée par ses règles.` }) }}
        </h2>
        <p class="text-gray-500 text-sm mb-7">
          {{ t({
            en: `With Malkia Pad, we restore dignity, protect health, and create opportunities.`, fr: `Avec Malkia
          Pad, nous restaurons la dignité, protégeons la santé et créons des opportunités.` }) }}
        </p>
        <a href="#donate"
          class="inline-block bg-green-700 text-white font-semibold text-base px-10 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all">
          {{ t({ en: `Support Malkia Pad`, fr: `Soutenir Malkia Pad` }) }}
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
import { ref } from 'vue'
import malkia from '../assets/malkia.jpeg'
import sexual from '../assets/programs/sexual.jpeg'
import skills from '../assets/skills.jpeg'

const expanded = ref([])
const toggle = (index) => {
  expanded.value[index] = !expanded.value[index]
}

const { t } = useLang()

const focusGroups = [
  { emoji: '🏡', en: 'Girls in rural areas', fr: 'Filles en zones rurales' },
  { emoji: '♿', en: 'Women living with disabilities', fr: 'Femmes vivant avec un handicap' },
  { emoji: '🕊️', en: 'Survivors of SGBV', fr: 'Survivantes de VSBG' },
  { emoji: '⛺', en: 'Internally displaced & refugees', fr: 'Déplacées internes & réfugiées' },
]

const challenges = [
  { en: 'Miss school due to menstruation', fr: 'Manquent l\'école à cause des menstruations' },
  { en: 'Use unsafe and unhygienic alternatives', fr: 'Utilisent des alternatives non sûres et non hygiéniques' },
  { en: 'Experience shame, stigma, and loss of confidence', fr: 'Vivent la honte, la stigmatisation et la perte de confiance' },
]

const channels = [
  { en: 'Free Distribution', fr: 'Distribution Gratuite', color: '#4CAF50', sub: { en: 'Schools, communities, health centres, IDP & refugee camps', fr: 'Écoles, communautés, centres de santé, camps de déplacés' } },
  { en: 'NGO Partnerships', fr: 'Partenariats ONG', color: '#F7C948', sub: { en: 'Kits supplied to partner organisations to expand outreach', fr: 'Kits fournis aux organisations partenaires pour élargir la portée' } },
  { en: '"Pad on the Go" Kiosks', fr: 'Kiosques "Pad on the Go"', color: '#2196F3', sub: { en: 'Affordable kits sold to urban women; revenue funds free distribution', fr: 'Kits vendus aux femmes urbaines ; revenus réinvestis dans la distribution gratuite' } },
]

const stats = [
  { emoji: '🧺', value: '10,000', en: 'Kits produced', fr: 'Kits produits' },
  { emoji: '🎁', value: '4,600', en: 'Kits distributed free', fr: 'Kits distribués gratuitement' },
  { emoji: '🛍️', value: '3,400', en: 'Kits sold via Pad on the Go', fr: 'Kits vendus via Pad on the Go' },
  { emoji: '🤝', value: '2,000', en: 'Kits to partner organisations', fr: 'Kits aux organisations partenaires' },
]

const whyReasons = [
  { en: 'Reduces menstrual poverty', fr: 'Réduit la pauvreté menstruelle' },
  { en: 'Improves girls\' school attendance', fr: 'Améliore la scolarisation des filles' },
  { en: 'Promotes health and hygiene', fr: 'Favorise la santé et l\'hygiène' },
  { en: 'Strengthens women\'s economic empowerment', fr: 'Renforce l\'autonomisation économique des femmes' },
  { en: 'Offers an eco-friendly and sustainable solution', fr: 'Offre une solution écologique et durable' },
]

const stories = [
  {
    avatar: '🌸',
    name: 'Amina',
    role: { en: 'Mother & SGBV Survivor', fr: 'Mère & Survivante de VSBG' },
    quote: {
      en: '"Before, every month was a struggle. I had to choose between food and protection. Today, I feel respected and can even save for my children."',
      fr: '"Avant, chaque mois était une lutte. Je devais choisir entre la nourriture et la protection. Aujourd\'hui, je me sens respectée et j\'épargne pour mes enfants."'
    },
  },
  {
    avatar: '🎒',
    name: 'Grace',
    role: { en: 'Student', fr: 'Étudiante' },
    quote: {
      en: '"I used to miss school every month. Now I attend every day. I want to become a nurse."',
      fr: '"Je manquais l\'école chaque mois. Maintenant j\'y vais tous les jours. Je veux devenir infirmière."'
    },
  },
  {
    avatar: '🧵',
    name: 'Chantal',
    role: { en: 'Workshop Seamstress', fr: 'Couturière de l\'Atelier' },
    quote: {
      en: '"This project didn\'t only change beneficiaries\' lives — it changed mine too. Today I have a job, an income, and I support my family."',
      fr: '"Ce projet n\'a pas seulement changé la vie des bénéficiaires — il a aussi changé la mienne. Aujourd\'hui j\'ai un emploi, un revenu, et je soutiens ma famille."'
    },
  },
]

const actions = [
  { emoji: '🎁', en: 'Sponsor a Kit', fr: 'Parrainer un Kit', sub: { en: 'Fund a kit for a girl in need', fr: 'Financer un kit pour une fille dans le besoin' } },
  { emoji: '🤝', en: 'Partner with Us', fr: 'Devenir Partenaire', sub: { en: 'Distribute with us and expand reach', fr: 'Distribuer avec nous et élargir la portée' } },
  { emoji: '💼', en: 'Support Production', fr: 'Soutenir la Production', sub: { en: 'Invest in local manufacturing', fr: 'Investir dans la fabrication locale' } },
  { emoji: '🌍', en: 'Invest in Impact', fr: 'Investir dans l\'Impact', sub: { en: 'Back a high-impact social enterprise', fr: 'Soutenir une entreprise sociale à fort impact' } },
]

const distributionModels = [
  {
    emoji: '🎁',
    title: { en: 'Free Distribution', fr: 'Distribution Gratuite' },
    image: sexual,

    points: [
      { en: 'Schoolgirls in rural areas', fr: 'Écolières en zones rurales' },
      { en: 'Women in vulnerable conditions', fr: 'Femmes vulnérables' },
      { en: 'IDPs and refugee camps', fr: 'Camps de déplacés et réfugiés' },
    ],

    full: {
      en: `At the heart of our mission, we ensure no girl misses school because of her period. We work with schools and communities to identify those most at risk and deliver free kits directly.`,
      fr: `Au cœur de notre mission, nous garantissons qu'aucune fille ne manque l'école à cause de ses règles.`,
    },
  },

  {
    emoji: '🤝',
    title: { en: 'NGO Partnerships', fr: 'Partenariats ONG' },
    image: 'https://source.unsplash.com/600x400/?ngo,africa,community',

    points: [
      { en: 'Subsidized kits for NGOs', fr: 'Kits subventionnés pour ONG' },
      { en: 'Free distribution to beneficiaries', fr: 'Distribution gratuite aux bénéficiaires' },
      { en: 'Expands reach to remote areas', fr: 'Accès aux zones reculées' },
    ],

    full: {
      en: `We collaborate with NGOs to scale impact, allowing wider distribution while reinvesting into production.`,
      fr: `Nous collaborons avec des ONG pour étendre l'impact et financer la production.`,
    },
  },

  {
    emoji: '🏪',
    title: { en: 'Pad on the Go', fr: 'Pad on the Go' },
    image: 'https://source.unsplash.com/600x400/?africa,market,shop',

    points: [
      { en: 'Urban kiosks', fr: 'Kiosques urbains' },
      { en: 'Affordable access', fr: 'Accès abordable' },
      { en: 'Promotes awareness', fr: 'Sensibilisation' },
    ],

    full: {
      en: `Urban kiosks ensure dignified and easy access while normalizing menstrual health.`,
      fr: `Les kiosques urbains assurent un accès facile et normalisent la santé menstruelle.`,
    },
  },

  {
    emoji: '💼',
    title: { en: 'Social Enterprise Model', fr: 'Entreprise Sociale' },
    image: skills,

    points: [
      { en: 'Self-sustaining system', fr: 'Système autonome' },
      { en: 'Revenue reinvestment', fr: 'Réinvestissement des revenus' },
      { en: 'Reduces dependency on donors', fr: 'Moins dépendant des dons' },
    ],

    full: {
      en: `This model ensures long-term sustainability and continuous free distribution.`,
      fr: `Ce modèle garantit la durabilité et la distribution continue.`,
    },
  },
]
</script>