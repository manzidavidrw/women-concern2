<template>
  <div class="min-h-screen bg-white font-sans">

    <!-- ── HERO ──────────────────────────────────────────────── -->
    <section
      class="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 pt-32 pb-20 px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none"
        style="background-image: radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px); background-size: 40px 40px;" />
      <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <span
          class="inline-block bg-yellow-400 text-green-900 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-5">
          {{ t({ en: 'Partner With Us', fr: 'Devenir Partenaire' }) }}
        </span>
        <h1 class="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-5">
          {{ t({ en: 'Let\'s Build Something', fr: 'Construisons Quelque Chose' }) }}<br />
          <span class="text-yellow-400">{{ t({ en: 'That Lasts.', fr: 'de Durable.' }) }}</span>
        </h1>
        <p class="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
          {{ t({
            en: `We partner with organisations, funders, governments, and institutions who share our vision of a
          dignified, empowered world for women and girls.`,
            fr: `Nous collaborons avec des organisations, des bailleurs, des gouvernements et des institutions qui
          partagent notre vision d\'un monde digne et autonome pour les femmes et les filles.`
          }) }}
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>

    <!-- ── MAIN ────────────────────────────────────────────────── -->
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- LEFT: partnership types + current partners -->
        <div class="flex flex-col gap-10">
          <div>
            <span
              class="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {{ t({ en: 'Partnership Types', fr: 'Types de Partenariat' }) }}
            </span>
            <h2 class="font-display text-3xl font-black text-gray-900 mb-4 leading-tight">
              {{ t({ en: 'How We Work Together', fr: 'Comment Nous Travaillons Ensemble' }) }}
            </h2>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ t({
                en: `We\'re open to a wide range of collaborations — from co-implementing programmes to institutional
              funding, research, and capacity sharing.`,
                fr: `Nous sommes ouverts à de nombreuses formes de collaboration — co-implémentation de programmes,
              financement institutionnel, recherche et partage de capacités.`
              }) }}
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div v-for="pt in partnerTypes" :key="pt.en"
              class="flex gap-4 items-start bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-green-200 hover:bg-green-50/50 transition-all group">
              <div
                class="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-xl flex-shrink-0 group-hover:border-green-200 transition-colors">
                {{ pt.emoji }}
              </div>
              <div>
                <p class="text-gray-900 text-sm font-bold mb-1">{{ t(pt) }}</p>
                <p class="text-gray-400 text-xs leading-relaxed">{{ t(pt.sub) }}</p>
              </div>
            </div>
          </div>

          <!-- Current partners placeholder -->
          <div>
            <h3 class="font-display text-lg font-black text-gray-900 mb-4">
              {{ t({ en: 'Our Partners & Donors', fr: 'Nos Partenaires & Donateurs' }) }}
            </h3>
            <div class="grid grid-cols-3 gap-3">
              <div v-for="i in 6" :key="i"
                class="aspect-video bg-gray-50 border border-dashed border-gray-200 rounded-xl flex items-center justify-center">
                <p class="text-gray-300 text-xs font-medium text-center px-2">{{ t({
                  en: `Partner Logo`, fr: `Logo
                  Partenaire` }) }}</p>
              </div>
            </div>
            <p class="text-gray-400 text-xs mt-3">
              {{ t({
                en: `Replace placeholders with your partner logos.`, fr: `Remplacez les espaces par vos logos
              partenaires.`}) }}
            </p>
          </div>
        </div>

        <!-- RIGHT: Contact form -->
        <div class="sticky top-24">
          <div class="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">

            <div class="bg-green-700 px-8 py-6">
              <h3 class="font-display text-xl font-black text-white">
                {{ t({ en: 'Send Us a Message', fr: 'Envoyez-Nous un Message' }) }}
              </h3>
              <p class="text-white/70 text-xs mt-1">
                {{ t({ en: 'We\'ll get back to you within 48 hours.', fr: 'Nous vous répondrons dans les 48 heures.' })
                }}
              </p>
            </div>

            <div class="p-8">

              <!-- Success state -->
              <div v-if="sent" class="text-center py-8">
                <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mx-auto mb-4">
                  📬</div>
                <h3 class="font-display text-xl font-black text-gray-900 mb-2">
                  {{ t({ en: 'Message Sent!', fr: 'Message Envoyé !' }) }}
                </h3>
                <p class="text-gray-400 text-sm mb-6 leading-relaxed">
                  {{ t({
                    en: 'Your email client has opened with the message ready to send to our partnerships team.',
                    fr: 'Votre client email s\'est ouvert avec le message prêt à envoyer à notre équipe partenariats.'
                  }) }}
                </p>
                <button @click="resetForm" class="text-green-700 text-sm font-bold hover:underline">
                  {{ t({ en: '← Send Another Message', fr: '← Envoyer un Autre Message' }) }}
                </button>
              </div>

              <!-- Form -->
              <form v-else @submit.prevent="handleSend" class="flex flex-col gap-4">

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="text-xs font-bold text-gray-600 block mb-1.5">
                      {{ t({ en: 'Your Name', fr: 'Votre Nom' }) }} *
                    </label>
                    <input v-model="form.name" type="text" required :placeholder="t({ en: 'Jane Doe', fr: 'Jane Doe' })"
                      class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                  </div>
                  <div>
                    <label class="text-xs font-bold text-gray-600 block mb-1.5">
                      {{ t({ en: 'Organisation', fr: 'Organisation' }) }}
                    </label>
                    <input v-model="form.org" type="text"
                      :placeholder="t({ en: 'Your org name', fr: 'Nom de votre org' })"
                      class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                  </div>
                </div>

                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">
                    {{ t({ en: 'Your Email', fr: 'Votre Email' }) }} *
                  </label>
                  <input v-model="form.email" type="email" required
                    :placeholder="t({ en: 'you@organisation.org', fr: 'vous@organisation.org' })"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>

                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">
                    {{ t({ en: 'Subject', fr: 'Sujet' }) }} *
                  </label>
                  <input v-model="form.subject" type="text" required
                    :placeholder="t({ en: 'Partnership Inquiry — [Your Organisation]', fr: 'Demande de Partenariat — [Votre Organisation]' })"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>

                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">
                    {{ t({ en: 'Partnership Type', fr: 'Type de Partenariat' }) }}
                  </label>
                  <select v-model="form.type"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all bg-white">
                    <option value="">{{ t({ en: 'Select a type...', fr: 'Sélectionnez un type...' }) }}</option>
                    <option v-for="pt in partnerTypes" :key="pt.en" :value="t(pt)">{{ t(pt) }}</option>
                  </select>
                </div>

                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">
                    {{ t({ en: 'Message', fr: 'Message' }) }} *
                  </label>
                  <textarea v-model="form.message" required rows="5" :placeholder="t({
                    en: 'Tell us about your organisation and how you\'d like to collaborate with Women Concern...',
                    fr: 'Parlez-nous de votre organisation et de la manière dont vous souhaitez collaborer avec Women Concern...'
                  })"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all resize-none" />
                </div>

                <button type="submit"
                  class="w-full bg-green-700 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                  <span>{{ t({ en: 'Send Message', fr: 'Envoyer le Message' }) }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>

                <p class="text-gray-400 text-xs text-center">
                  {{ t({
                    en: 'This will open your email client with the message pre-filled to partnerships@women-concern.org',
                    fr: 'Cela ouvrira votre client email avec le message pré-rempli vers partnerships@women-concern.org'
                  }) }}
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()
const sent = ref(false)

