<template>
  <div class="min-h-screen bg-gray-50">

    <!-- MODAL -->
    <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="modalMember" class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        @click.self="closeModal">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal"></div>
        <div
          class="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col z-10">
          <!-- Modal header -->
          <div class="relative bg-gradient-to-br from-brand-green to-brand-green/80 p-8 flex-shrink-0">
            <button @click="closeModal"
              class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div class="flex items-start gap-6">
              <div class="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-xl flex-shrink-0">
                <img :src="modalMember.photo" :alt="modalMember.name" class="w-full h-full object-cover" />
              </div>
              <div class="pt-1">
                <p class="text-brand-yellow text-xs font-semibold uppercase tracking-wider mb-1">
                  {{ t(modalMember.title || modalMember.position) }}
                </p>
                <h3 class="font-display font-bold text-2xl text-white leading-tight mb-1">{{ modalMember.name }}</h3>
                <p v-if="modalMember.location" class="text-white/60 text-xs flex items-center gap-1">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ modalMember.location }}
                </p>
                <div class="flex gap-2 mt-3">
                  <a v-if="modalMember.linkedin" :href="modalMember.linkedin" target="_blank"
                    class="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a v-if="modalMember.email" :href="'mailto:' + modalMember.email"
                    class="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a v-if="modalMember.website" :href="modalMember.website" target="_blank"
                    class="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Scrollable bio -->
          <div class="flex-1 overflow-y-auto p-8">
            <div class="space-y-4">
              <p v-for="(para, i) in getAllParagraphs(modalMember.bio)" :key="i"
                class="text-gray-600 text-sm leading-relaxed">{{ para }}</p>
            </div>
          </div>
          <div class="h-1 w-full bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green flex-shrink-0"></div>
        </div>
      </div>
    </transition>

    <!-- Board Members Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-brand-green/20 rounded-full px-4 py-1.5 bg-brand-green/5">
            <span class="text-xl">🏛️</span>
            <span class="text-brand-green text-xs font-medium tracking-widest uppercase">Board of Directors</span>
          </div>
          <h2 class="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {{ t({ en: 'Board of Directors', fr: "Conseil d'Administration" }) }}
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            {{ t({
              en: `Strategic leaders ensuring we create lasting impact.`, fr: `Leaders stratégiques assurant un
            impact durable.` }) }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="member in boardMembers" :key="member.name"
            class="group relative bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer">
            <div class="relative aspect-[3/4] overflow-hidden">
              <img :src="member.photo" :alt="member.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <!-- Default label -->
              <div
                class="absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <p class="text-brand-yellow text-xs font-semibold uppercase tracking-wider mb-1">{{ t(member.title) }}
                </p>
                <h3 class="font-display font-bold text-white text-lg leading-tight">{{ member.name }}</h3>
              </div>
              <!-- Hover overlay -->
              <div
                class="absolute inset-0 bg-brand-green/90 flex flex-col items-center justify-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                <p class="text-brand-yellow text-xs font-semibold uppercase tracking-wider">{{ t(member.title) }}</p>
                <h3 class="font-display font-bold text-white text-xl leading-tight">{{ member.name }}</h3>
                <button @click="openModal(member)"
                  class="mt-2 inline-flex items-center gap-2 bg-brand-yellow text-brand-green font-bold text-xs px-5 py-2.5 rounded-full hover:brightness-105 transition-all shadow-lg">
                  <span>{{ t({ en: 'Read Bio', fr: 'Lire la Bio' }) }}</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div class="flex gap-2 mt-1">
                  <a v-if="member.linkedin" :href="member.linkedin" target="_blank"
                    class="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/30 text-white flex items-center justify-center"
                    @click.stop>
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a v-if="member.email" :href="'mailto:' + member.email"
                    class="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/30 text-white flex items-center justify-center"
                    @click.stop>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="h-1 w-full bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green"></div>
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
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-brand-green/20 rounded-full px-4 py-1.5 bg-brand-green/5">
            <span class="text-xl">👥</span>
            <span class="text-brand-green text-xs font-medium tracking-widest uppercase">Our Team</span>
          </div>
          <h2 class="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {{ t({ en: 'Meet Our Team', fr: "Rencontrez Notre Équipe" }) }}
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            {{ t({
              en: `The passionate individuals working every day on the ground.`, fr: `Les personnes passionnées qui
            travaillent chaque jour sur le terrain.` }) }}
          </p>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {{ t({
              en: `At Women Concern, our staff are more than colleagues—they are the driving force behind every success,
            every empowered woman, and every positive change in the communities we serve.`,
              fr: `Chez Women Concern, notre personnel est bien plus que des collègues—ils sont la force motrice derrière
            chaque réussite, chaque femme autonomisée et chaque changement positif dans les communautés que nous
            servons.`
            }) }}
          </p>
        </div>

        <!-- Changed from lg:grid-cols-3 to lg:grid-cols-4 to match board members -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="member in teamMembers" :key="member.name"
            class="group relative bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer">
            <div class="relative aspect-[3/4] overflow-hidden">
              <img :src="member.photo" :alt="member.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <!-- Default label -->
              <div
                class="absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <span
                  class="inline-flex items-center gap-1 px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2">
                  <span>{{ member.emoji }}</span>
                  <span>{{ t(member.department) }}</span>
                </span>
                <h3 class="font-display font-bold text-white text-lg leading-tight">{{ member.name }}</h3>
                <p class="text-brand-yellow text-xs font-semibold mt-0.5">{{ t(member.position) }}</p>
              </div>
              <!-- Hover overlay -->
              <div
                class="absolute inset-0 bg-brand-green/90 flex flex-col items-center justify-center gap-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                <span
                  class="inline-flex items-center gap-1 px-2.5 py-1 bg-white/15 rounded-full text-white text-xs font-medium">
                  <span>{{ member.emoji }}</span>
                  <span>{{ t(member.department) }}</span>
                </span>
                <h3 class="font-display font-bold text-white text-xl leading-tight">{{ member.name }}</h3>
                <p class="text-brand-yellow text-xs font-semibold">{{ t(member.position) }}</p>
                <button @click="openModal(member)"
                  class="mt-2 inline-flex items-center gap-2 bg-brand-yellow text-brand-green font-bold text-xs px-5 py-2.5 rounded-full hover:brightness-105 transition-all shadow-lg">
                  <span>{{ t({ en: 'Read Bio', fr: 'Lire la Bio' }) }}</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p v-if="member.location" class="text-white/50 text-xs flex items-center gap-1 mt-1">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ member.location }}
                </p>
              </div>
            </div>
            <div class="h-1 w-full bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green"></div>
          </div>
        </div>
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

