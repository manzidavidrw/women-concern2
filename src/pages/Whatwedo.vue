<template>
  <div class="what-we-do-page font-sans">

    <!-- ── Hero Banner ── -->
    <section class="relative h-[360px] flex items-end overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-900 via-brand-green to-emerald-700">
        <div class="absolute inset-0 opacity-10"
          style="background-image: radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px); background-size: 40px 40px;">
        </div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
        <span
          class="inline-block bg-brand-yellow text-brand-green text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">Our
          Work</span>
        <h1 class="text-white font-display text-5xl lg:text-6xl font-black leading-none tracking-tight">What We Do</h1>
        <p class="text-white/70 mt-4 text-lg max-w-2xl leading-relaxed">
          Six interconnected pillars of impact — transforming lives, restoring land, and building lasting peace across
          communities.
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>

    <!-- ── Sticky Section Nav ── -->
    <div class="sticky top-[80px] z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm overflow-x-auto">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 flex gap-1 py-2.5 min-w-max">
        <button v-for="nav in sectionNavs" :key="nav.anchor" @click="scrollToSection(nav.anchor)"
          class="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200"
          :class="activeSection === nav.anchor
            ? 'bg-brand-green text-white shadow-md scale-105'
            : 'text-gray-400 hover:text-brand-green hover:bg-brand-green/8'">
          <span>{{ nav.emoji }}</span>
          <span>{{ nav.label }}</span>
        </button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20 space-y-16">

      <!-- ══════════════════════════════════════════
           1. WOMEN'S ECONOMIC EMPOWERMENT
      ══════════════════════════════════════════ -->
      <section id="women-economic-empowerment" class="scroll-mt-40">
        <SectionHeader emoji="💼" tag="Economic Empowerment" tagColor="bg-emerald-100 text-emerald-700"
          title="Women's Economic Empowerment" subtitle="Ultra-Poor Graduation (UPG) Model" />

        <!-- Intro left / Impact right -->
        <div class="mt-10 mb-12 grid lg:grid-cols-2 gap-8 items-stretch">

          <!-- LEFT: intro text -->
          <div class="flex flex-col justify-center gap-6">
            <div
              class="inline-flex items-center gap-2 self-start bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-emerald-700 text-xs font-bold uppercase tracking-widest">
                {{ lang === 'fr' ? `Notre Approche` : `Our Approach` }}
              </span>
            </div>
            <h3 class="font-display font-black text-gray-900 text-2xl md:text-3xl leading-tight">
              {{ lang === 'fr'
                ? `Comment Nous Mettons en Œuvre Notre Programme d'Autonomisation des Femmes`
                : `How We Implement Our Women's Empowerment Program` }}
            </h3>
            <div class="w-12 h-1 rounded-full bg-emerald-500"></div>
            <p class="text-gray-500 text-base leading-relaxed">
              {{ lang === 'fr'
                ? `Chez Women Concern (WOCO), l'autonomisation des femmes va au-delà de la formation ou du soutien
              financier. Nous travaillons aux côtés des femmes dans la durée pour les aider à construire des moyens de
              subsistance durables, renforcer leur confiance et devenir des leaders au sein de leurs communautés.`
                : `At Women Concern (WOCO), women's empowerment goes beyond training or financial support. We work
              alongside women over time to help them build sustainable livelihoods, strengthen their confidence, and
              become leaders within their communities.` }}
            </p>
            <p class="text-gray-500 text-base leading-relaxed">
              {{ lang === 'fr'
                ? `Grâce à un processus structuré, nous soutenons les femmes des ménages les plus vulnérables pour
              qu'elles passent progressivement de l'extrême pauvreté à l'indépendance économique.`
                : `Through a structured process, we support women from the most vulnerable households to gradually
              transition from extreme poverty to economic independence.` }}
            </p>
          </div>

          <!-- RIGHT: impact card -->
          <div
            class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-700 p-7 flex flex-col shadow-2xl">
            <!-- Decorative rings -->
            <div class="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
            <div
              class="absolute -bottom-8 -left-8 w-36 h-36 rounded-full border border-emerald-400/20 pointer-events-none" />
            <div class="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/20 pointer-events-none" />

            <!-- Card header -->
            <div class="relative z-10 flex items-center justify-between mb-6">
              <div>
                <p class="text-white font-black text-lg leading-none">
                  {{ lang === 'fr' ? `Impact en un Coup d'Œil` : `Impact at a Glance` }}
                </p>
                <p class="text-emerald-300 text-xs mt-1">
                  {{ lang === 'fr' ? `Résultats cumulés du programme` : `Cumulative program results` }}
                </p>
              </div>
              <div
                class="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl flex-shrink-0">
                📊
              </div>
            </div>

            <!-- Stat rows -->
            <div class="relative z-10 flex flex-col gap-3 flex-1">
              <div v-for="stat in weeImpact" :key="stat.number"
                class="group flex items-center gap-4 bg-white/8 hover:bg-white/14 border border-white/10 hover:border-emerald-400/40 rounded-2xl px-5 py-3.5 transition-all duration-200">
                <!-- Emoji bubble -->
                <div
                  class="w-10 h-10 rounded-xl bg-emerald-500/30 flex items-center justify-center text-lg flex-shrink-0">
                  {{ stat.emoji }}
                </div>
                <!-- Number + label -->
                <div class="flex-1 min-w-0">
                  <p class="font-display font-black text-white text-xl leading-none">{{ stat.number }}</p>
                  <p class="text-emerald-200/80 text-xs leading-snug mt-0.5 truncate">
                    {{ lang === 'fr' ? stat.fr : stat.en }}
                  </p>
                </div>
                <!-- Arrow indicator -->
                <svg class="w-4 h-4 text-emerald-400/50 group-hover:text-emerald-300 transition-colors flex-shrink-0"
                  fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <!-- Bottom accent bar -->
            <div
              class="relative z-10 mt-6 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-yellow-300 to-emerald-400 opacity-60" />
          </div>
        </div>

        <CarouselSection :cards="weeCards" accent="emerald" :emit-fn="(p) => $emit('navigate', p)" />

        <!-- Closing message -->
        <div class="mt-10 bg-emerald-50 border border-emerald-100 rounded-2xl px-8 pt-8 pb-5 md:px-12 md:pt-10 md:pb-6">
          <div class="flex flex-col md:flex-row md:items-start gap-8">

            <!-- Left: italic key statement -->
            <div class="md:w-2/5 flex-shrink-0 flex flex-col gap-3">
              <div class="flex items-center gap-2">
                <div class="w-1 h-8 rounded-full bg-emerald-500"></div>
                <span class="text-emerald-600 text-xs font-black uppercase tracking-widest">
                  {{ lang === 'fr' ? `Notre Engagement` : `Key Takeaway` }}
                </span>
              </div>
              <p class="text-emerald-900 font-display font-bold text-xl md:text-2xl leading-snug">
                {{ lang === 'fr'
                  ? `Cet accompagnement continu est essentiel pour garantir un changement durable.`
                  : `This continuous accompaniment is key to ensuring lasting change.` }}
              </p>
            </div>

            <!-- Vertical divider -->
            <div class="hidden md:block w-px self-stretch bg-emerald-200 flex-shrink-0" />

            <!-- Right: from vulnerability to leadership -->
            <div class="flex flex-col gap-3 flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-lg">👑</span>
                <h4 class="font-display font-black text-emerald-900 text-base">
                  {{ lang === 'fr' ? `De la Vulnérabilité au Leadership` : `From Vulnerability to Leadership` }}
                </h4>
              </div>
              <p class="text-emerald-800/70 text-sm leading-relaxed">
                {{ lang === 'fr'
                  ? `À mesure que les femmes renforcent leur stabilité économique, beaucoup deviennent des leaders actives
                au sein de leurs communautés. Elles participent à des initiatives coopératives, encadrent d'autres
                femmes et contribuent aux efforts de développement local.`
                  : `As women strengthen their economic stability, many become active leaders within their communities.
                They participate in cooperative initiatives, mentor other women, and contribute to local development
                efforts.` }}
              </p>
              <p class="text-emerald-800/70 text-sm leading-relaxed">
                {{ lang === 'fr'
                  ? `Grâce à ce processus, les femmes dépassent la simple survie pour accéder à des moyens de subsistance
                durables, à la dignité et au leadership.`
                  : `Through this process, women move beyond survival toward sustainable livelihoods, dignity, and
                leadership.` }}
              </p>
              <div class="flex flex-wrap gap-2 mt-2">
                <span
                  v-for="tag in (lang === 'fr' ? [`Moyens de subsistance durables`, `Dignité`, `Leadership`] : [`Sustainable Livelihoods`, `Dignity`, `Leadership`])"
                  :key="tag"
                  class="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Divider color="emerald" />

      <!-- ══════════════════════════════════════════
           2. EDUCATION & GIRLS EMPOWERMENT
      ══════════════════════════════════════════ -->
      <section id="education-girls-empowerment" class="scroll-mt-40">
        <SectionHeader emoji="📚" tag="Education" tagColor="bg-amber-100 text-amber-700"
          title="Girls' Education & Empowerment" subtitle="School Retention, Leadership & SRHR" />

        <div class="mt-8 grid lg:grid-cols-2 gap-12 items-center mb-12">
          <PlaceholderImage label="Girls Education — Section Image" color="amber" />
          <p class="text-gray-600 leading-relaxed text-base">
            We believe girls must thrive — not just survive. Our education and adolescent empowerment programme promotes
            access to quality education while breaking harmful social norms. From school sponsorship to menstrual
            health, we address every barrier a girl may face.
          </p>
        </div>

        <CarouselSection :cards="eduCards" accent="amber" :emit-fn="(p) => $emit('navigate', p)" />
      </section>

      <Divider color="green" />

      <!-- ══════════════════════════════════════════
           3. LAND RESTORATION & CLIMATE RESILIENCE
      ══════════════════════════════════════════ -->
      <section id="land-restoration-climate" class="scroll-mt-40">
        <SectionHeader emoji="🌱" tag="Climate & Environment" tagColor="bg-green-100 text-green-700"
          title="Land Restoration & Climate Resilience" subtitle="GLFx Kivu — Community-Led Landscape Action" />

        <div class="mt-8 grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed text-base">
              <strong class="text-brand-green font-semibold">GLFx Kivu</strong> is Women Concern's chapter of the Global
              Landscapes Forum — a platform for community-led action in the Kivu provinces, an area heavily impacted by
              deforestation, soil degradation, conflict, and poverty.
            </p>
            <p class="text-gray-600 leading-relaxed text-base">
              It connects local efforts to global conversations on land restoration, biodiversity, gender equality, and
              climate change — ensuring that local solutions shape international dialogues.
            </p>
          </div>
          <PlaceholderImage label="GLFx Kivu — Climate Section Image" color="green" />
        </div>

        <CarouselSection :cards="climateCards" accent="green" :emit-fn="(p) => $emit('navigate', p)" />
      </section>

      <Divider color="blue" />

      <!-- ══════════════════════════════════════════
           4. PEACE BUILDING & DISARMAMENT
      ══════════════════════════════════════════ -->
      <section id="peace-building-disarmament" class="scroll-mt-40">
        <SectionHeader emoji="🕊️" tag="Peace & Security" tagColor="bg-blue-100 text-blue-700"
          title="Peace Building & Disarmament" subtitle="Women-Centred Conflict Transformation" />

        <div class="mt-8 grid lg:grid-cols-2 gap-12 items-center mb-12">
          <PlaceholderImage label="Peace Building — Section Image" color="blue" />
          <p class="text-gray-600 leading-relaxed text-base">
            In conflict-affected regions like eastern DRC, peace and security are essential for development. For women,
            security means freedom from fear, meaningful participation in decision-making, and access to justice and
            opportunity. WOCO's approach is women-centred and locally driven.
          </p>
        </div>

        <CarouselSection :cards="peaceCards" accent="blue" :emit-fn="(p) => $emit('navigate', p)" />
      </section>

      <Divider color="purple" />

      <!-- ══════════════════════════════════════════
           5. RESEARCH & LEARNING
      ══════════════════════════════════════════ -->
      <section id="research-learning" class="scroll-mt-40">
        <SectionHeader emoji="🔬" tag="Research & Learning" tagColor="bg-purple-100 text-purple-700"
          title="Research for Transformative Change" subtitle="Evidence-Based Advocacy & Knowledge Generation" />

        <div class="mt-8 grid lg:grid-cols-2 gap-12 items-center mb-12">
          <p class="text-gray-600 leading-relaxed text-base">
            At Women Concern, evidence-based advocacy is a cornerstone of our strategy for systemic change. We
            strengthen grassroots women's voices through rigorous research, participatory learning, and advocacy —
            rooted in our UPG model and community-based work.
          </p>
          <PlaceholderImage label="Research & Learning — Section Image" color="purple" />
        </div>

        <CarouselSection :cards="researchCards" accent="purple" :emit-fn="(p) => $emit('navigate', p)" />
      </section>

      <Divider color="yellow" />

      <!-- ══════════════════════════════════════════
           6. ADVOCACY
      ══════════════════════════════════════════ -->
      <section id="advocacy" class="scroll-mt-40">
        <SectionHeader emoji="📣" tag="Advocacy" tagColor="bg-yellow-100 text-yellow-700" title="Community-Led Advocacy"
          subtitle="Empowering Women to Lead Change" />

        <div class="mt-8 grid lg:grid-cols-2 gap-12 items-center mb-12">
          <PlaceholderImage label="Advocacy — Section Image" color="orange" />
          <p class="text-gray-600 leading-relaxed text-base">
            We empower women and girls to lead transformative campaigns, engage decision-makers, and use evidence from
            their lived experiences to influence meaningful social and policy change. Every woman's voice counts — and
            together, they move mountains.
          </p>
        </div>

        <CarouselSection :cards="advocacyCards" accent="yellow" :emit-fn="(p) => $emit('navigate', p)" />
      </section>

    </div>

    <!-- ── CTA Footer Band ── -->
    <div class="bg-gradient-to-br from-emerald-900 to-brand-green mt-8 py-20 px-6 text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-5"
        style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 32px 32px;">
      </div>
      <div class="relative z-10">
        <span
          class="inline-block bg-brand-yellow text-brand-green text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">Make
          a Difference</span>
        <h2 class="text-white font-display text-4xl lg:text-5xl font-black mb-4 leading-tight">Stand With
          Women.<br>Change the World.</h2>
        <p class="text-white/70 max-w-xl mx-auto mb-10 text-base leading-relaxed">Your support funds real programmes
          that lift women out of poverty, keep girls in school, and build peace in communities.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#donate"
            class="bg-brand-yellow text-brand-green font-black px-10 py-4 rounded-full hover:brightness-105 transition-all text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            ♥ Donate Now
          </a>
          <a @click="$emit('navigate', 'contact-us')"
            class="border-2 border-white/50 text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-brand-green transition-all text-sm cursor-pointer hover:-translate-y-0.5">
            Get in Touch
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineComponent, h } from 'vue'
import { useLang } from '../composables/useLang.js'

