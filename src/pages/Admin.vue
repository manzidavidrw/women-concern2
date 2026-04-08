<template>
  <div class="admin-shell">

    <!-- ── LOGIN ── -->
    <div v-if="!session" class="login-wrap">
      <div class="login-card">
        <div class="login-logo">
          <span class="logo-mark">WC</span>
          <span class="logo-text">Admin</span>
        </div>
        <h1 class="login-title">Sign in to manage stories</h1>
        <p v-if="authError" class="error-pill">{{ authError }}</p>
        <label class="field-label">Email</label>
        <input v-model="email" type="email" class="field-input" placeholder="you@example.com" @keydown.enter="signIn" />
        <label class="field-label" style="margin-top:14px">Password</label>
        <input v-model="password" type="password" class="field-input" placeholder="••••••••" @keydown.enter="signIn" />
        <button class="btn-primary" :disabled="signingIn" @click="signIn">
          {{ signingIn ? 'Signing in…' : 'Sign in' }}
        </button>
      </div>
    </div>

    <!-- ── MAIN APP ── -->
    <template v-else>

      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-brand">
          <span class="logo-mark sm">WC</span>
          <span class="logo-text">Stories</span>
        </div>
        <nav class="sidebar-nav">
          <button class="nav-item" :class="{ active: view === 'list' }" @click="view = 'list'; editingPost = null">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            All Posts
          </button>
          <button class="nav-item" :class="{ active: view === 'new' }" @click="startNew">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            New Post
          </button>
        </nav>
        <button class="signout-btn" @click="signOut">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
          </svg>
          Sign out
        </button>
      </aside>

      <!-- Main content -->
      <main class="main-area">

        <!-- Toast -->
        <div v-if="toast" class="toast" :class="toast.type">{{ toast.message }}</div>

        <!-- ── POST LIST ── -->
        <section v-if="view === 'list'">
          <div class="page-header">
            <div>
              <h2 class="page-title">All Stories</h2>
              <p class="page-sub">{{ posts.length }} post{{ posts.length !== 1 ? 's' : '' }}</p>
            </div>
            <button class="btn-primary" @click="startNew">+ New Post</button>
          </div>

          <div v-if="loadingPosts" class="loading-state">Loading posts…</div>

          <div v-else class="post-list">
            <div v-for="p in posts" :key="p.id" class="post-row">
              <div class="post-row-emoji">{{ p.emoji }}</div>
              <div class="post-row-info">
                <p class="post-row-title">{{ p.title_en }}</p>
                <p class="post-row-meta">{{ p.category_en }} · {{ p.date }}</p>
              </div>
              <span class="badge" :class="p.published ? 'published' : 'draft'">
                {{ p.published ? 'Published' : 'Draft' }}
              </span>
              <div class="post-row-actions">
                <button class="icon-btn" title="Edit" @click="editPost(p)">
                  <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button class="icon-btn danger" title="Delete" @click="confirmDelete(p)">
                  <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div v-if="posts.length === 0" class="empty-state">No posts yet. Create your first story!</div>
          </div>
        </section>

        <!-- ── EDITOR ── -->
        <section v-if="view === 'new' || view === 'edit'">
          <div class="page-header">
            <div>
              <h2 class="page-title">{{ view === 'edit' ? 'Edit Post' : 'New Post' }}</h2>
              <p class="page-sub">English is required. French is optional.</p>
            </div>
          </div>

          <div class="editor-grid">

            <!-- LEFT: content -->
            <div class="editor-main">

              <!-- Post Info -->
              <div class="card">
                <h3 class="card-title">Post Info</h3>

                <div class="field-row">
                  <div class="field-group">
                    <label class="field-label">Category (English) <span class="req">*</span></label>
                    <input v-model="form.category_en" class="field-input" placeholder="Emergency Response" />
                  </div>
                  <div class="field-group">
                    <label class="field-label">Category (French)</label>
                    <input v-model="form.category_fr" class="field-input" placeholder="Réponse d'Urgence" />
                  </div>
                </div>

                <div class="field-row">
                  <div class="field-group">
                    <label class="field-label">Date</label>
                    <input v-model="form.date" class="field-input" placeholder="March 2024" />
                  </div>
                  <div class="field-group" style="max-width:90px">
                    <label class="field-label">Emoji</label>
                    <input v-model="form.emoji" class="field-input" placeholder="🌿" />
                  </div>
                </div>

                <div class="field-group">
                  <label class="field-label">Card Background Gradient</label>
                  <input v-model="form.bg" class="field-input font-mono"
                    placeholder="linear-gradient(135deg, #1E4D35 0%, #163a28 100%)" />
                  <div class="bg-preview" :style="{ background: form.bg || '#1E4D35' }"></div>
                  <p class="field-hint">Only shown when there is no hero image. Generate one at <a
                      href="https://cssgradient.io" target="_blank">cssgradient.io</a></p>
                </div>
              </div>

              <!-- Title & Excerpt -->
              <div class="card">
                <h3 class="card-title">Title & Excerpt</h3>
                <div class="field-group">
                  <label class="field-label">Title (English) <span class="req">*</span></label>
                  <input v-model="form.title_en" class="field-input"
                    placeholder="Standing With Goma in Its Darkest Hour" />
                </div>
                <div class="field-group">
                  <label class="field-label">Title (French)</label>
                  <input v-model="form.title_fr" class="field-input" />
                </div>
                <div class="field-group">
                  <label class="field-label">Excerpt (English) <span class="req">*</span></label>
                  <textarea v-model="form.excerpt_en" class="field-textarea" rows="3"
                    placeholder="Short summary shown on the blog card…"></textarea>
                </div>
                <div class="field-group">
                  <label class="field-label">Excerpt (French)</label>
                  <textarea v-model="form.excerpt_fr" class="field-textarea" rows="3"></textarea>
                </div>
              </div>

              <!-- Pull Quote -->
              <div class="card">
                <h3 class="card-title">Pull Quote <span class="card-hint">— highlighted inside the article</span></h3>
                <div class="field-group">
                  <label class="field-label">Quote (English)</label>
                  <textarea v-model="form.quote_en" class="field-textarea" rows="2"
                    placeholder="One powerful sentence from the story…"></textarea>
                </div>
                <div class="field-group">
                  <label class="field-label">Quote (French)</label>
                  <textarea v-model="form.quote_fr" class="field-textarea" rows="2"></textarea>
                </div>
              </div>

              <!-- Body Part 1 -->
              <div class="card">
                <div class="card-header-row">
                  <div>
                    <h3 class="card-title">Body — Part 1</h3>
                    <p class="card-hint">Shown before the first inline image</p>
                  </div>
                  <button class="btn-ghost" @click="addSection('body')">+ Add section</button>
                </div>
                <div v-for="(sec, i) in form.body" :key="'b' + i" class="section-block">
                  <div class="section-block-header">
                    <span class="section-num">Section {{ i + 1 }}</span>
                    <button class="icon-btn danger sm" @click="removeSection('body', i)">✕</button>
                  </div>
                  <div class="field-group">
                    <label class="field-label">Heading (EN)</label>
                    <input v-model="sec.heading.en" class="field-input" />
                  </div>
                  <div class="field-group">
                    <label class="field-label">Heading (FR)</label>
                    <input v-model="sec.heading.fr" class="field-input" />
                  </div>
                  <div class="field-group">
                    <label class="field-label">Paragraph (EN)</label>
                    <textarea v-model="sec.text.en" class="field-textarea" rows="4"></textarea>
                  </div>
                  <div class="field-group">
                    <label class="field-label">Paragraph (FR)</label>
                    <textarea v-model="sec.text.fr" class="field-textarea" rows="4"></textarea>
                  </div>
                </div>
                <div v-if="form.body.length === 0" class="section-empty">No sections yet — click "+ Add section"</div>
              </div>

              <!-- Body Part 2 -->
              <div class="card">
                <div class="card-header-row">
                  <div>
                    <h3 class="card-title">Body — Part 2</h3>
                    <p class="card-hint">Shown after the first inline image</p>
                  </div>
                  <button class="btn-ghost" @click="addSection('body2')">+ Add section</button>
                </div>
                <div v-for="(sec, i) in form.body2" :key="'b2' + i" class="section-block">
                  <div class="section-block-header">
                    <span class="section-num">Section {{ i + 1 }}</span>
                    <button class="icon-btn danger sm" @click="removeSection('body2', i)">✕</button>
                  </div>
                  <div class="field-group">
                    <label class="field-label">Heading (EN)</label>
                    <input v-model="sec.heading.en" class="field-input" />
                  </div>
                  <div class="field-group">
                    <label class="field-label">Heading (FR)</label>
                    <input v-model="sec.heading.fr" class="field-input" />
                  </div>
                  <div class="field-group">
                    <label class="field-label">Paragraph (EN)</label>
                    <textarea v-model="sec.text.en" class="field-textarea" rows="4"></textarea>
                  </div>
                  <div class="field-group">
                    <label class="field-label">Paragraph (FR)</label>
                    <textarea v-model="sec.text.fr" class="field-textarea" rows="4"></textarea>
                  </div>
                </div>
                <div v-if="form.body2.length === 0" class="section-empty">No sections yet — click "+ Add section"</div>
              </div>

            </div>

            <!-- RIGHT: images -->
            <div class="editor-sidebar">
              <div class="card">
                <h3 class="card-title">Images</h3>

                <div class="field-group">
                  <label class="field-label">Hero / Cover Image</label>
                  <div class="upload-zone" @click="triggerUpload('hero')" @dragover.prevent
                    @drop.prevent="dropFile($event, 'hero')">
                    <img v-if="form.hero_image_url" :src="form.hero_image_url" class="upload-preview" />
                    <div v-else class="upload-placeholder">
                      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Click or drag to upload</span>
                    </div>
                    <div v-if="uploading.hero" class="upload-progress">Uploading…</div>
                  </div>
                  <input v-model="form.hero_image_url" class="field-input" style="margin-top:8px"
                    placeholder="or paste image URL" />
                  <button v-if="form.hero_image_url" class="btn-ghost danger-ghost" style="margin-top:6px"
                    @click="form.hero_image_url = ''">Remove</button>
                </div>

                <div class="field-group">
                  <label class="field-label">Inline Image 1 <span class="card-hint">— after body pt.1</span></label>
                  <div class="upload-zone sm" @click="triggerUpload('img1')" @dragover.prevent
                    @drop.prevent="dropFile($event, 'img1')">
                    <img v-if="form.image1_url" :src="form.image1_url" class="upload-preview" />
                    <div v-else class="upload-placeholder sm">
                      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Add image</span>
                    </div>
                    <div v-if="uploading.img1" class="upload-progress">Uploading…</div>
                  </div>
                  <input v-model="form.image1_url" class="field-input" style="margin-top:8px"
                    placeholder="or paste URL" />
                  <button v-if="form.image1_url" class="btn-ghost danger-ghost" style="margin-top:6px"
                    @click="form.image1_url = ''">Remove</button>
                </div>

                <div class="field-group">
                  <label class="field-label">Inline Image 2 <span class="card-hint">— after body pt.2</span></label>
                  <div class="upload-zone sm" @click="triggerUpload('img2')" @dragover.prevent
                    @drop.prevent="dropFile($event, 'img2')">
                    <img v-if="form.image2_url" :src="form.image2_url" class="upload-preview" />
                    <div v-else class="upload-placeholder sm">
                      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Add image</span>
                    </div>
                    <div v-if="uploading.img2" class="upload-progress">Uploading…</div>
                  </div>
                  <input v-model="form.image2_url" class="field-input" style="margin-top:8px"
                    placeholder="or paste URL" />
                  <button v-if="form.image2_url" class="btn-ghost danger-ghost" style="margin-top:6px"
                    @click="form.image2_url = ''">Remove</button>
                </div>

                <!-- Hidden file inputs -->
                <input ref="heroInput" type="file" accept="image/*" style="display:none"
                  @change="handleFileChange($event, 'hero')" />
                <input ref="img1Input" type="file" accept="image/*" style="display:none"
                  @change="handleFileChange($event, 'img1')" />
                <input ref="img2Input" type="file" accept="image/*" style="display:none"
                  @change="handleFileChange($event, 'img2')" />
              </div>
            </div>

          </div>

          <!-- Bottom save bar -->
          <div class="bottom-bar">
            <label class="toggle-wrap">
              <input type="checkbox" v-model="form.published" class="toggle-input" />
              <span class="toggle-track"></span>
              <span class="toggle-label">{{ form.published ? 'Published' : 'Draft' }}</span>
            </label>
            <div style="display:flex;gap:10px">
              <button class="btn-secondary" @click="view = 'list'; editingPost = null">Cancel</button>
              <button class="btn-primary large" :disabled="saving" @click="savePost">
                {{ saving ? 'Saving…' : (view === 'edit' ? '✓ Update Post' : '✓ Publish Post') }}
              </button>
            </div>
          </div>

        </section>

      </main>
    </template>

    <!-- Delete confirm modal -->
    <div v-if="deleteTarget" class="modal-overlay" @click.self="deleteTarget = null">
      <div class="modal-card">
        <h3 class="modal-title">Delete post?</h3>
        <p class="modal-body">"<strong>{{ deleteTarget.title_en }}</strong>" will be permanently removed. This cannot be
          undone.</p>
        <div class="modal-actions">
          <button class="btn-secondary" @click="deleteTarget = null">Cancel</button>
          <button class="btn-danger" :disabled="deleting" @click="deletePost">
            {{ deleting ? 'Deleting…' : 'Yes, delete' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { supabase } from '../lib/supabase.js'

// ── Auth ──────────────────────────────────────────────────────────
const session = ref(null)
const email = ref('')
const password = ref('')
const signingIn = ref(false)
const authError = ref('')

onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  session.value = data.session
  supabase.auth.onAuthStateChange((_, s) => { session.value = s })
  if (session.value) loadPosts()
})

