<template>
  <div class="min-h-screen bg-[#f8faf8] font-sans overflow-x-hidden">

    <!-- ── HERO ──────────────────────────────────────────────────── -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 pt-32 pb-32 px-6">
      <!-- Decorative rings -->
      <div
        class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
      <div
        class="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/8 pointer-events-none" />
      <div class="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
      <!-- Dot grid -->
      <div class="absolute inset-0 opacity-[0.07] pointer-events-none"
        style="background-image:radial-gradient(circle,white 1px,transparent 1px);background-size:32px 32px" />

      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <span
          class="inline-flex items-center gap-2 bg-yellow-400 text-green-900 text-xs font-black uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
          🤝 {{ t({ en: 'Partner With Us', fr: 'Devenir Partenaire' }) }}
        </span>
        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
          {{ t({ en: "Let's Build", fr: 'Construisons' }) }}<br />
          <span class="text-yellow-400 italic">{{ t({ en: 'Something Lasting.', fr: 'Quelque Chose de Durable.' })
          }}</span>
        </h1>
        <p class="text-white/65 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {{ t({
            en: `We partner with organisations, funders, and institutions who share our vision of a dignified, empowered
          world for women and girls in Eastern DRC.`,
            fr: `Nous collaborons avec des organisations, des bailleurs et des institutions qui partagent notre vision
          d'un monde digne et autonome pour les femmes et les filles dans l'Est de la RDC.`
          }) }}
        </p>
      </div>

      <!-- Wave bottom -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          class="w-full h-12">
          <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60Z" fill="#f8faf8" />
        </svg>
      </div>
    </section>

    <!-- ── MAIN GRID ───────────────────────────────────────────── -->
    <div class="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-12 items-start">

      <!-- LEFT: Why partner (2 cols) -->
      <div class="lg:col-span-2 flex flex-col gap-8">

        <div>
          <div class="w-10 h-1 rounded-full bg-green-500 mb-4" />
          <h2 class="font-display text-2xl font-black text-gray-900 leading-tight mb-3">
            {{ t({ en: 'Why Partner With Women Concern?', fr: 'Pourquoi Collaborer avec Women Concern ?' }) }}
          </h2>
          <p class="text-gray-500 text-sm leading-relaxed">
            {{ t({
              en: `We're a proven, locally-rooted organisation with over a decade of impact in some of the world's most
            challenging contexts.`,
              fr: `Nous sommes une organisation éprouvée, ancrée localement, avec plus d'une décennie d'impact dans
            certains des contextes les plus difficiles au monde.`
            }) }}
          </p>
        </div>

        <!-- Why cards -->
        <div class="flex flex-col gap-3">
          <div v-for="reason in reasons" :key="reason.en"
            class="flex gap-4 items-start bg-white border border-gray-100 rounded-2xl p-4 hover:border-green-200 hover:shadow-sm transition-all group">
            <div
              class="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-green-100 transition-colors">
              {{ reason.emoji }}
            </div>
            <div>
              <p class="text-gray-900 text-sm font-bold leading-snug">{{ t(reason) }}</p>
              <p class="text-gray-400 text-xs mt-0.5 leading-relaxed">{{ t(reason.sub) }}</p>
            </div>
          </div>
        </div>

        <!-- Partnership types -->
        <div class="bg-green-900 rounded-2xl p-6 text-white">
          <p class="text-yellow-400 text-xs font-black uppercase tracking-widest mb-4">
            {{ t({ en: 'Partnership Types', fr: 'Types de Partenariat' }) }}
          </p>
          <div class="flex flex-col gap-3">
            <div v-for="type in partnerTypes" :key="type.en" class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
              <span class="text-white/80 text-sm">{{ t(type) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Contact form (3 cols) -->
      <div class="lg:col-span-3">
        <div class="bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden">

          <!-- Form header -->
          <div class="relative bg-gradient-to-r from-green-800 to-green-700 px-8 py-7 overflow-hidden">
            <div class="absolute -right-8 -top-8 w-32 h-32 rounded-full border border-white/10 pointer-events-none" />
            <div class="absolute right-8 bottom-0 w-16 h-16 rounded-full border border-white/10 pointer-events-none" />
            <h3 class="font-display text-xl font-black text-white relative z-10">
              {{ t({ en: 'Send Us a Message', fr: 'Envoyez-Nous un Message' }) }}
            </h3>
            <p class="text-white/60 text-xs mt-1 relative z-10">
              {{ t({ en: "We'll respond within 48 hours.", fr: 'Nous répondrons dans les 48 heures.' }) }}
            </p>
          </div>

          <div class="p-8">

            <!-- ── SUCCESS STATE ── -->
            <div v-if="state === 'success'" class="py-10 flex flex-col items-center text-center gap-4">
              <div
                class="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center text-4xl">
                📬
              </div>
              <h4 class="font-display text-xl font-black text-gray-900">
                {{ t({ en: 'Message Sent!', fr: 'Message Envoyé !' }) }}
              </h4>
              <p class="text-gray-400 text-sm max-w-sm leading-relaxed">
                {{ t({
                  en: 'Thank you for reaching out. Our partnerships team will get back to you shortly.',
                  fr: 'Merci de nous avoir contactés. Notre équipe partenariats vous répondra prochainement.'
                }) }}
              </p>
              <button @click="resetForm"
                class="mt-2 text-green-700 text-sm font-bold hover:underline flex items-center gap-1">
                ← {{ t({ en: 'Send Another Message', fr: 'Envoyer un Autre Message' }) }}
              </button>
            </div>

            <!-- ── ERROR STATE ── -->
            <div v-else-if="state === 'error'" class="py-10 flex flex-col items-center text-center gap-4">
              <div
                class="w-20 h-20 rounded-full bg-red-50 border-4 border-red-100 flex items-center justify-center text-4xl">
                ⚠️
              </div>
              <h4 class="font-display text-xl font-black text-gray-900">
                {{ t({ en: 'Something went wrong', fr: 'Une erreur est survenue' }) }}
              </h4>
              <p class="text-gray-400 text-sm max-w-sm leading-relaxed">{{ errorMsg }}</p>
              <button @click="state = 'idle'" class="mt-2 text-green-700 text-sm font-bold hover:underline">
                ← {{ t({ en: 'Try Again', fr: 'Réessayer' }) }}
              </button>
            </div>

            <!-- ── FORM ── -->
            <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-5">

              <!-- Name + Email row -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1.5">
                  <label class="text-xs font-bold text-gray-600 uppercase tracking-wide">
                    {{ t({ en: 'Your Name', fr: 'Votre Nom' }) }} <span class="text-green-500">*</span>
                  </label>
                  <input v-model="form.name" type="text" required
                    :placeholder="t({ en: 'Jane Uwimana', fr: 'Jane Uwimana' })"
                    class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="text-xs font-bold text-gray-600 uppercase tracking-wide">
                    {{ t({ en: 'Organisation', fr: 'Organisation' }) }}
                  </label>
                  <input v-model="form.org" type="text"
                    :placeholder="t({ en: 'Your org (optional)', fr: 'Votre org (optionnel)' })"
                    class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-1.5">
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  {{ t({ en: 'Your Email', fr: 'Votre Email' }) }} <span class="text-green-500">*</span>
                </label>
                <input v-model="form.email" type="email" required
                  :placeholder="t({ en: 'you@organisation.org', fr: 'vous@organisation.org' })"
                  class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
              </div>

              <!-- Subject -->
              <div class="flex flex-col gap-1.5">
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  {{ t({ en: 'Subject', fr: 'Sujet' }) }} <span class="text-green-500">*</span>
                </label>
                <input v-model="form.subject" type="text" required
                  :placeholder="t({ en: 'Partnership Inquiry — [Organisation Name]', fr: 'Demande de Partenariat — [Nom de l\'Organisation]' })"
                  class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
              </div>

              <!-- Partnership type -->
              <div class="flex flex-col gap-1.5">
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  {{ t({ en: 'Partnership Type', fr: 'Type de Partenariat' }) }}
                </label>
                <div class="relative">
                  <select v-model="form.partnerType"
                    class="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all bg-white pr-10">
                    <option value="">{{ t({ en: 'Select a type (optional)', fr: 'Sélectionner un type (optionnel)' }) }}
                    </option>
                    <option v-for="type in partnerTypes" :key="type.en" :value="t(type)">{{ t(type) }}</option>
                  </select>
                  <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <!-- Message -->
              <div class="flex flex-col gap-1.5">
                <label class="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  {{ t({ en: 'Message', fr: 'Message' }) }} <span class="text-green-500">*</span>
                </label>
                <textarea v-model="form.message" required rows="5" :placeholder="t({
                  en: 'Tell us about your organisation and how you\'d like to collaborate...',
                  fr: 'Parlez-nous de votre organisation et de la manière dont vous souhaitez collaborer...'
                })"
                  class="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all resize-none leading-relaxed" />
                <p class="text-gray-300 text-xs text-right">{{ form.message.length }} {{ t({
                  en: 'characters', fr:
                    'caractères'
                }) }}</p>
              </div>

              <!-- Submit -->
              <button type="submit" :disabled="state === 'sending'"
                class="relative w-full bg-green-700 hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-4 rounded-xl transition-all flex items-center justify-center gap-2.5 group overflow-hidden">
                <span class="relative z-10 flex items-center gap-2">
                  <svg v-if="state === 'sending'" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <svg v-else class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none"
                    stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  {{ state === 'sending'
                    ? t({ en: 'Sending...', fr: 'Envoi en cours...' })
                    : t({ en: 'Send Message', fr: 'Envoyer le Message' }) }}
                </span>
                <!-- Shine effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </button>

              <!-- Note -->
              <p class="text-gray-400 text-xs text-center leading-relaxed">
                {{ t({
                  en: 'Your message will be sent directly to our partnerships team at Women Concern.',
                  fr: 'Votre message sera envoyé directement à notre équipe partenariats chez Women Concern.'
                }) }}
              </p>

            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