const form = ref({ name: '', org: '', email: '', subject: '', type: '', message: '' })

const handleSend = () => {
  const to = 'manzi2020d@gmail.com'
  const subject = encodeURIComponent(form.value.subject || 'Partnership Inquiry — Women Concern')
  const body = encodeURIComponent(
    `Name: ${form.value.name}\n` +
    `Organisation: ${form.value.org || 'N/A'}\n` +
    `Email: ${form.value.email}\n` +
    `Partnership Type: ${form.value.type || 'N/A'}\n\n` +
    `Message:\n${form.value.message}`
  )
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  sent.value = true
}

const resetForm = () => {
  sent.value = false
  form.value = { name: '', org: '', email: '', subject: '', type: '', message: '' }
}

const partnerTypes = [
  {
    emoji: '🏛️',
    en: 'Institutional Funding',
    fr: 'Financement Institutionnel',
    sub: { en: 'Grants and programme funding from institutions or governments', fr: 'Subventions et financement de programmes par des institutions ou gouvernements' }
  },
  {
    emoji: '🤝',
    en: 'Programme Co-implementation',
    fr: 'Co-implémentation de Programmes',
    sub: { en: 'Joint delivery of projects in Eastern DRC', fr: 'Mise en œuvre conjointe de projets dans l\'Est de la RDC' }
  },
  {
    emoji: '🔬',
    en: 'Research & Learning',
    fr: 'Recherche & Apprentissage',
    sub: { en: 'Academic or evidence partnerships', fr: 'Partenariats académiques ou basés sur des données probantes' }
  },
  {
    emoji: '📣',
    en: 'Advocacy & Communications',
    fr: 'Plaidoyer & Communications',
    sub: { en: 'Amplifying our mission through media or policy networks', fr: 'Amplifier notre mission via les médias ou les réseaux politiques' }
  },
]
</script>