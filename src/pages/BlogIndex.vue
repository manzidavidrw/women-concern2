<template>
  <div class="pb-20 min-h-screen bg-white">

    <!-- Breadcrumb -->
    <div class="pt-24 bg-white border-b border-gray-100 px-6 lg:px-10">
      <div class="max-w-6xl mx-auto py-3 flex items-center gap-2 text-xs text-gray-400 font-medium">
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
        <span class="text-brand-green font-semibold">{{ t({ en: 'Stories', fr: 'Histoires' }) }}</span>
      </div>
    </div>

    <!-- Header -->
    <div class="max-w-6xl mx-auto px-6 lg:px-10 pt-14 pb-10">
      <span class="section-label">{{ t({ en: 'Our Stories', fr: 'Nos Histoires' }) }}</span>
      <h1 class="font-display font-bold text-gray-900 text-4xl md:text-5xl mt-1 mb-3">
        {{ t({ en: 'From the Field', fr: 'Du Terrain' }) }}
      </h1>
      <p class="text-gray-400 max-w-xl text-base leading-relaxed">
        {{ t({
          en:`Real stories of change from DRC — written by our teams and the women we serve.`,
          fr: `De vraies histoires de changement de la RDC — écrites par nos équipes et les femmes que
        nous servons.`
        }) }}
      </p>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="max-w-6xl mx-auto px-6 lg:px-10 py-20 text-center text-gray-400">
      Loading stories...
    </div>

    <!-- Cards grid -->
    <div v-else class="max-w-6xl mx-auto px-6 lg:px-10">
      <div class="grid md:grid-cols-2 gap-8">
        <article v-for="post in posts" :key="post.id" @click="$emit('navigate', 'blog-' + post.id)"
          class="group cursor-pointer bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <!-- Card image -->
          <div class="h-52 relative overflow-hidden">
            <img v-if="post.image" :src="post.image" :alt="t(post.title)"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2"
              :style="{ background: post.bg }">
              <div class="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" stroke-width="1.5"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>

            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            <!-- Category + date -->
            <div class="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
              <span
                class="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                {{ post.emoji }} {{ t(post.category) }}
              </span>
              <span class="text-white/60 text-xs bg-black/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                {{ post.date }}
              </span>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-6">
            <h2
              class="font-display font-bold text-gray-900 text-xl leading-tight mb-3 group-hover:text-brand-green transition-colors">
              {{ t(post.title) }}
            </h2>
            <p class="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
              {{ t(post.excerpt) }}
            </p>
            <div class="flex items-center justify-end">
              <span
                class="text-brand-green text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                {{ t({ en: 'Read', fr: 'Lire' }) }}
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none"
                  stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </div>

      <div v-if="posts.length === 0" class="py-20 text-center text-gray-400">
        No stories yet.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLang } from '../composables/useLang.js'
import { supabase } from '../lib/supabase.js'

defineEmits(['navigate'])
const { t } = useLang()

const posts = ref([])
const loading = ref(true)

function mapPost(p) {
  return {
    id: p.id,
    image: p.hero_image_url || null,
    bg: p.bg || 'linear-gradient(135deg, #1E4D35 0%, #163a28 100%)',
    emoji: p.emoji || '',
    date: p.date || '',
    category: { en: p.category_en || '', fr: p.category_fr || '' },
    title: { en: p.title_en || '', fr: p.title_fr || '' },
    excerpt: { en: p.excerpt_en || '', fr: p.excerpt_fr || '' },
  }
}

onMounted(async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title_en, title_fr, excerpt_en, excerpt_fr, category_en, category_fr, emoji, date, bg, hero_image_url, published')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (!error && data) posts.value = data.map(mapPost)
  loading.value = false
})
</script>