<template>
  <div class="pb-20 min-h-screen bg-white">

    <!-- Breadcrumb -->
    <div class="pt-24 bg-white border-b border-gray-100 px-6 lg:px-10">
      <div class="max-w-6xl mx-auto py-3 flex items-center gap-2 text-xs text-gray-400 font-medium">
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
        <span class="text-brand-green font-semibold">{{ t({ en: 'Stories', fr: 'Histoires' }) }}</span>
      </div>
    </div>

    <!-- Header -->
    <div class="max-w-6xl mx-auto px-6 lg:px-10 pt-14 pb-10">
      <span class="section-label">{{ t({ en: 'Our Stories', fr: 'Nos Histoires' }) }}</span>
      <h1 class="font-display font-bold text-gray-900 text-4xl md:text-5xl mt-1 mb-3">
        {{ t({ en: 'From the Field', fr: 'Du Terrain' }) }}
      </h1>
      <p class="text-gray-400 max-w-xl text-base leading-relaxed">
        {{ t({
          en: `Real stories of change from Goma and Eastern DRC — written by our teams and the women we serve.`,
          fr: `De vraies histoires de changement de Goma et de l'est de la RDC — écrites par nos équipes et les femmes que
        nous servons.`
        }) }}
      </p>
    </div>

    <!-- Cards grid -->
    <div class="max-w-6xl mx-auto px-6 lg:px-10">
      <div class="grid md:grid-cols-2 gap-8">
        <article v-for="post in posts" :key="post.id" @click="$emit('navigate', 'blog-' + post.id)"
          class="group cursor-pointer bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

          <!-- Card image — real img if provided, else gradient + placeholder overlay -->
          <div class="h-52 relative overflow-hidden">
            <!-- Real image -->
            <img v-if="post.image" :src="post.image" :alt="t(post.title)"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

            <!-- Placeholder when no image -->
            <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2"
              :style="{ background: post.bg }">
              <div class="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" stroke-width="1.5"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <p class="text-white/40 text-xs font-medium">Add cover image</p>
            </div>

            <!-- Gradient overlay always on top for readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            <!-- Category + date badges -->
            <div class="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
              <span
                class="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                {{ post.emoji }} {{ t(post.category) }}
              </span>
              <span class="text-white/60 text-xs bg-black/20 backdrop-blur-sm rounded-full px-2.5 py-1">{{ post.date
              }}</span>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-6">
            <h2
              class="font-display font-bold text-gray-900 text-xl leading-tight mb-3 group-hover:text-brand-green transition-colors">
              {{ t(post.title) }}
            </h2>
            <p class="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
              {{ t(post.excerpt) }}
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-brand-green/10 flex items-center justify-center text-sm">{{
                  post.authorEmoji }}</span>
                <div>
                  <p class="text-gray-700 text-xs font-semibold">{{ post.author }}</p>
                  <p class="text-gray-400 text-xs">{{ t(post.readTime) }}</p>
                </div>
              </div>
              <span
                class="text-brand-green text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                {{ t({ en: 'Read', fr: 'Lire' }) }}
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none"
                  stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
defineEmits(['navigate'])
const { t } = useLang()
import closing1 from '../assets/blogs/closing1.png'
import launch1 from '../assets/blogs/launch1.jpg'
import uwezo1 from '../assets/blogs/uwezo1.jpeg'
import youth1 from '../assets/blogs/youth1.jpg'





// To add a real cover image to any post:
// 1. Put your image in src/assets/images/blog/
// 2. Import it:  import goma from '../assets/images/blog/goma.jpg'
// 3. Set  image: goma  on the post object below
// Leave  image: null  to keep the gradient placeholder.

