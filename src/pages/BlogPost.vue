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

    <!-- Hero image band -->
    <div class="relative h-72 md:h-[420px] flex items-end overflow-hidden">
      <!-- Real hero image -->
      <img v-if="post.heroImage" :src="post.heroImage" :alt="t(post.title)"
        class="absolute inset-0 w-full h-full object-cover" />
      <!-- Gradient fallback when no hero image -->
      <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-3"
        :style="{ background: post.bg }">
        <div class="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
          <svg class="w-8 h-8 text-white/40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
        <p class="text-white/30 text-xs font-medium tracking-wide uppercase">Add hero image · post.heroImage</p>
      </div>

      <!-- Dark overlay -->
      <div class="absolute inset-0"
        style="background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" />

      <!-- Title overlay -->
      <div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pb-10 w-full">
        <span
          class="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-3 py-1 text-white/80 text-xs font-medium mb-4">
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

      <!-- Excerpt lead -->
      <p class="text-gray-600 text-lg leading-relaxed font-medium mb-8">{{ t(post.excerpt) }}</p>

      <!-- Body section 1 -->
      <div v-for="(section, i) in post.body" :key="i" class="mb-8">
        <h2 v-if="section.heading" class="font-display font-bold text-gray-900 text-2xl mb-3">
          {{ t(section.heading) }}
        </h2>
        <p class="text-gray-500 text-base leading-relaxed">{{ t(section.text) }}</p>
      </div>

      <!-- ── Inline Image 1 ── -->
      <div class="my-10 rounded-2xl overflow-hidden">
        <img v-if="post.images && post.images[0]" :src="post.images[0].src" :alt="post.images[0].caption"
          class="w-full h-64 md:h-80 object-cover" />
        <!-- Placeholder -->
        <div v-else
          class="w-full h-64 md:h-72 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50">
          <div class="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <p class="text-gray-400 text-sm font-semibold">Photo from the field</p>
          <p class="text-gray-300 text-xs">Add via post.images[0].src</p>
        </div>
        <p v-if="post.images && post.images[0] && post.images[0].caption"
          class="text-gray-400 text-xs text-center mt-2 italic">{{ post.images[0].caption }}</p>
      </div>

      <!-- Pull quote -->
      <blockquote class="border-l-4 border-brand-yellow pl-6 my-10">
        <p class="font-display font-bold text-brand-green text-2xl leading-snug italic">
          "{{ t(post.quote) }}"
        </p>
      </blockquote>

      <!-- Body section 2 -->
      <div v-for="(section, i) in post.body2" :key="'b' + i" class="mb-8">
        <h2 v-if="section.heading" class="font-display font-bold text-gray-900 text-2xl mb-3">
          {{ t(section.heading) }}
        </h2>
        <p class="text-gray-500 text-base leading-relaxed">{{ t(section.text) }}</p>
      </div>

      <!-- ── Inline Image 2 ── -->
      <div class="my-10 rounded-2xl overflow-hidden">
        <img v-if="post.images && post.images[1]" :src="post.images[1].src" :alt="post.images[1].caption"
          class="w-full h-64 md:h-80 object-cover" />
        <!-- Placeholder -->
        <div v-else
          class="w-full h-64 md:h-72 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50">
          <div class="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <p class="text-gray-400 text-sm font-semibold">Photo from the field</p>
          <p class="text-gray-300 text-xs">Add via post.images[1].src</p>
        </div>
        <p v-if="post.images && post.images[1] && post.images[1].caption"
          class="text-gray-400 text-xs text-center mt-2 italic">{{ post.images[1].caption }}</p>
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
            <!-- Thumbnail -->
            <div class="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden">
              <img v-if="other.heroImage" :src="other.heroImage" :alt="t(other.title)"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div v-else class="w-full h-full flex items-center justify-center text-2xl"
                :style="{ background: other.bg }">
                {{ other.emoji }}
              </div>
            </div>
            <div>
              <p
                class="text-gray-800 text-sm font-semibold leading-tight group-hover:text-brand-green transition-colors mb-1">
                {{ t(other.title) }}
              </p>
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

import closing1 from '../assets/blogs/closing1.png'
import closing2 from '../assets/blogs/closing2.png'
import closing3 from '../assets/blogs/closing3.png'

