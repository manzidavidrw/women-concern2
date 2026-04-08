<template>
  <div class="pb-20 min-h-screen bg-white">

    <!-- Loading -->
    <div v-if="loading" class="pt-40 text-center text-gray-400">Loading…</div>

    <template v-else-if="post">

      <!-- Breadcrumb -->
      <div class="pt-24 bg-white border-b border-gray-100 px-6 lg:px-10">
        <div class="max-w-3xl mx-auto py-3 flex items-center gap-2 text-xs text-gray-400 font-medium">
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
          <button @click="$emit('navigate', 'blog')" class="hover:text-brand-green transition-colors">
            {{ t({ en: 'Stories', fr: 'Histoires' }) }}
          </button>
          <svg class="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-brand-green font-semibold truncate max-w-[160px]">{{ t(post.title) }}</span>
        </div>
      </div>

      <!-- Hero image band -->
      <div class="relative h-72 md:h-[420px] flex items-end overflow-hidden">
        <img v-if="post.heroImage" :src="post.heroImage" :alt="t(post.title)"
          class="absolute inset-0 w-full h-full object-cover" />
        <div v-else class="absolute inset-0" :style="{ background: post.bg }"></div>

        <!-- Dark overlay -->
        <div class="absolute inset-0"
          style="background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" />

        <!-- Title overlay -->
        <div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pb-10 w-full">
          <span
            class="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-3 py-1 text-white/80 text-xs font-medium mb-4">
            {{ post.emoji }} {{ t(post.category) }}
          </span>
          <h1 class="font-display font-bold text-white text-3xl md:text-5xl leading-tight">
            {{ t(post.title) }}
          </h1>
        </div>
      </div>

      <!-- Article body -->
      <div class="max-w-3xl mx-auto px-6 lg:px-10">

        <!-- Date + donate bar -->
        <div class="flex items-center justify-between py-6 border-b border-gray-100 mb-10">
          <p class="text-gray-400 text-sm">{{ post.date }}</p>
          <a href="https://gogetfunding.com/PLACEHOLDER" target="_blank"
            class="bg-brand-yellow text-brand-green font-semibold text-xs px-4 py-2 rounded-full hover:brightness-105 transition-all">
            ♥ {{ t({ en: 'Support Us', fr: 'Nous Soutenir' }) }}
          </a>
        </div>

        <!-- Excerpt lead -->
        <p class="text-gray-600 text-lg leading-relaxed font-medium mb-8">{{ t(post.excerpt) }}</p>

        <!-- Body sections (before images) -->
        <div v-for="(section, i) in post.body" :key="'b1-' + i" class="mb-8">
          <h2 v-if="section.heading && t(section.heading)" class="font-display font-bold text-gray-900 text-2xl mb-3">
            {{ t(section.heading) }}
          </h2>
          <p class="text-gray-500 text-base leading-relaxed">{{ t(section.text) }}</p>
        </div>

        <!-- Inline Image 1 -->
        <div v-if="post.images && post.images[0]" class="my-10 rounded-2xl overflow-hidden">
          <img :src="post.images[0].src" class="w-full h-64 md:h-80 object-cover" />
        </div>

        <!-- Pull quote -->
        <blockquote v-if="t(post.quote)" class="border-l-4 border-brand-yellow pl-6 my-10">
          <p class="font-display font-bold text-brand-green text-2xl leading-snug italic">
            "{{ t(post.quote) }}"
          </p>
        </blockquote>

        <!-- Body sections (after images) -->
        <div v-for="(section, i) in post.body2" :key="'b2-' + i" class="mb-8">
          <h2 v-if="section.heading && t(section.heading)" class="font-display font-bold text-gray-900 text-2xl mb-3">
            {{ t(section.heading) }}
          </h2>
          <p class="text-gray-500 text-base leading-relaxed">{{ t(section.text) }}</p>
        </div>

        <!-- Inline Image 2 -->
        <div v-if="post.images && post.images[1]" class="my-10 rounded-2xl overflow-hidden">
          <img :src="post.images[1].src" class="w-full h-64 md:h-80 object-cover" />
        </div>

        <!-- CTA -->
        <div class="mt-14 bg-brand-green rounded-3xl p-8 md:p-10 text-center">
          <h3 class="font-display font-bold text-white text-2xl mb-2">
            {{ t({ en: 'Want to Make a Difference?', fr: 'Vous Voulez Faire une Différence ?' }) }}
          </h3>
          <p class="text-white/55 text-sm mb-6 max-w-sm mx-auto">
            {{ t({
              en: `Your support directly funds stories like this one.`, fr: `Votre soutien finance directement des
            histoires comme celle-ci.` }) }}
          </p>
          <a href="https://gogetfunding.com/PLACEHOLDER" target="_blank"
            class="pulse-btn inline-block bg-brand-yellow text-brand-green font-bold px-8 py-4 rounded-full hover:brightness-105 transition-all">
            ♥ {{ t({ en: 'Donate Now', fr: 'Donner Maintenant' }) }}
          </a>
        </div>

        <!-- More stories -->
        <div v-if="otherPosts.length" class="mt-14">
          <h3 class="font-display font-bold text-gray-900 text-2xl mb-6">
            {{ t({ en: 'More Stories', fr: "Plus d'Histoires" }) }}
          </h3>
          <div class="grid sm:grid-cols-2 gap-5">
            <div v-for="other in otherPosts" :key="other.id" @click="$emit('navigate', 'blog-' + other.id)"
              class="group cursor-pointer flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-brand-yellow/30 hover:bg-gray-50 transition-all">
              <div class="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden">
                <img v-if="other.heroImage" :src="other.heroImage" :alt="t(other.title)"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div v-else class="w-full h-full flex items-center justify-center text-2xl"
                  :style="{ background: other.bg }">
                  {{ other.emoji }}
                </div>
              </div>
              <div>
                <p
                  class="text-gray-800 text-sm font-semibold leading-tight group-hover:text-brand-green transition-colors mb-1">
                  {{ t(other.title) }}
                </p>
                <p class="text-gray-400 text-xs">{{ other.date }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useLang } from '../composables/useLang.js'
import { supabase } from '../lib/supabase.js'

const props = defineProps({ postId: { type: Number, required: true } })
defineEmits(['navigate'])
const { t } = useLang()

const post = ref(null)
const allPosts = ref([])
const loading = ref(true)

function mapPost(p) {
  return {
    id: p.id,
    heroImage: p.hero_image_url || null,
    images: [
      p.image1_url ? { src: p.image1_url } : null,
      p.image2_url ? { src: p.image2_url } : null,
    ].filter(Boolean),
    bg: p.bg || 'linear-gradient(135deg, #1E4D35 0%, #163a28 100%)',
    emoji: p.emoji || '',
    date: p.date || '',
    category: { en: p.category_en || '', fr: p.category_fr || '' },
    title: { en: p.title_en || '', fr: p.title_fr || '' },
    excerpt: { en: p.excerpt_en || '', fr: p.excerpt_fr || '' },
    quote: { en: p.quote_en || '', fr: p.quote_fr || '' },
    body: p.body || [],
    body2: p.body2 || [],
  }
}

async function fetchData() {
  loading.value = true
  const { data } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (data) {
    allPosts.value = data.map(mapPost)
    post.value = allPosts.value.find(p => p.id === props.postId) || null
  }
  loading.value = false
}

onMounted(fetchData)
watch(() => props.postId, fetchData)

const otherPosts = computed(() =>
  allPosts.value.filter(p => p.id !== props.postId).slice(0, 2)
)
</script>