<template>
  <div class="malkia-page">

    <!-- ── HERO ─────────────────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-bg-blobs">
        <div class="blob blob-1" />
        <div class="blob blob-2" />
        <div class="blob blob-3" />
      </div>
      <div class="hero-inner">
        <span class="hero-eyebrow">🌸 A Women Concern Initiative</span>
        <h1 class="hero-title">Malkia<br /><em>Pad</em></h1>
        <p class="hero-tagline">Dignity. Health. Empowerment.</p>
        <p class="hero-desc">
          Addressing menstrual poverty among girls and women in the
          Democratic Republic of Congo — through sustainable, locally made,
          and socially impactful solutions.
        </p>
        <div class="hero-ctas">
          <a href="#join" class="btn-primary">Join the Movement</a>
          <a href="#impact" class="btn-ghost">See Our Impact</a>
        </div>
      </div>
      <div class="hero-scroll-hint">
        <span>Scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" stroke-width="1.5" />
          <circle class="scroll-dot" cx="7" cy="6" r="2" fill="currentColor" />
        </svg>
      </div>
    </section>

    <!-- ── MISSION ────────────────────────────────────────────── -->
    <section class="mission">
      <div class="container">
        <div class="section-tag">🎯 Our Mission</div>
        <h2 class="section-title">Every girl deserves<br /><span>safe &amp; dignified</span> hygiene</h2>
        <p class="mission-body">
          To ensure that every girl and woman — especially the most vulnerable — has access to
          safe, dignified, and sustainable menstrual hygiene.
        </p>

        <div class="focus-cards">
          <div v-for="f in focusGroups" :key="f.label" class="focus-card">
            <span class="focus-icon">{{ f.emoji }}</span>
            <p>{{ f.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CHALLENGE ─────────────────────────────────────────── -->
    <section class="challenge">
      <div class="container challenge-inner">
        <div class="challenge-text">
          <div class="section-tag light">🚨 The Challenge</div>
          <h2 class="section-title light">Thousands of girls face this<br />every single month</h2>
          <ul class="challenge-list">
            <li v-for="c in challenges" :key="c">
              <span class="bullet" />
              {{ c }}
            </li>
          </ul>
          <p class="challenge-foot">
            For vulnerable women, this becomes a major barrier to dignity and empowerment.
          </p>
        </div>
        <div class="challenge-visual">
          <div class="stat-ring">
            <div class="ring-label">Girls affected<br />every month</div>
            <svg viewBox="0 0 200 200" class="ring-svg">
              <circle cx="100" cy="100" r="85" stroke="#ffffff22" stroke-width="12" fill="none" />
              <circle cx="100" cy="100" r="85" stroke="#F7C948" stroke-width="12" fill="none" stroke-dasharray="534"
                stroke-dashoffset="134" stroke-linecap="round" transform="rotate(-90 100 100)" />
            </svg>
            <div class="ring-pct">75%</div>
          </div>
          <p class="ring-caption">of school absences in target areas are menstruation-related</p>
        </div>
      </div>
    </section>

    <!-- ── SOLUTION ──────────────────────────────────────────── -->
    <section class="solution">
      <div class="container">
        <div class="section-tag">💡 Our Solution</div>
        <h2 class="section-title">An integrated approach built<br />for <span>lasting impact</span></h2>

        <div class="solution-grid">
          <!-- Local Production -->
          <div class="solution-card feature-card">
            <div class="sol-icon">🧵</div>
            <h3>Local Production</h3>
            <p>Reusable, washable sanitary pads — eco-friendly, cost-effective, and
              manufactured in our own workshop. Adapted to the local context.</p>
          </div>

          <!-- 3 distribution channels -->
          <div class="solution-card channels-card">
            <div class="sol-icon">🚚</div>
            <h3>Inclusive Distribution</h3>
            <div class="channels">
              <div v-for="ch in channels" :key="ch.name" class="channel">
                <span class="ch-dot" :style="{ background: ch.color }" />
                <div>
                  <strong>{{ ch.name }}</strong>
                  <p>{{ ch.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social enterprise -->
          <div class="solution-card enterprise-card">
            <div class="sol-icon">💼</div>
            <h3>Social Enterprise Model</h3>
            <p>Every purchase directly supports a vulnerable girl or woman.</p>
            <div class="buy-formula">
              <span>Buy 1 kit</span>
              <span class="arrow">→</span>
              <span>Support 1 woman</span>
            </div>
            <p class="enterprise-note">Revenue is reinvested into production and free distribution.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── IMPACT ─────────────────────────────────────────────── -->
    <section id="impact" class="impact">
      <div class="container">
        <div class="section-tag">📊 Our Impact</div>
        <h2 class="section-title">Behind each number is<br /><span>a life transformed</span></h2>
        <div class="impact-grid">
          <div v-for="stat in stats" :key="stat.label" class="impact-stat">
            <span class="stat-emoji">{{ stat.emoji }}</span>
            <strong class="stat-num">{{ stat.value }}</strong>
            <p class="stat-label">{{ stat.label }}</p>
          </div>
        </div>

        <div class="why-grid">
          <div v-for="w in whyReasons" :key="w" class="why-item">
            <span class="why-check">✅</span>
            <span>{{ w }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── STORIES ─────────────────────────────────────────────── -->
    <section class="stories">
      <div class="container">
        <div class="section-tag light">💬 Stories of Change</div>
        <h2 class="section-title light">Real women. Real lives.<br />Real change.</h2>
        <div class="stories-grid">
          <div v-for="s in stories" :key="s.name" class="story-card">
            <div class="story-avatar">{{ s.avatar }}</div>
            <blockquote>{{ s.quote }}</blockquote>
            <div class="story-author">
              <strong>{{ s.name }}</strong>
              <span>{{ s.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── JOIN ───────────────────────────────────────────────── -->
    <section id="join" class="join">
      <div class="container">
        <div class="join-inner">
          <div class="join-text">
            <div class="section-tag">🤝 Join the Movement</div>
            <h2 class="section-title">Be part of the<br /><span>solution</span></h2>
            <p>You can help us change the story for thousands of girls and women.</p>
          </div>
          <div class="join-actions">
            <div v-for="a in actions" :key="a.label" class="action-item">
              <span class="action-emoji">{{ a.emoji }}</span>
              <div>
                <strong>{{ a.label }}</strong>
                <p>{{ a.desc }}</p>
              </div>
            </div>
            <a href="#donate" class="btn-primary full-w">♥ Sponsor a Kit</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FOOTER CTA ─────────────────────────────────────────── -->
    <section class="footer-cta">
      <div class="container footer-cta-inner">
        <div class="petal petal-1">🌸</div>
        <div class="petal petal-2">🌸</div>
        <h2>Because no girl should be<br />limited by her period.</h2>
        <p>With Malkia Pad, we restore dignity, protect health, and create opportunities.</p>
        <a href="#donate" class="btn-primary large">Support Malkia Pad</a>
      </div>
    </section>

  </div>
</template>

<script setup>
const focusGroups = [
  { emoji: '🏡', label: 'Girls in rural areas' },
  { emoji: '♿', label: 'Women living with disabilities' },
  { emoji: '🕊️', label: 'Survivors of SGBV' },
  { emoji: '⛺', label: 'Internally displaced & refugees' },
]

const challenges = [
  'Miss school due to menstruation',
  'Use unsafe and unhygienic alternatives',
  'Experience shame, stigma, and loss of confidence',
]

const channels = [
  { name: 'Free Distribution', color: '#4CAF50', desc: 'Schools, communities, health centres, IDP & refugee camps' },
  { name: 'NGO Partnerships', color: '#F7C948', desc: 'Kits supplied to partner organisations to expand outreach' },
  { name: '"Pad on the Go" Kiosks', color: '#2196F3', desc: 'Affordable kits sold to urban women; revenue funds free distribution' },
]

const stats = [
  { emoji: '🧺', value: '10,000', label: 'Kits produced' },
  { emoji: '🎁', value: '4,600', label: 'Kits distributed free' },
  { emoji: '🛍️', value: '3,400', label: 'Kits sold via Pad on the Go' },
  { emoji: '🤝', value: '2,000', label: 'Kits to partner organisations' },
]

const whyReasons = [
  'Reduces menstrual poverty',
  'Improves girls\' school attendance',
  'Promotes health and hygiene',
  'Strengthens women\'s economic empowerment',
  'Offers an eco-friendly and sustainable solution',
]

const stories = [
  {
    avatar: '🌸',
    name: 'Amina',
    role: 'Mother & SGBV Survivor',
    quote: '"Before, every month was a struggle. I had to choose between food and protection. Today, I feel respected and can even save for my children."',
  },
  {
    avatar: '🎒',
    name: 'Grace',
    role: 'Student',
    quote: '"I used to miss school every month. Now I attend every day. I want to become a nurse."',
  },
  {
    avatar: '🧵',
    name: 'Chantal',
    role: 'Workshop Seamstress',
    quote: '"This project doesn\'t only change beneficiaries\' lives — it changed mine too. Today I have a job, an income, and I support my family."',
  },
]

const actions = [
  { emoji: '🎁', label: 'Sponsor a Kit', desc: 'Fund a kit for a girl in need' },
  { emoji: '🤝', label: 'Partner with Us', desc: 'Distribute with us and expand reach' },
  { emoji: '💼', label: 'Support Production', desc: 'Invest in local manufacturing' },
  { emoji: '🌍', label: 'Invest in Impact', desc: 'Back a high-impact social enterprise' },
]
</script>

<style scoped>
/* ── Fonts ─────────────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ── Reset & Base ───────────────────────────────────────────── */
.malkia-page {
  font-family: 'DM Sans', sans-serif;
  color: #1a1a2e;
  overflow-x: hidden;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Shared ─────────────────────────────────────────────────── */
.section-tag {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: #e8f5e9;
  color: #2e7d32;
  padding: 4px 14px;
  border-radius: 999px;
  margin-bottom: 18px;
}

.section-tag.light {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1.15;
  margin: 0 0 20px;
  color: #1a1a2e;
}

.section-title span {
  color: #2e7d32;
  font-style: italic;
}

.section-title.light {
  color: #fff;
}

.section-title.light span {
  color: #F7C948;
}

.btn-primary {
  display: inline-block;
  background: #2e7d32;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 14px 32px;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(46, 125, 50, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(46, 125, 50, 0.35);
}

.btn-primary.large {
  font-size: 1.1rem;
  padding: 16px 40px;
}

.btn-primary.full-w {
  display: block;
  text-align: center;
  margin-top: 24px;
}

.btn-ghost {
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 12px 30px;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.2s;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}

/* ── HERO ───────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 45%, #388e3c 100%);
  overflow: hidden;
  padding-top: 80px;
}

.hero-bg-blobs {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.25;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: #F7C948;
  top: -150px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.blob-2 {
  width: 300px;
  height: 300px;
  background: #a5d6a7;
  bottom: 50px;
  left: -80px;
  animation: float 10s ease-in-out infinite reverse;
}

.blob-3 {
  width: 220px;
  height: 220px;
  background: #fff;
  top: 40%;
  right: 20%;
  animation: float 6s ease-in-out infinite 2s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-24px) scale(1.04);
  }
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 680px;
  padding: 80px 48px;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 500;
  color: #F7C948;
  letter-spacing: 0.06em;
  margin-bottom: 18px;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 900;
  line-height: 0.95;
  color: #fff;
  margin: 0 0 16px;
}

.hero-title em {
  font-style: italic;
  color: #F7C948;
}

.hero-tagline {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 20px;
}

.hero-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  max-width: 520px;
  margin: 0 0 36px;
}

.hero-ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@keyframes scrollDot {

  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateY(6px);
    opacity: 0.3;
  }
}

.scroll-dot {
  animation: scrollDot 1.8s ease-in-out infinite;
}

/* ── MISSION ─────────────────────────────────────────────────── */
.mission {
  padding: 100px 0;
  background: #fff;
}

.mission-body {
  font-size: 1.1rem;
  line-height: 1.75;
  color: #4a5568;
  max-width: 640px;
  margin-bottom: 52px;
}

.focus-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.focus-card {
  background: linear-gradient(135deg, #f1f8e9, #e8f5e9);
  border: 1px solid #c8e6c9;
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 600;
  color: #1b5e20;
  font-size: 0.95rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.focus-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(46, 125, 50, 0.12);
}

.focus-icon {
  font-size: 1.8rem;
}

/* ── CHALLENGE ───────────────────────────────────────────────── */
.challenge {
  background: linear-gradient(135deg, #1b5e20, #2e7d32);
  padding: 100px 0;
  color: #fff;
}

.challenge-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.challenge-list {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.challenge-list li {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}

.bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #F7C948;
  flex-shrink: 0;
}

.challenge-foot {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

/* Stat ring */
.challenge-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.stat-ring {
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.ring-svg circle:last-child {
  transition: stroke-dashoffset 1s ease;
}

.ring-pct {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 900;
  color: #F7C948;
  position: relative;
  z-index: 1;
}

.ring-label {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  white-space: nowrap;
}

.ring-caption {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
  max-width: 220px;
  line-height: 1.5;
}

/* ── SOLUTION ─────────────────────────────────────────────────── */
.solution {
  padding: 100px 0;
  background: #fafdf6;
}

.solution-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  gap: 24px;
  margin-top: 52px;
}

.solution-card {
  background: #fff;
  border-radius: 24px;
  padding: 36px 30px;
  border: 1px solid #e8f5e9;
  box-shadow: 0 2px 20px rgba(46, 125, 50, 0.06);
  transition: transform 0.25s, box-shadow 0.25s;
}

.solution-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(46, 125, 50, 0.12);
}

.sol-icon {
  font-size: 2.4rem;
  margin-bottom: 16px;
}

.solution-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1b5e20;
  margin: 0 0 12px;
}

.solution-card p {
  font-size: 0.93rem;
  color: #555;
  line-height: 1.65;
  margin: 0;
}

.channels {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.channel {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.ch-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 4px;
}

.channel strong {
  font-size: 0.9rem;
  color: #1b5e20;
}

.channel p {
  font-size: 0.82rem;
  color: #777;
  margin: 2px 0 0;
}

.buy-formula {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f1f8e9;
  border-radius: 12px;
  padding: 14px 18px;
  margin: 20px 0 12px;
  font-weight: 700;
  color: #1b5e20;
  font-size: 0.9rem;
}

.arrow {
  color: #F7C948;
  font-size: 1.2rem;
}

.enterprise-note {
  font-size: 0.8rem;
  color: #888;
}

/* ── IMPACT ───────────────────────────────────────────────────── */
.impact {
  padding: 100px 0;
  background: #fff;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 52px 0 48px;
}

.impact-stat {
  background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
  border-radius: 20px;
  padding: 32px 20px;
  text-align: center;
  border: 1px solid #c8e6c9;
  transition: transform 0.2s;
}

.impact-stat:hover {
  transform: translateY(-4px);
}

.stat-emoji {
  font-size: 2rem;
  display: block;
  margin-bottom: 10px;
}

.stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 2.4rem;
  font-weight: 900;
  color: #1b5e20;
  display: block;
}

.stat-label {
  font-size: 0.82rem;
  color: #555;
  margin: 6px 0 0;
  font-weight: 500;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  background: #f1f8e9;
  border-radius: 20px;
  padding: 32px;
}

.why-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 0.92rem;
  font-weight: 500;
  color: #2e7d32;
}

.why-check {
  flex-shrink: 0;
}

/* ── STORIES ──────────────────────────────────────────────────── */
.stories {
  padding: 100px 0;
  background: linear-gradient(135deg, #1b5e20, #2e7d32);
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 52px;
}

.story-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 36px 30px;
  transition: background 0.2s, transform 0.2s;
}

.story-card:hover {
  background: rgba(255, 255, 255, 0.16);
  transform: translateY(-4px);
}

.story-avatar {
  font-size: 2.4rem;
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

blockquote {
  font-size: 0.93rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.88);
  font-style: italic;
  margin: 0 0 20px;
  border: none;
  padding: 0;
}

.story-author strong {
  display: block;
  font-size: 0.92rem;
  color: #F7C948;
  font-weight: 700;
}

.story-author span {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
}

/* ── JOIN ─────────────────────────────────────────────────────── */
.join {
  padding: 100px 0;
  background: #fafdf6;
}

.join-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.join-text p {
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  margin-top: 8px;
}

.join-actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.action-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e8f5e9;
  transition: box-shadow 0.2s;
}

.action-item:hover {
  box-shadow: 0 8px 24px rgba(46, 125, 50, 0.1);
}

.action-emoji {
  font-size: 1.6rem;
}

.action-item strong {
  font-size: 0.95rem;
  color: #1b5e20;
  display: block;
  margin-bottom: 2px;
}

.action-item p {
  font-size: 0.83rem;
  color: #777;
  margin: 0;
}

/* ── FOOTER CTA ───────────────────────────────────────────────── */
.footer-cta {
  background: #fff8e1;
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.footer-cta-inner {
  position: relative;
  z-index: 1;
}

.footer-cta h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #1b5e20;
  line-height: 1.2;
  margin-bottom: 16px;
}

.footer-cta p {
  font-size: 1.05rem;
  color: #555;
  margin-bottom: 36px;
}

.petal {
  position: absolute;
  font-size: 5rem;
  opacity: 0.12;
  pointer-events: none;
}

.petal-1 {
  top: 20px;
  left: 60px;
  transform: rotate(-20deg);
}

.petal-2 {
  bottom: 20px;
  right: 60px;
  transform: rotate(15deg);
}

/* ── Responsive ───────────────────────────────────────────────── */
@media (max-width: 900px) {
  .challenge-inner {
    grid-template-columns: 1fr;
  }

  .solution-grid {
    grid-template-columns: 1fr;
  }

  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stories-grid {
    grid-template-columns: 1fr;
  }

  .join-inner {
    grid-template-columns: 1fr;
  }

  .challenge-visual {
    display: none;
  }
}

@media (max-width: 600px) {
  .hero-inner {
    padding: 80px 24px 60px;
  }

  .impact-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>