const posts = [
  {
    id: 1,
    image: null,
    bg: 'linear-gradient(135deg, #1E4D35 0%, #163a28 100%)', emoji: '🚨',
    authorEmoji: '👩🏾', author: 'Marie K.', date: 'March 2024',
    category: { en: 'Emergency Response', fr: 'Réponse d\'Urgence' },
    readTime: { en: '4 min read', fr: '4 min de lecture' },
    title: { en: 'Standing With Goma in Its Darkest Hour', fr: 'Aux Côtés de Goma dans Son Heure la Plus Sombre' },
    excerpt: { en: 'As conflict intensifies in Eastern DRC, Women Concern teams are on the ground delivering emergency relief to thousands of displaced women and children.', fr: 'Alors que le conflit s\'intensifie dans l\'est de la RDC, les équipes de Women Concern sont sur le terrain pour apporter une aide d\'urgence.' },
  },
  {
    id: 2,
    image: null,
    bg: 'linear-gradient(135deg, #1a4530 0%, #0f2e1e 100%)', emoji: '🌸',
    authorEmoji: '👩🏽', author: 'Amina T.', date: 'February 2024',
    category: { en: 'Malkia Pads', fr: 'Malkia Pads' },
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: { en: 'How a Pack of Pads Keeps a Girl in School', fr: 'Comment un Paquet de Serviettes Garde une Fille à l\'École' },
    excerpt: { en: 'Meet Zawadi, 14, who missed school every month until Malkia Pads reached her village. Her story is one of 500 — and counting.', fr: 'Rencontrez Zawadi, 14 ans, qui manquait l\'école chaque mois jusqu\'à ce que Malkia Pads atteigne son village.' },
  },
  {
    id: 3,
    image: null,
    bg: 'linear-gradient(135deg, #1E4D35 0%, #2d5c3e 100%)', emoji: '💼',
    authorEmoji: '👩🏿', author: 'Grace N.', date: 'January 2024',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    readTime: { en: '6 min read', fr: '6 min de lecture' },
    title: { en: 'From Displacement Camp to Business Owner', fr: 'Du Camp de Déplacés à Chef d\'Entreprise' },
    excerpt: { en: 'After fleeing conflict with nothing, Esperance used our microloan program to build a thriving tailoring business that now employs three other women.', fr: 'Après avoir fui le conflit sans rien, Espérance a utilisé notre programme de microcrédit pour créer une entreprise prospère.' },
  },
  {
    id: 4,
    image: null,
    bg: 'linear-gradient(135deg, #163a28 0%, #1E4D35 100%)', emoji: '✨',
    authorEmoji: '👩🏻', author: 'Claire M.', date: 'December 2023',
    category: { en: 'GLFX Program', fr: 'Programme GLFX' },
    readTime: { en: '3 min read', fr: '3 min de lecture' },
    title: { en: 'GLFX: The Next Generation of Women Leaders', fr: 'GLFX : La Prochaine Génération de Femmes Leaders' },
    excerpt: { en: 'Our Girls Leadership & Futures Exchange program has graduated its first cohort of 40 young women, ready to lead in their communities and beyond.', fr: 'Notre programme GLFX a diplômé sa première cohorte de 40 jeunes femmes, prêtes à diriger dans leurs communautés.' },
  },
  {
    id: 5,
    image: null,
    bg: 'linear-gradient(135deg, #004080 0%, #00264d 100%)', emoji: '🤝',
    authorEmoji: '👨🏽‍💼', author: 'Jean P.', date: 'April 2024',
    category: { en: 'Support & Partnership', fr: 'Soutien et Partenariat' },
    readTime: { en: '3 min read', fr: '3 min de lecture' },
    title: { en: 'Our Donors & Partners', fr: 'Nos Donateurs et Partenaires' },
    excerpt: {
      en: 'Together with our donors and partners, we build sustainable solutions that empower communities and create lasting impact.',
      fr: 'Avec nos donateurs et partenaires, nous construisons des solutions durables qui autonomisent les communautés et créent un impact durable.'
    },
  },
  {
    id: 6,
    image: closing1,
    bg: 'linear-gradient(135deg, #1E4D35 0%, #0f3d26 100%)', emoji: '🎓',
    authorEmoji: '👩🏿', author: 'Women Concern Team', date: 'December 2025',
    category: { en: 'Advocacy & Awareness', fr: 'Plaidoyer & Sensibilisation' },
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: {
      en: 'Closing the 16 Days of Activism: Reaching Over 1,000 Students at Institut de Goma',
      fr: 'Clôture des 16 Jours d\'Activisme : Plus de 1 000 Élèves Touchés à l\'Institut de Goma'
    },
    excerpt: {
      en: 'On the final day of the 16 Days of Activism Against GBV, Women Concern and the Uwezo Network engaged nearly 1,000 students at Institut de Goma — sparking the creation of a GBV Ambassadors Club.',
      fr: 'Le dernier jour des 16 Jours d\'Activisme contre les VBG, Women Concern et le Réseau Uwezo ont engagé près de 1 000 élèves à l\'Institut de Goma — donnant naissance à un Club d\'Ambassadeurs VBG.'
    },
  },
  {
    id: 7,
    image: uwezo1,
    bg: 'linear-gradient(135deg, #2d1b69 0%, #1a0f3e 100%)', emoji: '🔬',
    authorEmoji: '👨🏿‍💼', author: 'Uwezo Network', date: 'November 2025',
    category: { en: 'Research & Advocacy', fr: 'Recherche & Plaidoyer' },
    readTime: { en: '4 min read', fr: '4 min de lecture' },
    title: {
      en: 'Uwezo Network Launches Study on Unmet Needs of Women Survivors of SGBV in Conflict Settings',
      fr: 'Le Réseau Uwezo Lance une Étude sur les Besoins Non Satisfaits des Survivantes de VSBG en Zone de Conflit'
    },
    excerpt: {
      en: 'On November 7, 2025, the Uwezo Network held a landmark workshop launching a study on the unmet needs of women survivors of SGBV in North and South Kivu, while strengthening inter-organizational coordination among its members.',
      fr: 'Le 7 novembre 2025, le Réseau Uwezo a tenu un atelier marquant le lancement d\'une étude sur les besoins non satisfaits des survivantes de VSBG au Nord et Sud-Kivu, tout en renforçant la coordination inter-organisationnelle.'
    },
  },
  {
    id: 8,
    image: launch1,
    bg: 'linear-gradient(135deg, #7c1d6f 0%, #4a0e42 100%)', emoji: '📢',
    authorEmoji: '👩🏾‍💻', author: 'Women Concern Team', date: '25 November 2025',
    category: { en: 'Campaign & Activism', fr: 'Campagne & Activisme' },
    readTime: { en: '3 min read', fr: '3 min de lecture' },
    title: {
      en: `Launch of the 16 Days of Activism Campaign Against Online GBV`,
      fr: `Lancement de la Campagne des 16 Jours d'Activisme Contre les VBG en Ligne`
    },
    excerpt: {
      en: `On 25 November 2025, Women Concern through the Umoja Network officially launched its #16Days of Activism campaign, placing a special focus on online violence — an emerging and rapidly growing threat in our communities.`,
      fr: `Le 25 novembre 2025, Women Concern, à travers le Réseau Umoja, a lancé sa campagne #16Jours d'Activisme avec un accent particulier sur les violences en ligne — une menace émergente et croissante dans nos communautés.`
    },
  },
  {
    id: 9, image: youth1,
    bg: 'linear-gradient(135deg, #0f4c75 0%, #063050 100%)', emoji: '🎤',
    authorEmoji: '👩🏿', author: 'Women Concern Team', date: '10 December 2025',
    category: { en: 'Youth & Activism', fr: 'Jeunesse & Activisme' },
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: { en: 'Youth Voices Rising: Women Concern Concludes 16 Days of Activism at Institut Mikeno, Goma', fr: "Les Voix de la Jeunesse S'élèvent : Women Concern Clôture les 16 Jours d'Activisme à l'Institut Mikeno, Goma" },
    excerpt: { en: 'On December 10, 2025, Women Concern through the Uwezo Network brought a powerful message of prevention and empowerment to 600 students and teachers at Institut Mikeno in Goma — uniting youth voices against digital violence.', fr: "Le 10 décembre 2025, Women Concern à travers le Réseau Uwezo a apporté un puissant message de prévention à 600 élèves et enseignants de l'Institut Mikeno à Goma." },
  },
]

</script>