async function signIn() {
  signingIn.value = true
  authError.value = ''
  const { error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value })
  if (error) authError.value = error.message
  else loadPosts()
  signingIn.value = false
}

async function signOut() {
  await supabase.auth.signOut()
  session.value = null
  view.value = 'list'
}

// ── Post list ─────────────────────────────────────────────────────
const posts = ref([])
const loadingPosts = ref(false)
const view = ref('list')
const deleteTarget = ref(null)
const deleting = ref(false)

async function loadPosts() {
  loadingPosts.value = true
  const { data } = await supabase
    .from('posts')
    .select('id, title_en, category_en, date, emoji, published')
    .order('created_at', { ascending: false })
  posts.value = data || []
  loadingPosts.value = false
}

function confirmDelete(p) { deleteTarget.value = p }

async function deletePost() {
  deleting.value = true
  await supabase.from('posts').delete().eq('id', deleteTarget.value.id)
  showToast('Post deleted', 'success')
  deleteTarget.value = null
  deleting.value = false
  loadPosts()
}

// ── Form ──────────────────────────────────────────────────────────
const editingPost = ref(null)
const saving = ref(false)

const emptyForm = () => ({
  emoji: '',
  date: '',
  category_en: '',
  category_fr: '',
  bg: 'linear-gradient(135deg, #1E4D35 0%, #163a28 100%)',
  title_en: '',
  title_fr: '',
  excerpt_en: '',
  excerpt_fr: '',
  quote_en: '',
  quote_fr: '',
  hero_image_url: '',
  image1_url: '',
  image2_url: '',
  body: [],
  body2: [],
  published: true,
})