const modalMember = ref(null)

const openModal = (member) => {
  modalMember.value = member
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modalMember.value = null
  document.body.style.overflow = ''
}

const getAllParagraphs = (bio) => {
  if (!bio) return []
  const text = typeof bio === 'string' ? bio : t(bio)
  return text.split('\n\n').filter(p => p.trim())
}

const boardMembers = [
  {
    name: 'Myriam Perez Dumoulin',
    title: { en: 'Board Chairperson', fr: "Présidente du Conseil d'Administration" },
    photo: Myriam,
    bio: {
      en: `With over a decade of diverse experience, Myriam has led projects and training programs with a particular focus on the global South. As a Project Manager and Trainer at iCRA since 2020, she supported education organizations through counselling, coaching, and training initiatives. Her background includes roles and skills in project management, curriculum design and scientific communication in agricultural education.

Myriam is a Spanish professional living in France, born in the US, working for a Dutch organization that's active in Africa. With this mix of cultures, she really has a globe-trotter spirit! Her international experience in Malawi, Colombia, and Yemen has broadened her perspective even more, particularly on issues like food security, water management and rural development. She speaks English, Spanish and French fluently.

At iCRA, Myriam designs and leads impactful projects and training programs that empower individuals, businesses, and education organizations in the agricultural sector, particularly in Benin and Burundi. She is the coordinator of the Making Research Work course and focuses on providing expert counselling, coaching, and training services to support their growth and success in transforming food systems.`,
      fr: `Avec plus d'une décennie d'expérience diversifiée, Myriam a dirigé des projets et des programmes de formation avec un accent particulier sur les pays du Sud.

Myriam est une professionnelle espagnole vivant en France, née aux États-Unis, et travaillant pour une organisation néerlandaise active en Afrique. Elle parle couramment l'anglais, l'espagnol et le français.

À iCRA, Myriam conçoit et dirige des projets et programmes de formation à fort impact dans le secteur agricole, notamment au Bénin et au Burundi.`
    },
    website: '', linkedin: '', email: ''
  },
  {
    name: 'Erickson BISETSA',
    title: { en: 'Board Member', fr: "Membre du Conseil d'Administration" },
    photo: Ericson,
    bio: {
      en: `My name is Erickson BISETSA, and I currently serve as Country Director for Tearfund-UK in South Sudan. Tearfund is a UK-based Christian international charity that partners with local actors in over 50 countries to address the root causes of poverty. In South Sudan, our work focuses on both life-saving humanitarian interventions and building household resilience.

I have been engaged in the humanitarian and development sector since 2010, working with several international NGOs including World Vision International, American Refugee Committee, Danish Refugee Council, Action Against Hunger, UNDP, and Tearfund. My experience spans across countries such as Rwanda, the Central African Republic, and South Sudan.

I look forward to exploring how we can collaborate to support the important work of Women Concern in the DRC.`,
      fr: `Je m'appelle Erickson BISETSA et je suis actuellement Directeur Pays de Tearfund-UK au Soudan du Sud.

Je travaille dans le secteur humanitaire et du développement depuis 2010, avec plusieurs ONG internationales.

Je me réjouis d'explorer les possibilités de collaboration afin de soutenir le travail important de Women Concern en RDC.`
    },
    website: '', linkedin: '', email: ''
  },
  {
    name: 'Prof. Sarah Peck',
    title: { en: 'Board Member', fr: "Membre du Conseil d'Administration" },
    photo: Prof,
    bio: {
      en: `I'm an assistant professor in Human Geography at Northumbria University, and part of the Centre for Global Development. My work is centred on my interests in civic space, migration and global development and collaborative research methods.

I'm currently the Programme Lead for the MSc Global Development programme at Northumbria University. I feel privileged to be involved with Women Concern, albeit in a very small way, and look forward to supporting as best as I can.`,
      fr: `Je suis professeure assistante en géographie humaine à l'Université de Northumbria et membre du Centre for Global Development.

Je suis actuellement responsable du programme de Master en Développement Global à l'Université de Northumbria. Je me sens privilégiée d'être associée à Women Concern.`
    },
    website: '', linkedin: '', email: ''
  },
  {
    name: 'Rox Madeira',
    title: { en: 'Board Member', fr: "Membre du Conseil d'Administration" },
    photo: Rox,
    bio: {
      en: `I am a community herbalist, human rights activist, and founding director of a grassroots herbal non-profit Movement in Thyme. We work in particular with people seeking sanctuary and community well-being in Scotland.

I have a personal focus on women's rights and wellbeing. I host a podcast where I speak with activists and humanitarian workers around the world, with the aim of encouraging reconnection to the land, health sovereignty, and global solidarity.`,
      fr: `Je suis herboriste communautaire, militante des droits humains et directrice fondatrice de l'organisation « Movement in Thyme ».

Je m'intéresse particulièrement aux droits et au bien-être des femmes. J'anime un podcast avec des militants et des travailleurs humanitaires du monde entier.`
    },
    linkedin: '', email: ''
  },
  {
    name: 'Freddy M. Biseta',
    title: { en: 'Board Member', fr: "Membre du Conseil d'Administration" },
    photo: Freddy,
    bio: {
      en: `Freddy is a seasoned development leader with 15 years of experience across the Great Lakes region, specializing in gender equality, women's empowerment, and community-led development. Before joining Women Concern permanently, he held a key role at World Vision International, leading initiatives that strengthened local capacities and transformed lives.
A consultant, professional trainer, and strategist, Freddy excels in organizational development, program design, research, and project management. He is recognized for creating innovative, evidence-based interventions that empower women and girls, build resilient communities, and drive sustainable, inclusive development.`,
      fr: `Freddy est un leader chevronné du développement, avec 15 ans d'expérience dans la région des Grands Lacs, spécialisé dans l'égalité de genre, l'autonomisation des femmes et le développement communautaire. Avant de rejoindre Women Concern de manière permanente, il a occupé un poste clé à World Vision International, où il a dirigé des initiatives qui ont renforcé les capacités locales et transformé des vies.

Consultant, formateur professionnel et stratège, Freddy excelle dans le développement organisationnel, la conception de programmes, la recherche et la gestion de projets. Il est reconnu pour la création d'interventions innovantes, fondées sur des preuves, qui autonomisent les femmes et les filles, renforcent la résilience des communautés et favorisent un développement durable et inclusif.`
    },
    linkedin: '', email: ''
  }
]

