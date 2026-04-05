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
          {{ t({ en: 'Join Our Team', fr: 'Rejoindre Notre Équipe' }) }}
        </span>
        <h1 class="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-5">
          {{ t({ en: 'Build a Career with', fr: 'Construire une Carrière avec' }) }}<br />
          <span class="text-yellow-400">Women Concern</span>
        </h1>
        <p class="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
          {{ t({
            en: `Create an account to access open positions, submit applications, and track your status — all in one
          place.`,
            fr: `Créez un compte pour accéder aux postes ouverts, soumettre des candidatures et suivre votre statut — en
          un seul endroit.`
          }) }}
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>

    <!-- ── MAIN CONTENT ────────────────────────────────────────── -->
    <div class="max-w-6xl mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- LEFT: Why join + open roles preview -->
        <div class="flex flex-col gap-10">
          <div>
            <span
              class="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {{ t({ en: 'Why Work With Us', fr: 'Pourquoi Nous Rejoindre' }) }}
            </span>
            <h2 class="font-display text-3xl font-black text-gray-900 mb-4 leading-tight">
              {{ t({ en: 'Make an impact from day one.', fr: 'Faites un impact dès le premier jour.' }) }}
            </h2>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ t({
                en: `We are a feminist organisation working at the intersection of humanitarian response, women\'s rights,
              and environmental justice.Our team is passionate, diverse, and driven by purpose.`,
                fr: `Nous sommes une organisation féministe travaillant à l\'intersection de la réponse humanitaire, des
              droits des femmes et de la justice environnementale.Notre équipe est passionnée, diverse et animée par
              une mission.`
              }) }}
            </p>
          </div>

          <!-- Perks -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="perk in perks" :key="perk.en"
              class="bg-green-50 border border-green-100 rounded-2xl p-4 flex gap-3 items-start">
              <span class="text-xl mt-0.5">{{ perk.emoji }}</span>
              <div>
                <p class="text-green-900 text-sm font-bold">{{ t(perk) }}</p>
                <p class="text-green-700/60 text-xs mt-0.5">{{ t(perk.sub) }}</p>
              </div>
            </div>
          </div>

          <!-- Open roles preview -->
          <div>
            <h3 class="font-display text-lg font-black text-gray-900 mb-4">
              {{ t({ en: `Open Positions`, fr: `Postes Ouverts` }) }}
            </h3>
            <div class="flex flex-col gap-3">
              <div v-for="role in openRoles" :key="role.title"
                class="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-5 py-4 hover:border-green-200 hover:shadow-sm transition-all group">
                <div>
                  <p class="text-gray-900 text-sm font-semibold group-hover:text-green-700 transition-colors">{{
                    role.title }}</p>
                  <p class="text-gray-400 text-xs mt-0.5">{{ role.dept }} · {{ role.location }}</p>
                </div>
                <span class="text-xs font-bold px-3 py-1 rounded-full"
                  :class="role.type === 'Full-time' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'">
                  {{ role.type }}
                </span>
              </div>
              <p class="text-gray-400 text-xs text-center pt-1">
                {{ t({
                  en: `Create an account to apply for any position.`, fr: `Créez un compte pour postuler à
                n\'importe quel poste.`}) }}
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT: Auth card (Sign Up / Sign In toggle) -->
        <div class="sticky top-24">
          <div class="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">

            <!-- Tab toggle -->
            <div class="flex border-b border-gray-100">
              <button @click="authMode = 'signup'"
                :class="['flex-1 py-4 text-sm font-bold transition-colors', authMode === 'signup' ? 'text-green-700 border-b-2 border-green-600' : 'text-gray-400 hover:text-gray-600']">
                {{ t({ en: 'Create Account', fr: 'Créer un Compte' }) }}
              </button>
              <button @click="authMode = 'signin'"
                :class="['flex-1 py-4 text-sm font-bold transition-colors', authMode === 'signin' ? 'text-green-700 border-b-2 border-green-600' : 'text-gray-400 hover:text-gray-600']">
                {{ t({ en: 'Sign In', fr: 'Se Connecter' }) }}
              </button>
            </div>

            <div class="p-8">

              <!-- Success state -->
              <div v-if="submitted" class="text-center py-6">
                <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mx-auto mb-4">
                  ✅</div>
                <h3 class="font-display text-xl font-black text-gray-900 mb-2">
                  {{ authMode === 'signup'
                    ? t({ en: 'Account Created!', fr: 'Compte Créé !' })
                    : t({ en: 'Welcome Back!', fr: 'Bon Retour !' }) }}
                </h3>
                <p class="text-gray-400 text-sm mb-6">
                  {{ authMode === 'signup'
                    ? t({
                      en: `Your account is ready. Backend integration coming soon.`, fr: `Votre compte est prêt.
                  Intégration backend bientôt disponible.` })
                    : t({
                      en: `You\'re signed in. Backend integration coming soon.`, fr: `Vous êtes connecté. Intégration
                  backend bientôt disponible.` }) }}
                </p>
                <button @click="submitted = false; form = { name: '', email: '', password: '', confirm: '' }"
                  class="text-green-700 text-sm font-bold hover:underline">
                  {{ t({ en: '← Back', fr: '← Retour' }) }}
                </button>
              </div>

              <!-- Sign Up form -->
              <form v-else-if="authMode === 'signup'" @submit.prevent="handleSubmit" class="flex flex-col gap-4">
                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">{{ t({
                    en: 'Full Name', fr: 'Nom Complet'
                  }) }}</label>
                  <input v-model="form.name" type="text" required
                    :placeholder="t({ en: 'Jane Uwimana', fr: 'Jane Uwimana' })"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">{{ t({
                    en: `Email Address`, fr: `Adresse Email`
                  }) }}</label>
                  <input v-model="form.email" type="email" required
                    :placeholder="t({ en: 'you@example.com', fr: 'vous@exemple.com' })"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">{{ t({
                    en: 'Password', fr: 'Mot de Passe'
                  }) }}</label>
                  <div class="relative">
                    <input v-model="form.password" :type="showPwd ? 'text' : 'password'" required minlength="8"
                      :placeholder="t({ en: 'At least 8 characters', fr: 'Au moins 8 caractères' })"
                      class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all pr-10" />
                    <button type="button" @click="showPwd = !showPwd"
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 text-xs">
                      {{ showPwd ? '🙈' : '👁️' }}
                    </button>
                  </div>
                </div>
                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">{{ t({
                    en: 'Confirm Password', fr:
                      'Confirmer le Mot de Passe'
                  }) }}</label>
                  <input v-model="form.confirm" :type="showPwd ? 'text' : 'password'" required
                    :placeholder="t({ en: 'Repeat your password', fr: 'Répétez votre mot de passe' })"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    :class="form.confirm && form.confirm !== form.password ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''" />
                  <p v-if="form.confirm && form.confirm !== form.password" class="text-red-400 text-xs mt-1">
                    {{ t({ en: 'Passwords do not match', fr: 'Les mots de passe ne correspondent pas' }) }}
                  </p>
                </div>

                <p v-if="error" class="text-red-500 text-xs bg-red-50 rounded-lg px-3 py-2">{{ error }}</p>

                <button type="submit" :disabled="loading || (form.confirm && form.confirm !== form.password)"
                  class="w-full bg-green-700 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-1">
                  {{ loading ? t({ en: `Creating...`, fr: `Création...` }) : t({
                    en: `Create My Account`, fr: `Créer Mon Compte`
                  }) }}
                </button>

                <p class="text-gray-400 text-xs text-center">
                  {{ t({
                    en: `By signing up you agree to our terms of service.`, fr: `En vous inscrivant, vous acceptez
                  nos conditions d\'utilisation.` }) }}
                </p>
              </form>

              <!-- Sign In form -->
              <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-4">
                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">{{ t({
                    en: `Email Address`, fr: `Adresse
                    Email` }) }}</label>
                  <input v-model="form.email" type="email" required
                    :placeholder="t({ en: 'you@example.com', fr: 'vous@exemple.com' })"
                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                </div>
                <div>
                  <label class="text-xs font-bold text-gray-600 block mb-1.5">{{ t({
                    en: 'Password', fr: 'Mot de Passe'
                  }) }}</label>
                  <div class="relative">
                    <input v-model="form.password" :type="showPwd ? 'text' : 'password'" required
                      :placeholder="t({ en: 'Your password', fr: 'Votre mot de passe' })"
                      class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all pr-10" />
                    <button type="button" @click="showPwd = !showPwd"
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 text-xs">
                      {{ showPwd ? '🙈' : '👁️' }}
                    </button>
                  </div>
                </div>
                <div class="flex justify-end">
                  <button type="button" class="text-green-700 text-xs font-bold hover:underline">
                    {{ t({ en: 'Forgot password?', fr: 'Mot de passe oublié ?' }) }}
                  </button>
                </div>

                <p v-if="error" class="text-red-500 text-xs bg-red-50 rounded-lg px-3 py-2">{{ error }}</p>

                <button type="submit" :disabled="loading"
                  class="w-full bg-green-700 text-white font-bold text-sm py-3.5 rounded-xl hover:bg-green-600 transition-colors disabled:opacity-50 mt-1">
                  {{ loading ? t({ en: 'Signing in...', fr: 'Connexion...' }) : t({ en: 'Sign In', fr: 'Se Connecter' })
                  }}
                </button>
              </form>

            </div>

            <!-- Backend notice -->
            <div class="bg-yellow-50 border-t border-yellow-100 px-8 py-4 flex gap-3 items-start">
              <span class="text-yellow-500 text-lg mt-0.5">⚙️</span>
              <p class="text-yellow-700 text-xs leading-relaxed">
                {{ t({
                  en: `Backend integration coming soon. Account data will be stored securely once the API is connected.`,
                  fr: `Intégration backend bientôt disponible. Les données seront stockées en toute sécurité une fois
                l\'API connectée.`
                }) }}
              </p>
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

