<template>
  <section id="projects" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">

      <!-- Header row -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 reveal">
        <div>
          <span class="section-label">{{ t({ en: 'Our Work', fr: 'Notre Travail' }) }}</span>
          <h2 class="font-display font-bold text-gray-900 text-4xl md:text-5xl">
            {{ t({ en: 'Projects & Stories', fr: 'Projets & Histoires' }) }}
          </h2>
        </div>
        <a href="#"
          class="text-brand-green text-sm font-medium border-b border-brand-yellow pb-0.5 self-start hover:opacity-70 transition-opacity">
          {{ t({ en: 'View all →', fr: 'Voir tout →' }) }}
        </a>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-7">
        <article v-for="project in projects" :key="project.en_title"
          class="card-lift reveal border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
          <div class="h-48 flex items-center justify-center text-5xl" :style="{ background: project.bg }">
            {{ project.emoji }}
          </div>
          <div class="p-6">
            <span class="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
              {{ t({ en: project.tag_en, fr: project.tag_fr }) }}
            </span>
            <h3 class="font-display font-bold text-gray-900 text-xl mt-2 mb-2">
              {{ t({ en: project.en_title, fr: project.fr_title }) }}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              {{ t({ en: project.en_desc, fr: project.fr_desc }) }}
            </p>
            <a href="#" class="text-brand-green text-sm font-semibold hover:opacity-70 transition-opacity">
              {{ t({ en: 'Read more →', fr: 'Lire plus →' }) }}
            </a>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'
import { useReveal } from '../composables/useReveal.js'

const { t } = useLang()
useReveal()

const projects = [
  {
    emoji: '📚', bg: '#eef6f1',
    tag_en: 'Education', tag_fr: 'Éducation',
    en_title: 'Back to School Initiative',
    fr_title: "Initiative Retour à l'École",
    en_desc: 'Helping displaced girls re-enroll in school through kits, uniforms, and psychosocial support.',
    fr_desc: "Aider les filles déplacées à se réinscrire à l'école grâce à des kits et soutien.",
  },
  {
    emoji: '🏥', bg: '#fdf9ee',
    tag_en: 'Health', tag_fr: 'Santé',
    en_title: "Women's Health Clinics",
    fr_title: 'Cliniques de Santé Féminine',
    en_desc: 'Mobile health clinics providing free maternal care, contraception, and trauma recovery.',
    fr_desc: 'Cliniques mobiles offrant soins maternels gratuits, contraception et rétablissement.',
  },
  {
    emoji: '💼', bg: '#f5f5f5',
    tag_en: 'Economic Empowerment', tag_fr: 'Autonomisation',
    en_title: 'Women Entrepreneurs Fund',
    fr_title: 'Fonds des Femmes Entrepreneures',
    en_desc: 'Microloans and business training for women-led small enterprises in Eastern DRC.',
    fr_desc: 'Microcrédits et formation commerciale pour les petites entreprises de femmes.',
  },
]
</script>
