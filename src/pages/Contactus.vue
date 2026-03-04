<template>
  <div class="pb-20 min-h-screen bg-white">

    <!-- ─────────────────────────────────────────────
         HERO — full bleed green from top-0
    ───────────────────────────────────────────── -->
    <div class="relative overflow-hidden" style="background: #1E4D35; padding-top: 68px;">

      <!-- Yellow diagonal wash -->
      <div class="absolute inset-0 pointer-events-none"
        style="background: linear-gradient(135deg, transparent 40%, rgba(212,160,23,0.12) 100%);" />
      <!-- Decorative rings -->
      <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />
      <div
        class="absolute -bottom-16 -left-16 w-52 h-52 rounded-full border border-brand-yellow/10 pointer-events-none" />
      <!-- Yellow left accent bar -->
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow opacity-60" />

      <!-- Breadcrumb -->
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
            {{ t({ en: 'Contact Us', fr: 'Contactez-Nous' }) }}
          </span>
        </div>
      </div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span
              class="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              ✉️ {{ t({ en: 'Reach Out', fr: 'Nous Contacter' }) }}
            </span>
            <h1 class="font-display font-bold text-white text-5xl md:text-6xl leading-tight">
              {{ t({ en: "We'd Love to", fr: 'Nous Aimerions' }) }}<br />
              <span class="text-brand-yellow">{{ t({ en: 'Hear From You', fr: 'Avoir de Vos Nouvelles' }) }}</span>
            </h1>
            <p class="text-white/55 text-base max-w-lg mt-4 leading-relaxed">
              {{ t({
                en: `Whether you want to volunteer, donate, partner, or simply learn more — our team is ready to connect
              with you.`,
                fr: `Que vous souhaitiez faire du bénévolat, donner, vous associer ou simplement en savoir plus — notre
              équipe est prête à vous répondre.`
              }) }}
            </p>
          </div>

          <!-- Response time pill -->
          <div class="flex-shrink-0">
            <div class="bg-white/8 border border-white/15 rounded-2xl px-6 py-5 text-center">
              <div class="text-3xl mb-1">⚡</div>
              <p class="font-display font-bold text-brand-yellow text-2xl">24h</p>
              <p class="text-white/50 text-xs mt-1">{{ t({ en: 'Average Response', fr: 'Réponse Moyenne' }) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave into white -->
      <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full block">
        <path d="M0 20C480 40 960 0 1440 20V40H0V20Z" fill="white" />
      </svg>
    </div>


    <!-- ─────────────────────────────────────────────
         CONTACT INFO CARDS
    ───────────────────────────────────────────── -->
    <div class="max-w-5xl mx-auto px-6 lg:px-10 -mt-2 py-12">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div v-for="info in contactCards" :key="info.label"
          class="bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-yellow/40 hover:shadow-md transition-all group">
          <div
            class="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-xl mb-4 group-hover:bg-brand-green/20 transition-colors">
            {{ info.emoji }}
          </div>
          <p class="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
            {{ t(info.label) }}
          </p>
          <p class="text-sm font-semibold text-gray-800 leading-snug">{{ t(info.value) }}</p>
        </div>
      </div>


      <!-- ─────────────────────────────────────────────
           MAIN GRID — Form + Sidebar
      ───────────────────────────────────────────── -->
      <div class="grid lg:grid-cols-5 gap-10">

        <!-- Contact Form (3/5) -->
        <div class="lg:col-span-3">
          <span class="section-label">{{ t({ en: 'Send a Message', fr: 'Envoyer un Message' }) }}</span>
          <h2 class="font-display font-bold text-gray-900 text-3xl mb-8">
            {{ t({ en: 'Get in Touch', fr: 'Prenez Contact' }) }}
          </h2>

          <form @submit.prevent="handleSubmit" class="space-y-5">

            <!-- Name row -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="float-group">
                <input v-model="form.firstName" id="firstName" type="text" placeholder=" " class="float-input peer"
                  :class="errors.firstName ? 'border-red-400' : ''" />
                <label for="firstName" class="float-label">
                  {{ t({ en: 'First Name *', fr: 'Prénom *' }) }}
                </label>
                <p v-if="errors.firstName" class="text-red-400 text-xs mt-1">{{ errors.firstName }}</p>
              </div>
              <div class="float-group">
                <input v-model="form.lastName" id="lastName" type="text" placeholder=" " class="float-input peer" />
                <label for="lastName" class="float-label">
                  {{ t({ en: 'Last Name', fr: 'Nom de Famille' }) }}
                </label>
              </div>
            </div>

            <!-- Email -->
            <div class="float-group">
              <input v-model="form.email" id="email" type="email" placeholder=" " class="float-input peer"
                :class="errors.email ? 'border-red-400' : ''" />
              <label for="email" class="float-label">
                {{ t({ en: 'Email Address *', fr: 'Adresse Email *' }) }}
              </label>
              <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
            </div>

            <!-- Phone -->
            <div class="float-group">
              <input v-model="form.phone" id="phone" type="tel" placeholder=" " class="float-input peer" />
              <label for="phone" class="float-label">
                {{ t({ en: 'Phone Number (optional)', fr: 'Téléphone (optionnel)' }) }}
              </label>
            </div>

            <!-- Subject / inquiry type -->
            <div class="float-group">
              <select v-model="form.subject" id="subject" class="float-input peer"
                :class="errors.subject ? 'border-red-400' : ''">
                <option value="" disabled></option>
                <option v-for="opt in subjectOptions" :key="opt.value" :value="opt.value">
                  {{ t(opt) }}
                </option>
              </select>
              <label for="subject" class="float-label">
                {{ t({ en: 'Subject *', fr: 'Objet *' }) }}
              </label>
              <p v-if="errors.subject" class="text-red-400 text-xs mt-1">{{ errors.subject }}</p>
            </div>

            <!-- Message -->
            <div class="float-group">
              <textarea v-model="form.message" id="message" rows="5" placeholder=" "
                class="float-input peer resize-none" :class="errors.message ? 'border-red-400' : ''"></textarea>
              <label for="message" class="float-label">
                {{ t({ en: 'Your Message *', fr: 'Votre Message *' }) }}
              </label>
              <div class="flex justify-between mt-1">
                <p v-if="errors.message" class="text-red-400 text-xs">{{ errors.message }}</p>
                <p class="text-xs text-gray-400 ml-auto">{{ form.message.length }}/500</p>
              </div>
            </div>

            <!-- Submit -->
            <button type="submit" :disabled="submitted"
              :class="['w-full py-4 rounded-2xl font-semibold text-sm transition-all duration-200',
                submitted
                  ? 'bg-brand-green/20 text-brand-green cursor-default'
                  : 'bg-brand-green text-white hover:opacity-90 hover:shadow-lg hover:shadow-brand-green/20 active:scale-[0.99]']">
              <span v-if="!submitted">
                {{ t({ en: 'Send Message →', fr: 'Envoyer le Message →' }) }}
              </span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" stroke-width="2.5"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {{ t({ en: 'Message Sent!', fr: 'Message Envoyé !' }) }}
              </span>
            </button>

            <p class="text-center text-xs text-gray-400">
              {{ t({
                en: 'We typically respond within 24 hours on business days.',
                fr: 'Nous répondons généralement dans les 24 heures les jours ouvrables.'
              }) }}
            </p>
          </form>
        </div>

        <!-- Sidebar (2/5) -->
        <div class="lg:col-span-2 space-y-6">

          <!-- Office hours -->
          <div class="bg-gray-50 rounded-2xl border border-gray-100 p-6">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-base">🕐</div>
              <h3 class="font-display font-bold text-gray-900 text-lg">
                {{ t({ en: 'Office Hours', fr: 'Heures de Bureau' }) }}
              </h3>
            </div>
            <div class="space-y-3">
              <div v-for="h in officeHours" :key="h.day.en" class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ t(h.day) }}</span>
                <span :class="['text-sm font-semibold', h.closed ? 'text-gray-300' : 'text-brand-green']">
                  {{ t(h.time) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="bg-gray-50 rounded-2xl border border-gray-100 p-6">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-base">🌐</div>
              <h3 class="font-display font-bold text-gray-900 text-lg">
                {{ t({ en: 'Follow Us', fr: 'Suivez-Nous' }) }}
              </h3>
            </div>
            <div class="space-y-3">
              <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank"
                class="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-brand-yellow/40 hover:bg-brand-green/5 transition-all group cursor-pointer">
                <span class="text-xl">{{ s.emoji }}</span>
                <div>
                  <p class="text-sm font-semibold text-gray-700 group-hover:text-brand-green transition-colors">{{
                    s.name }}</p>
                  <p class="text-xs text-gray-400">{{ s.handle }}</p>
                </div>
                <svg class="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-green ml-auto transition-colors"
                  fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Location -->
          <div class="relative overflow-hidden rounded-2xl" style="background: #1E4D35;">
            <div class="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
              style="background: radial-gradient(circle, rgba(212,160,23,0.2) 0%, transparent 70%); transform: translate(30%, -30%);" />
            <div class="relative z-10 p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-base">📍</div>
                <h3 class="font-display font-bold text-white text-lg">
                  {{ t({ en: 'Find Us', fr: 'Nous Trouver' }) }}
                </h3>
              </div>
              <p class="text-white/60 text-sm leading-relaxed mb-4">
                {{ t({
                  en: 'Goma, North Kivu\nDemocratic Republic of Congo',
                  fr: 'Goma, Nord-Kivu\nRépublique Démocratique du Congo'
                }) }}
              </p>
              <a href="https://maps.google.com/?q=Goma,DRC" target="_blank"
                class="inline-flex items-center gap-2 bg-brand-yellow text-brand-green font-semibold text-xs px-4 py-2 rounded-full hover:brightness-105 transition-all">
                {{ t({ en: 'Open in Maps', fr: 'Ouvrir dans Maps' }) }}
                <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>


    <!-- ─────────────────────────────────────────────
         BOTTOM CTA
    ───────────────────────────────────────────── -->
    <div class="max-w-5xl mx-auto px-6 lg:px-10 mt-16">
      <div class="relative overflow-hidden rounded-3xl" style="background: #1E4D35;">
        <div class="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%); transform: translate(30%, -30%);" />
        <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
          style="background: radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%); transform: translate(-30%, 30%);" />
        <div class="relative z-10 p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              class="inline-block bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {{ t({ en: 'Make an Impact', fr: 'Faites un Impact' }) }}
            </span>
            <h2 class="font-display font-bold text-white text-3xl mb-3">
              {{ t({ en: 'Ready to Change Lives?', fr: 'Prêt à Changer des Vies ?' }) }}
            </h2>
            <p class="text-white/55 text-sm leading-relaxed">
              {{ t({
                en: `Every contribution — time, money, or expertise — helps us empower more women and girls in Goma.`,
                fr: `Chaque contribution — temps, argent ou expertise — nous aide à autonomiser davantage de femmes et de
              filles à Goma.`
              }) }}
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://gogetfunding.com/PLACEHOLDER" target="_blank"
              class="pulse-btn flex-1 text-center bg-brand-yellow text-brand-green font-bold px-6 py-4 rounded-full text-sm hover:brightness-105 transition-all">
              ♥ {{ t({ en: 'Donate Now', fr: 'Donner Maintenant' }) }}
            </a>
            <button @click="$emit('navigate', 'get-involved')"
              class="flex-1 text-center bg-white/10 border border-white/20 text-white font-semibold px-6 py-4 rounded-full text-sm hover:bg-white/20 transition-all">
              {{ t({ en: 'Get Involved', fr: "S'Impliquer" }) }}
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useLang } from '../composables/useLang.js'

defineEmits(['navigate'])
const { t } = useLang()

// ── Form state ──
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})
const errors = reactive({})
const submitted = ref(false)

