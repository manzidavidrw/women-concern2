<template>
   <div class="min-h-screen bg-gray-50"

    <!-- Board Members Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-brand-green/20 rounded-full px-4 py-1.5 bg-brand-green/5">
            <span class="text-xl">🏛️</span>
            <span class="text-brand-green text-xs font-medium tracking-widest uppercase">Board of Directors</span>
          </div>
          <h2 class="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {{ t({ en: 'Board of Directors', fr: 'Conseil d\'Administration' }) }}
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            {{ t({
              en: 'Strategic leaders ensuring we create lasting impact.',
              fr: 'Leaders stratégiques assurant un impact durable.'
            }) }}
          </p>
        </div>

        <!-- Board Members Grid -->
        <div class="grid lg:grid-cols-2 gap-8 mb-12">
          <div v-for="member in boardMembers" :key="member.name" class="group">

            <!-- Card Container with dynamic height -->
            <div
              class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              :class="{ 'h-auto': expandedBios[member.name] }">

              <!-- Header with gradient background -->
              <div class="relative bg-gradient-to-br from-brand-green to-brand-green/80 p-8 pb-20 flex-shrink-0">
                <div class="absolute inset-0 opacity-10"
                  style="background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.06%22/%3E%3C/svg%3E')" />

                <div class="relative z-10 flex items-start gap-6">
                  <!-- Photo -->
                  <div class="relative flex-shrink-0">
                    <div class="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-xl">
                      <img :src="member.photo" :alt="member.name"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <!-- Decorative badge -->
                    <div
                      class="absolute -bottom-3 -right-3 w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center shadow-lg">
                      <span class="text-xl">🏛️</span>
                    </div>
                  </div>

                  <!-- Name & Title -->
                  <div class="flex-1 pt-2">
                    <h3 class="font-display font-bold text-2xl text-white mb-2">
                      {{ member.name }}
                    </h3>
                    <p class="text-brand-yellow font-semibold text-sm mb-4">{{ t(member.title) }}</p>

                    <!-- Quick Links -->
                    <div class="flex gap-2">
                      <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer"
                        class="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:scale-110">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>

                      <a v-if="member.email" :href="'mailto:' + member.email"
                        class="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:scale-110">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>

                      <a v-if="member.website" :href="member.website" target="_blank" rel="noopener noreferrer"
                        class="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:scale-110">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Biography Section with fixed height for collapsed state -->
              <div class="p-8 pt-6 flex-1 flex flex-col">

                <!-- Bio content wrapper -->
                <div class="flex-1">
                  <!-- Preview Paragraphs (first 3) -->
                  <div class="space-y-4 mb-4">
                    <p v-for="(paragraph, index) in getPreviewParagraphs(member.bio)" :key="'preview-' + index"
                      class="text-gray-600 text-sm leading-relaxed">
                      {{ paragraph }}
                    </p>
                  </div>

                  <!-- Expanded Paragraphs (remaining) -->
                  <transition enter-active-class="transition-all duration-500 ease-out"
                    enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition-all duration-300 ease-in"
                    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
                    <div v-show="expandedBios[member.name]" class="space-y-4 mb-4">
                      <p v-for="(paragraph, index) in getRemainingParagraphs(member.bio)" :key="'full-' + index"
                        class="text-gray-600 text-sm leading-relaxed">
                        {{ paragraph }}
                      </p>
                    </div>
                  </transition>

                  <!-- Read More / Read Less Button -->
                  <button v-if="hasMoreContent(member.bio)" @click="toggleBio(member.name)"
                    class="inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:gap-3 transition-all mt-2">
                    <span>
                      {{
                        expandedBios[member.name]
                          ? t({ en: 'Read Less', fr: 'Lire Moins' })
                          : t({ en: 'Read More', fr: 'Lire Plus' })
                      }}
                    </span>

                    <svg class="w-4 h-4 transition-transform duration-300"
                      :class="expandedBios[member.name] ? 'rotate-180' : ''" fill="none" stroke="currentColor"
                      stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <!-- Bottom accent - always at bottom -->
                <div class="mt-8 pt-6 border-t border-gray-100 flex-shrink-0">
                  <div class="h-1 w-20 bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green rounded-full">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>

    <!-- Team Members Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-brand-green/20 rounded-full px-4 py-1.5 bg-brand-green/5">
            <span class="text-xl">👥</span>
            <span class="text-brand-green text-xs font-medium tracking-widest uppercase">Our Team</span>
          </div>
          <h2 class="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {{ t({ en: 'Meet Our Team', fr: 'Rencontrez Notre Équipe' }) }}
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            {{ t({
              en: 'The passionate individuals working every day on the ground.',
              fr: 'Les personnes passionnées qui travaillent chaque jour sur le terrain.'
            }) }}
          </p>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {{ t({
              en: `At Women Concern, our staff are more than colleagues—they are the driving force behind every success,
            every empowered woman, and every positive change in the communities we serve. Their dedication, expertise,
            and passion make our mission possible, turning vision into action and creating lasting impact for women,
            girls, and families across the Great Lakes region.`,
              fr: `Chez Women Concern, notre personnel est bien plus que des collègues—ils sont la force motrice derrière
            chaque réussite, chaque femme autonomisée et chaque changement positif dans les communautés que nous
            servons. Leur dévouement, leur expertise et leur passion rendent notre mission possible, transformant la
            vision en action et créant un impact durable pour les femmes, les filles et les familles à travers la région
            des Grands Lacs.`
            }) }}
          </p>

        </div>

        <!-- Team Members Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in teamMembers" :key="member.name"
            class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">

            <!-- Photo -->
            <div class="relative mb-5 overflow-hidden rounded-xl">
              <div class="aspect-square overflow-hidden bg-gradient-to-br from-brand-green/5 to-brand-yellow/5">
                <img :src="member.photo" :alt="member.name"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              <!-- Department badge -->
              <div class="absolute top-4 right-4">
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-brand-green shadow-lg">
                  <span>{{ member.emoji }}</span>
                  <span>{{ t(member.department) }}</span>
                </span>
              </div>
            </div>

            <!-- Name & Position -->
            <div class="mb-4">
              <h3 class="font-display font-bold text-xl text-gray-900 mb-1">{{ member.name }}</h3>
              <p class="text-brand-green font-semibold text-sm mb-2">{{ t(member.position) }}</p>
              <p v-if="member.location" class="text-gray-500 text-xs flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ member.location }}</span>
              </p>
            </div>

            <!-- Bio -->
            <p v-if="member.bio" class="text-gray-600 text-sm leading-relaxed">{{ t(member.bio) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Our Team CTA -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/20 mb-6">
          <span class="text-3xl">💼</span>
        </div>
        <h2 class="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
          {{ t({ en: 'Join Our Team', fr: 'Rejoignez Notre Équipe' }) }}
        </h2>
        <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          {{ t({
            en: `We\'re always looking for passionate individuals to join our mission. Check out our current openings.`,
            fr: `Nous recherchons toujours des personnes passionnées pour rejoindre notre mission. Consultez nos postes
          disponibles.`
          }) }}
        </p>
        <a href="#careers"
          class="inline-flex items-center gap-2 bg-brand-yellow text-brand-green font-semibold px-8 py-4 rounded-full text-sm hover:brightness-105 transition-all shadow-lg">
          <span>{{ t({ en: 'View Open Positions', fr: 'Voir les Postes Disponibles' }) }}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLang } from '../composables/useLang.js'
import Myriam from '../assets/Myriam.jpg'
import Ericson from '../assets/Ericson.jpg'
import Prof from '../assets/prof.jpg'
import Rox from '../assets/Rox.jpg'
import Freddy from '../assets/Freddy.jpg'
import gloria from '../assets/gloria.jpeg'
import esther from '../assets/esther.jpeg'
import faustine from '../assets/faustine.jpeg'
import Blaise from '../assets/Blaise.jpeg'
import ange from '../assets/ange.jpeg'

const { t } = useLang()

// Track which bios are expanded
const expandedBios = ref({})

// Toggle bio expansion
const toggleBio = (name) => {
  expandedBios.value[name] = !expandedBios.value[name]
}

// Get first 3 paragraphs for preview
const getPreviewParagraphs = (bio) => {
  const text = typeof bio === 'string' ? bio : t(bio)
  const paragraphs = text.split('\n\n').filter(p => p.trim())
  return paragraphs.slice(0, 3)
}

// Get remaining paragraphs after first 3
const getRemainingParagraphs = (bio) => {
  const text = typeof bio === 'string' ? bio : t(bio)
  const paragraphs = text.split('\n\n').filter(p => p.trim())
  return paragraphs.slice(3)
}

// Check if there's more content beyond first 3 paragraphs
const hasMoreContent = (bio) => {
  const text = typeof bio === 'string' ? bio : t(bio)
  const paragraphs = text.split('\n\n').filter(p => p.trim())
  return paragraphs.length > 3
}

const boardMembers = [
  {
    name: 'Myriam Perez Dumoulin',
    title: {
      en: 'Board Chairperson',
      fr: 'Présidente du Conseil d\'Administration'
    },
    photo: Myriam,
    bio: {
      en: `With over a decade of diverse experience, Myriam has led projects and training programs with a particular focus on the global South. As a Project Manager and Trainer at iCRA since 2020, she supported education organizations through counselling, coaching, and training initiatives. Her background includes roles and skills in project management, curriculum design and scientific communication in agricultural education.

Myriam is a Spanish professional living in France, born in the US, working for a Dutch organization that's active in Africa. With this mix of cultures, she really has a globe-trotter spirit! Her international experience in Malawi, Colombia, and Yemen has broadened her perspective even more, particularly on issues like food security, water management and rural development. Myriam's journey reflects a passion for driving positive change with creative methods and approaches at a global scale. She speaks English, Spanish and French fluently.

At iCRA, Myriam designs and leads impactful projects and training programs that empower individuals, businesses, and education organizations in the agricultural sector, particularly in Benin and Burundi. She is the coordinator of the Making Research Work course and focuses on providing expert counselling, coaching, and training services to support their growth and success in transforming food systems.`,

      fr: `Avec plus d'une décennie d'expérience diversifiée, Myriam a dirigé des projets et des programmes de formation avec un accent particulier sur les pays du Sud. En tant que cheffe de projet et formatrice à iCRA depuis 2020, elle a soutenu des organisations éducatives grâce à des initiatives de conseil, d'accompagnement et de formation. Son parcours comprend des compétences en gestion de projets, en conception de programmes éducatifs et en communication scientifique dans le domaine de l'enseignement agricole.

Myriam est une professionnelle espagnole vivant en France, née aux États-Unis, et travaillant pour une organisation néerlandaise active en Afrique. Avec ce mélange de cultures, elle possède véritablement un esprit de globe-trotteuse ! Son expérience internationale au Malawi, en Colombie et au Yémen a encore élargi sa perspective, notamment sur des questions telles que la sécurité alimentaire, la gestion de l'eau et le développement rural. Le parcours de Myriam reflète une passion pour le changement positif grâce à des méthodes et approches créatives à l'échelle mondiale. Elle parle couramment l'anglais, l'espagnol et le français.

À iCRA, Myriam conçoit et dirige des projets et programmes de formation à fort impact qui renforcent les capacités des individus, des entreprises et des organisations éducatives dans le secteur agricole, notamment au Bénin et au Burundi. Elle est coordinatrice du cours « Making Research Work » et se concentre sur la fourniture de services experts de conseil, de coaching et de formation afin de soutenir leur croissance et leur réussite dans la transformation des systèmes alimentaires.`
    },
    website: '',
    linkedin: '',
    email: ''
  },
  {
    name: 'Erickson BISETSA',
    title: {
      en: 'Board Member',
      fr: 'Membre du Conseil d\'Administration'
    },
    photo: Ericson,
    bio: {
      en: `My name is Erickson BISETSA, and I currently serve as Country Director for Tearfund-UK in South Sudan. Tearfund is a UK-based Christian international charity that partners with local actors in over 50 countries to address the root causes of poverty. In South Sudan, our work focuses on both life-saving humanitarian interventions and building household resilience.

I have been engaged in the humanitarian and development sector since 2010, working with several international NGOs including World Vision International, American Refugee Committee, Danish Refugee Council, Action Against Hunger, UNDP, and Tearfund. My experience spans across countries such as Rwanda, the Central African Republic, and South Sudan.

I look forward to exploring how we can collaborate to support the important work of Women Concern in the DRC.`,

      fr: `Je m'appelle Erickson BISETSA et je suis actuellement Directeur Pays de Tearfund-UK au Soudan du Sud. Tearfund est une organisation caritative chrétienne internationale basée au Royaume-Uni qui collabore avec des acteurs locaux dans plus de 50 pays afin de s'attaquer aux causes profondes de la pauvreté. Au Soudan du Sud, notre travail se concentre à la fois sur des interventions humanitaires vitales et sur le renforcement de la résilience des ménages.

Je travaille dans le secteur humanitaire et du développement depuis 2010, avec plusieurs ONG internationales, notamment World Vision International, American Refugee Committee, Danish Refugee Council, Action Against Hunger, le PNUD et Tearfund. Mon expérience couvre plusieurs pays, dont le Rwanda, la République centrafricaine et le Soudan du Sud.

Je me réjouis d'explorer les possibilités de collaboration afin de soutenir le travail important de Women Concern en RDC.`
    },
    website: '',
    linkedin: '',
    email: ''
  },
  {
    name: 'Prof. Sarah Peck',
    title: {
      en: 'Board Member',
      fr: 'Membre du Conseil d\'Administration'
    },
    photo: Prof,
    bio: {
      en: `I'm an assistant professor in Human Geography at Northumbria University, and part of the Centre for Global Development. My work is centred on my interests in civic space, migration and global development and collaborative research methods. I'm also particularly interested in the use of archives and archival co-creation as a method for thinking about global development.

I'm currently the Programme Lead for the MSc Global Development programme at Northumbria University. I feel privileged to be involved with Women Concern, albeit in a very small way, and look forward to supporting as best as I can.`,

      fr: `Je suis professeure assistante en géographie humaine à l'Université de Northumbria et membre du Centre for Global Development. Mon travail se concentre sur mes domaines d'intérêt tels que l'espace civique, la migration et le développement mondial, ainsi que sur les méthodes de recherche collaborative. Je m'intéresse particulièrement à l'utilisation des archives et à la co-création archivistique comme approche pour réfléchir au développement mondial.

Je suis actuellement responsable du programme de Master (MSc) en Développement Global à l'Université de Northumbria. Je me sens privilégiée d'être associée à Women Concern, même de manière modeste, et je me réjouis de pouvoir apporter mon soutien autant que possible.`
    },
    website: '',
    linkedin: '',
    email: ''
  },
  {
    name: 'Rox Madeira',
    title: {
      en: 'Board Member',
      fr: 'Membre du Conseil d\'Administration'
    },
    photo: Rox,
    bio: {
      en: `I am a community herbalist, human rights activist, and founding director of a grassroots herbal non-profit Rox Madeira Movement in Thyme. We work in particular with people seeking sanctuary and community well-being in Scotland and collaborate with a project supporting people stuck at the border and attempting to make the dangerous crossing from France to the UK.

I have a personal focus on women's rights and wellbeing. I host a podcast where I speak with activists and humanitarian workers around the world as well as herbalists, with the aim of encouraging reconnection to the land, health sovereignty, and global solidarity.`,

      fr: `Je suis herboriste communautaire, militante des droits humains et directrice fondatrice de l'organisation communautaire à but non lucratif « Movement in Thyme ». Nous travaillons particulièrement avec des personnes cherchant refuge et bien-être communautaire en Écosse et collaborons avec un projet qui soutient les personnes bloquées à la frontière et tentant de traverser de la France vers le Royaume-Uni.

Je m'intéresse particulièrement aux droits et au bien-être des femmes. J'anime également un podcast dans lequel je discute avec des militants, des travailleurs humanitaires du monde entier et des herboristes, afin d'encourager la reconnexion à la terre, la souveraineté en matière de santé et la solidarité mondiale.`
    },
    linkedin: '',
    email: ''
  }
]

const teamMembers = [
  {
    name: 'Freddy M. BISETSA',
    position: {
      en: 'Founder & Executive Director',
      fr: 'Fondateur & Directeur Exécutif'
    },
    department: { en: 'Leadership', fr: 'Direction' },
    emoji: '⭐',
    photo: Freddy,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Leading Women Concern with a vision to empower women and girls across Eastern DRC through sustainable programs and community-driven initiatives.',
      fr: 'Dirige Women Concern avec une vision d\'autonomiser les femmes et les filles dans l\'est de la RDC à travers des programmes durables et des initiatives communautaires.'
    }
  },
  {
    name: 'Esther NSHOBOLE',
    position: {
      en: 'Associate Project Manager',
      fr: 'Gestionnaire de Projet Associée'
    },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '📋',
    photo: esther,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Coordinates program implementation and ensures quality delivery of services to beneficiaries across all Women Concern projects.',
      fr: 'Coordonne la mise en œuvre des programmes et assure une prestation de services de qualité aux bénéficiaires à travers tous les projets de Women Concern.'
    }
  },
  {
    name: 'Gloria CHABENE',
    position: {
      en: 'Associate Project Manager & Deputy Coordinator of GLFx Kivu',
      fr: 'Gestionnaire de Projet Associée & Coordinatrice Adjointe de GLFx Kivu'
    },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '💰',
    photo: gloria,
    location: 'Goma, DRC',
    bio: {
      en: 'Manages programs and co-leads the Girls Leadership & Futures Exchange initiative, empowering young women through education and leadership development.',
      fr: 'Gère les programmes et co-dirige l\'initiative Girls Leadership & Futures Exchange, autonomisant les jeunes femmes à travers l\'éducation et le développement du leadership.'
    }
  },
  {
    name: 'Faustine N. AMANI',
    position: {
      en: 'Associate Project Manager',
      fr: 'Gestionnaire de Projet Associée'
    },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '✨',
    photo: faustine,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Oversees project activities and ensures effective collaboration with community partners to maximize program impact.',
      fr: 'Supervise les activités du projet et assure une collaboration efficace avec les partenaires communautaires pour maximiser l\'impact du programme.'
    }
  },
  {
    name: 'Blaise SENDODA',
    position: {
      en: 'MEAL Associate',
      fr: 'Associé MEAL'
    },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '🌸',
    photo: Blaise,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Leads monitoring, evaluation, accountability and learning efforts to ensure programs are evidence-based and responsive to community needs.',
      fr: 'Dirige les efforts de suivi, évaluation, redevabilité et apprentissage pour garantir que les programmes sont fondés sur des preuves et répondent aux besoins de la communauté.'
    }
  },
  {
    name: 'Ange DUSABE',
    position: {
      en: 'Finance & Admin Assistant',
      fr: 'Assistante Finance & Administration'
    },
    department: { en: 'Finance', fr: 'Finance' },
    emoji: '📢',
    photo: ange,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Manages financial operations and administrative processes to ensure transparency and efficiency in organizational management.',
      fr: 'Gère les opérations financières et les processus administratifs pour garantir la transparence et l\'efficacité dans la gestion organisationnelle.'
    }
  }
]
</script>

<style scoped>
/* Ensure all collapsed cards have same height */
.group:not(:has(.h-auto)) {
  height: 100%;
}
</style>