<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-brand-green text-white py-20 overflow-hidden">
      <div class="absolute inset-0 opacity-10"
        style="background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.06%22/%3E%3C/svg%3E')" />

      <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div class="max-w-3xl">
          <div
            class="inline-flex items-center gap-2 mb-4 border border-white/20 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
            <span class="text-xl">🏛️</span>
            <span class="text-white/80 text-xs font-medium tracking-widest uppercase">Leadership & Team</span>
          </div>
          <h1 class="font-display font-bold text-5xl md:text-6xl mb-6">
            {{ t({ en: 'Our Board & Team', fr: 'Notre Conseil & Équipe' }) }}
          </h1>
          <p class="text-white/80 text-lg leading-relaxed max-w-2xl">
            {{ t({
              en: `Meet the dedicated leaders and passionate individuals who guide our mission and work every day to
            create lasting impact for women and girls in DRC.`,
              fr: `Rencontrez les dirigeants dévoués et les personnes passionnées qui guident notre mission et travaillent
            chaque jour pour créer un impact durable pour les femmes et les filles en RDC.`
            }) }}
          </p>
        </div>
      </div>

      <!-- Decorative wave -->
      <div class="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C480 60 960 0 1440 30V54H0V30Z" fill="#F9FAFB" />
        </svg>
      </div>
    </section>

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

        <!-- Board Members Grid - NEW DESIGN -->
        <div class="grid lg:grid-cols-2 gap-8 mb-12">
          <div v-for="member in boardMembers" :key="member.name" class="group relative">

            <!-- Card Container -->
            <div
              class="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">

              <!-- Top Section: Photo + Name/Title -->
              <div class="flex items-start gap-6 mb-6">
                <!-- Photo with decorative border -->
                <div class="relative flex-shrink-0">
                  <div
                    class="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-brand-green/10 group-hover:ring-brand-green/20 transition-all">
                    <img :src="member.photo" :alt="member.name"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <!-- Decorative corner accent -->
                  <div
                    class="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center shadow-lg">
                    <span class="text-lg">🏛️</span>
                  </div>
                </div>

                <!-- Name & Title -->
                <div class="flex-1 pt-2">
                  <h3
                    class="font-display font-bold text-2xl text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                    {{ member.name }}
                  </h3>
                  <p class="text-brand-green font-semibold text-sm mb-3">{{ t(member.title) }}</p>

                  <!-- Quick Links (compact) -->
                  <div class="flex gap-2">
                    <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer"
                      class="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors group/icon">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a v-if="member.email" :href="'mailto:' + member.email"
                      class="w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 flex items-center justify-center transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>

                    <a v-if="member.website" :href="member.website" target="_blank" rel="noopener noreferrer"
                      class="w-8 h-8 rounded-lg bg-brand-green/5 hover:bg-brand-green/10 text-brand-green flex items-center justify-center transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Biography -->
              <div class="flex-1">
                <p class="text-gray-600 text-sm leading-relaxed">{{ t(member.bio) }}</p>
              </div>

              <!-- Bottom accent line -->
              <div class="mt-6 pt-6 border-t border-gray-100">
                <div class="h-1 w-16 bg-gradient-to-r from-brand-green to-brand-yellow rounded-full"></div>
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
        </div>

        <!-- Team Members Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div v-for="member in teamMembers" :key="member.name" class="group">

            <!-- Photo Card -->
            <div
              class="relative mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-green/5 to-brand-yellow/5">
              <div class="aspect-[3/4] overflow-hidden">
                <img :src="member.photo" :alt="member.name"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              <!-- Hover overlay with contact -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <div class="w-full">
                  <a v-if="member.email" :href="'mailto:' + member.email"
                    class="flex items-center justify-center gap-2 w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full py-2.5 text-sm font-medium transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{{ t({ en: 'Contact', fr: 'Contacter' }) }}</span>
                  </a>
                </div>
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
            <div class="text-center">
              <h3 class="font-display font-bold text-xl text-gray-900 mb-1">{{ member.name }}</h3>
              <p class="text-brand-green font-semibold text-sm mb-2">{{ t(member.position) }}</p>
              <p v-if="member.location" class="text-gray-500 text-xs flex items-center justify-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ member.location }}</span>
              </p>
            </div>
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
import { useLang } from '../composables/useLang.js'
import boardPhoto1 from '../assets/Freddy.jpg'
import boardPhoto2 from '../assets/Freddy.jpg'
import boardPhoto3 from '../assets/Freddy.jpg'
import boardPhoto4 from '../assets/Freddy.jpg'
import team1 from '../assets/Freddy.jpg'
import team2 from '../assets/Freddy.jpg'
import team3 from '../assets/Freddy.jpg'
import team4 from '../assets/Freddy.jpg'
import team5 from '../assets/Freddy.jpg'
import team6 from '../assets/Freddy.jpg'
import team7 from '../assets/Freddy.jpg'
import team8 from '../assets/Freddy.jpg'

const { t } = useLang()