function validate() {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!form.firstName.trim()) errors.firstName = t({ en: 'First name is required.', fr: 'Le prénom est requis.' })
  if (!form.email.trim()) errors.email = t({ en: 'Email is required.', fr: "L'email est requis." })
  else if (!/\S+@\S+\.\S+/.test(form.email))
    errors.email = t({ en: 'Please enter a valid email.', fr: 'Veuillez entrer un email valide.' })
  if (!form.subject) errors.subject = t({ en: 'Please select a subject.', fr: 'Veuillez sélectionner un objet.' })
  if (!form.message.trim()) errors.message = t({ en: 'Message cannot be empty.', fr: 'Le message ne peut pas être vide.' })
  else if (form.message.length > 500) errors.message = t({ en: 'Max 500 characters.', fr: '500 caractères maximum.' })
  return Object.keys(errors).length === 0
}

function handleSubmit() {
  if (!validate()) return
  // TODO: wire up to your backend / email service
  submitted.value = true
}

// ── Data ──
const contactCards = [
  {
    emoji: '📧',
    label: { en: 'Email', fr: 'Email' },
    value: { en: 'info@women-concern.org', fr: 'info@women-concern.org' },
  },
  {
    emoji: '📞',
    label: { en: 'Phone', fr: 'Téléphone' },
    value: { en: '+243 (0) 123 456 789', fr: '+243 (0) 123 456 789' },
  },
  {
    emoji: '📍',
    label: { en: 'Location', fr: 'Localisation' },
    value: { en: 'Goma, North Kivu, DRC', fr: 'Goma, Nord-Kivu, RDC' },
  },
  {
    emoji: '🤝',
    label: { en: 'Partnerships', fr: 'Partenariats' },
    value: { en: 'partners@women-concern.org', fr: 'partners@women-concern.org' },
  },
]