const form = reactive(emptyForm())

function startNew() {
  editingPost.value = null
  Object.assign(form, emptyForm())
  view.value = 'new'
  window.scrollTo(0, 0)
}

function editPost(p) {
  supabase.from('posts').select('*').eq('id', p.id).single().then(({ data }) => {
    if (!data) return
    editingPost.value = data
    Object.assign(form, {
      emoji: data.emoji || '',
      date: data.date || '',
      category_en: data.category_en || '',
      category_fr: data.category_fr || '',
      bg: data.bg || 'linear-gradient(135deg, #1E4D35 0%, #163a28 100%)',
      title_en: data.title_en || '',
      title_fr: data.title_fr || '',
      excerpt_en: data.excerpt_en || '',
      excerpt_fr: data.excerpt_fr || '',
      quote_en: data.quote_en || '',
      quote_fr: data.quote_fr || '',
      hero_image_url: data.hero_image_url || '',
      image1_url: data.image1_url || '',
      image2_url: data.image2_url || '',
      body: data.body ? JSON.parse(JSON.stringify(data.body)) : [],
      body2: data.body2 ? JSON.parse(JSON.stringify(data.body2)) : [],
      published: data.published ?? true,
    })
    view.value = 'edit'
    window.scrollTo(0, 0)
  })
}

