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
          Five interconnected programs of impact — transforming lives, restoring land, and building lasting peace across
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
          title="Women's Economic Empowerment" subtitle="Ultra-Poor Graduation (UPG) & Community-Based Model" />

        <!-- CHANGE 1: Replace impact card with image on the right, like other sections -->
        <div class="mt-10 mb-12 grid lg:grid-cols-2 gap-8 items-center">
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
                ? `Grâce à un processus structuré fondé sur le modèle UPG et l'approche communautaire, nous soutenons les
              femmes des ménages les plus vulnérables pour qu'elles passent progressivement de l'extrême pauvreté à
              l'indépendance économique.`
                : `Through a structured process grounded in the UPG model and a Community-Based Approach, we support women
              from the most vulnerable households to gradually transition from extreme poverty to economic
              independence.` }}
            </p>
          </div>
          <!-- RIGHT: image like other sections -->
          <PlaceholderImage label="Women's Economic Empowerment — Section Image" color="emerald" />
        </div>

        <CarouselSection :cards="weeCards" accent="emerald" :emit-fn="(p) => $emit('navigate', p)" />

        <!-- CHANGE 2: Key Takeaway LEFT + Success Story / Testimony RIGHT -->
        <TestimonyBlock accent="emerald" :lang="lang"
          :takeaway-en="`This continuous accompaniment is key to ensuring lasting change.`"
          :takeaway-fr="`Cet accompagnement continu est essentiel pour garantir un changement durable.`"
          :heading-en="`From Vulnerability to Leadership`" :heading-fr="`De la Vulnérabilité au Leadership`"
          :body-en="`As women strengthen their economic stability, many become active leaders within their communities. They participate in cooperative initiatives, mentor other women, and contribute to local development efforts. Through this process, women move beyond survival toward sustainable livelihoods, dignity, and leadership.`"
          :body-fr="`À mesure que les femmes renforcent leur stabilité économique, beaucoup deviennent des leaders actives au sein de leurs communautés. Elles participent à des initiatives coopératives, encadrent d'autres femmes et contribuent aux efforts de développement local.`"
          :tags-en="['Sustainable Livelihoods', 'Dignity', 'Leadership']"
          :tags-fr="['Moyens de subsistance durables', 'Dignité', 'Leadership']" :story="{
            quote_en: `I never thought I could run my own business. After joining WOCO's program, I not only started a small trade but helped five other women do the same. Today I am the leader of our cooperative — something I never imagined possible.`,
            quote_fr: `Je n'aurais jamais pensé pouvoir gérer ma propre entreprise. Après avoir rejoint le programme de WOCO, j'ai non seulement lancé un commerce, mais j'ai aidé cinq autres femmes à faire de même. Aujourd'hui, je suis la leader de notre coopérative.`,
            name: 'Marie K.',
            location_en: 'South Kivu',
            location_fr: 'Sud-Kivu',
            img: null
          }" />
      </section>

      <Divider color="emerald" />

      <!-- ══════════════════════════════════════════
           2. GIRLS LEADERSHIP ACADEMY
      ══════════════════════════════════════════ -->
      <section id="girls-leadership-academy" class="scroll-mt-40">
        <SectionHeader emoji="🌟" tag="Girls Empowerment" tagColor="bg-amber-100 text-amber-700"
          title="Girls Leadership Academy" subtitle="Education, Leadership, Menstrual Health & SRHR" />

        <div class="mt-8 grid lg:grid-cols-2 gap-12 items-center mb-12">
          <PlaceholderImage label="Girls Leadership Academy — Section Image" color="amber" />
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed text-base">
              {{ lang === 'fr'
                ? `À travers l'Est de la RDC, de nombreuses filles grandissent face à des obstacles qui les empêchent
              d'atteindre leur plein potentiel — pauvreté, normes sociales néfastes, grossesses précoces, violences
              basées sur le genre et accès limité au leadership.`
                : `Across Eastern DRC, many girls grow up facing barriers that prevent them from reaching their full
              potential — poverty, harmful social norms, early pregnancy, gender-based violence, and limited access to
              leadership opportunities.` }}
            </p>
            <p class="text-gray-600 leading-relaxed text-base">
              {{ lang === 'fr'
                ? `L'Académie de Leadership pour Filles équipe les filles avec l'éducation, les compétences en leadership,
              les connaissances en santé et la confiance dont elles ont besoin pour façonner leur avenir et transformer
              leurs communautés.`
                : `The Girls Leadership Academy equips girls with the education, leadership skills, health knowledge, and
              confidence they need to shape their futures and transform their communities. Because when girls thrive,
              communities prosper.` }}
            </p>
          </div>
        </div>

        <CarouselSection :cards="eduCards" accent="amber" :emit-fn="(p) => $emit('navigate', p)" />

        <!-- CHANGE 2: Testimony block for Girls Academy -->
        <TestimonyBlock accent="amber" :lang="lang"
          :takeaway-en="`When girls stay in school and lead, entire communities transform.`"
          :takeaway-fr="`Quand les filles restent à l'école et dirigent, des communautés entières se transforment.`"
          :heading-en="`Education as Liberation`" :heading-fr="`L'Éducation comme Libération`"
          :body-en="`The Girls Leadership Academy goes beyond the classroom — it equips girls with the confidence, health knowledge, and leadership skills to become change-makers. Girls who once faced early marriage or dropout are now community advocates and mentors.`"
          :body-fr="`L'Académie de Leadership pour Filles va au-delà de la salle de classe — elle dote les filles de confiance en soi, de connaissances en santé et de compétences en leadership pour devenir des agents du changement.`"
          :tags-en="['Education', 'Leadership', 'Health & Dignity']"
          :tags-fr="['Éducation', 'Leadership', 'Santé & Dignité']" :story="{
            quote_en: `Before joining the Academy, I was about to drop out of school. The Leadership Club changed everything — I learned to speak up, to value my health, and to dream bigger. Now I want to become a doctor and come back to help girls like me.`,
            quote_fr: `Avant de rejoindre l'Académie, j'allais abandonner l'école. Le Club de Leadership a tout changé — j'ai appris à m'exprimer, à valoriser ma santé et à rêver plus grand. Maintenant je veux devenir médecin et revenir aider des filles comme moi.`,
            name: 'Esperance M.',
            location_en: 'North Kivu',
            location_fr: 'Nord-Kivu',
            img: null
          }" />
      </section>

      <Divider color="green" />

      <!-- ══════════════════════════════════════════
           3. LAND RESTORATION & CLIMATE RESILIENCE
           CHANGE 4: Introduction framing + Read More → glfx-kivu nav
      ══════════════════════════════════════════ -->
      <section id="land-restoration-climate" class="scroll-mt-40">
        <SectionHeader emoji="🌱" tag="Climate & Environment" tagColor="bg-green-100 text-green-700"
          title="Land Restoration & Climate Resilience" subtitle="GLFx Kivu — Community-Led Landscape Action" />

        <div class="mt-8 grid lg:grid-cols-2 gap-12 items-center mb-8">
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed text-base">
              <strong class="text-brand-green font-semibold">GLFx Kivu</strong>
              {{ lang === 'fr'
                ? ` est le chapitre de Women Concern du Forum Mondial des Paysages (Global Landscapes Forum) — la plus
              grande plateforme mondiale dédiée aux paysages durables, à la restauration des écosystèmes et à l'action
              climatique. Le GLF a confié à Women Concern l'hébergement et la coordination du chapitre GLFx Kivu.`
                : ` is Women Concern's chapter of the Global Landscapes Forum — the world's largest knowledge-led platform
              dedicated to sustainable landscapes, ecosystem restoration, and climate action. The GLF entrusted Women
              Concern to host and coordinate the GLFx Kivu chapter.` }}
            </p>
            <p class="text-gray-600 leading-relaxed text-base">
              {{ lang === 'fr'
                ? `Le programme mobilise les communautés — en particulier les femmes, les jeunes et les populations
              autochtones — pour restaurer les écosystèmes dégradés tout en renforçant des moyens de subsistance
              résilients au climat.`
                : `The program mobilizes communities — especially women, youth, and indigenous populations — to restore
              degraded ecosystems while strengthening climate-resilient livelihoods, connecting local action to global
              conversations.` }}
            </p>
            <!-- CHANGE 4: Explore GLFx Kivu button → navigate to glfx-kivu -->
            <div class="pt-2">
              <button @click="$emit('navigate', 'glfx-kivu')"
                class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <span>🌍</span>
                <span>{{ lang === 'fr' ? `Explorer GLFx Kivu` : `Explore GLFx Kivu` }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <PlaceholderImage label="GLFx Kivu — Climate Section Image" color="green" />
        </div>

        <!-- CHANGE 4: Highlight cards as intro teasers — Read More on each redirects to glfx-kivu -->
        <CarouselSection :cards="climateCardsWithNav" accent="green" :emit-fn="(p) => $emit('navigate', p)" />

        <!-- CHANGE 2: Testimony block for Climate -->
        <TestimonyBlock accent="green" :lang="lang"
          :takeaway-en="`Restoring land means restoring lives — and women are leading the way.`"
          :takeaway-fr="`Restaurer la terre signifie restaurer des vies — et les femmes montrent la voie.`"
          :heading-en="`From Degraded Land to Thriving Landscape`"
          :heading-fr="`Des Terres Dégradées aux Paysages Prospères`"
          :body-en="`GLFx Kivu connects grassroots community action in Eastern DRC to global climate conversations. Women and youth are not just participants — they are the scientists, entrepreneurs, and leaders of a green recovery.`"
          :body-fr="`GLFx Kivu relie l'action communautaire locale en RDC orientale aux conversations climatiques mondiales. Les femmes et les jeunes ne sont pas seulement des participants — ils sont les scientifiques, entrepreneurs et leaders d'une reprise verte.`"
          :tags-en="['Reforestation', 'Climate Resilience', 'Green Livelihoods']"
          :tags-fr="['Reboisement', 'Résilience Climatique', 'Moyens de Subsistance Verts']" :story="{
            quote_en: `My cooperative used to struggle to find firewood and water. After joining the Ruzizi Greening project, we planted over 500 trees on our land. The soil is recovering, our harvests improved, and we now sell tree seedlings to other villages.`,
            quote_fr: `Ma coopérative avait du mal à trouver du bois de chauffage et de l'eau. Après avoir rejoint le projet de verdissement de la Ruzizi, nous avons planté plus de 500 arbres. Le sol se remet, nos récoltes se sont améliorées et nous vendons maintenant des plants à d'autres villages.`,
            name: 'Consolée B.',
            location_en: 'Ruzizi Plain, South Kivu',
            location_fr: 'Plaine de la Ruzizi, Sud-Kivu',
            img: null
          }" />
      </section>

      <Divider color="blue" />

      <!-- ══════════════════════════════════════════
           4. PEACEBUILDING & DISARMAMENT
      ══════════════════════════════════════════ -->
      <section id="peace-building-disarmament" class="scroll-mt-40">
        <SectionHeader emoji="🕊️" tag="Peace & Security" tagColor="bg-blue-100 text-blue-700"
          title="Peacebuilding & Disarmament" subtitle="Women Leading Peace Where It Matters Most" />

        <div class="mt-8 grid lg:grid-cols-2 gap-12 items-center mb-12">
          <PlaceholderImage label="Peacebuilding — Section Image" color="blue" />
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed text-base">
              {{ lang === 'fr'
                ? `Dans les communautés touchées par les conflits, les femmes sont trop souvent vues uniquement comme des
              victimes de la violence. Pourtant, chaque jour, elles sont celles qui maintiennent les familles ensemble,
              médiatisent les tensions, reconstruisent la confiance et soutiennent le tissu social.`
                : `In conflict-affected communities, women are too often seen only as victims of violence. Yet, every day,
              they are the ones holding families together, mediating tensions, rebuilding trust, and sustaining the
              social fabric.` }}
            </p>
            <p class="text-gray-600 leading-relaxed text-base">
              {{ lang === 'fr'
                ? `Chez Women Concern, nous partons d'une vérité différente : les femmes ne sont pas en marge de la paix —
              elles en sont le centre. Notre programme est conçu comme une réponse transformatrice et dirigée par la
              communauté à la violence armée.`
                : `At Women Concern, we start from a different truth: women are not on the margins of peace — they are at
              its center. Our program is designed as a transformative, community-driven response to armed violence,
              addressing both its root causes and consequences.` }}
            </p>
          </div>
        </div>

        <CarouselSection :cards="peaceCards" accent="blue" :emit-fn="(p) => $emit('navigate', p)" />

        <!-- CHANGE 2: Testimony block for Peacebuilding -->
        <TestimonyBlock accent="blue" :lang="lang"
          :takeaway-en="`Women are not on the margins of peace — they are at its center.`"
          :takeaway-fr="`Les femmes ne sont pas en marge de la paix — elles en sont le centre.`"
          :heading-en="`From Survivor to Peacemaker`" :heading-fr="`De Survivante à Artisane de Paix`"
          :body-en="`Through dialogue platforms, disarmament networks, and survivor-led healing circles, WOCO's peacebuilding work addresses both the root causes and consequences of violence — with women as the primary architects of lasting peace.`"
          :body-fr="`Grâce aux plateformes de dialogue, aux réseaux de désarmement et aux cercles de guérison dirigés par des survivantes, le travail de WOCO en matière de consolidation de la paix s'attaque aux causes et aux conséquences de la violence.`"
          :tags-en="['Conflict Resolution', 'GBV Prevention', 'Community Security']"
          :tags-fr="['Résolution de conflits', 'Prévention des VBG', 'Sécurité communautaire']" :story="{
            quote_en: `I lost my husband in the conflict and lived in fear for years. WOCO's Women Mediators Circle gave me tools and a voice. I helped negotiate a ceasefire between two rival groups in our village. Peace is possible when women lead.`,
            quote_fr: `J'ai perdu mon mari dans le conflit et j'ai vécu dans la peur pendant des années. Le Cercle des Médiatrices de WOCO m'a donné des outils et une voix. J'ai contribué à négocier un cessez-le-feu entre deux groupes rivaux dans notre village. La paix est possible quand les femmes dirigent.`,
            name: 'Amina N.',
            location_en: 'Uvira Territory, South Kivu',
            location_fr: 'Territoire d\'Uvira, Sud-Kivu',
            img: null
          }" />
      </section>

      <Divider color="purple" />

      <!-- ══════════════════════════════════════════
           5. RESEARCH & ADVOCACY
      ══════════════════════════════════════════ -->
      <section id="research-advocacy" class="scroll-mt-40">
        <SectionHeader emoji="🔬" tag="Research & Advocacy" tagColor="bg-purple-100 text-purple-700"
          title="Research & Advocacy" subtitle="Positioning Women in Decision-Making Through Evidence and Influence" />

        <div class="mt-8 grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div class="space-y-4">
            <p class="text-gray-600 leading-relaxed text-base">
              {{ lang === 'fr'
                ? `Chez Women Concern, nous croyons que les preuves sont un pouvoir — mais seulement lorsqu'elles sont
              utilisées pour modifier qui est assis à la table, qui parle et qui influence les décisions.`
                : `At Women Concern, we believe that evidence is power — but only when it is used to shift who sits at the
              table, who speaks, and who influences decisions.` }}
            </p>
            <p class="text-gray-600 leading-relaxed text-base">
              {{ lang === 'fr'
                ? `Notre programme de Recherche et Plaidoyer est conçu non seulement pour générer des connaissances, mais
              pour positionner stratégiquement les femmes dans les espaces de prise de décision aux niveaux local,
              national et régional.`
                : `Our Research and Advocacy Program is designed not only to generate knowledge, but to strategically
              position women in decision-making spaces at local, national, and regional levels — transforming research
              into a pathway for visibility, participation, and power.` }}
            </p>
          </div>
          <PlaceholderImage label="Research & Advocacy — Section Image" color="purple" />
        </div>

        <CarouselSection :cards="researchCards" accent="purple" :emit-fn="(p) => $emit('navigate', p)" />

        <!-- CHANGE 2: Testimony block for Research & Advocacy -->
        <TestimonyBlock accent="purple" :lang="lang"
          :takeaway-en="`Evidence becomes power when women hold it and wield it.`"
          :takeaway-fr="`La preuve devient un pouvoir lorsque les femmes la détiennent et l'utilisent.`"
          :heading-en="`Research That Opens Doors`" :heading-fr="`La Recherche Qui Ouvre des Portes`"
          :body-en="`WOCO's research program doesn't just produce reports — it produces advocates. Women who once had no seat at the table are now presenting findings at regional forums, informing government policy, and shaping agendas that affect millions of lives.`"
          :body-fr="`Le programme de recherche de WOCO ne produit pas seulement des rapports — il produit des défenseurs. Des femmes qui n'avaient autrefois pas leur place à la table présentent maintenant des résultats lors de forums régionaux et influencent les politiques gouvernementales.`"
          :tags-en="['Evidence-Based Policy', 'Women\'s Voice', 'Decision-Making']"
          :tags-fr="['Politiques fondées sur des preuves', 'Voix des Femmes', 'Prise de Décision']" :story="{
            quote_en: `I was trained to lead a community research study on GBV in our area. When I presented the findings to local authorities, they listened — and changed a policy. I realized that data in the hands of women is a powerful tool for change.`,
            quote_fr: `J'ai été formée pour mener une étude de recherche communautaire sur les VBG dans notre région. Quand j'ai présenté les résultats aux autorités locales, ils ont écouté — et modifié une politique. J'ai réalisé que les données entre les mains des femmes sont un outil puissant pour le changement.`,
            name: 'Joëlle M.',
            location_en: 'Goma, North Kivu',
            location_fr: 'Goma, Nord-Kivu',
            img: null
          }" />
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

    <!-- ══════════════════════════════════════════
         CHANGE 3: Sub-program Full Description Modal/Page
    ══════════════════════════════════════════ -->
    <Transition name="page-slide">
      <div v-if="activeProgramPage" class="fixed inset-0 z-50 bg-white overflow-y-auto">
        <ProgramDetailPage :program="activeProgramPage" :lang="lang" @close="activeProgramPage = null" />
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineComponent, h } from 'vue'
import { useLang } from '../composables/useLang.js'

