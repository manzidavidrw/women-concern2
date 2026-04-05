<template>
  <div class="glfx-kivu-page font-sans">

    <!-- ══════════════════════════════════════════
         HERO BANNER
    ══════════════════════════════════════════ -->
    <section class="relative h-[400px] flex items-end overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-green-950 via-green-800 to-emerald-700">
        <div class="absolute inset-0 opacity-10"
          style="background-image: radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px); background-size: 40px 40px;" />
        <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
        <div class="absolute top-10 right-40 w-40 h-40 rounded-full border border-green-400/20 pointer-events-none" />
        <div class="absolute bottom-16 left-8 w-56 h-56 rounded-full bg-green-500/10 pointer-events-none" />
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full">
        <div class="flex items-center gap-3 flex-wrap mb-4">
          <span
            class="inline-block bg-brand-yellow text-green-900 text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
            Climate & Environment
          </span>
          <span class="text-white/40 text-xs">•</span>
          <span class="text-white/60 text-xs font-medium">Global Landscapes Forum</span>
        </div>
        <h1 class="text-white font-display text-5xl lg:text-7xl font-black leading-none tracking-tight">
          GLFx <span class="text-green-300">Kivu</span>
        </h1>
        <p class="text-white/70 mt-4 text-lg max-w-2xl leading-relaxed">
          {{ lang === 'fr'
            ? `Le chapitre de Women Concern du Forum Mondial des Paysages — mobilisant les communautés de l'Est de la RDC
          pour restaurer les paysages, renforcer les moyens de subsistance et relier l'action locale aux conversations
          climatiques mondiales.`
            : `Women Concern's chapter of the Global Landscapes Forum — mobilizing communities across Eastern DRC to
          restore landscapes, strengthen livelihoods, and connect local action to global climate conversations.` }}
        </p>
      </div>

      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
    </section>

    <!-- ══════════════════════════════════════════
         MAIN CONTENT
    ══════════════════════════════════════════ -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-16">

      <!-- ── 1. What is GLFx Kivu ── -->
      <section>
        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <!-- LEFT: intro text -->
          <div class="flex flex-col gap-6">
            <div
              class="inline-flex items-center gap-2 self-start bg-green-50 border border-green-200 rounded-full px-4 py-1.5">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span class="text-green-700 text-xs font-bold uppercase tracking-widest">
                {{ lang === 'fr' ? `Notre Identité` : `Who We Are` }}
              </span>
            </div>

            <h2 class="font-display font-black text-gray-900 text-3xl md:text-4xl leading-tight">
              {{ lang === 'fr' ? `Qu'est-ce que le GLFx Kivu ?` : `What is GLFx Kivu?` }}
            </h2>
            <div class="w-12 h-1 rounded-full bg-green-500" />

            <p class="text-gray-500 text-base leading-relaxed">
              {{ lang === 'fr'
                ? `Le GLFx Kivu est le chapitre local du Forum Mondial des Paysages (GLF) — la plus grande plateforme
              mondiale axée sur les connaissances, dédiée aux paysages durables, à la restauration des écosystèmes et à
              l'action climatique.`
                : `GLFx Kivu is the local chapter of the Global Landscapes Forum (GLF) — the world's largest knowledge-led
              platform dedicated to sustainable landscapes, ecosystem restoration, and climate action.` }}
            </p>
            <p class="text-gray-500 text-base leading-relaxed">
              {{ lang === 'fr'
                ? `Le GLF a choisi Women Concern pour héberger et coordonner ce chapitre, reconnaissant que les femmes et
              les communautés locales sont les gardiennes les plus efficaces de la terre. GLFx Kivu traduit les agendas
              climatiques mondiaux en actions communautaires concrètes dans l'Est de la RDC.`
                : `The GLF chose Women Concern to host and coordinate this chapter, recognizing that women and local
              communities are the most effective stewards of the land. GLFx Kivu translates global climate agendas into
              concrete community action across Eastern DRC.` }}
            </p>
            <p class="text-gray-500 text-base leading-relaxed">
              {{ lang === 'fr'
                ? `Nous ne nous contentons pas de planter des arbres — nous construisons des économies vertes, renforçons
              la résilience climatique et plaçons les femmes et les jeunes au centre de la gouvernance
              environnementale.`
                : `We don't just plant trees — we build green economies, strengthen climate resilience, and place women
              and youth at the center of environmental governance.` }}
            </p>

            <a href="https://www.globallandscapesforum.org" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 text-green-700 font-bold text-sm hover:underline group self-start">
              <span>{{ lang === 'fr' ? `Visiter le site officiel du GLF` : `Visit the official GLF website` }}</span>
              <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor"
                stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <!-- RIGHT: photo + GLF affiliation badge -->
          <div class="flex flex-col gap-5">
            <!-- Replace src with your own photo: src="../assets/glfx-photo.jpg" -->
            <div class="aspect-video w-full rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80"
                alt="Community landscape restoration in Eastern DRC"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div class="flex items-start gap-4 bg-green-50 border border-green-100 rounded-2xl p-5">
              <div class="w-12 h-12 rounded-xl bg-green-700 flex items-center justify-center text-2xl flex-shrink-0">🌐
              </div>
              <div>
                <p class="text-green-900 font-black text-sm">
                  {{ lang === 'fr'
                    ? `Fièrement affilié au Forum Mondial des Paysages`
                    : `Proudly affiliated with the Global Landscapes Forum` }}
                </p>
                <p class="text-green-700/70 text-xs mt-1 leading-relaxed">
                  {{ lang === 'fr'
                    ? `Le GLF est la plus grande plateforme de dialogue sur les paysages durables. GLFx Kivu relie
                  l'action locale de la RDC aux engagements climatiques mondiaux.`
                    : `The GLF is the world's largest platform for dialogue on sustainable landscapes. GLFx Kivu links
                  DRC's local action to global climate commitments.` }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <!-- ── 2. How We Work — 3 pillars ── -->
      <section>
        <span
          class="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-green-100 text-green-700 mb-4">
          🌿&nbsp;{{ lang === 'fr' ? `Notre Approche` : `Our Approach` }}
        </span>
        <h2 class="font-display text-4xl lg:text-5xl font-black text-gray-900 leading-none tracking-tight">
          {{ lang === 'fr' ? `Comment Nous Travaillons` : `How We Work` }}
        </h2>
        <p class="text-gray-400 text-base mt-2 font-medium mb-10">
          {{ lang === 'fr'
            ? `Trois piliers d'action pour un paysage résilient et des vies transformées`
            : `Three pillars of action for a resilient landscape and transformed lives` }}
        </p>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="pillar in pillars" :key="pillar.titleEn"
            class="group relative rounded-3xl overflow-hidden border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white flex flex-col">
            <div
              class="h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <div class="p-7 flex flex-col gap-4 flex-1">
              <div
                class="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-3xl">
                {{ pillar.emoji }}
              </div>
              <div>
                <h3 class="font-display font-black text-gray-900 text-lg leading-snug mb-2">
                  {{ lang === 'fr' ? pillar.titleFr : pillar.titleEn }}
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed">
                  {{ lang === 'fr' ? pillar.descFr : pillar.descEn }}
                </p>
              </div>
              <div class="flex flex-wrap gap-1.5 mt-auto pt-2">
                <span v-for="tag in pillar.tags" :key="tag"
                  class="inline-flex items-center gap-1 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  <span class="w-1 h-1 rounded-full bg-green-400" />
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <!-- ── 3. Key Takeaway + Success Story ── -->
      <section>
        <div class="border border-green-100 rounded-2xl overflow-hidden">
          <div class="flex flex-col md:flex-row">

            <!-- LEFT: key takeaway -->
            <div class="md:w-2/5 flex-shrink-0 flex flex-col gap-4 px-8 py-10 md:px-12 bg-green-50">
              <div class="flex items-center gap-2">
                <div class="w-1 h-8 rounded-full bg-green-500" />
                <span class="text-green-600 text-xs font-black uppercase tracking-widest">
                  {{ lang === 'fr' ? `Notre Engagement` : `Key Takeaway` }}
                </span>
              </div>
              <p class="font-display font-bold text-xl md:text-2xl leading-snug text-green-900">
                {{ lang === 'fr'
                  ? `Restaurer la terre signifie restaurer des vies — et les femmes montrent la voie.`
                  : `Restoring land means restoring lives — and women are leading the way.` }}
              </p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-lg">🌍</span>
                <h4 class="font-display font-black text-green-900 text-base">
                  {{ lang === 'fr' ? `Action Locale, Impact Mondial` : `Local Action, Global Impact` }}
                </h4>
              </div>
              <p class="text-green-800/70 text-sm leading-relaxed">
                {{ lang === 'fr'
                  ? `GLFx Kivu connecte les actions des communautés rurales de l'Est de la RDC aux engagements climatiques
                mondiaux — prouvant que les solutions les plus durables naissent de celles et ceux qui vivent sur la
                terre.`
                  : `GLFx Kivu connects the actions of rural communities in Eastern DRC to global climate commitments —
                proving that the most lasting solutions come from those who live on the land.` }}
              </p>
              <div class="flex flex-wrap gap-2 mt-1">
                <span v-for="tag in (lang === 'fr'
                  ? ['Reboisement', 'Résilience Climatique', 'Moyens de Subsistance Verts']
                  : ['Reforestation', 'Climate Resilience', 'Green Livelihoods'])" :key="tag"
                  class="inline-flex items-center gap-1.5 bg-green-100 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Vertical divider -->
            <div class="hidden md:block w-px self-stretch bg-green-200 flex-shrink-0" />

            <!-- RIGHT: success story / testimony -->
            <div class="flex-1 relative overflow-hidden bg-green-900 flex flex-col justify-between p-8 md:p-10">
              <div
                class="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none" />
              <div
                class="absolute -bottom-6 -left-6 w-28 h-28 rounded-full border border-white/10 pointer-events-none" />

              <div class="relative z-10 flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">✨</div>
                <p class="text-white font-black text-sm uppercase tracking-widest">
                  {{ lang === 'fr' ? `Histoire de Succès` : `Success Story` }}
                </p>
              </div>

              <div class="relative z-10 flex-1">
                <span class="text-5xl leading-none font-serif text-green-300 block mb-2 opacity-60">"</span>
                <p class="text-white/90 text-sm leading-relaxed italic">
                  {{ lang === 'fr'
                    ? `Ma coopérative avait du mal à trouver du bois de chauffage et de l'eau. Après avoir rejoint le
                  projet de verdissement de la Ruzizi, nous avons planté plus de 500 arbres sur nos terres. Le sol se
                  remet, nos récoltes se sont améliorées et nous vendons maintenant des plants à d'autres villages.`
                    : `My cooperative used to struggle to find firewood and water. After joining the Ruzizi Greening
                  project, we planted over 500 trees on our land. The soil is recovering, our harvests improved, and we
                  now sell tree seedlings to other villages.` }}
                </p>
                <span class="text-5xl leading-none font-serif text-green-300 block text-right mt-1 opacity-60">"</span>
              </div>

              <div class="relative z-10 mt-6 flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-lg flex-shrink-0">
                  👤</div>
                <div>
                  <p class="text-white font-bold text-sm">Consolée B.</p>
                  <p class="text-green-300 text-xs">
                    {{ lang === 'fr' ? `Plaine de la Ruzizi, Sud-Kivu` : `Ruzizi Plain, South Kivu` }}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>

    <!-- ══════════════════════════════════════════
         CTA FOOTER BAND
    ══════════════════════════════════════════ -->
    <div class="bg-gradient-to-br from-green-950 to-green-800 mt-8 py-20 px-6 text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-5"
        style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 32px 32px;" />
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />

      <div class="relative z-10">
        <span
          class="inline-block bg-brand-yellow text-green-900 text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">
          Join the Movement
        </span>
        <h2 class="text-white font-display text-4xl lg:text-5xl font-black mb-4 leading-tight">
          {{ lang === 'fr' ? `Restaurer la Terre.<br>Transformer des Vies.` : `Restore the Land.<br>Transform Lives.` }}
        </h2>
        <p class="text-white/70 max-w-xl mx-auto mb-10 text-base leading-relaxed">
          {{ lang === 'fr'
            ? `Votre soutien finance de vraies actions communautaires qui restaurent les écosystèmes et connectent l'Est
          de la RDC aux engagements climatiques mondiaux.`
            : `Your support funds real community action that restores ecosystems and connects Eastern DRC to global
          climate commitments.` }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#donate"
            class="bg-brand-yellow text-green-900 font-black px-10 py-4 rounded-full hover:brightness-105 transition-all text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            ♥ {{ lang === 'fr' ? `Faire un Don` : `Donate Now` }}
          </a>
          <button @click="$emit('navigate', 'contact-us')"
            class="border-2 border-white/50 text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-green-900 transition-all text-sm cursor-pointer hover:-translate-y-0.5">
            {{ lang === 'fr' ? `Nous Contacter` : `Get in Touch` }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import { useLang } from '../composables/useLang.js'

defineEmits(['navigate'])
const { lang } = useLang()

// ── Divider ──────────────────────────────────────────────────
const Divider = defineComponent({
  setup() {
    return () => h('div', { class: 'flex items-center gap-4' }, [
      h('div', { class: 'flex-1 h-px bg-gray-100' }),
      h('div', { class: 'flex gap-1.5 items-center' }, [
        h('div', { class: 'w-1.5 h-1.5 rounded-full bg-green-300' }),
        h('div', { class: 'w-2.5 h-2.5 rounded-full bg-green-500' }),
        h('div', { class: 'w-1.5 h-1.5 rounded-full bg-green-300' }),
      ]),
      h('div', { class: 'flex-1 h-px bg-gray-100' }),
    ])
  }
})

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════

const pillars = [
  {
    emoji: '🌱',
    titleEn: 'Restore Degraded Ecosystems',
    titleFr: 'Restaurer les Écosystèmes Dégradés',
    descEn: 'Through community-led agroforestry, tree nurseries, and soil conservation, GLFx Kivu works to heal landscapes damaged by conflict, deforestation, and climate stress — with women and youth as the primary restoration actors.',
    descFr: 'Grâce à l\'agroforesterie dirigée par la communauté, aux pépinières et à la conservation des sols, GLFx Kivu s\'efforce de guérir les paysages endommagés par les conflits, la déforestation et le stress climatique.',
    tags: ['Agroforestry', 'Tree Nurseries', 'Soil Conservation'],
  },
  {
    emoji: '💚',
    titleEn: 'Strengthen Green Livelihoods',
    titleFr: 'Renforcer les Moyens de Subsistance Verts',
    descEn: 'Environmental restoration and economic empowerment go hand in hand. Women\'s cooperatives earn income from nurseries, clean cookstoves, and green enterprises — making sustainability economically viable for the most vulnerable.',
    descFr: 'La restauration environnementale et l\'autonomisation économique vont de pair. Les coopératives de femmes tirent des revenus des pépinières, des fours propres et des entreprises vertes.',
    tags: ['Clean Cooking', 'Green Enterprise', 'Women\'s Cooperatives'],
  },
  {
    emoji: '🌐',
    titleEn: 'Connect Local to Global',
    titleFr: 'Connecter le Local au Mondial',
    descEn: 'As an official GLF chapter, GLFx Kivu ensures that the voices and evidence from Eastern DRC communities reach international climate forums, policy spaces, and global investment decisions.',
    descFr: 'En tant que chapitre officiel du GLF, GLFx Kivu garantit que les voix et les preuves des communautés de l\'Est de la RDC atteignent les forums climatiques internationaux.',
    tags: ['GLF Network', 'Policy Influence', 'Climate Action'],
  },
]
</script>