const teamMembers = [
  {
    name: 'Freddy M. BISETSA',
    position: { en: 'Founder & Executive Director', fr: 'Fondateur & Directeur Exécutif' },
    department: { en: 'Leadership', fr: 'Direction' },
    emoji: '⭐',
    photo: Freddy,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Leading Women Concern with a vision to empower women and girls across Eastern DRC through sustainable programs and community-driven initiatives.',
      fr: "Dirige Women Concern avec une vision d'autonomiser les femmes et les filles dans l'est de la RDC."
    }
  },
  {
    name: 'Esther NSHOBOLE',
    position: { en: 'Associate Project Manager', fr: 'Gestionnaire de Projet Associée' },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '📋',
    photo: esther,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Coordinates program implementation and ensures quality delivery of services to beneficiaries across all Women Concern projects.',
      fr: 'Coordonne la mise en œuvre des programmes et assure une prestation de services de qualité aux bénéficiaires.'
    }
  },
  {
    name: 'Gloria CHABENE',
    position: { en: 'Associate Project Manager & Deputy Coordinator of GLFx Kivu', fr: 'Gestionnaire de Projet Associée & Coordinatrice Adjointe de GLFx Kivu' },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '💰',
    photo: gloria,
    location: 'Goma, DRC',
    bio: {
      en: 'Manages programs and co-leads the Girls Leadership & Futures Exchange initiative, empowering young women through education and leadership development.',
      fr: "Gère les programmes et co-dirige l'initiative Girls Leadership & Futures Exchange."
    }
  },
  {
    name: 'Faustine N. AMANI',
    position: { en: 'Associate Project Manager', fr: 'Gestionnaire de Projet Associée' },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '✨',
    photo: faustine,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Oversees project activities and ensures effective collaboration with community partners to maximize program impact.',
      fr: 'Supervise les activités du projet et assure une collaboration efficace avec les partenaires communautaires.'
    }
  },
  {
    name: 'Blaise SENDODA',
    position: { en: 'MEAL Associate', fr: 'Associé MEAL' },
    department: { en: 'M&E', fr: 'S&E' },
    emoji: '📊',
    photo: Blaise,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Leads monitoring, evaluation, accountability and learning efforts to ensure programs are evidence-based and responsive to community needs.',
      fr: 'Dirige les efforts de suivi, évaluation, redevabilité et apprentissage pour garantir que les programmes répondent aux besoins de la communauté.'
    }
  },
  {
    name: 'Ange DUSABE',
    position: { en: 'Finance & Admin Assistant', fr: 'Assistante Finance & Administration' },
    department: { en: 'Finance', fr: 'Finance' },
    emoji: '💼',
    photo: ange,
    location: 'Bukavu, DRC',
    bio: {
      en: 'Manages financial operations and administrative processes to ensure transparency and efficiency in organizational management.',
      fr: "Gère les opérations financières et les processus administratifs pour garantir la transparence et l'efficacité."
    }
  }
]
</script>

<style scoped></style>