const authMode = ref('signup')
const submitted = ref(false)
const loading = ref(false)
const showPwd = ref(false)
const error = ref('')
const form = ref({ name: '', email: '', password: '', confirm: '' })

const handleSubmit = async () => {
  error.value = ''
  if (authMode.value === 'signup' && form.value.password !== form.value.confirm) {
    error.value = t({ en: 'Passwords do not match.', fr: 'Les mots de passe ne correspondent pas.' })
    return
  }
  loading.value = true
  // Simulate API call — replace with real backend call
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  submitted.value = true
}

const perks = [
  { emoji: '🌍', en: 'Mission-Driven', fr: 'Animée par la Mission', sub: { en: 'Work that changes lives', fr: 'Un travail qui change des vies' } },
  { emoji: '🏡', en: 'Remote-Friendly', fr: 'Télétravail Possible', sub: { en: 'Goma or anywhere', fr: 'Goma ou partout ailleurs' } },
  { emoji: '📚', en: 'Learning & Growth', fr: 'Apprentissage & Évolution', sub: { en: 'Continuous development', fr: 'Développement continu' } },
  { emoji: '💚', en: 'Inclusive Culture', fr: 'Culture Inclusive', sub: { en: 'Feminist & diverse team', fr: 'Équipe féministe & diverse' } },
]

const openRoles = [
  { title: 'Field Coordinator — Goma', dept: 'Programs', location: 'On-site, DRC', type: 'Full-time' },
  { title: 'Communications Officer', dept: 'Comms', location: 'Remote', type: 'Full-time' },
  { title: 'M&E Specialist', dept: 'Research', location: 'Hybrid', type: 'Full-time' },
  { title: 'Malkia Pad Distribution Lead', dept: 'Operations', location: 'On-site, DRC', type: 'Contract' },
]
</script>