const emit = defineEmits(['navigate'])
const { lang } = useLang()

// ── Sticky nav ──────────────────────────────────────────────
const sectionNavs = [
  { anchor: 'women-economic-empowerment', emoji: '💼', label: 'Economic Empowerment' },
  { anchor: 'education-girls-empowerment', emoji: '📚', label: 'Girls Education' },
  { anchor: 'land-restoration-climate', emoji: '🌱', label: 'Climate Resilience' },
  { anchor: 'peace-building-disarmament', emoji: '🕊️', label: 'Peace Building' },
  { anchor: 'research-learning', emoji: '🔬', label: 'Research' },
  { anchor: 'advocacy', emoji: '📣', label: 'Advocacy' },
]
const activeSection = ref('women-economic-empowerment')

const scrollToSection = (anchor) => {
  const el = document.getElementById(anchor)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 145
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
const onScroll = () => {
  for (let i = sectionNavs.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionNavs[i].anchor)
    if (el && el.getBoundingClientRect().top <= 170) {
      activeSection.value = sectionNavs[i].anchor
      break
    }
  }
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

// ── Sub-components ──────────────────────────────────────────

const SectionHeader = defineComponent({
  props: ['emoji', 'tag', 'tagColor', 'title', 'subtitle'],
  setup(props) {
    return () => h('div', [
      h('span', { class: `inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${props.tagColor} mb-4` },
        [props.emoji, '\u00A0', props.tag]),
      h('h2', { class: 'font-display text-4xl lg:text-5xl font-black text-gray-900 leading-none tracking-tight' }, props.title),
      h('p', { class: 'text-gray-400 text-base mt-2 font-medium' }, props.subtitle),
    ])
  }
})

const PlaceholderImage = defineComponent({
  props: ['label', 'color'],
  setup(props) {
    const g = {
      emerald: ['from-emerald-50 to-emerald-100', 'border-emerald-200', 'text-emerald-300'],
      amber: ['from-amber-50 to-amber-100', 'border-amber-200', 'text-amber-300'],
      green: ['from-green-50 to-green-100', 'border-green-200', 'text-green-300'],
      blue: ['from-blue-50 to-blue-100', 'border-blue-200', 'text-blue-300'],
      purple: ['from-purple-50 to-purple-100', 'border-purple-200', 'text-purple-300'],
      orange: ['from-orange-50 to-orange-100', 'border-orange-200', 'text-orange-300'],
    }
    const [grad, border, txt] = g[props.color] || g.emerald
    return () => h('div', {
      class: `aspect-video w-full rounded-3xl bg-gradient-to-br ${grad} border-2 border-dashed ${border} flex flex-col items-center justify-center gap-3`
    }, [
      h('svg', { class: `w-10 h-10 ${txt}`, fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18' })
      ]),
      h('p', { class: `text-xs font-semibold ${txt} text-center px-6` }, props.label),
      h('p', { class: 'text-xs text-gray-300' }, 'Replace with your photo'),
    ])
  }
})

// ── ImageCard ───────────────────────────────────────────────
const ImageCard = defineComponent({
  props: ['emoji', 'title', 'desc', 'accent', 'index', 'img', 'page'],
  emits: ['navigate'],
  setup(props, { emit }) {
    const accentConfig = {
      emerald: { bar: 'bg-emerald-500', badge: 'bg-emerald-500 text-white', imgBg: 'from-emerald-100 to-emerald-200', imgTxt: 'text-emerald-300', imgBorder: 'border-emerald-200', hover: 'hover:border-emerald-300', btn: 'text-emerald-600 hover:bg-emerald-50' },
      amber: { bar: 'bg-amber-400', badge: 'bg-amber-400 text-white', imgBg: 'from-amber-100 to-amber-200', imgTxt: 'text-amber-300', imgBorder: 'border-amber-200', hover: 'hover:border-amber-300', btn: 'text-amber-600 hover:bg-amber-50' },
      green: { bar: 'bg-green-500', badge: 'bg-green-500 text-white', imgBg: 'from-green-100 to-green-200', imgTxt: 'text-green-300', imgBorder: 'border-green-200', hover: 'hover:border-green-300', btn: 'text-green-600 hover:bg-green-50' },
      blue: { bar: 'bg-blue-500', badge: 'bg-blue-500 text-white', imgBg: 'from-blue-100 to-blue-200', imgTxt: 'text-blue-300', imgBorder: 'border-blue-200', hover: 'hover:border-blue-300', btn: 'text-blue-600 hover:bg-blue-50' },
      purple: { bar: 'bg-purple-500', badge: 'bg-purple-500 text-white', imgBg: 'from-purple-100 to-purple-200', imgTxt: 'text-purple-300', imgBorder: 'border-purple-200', hover: 'hover:border-purple-300', btn: 'text-purple-600 hover:bg-purple-50' },
      yellow: { bar: 'bg-yellow-400', badge: 'bg-yellow-400 text-gray-900', imgBg: 'from-yellow-100 to-yellow-200', imgTxt: 'text-yellow-400', imgBorder: 'border-yellow-200', hover: 'hover:border-yellow-300', btn: 'text-yellow-600 hover:bg-yellow-50' },
    }
    const c = accentConfig[props.accent] || accentConfig.emerald

    const imageArea = props.img
      ? h('img', { src: props.img, alt: props.title, class: 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' })
      : h('div', { class: `w-full h-full bg-gradient-to-br ${c.imgBg} flex flex-col items-center justify-center gap-2 border-b border-dashed ${c.imgBorder}` }, [
        h('svg', { class: `w-8 h-8 ${c.imgTxt} transition-transform duration-300 group-hover:scale-110`, fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z' }),
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z' }),
        ]),
        h('span', { class: `text-xs ${c.imgTxt} font-medium` }, 'Add your photo here'),
      ])

    const readMoreBtn = props.page
      ? h('button', {
        onClick: () => emit('navigate', props.page),
        class: `mt-3 self-start inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full border border-current transition-all duration-200 ${c.btn}`
      }, ['Read More', h('span', { class: 'transition-transform duration-200 group-hover:translate-x-0.5' }, ' →')])
      : null

    return () => h('div', {
      class: `group relative rounded-2xl overflow-hidden border border-gray-100 ${c.hover} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 bg-white flex flex-col h-full`
    }, [
      h('div', { class: 'relative h-44 overflow-hidden flex-shrink-0' }, [
        imageArea,
        h('div', { class: `absolute top-3 left-3 w-10 h-10 rounded-xl ${c.badge} flex items-center justify-center text-lg shadow-lg z-10` }, props.emoji),
        h('div', { class: `absolute bottom-0 left-0 right-0 h-1 ${c.bar} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10` }),
      ]),
      h('div', { class: 'p-5 flex flex-col flex-1' }, [
        h('h3', { class: 'font-bold text-gray-900 text-sm leading-snug mb-2' }, props.title),
        h('p', { class: 'text-xs text-gray-500 leading-relaxed flex-1' }, props.desc),
        readMoreBtn,
      ]),
    ])
  }
})

// ── CarouselSection ─────────────────────────────────────────
// Reusable carousel wrapper used by every section
const CarouselSection = defineComponent({
  props: ['cards', 'accent', 'emitFn'],
  setup(props) {
    const carouselEl = ref(null)
    const activeIndex = ref(0)

    const getCardWidth = (el) => {
      const card = el?.querySelector('.prog-card')
      if (!card) return 300
      const gap = parseFloat(window.getComputedStyle(el).gap) || 24
      return card.offsetWidth + gap
    }

    const slideCarousel = (dir) => {
      const el = carouselEl.value
      if (!el) return
      el.scrollBy({ left: dir * getCardWidth(el), behavior: 'smooth' })
    }

    const slideCarouselTo = (index) => {
      const el = carouselEl.value
      if (!el) return
      el.scrollTo({ left: index * getCardWidth(el), behavior: 'smooth' })
      activeIndex.value = index
    }

    const onCarouselScroll = () => {
      const el = carouselEl.value
      if (!el) return
      const w = getCardWidth(el)
      if (w) activeIndex.value = Math.round(el.scrollLeft / w)
    }

    onMounted(() => carouselEl.value?.addEventListener('scroll', onCarouselScroll))
    onUnmounted(() => carouselEl.value?.removeEventListener('scroll', onCarouselScroll))

    const accentColors = {
      emerald: 'bg-emerald-600',
      amber: 'bg-amber-500',
      green: 'bg-green-600',
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      yellow: 'bg-yellow-500',
    }
    const dotActive = accentColors[props.accent] || 'bg-brand-green'

    return () => h('div', [
      // Controls row
      h('div', { class: 'flex items-center justify-between mb-4' }, [
        // Arrows
        h('div', { class: 'flex gap-2' }, [
          h('button', {
            onClick: () => slideCarousel(-1),
            class: 'w-9 h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all'
          }, [
            h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [
              h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 19l-7-7 7-7' })
            ])
          ]),
          h('button', {
            onClick: () => slideCarousel(1),
            class: 'w-9 h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all'
          }, [
            h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [
              h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 5l7 7-7 7' })
            ])
          ]),
        ]),
        // Dots
        h('div', { class: 'flex gap-2 items-center' },
          props.cards.map((_, i) =>
            h('button', {
              key: i,
              onClick: () => slideCarouselTo(i),
              class: [
                'transition-all duration-300 rounded-full',
                activeIndex.value === i ? `w-6 h-2 ${dotActive}` : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              ].join(' ')
            })
          )
        ),
      ]),
      // Carousel track
      h('div', {
        ref: carouselEl,
        class: 'prog-carousel flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 lg:-mx-10 lg:px-10',
        style: 'scrollbar-width:none; -ms-overflow-style:none;'
      },
        props.cards.map((card, i) =>
          h('div', {
            key: card.title,
            class: 'prog-card flex-shrink-0 snap-start w-[75vw] sm:w-[45vw] lg:w-[calc(25%-18px)]'
          }, [
            h(ImageCard, {
              ...card,
              accent: props.accent,
              index: i,
              onNavigate: props.emitFn
            })
          ])
        )
      ),
    ])
  }
})

const Divider = defineComponent({
  props: ['color'],
  setup(props) {
    const dots = {
      emerald: ['bg-emerald-300', 'bg-emerald-500', 'bg-emerald-300'],
      green: ['bg-green-300', 'bg-green-500', 'bg-green-300'],
      blue: ['bg-blue-300', 'bg-blue-500', 'bg-blue-300'],
      purple: ['bg-purple-300', 'bg-purple-500', 'bg-purple-300'],
      yellow: ['bg-yellow-300', 'bg-yellow-400', 'bg-yellow-300'],
    }
    const [d1, d2, d3] = dots[props.color] || dots.emerald
    return () => h('div', { class: 'flex items-center gap-4' }, [
      h('div', { class: 'flex-1 h-px bg-gray-100' }),
      h('div', { class: 'flex gap-1.5 items-center' }, [
        h('div', { class: `w-1.5 h-1.5 rounded-full ${d1}` }),
        h('div', { class: `w-2.5 h-2.5 rounded-full ${d2}` }),
        h('div', { class: `w-1.5 h-1.5 rounded-full ${d3}` }),
      ]),
      h('div', { class: 'flex-1 h-px bg-gray-100' }),
    ])
  }
})

// ═══════════════════════════════════════════════════════════════
// CONTENT DATA
// ═══════════════════════════════════════════════════════════════

const weeImpact = [
  { emoji: '👩', number: '3,800', en: `Women Supported – Empowered through skills training, mentorship, and livelihood support`, fr: `Femmes Soutenues – Autonomisées grâce à la formation, au mentorat et au soutien aux moyens de subsistance` },
  { emoji: '🤝', number: '18', en: `Women's Cooperatives Created and Supported – Strengthening collective action and market access`, fr: `Coopératives de Femmes Créées et Soutenues – Renforcement de l'action collective et de l'accès aux marchés` },
  { emoji: '💰', number: '8', en: `Community Savings Groups (VSLA) Established and Supported – Promoting financial inclusion and resilience`, fr: `Groupes d'Épargne Communautaires (VSLA) Établis et Soutenus – Promotion de l'inclusion financière et de la résilience` },
  { emoji: '🌳', number: '8', en: `Tree Nurseries Managed by Women's Groups – Supporting agroforestry and sustainable land use`, fr: `Pépinières d'Arbres Gérées par des Groupes de Femmes – Soutien à l'agroforesterie et à l'utilisation durable des terres` },
  { emoji: '🌱', number: '12K+', en: `Trees Planted and Monitored – Contributing to environmental restoration`, fr: `Arbres Plantés et Surveillés – Contribution à la restauration environnementale` },
]

const weeCards = [
  { emoji: '💪', title: 'Building Skills and Confidence', page: 'program-basic-needs', img: new URL('../assets/programs/basic.png', import.meta.url).href, desc: 'Address urgent vulnerabilities through food, hygiene products, and health care to restore dignity and readiness for development.' },
  { emoji: '🌱', title: 'Supporting Livelihood Development', page: 'program-skills-training', img: new URL('../assets/programs/skills.jpeg', import.meta.url).href, desc: 'Women receive practical vocational training based on market demand — agriculture, cookstove production, tailoring, and non-farm trades.' },
  { emoji: '💰', title: 'Strengthening Savings and Financial Inclusion', page: 'program-savings-financial', img: new URL('../assets/programs/savings.jpg', import.meta.url).href, desc: 'Through Village Savings and Loan Associations (VSLAs), women access savings and credit, allowing reinvestment and economic stability.' },
  { emoji: '🤝', title: 'Ongoing Mentorship and Community Support', page: 'program-coaching-mentorship', img: new URL('../assets/programs/caoching.jpg', import.meta.url).href, desc: 'Each woman receives personalised mentorship in goal setting, financial literacy, leadership, and confidence-building.' },
]

const eduCards = [
  { emoji: '🎒', title: 'School Sponsorship & Retention', page: 'program-school-sponsorship', img: new URL('../assets/programs/school.jpeg', import.meta.url).href, desc: 'We identify girls at risk of dropping out and provide school fees, uniforms, and learning materials to ensure continuous education.' },
  { emoji: '🌟', title: "Career Guidance & Girls' Leadership Academy", page: 'program-girls-leadership', img: new URL('../assets/programs/career.jpeg', import.meta.url).href, desc: "Our Girls Academy offers life skills, mentorship, and career development to inspire girls' dreams and leadership pathways." },
  { emoji: '🌸', title: 'Menstrual Hygiene & Reusable Pads', page: 'program-menstrual-hygiene', img: new URL('../assets/programs/menstrual.jpeg', import.meta.url).href, desc: "We locally produce and distribute washable Malkia Pads to schools and girls' clubs, ensuring dignity and school attendance." },
  { emoji: '💜', title: 'Sexual & Reproductive Health Rights', page: 'program-srhr', img: new URL('../assets/programs/sexual.jpeg', import.meta.url).href, desc: 'Through peer education and school clubs, we create safe spaces where girls learn about their bodies, rights, and choices.' },
]

const climateCards = [
  { emoji: '🌱', title: 'Ruzizi Plain Greening Project', page: 'program-ruzizi', img: new URL('../assets/programs/ruzizi.jpeg', import.meta.url).href, desc: 'Women-led cooperatives establish nurseries, plant agroforestry trees, and adopt climate-smart farming practices to restore degraded lands.' },
  { emoji: '🔥', title: 'Jiko Life for Family & Forest', page: 'program-jiko', img: new URL('../assets/programs/jiko.jpeg', import.meta.url).href, desc: 'Promotes improved cookstoves, reducing charcoal use and indoor pollution while creating sustainable income for local producers.' },
  { emoji: '🕊️', title: 'Peace Plot Project', page: 'program-peace-plot', img: new URL('../assets/programs/peace.jpeg', import.meta.url).href, desc: 'Communities cultivate shared farmland, practice climate-smart farming, and build trust — sowing seeds of both peace and prosperity.' },
]

const peaceCards = [
  { emoji: '🔫', title: 'Combating SALW', page: 'program-salw', img: new URL('../assets/programs/Combating.jpeg', import.meta.url).href, desc: 'Community awareness campaigns on small arms, advocacy with local leaders, and links to national/international disarmament frameworks.' },
  { emoji: '💬', title: 'Community Dialogue & Mediation', page: 'program-dialogue', img: new URL('../assets/programs/Dialogue.jpeg', import.meta.url).href, desc: 'Safe spaces for women and community members to discuss tensions, mediate disputes, and build mutual understanding.' },
  { emoji: '🔄', title: 'Reintegration of Ex-Combatants', page: 'program-reintegration', img: new URL('../assets/programs/Reintegration.jpeg', import.meta.url).href, desc: 'Using the UPG model, we support former combatants with psychosocial counselling, livelihood support, and skills training.' },
  { emoji: '👩‍⚖️', title: "Women's Leadership in Peacebuilding", page: 'program-women-peace-leadership', img: new URL('../assets/programs/Leadership.jpeg', import.meta.url).href, desc: 'Women trained in conflict transformation, leadership, and local governance to influence decisions and promote justice and inclusion.' },
]

const researchCards = [
  { emoji: '🔍', title: 'Action Research & Knowledge Generation', page: 'program-action-research', img: new URL('../assets/programs/Action.jpeg', import.meta.url).href, desc: 'Participatory field research to identify gender issues, track programme impact, and develop localised toolkits, manuals, and reports.' },
  { emoji: '📜', title: 'Policy Engagement & Legal Reform', page: 'program-policy-engagement', img: new URL('../assets/programs/policy.jpeg', import.meta.url).href, desc: "Advocate for laws and policies that protect women's rights and ensure accountability on gender commitments in post-conflict recovery." },
  { emoji: '📢', title: "Amplifying Rural Women's Voices", page: 'program-amplifying-voices', img: new URL('../assets/programs/Amplifying.jpeg', import.meta.url).href, desc: 'Facilitate participation of women from remote, conflict-affected areas in national and international forums.' },
  { emoji: '📊', title: 'Evidence for Scaling the UPG Model', page: 'program-upg-evidence', img: new URL('../assets/programs/Evidence.jpeg', import.meta.url).href, desc: 'Research and document the impact of the UPG model and advocate for its adoption by governments and community planners.' },
]

const advocacyCards = [
  { emoji: '📣', title: 'Leading Campaigns', page: 'program-leading-campaigns', img: new URL('../assets/programs/Leading.jpeg', import.meta.url).href, desc: 'Women and girls spearhead campaigns on gender justice, access to services, and legal rights within their communities.' },
  { emoji: '🏛️', title: 'Engaging Duty-Bearers', page: 'program-duty-bearers', img: new URL('../assets/programs/Engaging.jpeg', import.meta.url).href, desc: "Engage with local authorities, customary leaders, and policy-makers to advocate for policies that uphold women's rights." },
  { emoji: '📈', title: 'Using Evidence for Change', page: 'program-evidence-change', img: new URL('../assets/programs/Using.jpeg', import.meta.url).href, desc: 'Harness evidence from lived experiences to influence decision-making and create tangible improvements in policies and social norms.' },
]
</script>