function addSection(field) {
  form[field].push({ heading: { en: '', fr: '' }, text: { en: '', fr: '' } })
}

function removeSection(field, i) {
  form[field].splice(i, 1)
}

async function savePost() {
  if (!form.title_en) {
    showToast('English title is required', 'error')
    return
  }
  saving.value = true

  const payload = {
    emoji: form.emoji || null,
    date: form.date || null,
    category_en: form.category_en || null,
    category_fr: form.category_fr || null,
    bg: form.bg || null,
    title_en: form.title_en,
    title_fr: form.title_fr || null,
    excerpt_en: form.excerpt_en || null,
    excerpt_fr: form.excerpt_fr || null,
    quote_en: form.quote_en || null,
    quote_fr: form.quote_fr || null,
    hero_image_url: form.hero_image_url || null,
    image1_url: form.image1_url || null,
    image2_url: form.image2_url || null,
    body: form.body,
    body2: form.body2,
    published: form.published,
  }

  let error
  if (editingPost.value) {
    ; ({ error } = await supabase.from('posts').update(payload).eq('id', editingPost.value.id))
  } else {
    ; ({ error } = await supabase.from('posts').insert(payload))
  }

  saving.value = false

  if (error) {
    showToast(error.message, 'error')
  } else {
    showToast(editingPost.value ? 'Post updated!' : 'Post published!', 'success')
    loadPosts()
    view.value = 'list'
    editingPost.value = null
  }
}