const emit = defineEmits(['navigate'])
const { lang } = useLang()

// ── Active sub-program page (CHANGE 3) ──────────────────────
const activeProgramPage = ref(null)

const navigateToProgram = (pageKey) => {
  // Check if it's a glfx-kivu redirect
  if (pageKey === 'glfx-kivu') {
    emit('navigate', 'glfx-kivu')
    return
  }
  // Find program data
  const allCards = [...weeCards, ...eduCards, ...climateCards, ...peaceCards, ...researchCards]
  const found = allCards.find(c => c.page === pageKey)
  if (found) {
    activeProgramPage.value = found
    window.scrollTo({ top: 0 })
  }
}

// ── Sticky nav ──────────────────────────────────────────────
const sectionNavs = [
  { anchor: 'women-economic-empowerment', emoji: '💼', label: 'Economic Empowerment' },
  { anchor: 'girls-leadership-academy', emoji: '🌟', label: 'Girls Academy' },
  { anchor: 'land-restoration-climate', emoji: '🌱', label: 'Climate Resilience' },
  { anchor: 'peace-building-disarmament', emoji: '🕊️', label: 'Peace Building' },
  { anchor: 'research-advocacy', emoji: '🔬', label: 'Research & Advocacy' },
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

// ── CHANGE 2: TestimonyBlock ─────────────────────────────────
const TestimonyBlock = defineComponent({
  props: ['accent', 'lang', 'takeawayEn', 'takeawayFr', 'headingEn', 'headingFr', 'bodyEn', 'bodyFr', 'tagsEn', 'tagsFr', 'story'],
  setup(props) {
    const accentMap = {
      emerald: {
        wrap: 'bg-emerald-50 border-emerald-100',
        bar: 'bg-emerald-500',
        label: 'text-emerald-600',
        heading: 'text-emerald-900',
        divider: 'bg-emerald-200',
        body: 'text-emerald-800/70',
        tag: 'bg-emerald-100 border-emerald-200 text-emerald-700',
        tagDot: 'bg-emerald-500',
        storyWrap: 'bg-emerald-900',
        storyQuoteColor: 'text-emerald-300',
        storyBadge: 'bg-emerald-700 text-emerald-200',
      },
      amber: {
        wrap: 'bg-amber-50 border-amber-100',
        bar: 'bg-amber-500',
        label: 'text-amber-600',
        heading: 'text-amber-900',
        divider: 'bg-amber-200',
        body: 'text-amber-800/70',
        tag: 'bg-amber-100 border-amber-200 text-amber-700',
        tagDot: 'bg-amber-500',
        storyWrap: 'bg-amber-800',
        storyQuoteColor: 'text-amber-300',
        storyBadge: 'bg-amber-700 text-amber-200',
      },
      green: {
        wrap: 'bg-green-50 border-green-100',
        bar: 'bg-green-500',
        label: 'text-green-600',
        heading: 'text-green-900',
        divider: 'bg-green-200',
        body: 'text-green-800/70',
        tag: 'bg-green-100 border-green-200 text-green-700',
        tagDot: 'bg-green-500',
        storyWrap: 'bg-green-900',
        storyQuoteColor: 'text-green-300',
        storyBadge: 'bg-green-700 text-green-200',
      },
      blue: {
        wrap: 'bg-blue-50 border-blue-100',
        bar: 'bg-blue-500',
        label: 'text-blue-600',
        heading: 'text-blue-900',
        divider: 'bg-blue-200',
        body: 'text-blue-800/70',
        tag: 'bg-blue-100 border-blue-200 text-blue-700',
        tagDot: 'bg-blue-500',
        storyWrap: 'bg-blue-900',
        storyQuoteColor: 'text-blue-300',
        storyBadge: 'bg-blue-700 text-blue-200',
      },
      purple: {
        wrap: 'bg-purple-50 border-purple-100',
        bar: 'bg-purple-500',
        label: 'text-purple-600',
        heading: 'text-purple-900',
        divider: 'bg-purple-200',
        body: 'text-purple-800/70',
        tag: 'bg-purple-100 border-purple-200 text-purple-700',
        tagDot: 'bg-purple-500',
        storyWrap: 'bg-purple-900',
        storyQuoteColor: 'text-purple-300',
        storyBadge: 'bg-purple-700 text-purple-200',
      },
    }
    const c = accentMap[props.accent] || accentMap.emerald

    return () => {
      const isEn = props.lang !== 'fr'
      const takeaway = isEn ? props.takeawayEn : props.takeawayFr
      const heading = isEn ? props.headingEn : props.headingFr
      const body = isEn ? props.bodyEn : props.bodyFr
      const tags = isEn ? props.tagsEn : props.tagsFr
      const quote = isEn ? props.story.quote_en : props.story.quote_fr
      const location = isEn ? props.story.location_en : props.story.location_fr

      return h('div', { class: `mt-10 border rounded-2xl px-8 pt-8 pb-5 md:px-0 md:pt-0 md:pb-0 overflow-hidden ${c.wrap}` },
        h('div', { class: 'flex flex-col md:flex-row' }, [

          // LEFT: Key Takeaway
          h('div', { class: 'md:w-2/5 flex-shrink-0 flex flex-col gap-3 md:px-12 md:py-10 px-0 pt-0 pb-6' }, [
            h('div', { class: 'flex items-center gap-2' }, [
              h('div', { class: `w-1 h-8 rounded-full ${c.bar}` }),
              h('span', { class: `text-xs font-black uppercase tracking-widest ${c.label}` },
                isEn ? 'Key Takeaway' : 'Notre Engagement'),
            ]),
            h('p', { class: `font-display font-bold text-xl md:text-2xl leading-snug ${c.heading}` }, takeaway),
            h('div', { class: `w-px h-px hidden` }),
            h('div', { class: 'flex items-center gap-2 mt-2' }, [
              h('span', { class: 'text-lg' }, '👑'),
              h('h4', { class: `font-display font-black text-base ${c.heading}` }, heading),
            ]),
            h('p', { class: `text-sm leading-relaxed ${c.body}` }, body),
            h('div', { class: 'flex flex-wrap gap-2 mt-2' },
              (tags || []).map(tag =>
                h('span', {
                  key: tag,
                  class: `inline-flex items-center gap-1.5 border text-xs font-semibold px-3 py-1 rounded-full ${c.tag}`
                }, [
                  h('span', { class: `w-1.5 h-1.5 rounded-full ${c.tagDot}` }),
                  tag
                ])
              )
            ),
          ]),

          // Vertical divider
          h('div', { class: `hidden md:block w-px self-stretch ${c.divider} flex-shrink-0` }),

          // RIGHT: Success Story / Testimony
          h('div', { class: `flex-1 relative overflow-hidden rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none ${c.storyWrap} flex flex-col justify-between p-8 md:p-10` }, [
            // Decorative background circles
            h('div', { class: 'absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none' }),
            h('div', { class: 'absolute -bottom-6 -left-6 w-28 h-28 rounded-full border border-white/10 pointer-events-none' }),

            // Header
            h('div', { class: 'relative z-10 flex items-center gap-3 mb-6' }, [
              h('div', { class: 'w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-base' }, '✨'),
              h('p', { class: 'text-white font-black text-sm uppercase tracking-widest' },
                isEn ? 'Success Story' : 'Histoire de Succès'),
            ]),

            // Quote
            h('div', { class: 'relative z-10 flex-1' }, [
              h('span', { class: `text-5xl leading-none font-serif ${c.storyQuoteColor} block mb-2 opacity-60` }, '"'),
              h('p', { class: 'text-white/90 text-sm leading-relaxed italic' }, quote),
              h('span', { class: `text-5xl leading-none font-serif ${c.storyQuoteColor} block text-right mt-1 opacity-60` }, '"'),
            ]),

            // Attribution
            h('div', { class: 'relative z-10 mt-6 flex items-center gap-3' }, [
              // Avatar
              h('div', { class: 'w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-lg flex-shrink-0' }, '👤'),
              h('div', [
                h('p', { class: 'text-white font-bold text-sm' }, props.story.name),
                h('p', { class: `text-xs ${c.storyQuoteColor}` }, location),
              ]),
              h('div', { class: `ml-auto text-xs font-semibold px-3 py-1 rounded-full ${c.storyBadge}` },
                isEn ? 'Placeholder' : 'Témoin'),
            ]),
          ]),
        ])
      )
    }
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
      h('div', { class: 'flex items-center justify-between mb-4' }, [
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

// ── CHANGE 3: ProgramDetailPage ──────────────────────────────
// Full-page detail view shown when user clicks "Read More" on a subprogram card
const ProgramDetailPage = defineComponent({
  props: ['program', 'lang'],
  emits: ['close'],
  setup(props, { emit: emitLocal }) {
    // Extended descriptions per page key
    const extendedContent = {
      'program-identifying-vulnerable': {
        en: {
          intro: `Identifying the right women to support is the foundation of everything we do at Women Concern. Before any training or resource distribution begins, WOCO invests deeply in understanding who is truly most vulnerable — and why.`,
          sections: [
            { heading: 'Community Consultation Process', body: `We use participatory community assessments led by local facilitators and community leaders. These consultations involve village elders, health workers, teachers, and existing women's group members to map vulnerability in each target zone.` },
            { heading: 'Who We Prioritize', body: `Our targeting focuses on widows, women displaced by conflict, GBV survivors, female-headed households, women living with disabilities, and those excluded from formal economic and social systems. We use a combination of household surveys and community validation to finalize selections.` },
            { heading: 'Preventing Exclusion Errors', body: `WOCO uses a transparent, community-validated selection process with grievance mechanisms to ensure the process is fair, trusted, and free from elite capture. Women are included as active participants in verifying the list.` },
            { heading: 'From Identification to Enrollment', body: `Once identified, women undergo an orientation session where they learn about the program, what to expect, and what is expected of them. This begins the relationship of trust that underlies all of WOCO's work.` },
          ]
        },
        fr: {
          intro: `Identifier les bonnes femmes à soutenir est la base de tout ce que nous faisons chez Women Concern.`,
          sections: [
            { heading: 'Processus de Consultation Communautaire', body: `Nous utilisons des évaluations communautaires participatives menées par des facilitateurs locaux et des leaders communautaires.` },
            { heading: 'Qui Nous Priorisons', body: `Notre ciblage se concentre sur les veuves, les femmes déplacées par le conflit, les survivantes de VBG, les ménages dirigés par des femmes et celles exclues des systèmes économiques formels.` },
            { heading: 'Prévenir les Erreurs d\'Exclusion', body: `WOCO utilise un processus de sélection transparent et validé par la communauté avec des mécanismes de recours.` },
            { heading: 'De l\'Identification à l\'Inscription', body: `Une fois identifiées, les femmes participent à une session d\'orientation pour apprendre ce que le programme implique.` },
          ]
        }
      },
      // Default fallback for other pages
      default: {
        en: {
          intro: `This program is a core pillar of Women Concern's mission to empower women, restore communities, and build lasting peace in Eastern DRC. Our approach is holistic, community-driven, and deeply rooted in the realities women face every day.`,
          sections: [
            { heading: 'Our Approach', body: `We design every intervention based on careful listening to the communities we serve. Women are not passive recipients — they are co-designers of solutions, leaders of implementation, and owners of outcomes.` },
            { heading: 'What We Do', body: `Across multiple districts of Eastern DRC, our trained facilitators work alongside community members to deliver targeted support, skills training, economic resources, and ongoing accompaniment tailored to each woman's needs and context.` },
            { heading: 'Who Benefits', body: `We prioritize the most marginalized women — those affected by conflict, displacement, poverty, and gender-based violence — while building systems that benefit entire communities over time.` },
            { heading: 'Long-Term Impact', body: `Our programs are designed for sustainability. We build local capacity, strengthen community institutions, and create feedback loops that allow continuous learning and adaptation as contexts evolve.` },
          ]
        },
        fr: {
          intro: `Ce programme est un pilier central de la mission de Women Concern pour autonomiser les femmes et construire une paix durable en RDC orientale.`,
          sections: [
            { heading: 'Notre Approche', body: `Nous concevons chaque intervention à partir d'une écoute attentive des communautés que nous servons. Les femmes sont des co-conceptrices de solutions.` },
            { heading: 'Ce Que Nous Faisons', body: `Nos facilitateurs travaillent aux côtés des membres de la communauté pour fournir un soutien ciblé, une formation aux compétences et un accompagnement continu.` },
            { heading: 'Qui En Bénéficie', body: `Nous priorisons les femmes les plus marginalisées — celles touchées par les conflits, le déplacement, la pauvreté et les violences basées sur le genre.` },
            { heading: 'Impact à Long Terme', body: `Nos programmes sont conçus pour la durabilité. Nous renforçons les capacités locales et créons des boucles de rétroaction pour un apprentissage continu.` },
          ]
        }
      }
    }

    return () => {
      const isEn = props.lang !== 'fr'
      const contentKey = extendedContent[props.program?.page] ? props.program.page : 'default'
      const content = isEn ? extendedContent[contentKey].en : extendedContent[contentKey].fr

      return h('div', { class: 'min-h-screen bg-white' }, [

        // ── Back bar ──
        h('div', { class: 'sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm' },
          h('div', { class: 'max-w-5xl mx-auto px-6 py-4 flex items-center gap-4' }, [
            h('button', {
              onClick: () => emitLocal('close'),
              class: 'flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-green transition-colors group'
            }, [
              h('svg', { class: 'w-4 h-4 transition-transform group-hover:-translate-x-0.5', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [
                h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 19l-7-7 7-7' })
              ]),
              isEn ? 'Back to What We Do' : 'Retour à Nos Actions',
            ]),
            h('div', { class: 'flex-1 h-px bg-gray-100' }),
            h('span', { class: 'text-xs text-gray-300 font-medium' }, isEn ? 'Program Detail' : 'Détail du Programme'),
          ])
        ),

        // ── Hero ──
        h('div', { class: 'relative bg-gradient-to-br from-emerald-900 via-brand-green to-emerald-700 pt-16 pb-24 px-6 overflow-hidden' }, [
          h('div', { class: 'absolute inset-0 opacity-10', style: 'background-image: radial-gradient(circle at 20% 50%, white 1px, transparent 1px); background-size: 40px 40px;' }),
          h('div', { class: 'relative z-10 max-w-5xl mx-auto' }, [
            h('div', { class: 'text-4xl mb-4' }, props.program?.emoji || '📋'),
            h('h1', { class: 'text-white font-display text-4xl lg:text-5xl font-black leading-tight max-w-2xl' }, props.program?.title || ''),
            h('p', { class: 'text-white/70 mt-4 text-lg max-w-xl leading-relaxed' }, content.intro),
          ]),
          h('div', { class: 'absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10' }),
        ]),

        // ── Image + first section ──
        h('div', { class: 'max-w-5xl mx-auto px-6 py-16' }, [
          h('div', { class: 'grid lg:grid-cols-2 gap-12 items-start mb-16' }, [
            // Image
            props.program?.img
              ? h('div', { class: 'rounded-3xl overflow-hidden shadow-xl' },
                h('img', { src: props.program.img, alt: props.program.title, class: 'w-full aspect-video object-cover' }))
              : h('div', { class: 'aspect-video rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-dashed border-emerald-200 flex flex-col items-center justify-center gap-3' }, [
                h('svg', { class: 'w-12 h-12 text-emerald-300', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
                  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18' })
                ]),
                h('p', { class: 'text-xs text-emerald-300 font-semibold' }, isEn ? 'Add your program photo here' : 'Ajoutez votre photo ici'),
              ]),
            // First content section
            h('div', { class: 'space-y-4' }, [
              h('div', { class: 'inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-2' }, [
                h('span', { class: 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse' }),
                h('span', { class: 'text-emerald-700 text-xs font-bold uppercase tracking-widest' }, content.sections[0]?.heading || ''),
              ]),
              h('p', { class: 'text-gray-600 leading-relaxed text-base' }, content.sections[0]?.body || ''),
            ]),
          ]),

          // ── Remaining sections as text blocks ──
          h('div', { class: 'space-y-10' },
            (content.sections.slice(1) || []).map((section, i) =>
              h('div', { key: i, class: 'border-l-4 border-emerald-200 pl-6' }, [
                h('h3', { class: 'font-display font-black text-gray-900 text-xl mb-3' }, section.heading),
                h('p', { class: 'text-gray-600 leading-relaxed' }, section.body),
              ])
            )
          ),

          // ── Back button at bottom ──
          h('div', { class: 'mt-16 pt-10 border-t border-gray-100 flex justify-start' },
            h('button', {
              onClick: () => emitLocal('close'),
              class: 'inline-flex items-center gap-2 bg-brand-green text-white font-bold px-8 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-md hover:-translate-y-0.5'
            }, [
              h('svg', { class: 'w-4 h-4', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', viewBox: '0 0 24 24' }, [
                h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 19l-7-7 7-7' })
              ]),
              isEn ? 'Back to What We Do' : 'Retour à Nos Actions',
            ])
          ),
        ]),
      ])
    }
  }
})

// ═══════════════════════════════════════════════════════════════
// CONTENT DATA
// ═══════════════════════════════════════════════════════════════

const weeImpact = [
  { emoji: '👩', number: '3,800', en: 'Women Supported', fr: 'Femmes Soutenues' },
  { emoji: '🤝', number: '18', en: 'Women\'s Cooperatives Created', fr: 'Coopératives de Femmes Créées' },
  { emoji: '💰', number: '8', en: 'Community Savings Groups (VSLA)', fr: 'Groupes d\'Épargne (VSLA)' },
  { emoji: '🌳', number: '8', en: 'Tree Nurseries Managed by Women', fr: 'Pépinières Gérées par des Femmes' },
  { emoji: '🌱', number: '12K+', en: 'Trees Planted and Monitored', fr: 'Arbres Plantés et Surveillés' },
]

// ── Program 1: Women's Economic Empowerment cards ────────────
const weeCards = [
  {
    emoji: '🔍',
    title: 'Identifying the Most Vulnerable Women',
    page: 'program-identifying-vulnerable',
    img: new URL('../assets/programs/basic.png', import.meta.url).href,
    desc: 'Community consultations and participatory processes identify widows, displaced women, GBV survivors, and female-headed households for targeted support.'
  },
  {
    emoji: '💪',
    title: 'Building Skills and Confidence',
    page: 'program-skills-training',
    img: new URL('../assets/programs/skills.jpeg', import.meta.url).href,
    desc: 'Training in small business development, financial literacy, leadership, decision-making, and community participation to strengthen both practical skills and self-confidence.'
  },
  {
    emoji: '🌱',
    title: 'Supporting Livelihood Development',
    page: 'program-livelihood-development',
    img: new URL('../assets/programs/productive.jpeg', import.meta.url).href,
    desc: 'Start-up capital, productive assets, and technical support in agriculture or trade, with market linkages and continuous business coaching.'
  },
  {
    emoji: '💰',
    title: 'Savings & Financial Inclusion',
    page: 'program-savings-financial',
    img: new URL('../assets/programs/savings.jpg', import.meta.url).href,
    desc: 'Community savings groups (VSLAs) where women save regularly, access small loans, and build financial resilience and productive capital over time.'
  },
  {
    emoji: '🤝',
    title: 'Ongoing Mentorship & Community Support',
    page: 'program-coaching-mentorship',
    img: new URL('../assets/programs/caoching.jpg', import.meta.url).href,
    desc: 'Regular household visits by WOCO staff and community facilitators provide personalized coaching, progress tracking, psychosocial support, and peer learning.'
  },
]

// ── Program 2: Girls Leadership Academy cards ────────────────
const eduCards = [
  {
    emoji: '🎒',
    title: 'Education Access & Sponsorship',
    page: 'program-school-sponsorship',
    img: new URL('../assets/programs/school.jpeg', import.meta.url).href,
    desc: 'School fees, materials, and reintegration support for the most vulnerable girls — including those affected by poverty, early motherhood, or displacement.'
  },
  {
    emoji: '🌟',
    title: 'Leadership & Life Skills Development',
    page: 'program-girls-leadership',
    img: new URL('../assets/programs/career.jpeg', import.meta.url).href,
    desc: 'Girls Leadership Clubs provide training in public speaking, self-confidence, financial literacy, digital skills, civic engagement, and gender equality — with female mentors.'
  },
  {
    emoji: '🌸',
    title: 'Menstrual Health & Dignity',
    page: 'program-menstrual-hygiene',
    img: new URL('../assets/programs/menstrual.jpeg', import.meta.url).href,
    desc: 'Menstrual health education, distribution of Safi Pad and Malkia Pad, and school awareness campaigns to break stigma and keep girls attending school with dignity.'
  },
  {
    emoji: '💜',
    title: 'Sexual & Reproductive Health & Rights',
    page: 'program-srhr',
    img: new URL('../assets/programs/sexual.jpeg', import.meta.url).href,
    desc: 'Age-appropriate education on reproductive health, GBV prevention, bodily autonomy, healthy relationships, and access to youth-friendly health services.'
  },
]

// ── Program 3: Land Restoration & Climate cards ──────────────
// CHANGE 4: All cards redirect to glfx-kivu
const climateCards = [
  {
    emoji: '🌱',
    title: 'Ruzizi Greening Project',
    page: 'glfx-kivu',
    img: new URL('../assets/programs/ruzizi.jpeg', import.meta.url).href,
    desc: 'Flagship landscape restoration in the Ruzizi Plain — women\'s cooperatives lead agroforestry, tree nurseries, soil conservation, and regenerative horticulture.'
  },
  {
    emoji: '🔥',
    title: 'Clean Cooking Solutions',
    page: 'glfx-kivu',
    img: new URL('../assets/programs/jiko.jpeg', import.meta.url).href,
    desc: 'Training communities to produce improved cookstoves locally, reducing deforestation and indoor pollution while creating income for artisans through indigenous knowledge.'
  },
  {
    emoji: '♻️',
    title: 'Green Enterprise & Regenerative Agriculture',
    page: 'glfx-kivu',
    img: new URL('../assets/programs/peace.jpeg', import.meta.url).href,
    desc: 'Supporting women and youth to develop green enterprises — agroforestry businesses, organic food, tree nurseries — connected to savings groups and markets.'
  },
]

// Alias used in template (same as climateCards, navigation handled via emitFn → navigateToProgram)
const climateCardsWithNav = climateCards

// ── Program 4: Peacebuilding & Disarmament cards ─────────────
const peaceCards = [
  {
    emoji: '🛡️',
    title: 'Reducing the Spread of Small Arms (SALW)',
    page: 'program-salw',
    img: new URL('../assets/programs/Combating.jpeg', import.meta.url).href,
    desc: 'Community Protection Brigades, Women-Led Safety Networks, and collaborative security platforms transform disarmament into a community-driven, women-led process.'
  },
  {
    emoji: '🕊️',
    title: 'Women-Led Peace Dialogues',
    page: 'program-dialogue',
    img: new URL('../assets/programs/Dialogue.jpeg', import.meta.url).href,
    desc: 'Permanent Community Dialogue Platforms, Women Mediators Circles, and Peace Labs — building lasting peace infrastructure led by women, not one-off interventions.'
  },
  {
    emoji: '💜',
    title: 'GBV Prevention & Survivor Support',
    page: 'program-gbv-response',
    img: new URL('../assets/programs/Leadership.jpeg', import.meta.url).href,
    desc: 'Women Empowerment Hubs, mobile outreach, and Survivor-to-Leader Pathways deliver holistic, survivor-centered support — from healing to leadership and prevention.'
  },
  {
    emoji: '🔄',
    title: 'Reintegration Through Inclusive Recovery',
    page: 'program-reintegration',
    img: new URL('../assets/programs/Reintegration.jpeg', import.meta.url).href,
    desc: 'Dual reintegration for ex-combatants and conflict-affected women through livelihoods, community acceptance dialogues, and economic reintegration ecosystems.'
  },
]

// ── Program 5: Research & Advocacy cards ────────────────────
const researchCards = [
  {
    emoji: '🔬',
    title: 'Community-Based Research & Evidence',
    page: 'program-action-research',
    img: new URL('../assets/programs/Action.jpeg', import.meta.url).href,
    desc: 'Participatory research engaging women as active contributors — baseline studies, thematic research on GBV, peacebuilding, livelihoods, and vulnerability analyses.'
  },
  {
    emoji: '📜',
    title: 'Knowledge Production for Strategic Influence',
    page: 'program-policy-engagement',
    img: new URL('../assets/programs/policy.jpeg', import.meta.url).href,
    desc: 'Transforming evidence into policy briefs, reports, and advocacy tools deliberately packaged to strengthen women\'s voices in decision-making spaces.'
  },
  {
    emoji: '📢',
    title: 'Advocacy & Women in Decision-Making',
    page: 'program-amplifying-voices',
    img: new URL('../assets/programs/Amplifying.jpeg', import.meta.url).href,
    desc: 'Supporting women leaders to participate in governance forums, building coalitions, and engaging institutions to create gender-responsive decision-making environments.'
  },
  {
    emoji: '📊',
    title: 'Amplifying Women as Knowledge Actors',
    page: 'program-upg-evidence',
    img: new URL('../assets/programs/Evidence.jpeg', import.meta.url).href,
    desc: 'Elevating women from data subjects to recognized experts, knowledge holders, and decision-shapers — presenting evidence-based perspectives and leading policy influence.'
  },
]
</script>

<style scoped>
/* CHANGE 3: Slide-in transition for program detail page */
.page-slide-enter-active,
.page-slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
}

.page-slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.page-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>