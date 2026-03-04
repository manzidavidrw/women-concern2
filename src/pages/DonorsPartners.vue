<template>
  <div class="pb-20 min-h-screen bg-white">

    <!-- ─────────────────────────────────────────────
         HERO — starts at top-0, no pt-24.
         The transparent navbar floats over this green.
         We add padding-top: 68px (navbar height) so
         content sits just below the navbar bar.
    ───────────────────────────────────────────── -->
    <div class="relative overflow-hidden" style="background: #1E4D35; padding-top: 68px;">

      <!-- Yellow diagonal wash -->
      <div class="absolute inset-0 pointer-events-none"
        style="background: linear-gradient(135deg, transparent 40%, rgba(212,160,23,0.12) 100%);" />
      <!-- Decorative rings -->
      <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
      <div
        class="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-brand-yellow/10 pointer-events-none" />
      <!-- Yellow left accent bar -->
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow opacity-60" />

      <!-- Breadcrumb inside the green, just below navbar -->
      <div class="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-5 pb-0">
        <div class="flex items-center gap-2 text-xs text-white/40 font-medium">
          <button @click="$emit('navigate', 'home')" class="hover:text-white transition-colors flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M5 10v10h5v-6h4v6h5V10" />
            </svg>
            {{ t({ en: 'Home', fr: 'Accueil' }) }}
          </button>
          <svg class="w-3 h-3 text-white/20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-brand-yellow font-semibold">
            {{ t({ en: 'Donors & Partners', fr: 'Donateurs & Partenaires' }) }}
          </span>
        </div>
      </div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span
              class="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              🤝 {{ t({ en: 'Our Story', fr: 'Notre Histoire' }) }}
            </span>
            <h1 class="font-display font-bold text-white text-5xl md:text-6xl leading-tight">
              {{ t({ en: 'Donors &', fr: 'Donateurs &' }) }}<br />
              <span class="text-brand-yellow">{{ t({ en: 'Partners', fr: 'Partenaires' }) }}</span>
            </h1>
            <p class="text-white/55 text-base max-w-lg mt-4 leading-relaxed">
              {{ t({
                en: 'None of this would be possible without the generosity and commitment of our supporters.',
                fr: "Rien de tout cela ne serait possible sans la générosité et l'engagement de nos soutiens."
              }) }}
            </p>
          </div>

          <!-- Stats pills -->
          <div class="flex gap-4 flex-shrink-0">
            <div class="bg-white/8 border border-white/10 rounded-2xl px-6 py-4 text-center">
              <p class="font-display font-bold text-brand-yellow text-3xl">8+</p>
              <p class="text-white/50 text-xs mt-1">{{ t({ en: 'Partners', fr: 'Partenaires' }) }}</p>
            </div>
            <div class="bg-brand-yellow/15 border border-brand-yellow/25 rounded-2xl px-6 py-4 text-center">
              <p class="font-display font-bold text-brand-yellow text-3xl">100%</p>
              <p class="text-white/50 text-xs mt-1">{{ t({ en: 'Transparent', fr: 'Transparent' }) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave transition into white body -->
      <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full block">
        <path d="M0 20C480 40 960 0 1440 20V40H0V20Z" fill="white" />
      </svg>
    </div>


    <!-- ─────────────────────────────────────────────
         PAGE BODY
    ───────────────────────────────────────────── -->
    <div class="max-w-5xl mx-auto px-6 lg:px-10 py-16">

      <!-- With Gratitude -->
      <div class="text-center mb-16">
        <span class="section-label">{{ t({ en: 'With Gratitude', fr: 'Avec Gratitude' }) }}</span>
        <h2 class="font-display font-bold text-gray-900 text-3xl md:text-4xl mb-4">
          {{ t({ en: 'Thank You to Our Supporters', fr: 'Merci à Nos Soutiens' }) }}
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
          {{ t({
            en: `Every donation — large or small — directly funds programs that change lives in Goma. We are deeply
          grateful to every individual, foundation, and institution that stands with us.`,
            fr: `Chaque don — grand ou petit — finance directement des programmes qui changent des vies à Goma. Nous
          sommes profondément reconnaissants envers chaque soutien.`
          }) }}
        </p>
      </div>

      <!-- Institutional Partners -->
      <div class="mb-16">
        <span class="section-label">{{ t({ en: 'Institutional Partners', fr: 'Partenaires Institutionnels' }) }}</span>
        <h2 class="font-display font-bold text-gray-900 text-2xl mb-8">
          {{ t({ en: 'Organisations That Support Us', fr: 'Organisations Qui Nous Soutiennent' }) }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div v-for="d in institutional" :key="d.name"
            class="bg-gray-50 h-28 rounded-2xl flex flex-col items-center justify-center gap-2 border border-gray-100 hover:border-brand-yellow/40 hover:bg-brand-green/5 transition-all group">
            <span class="text-3xl">{{ d.emoji }}</span>
            <span class="text-gray-700 text-sm font-semibold group-hover:text-brand-green transition-colors">{{ d.name
            }}</span>
          </div>
        </div>
      </div>

      <!-- Individual Donors -->
      <div class="mb-16">
        <span class="section-label">{{ t({ en: 'Individual Donors', fr: 'Donateurs Individuels' }) }}</span>
        <h2 class="font-display font-bold text-gray-900 text-2xl mb-8">
          {{ t({ en: 'People Like You Making a Difference', fr: 'Des Personnes Comme Vous Qui Font la Différence' }) }}
        </h2>
        <div class="bg-gray-50 rounded-3xl border border-gray-100 p-8">
          <div class="flex flex-wrap gap-3">
            <span v-for="name in individualDonors" :key="name"
              class="bg-white border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full font-medium hover:border-brand-yellow/50 hover:text-brand-green transition-all">
              {{ name }}
            </span>
            <span
              class="bg-brand-green/8 border border-brand-green/20 text-brand-green text-sm px-4 py-2 rounded-full font-medium">
              + {{ t({ en: 'Many more anonymous heroes', fr: "Beaucoup d'autres héros anonymes" }) }} ♥
            </span>
          </div>
        </div>
      </div>

      <!-- Impact -->
      <div class="mb-16">
        <div class="text-center mb-10">
          <span class="section-label">{{ t({ en: 'Your Impact', fr: 'Votre Impact' }) }}</span>
          <h2 class="font-display font-bold text-gray-900 text-3xl md:text-4xl">
            {{ t({ en: 'What Your Donation Does', fr: 'Ce Que Fait Votre Don' }) }}
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in impactItems" :key="item.amount"
            class="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-brand-yellow/30 hover:bg-brand-green/5 transition-all">
            <div class="font-display font-bold text-brand-green text-3xl mb-1">{{ item.amount }}</div>
            <div class="accent-rule mb-3" />
            <p class="text-gray-500 text-sm leading-relaxed">{{ t(item) }}</p>
          </div>
        </div>
      </div>

      <!-- Partner CTA -->
      <div class="relative overflow-hidden rounded-3xl" style="background: #1E4D35;">
        <div class="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%); transform: translate(30%, -30%);" />
        <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%); transform: translate(-30%, 30%);" />
        <div class="relative z-10 p-10 md:p-14">
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span
                class="inline-block bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {{ t({ en: 'Partner With Us', fr: 'Partenariat' }) }}
              </span>
              <h2 class="font-display font-bold text-white text-3xl mb-4">
                {{ t({ en: 'Become a Partner Organisation', fr: 'Devenir une Organisation Partenaire' }) }}
              </h2>
              <p class="text-white/55 text-sm leading-relaxed mb-6">
                {{ t({
                  en: `We welcome partnerships with NGOs, companies, foundations, and governments that share our
                commitment to women's empowerment.`,
                  fr: `Nous accueillons des partenariats avec des ONG, entreprises, fondations et gouvernements qui
                partagent notre engagement.`
                }) }}
              </p>
              <a href="mailto:partners@women-concern.org"
                class="inline-block bg-brand-yellow text-brand-green font-bold px-7 py-3.5 rounded-full text-sm hover:brightness-105 transition-all">
                {{ t({ en: 'Get in Touch', fr: 'Nous Contacter' }) }}
              </a>
            </div>
            <div class="space-y-4">
              <div v-for="perk in partnerPerks" :key="perk.en" class="flex items-start gap-3">
                <span
                  class="w-5 h-5 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                <span class="text-white/70 text-sm">{{ t(perk) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

defineEmits(['navigate'])
const { t } = useLang()

const institutional = [
  { name: 'UN Women', emoji: '🇺🇳' },
  { name: 'USAID', emoji: '🇺🇸' },
  { name: 'ECHO / EU', emoji: '🇪🇺' },
  { name: 'UNICEF', emoji: '💙' },
  { name: 'IRC', emoji: '🌐' },
  { name: 'GIZ', emoji: '🇩🇪' },
  { name: 'Local Partners', emoji: '🤝' },
  { name: 'Community Funds', emoji: '❤️' },
]

const individualDonors = [
  'Sarah M.', 'Jean-Pierre K.', 'Amara D.', 'Sophie L.',
  'Michael T.', 'Fatima N.', 'David R.', 'Christine B.',
  'Emmanuel A.', 'Nadia V.', 'Patrick O.', 'Leila H.',
]

const impactItems = [
  { amount: '$10', en: "Provides a month's supply of sanitary pads for one girl, keeping her in school.", fr: "Fournit un mois de serviettes hygiéniques pour une fille, la maintenant à l'école." },
  { amount: '$50', en: 'Covers one medical consultation and treatment at our mobile health clinic.', fr: 'Couvre une consultation médicale et le traitement à notre clinique mobile.' },
  { amount: '$100', en: "Funds a girl's school fees, uniform, and supplies for an entire term.", fr: "Finance les frais de scolarité, l'uniforme et fournitures d'une fille pour un trimestre." },
  { amount: '$250', en: 'Provides seed capital and business training for one woman entrepreneur.', fr: 'Fournit du capital de départ et une formation commerciale pour une femme entrepreneure.' },
  { amount: '$500', en: 'Equips our mobile health clinic for one full month of community outreach.', fr: 'Équipe notre clinique mobile pour un mois complet de sensibilisation communautaire.' },
  { amount: '$1000', en: 'Funds a full psychosocial support program for 20 trauma survivors.', fr: 'Finance un programme de soutien psychosocial complet pour 20 survivantes de traumatismes.' },
]

const partnerPerks = [
  { en: 'Co-branding on all program materials and reports', fr: 'Co-branding sur tous les supports de programme et rapports' },
  { en: 'Regular impact reports and field visit opportunities', fr: "Rapports d'impact réguliers et opportunités de visites terrain" },
  { en: 'Recognition on our website and annual report', fr: 'Reconnaissance sur notre site web et rapport annuel' },
  { en: 'Direct communication with our program teams', fr: 'Communication directe avec nos équipes de programme' },
]
</script>