// ── Image upload ──────────────────────────────────────────────────
const heroInput = ref(null)
const img1Input = ref(null)
const img2Input = ref(null)
const uploading = reactive({ hero: false, img1: false, img2: false })

function triggerUpload(field) {
  if (field === 'hero') heroInput.value.click()
  else if (field === 'img1') img1Input.value.click()
  else img2Input.value.click()
}

function dropFile(event, field) {
  const file = event.dataTransfer.files[0]
  if (file) uploadFile(file, field)
}

function handleFileChange(event, field) {
  const file = event.target.files[0]
  if (file) uploadFile(file, field)
}

async function uploadFile(file, field) {
  uploading[field] = true
  const ext = file.name.split('.').pop()
  const path = `${Date.now()}-${field}.${ext}`
  const { error } = await supabase.storage.from('blog-images').upload(path, file, { upsert: true })
  if (error) {
    showToast('Upload failed: ' + error.message, 'error')
  } else {
    const { data } = supabase.storage.from('blog-images').getPublicUrl(path)
    if (field === 'hero') form.hero_image_url = data.publicUrl
    else if (field === 'img1') form.image1_url = data.publicUrl
    else form.image2_url = data.publicUrl
    showToast('Image uploaded!', 'success')
  }
  uploading[field] = false
}

// ── Toast ─────────────────────────────────────────────────────────
const toast = ref(null)
let toastTimer = null

function showToast(message, type = 'success') {
  toast.value = { message, type }
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toast.value = null }, 3200)
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.admin-shell {
  display: flex;
  min-height: 100vh;
  padding-top: 80px;
  background: #f5f4f0;
  font-family: 'DM Sans', system-ui, sans-serif;
}