const boardMembers = [
  {
    name: 'Dr. Amina Okello',
    title: {
      en: 'Board Chair',
      fr: 'Présidente du Conseil'
    },
    photo: boardPhoto1,
    bio: {
      en: 'Dr. Okello brings over 20 years of experience in international development and women\'s rights advocacy. She previously served as Regional Director for East Africa at UN Women and holds a PhD in Gender Studies from Oxford University. Her strategic vision guides our mission to empower women and girls across DRC.',
      fr: 'Dr Okello apporte plus de 20 ans d\'expérience en développement international et plaidoyer pour les droits des femmes. Elle a précédemment occupé le poste de Directrice régionale pour l\'Afrique de l\'Est à ONU Femmes et détient un doctorat en études de genre de l\'Université d\'Oxford.'
    },
    website: 'https://example.com/amina-okello',
    linkedin: 'https://linkedin.com/in/amina-okello',
    email: 'amina.okello@womenconcern.org'
  },
  {
    name: 'Grace Mutombo',
    title: {
      en: 'Vice Chair & Treasurer',
      fr: 'Vice-Présidente et Trésorière'
    },
    photo: boardPhoto2,
    bio: {
      en: 'Grace is a certified public accountant and financial strategist with extensive experience in nonprofit financial management. Born and raised in Goma, she brings invaluable local insight and has been instrumental in ensuring transparent and sustainable financial practices for our organization.',
      fr: 'Grace est une comptable publique certifiée et stratège financière avec une vaste expérience en gestion financière à but non lucratif. Née et élevée à Goma, elle apporte des connaissances locales inestimables.'
    },
    website: 'https://example.com/grace-mutombo',
    linkedin: 'https://linkedin.com/in/grace-mutombo',
    email: 'grace.mutombo@womenconcern.org'
  },
  {
    name: 'Prof. Jean-Pierre Kabongo',
    title: {
      en: 'Secretary & Education Advisor',
      fr: 'Secrétaire et Conseiller en Éducation'
    },
    photo: boardPhoto3,
    bio: {
      en: 'Professor Kabongo is Dean of Education at the University of Kinshasa and a renowned expert in girls\' education in conflict zones. His research on educational barriers for young women in DRC has informed policy at both national and international levels. He ensures our programs are evidence-based and impactful.',
      fr: 'Le professeur Kabongo est doyen de l\'éducation à l\'Université de Kinshasa et un expert renommé en éducation des filles dans les zones de conflit.'
    },
    website: 'https://example.com/jp-kabongo',
    linkedin: 'https://linkedin.com/in/jp-kabongo',
    email: 'jp.kabongo@womenconcern.org'
  },
  {
    name: 'Marie-Claire Lumembo',
    title: {
      en: 'Community Engagement Director',
      fr: 'Directrice de l\'Engagement Communautaire'
    },
    photo: boardPhoto4,
    bio: {
      en: 'Marie-Claire is a grassroots activist and community organizer who has worked for over 15 years building women\'s networks across North and South Kivu. A survivor and advocate, she ensures our work remains community-driven and responsive to the real needs of the women we serve.',
      fr: 'Marie-Claire est une militante de base et organisatrice communautaire qui a travaillé pendant plus de 15 ans à la construction de réseaux de femmes à travers le Nord et le Sud-Kivu.'
    },
    linkedin: 'https://linkedin.com/in/mc-lumembo',
    email: 'mc.lumembo@womenconcern.org'
  }
]

const teamMembers = [
  {
    name: 'Claudine Mukeshimana',
    position: { en: 'Executive Director', fr: 'Directrice Exécutive' },
    department: { en: 'Leadership', fr: 'Direction' },
    emoji: '⭐',
    photo: team1,
    location: 'Goma, DRC',
    email: 'claudine@womenconcern.org'
  },
  {
    name: 'Sarah Nzabandora',
    position: { en: 'Program Director', fr: 'Directrice des Programmes' },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '📋',
    photo: team2,
    location: 'Goma, DRC',
    email: 'sarah@womenconcern.org'
  },
  {
    name: 'Jean Kalume',
    position: { en: 'Finance Manager', fr: 'Directeur Financier' },
    department: { en: 'Finance', fr: 'Finance' },
    emoji: '💰',
    photo: team3,
    location: 'Goma, DRC',
    email: 'jean@womenconcern.org'
  },
  {
    name: 'Esperance Uwimana',
    position: { en: 'GLFX Coordinator', fr: 'Coordinatrice GLFX' },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '✨',
    photo: team4,
    location: 'Bukavu, DRC',
    email: 'esperance@womenconcern.org'
  },
  {
    name: 'Josephine Byukusenge',
    position: { en: 'Malkia Pads Manager', fr: 'Responsable Malkia Pads' },
    department: { en: 'Programs', fr: 'Programmes' },
    emoji: '🌸',
    photo: team5,
    location: 'Goma, DRC',
    email: 'josephine@womenconcern.org'
  },
  {
    name: 'Patrick Muhindo',
    position: { en: 'Communications Officer', fr: 'Responsable Communication' },
    department: { en: 'Comms', fr: 'Communication' },
    emoji: '📢',
    photo: team6,
    location: 'Goma, DRC',
    email: 'patrick@womenconcern.org'
  },
  {
    name: 'Zawadi Kamikazi',
    position: { en: 'Field Officer - North Kivu', fr: 'Responsable de Terrain - Nord-Kivu' },
    department: { en: 'Field', fr: 'Terrain' },
    emoji: '🌍',
    photo: team7,
    location: 'Rutshuru, DRC',
    email: 'zawadi@womenconcern.org'
  },
  {
    name: 'Amani Bisimwa',
    position: { en: 'Volunteer Coordinator', fr: 'Coordinatrice des Bénévoles' },
    department: { en: 'Engagement', fr: 'Engagement' },
    emoji: '🙌',
    photo: team8,
    location: 'Goma, DRC',
    email: 'amani@womenconcern.org'
  }
]
</script>