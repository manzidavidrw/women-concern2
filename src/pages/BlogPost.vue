<template>
  <div class="pb-20 min-h-screen bg-white">

    <!-- Breadcrumb -->
    <div class="pt-24 bg-white border-b border-gray-100 px-6 lg:px-10">
      <div class="max-w-3xl mx-auto py-3 flex items-center gap-2 text-xs text-gray-400 font-medium">
        <button @click="$emit('navigate', 'home')"
          class="hover:text-brand-green transition-colors flex items-center gap-1">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10" />
          </svg>
          {{ t({ en: 'Home', fr: 'Accueil' }) }}
        </button>
        <svg class="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <button @click="$emit('navigate', 'blog')" class="hover:text-brand-green transition-colors">
          {{ t({ en: 'Stories', fr: 'Histoires' }) }}
        </button>
        <svg class="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-brand-green font-semibold truncate max-w-[160px]">{{ t(post.title) }}</span>
      </div>
    </div>

    <!-- Hero band -->
    <div class="relative h-72 md:h-96 flex items-end overflow-hidden" :style="{ background: post.bg }">
      <div class="absolute inset-0 opacity-30"
        style="background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.06%22/%3E%3C/svg%3E')" />
      <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" />

      <div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pb-10 w-full">
        <span
          class="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-white/80 text-xs font-medium mb-4">
          {{ post.emoji }} {{ t(post.category) }}
        </span>
        <h1 class="font-display font-bold text-white text-3xl md:text-5xl leading-tight">
          {{ t(post.title) }}
        </h1>
      </div>
    </div>

    <!-- Article body -->
    <div class="max-w-3xl mx-auto px-6 lg:px-10">

      <!-- Author bar -->
      <div class="flex items-center justify-between py-6 border-b border-gray-100 mb-10">
        <div class="flex items-center gap-3">
          <span class="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-xl">{{
            post.authorEmoji }}</span>
          <div>
            <p class="text-gray-800 text-sm font-semibold">{{ post.author }}</p>
            <p class="text-gray-400 text-xs">{{ post.date }} · {{ t(post.readTime) }}</p>
          </div>
        </div>
        <a href="https://gogetfunding.com/PLACEHOLDER" target="_blank"
          class="bg-brand-yellow text-brand-green font-semibold text-xs px-4 py-2 rounded-full hover:brightness-105 transition-all">
          ♥ {{ t({ en: 'Support Us', fr: 'Nous Soutenir' }) }}
        </a>
      </div>

      <!-- Article content -->
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-600 text-lg leading-relaxed font-medium mb-6">{{ t(post.excerpt) }}</p>

        <div v-for="(section, i) in post.body" :key="i" class="mb-8">
          <h2 v-if="section.heading" class="font-display font-bold text-gray-900 text-2xl mb-3">
            {{ t(section.heading) }}
          </h2>
          <p class="text-gray-500 text-base leading-relaxed">{{ t(section.text) }}</p>
        </div>

        <!-- Pull quote -->
        <blockquote class="border-l-4 border-brand-yellow pl-6 my-10">
          <p class="font-display font-bold text-brand-green text-2xl leading-snug italic">
            "{{ t(post.quote) }}"
          </p>
        </blockquote>

        <div v-for="(section, i) in post.body2" :key="'b' + i" class="mb-8">
          <h2 v-if="section.heading" class="font-display font-bold text-gray-900 text-2xl mb-3">
            {{ t(section.heading) }}
          </h2>
          <p class="text-gray-500 text-base leading-relaxed">{{ t(section.text) }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-14 bg-brand-green rounded-3xl p-8 md:p-10 text-center">
        <h3 class="font-display font-bold text-white text-2xl mb-2">
          {{ t({ en: 'Want to Make a Difference?', fr: 'Vous Voulez Faire une Différence ?' }) }}
        </h3>
        <p class="text-white/55 text-sm mb-6 max-w-sm mx-auto">
          {{ t({
            en: `Your support directly funds stories like this one.', fr: 'Votre soutien finance directement des
          histoires comme celle- ci.` }) }}
        </p>
        <a href="https://gogetfunding.com/PLACEHOLDER" target="_blank"
          class="pulse-btn inline-block bg-brand-yellow text-brand-green font-bold px-8 py-4 rounded-full hover:brightness-105 transition-all">
          ♥ {{ t({ en: 'Donate Now', fr: 'Donner Maintenant' }) }}
        </a>
      </div>

      <!-- More stories -->
      <div class="mt-14">
        <h3 class="font-display font-bold text-gray-900 text-2xl mb-6">
          {{ t({ en: 'More Stories', fr: 'Plus d\'Histoires' }) }}
        </h3>
        <div class="grid sm:grid-cols-2 gap-5">
          <div v-for="other in otherPosts" :key="other.id" @click="$emit('navigate', 'blog-' + other.id)"
            class="group cursor-pointer flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-brand-yellow/30 hover:bg-gray-50 transition-all">
            <div class="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl"
              :style="{ background: other.bg }">
              {{ other.emoji }}
            </div>
            <div>
              <p
                class="text-gray-800 text-sm font-semibold leading-tight group-hover:text-brand-green transition-colors mb-1">
                {{ t(other.title) }}</p>
              <p class="text-gray-400 text-xs">{{ t(other.readTime) }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLang } from '../composables/useLang.js'

const props = defineProps({ postId: { type: Number, required: true } })
defineEmits(['navigate'])
const { t } = useLang()

const allPosts = [
  {
    id: 1, bg: 'linear-gradient(135deg, #1E4D35 0%, #163a28 100%)', emoji: '🚨',
    authorEmoji: '👩🏾', author: 'Marie K.', date: 'March 2024',
    category: { en: 'Emergency Response', fr: 'Réponse d\'Urgence' },
    readTime: { en: '4 min read', fr: '4 min de lecture' },
    title: { en: 'Standing With Goma in Its Darkest Hour', fr: 'Aux Côtés de Goma dans Son Heure la Plus Sombre' },
    excerpt: { en: 'As conflict intensifies in Eastern DRC, Women Concern teams are on the ground delivering emergency relief to thousands of displaced women and children.', fr: 'Alors que le conflit s\'intensifie dans l\'est de la RDC, les équipes de Women Concern sont sur le terrain pour apporter une aide d\'urgence.' },
    quote: { en: 'When a woman loses everything, she still has her resilience. Our job is to stand beside her.', fr: 'Quand une femme perd tout, il lui reste encore sa résilience. Notre travail est de se tenir à ses côtés.' },
    body: [
      { heading: { en: 'The Crisis on the Ground', fr: 'La Crise sur le Terrain' }, text: { en: 'Since early 2024, renewed fighting in North Kivu has displaced over 700,000 people — the majority of whom are women and children. Our teams have been working around the clock to reach displacement camps on the outskirts of Goma, distributing food, hygiene kits, and emergency medical supplies.', fr: 'Depuis début 2024, les combats renouvelés au Nord-Kivu ont déplacé plus de 700 000 personnes — dont la majorité sont des femmes et des enfants. Nos équipes travaillent 24h/24 pour atteindre les camps de déplacés en périphérie de Goma.' } },
      { heading: { en: 'What We Are Doing', fr: 'Ce Que Nous Faisons' }, text: { en: 'Women Concern has deployed mobile health units, distributed emergency hygiene packs to over 2,000 women, and set up safe spaces where survivors of gender-based violence can access counselling. We are also coordinating with local leaders to ensure the most vulnerable families are identified and prioritised.', fr: 'Women Concern a déployé des unités de santé mobile, distribué des kits d\'hygiène d\'urgence à plus de 2 000 femmes, et mis en place des espaces sûrs où les survivantes de violences peuvent accéder à des conseils.' } },
    ],
    body2: [
      { heading: { en: 'How You Can Help', fr: 'Comment Vous Pouvez Aider' }, text: { en: 'The needs on the ground are immense and urgent. Every donation goes directly to emergency supplies, medical care, and safe shelter for women and children in Goma. There is no time to waste — please donate today.', fr: 'Les besoins sur le terrain sont immenses et urgents. Chaque don va directement aux fournitures d\'urgence, aux soins médicaux et à l\'abri sûr pour les femmes et enfants à Goma.' } },
    ],
  },
  {
    id: 2, bg: 'linear-gradient(135deg, #1a4530 0%, #0f2e1e 100%)', emoji: '🌸',
    authorEmoji: '👩🏽', author: 'Amina T.', date: 'February 2024',
    category: { en: 'Malkia Pads', fr: 'Malkia Pads' },
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: { en: 'How a Pack of Pads Keeps a Girl in School', fr: 'Comment un Paquet de Serviettes Garde une Fille à l\'École' },
    excerpt: { en: 'Meet Zawadi, 14, who missed school every month until Malkia Pads reached her village. Her story is one of 500 — and counting.', fr: 'Rencontrez Zawadi, 14 ans, qui manquait l\'école chaque mois jusqu\'à ce que Malkia Pads atteigne son village.' },
    quote: { en: 'I used to hide at home for five days every month. Now I never miss a class.', fr: 'Je me cachais chez moi pendant cinq jours chaque mois. Maintenant je ne manque plus jamais un cours.' },
    body: [
      { heading: { en: "Zawadi's Story", fr: "L'Histoire de Zawadi" }, text: { en: 'Zawadi is 14 years old and lives in a small village 30km outside Goma. Like millions of girls across Eastern DRC, she had no access to sanitary pads. Every month, she missed up to five days of school — too embarrassed and uncomfortable to attend. Her grades were slipping and her teacher feared she would drop out entirely.', fr: 'Zawadi a 14 ans et vit dans un petit village à 30km de Goma. Comme des millions de filles dans l\'est de la RDC, elle n\'avait pas accès aux serviettes hygiéniques. Chaque mois, elle manquait jusqu\'à cinq jours d\'école.' } },
      { heading: { en: 'The Malkia Pads Difference', fr: 'La Différence Malkia Pads' }, text: { en: 'When our Malkia Pads program reached Zawadi\'s school in October 2023, everything changed. For the first time, she had a month\'s supply of quality, reusable pads — completely free. She has not missed a single day of school since. Her exam results have improved dramatically and she now dreams of becoming a doctor.', fr: 'Lorsque notre programme Malkia Pads a atteint l\'école de Zawadi en octobre 2023, tout a changé. Pour la première fois, elle avait un approvisionnement mensuel de serviettes de qualité — entièrement gratuites.' } },
    ],
    body2: [
      { heading: { en: '500 Girls and Counting', fr: '500 Filles et Plus' }, text: { en: 'Zawadi\'s story is one of more than 500 we have documented. Our goal is to reach 2,000 girls by the end of 2024. With your support — either through a donation or by purchasing Malkia Pads directly — we can get there.', fr: 'L\'histoire de Zawadi est l\'une des plus de 500 que nous avons documentées. Notre objectif est d\'atteindre 2 000 filles d\'ici fin 2024.' } },
    ],
  },
  {
    id: 3, bg: 'linear-gradient(135deg, #1E4D35 0%, #2d5c3e 100%)', emoji: '💼',
    authorEmoji: '👩🏿', author: 'Grace N.', date: 'January 2024',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    readTime: { en: '6 min read', fr: '6 min de lecture' },
    title: { en: 'From Displacement Camp to Business Owner', fr: 'Du Camp de Déplacés à Chef d\'Entreprise' },
    excerpt: { en: 'After fleeing conflict with nothing, Esperance used our microloan program to build a thriving tailoring business that now employs three other women.', fr: 'Après avoir fui le conflit sans rien, Espérance a utilisé notre programme de microcrédit pour créer une entreprise prospère.' },
    quote: { en: 'They did not give me a fish. They taught me to build the boat.', fr: 'Ils ne m\'ont pas donné un poisson. Ils m\'ont appris à construire le bateau.' },
    body: [
      { heading: { en: "Esperance's Journey", fr: "Le Parcours d'Espérance" }, text: { en: 'Esperance arrived at the Bulengo displacement camp in 2022 with her three children and nothing else. She had been a seamstress in her home village but had lost her sewing machine and all her materials when she fled. For months, she relied on food distributions to survive.', fr: 'Espérance est arrivée au camp de déplacés de Bulengo en 2022 avec ses trois enfants et rien d\'autre. Elle avait été couturière dans son village natal mais avait tout perdu en fuyant.' } },
      { heading: { en: 'The Microloan That Changed Everything', fr: 'Le Microcrédit Qui a Tout Changé' }, text: { en: 'In early 2023, Women Concern enrolled Esperance in our Economic Empowerment program. She received a $200 microloan, six weeks of business training, and ongoing mentorship from one of our field officers. She used the loan to purchase a second-hand sewing machine and fabrics, and quickly built up a client base within the camp.', fr: 'Début 2023, Women Concern a inscrit Espérance dans notre programme d\'autonomisation économique. Elle a reçu un microcrédit de 200 $, six semaines de formation commerciale et un mentorat continu.' } },
    ],
    body2: [
      { heading: { en: 'Now She Employs Others', fr: 'Maintenant Elle Emploie d\'Autres' }, text: { en: 'Today, Esperance runs a small but thriving tailoring shop that has moved out of the camp and into a rented space in Goma. She employs three other displaced women and is repaying her microloan ahead of schedule. She is also saving to buy a second machine.', fr: 'Aujourd\'hui, Espérance gère une petite boutique de couture prospère qui a quitté le camp et s\'est installée dans un espace loué à Goma. Elle emploie trois autres femmes déplacées.' } },
    ],
  },
  {
    id: 4, bg: 'linear-gradient(135deg, #163a28 0%, #1E4D35 100%)', emoji: '✨',
    authorEmoji: '👩🏻', author: 'Claire M.', date: 'December 2023',
    category: { en: 'GLFX Program', fr: 'Programme GLFX' },
    readTime: { en: '3 min read', fr: '3 min de lecture' },
    title: { en: 'GLFX: The Next Generation of Women Leaders', fr: 'GLFX : La Prochaine Génération de Femmes Leaders' },
    excerpt: { en: 'Our Girls Leadership & Futures Exchange program has graduated its first cohort of 40 young women, ready to lead in their communities and beyond.', fr: 'Notre programme GLFX a diplômé sa première cohorte de 40 jeunes femmes, prêtes à diriger dans leurs communautés.' },
    quote: { en: 'I came in as a girl who was afraid to speak. I left as a leader who knows her voice matters.', fr: 'Je suis entrée comme une fille qui avait peur de parler. Je suis sortie comme une leader qui sait que sa voix compte.' },
    body: [
      { heading: { en: 'What is GLFX?', fr: 'Qu\'est-ce que GLFX ?' }, text: { en: 'The Girls Leadership & Futures Exchange (GLFX) is a six-month intensive program designed for young women aged 16–25 in Goma. It combines leadership skills, mentorship, career guidance, civic education, and community project work — all delivered by experienced women leaders from across Eastern DRC.', fr: 'Le Girls Leadership & Futures Exchange (GLFX) est un programme intensif de six mois conçu pour les jeunes femmes de 16 à 25 ans à Goma. Il combine compétences en leadership, mentorat, orientation professionnelle et travail de projet communautaire.' } },
      { heading: { en: 'The First Cohort', fr: 'La Première Cohorte' }, text: { en: 'In November 2023, we celebrated the graduation of GLFX\'s inaugural cohort of 40 young women. Over six months, they developed business plans, led community health campaigns, and mentored younger girls in their schools. Three have already been accepted into university programs. Two have launched small businesses.', fr: 'En novembre 2023, nous avons célébré la remise de diplômes de la première cohorte GLFX de 40 jeunes femmes. En six mois, elles ont développé des plans d\'affaires et mené des campagnes de santé communautaires.' } },
    ],
    body2: [
      { heading: { en: 'What Comes Next', fr: 'Ce Qui Vient Ensuite' }, text: { en: 'Applications for GLFX Cohort 2 are now open, with 60 places available. We are also exploring partnerships to expand the program to Butembo and Bukavu. If your organisation is interested in supporting or co-delivering GLFX, please get in touch.', fr: 'Les candidatures pour la Cohorte 2 GLFX sont maintenant ouvertes, avec 60 places disponibles. Nous explorons également des partenariats pour étendre le programme à Butembo et Bukavu.' } },
    ],
  },
]

const post = computed(() => allPosts.find(p => p.id === props.postId) || allPosts[0])
const otherPosts = computed(() => allPosts.filter(p => p.id !== props.postId).slice(0, 2))
</script>