import uwezo1 from '../assets/blogs/uwezo1.jpeg'
import uwezo2 from '../assets/blogs/uwezo2.jpg'
import uwezo3 from '../assets/blogs/uwezo3.jpeg'

import launch1 from '../assets/blogs/launch1.jpg'
import launch2 from '../assets/blogs/launch2.jpg'
import launch3 from '../assets/blogs/launch3.jpg'

import youth1 from '../assets/blogs/youth1.jpg'
import youth2 from '../assets/blogs/youth2.jpg'
import youth3 from '../assets/blogs/youth3.jpg'




const props = defineProps({ postId: { type: Number, required: true } })
defineEmits(['navigate'])
const { t } = useLang()


const allPosts = [
  {
    id: 1,
    heroImage: closing1,   // ← replace with imported image
    images: [
      { src: closing2, caption: '' },
      { src: closing3, caption: '' },
    ],
    bg: 'linear-gradient(135deg, #1E4D35 0%, #163a28 100%)', emoji: '🚨',
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
    id: 2,
    heroImage: null,
    images: [],
    bg: 'linear-gradient(135deg, #1a4530 0%, #0f2e1e 100%)', emoji: '🌸',
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
    id: 3,
    heroImage: null,
    images: [],
    bg: 'linear-gradient(135deg, #1E4D35 0%, #2d5c3e 100%)', emoji: '💼',
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
    id: 4,
    heroImage: null,
    images: [],
    bg: 'linear-gradient(135deg, #163a28 0%, #1E4D35 100%)', emoji: '✨',
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
  {
    id: 5,
    heroImage: null,
    images: [],
    bg: 'linear-gradient(135deg, #004080 0%, #00264d 100%)', emoji: '🤝',
    authorEmoji: '👨🏽‍💼', author: 'Jean P.', date: 'April 2024',
    category: { en: 'Support & Partnership', fr: 'Soutien et Partenariat' },
    readTime: { en: '3 min read', fr: '3 min de lecture' },
    title: { en: 'Our Donors & Partners', fr: 'Nos Donateurs et Partenaires' },
    excerpt: { en: 'Together with our donors and partners, we build sustainable solutions that empower communities and create lasting impact.', fr: 'Avec nos donateurs et partenaires, nous construisons des solutions durables qui autonomisent les communautés et créent un impact durable.' },
    quote: { en: 'Partnership is not just about resources — it is about shared vision and solidarity.', fr: 'Le partenariat n\'est pas seulement une question de ressources — c\'est une vision partagée et une solidarité.' },
    body: [
      { heading: { en: 'Why Partnerships Matter', fr: 'Pourquoi les Partenariats Comptent' }, text: { en: 'From emergency relief in Goma to long-term education programs, our work is only possible because of the generosity of donors and the commitment of partners. They ensure that women and children are not left behind in times of crisis.', fr: 'De l\'aide d\'urgence à Goma aux programmes éducatifs à long terme, notre travail n\'est possible que grâce à la générosité des donateurs et à l\'engagement des partenaires.' } },
      { heading: { en: 'Building Sustainable Impact', fr: 'Construire un Impact Durable' }, text: { en: 'Beyond immediate aid, our partners invest in vocational training, healthcare access, and community empowerment projects. These initiatives help women rebuild their lives with dignity and resilience.', fr: 'Au-delà de l\'aide immédiate, nos partenaires investissent dans la formation professionnelle, l\'accès aux soins de santé et les projets d\'autonomisation communautaire.' } },
    ],
    body2: [
      { heading: { en: 'Join Us in Making a Difference', fr: 'Rejoignez-Nous pour Faire la Différence' }, text: { en: 'Every new donor and partner strengthens our ability to respond to crises and build lasting change. Together, we can ensure that hope is never lost.', fr: 'Chaque nouveau donateur et partenaire renforce notre capacité à répondre aux crises et à bâtir un changement durable. Ensemble, nous pouvons veiller à ce que l\'espoir ne soit jamais perdu.' } },
    ],
  },
  {
    id: 6,
    heroImage: closing1,
    images: [
      { src: closing2, caption: '' },
      { src: closing3, caption: '' },
    ],
    bg: 'linear-gradient(135deg, #1E4D35 0%, #0f3d26 100%)', emoji: '🎓',
    authorEmoji: '👩🏿', author: 'Women Concern Team', date: '10 December 2025',
    category: { en: 'Advocacy & Awareness', fr: 'Plaidoyer & Sensibilisation' },
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: {
      en: 'Closing the 16 Days of Activism: Women Concern Reaches Over 1,000 Students at Institut de Goma',
      fr: "Clôture des 16 Jours d'Activisme : Women Concern Touche Plus de 1 000 Élèves à l'Institut de Goma"
    },
    excerpt: {
      en: 'On the final day of the global 16 Days of Activism Against Gender-Based Violence, Women Concern and the Uwezo Network led a major awareness event at Institut de Goma, engaging nearly 1,000 students along with members of the teaching staff.',
      fr: "Le dernier jour des 16 Jours d'Activisme Contre les VBG, Women Concern et le Réseau Uwezo ont animé un grand événement de sensibilisation à l'Institut de Goma, engageant près de 1 000 élèves."
    },
    quote: {
      en: 'Young people are not just the future — they are the change we need right now.',
      fr: "Les jeunes ne sont pas seulement l'avenir — ils sont le changement dont nous avons besoin maintenant."
    },
    body: [
      {
        heading: { en: 'A Dynamic and Enriching Session', fr: 'Une Session Dynamique et Enrichissante' },
        text: {
          en: 'The Women Concern team facilitated an interactive session that drew remarkable interest from the students. Many acknowledged little to no prior knowledge about the campaign theme, particularly regarding online and digital violence. Through questions and answers, students gained a deeper understanding of the different forms of GBV, the risks they face both offline and online, and available protection and reporting mechanisms.',
          fr: "L'équipe de Women Concern a animé une session interactive suscitant un intérêt remarquable. Beaucoup ont reconnu peu de connaissances préalables sur le thème, notamment sur la violence numérique. À travers des questions-réponses, les élèves ont acquis une meilleure compréhension des formes de VBG, des risques en ligne et hors ligne, et des mécanismes de signalement."
        }
      },
      {
        heading: { en: 'A Vibrant Atmosphere and Strong Demand for Continuity', fr: 'Une Atmosphère Animée et une Forte Demande de Continuité' },
        text: {
          en: 'Students participated enthusiastically and demonstrated a genuine desire to learn more. By the end of the session, many students and teachers requested more regular sessions, stressing the need for ongoing awareness in the school community and proposing that Institut de Goma become a breeding ground for young GBV awareness champions.',
          fr: "Les élèves ont participé avec enthousiasme et manifesté un désir sincère d'en apprendre davantage. À la fin de la session, de nombreux élèves et enseignants ont demandé des sessions plus régulières, proposant que l'Institut de Goma devienne un vivier de jeunes champions de la sensibilisation aux VBG."
        }
      },
      {
        heading: { en: 'The GBV Ambassadors Club', fr: 'Le Club des Ambassadeurs VBG' },
        text: {
          en: 'In response, Women Concern and the school administration agreed to establish a GBV Ambassadors Club, where selected students will be trained and empowered as school-based leaders in the fight against gender-based violence.',
          fr: "En réponse, Women Concern et l'administration scolaire ont convenu de créer un Club des Ambassadeurs VBG, où des élèves sélectionnés seront formés comme leaders scolaires dans la lutte contre les VBG."
        }
      },
    ],
    body2: [
      {
        heading: { en: "A Concerning Observation: Restrictions on Women's Clothing", fr: 'Une Observation Préoccupante : Restrictions Vestimentaires' },
        text: {
          en: "One striking incident was the school's policy prohibiting women in trousers from entering the premises. Our female staff were denied entry and obliged to wrap pagnes over their trousers to access the institution. This raises significant concerns regarding women's freedom of dress, gender-based discrimination, and the contradiction between GBV awareness messages and restrictive norms in educational settings. Women Concern views this as an important advocacy opportunity to initiate progressive conversations toward inclusive, rights-respecting learning environments.",
          fr: "Un incident marquant a été la politique interdisant aux femmes en pantalon d'entrer dans l'établissement. Notre personnel féminin s'est vu refuser l'entrée et a été contraint de s'enrouler des pagnes. Cela soulève des préoccupations sur la liberté vestimentaire, la discrimination de genre, et la contradiction entre les messages de sensibilisation et les normes restrictives encore en vigueur."
        }
      },
      {
        heading: { en: 'Toward Sustained Collaboration', fr: 'Vers une Collaboration Soutenue' },
        text: {
          en: "This closing activity highlighted students' eagerness to learn, their potential as changemakers, and the importance of school-based interventions. Women Concern and the Uwezo Network commit to strengthening collaboration with Institut de Goma through the GBV Ambassadors Club, regular training sessions, modules on GBV prevention including digital violence, and sustained advocacy for safe and inclusive learning spaces. As we conclude the 16 Days of Activism, Women Concern reaffirms its commitment to combating all forms of gender-based violence and empowering young people.",
          fr: "Cette activité a mis en lumière l'enthousiasme des élèves et l'importance des interventions scolaires. Women Concern et le Réseau Uwezo s'engagent à renforcer la collaboration avec l'Institut de Goma à travers le Club des Ambassadeurs VBG, des formations régulières, des modules sur la prévention des VBG numériques, et un plaidoyer pour des espaces d'apprentissage sûrs et inclusifs."
        }
      },
    ],
  },

  {
    id: 7,
    heroImage: uwezo1,
    images: [
      {
        src: uwezo2, caption: ''
      },
      {
        src: uwezo3, caption: ''
      }
    ],
    bg: 'linear-gradient(135deg, #2d1b69 0%, #1a0f3e 100%)', emoji: '🔬',
    authorEmoji: '👨🏿‍💼', author: 'Uwezo Network', date: '7 November 2025',
    category: { en: 'Research & Advocacy', fr: 'Recherche & Plaidoyer' },
    readTime: { en: '4 min read', fr: '4 min de lecture' },
    title: {
      en: 'Uwezo Network Workshop: Launching Study on Unmet Needs of Women Survivors of SGBV in Conflict Settings',
      fr: "Atelier du Réseau Uwezo : Lancement de l'Étude sur les Besoins Non Satisfaits des Survivantes de VSBG en Zone de Conflit"
    },
    excerpt: {
      en: 'On November 7, 2025, the Uwezo Network — founded by Women Concern, FAA and ADJC — held a landmark workshop launching a study on the unmet needs of women survivors of SGBV in North and South Kivu.',
      fr: "Le 7 novembre 2025, le Réseau Uwezo — fondé par Women Concern, FAA et ADJC — a tenu un atelier de lancement d'une étude sur les besoins non satisfaits des survivantes de VSBG au Nord et Sud-Kivu."
    },
    quote: {
      en: 'A coordinated, ethical, and survivor-centered response is not optional — it is the foundation of everything we do.',
      fr: "Une réponse coordonnée, éthique et centrée sur les survivantes n'est pas facultative — c'est le fondement de tout ce que nous faisons."
    },
    body: [
      {
        heading: { en: 'About the Uwezo Network', fr: 'À Propos du Réseau Uwezo' },
        text: {
          en: "The Uwezo Network is a national network of organizations working to combat SGBV, founded by Women Concern (WOCO), Fondation Amani na Afya (FAA), and Action Pour le Développement des Jeunes au Congo (ADJC). The workshop marked the official launch of the study on the unmet needs of women survivors of SGBV in armed conflict contexts in North and South Kivu, and aimed to strengthen members' capacities on the integrated approach and inter-organizational coordination.",
          fr: "Le Réseau Uwezo est un réseau national d'organisations fondé par Women Concern, FAA et ADJC. L'atelier a marqué le lancement officiel de l'étude sur les besoins non satisfaits des survivantes de VSBG dans les contextes de conflit armé au Nord et Sud-Kivu, visant à renforcer les capacités des membres sur l'approche intégrée et la coordination inter-organisationnelle."
        }
      },
      {
        heading: { en: 'Presenting the Research Protocol', fr: 'Présentation du Protocole de Recherche' },
        text: {
          en: 'Mr. Mutoni Fidele from Fondation Amani na Afya (FAA) presented the research protocol, highlighting the methodology as well as the ethical principles, respect, and confidentiality required to protect survivors and ensure the credibility and safety of the research process.',
          fr: 'M. Mutoni Fidele de la Fondation Amani na Afya (FAA) a présenté le protocole de recherche, mettant en avant la méthodologie ainsi que les principes éthiques, le respect et la confidentialité nécessaires pour protéger les survivantes et garantir la crédibilité du processus de recherche.'
        }
      },
      {
        heading: { en: "Training on the Integrated Approach", fr: "Formation sur l'Approche Intégrée" },
        text: {
          en: "Mr. Freddy M. Bisetsa from Women Concern (WOCO) trained participants on the Uwezo Network's integrated approach, which combines social, economic, health, legal, and educational actions to deliver coherent, inclusive, and sustainable responses to survivors' needs.",
          fr: "M. Freddy M. Bisetsa de Women Concern (WOCO) a formé les participants sur l'approche intégrée du Réseau Uwezo, qui combine des actions sociales, économiques, sanitaires, juridiques et éducatives pour des réponses cohérentes, inclusives et durables aux besoins des survivantes."
        }
      },
    ],
    body2: [
      {
        heading: { en: 'A Participatory Field Action Plan', fr: "Un Plan d'Action Terrain Participatif" },
        text: {
          en: "The workshop concluded with the development of a participatory field action plan, facilitated by Mr. Nondo R. Christian, Executive Director of ADJC. This enabled members to fully take ownership of the study's implementation process within the communities.",
          fr: "L'atelier s'est conclu par l'élaboration d'un plan d'action terrain participatif, facilité par M. Nondo R. Christian, Directeur Exécutif de l'ADJC, permettant aux membres de s'approprier pleinement le processus de mise en œuvre au sein des communautés."
        }
      },
      {
        heading: { en: 'Reaffirming a Survivor-Centered Commitment', fr: "Réaffirmer un Engagement Centré sur les Survivantes" },
        text: {
          en: "Through this initiative, the Uwezo Network reaffirms its commitment to a coordinated, ethical, and survivor-centered response, contributing to the fight against sexual and gender-based violence in eastern Democratic Republic of Congo.",
          fr: "À travers cette initiative, le Réseau Uwezo réaffirme son engagement envers une réponse coordonnée, éthique et centrée sur les survivantes, contribuant à la lutte contre les violences sexuelles et basées sur le genre dans l'est de la RDC."
        }
      },
    ],
  },
  {
    id: 8,
    heroImage: launch1,
    images: [
      { src: launch2, caption: '' },
      { src: launch3, caption: '' },
    ],
    bg: 'linear-gradient(135deg, #7c1d6f 0%, #4a0e42 100%)', emoji: '📢',
    authorEmoji: '👩🏾‍💻', author: 'Women Concern Team', date: '25 November 2025',
    category: { en: 'Campaign & Activism', fr: 'Campagne & Activisme' },
    readTime: { en: '3 min read', fr: '3 min de lecture' },
    title: {
      en: 'Launch of the 16 Days of Activism Campaign Against Online GBV',
      fr: "Lancement de la Campagne des 16 Jours d'Activisme Contre les VBG en Ligne"
    },
    excerpt: {
      en: 'On 25 November 2025, Women Concern through the Umoja Network officially launched its #16Days of Activism campaign, placing a special focus on online violence — an emerging and rapidly growing threat in our communities.',
      fr: "Le 25 novembre 2025, Women Concern, à travers le Réseau Umoja, a officiellement lancé sa campagne #16Jours d'Activisme, avec un accent particulier sur les violences en ligne."
    },
    quote: {
      en: "Women's and Girls' Rights Apply Online Too. Stop Cyber Harassment and Digital Exploitation. Umoja Network Takes a Stand.",
      fr: "Les droits des femmes et des filles s'appliquent aussi en ligne. Halte au cyberharcèlement et à l'exploitation numérique. Le Réseau Umoja prend position."
    },
    body: [
      {
        heading: { en: 'A United Campaign Against Online Violence', fr: 'Une Campagne Unie Contre les Violences en Ligne' },
        text: {
          en: "On 25 November 2025, Women Concern, through the Umoja Network, officially launched its campaign for the global #16Days of Activism Against Gender-Based Violence, running until 10 December. This year's edition brings together Women Concern, Fondation Amani & Afya, and Action Pour le Développement des Jeunes au Congo (ADJC). Through this partnership, the campaign aims to amplify the voices of women and girls, with a special focus on the fight against online violence — an emerging and rapidly growing threat in our communities.",
          fr: "Le 25 novembre 2025, Women Concern, à travers le Réseau Umoja, a officiellement lancé sa campagne pour les #16Jours mondiaux d'Activisme contre les Violences Basées sur le Genre, se déroulant jusqu'au 10 décembre. Cette édition réunit Women Concern, Fondation Amani & Afya et l'ADJC. La campagne vise à amplifier les voix des femmes et des filles, avec un focus particulier sur la lutte contre les violences en ligne."
        }
      },
      {
        heading: { en: 'Community Mobilization at the Heart of the Campaign', fr: 'La Mobilisation Communautaire au Cœur de la Campagne' },
        text: {
          en: "Aligned with the 2025 international theme, the Umoja Network will place strong emphasis on community mobilization, with upcoming activities planned in universities, secondary schools, and within the network itself through capacity-building for members working on gender justice and human rights.",
          fr: "En lien avec le thème international 2025, le Réseau Umoja mettra l'accent sur la mobilisation communautaire, avec des activités prévues dans les universités, lycées, et au sein du réseau lui-même, à travers le renforcement des capacités des membres travaillant sur la justice de genre et les droits humains."
        }
      },
      {
        heading: { en: 'Key Campaign Activities', fr: 'Activités Clés de la Campagne' },
        text: {
          en: "During the 16 Days of Activism, the campaign will roll out: training workshops to strengthen the skills and response capacity of Umoja Network members; university awareness talks to engage young people on digital gender-based violence; outreach sessions targeting secondary school students; and a digital awareness campaign to reach broader audiences throughout the 16 days.",
          fr: "Durant les 16 Jours, la campagne déploiera : des ateliers de formation pour renforcer les capacités des membres du Réseau Umoja ; des conférences de sensibilisation dans les universités sur les VBG numériques ; des sessions de sensibilisation dans les lycées ; et une campagne de sensibilisation numérique pour toucher un public plus large."
        }
      },
    ],
    body2: [
      {
        heading: { en: 'Building Safer, More Inclusive Communities', fr: 'Construire des Communautés Plus Sûres et Inclusives' },
        text: {
          en: "Through this campaign, Women Concern and its partners reaffirm their commitment to building safer, more inclusive, and more resilient communities — where every woman and girl can fully enjoy her rights both offline and online. Further updates will be shared as activities unfold across different communities.",
          fr: "À travers cette campagne, Women Concern et ses partenaires réaffirment leur engagement à construire des communautés plus sûres, inclusives et résilientes — où chaque femme et fille peut pleinement jouir de ses droits hors ligne et en ligne. Des mises à jour seront partagées au fur et à mesure du déroulement des activités."
        }
      },
    ],
  },
  {
    id: 9,
    heroImage: youth1,
    images: [
      { src: youth2, caption: '' },
      { src: youth3, caption: '' },
    ],
    bg: 'linear-gradient(135deg, #0f4c75 0%, #063050 100%)', emoji: '🎤',
    authorEmoji: '👩🏿', author: 'Women Concern Team', date: '10 December 2025',
    category: { en: 'Youth & Activism', fr: 'Jeunesse & Activisme' },
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: {
      en: 'Youth Voices Rising: Women Concern Concludes 16 Days of Activism at Institut Mikeno, Goma',
      fr: "Les Voix de la Jeunesse S'élèvent : Women Concern Clôture les 16 Jours d'Activisme à l'Institut Mikeno, Goma"
    },
    excerpt: {
      en: 'On December 10, 2025, Women Concern through the Uwezo Network brought a powerful message of prevention and empowerment to 600 students and teachers at Institut Mikeno in Goma — uniting youth voices against digital violence.',
      fr: "Le 10 décembre 2025, Women Concern à travers le Réseau Uwezo a apporté un puissant message de prévention à 600 élèves et enseignants de l'Institut Mikeno à Goma."
    },
    quote: {
      en: 'We would like to have a formal framework of collaboration. It would be good to build our capacity as a student committee so we can sensitize our peers.',
      fr: "Nous aimerions avoir un cadre formel de collaboration. Il serait bien de renforcer notre capacité en tant que comité d'élèves pour sensibiliser nos pairs."
    },
    body: [
      {
        heading: { en: `Engaging Learning Sessions and Open Discussions`, fr: `Sessions d'Apprentissage Engageantes et Discussions Ouvertes` },
        text: {
          en: "As we closed the global 16 Days of Activism Against GBV, Women Concern — through the Uwezo Network — brought a powerful message of prevention and empowerment to 600 students and teachers of Institut Mikeno in Goma. The session combined learning, dialogue, and youth engagement around this year's theme: 'Unite to End Digital Violence Against All Women and Girls.' The programme covered an overview of Sexual and Gender-Based Violence (SGBV), a detailed presentation on the annual global theme, and an interactive Question-and-Answer session. Teachers and students demonstrated strong interest, asking critical questions and seeking guidance on prevention and response.",
          fr: "À l'occasion de la clôture des 16 Jours mondiaux d'Activisme contre les VBG, Women Concern — à travers le Réseau Uwezo — a apporté un puissant message de prévention et d'autonomisation à 600 élèves et enseignants de l'Institut Mikeno à Goma. La session a combiné apprentissage, dialogue et engagement des jeunes autour du thème : 'Unis pour mettre fin aux violences numériques contre toutes les femmes et filles.'"
        }
      },
      {
        heading: { en: "Girls' Voices: A Revealing Reality", fr: 'Les Voix des Filles : Une Réalité Révélatrice' },
        text: {
          en: "A striking observation during the session was the hesitation many girls showed in speaking publicly. Several approached facilitators privately to ask questions or share concerns. One girl told our team: 'For me, I prefer to keep your contacts so I can speak to you privately.' This highlights possible hidden GBV cases and persistent social norms that restrict girls from speaking openly even in safe spaces.",
          fr: "Une observation frappante durant la session était l'hésitation de nombreuses filles à parler en public. Plusieurs ont approché les facilitatrices en privé. Une fille a confié à notre équipe : 'Pour moi, je préfère garder vos contacts pour pouvoir vous parler en privé.' Cela met en évidence des cas possibles de VBG cachés et des normes sociales persistantes."
        }
      },
      {
        heading: { en: 'Teachers Taking Leadership', fr: 'Les Enseignants Prennent le Leadership' },
        text: {
          en: "One teacher expressed a strong commitment to sustaining GBV awareness in the school: 'From now on, I will always dedicate a few minutes during my lessons to sensitize students on GBV.' Such leadership helps extend the campaign's impact far beyond a single outreach activity.",
          fr: "Un enseignant a exprimé un fort engagement à maintenir la sensibilisation aux VBG dans l'école : 'Désormais, je consacrerai toujours quelques minutes pendant mes cours pour sensibiliser les élèves aux VBG.' Un tel leadership aide à étendre l'impact de la campagne bien au-delà d'une seule activité."
        }
      },
    ],
    body2: [
      {
        heading: { en: 'Youth Leadership Through GBV Ambassador Clubs', fr: 'Leadership Jeune à Travers les Clubs Ambassadeurs VBG' },
        text: {
          en: "Students showed exceptional interest in joining Women Concern's Anti-GBV Ambassador Clubs. The student representative shared: 'We would like to have a formal framework of collaboration. It would be good to build our capacity as a student committee so we can sensitize our peers.' This demonstrates a clear motivation among young people to lead the fight against GBV within their own school community.",
          fr: "Les élèves ont montré un intérêt exceptionnel pour rejoindre les Clubs Ambassadeurs Anti-VBG de Women Concern. La représentante des élèves a partagé : 'Nous aimerions avoir un cadre formel de collaboration pour renforcer nos capacités et sensibiliser nos pairs.' Cela démontre une forte motivation des jeunes à mener la lutte contre les VBG."
        }
      },
      {
        heading: { en: "The Gender Literary Café Programme & Call to Action", fr: "Le Programme Genre Literary Café & Appel à l'Action" },
        text: {
          en: "Women Concern continues GBV prevention work year-round through the Gender Literary Café — a programme bringing structured activism and learning into schools and universities through conferences, debates, teacher and student trainings, safe spaces for dialogue, and continuous awareness and leadership development. Women Concern invites educational institutions, civil society organizations, donors, development partners, community leaders, and youth-focused networks to collaborate in scaling up GBV prevention and youth leadership initiatives across the Kivus.",
          fr: "Women Concern poursuit le travail de prévention des VBG toute l'année à travers le Genre Literary Café — un programme apportant l'activisme structuré dans les écoles à travers des conférences, débats, formations et espaces sûrs. Women Concern invite les institutions éducatives, organisations de la société civile, donateurs, partenaires et réseaux axés sur la jeunesse à collaborer pour amplifier les initiatives de prévention des VBG et de leadership jeune à travers les Kivus."
        }
      },
    ],
  },
]

const post = computed(() => allPosts.find(p => p.id === props.postId) || allPosts[0])
const otherPosts = computed(() => allPosts.filter(p => p.id !== props.postId).slice(0, 2))
</script>