/* ── Login ── */
.login-wrap {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f4f0;
}

.login-card {
  background: #fff;
  border-radius: 20px;
  padding: 48px 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.login-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.login-title {
  font-size: 20px;
  font-weight: 700;
  color: #111;
  margin-bottom: 6px;
}

.error-pill {
  background: #fef2f2;
  color: #b91c1c;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
}

/* ── Brand ── */
.logo-mark {
  width: 36px;
  height: 36px;
  background: #1E4D35;
  color: #fff;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.logo-mark.sm {
  width: 30px;
  height: 30px;
  font-size: 10px;
  border-radius: 8px;
}

.logo-text {
  font-size: 15px;
  font-weight: 700;
  color: #1E4D35;
}

/* ── Sidebar ── */
.sidebar {
  width: 220px;
  flex-shrink: 0;
  background: #fff;
  border-right: 1px solid #e8e7e2;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: auto;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px;
  margin-bottom: 28px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 500;
  color: #555;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, color 0.15s;
}

.nav-item:hover {
  background: #f5f4f0;
  color: #1E4D35;
}

.nav-item.active {
  background: #e8f0eb;
  color: #1E4D35;
  font-weight: 600;
}

.signout-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: color 0.15s;
}

.signout-btn:hover {
  color: #b91c1c;
}

/* ── Main ── */
.main-area {
  flex: 1;
  padding: 36px 40px;
  overflow: auto;
  position: relative;
}

.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
  gap: 16px;
  flex-wrap: wrap;
}

.page-title {
  font-size: 22px;
  font-weight: 700;
  color: #111;
}

.page-sub {
  font-size: 13px;
  color: #999;
  margin-top: 2px;
}

/* ── Post list ── */
.post-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.post-row {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fff;
  border: 1px solid #e8e7e2;
  border-radius: 14px;
  padding: 14px 18px;
  transition: box-shadow 0.15s;
}

.post-row:hover {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
}

.post-row-emoji {
  font-size: 20px;
  flex-shrink: 0;
}

.post-row-info {
  flex: 1;
  min-width: 0;
}

.post-row-title {
  font-size: 14px;
  font-weight: 600;
  color: #111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-row-meta {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.post-row-actions {
  display: flex;
  gap: 4px;
}

.badge {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 20px;
  letter-spacing: 0.3px;
  flex-shrink: 0;
}

.badge.published {
  background: #e8f0eb;
  color: #1E4D35;
}

.badge.draft {
  background: #fef9e7;
  color: #92580a;
}

.loading-state {
  color: #aaa;
  font-size: 14px;
  padding: 40px 0;
  text-align: center;
}

.empty-state {
  color: #bbb;
  font-size: 14px;
  padding: 40px 0;
  text-align: center;
  border: 2px dashed #e8e7e2;
  border-radius: 14px;
}

/* ── Buttons ── */
.btn-primary {
  background: #1E4D35;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary:hover:not(:disabled) {
  opacity: 0.88;
}

.btn-primary.large {
  padding: 12px 28px;
  font-size: 14.5px;
  border-radius: 12px;
}

.btn-secondary {
  background: #f5f4f0;
  color: #444;
  border: 1px solid #e8e7e2;
  border-radius: 10px;
  padding: 9px 18px;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-secondary:hover {
  background: #eceae5;
}

.btn-ghost {
  background: none;
  border: 1px dashed #c5c3be;
  color: #666;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12.5px;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}

.btn-ghost:hover {
  border-color: #1E4D35;
  color: #1E4D35;
}

.btn-ghost.danger-ghost {
  border-color: #fca5a5;
  color: #b91c1c;
  font-size: 12px;
  padding: 4px 10px;
}

.btn-ghost.danger-ghost:hover {
  background: #fef2f2;
}

.btn-danger {
  background: #b91c1c;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;
}

.btn-danger:disabled {
  opacity: 0.5;
}

.btn-danger:hover:not(:disabled) {
  opacity: 0.88;
}

.icon-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #e8e7e2;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  transition: background 0.15s, color 0.15s;
}

.icon-btn:hover {
  background: #f5f4f0;
  color: #1E4D35;
}

.icon-btn.danger:hover {
  background: #fef2f2;
  color: #b91c1c;
  border-color: #fca5a5;
}

.icon-btn.sm {
  width: 22px;
  height: 22px;
  font-size: 11px;
  border-radius: 5px;
}

/* ── Fields ── */
.field-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #666;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.req {
  color: #1E4D35;
}