const subjectOptions = [
  { value: 'general', en: 'General Inquiry', fr: 'Demande Générale' },
  { value: 'donate', en: 'Donation / Fundraising', fr: 'Don / Collecte de Fonds' },
  { value: 'volunteer', en: 'Volunteering', fr: 'Bénévolat' },
  { value: 'partnership', en: 'Partnership Proposal', fr: 'Proposition de Partenariat' },
  { value: 'media', en: 'Media & Press', fr: 'Médias & Presse' },
  { value: 'other', en: 'Other', fr: 'Autre' },
]

const officeHours = [
  { day: { en: 'Monday – Friday', fr: 'Lundi – Vendredi' }, time: { en: '8:00 AM – 5:00 PM', fr: '8h00 – 17h00' }, closed: false },
  { day: { en: 'Saturday', fr: 'Samedi' }, time: { en: '9:00 AM – 1:00 PM', fr: '9h00 – 13h00' }, closed: false },
  { day: { en: 'Sunday', fr: 'Dimanche' }, time: { en: 'Closed', fr: 'Fermé' }, closed: true },
]

const socials = [
  { name: 'Facebook', handle: '@WomenConcernDRC', emoji: '📘', url: '#' },
  { name: 'Instagram', handle: '@womenconcern', emoji: '📸', url: '#' },
  { name: 'Twitter/X', handle: '@WomenConcernDRC', emoji: '🐦', url: '#' },
  { name: 'YouTube', handle: 'Women Concern', emoji: '▶️', url: '#' },
]
</script>

<style scoped>
/* Floating label input system */
.float-group {
  position: relative;
}

.float-input {
  width: 100%;
  padding: 22px 14px 8px;
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  font-size: 14px;
  color: #111827;
  outline: none;
  transition: border-color 0.2s;
  appearance: none;
  font-family: inherit;
}

.float-input:focus {
  border-color: #1E4D35;
}

.float-label {
  position: absolute;
  left: 14px;
  top: 15px;
  font-size: 14px;
  color: #9ca3af;
  pointer-events: none;
  transition: all 0.18s ease;
  background: transparent;
}

/* Lift label when focused or filled */
.float-input:focus~.float-label,
.float-input:not(:placeholder-shown)~.float-label,
select.float-input:focus~.float-label,
select.float-input[value]:not([value=""])~.float-label {
  top: 6px;
  font-size: 10px;
  color: #1E4D35;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* select arrow */
select.float-input {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 40px;
}
</style>