// ── Form state ───────────────────────────────────────────────
const state = ref('idle') // idle | sending | success | error
const errorMsg = ref('')

const form = reactive({
  name: '',
  org: '',
  email: '',
  subject: '',
  partnerType: '',
  message: '',
})

const resetForm = () => {
  state.value = 'idle'
  errorMsg.value = ''
  Object.assign(form, { name: '', org: '', email: '', subject: '', partnerType: '', message: '' })
}

// ── Send via EmailJS ─────────────────────────────────────────
// Setup:
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with these variables:
//    {{from_name}}, {{from_email}}, {{organisation}}, {{partner_type}}, {{subject}}, {{message}}
// 4. Replace the three placeholders below with your actual IDs
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'   // e.g. 'abcDEF123'

const handleSubmit = async () => {
  state.value = 'sending'
  errorMsg.value = ''

  try {
    // Dynamically load EmailJS (no npm install needed)
    if (!window.emailjs) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
      window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
    }

    await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: form.name,
      from_email: form.email,
      organisation: form.org || 'N/A',
      partner_type: form.partnerType || 'Not specified',
      subject: form.subject,
      message: form.message,
      to_email: 'manzi2020d@gmail.com',
    })

    state.value = 'success'
  } catch (err) {
    console.error('EmailJS error:', err)
    // Graceful fallback: open mail client
    const mailto = `mailto:manzi2020d@gmail.com`
      + `?subject=${encodeURIComponent(form.subject)}`
      + `&body=${encodeURIComponent(
        `From: ${form.name} (${form.email})\nOrganisation: ${form.org || 'N/A'}\nPartnership Type: ${form.partnerType || 'N/A'}\n\n${form.message}`
      )}`
    window.location.href = mailto
    state.value = 'success'
  }
}

