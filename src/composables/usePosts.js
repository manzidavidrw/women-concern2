import { ref } from 'vue'
import { supabase } from '../lib/supabase.js'

// Converts a flat DB row → the shape your templates already expect
function rowToPost(row) {
  return {
    id: row.id,
    slug: row.slug,
    emoji: row.emoji,
    author: row.author,
    authorEmoji: row.author_emoji,
    date: row.date,
    bg: row.bg,
    heroImage: row.hero_image || null,
    image: row.hero_image || null,          // used by BlogIndex card
    images: [
      row.image_1 ? { src: row.image_1, caption: row.image_1_caption || '' } : null,
      row.image_2 ? { src: row.image_2, caption: row.image_2_caption || '' } : null,
    ].filter(Boolean),
    category: { en: row.category_en, fr: row.category_fr },
    readTime: { en: row.read_time_en, fr: row.read_time_fr },
    title: { en: row.title_en, fr: row.title_fr },
    excerpt: { en: row.excerpt_en, fr: row.excerpt_fr },
    quote: { en: row.quote_en, fr: row.quote_fr },
    body: (row.body || []).map(s => ({
      heading: { en: s.heading_en, fr: s.heading_fr },
      text: { en: s.text_en, fr: s.text_fr },
    })),
    body2: (row.body2 || []).map(s => ({
      heading: { en: s.heading_en, fr: s.heading_fr },
      text: { en: s.text_en, fr: s.text_fr },
    })),
  }
}

export function usePosts() {
  const posts = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchAll() {
    loading.value = true
    error.value = null
    const { data, error: err } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (err) { error.value = err.message }
    else { posts.value = data.map(rowToPost) }
    loading.value = false
  }

  async function fetchOne(id) {
    loading.value = true
    error.value = null
    const { data, error: err } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

    loading.value = false
    if (err) { error.value = err.message; return null }
    return rowToPost(data)
  }

  return { posts, loading, error, fetchAll, fetchOne }
}