.field-input,
.field-textarea {
  width: 100%;
  border: 1.5px solid #e8e7e2;
  border-radius: 9px;
  padding: 9px 12px;
  font-size: 13.5px;
  color: #111;
  background: #fff;
  outline: none;
  transition: border-color 0.15s;
  font-family: inherit;
  resize: vertical;
}

.field-input:focus,
.field-textarea:focus {
  border-color: #1E4D35;
}

.field-input.font-mono {
  font-family: monospace;
  font-size: 12px;
}

.field-hint {
  font-size: 11.5px;
  color: #aaa;
  margin-top: 4px;
}

.field-hint a {
  color: #1E4D35;
}

.field-group {
  display: flex;
  flex-direction: column;
}

.field-row {
  display: flex;
  gap: 12px;
}

.field-row .field-group {
  flex: 1;
}

/* ── Toggle ── */
.toggle-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.toggle-input {
  display: none;
}

.toggle-track {
  width: 36px;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  position: relative;
  transition: background 0.2s;
}

.toggle-input:checked+.toggle-track {
  background: #1E4D35;
}

.toggle-track::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.toggle-input:checked+.toggle-track::after {
  transform: translateX(16px);
}

.toggle-label {
  font-size: 13px;
  color: #555;
  font-weight: 500;
}

/* ── Editor layout ── */
.editor-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  align-items: start;
}

.editor-main {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.editor-sidebar .card {
  position: sticky;
  top: 24px;
}

/* ── Cards ── */
.card {
  background: #fff;
  border: 1px solid #e8e7e2;
  border-radius: 16px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.card-title {
  font-size: 14px;
  font-weight: 700;
  color: #222;
}

.card-hint {
  font-size: 12px;
  color: #aaa;
  font-weight: 400;
}

.card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0efe9;
}

/* ── Body sections ── */
.section-block {
  border: 1.5px solid #e8e7e2;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-block-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-num {
  font-size: 11px;
  font-weight: 700;
  color: #1E4D35;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-empty {
  font-size: 13px;
  color: #bbb;
  text-align: center;
  padding: 12px 0;
}

/* ── Bg preview ── */
.bg-preview {
  height: 32px;
  border-radius: 8px;
  margin-top: 6px;
  border: 1px solid #e8e7e2;
}

/* ── Upload ── */
.upload-zone {
  border: 2px dashed #d5d3cd;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s;
}

.upload-zone:hover {
  border-color: #1E4D35;
}

.upload-zone.sm {
  min-height: 80px;
}

.upload-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 120px;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #bbb;
  font-size: 12.5px;
  padding: 20px;
  text-align: center;
}

.upload-placeholder.sm {
  padding: 12px;
  gap: 4px;
  font-size: 11.5px;
}

.upload-progress {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #1E4D35;
  font-weight: 600;
}

/* ── Bottom save bar ── */
.bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
  padding: 18px 24px;
  background: #fff;
  border: 1px solid #e8e7e2;
  border-radius: 16px;
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.04);
  position: sticky;
  bottom: 20px;
  z-index: 10;
}

/* ── Modal ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal-card {
  background: #fff;
  border-radius: 18px;
  padding: 32px 28px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.modal-title {
  font-size: 18px;
  font-weight: 700;
  color: #111;
  margin-bottom: 10px;
}

.modal-body {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 24px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* ── Toast ── */
.toast {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 200;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 13.5px;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  animation: slideIn 0.2s ease;
}

.toast.success {
  background: #1E4D35;
  color: #fff;
}

.toast.error {
  background: #b91c1c;
  color: #fff;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .editor-grid {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }

  .main-area {
    padding: 20px;
  }
}
</style>