// ── Data ─────────────────────────────────────────────────────
const reasons = [
  {
    emoji: '📍',
    en: 'Deep Local Roots',
    fr: 'Ancrage Local Profond',
    sub: { en: 'Operating in Eastern DRC since 2008 with trusted community networks', fr: 'En activité dans l\'Est de la RDC depuis 2008 avec des réseaux communautaires de confiance' }
  },
  {
    emoji: '📊',
    en: 'Transparent Reporting',
    fr: 'Rapports Transparents',
    sub: { en: 'Every dollar tracked, every impact documented and shared', fr: 'Chaque dollar suivi, chaque impact documenté et partagé' }
  },
  {
    emoji: '🌍',
    en: 'Global Connections',
    fr: 'Connexions Mondiales',
    sub: { en: 'Linked to GLF, UN networks, and international advocacy platforms', fr: 'Connectés au GLF, aux réseaux de l\'ONU et aux plateformes de plaidoyer' }
  },
  {
    emoji: '👩',
    en: 'Women-Led Leadership',
    fr: 'Leadership Féminin',
    sub: { en: 'Feminist governance at every level of our organisation', fr: 'Gouvernance féministe à tous les niveaux de notre organisation' }
  },
]

const partnerTypes = [
  { en: 'Institutional Funding', fr: 'Financement Institutionnel' },
  { en: 'Programme Co-implementation', fr: 'Co-implémentation de Programmes' },
  { en: 'Research & Learning', fr: 'Recherche & Apprentissage' },
  { en: 'Advocacy & Communications', fr: 'Plaidoyer & Communications' },
  { en: 'In-kind Support', fr: 'Soutien en Nature' },
  { en: 'Technology & Innovation', fr: 'Technologie & Innovation' },
]
</script>