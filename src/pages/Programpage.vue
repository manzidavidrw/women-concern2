<template>
  <div class="program-page font-sans min-h-screen bg-white">

    <!-- Back Button -->
    <div class="sticky top-[80px] z-40 bg-white/95 backdrop-blur border-b border-gray-100">
      <div class="max-w-5xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">
        <button @click="$emit('navigate', 'what-we-do')"
          class="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-green transition-colors group">
          <span class="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Back to What We Do
        </button>
        <span :class="`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${program.tagColor}`">
          {{ program.section }}
        </span>
      </div>
    </div>

    <!-- Hero -->
    <section class="relative overflow-hidden"
      :style="`background: linear-gradient(135deg, ${program.gradFrom}, ${program.gradTo})`">
      <div class="absolute inset-0 opacity-10"
        style="background-image: radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px); background-size: 40px 40px;">
      </div>
      <div class="max-w-5xl mx-auto px-6 lg:px-10 py-20 pb-16 relative z-10">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-6xl">{{ program.emoji }}</span>
        </div>
        <h1 class="text-white font-display text-4xl lg:text-6xl font-black leading-none tracking-tight mb-4">
          {{ program.title }}
        </h1>
        <p class="text-white/75 text-lg max-w-2xl leading-relaxed">{{ program.tagline }}</p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <!-- Content -->
    <div class="max-w-5xl mx-auto px-6 lg:px-10 py-16 space-y-16">

      <!-- Overview -->
      <div class="grid lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2 space-y-5">
          <h2 class="text-2xl font-black text-gray-900">Overview</h2>
          <p v-for="para in program.overview" :key="para" class="text-gray-600 leading-relaxed text-base">{{ para }}</p>
        </div>
        <!-- Impact Stats sidebar -->
        <div class="space-y-4">
          <div v-for="stat in program.stats" :key="stat.label"
            class="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <div :class="`text-3xl font-black ${program.accentText} leading-none`">{{ stat.value }}</div>
            <div class="text-xs font-semibold text-gray-500 mt-1 leading-snug">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- How It Works -->
      <div>
        <h2 class="text-2xl font-black text-gray-900 mb-8">How It Works</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(step, i) in program.steps" :key="step.title"
            class="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div :class="`absolute top-4 right-4 text-4xl font-black opacity-10 ${program.accentText}`">{{ i + 1 }}
            </div>
            <div :class="`w-10 h-10 rounded-xl ${program.accentBg} flex items-center justify-center text-lg mb-4`">
              {{ step.emoji }}
            </div>
            <h3 class="font-bold text-gray-900 text-sm mb-2">{{ step.title }}</h3>
            <p class="text-xs text-gray-500 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Key Outcomes -->
      <div :class="`rounded-3xl p-8 lg:p-12 ${program.softBg}`">
        <h2 class="text-2xl font-black text-gray-900 mb-6">Key Outcomes & Impact</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="outcome in program.outcomes" :key="outcome"
            class="flex items-start gap-3 bg-white/70 rounded-xl p-4">
            <span :class="`text-lg ${program.accentText} mt-0.5 flex-shrink-0`">✓</span>
            <p class="text-sm text-gray-700 leading-relaxed">{{ outcome }}</p>
          </div>
        </div>
      </div>

      <!-- Story / Quote -->
      <div v-if="program.quote" class="relative">
        <div :class="`absolute -left-2 top-0 bottom-0 w-1 rounded-full ${program.accentBgSolid}`"></div>
        <blockquote class="pl-8">
          <p class="text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed italic">"{{ program.quote.text }}"
          </p>
          <footer class="mt-4 text-sm text-gray-500 font-semibold">— {{ program.quote.author }}</footer>
        </blockquote>
      </div>

      <!-- Partners / Connections -->
      <div v-if="program.partners && program.partners.length">
        <h2 class="text-2xl font-black text-gray-900 mb-6">Partners & Collaborators</h2>
        <div class="flex flex-wrap gap-3">
          <span v-for="p in program.partners" :key="p"
            :class="`px-4 py-2 rounded-full text-sm font-semibold border ${program.accentBorder} ${program.accentText} bg-white`">
            {{ p }}
          </span>
        </div>
      </div>

    </div>

    <!-- CTA -->
    <div :style="`background: linear-gradient(135deg, ${program.gradFrom}, ${program.gradTo})`"
      class="py-16 px-6 text-center mt-8">
      <h2 class="text-white font-black text-3xl lg:text-4xl mb-3">Support This Programme</h2>
      <p class="text-white/70 mb-8 max-w-lg mx-auto">Your contribution makes a direct difference in the lives of women
        and girls in eastern DRC.</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="https://gogetfunding.com/PLACEHOLDER"
          class="bg-brand-yellow text-brand-green font-black px-8 py-3 rounded-full text-sm shadow-lg hover:brightness-105 transition-all hover:-translate-y-0.5">
          ♥ Donate Now
        </a>
        <button @click="$emit('navigate', 'what-we-do')"
          class="border-2 border-white/50 text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-white hover:text-brand-green transition-all hover:-translate-y-0.5">
          Explore All Programs
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ programId: String })
const emit = defineEmits(['navigate'])

const allPrograms = {

  // ═══════════════════════════════════════════════════
  // SECTION 1: WOMEN'S ECONOMIC EMPOWERMENT
  // ═══════════════════════════════════════════════════

  'program-basic-needs': {
    emoji: '🍽️',
    title: 'Basic Needs Support',
    section: 'Economic Empowerment',
    tagColor: 'bg-emerald-100 text-emerald-700',
    tagline: 'Restoring dignity and readiness through food, hygiene, and health care for the most vulnerable women.',
    gradFrom: '#064e3b', gradTo: '#059669',
    accentText: 'text-emerald-600', accentBg: 'bg-emerald-100', accentBgSolid: 'bg-emerald-500',
    accentBorder: 'border-emerald-300', softBg: 'bg-emerald-50',
    overview: [
      'For women trapped in extreme poverty, survival comes before development. Women Concern\'s Basic Needs Support programme ensures that the most vulnerable women in eastern DRC have their immediate needs met before they can engage in livelihood training or economic activities.',
      'Through targeted household assessments, we identify women who are food insecure, lack access to hygiene products, or cannot afford basic health care. We provide dignified, time-bound support that stabilises families and creates the foundation for lasting change.',
      'This programme is the first step in our Ultra-Poor Graduation (UPG) model — ensuring no woman is too desperate to begin her journey toward self-sufficiency.',
    ],
    stats: [
      { value: '1,200+', label: 'Women received emergency food support in the past year' },
      { value: '85%', label: 'Reported reduced household hunger within 3 months' },
      { value: '92%', label: 'Transitioned into livelihood programmes after stabilisation' },
    ],
    steps: [
      { emoji: '🔍', title: 'Community Identification', desc: 'Local community leaders and women\'s groups help us identify the most vulnerable households using participatory poverty ranking tools.' },
      { emoji: '📦', title: 'Emergency Package', desc: 'Selected women receive food baskets, soap, sanitary supplies, and health referrals tailored to their household size and needs.' },
      { emoji: '🩺', title: 'Health Linkage', desc: 'Women with health challenges are referred to partner health centres for treatment, ensuring physical wellbeing supports their participation in further programmes.' },
      { emoji: '📋', title: 'Needs Assessment', desc: 'A social worker conducts a home visit to understand deeper vulnerabilities and document a personalised support plan.' },
      { emoji: '🔄', title: 'Programme Transition', desc: 'After 3–6 months of stabilisation, women are enrolled into skills training and livelihood programmes to continue their graduation journey.' },
      { emoji: '📊', title: 'Monitoring & Follow-up', desc: 'Regular check-ins track progress and adjust support as needed, ensuring no woman is left behind during her transition.' },
    ],
    outcomes: [
      'Reduced acute food insecurity in target households',
      'Improved hygiene and health outcomes for women and children',
      'Women enter livelihood programmes with restored dignity and readiness',
      'Strengthened trust and community engagement with WOCO',
      'Children experience improved nutrition and school attendance',
      'Women report increased confidence and reduced stress',
    ],
    quote: { text: 'When I received food and soap, I felt like a human being again. I could think about tomorrow instead of just surviving today.', author: 'Programme beneficiary, Goma' },
    partners: ['WFP', 'UNICEF', 'Local Health Centres', 'Community Leaders Network'],
  },

  'program-skills-training': {
    emoji: '🪡',
    title: 'Skills & Livelihood Training',
    section: 'Economic Empowerment',
    tagColor: 'bg-emerald-100 text-emerald-700',
    tagline: 'Practical vocational training matched to market demand — agriculture, tailoring, cookstove production, and more.',
    gradFrom: '#064e3b', gradTo: '#059669',
    accentText: 'text-emerald-600', accentBg: 'bg-emerald-100', accentBgSolid: 'bg-emerald-500',
    accentBorder: 'border-emerald-300', softBg: 'bg-emerald-50',
    overview: [
      'Economic independence for women begins with marketable skills. Women Concern\'s Skills & Livelihood Training programme connects women with practical, income-generating training tailored to local market demand in eastern DRC.',
      'Our trainers work closely with local businesses, cooperatives, and markets to identify which skills are in highest demand. Women choose from a menu of trades including agriculture and agroforestry, tailoring and fashion design, improved cookstove production, food processing, and non-farm enterprise development.',
      'Training is designed to be accessible — held near communities, offered in local languages, and structured around women\'s domestic responsibilities. We also address social barriers by working with husbands, families, and community leaders to support women\'s participation.',
    ],
    stats: [
      { value: '3,400+', label: 'Women trained in vocational skills since 2015' },
      { value: '78%', label: 'Started income-generating activity within 6 months of training' },
      { value: '12', label: 'Vocational trades offered across our programmes' },
    ],
    steps: [
      { emoji: '📊', title: 'Market Analysis', desc: 'We regularly assess local market demand to ensure skills training is economically relevant and leads to real income opportunities.' },
      { emoji: '🗂️', title: 'Curriculum Design', desc: 'Training curricula are co-designed with local experts, integrating technical skills, business basics, and financial literacy.' },
      { emoji: '👩‍🏫', title: 'Hands-On Training', desc: 'Women learn through doing — practical workshops, peer learning, and supervised practice in real settings.' },
      { emoji: '🤝', title: 'Market Linkages', desc: 'We connect graduates to buyers, cooperatives, and small business networks to help them access markets immediately.' },
      { emoji: '💼', title: 'Business Development', desc: 'Post-training support includes basic business planning, costing, and record-keeping to help women run sustainable enterprises.' },
      { emoji: '🔁', title: 'Alumni Peer Mentoring', desc: 'Successful graduates mentor new trainees, creating a cycle of knowledge and inspiration within communities.' },
    ],
    outcomes: [
      'Women gain marketable, income-generating skills aligned to local demand',
      'Increased household income and economic resilience',
      'Women develop business confidence and entrepreneurial mindsets',
      'Local markets benefit from increased supply of goods and services',
      'Reduced economic dependency and improved decision-making power at home',
      'Skills pass on to children and younger community members',
    ],
    quote: { text: 'I learned to make cookstoves and now I sell them at the market. My children eat every day because of what WOCO taught me.', author: 'Tailoring & cookstove graduate, North Kivu' },
    partners: ['ILO', 'Local Business Cooperatives', 'BVES Vocational Schools', 'Women Entrepreneurs Network'],
  },

  'program-asset-transfers': {
    emoji: '🌾',
    title: 'Productive Asset Transfers',
    section: 'Economic Empowerment',
    tagColor: 'bg-emerald-100 text-emerald-700',
    tagline: 'Seed capital and equipment to launch small businesses and agricultural activities for lasting self-sufficiency.',
    gradFrom: '#064e3b', gradTo: '#059669',
    accentText: 'text-emerald-600', accentBg: 'bg-emerald-100', accentBgSolid: 'bg-emerald-500',
    accentBorder: 'border-emerald-300', softBg: 'bg-emerald-50',
    overview: [
      'Having skills is essential — but without tools or capital, women cannot start. Women Concern\'s Productive Asset Transfer programme bridges this gap by providing women with the physical and financial assets they need to launch sustainable livelihoods.',
      'Based on each woman\'s training background and business plan, we provide targeted transfers: agricultural inputs such as seeds, tools, and small animals; equipment for a trade; or small cash grants to purchase start-up materials. Each transfer is carefully matched to the woman\'s chosen livelihood pathway.',
      'Asset transfers are never handouts — they come paired with business planning support, mentorship, and savings group enrollment, ensuring women have the knowledge and support structure to grow their assets over time.',
    ],
    stats: [
      { value: '2,100+', label: 'Women received productive asset transfers' },
      { value: '91%', label: 'Still using assets productively after 12 months' },
      { value: '3×', label: 'Average return on asset value within the first year' },
    ],
    steps: [
      { emoji: '📝', title: 'Business Planning', desc: 'Each woman develops a personalised business plan with a mentor, identifying the right asset type and quantity for her livelihood goal.' },
      { emoji: '✅', title: 'Asset Selection', desc: 'Assets are selected based on feasibility, local market conditions, and the woman\'s existing skills and household context.' },
      { emoji: '📦', title: 'Transfer & Orientation', desc: 'Women receive their assets alongside orientation on care, management, and how to use them to generate income effectively.' },
      { emoji: '🤝', title: 'Peer Group Support', desc: 'Women are enrolled in peer accountability groups that meet regularly to share progress, solve problems, and encourage each other.' },
      { emoji: '📈', title: 'Business Monitoring', desc: 'WOCO coaches visit each woman monthly for the first six months to review her business records and provide guidance.' },
      { emoji: '💰', title: 'Savings Linkage', desc: 'Women are enrolled in VSLAs (Village Savings and Loan Associations) to protect their new income and build financial reserves.' },
    ],
    outcomes: [
      'Women launch viable, income-generating small enterprises or farms',
      'Households achieve improved and diversified food security',
      'Women gain negotiating power and decision-making authority at home',
      'Assets multiply over time through reinvestment and savings',
      'Communities see broader economic activity stimulated by successful entrepreneurs',
      'Women become role models who inspire others to pursue economic independence',
    ],
    quote: { text: 'They gave me two goats and seeds. Today I have seven goats and my own small farm. I paid my children\'s school fees by myself this year.', author: 'Asset transfer beneficiary, South Kivu' },
    partners: ['IFAD', 'FAO', 'Local Agri-Cooperatives', 'Microfinance Partners'],
  },

  'program-savings-financial': {
    emoji: '💰',
    title: 'Savings & Financial Inclusion',
    section: 'Economic Empowerment',
    tagColor: 'bg-emerald-100 text-emerald-700',
    tagline: 'Village Savings and Loan Associations connecting women to savings, credit, and long-term economic stability.',
    gradFrom: '#064e3b', gradTo: '#059669',
    accentText: 'text-emerald-600', accentBg: 'bg-emerald-100', accentBgSolid: 'bg-emerald-500',
    accentBorder: 'border-emerald-300', softBg: 'bg-emerald-50',
    overview: [
      'Financial exclusion is one of the greatest barriers facing women in eastern DRC. Without access to savings accounts, credit, or insurance, women cannot protect their income, respond to shocks, or invest in growth. Women Concern\'s Financial Inclusion programme uses the proven Village Savings and Loan Association (VSLA) model to change this.',
      'VSLAs are community-managed groups of 15–30 women who pool small, regular savings. Members can borrow from the group fund at affordable interest rates for business investment, school fees, medical costs, or emergencies. At the end of each annual cycle, all savings plus profits are shared among members.',
      'We go beyond the basic VSLA model by adding financial literacy education, mobile money training, and linkages to formal financial institutions — giving women a pathway from informal saving to full financial citizenship.',
    ],
    stats: [
      { value: '180+', label: 'Active VSLAs across North and South Kivu' },
      { value: '4,500+', label: 'Women members in active savings groups' },
      { value: '$2.1M+', label: 'Total savings mobilised since programme launch' },
    ],
    steps: [
      { emoji: '👥', title: 'Group Formation', desc: 'Community facilitators help form groups of 15–30 women with shared interests, establishing trust, rules, and leadership structures.' },
      { emoji: '📚', title: 'Financial Literacy', desc: 'Members receive training in budgeting, record-keeping, loan management, and understanding interest to become confident financial actors.' },
      { emoji: '💵', title: 'Regular Saving', desc: 'Women contribute small, regular amounts each week or fortnight, building a communal fund they own and control collectively.' },
      { emoji: '🏦', title: 'Loan Access', desc: 'Members can borrow up to three times their savings at affordable interest rates, with flexible repayment matched to business cycles.' },
      { emoji: '📱', title: 'Digital Finance', desc: 'Women are trained in mobile money platforms (M-Pesa, Airtel Money) to send, receive, and save digitally and securely.' },
      { emoji: '🔗', title: 'Formal Bank Linkage', desc: 'High-performing VSLAs are connected to partner microfinance institutions for access to larger loans and formal accounts.' },
    ],
    outcomes: [
      'Women build emergency reserves and protect against economic shocks',
      'Access to affordable credit funds business growth and school fees',
      'Women develop strong financial management skills and habits',
      'Annual share-outs provide lump sums for major investments',
      'Women gain leadership and governance experience through VSLA management',
      'Financial confidence translates to greater decision-making power at home',
    ],
    quote: { text: 'Our VSLA is like a family. We save together, we lend to each other, and at the end of the year we share the profits. I used mine to build a new room for my house.', author: 'VSLA member, Goma territory' },
    partners: ['CARE International', 'Equity Bank DRC', 'Mobile Money Providers', 'Women\'s Savings Network'],
  },

  'program-coaching-mentorship': {
    emoji: '🤝',
    title: 'Coaching & Mentorship',
    section: 'Economic Empowerment',
    tagColor: 'bg-emerald-100 text-emerald-700',
    tagline: 'Personalised mentorship in goal-setting, financial literacy, leadership, and confidence-building for every woman.',
    gradFrom: '#064e3b', gradTo: '#059669',
    accentText: 'text-emerald-600', accentBg: 'bg-emerald-100', accentBgSolid: 'bg-emerald-500',
    accentBorder: 'border-emerald-300', softBg: 'bg-emerald-50',
    overview: [
      'Poverty is not just material — it also strips away confidence, aspiration, and belief in one\'s own potential. Women Concern\'s Coaching & Mentorship programme addresses the psychological and social dimensions of extreme poverty alongside the economic ones.',
      'Every woman enrolled in our UPG programme is assigned a dedicated community coach who walks alongside her for at least 12 months. These coaches — themselves drawn from the community — provide regular one-on-one and group sessions covering goal-setting, financial discipline, leadership, and life skills.',
      'Mentorship is not charity; it is a relationship of mutual respect. Our coaches believe in each woman\'s capacity to transform her own life, and their job is to unlock it.',
    ],
    stats: [
      { value: '95', label: 'Community coaches trained and deployed' },
      { value: '12', label: 'Months of dedicated mentorship per woman' },
      { value: '89%', label: 'Women report increased confidence and self-efficacy after coaching' },
    ],
    steps: [
      { emoji: '🎓', title: 'Coach Training', desc: 'Community members, often former programme graduates, are selected and trained as coaches in facilitation, psychosocial support, and UPG principles.' },
      { emoji: '🤝', title: 'Matching', desc: 'Each woman is matched to a coach who lives near her and understands her cultural and social context.' },
      { emoji: '🗺️', title: 'Goal Setting', desc: 'Coach and client together create a personalised development plan with short, medium, and long-term goals across livelihood, health, and wellbeing.' },
      { emoji: '🗓️', title: 'Weekly Visits', desc: 'Coaches make weekly home visits, tracking progress against goals, celebrating wins, and problem-solving obstacles together.' },
      { emoji: '👭', title: 'Group Sessions', desc: 'Monthly group sessions bring women together to share experiences, learn collectively, and build mutual support networks.' },
      { emoji: '🔄', title: 'Graduation Review', desc: 'At programme completion, coach and client conduct a final review to recognise progress and plan for continued self-led growth.' },
    ],
    outcomes: [
      'Women develop clear life and economic goals with concrete plans to achieve them',
      'Improved self-esteem, resilience, and mental health outcomes',
      'Women better navigate family and community barriers to their advancement',
      'Peer networks formed during mentorship sustain women beyond programme exit',
      'Coaches gain employment, skills, and community recognition',
      'Mentorship culture spreads as graduates become coaches for the next cohort',
    ],
    quote: { text: 'My coach never judged me. She listened and helped me believe that my dreams were possible. She changed how I see myself.', author: 'Coaching programme graduate, Minova' },
    partners: ['BRAC Bangladesh (UPG methodology)', 'Local Women\'s Associations', 'WOCO Alumni Network'],
  },

  // ═══════════════════════════════════════════════════
  // SECTION 2: GIRLS' EDUCATION & EMPOWERMENT
  // ═══════════════════════════════════════════════════

  'program-school-sponsorship': {
    emoji: '🎒',
    title: 'School Sponsorship & Retention',
    section: 'Girls Education',
    tagColor: 'bg-amber-100 text-amber-700',
    tagline: 'Keeping girls in school through fees, uniforms, materials, and tackling every barrier to education.',
    gradFrom: '#78350f', gradTo: '#d97706',
    accentText: 'text-amber-600', accentBg: 'bg-amber-100', accentBgSolid: 'bg-amber-500',
    accentBorder: 'border-amber-300', softBg: 'bg-amber-50',
    overview: [
      'In eastern DRC, millions of girls are out of school — forced out by poverty, conflict, early marriage, or the assumption that girls\' education matters less than boys\'. Women Concern refuses this reality. Our School Sponsorship & Retention programme directly targets the financial and social barriers that push girls out of classrooms.',
      'We identify girls at risk of dropping out through school partnerships and community referrals, and provide holistic support: school fees, uniforms, exercise books, pens, and school bags. But we know that material support alone is not enough — we also work with families, teachers, and communities to shift attitudes toward girls\' education.',
      'Every girl we support is assigned a follow-up mentor who monitors her attendance, wellbeing, and academic progress throughout the school year.',
    ],
    stats: [
      { value: '2,800+', label: 'Girls sponsored through primary and secondary school' },
      { value: '94%', label: 'School retention rate among sponsored girls' },
      { value: '3×', label: 'More likely to complete secondary school than non-sponsored peers' },
    ],
    steps: [
      { emoji: '🔍', title: 'Identification', desc: 'School directors, teachers, and community mobilisers identify girls at risk of dropout due to fees, family crisis, or other barriers.' },
      { emoji: '🏠', title: 'Home Assessment', desc: 'WOCO staff conduct a home visit to understand the family\'s situation and confirm the girl\'s eligibility and commitment to continue schooling.' },
      { emoji: '💳', title: 'Fees & Materials', desc: 'School fees are paid directly to the school, and girls receive a complete kit of learning materials and uniform at the start of each term.' },
      { emoji: '👨‍👩‍👧', title: 'Family Engagement', desc: 'We engage parents and guardians in workshops about the value of girls\' education, addressing economic concerns and cultural resistance.' },
      { emoji: '📊', title: 'Academic Monitoring', desc: 'WOCO mentors visit schools monthly to review attendance, grades, and wellbeing, intervening early when a girl is struggling.' },
      { emoji: '🌟', title: 'Transition Support', desc: 'Girls completing primary school receive support to transition to secondary, ensuring no gap breaks their educational journey.' },
    ],
    outcomes: [
      'Girls remain in school and complete their full education cycle',
      'Improved academic performance and school confidence',
      'Delayed early marriage and pregnancy among supported girls',
      'Families develop stronger appreciation for girls\' education',
      'Girls develop aspirations and ambition for future careers',
      'Communities see higher levels of educated young women entering the workforce',
    ],
    quote: { text: 'My father wanted me to marry at 15. WOCO paid my school fees and helped him understand that my education is our family\'s future. I want to become a doctor.', author: 'Sponsored student, Rutshuru territory' },
    partners: ['UNICEF', 'DRC Ministry of Primary Education', 'Local School Parent Committees', 'Girls Not Brides'],
  },

  'program-girls-leadership': {
    emoji: '🌟',
    title: "Girls' Leadership Academy",
    section: 'Girls Education',
    tagColor: 'bg-amber-100 text-amber-700',
    tagline: 'Life skills, career guidance, and mentorship inspiring the next generation of women leaders from eastern DRC.',
    gradFrom: '#78350f', gradTo: '#d97706',
    accentText: 'text-amber-600', accentBg: 'bg-amber-100', accentBgSolid: 'bg-amber-500',
    accentBorder: 'border-amber-300', softBg: 'bg-amber-50',
    overview: [
      'Being in school is not enough — girls need to believe in their own potential and have the skills to act on it. Women Concern\'s Girls\' Leadership Academy is an out-of-school programme that complements formal education by developing the leadership, life skills, and career aspirations of adolescent girls aged 12–18.',
      'Participants gather weekly in safe spaces to explore topics ranging from communication and public speaking to financial planning, women\'s rights, career exploration, and community leadership. They are mentored by inspiring women leaders from across eastern DRC and beyond.',
      'The Academy is not just a programme — it is a movement. Girls who complete it go on to lead campaigns, start businesses, advocate for peers, and inspire their communities.',
    ],
    stats: [
      { value: '1,500+', label: 'Girls completed the Leadership Academy since 2018' },
      { value: '72%', label: 'Take on a leadership role in school or community within one year' },
      { value: '45', label: 'Alumni now working as community facilitators and advocates' },
    ],
    steps: [
      { emoji: '🏫', title: 'Safe Space Clubs', desc: 'Weekly clubs at schools and community centres provide a safe, girl-only space for open discussion, learning, and connection.' },
      { emoji: '📖', title: 'Curriculum Modules', desc: 'A structured 9-month curriculum covers leadership, communication, gender rights, financial literacy, health, and career planning.' },
      { emoji: '👩‍💼', title: 'Mentorship Matching', desc: 'Each cohort is mentored by a professional woman from the community — a doctor, teacher, entrepreneur, or activist.' },
      { emoji: '🎤', title: 'Public Speaking & Debate', desc: 'Girls practice speaking publicly, arguing their positions, and advocating for issues they care about — building irreplaceable confidence.' },
      { emoji: '🗺️', title: 'Career Exploration', desc: 'Site visits, guest speakers, and career days expose girls to professions they may never have imagined were available to them.' },
      { emoji: '🏅', title: 'Graduation & Recognition', desc: 'Graduates are publicly celebrated in community ceremonies, receiving certificates and recognition from local leaders.' },
    ],
    outcomes: [
      'Girls develop strong leadership identity and communication skills',
      'Increased educational aspirations and career ambition',
      'Improved knowledge of rights, health, and financial basics',
      'Girls become advocates and mentors within their own communities',
      'Reduced vulnerability to gender-based violence and early marriage',
      'Network of empowered young women who support each other across the region',
    ],
    quote: { text: 'Before the Academy, I thought leadership was for men and educated women from cities. Now I know it starts with me, right here, right now.', author: 'Girls Leadership Academy graduate, Goma' },
    partners: ['UN Women', 'CAMFED', 'Local Women Professionals Network', 'DRC Youth Ministry'],
  },

  'program-menstrual-hygiene': {
    emoji: '🌸',
    title: 'Menstrual Hygiene & Malkia Pads',
    section: 'Girls Education',
    tagColor: 'bg-amber-100 text-amber-700',
    tagline: 'Locally produced washable Malkia Pads keeping girls in school and restoring dignity across eastern DRC.',
    gradFrom: '#78350f', gradTo: '#d97706',
    accentText: 'text-amber-600', accentBg: 'bg-amber-100', accentBgSolid: 'bg-amber-500',
    accentBorder: 'border-amber-300', softBg: 'bg-amber-50',
    overview: [
      'One in ten girls in sub-Saharan Africa misses school during her period — not because of pain, but because she has nothing to use. In eastern DRC, where disposable pads are expensive and often unavailable, menstruation is a major driver of school dropout. Women Concern\'s Malkia Pads programme tackles this directly.',
      'We locally manufacture washable, reusable sanitary pads called Malkia Pads — designed to last up to three years with proper care. Each pad set is produced by trained women in our skills programme, creating local employment while solving a public health and education challenge.',
      'Alongside distribution, we deliver comprehensive menstrual health education in schools — breaking taboos, educating teachers and parents, and ensuring girls have the knowledge and confidence to manage their periods safely.',
    ],
    stats: [
      { value: '18,000+', label: 'Malkia Pad kits distributed to girls and schools' },
      { value: '95%', label: 'Girls report full school attendance during their period after receiving pads' },
      { value: '120', label: 'Women employed as Malkia Pad producers and distributors' },
    ],
    steps: [
      { emoji: '🧵', title: 'Local Production', desc: 'Women trained in our skills programme manufacture Malkia Pads using locally sourced cotton fabric, creating employment and ensuring supply.' },
      { emoji: '📦', title: 'School Distribution', desc: 'Pads are distributed to girls through schools, girls\' clubs, and community health workers, prioritising the most vulnerable.' },
      { emoji: '📚', title: 'MHM Education', desc: 'Menstrual Health Management sessions in schools cover biology, hygiene, social norms, and girls\' rights — for girls AND boys.' },
      { emoji: '👩‍🏫', title: 'Teacher Training', desc: 'Teachers are trained to be supportive, address stigma, and create a school environment where periods are not a source of shame.' },
      { emoji: '🏠', title: 'WASH Improvement', desc: 'We work with schools to improve water, sanitation, and hygiene facilities so girls have a safe place to change and wash their pads.' },
      { emoji: '📣', title: 'Community Awareness', desc: 'Community campaigns, radio spots, and parent meetings shift attitudes so that menstruation is understood as normal and management is supported at home.' },
    ],
    outcomes: [
      'Girls attend school every day of the month without fear or shame',
      'Menstrual taboos reduced across schools and communities',
      'Women gain sustainable income through pad production',
      'Girls develop health literacy and bodily autonomy',
      'Schools become more girl-friendly and gender-responsive',
      'A replicable, locally-owned model that communities can sustain independently',
    ],
    quote: { text: 'My Malkia Pads mean I never miss class anymore. And I explained to my mother how to use them too — now she never misses work.', author: 'Secondary school student, North Kivu' },
    partners: ['Days For Girls', 'UNICEF WASH', 'DRC Ministry of Health', 'School Sanitation Initiative'],
  },

  'program-srhr': {
    emoji: '💜',
    title: 'Sexual & Reproductive Health Rights',
    section: 'Girls Education',
    tagColor: 'bg-amber-100 text-amber-700',
    tagline: 'Safe spaces and peer education where girls learn about their bodies, rights, and choices — free from shame.',
    gradFrom: '#78350f', gradTo: '#d97706',
    accentText: 'text-amber-600', accentBg: 'bg-amber-100', accentBgSolid: 'bg-amber-500',
    accentBorder: 'border-amber-300', softBg: 'bg-amber-50',
    overview: [
      'In conflict-affected eastern DRC, girls face alarming rates of gender-based violence, early pregnancy, and forced marriage — often because they lack knowledge of their rights and access to health services. Women Concern\'s SRHR programme addresses this through age-appropriate education, peer-led dialogue, and health system linkages.',
      'We operate girls\' clubs in schools and communities where trained peer educators facilitate open conversations on puberty, consent, reproductive health, GBV, and the rights every girl is entitled to. These are not lectures — they are safe spaces designed by girls, for girls.',
      'Our SRHR programme is integrated with our broader work on education, GBV response, and women\'s empowerment — because sexual and reproductive health is inseparable from a girl\'s right to education, safety, and a life she chooses.',
    ],
    stats: [
      { value: '6,200+', label: 'Girls reached through SRHR clubs and education sessions' },
      { value: '85', label: 'Trained peer educators active in schools and communities' },
      { value: '40%', label: 'Reduction in reported early pregnancy among girls in programme areas' },
    ],
    steps: [
      { emoji: '👭', title: 'Girls\' Club Formation', desc: 'Safe, girl-only clubs are established in schools and community centres, providing regular, structured spaces for SRHR education and dialogue.' },
      { emoji: '🎓', title: 'Peer Educator Training', desc: 'Selected older girls are trained as peer educators — learning facilitation skills, SRHR content, and referral pathways before leading sessions with their peers.' },
      { emoji: '📖', title: 'Age-Appropriate Curriculum', desc: 'Sessions cover puberty, menstruation, consent, safe relationships, reproductive biology, GBV recognition and response, and rights-based health services.' },
      { emoji: '🏥', title: 'Health Service Linkage', desc: 'Girls are connected to youth-friendly health services and referral pathways for those who have experienced GBV or need clinical support.' },
      { emoji: '👨‍👩‍👧', title: 'Parent & Community Sessions', desc: 'Parents and guardians participate in separate sessions to address myths, taboos, and cultural barriers to girls\' sexual health knowledge and autonomy.' },
      { emoji: '📣', title: 'GBV Awareness Campaigns', desc: 'Girls lead school and community campaigns on consent, safe reporting, and ending GBV — turning knowledge into action.' },
    ],
    outcomes: [
      'Girls have accurate, empowering knowledge of their reproductive health and rights',
      'Reduced rates of early pregnancy and forced marriage in programme areas',
      'Increased ability to recognise, resist, and report GBV',
      'Girls develop peer support networks that sustain beyond the programme',
      'Communities shift toward more supportive, rights-respecting attitudes',
      'Health services see increased uptake from adolescent girls',
    ],
    quote: { text: 'No one ever told us these things before. Now I know my body, I know my rights, and I know I can say no. That knowledge is power.', author: 'SRHR club member, Goma' },
    partners: ['UNFPA', 'IRC', 'Local Health Zones', 'Panzi Foundation'],
  },

  // ═══════════════════════════════════════════════════
  // SECTION 3: LAND RESTORATION & CLIMATE RESILIENCE
  // ═══════════════════════════════════════════════════

  'program-ruzizi': {
    emoji: '🌱',
    title: 'Ruzizi Plain Greening Project',
    section: 'Climate Resilience',
    tagColor: 'bg-green-100 text-green-700',
    tagline: 'Women-led cooperatives restoring degraded lands through nurseries, agroforestry, and climate-smart farming.',
    gradFrom: '#14532d', gradTo: '#16a34a',
    accentText: 'text-green-600', accentBg: 'bg-green-100', accentBgSolid: 'bg-green-500',
    accentBorder: 'border-green-300', softBg: 'bg-green-50',
    overview: [
      'The Ruzizi Plain in South Kivu is one of eastern DRC\'s most ecologically critical and most threatened landscapes. Decades of conflict, displacement, and unsustainable farming have left vast areas degraded and eroding. Women Concern\'s Ruzizi Plain Greening Project turns women into the solution.',
      'Women\'s cooperatives supported by WOCO establish community nurseries, plant agroforestry trees on degraded plots, and adopt climate-smart farming practices that restore soil health, increase biodiversity, and improve food security — all at the same time.',
      'This programme is part of our GLFx Kivu chapter of the Global Landscapes Forum, connecting local restoration work to national and international dialogues on climate action and land rights.',
    ],
    stats: [
      { value: '120,000+', label: 'Trees planted by women\'s cooperatives since 2019' },
      { value: '850 ha', label: 'Degraded land under active restoration' },
      { value: '320', label: 'Women in land restoration cooperatives' },
    ],
    steps: [
      { emoji: '🌳', title: 'Community Nurseries', desc: 'Women establish and manage nurseries, propagating indigenous and productive tree species for distribution across their communities.' },
      { emoji: '🌾', title: 'Agroforestry Training', desc: 'Farmers learn to integrate trees into their crop fields, improving soil fertility, water retention, and long-term productivity.' },
      { emoji: '💧', title: 'Soil & Water Conservation', desc: 'Practical techniques — terracing, contour planting, mulching — help communities reduce erosion and protect water sources.' },
      { emoji: '🐝', title: 'Biodiversity Enhancement', desc: 'Indigenous tree species and beekeeping initiatives restore local biodiversity and create additional income from honey production.' },
      { emoji: '📊', title: 'Carbon & Impact Monitoring', desc: 'WOCO works with research partners to measure tree survival, biomass, and ecosystem recovery over time.' },
      { emoji: '🌍', title: 'Global Connections', desc: 'Through GLFx Kivu, local farmers and cooperatives share their experiences and advocate at national and international climate forums.' },
    ],
    outcomes: [
      'Degraded land restored to productivity and ecological health',
      'Women earn income from nursery sales, agroforestry products, and honey',
      'Food security improved through diversified, climate-resilient farming',
      'Communities develop local expertise and ownership in land restoration',
      'Eastern DRC represented in global climate and landscapes conversations',
      'Carbon sequestration contributes to regional climate mitigation goals',
    ],
    quote: { text: 'When I was a child, these hills were covered in trees. We are planting them back — one by one, together. This land is our children\'s inheritance.', author: 'Cooperative leader, Ruzizi Plain' },
    partners: ['GLF (Global Landscapes Forum)', 'CIFOR-ICRAF', 'IUCN', 'DRC Environment Ministry'],
  },

  'program-jiko': {
    emoji: '🔥',
    title: 'Jiko Life for Family & Forest',
    section: 'Climate Resilience',
    tagColor: 'bg-green-100 text-green-700',
    tagline: 'Improved cookstoves reducing charcoal use, indoor pollution, and deforestation while creating local income.',
    gradFrom: '#14532d', gradTo: '#16a34a',
    accentText: 'text-green-600', accentBg: 'bg-green-100', accentBgSolid: 'bg-green-500',
    accentBorder: 'border-green-300', softBg: 'bg-green-50',
    overview: [
      'Cooking kills. Across eastern DRC, millions of women cook daily over open fires, breathing toxic smoke that causes respiratory disease. Their forests are decimated by charcoal demand. And each cooking session consumes hours of dangerous fuel-gathering time that could be spent on education, business, or rest.',
      'Women Concern\'s Jiko Life programme addresses this triple crisis — health, environment, and time poverty — through the production and distribution of improved, fuel-efficient cookstoves (called "jiko" in Swahili). These stoves use up to 60% less charcoal than traditional open fires, drastically reducing smoke exposure and deforestation pressure.',
      'Jiko Life is also an enterprise development programme: trained women produce and sell stoves in their communities, creating sustainable livelihoods from a solution that benefits the whole family.',
    ],
    stats: [
      { value: '4,200+', label: 'Improved cookstoves distributed across programme areas' },
      { value: '60%', label: 'Average reduction in charcoal consumption per household' },
      { value: '90', label: 'Women trained as jiko producers and entrepreneurs' },
    ],
    steps: [
      { emoji: '🏗️', title: 'Stove Production Training', desc: 'Women learn to fabricate improved cookstoves using local clay and metal materials — creating a product they own and can sell.' },
      { emoji: '📦', title: 'Community Distribution', desc: 'Stoves are sold at subsidised rates to households, schools, and small businesses through WOCO\'s women-led distribution network.' },
      { emoji: '🫁', title: 'Health Education', desc: 'Households receive education on indoor air pollution, ventilation, and the health impacts of traditional open-fire cooking.' },
      { emoji: '🌳', title: 'Forest Conservation Link', desc: 'Jiko Life is integrated with agroforestry training to show communities the direct connection between cooking habits and forest health.' },
      { emoji: '📊', title: 'Impact Measurement', desc: 'We track charcoal savings, health outcomes, and income generated by producers using pre/post household surveys.' },
      { emoji: '🔄', title: 'Entrepreneur Network', desc: 'Jiko producers form a peer business network to share sales strategies, bulk-buy materials, and support each other\'s enterprises.' },
    ],
    outcomes: [
      'Significant reduction in household charcoal spending, freeing income for other needs',
      'Improved respiratory health for women and children who cook',
      'Reduced deforestation pressure in project areas',
      'Women earn reliable income as stove producers and traders',
      'Families save time previously spent collecting wood or buying charcoal',
      'Communities develop local climate solutions with lasting health and environmental benefits',
    ],
    quote: { text: 'Before my jiko, my children were always coughing and I spent hours finding firewood. Now my kitchen is clean, my children are healthier, and I sell stoves too.', author: 'Jiko producer and mother, South Kivu' },
    partners: ['ENERGIA', 'Global Alliance for Clean Cookstoves', 'CIFOR-ICRAF', 'Local Health Authorities'],
  },

  'program-peace-plot': {
    emoji: '🕊️',
    title: 'Peace Plot Project',
    section: 'Climate Resilience',
    tagColor: 'bg-green-100 text-green-700',
    tagline: 'Shared farmlands where communities cultivate trust, climate-smart farming, and peace together.',
    gradFrom: '#14532d', gradTo: '#16a34a',
    accentText: 'text-green-600', accentBg: 'bg-green-100', accentBgSolid: 'bg-green-500',
    accentBorder: 'border-green-300', softBg: 'bg-green-50',
    overview: [
      'Land is at the heart of conflict in eastern DRC. Disputes over plots, boundaries, and agricultural resources between communities, ethnic groups, and displaced and host populations are a persistent source of tension. The Peace Plot Project transforms this challenge into an opportunity for healing.',
      'WOCO brings together communities divided by conflict to cultivate shared plots of land using climate-smart farming practices. Working side by side — planting, harvesting, and sharing the produce — communities rebuild trust, develop common purpose, and learn sustainable agriculture simultaneously.',
      'Peace Plots are more than farms. They are peace infrastructure: living symbols that communities can coexist, cooperate, and flourish together, even after violence.',
    ],
    stats: [
      { value: '28', label: 'Peace Plots established across conflict-affected communities' },
      { value: '560+', label: 'Community members from opposing groups working together' },
      { value: '95%', label: 'Participating communities report reduced inter-group tensions' },
    ],
    steps: [
      { emoji: '🤝', title: 'Community Reconciliation', desc: 'A facilitated dialogue process brings conflicting groups together to agree on shared values, rules, and the vision for their Peace Plot.' },
      { emoji: '🌾', title: 'Land Identification', desc: 'Communities identify a neutral, accessible piece of land to serve as a shared plot, often reclaiming abandoned or disputed territory.' },
      { emoji: '🌱', title: 'Climate-Smart Farming', desc: 'All participants receive joint training in agroforestry, composting, water harvesting, and sustainable farming methods.' },
      { emoji: '👨‍🌾', title: 'Shared Labour', desc: 'Community members from different groups rotate work on the plot, building relationships through shared physical effort and daily interaction.' },
      { emoji: '🍎', title: 'Shared Harvest', desc: 'Produce is divided equitably and sold collectively, demonstrating the economic benefits of cooperation.' },
      { emoji: '📣', title: 'Peace Advocacy', desc: 'Peace Plot communities become advocates in their areas, sharing their experience and encouraging neighbouring communities to adopt the model.' },
    ],
    outcomes: [
      'Inter-community tensions measurably reduced in project areas',
      'Sustainable farming practices adopted across formerly conflicting communities',
      'Land disputes resolved through dialogue and shared use',
      'Food security improved through cooperative farming',
      'Women play central leadership roles in community reconciliation processes',
      'A replicable model for combining peacebuilding with environmental sustainability',
    ],
    quote: { text: 'We used to fight over this land. Now we plant it together and share the harvest. The food we grow together is the sweetest.', author: 'Peace Plot participant, Masisi territory' },
    partners: ['UNDP Peacebuilding Fund', 'Search for Common Ground', 'FAO', 'Local Customary Authorities'],
  },

  // ═══════════════════════════════════════════════════
  // SECTION 4: PEACE BUILDING & DISARMAMENT
  // ═══════════════════════════════════════════════════

  'program-salw': {
    emoji: '🔫',
    title: 'Combating Small Arms',
    section: 'Peace & Security',
    tagColor: 'bg-blue-100 text-blue-700',
    tagline: 'Community campaigns and advocacy against small arms proliferation — because weapons destroy the futures we build.',
    gradFrom: '#1e3a5f', gradTo: '#2563eb',
    accentText: 'text-blue-600', accentBg: 'bg-blue-100', accentBgSolid: 'bg-blue-500',
    accentBorder: 'border-blue-300', softBg: 'bg-blue-50',
    overview: [
      'Eastern DRC is one of the most heavily armed regions in the world. The proliferation of small arms and light weapons (SALW) fuels cycles of violence, enables GBV, displaces communities, and makes development work nearly impossible. Women Concern\'s SALW programme engages communities, authorities, and international frameworks to address this crisis at its roots.',
      'Our approach is community-led and women-centred — because women bear the heaviest burden of armed violence and are the most powerful advocates for disarmament. We organise awareness campaigns, train community leaders, and connect local action to national and international disarmament frameworks.',
      'We believe lasting disarmament is cultural, not just technical — it requires communities to collectively decide that weapons have no place in the futures they want.',
    ],
    stats: [
      { value: '45,000+', label: 'Community members reached through SALW awareness campaigns' },
      { value: '200+', label: 'Community leaders trained as disarmament advocates' },
      { value: '15', label: 'Communities with active SALW monitoring and reporting networks' },
    ],
    steps: [
      { emoji: '📣', title: 'Awareness Campaigns', desc: 'Radio programmes, community theatre, and town halls educate communities about the costs of SALW proliferation and the pathways to disarmament.' },
      { emoji: '👩‍⚖️', title: 'Women\'s Advocacy Groups', desc: 'Women are organised into disarmament advocacy groups that engage local authorities, armed actors, and community leaders.' },
      { emoji: '🗣️', title: 'Community Dialogue', desc: 'Facilitated dialogues allow communities to discuss the impacts of arms, develop local norms against weapons, and build collective will for disarmament.' },
      { emoji: '🏛️', title: 'Policy Linkage', desc: 'WOCO connects community advocacy to provincial and national frameworks, including the DRC national action plan on SALW.' },
      { emoji: '📊', title: 'Monitoring Networks', desc: 'Trained community monitors track weapon flows, incidents, and disarmament progress, providing data for advocacy and response.' },
      { emoji: '🌍', title: 'International Advocacy', desc: 'WOCO advocates at international forums for stronger controls, accountability, and support for SALW-affected communities.' },
    ],
    outcomes: [
      'Communities develop stronger cultural norms against weapons',
      'Women advocates influence local and national disarmament decision-making',
      'Improved coordination between community, government, and international disarmament efforts',
      'Reduced incidents of armed violence in programme communities',
      'Community members better equipped to report, monitor, and resist SALW threats',
      'Eastern DRC voices represented in global arms control discussions',
    ],
    quote: { text: 'Every gun in this community is a stolen future. We are mothers. We know the cost. And we will not stop advocating until our communities are safe.', author: 'Women\'s disarmament advocate, North Kivu' },
    partners: ['UN Disarmament Office', 'UNDPKO', 'Enough Project', 'DRC SALW Commission'],
  },

  'program-dialogue': {
    emoji: '💬',
    title: 'Community Dialogue & Mediation',
    section: 'Peace & Security',
    tagColor: 'bg-blue-100 text-blue-700',
    tagline: 'Safe spaces where women and communities discuss tensions, mediate disputes, and build mutual understanding.',
    gradFrom: '#1e3a5f', gradTo: '#2563eb',
    accentText: 'text-blue-600', accentBg: 'bg-blue-100', accentBgSolid: 'bg-blue-500',
    accentBorder: 'border-blue-300', softBg: 'bg-blue-50',
    overview: [
      'When conflict tears communities apart, the path to peace is rarely through force — it runs through conversation. Women Concern\'s Community Dialogue & Mediation programme creates structured, facilitated spaces where communities can talk, listen, and begin to heal divisions that have been building for years.',
      'Our trained community mediators — the majority of them women — facilitate dialogues between groups in conflict: communities displaced and host families, different ethnic or political groups, neighbours in land disputes, and families affected by GBV. These dialogues follow structured peace methodology adapted to local cultural contexts.',
      'We believe that sustainable peace is built conversation by conversation, relationship by relationship. Women are not just participants in these dialogues — they lead them.',
    ],
    stats: [
      { value: '350+', label: 'Community mediation sessions facilitated' },
      { value: '85%', label: 'Of mediated disputes resolved without further escalation' },
      { value: '120', label: 'Trained community mediators, 70% women' },
    ],
    steps: [
      { emoji: '🎓', title: 'Mediator Training', desc: 'Community members, especially women, are trained in structured dialogue facilitation, active listening, conflict analysis, and peace methodology.' },
      { emoji: '🔍', title: 'Conflict Mapping', desc: 'Before each dialogue, mediators work with communities to understand the history, actors, and root causes of a specific conflict.' },
      { emoji: '🤝', title: 'Pre-Dialogue Preparation', desc: 'Separate meetings with each party prepare participants, establish ground rules, and build readiness for joint dialogue.' },
      { emoji: '💬', title: 'Facilitated Dialogue', desc: 'Multi-session dialogues bring parties together in neutral spaces to share experiences, build understanding, and identify shared interests.' },
      { emoji: '📋', title: 'Agreement & Follow-up', desc: 'Where possible, dialogue sessions conclude with written agreements, witnessed by community leaders and monitored by WOCO.' },
      { emoji: '🔄', title: 'Long-term Reconciliation', desc: 'WOCO supports ongoing relationship-building activities — joint projects, cultural events, and shared governance — to sustain peace beyond formal dialogues.' },
    ],
    outcomes: [
      'Community disputes resolved peacefully with lasting agreements',
      'Inter-group trust rebuilt through repeated, positive interaction',
      'Women established as credible and effective peacebuilders',
      'Communities develop local capacity to resolve future conflicts',
      'Reduced displacement and violence in programme areas',
      'Peace infrastructure embedded in community governance structures',
    ],
    quote: { text: 'We had not spoken to our neighbours in three years. In the dialogue, we finally heard each other\'s pain. We did not agree on everything. But we decided to live together.', author: 'Dialogue participant, Masisi territory' },
    partners: ['Search for Common Ground', 'Conciliation Resources', 'UNDP', 'Local Customary Authorities'],
  },

  'program-reintegration': {
    emoji: '🔄',
    title: 'Reintegration of Ex-Combatants',
    section: 'Peace & Security',
    tagColor: 'bg-blue-100 text-blue-700',
    tagline: 'Using the UPG model to support former combatants through psychosocial healing, skills, and community reintegration.',
    gradFrom: '#1e3a5f', gradTo: '#2563eb',
    accentText: 'text-blue-600', accentBg: 'bg-blue-100', accentBgSolid: 'bg-blue-500',
    accentBorder: 'border-blue-300', softBg: 'bg-blue-50',
    overview: [
      'Lasting peace in eastern DRC requires more than disarmament — it requires that former combatants, including women and girls associated with armed groups, have credible pathways back to civilian life. Without economic opportunity, psychosocial support, and community acceptance, reintegration fails and the risk of re-recruitment remains high.',
      'Women Concern applies its UPG model to support the reintegration of ex-combatants, with particular attention to the specific needs of women and girl soldiers who have survived sexual violence and stigma. We provide psychosocial counselling, livelihood support, skills training, and carefully facilitated community reintegration processes.',
      'We partner with formal DDR (Disarmament, Demobilisation, and Reintegration) structures while going beyond them — recognising that true reintegration is a social process as much as a technical one.',
    ],
    stats: [
      { value: '450+', label: 'Ex-combatants supported through WOCO reintegration programme' },
      { value: '60%', label: 'Women and girls among reintegration programme participants' },
      { value: '88%', label: 'Successfully integrated into civilian communities after 12 months' },
    ],
    steps: [
      { emoji: '🧠', title: 'Psychosocial Support', desc: 'Individual and group counselling addresses trauma, guilt, stigma, and identity, helping ex-combatants process their experiences and rebuild self-worth.' },
      { emoji: '👥', title: 'Community Preparation', desc: 'WOCO facilitates community dialogue to prepare receiving communities for reintegration, addressing fears, expectations, and shared responsibility.' },
      { emoji: '📚', title: 'Skills & Livelihood Training', desc: 'Participants enter WOCO\'s vocational training and asset transfer programme, gaining the skills and tools to build a civilian livelihood.' },
      { emoji: '🤝', title: 'Community Mentorship', desc: 'Each reintegrating individual is matched with a community mentor who supports their social reintegration and helps navigate community dynamics.' },
      { emoji: '💰', title: 'VSLA Integration', desc: 'Reintegrating women and youth are enrolled in savings groups, building financial inclusion and social networks in their new communities.' },
      { emoji: '📊', title: 'Long-term Monitoring', desc: 'WOCO monitors reintegration progress over 24 months, intervening with additional support at key risk points.' },
    ],
    outcomes: [
      'Ex-combatants successfully reintegrated into civilian communities',
      'Reduced trauma and improved psychosocial wellbeing',
      'Sustainable livelihoods prevent re-recruitment into armed groups',
      'Community acceptance built through dialogue and shared experience',
      'Women and girl ex-combatants receive gender-specific support for GBV survival',
      'A model for community-centred reintegration replicable across eastern DRC',
    ],
    quote: { text: 'I did things I am ashamed of. But WOCO helped me face it, heal it, and start again. My community has accepted me back. I am a farmer now, not a fighter.', author: 'Reintegration programme participant, Rutshuru' },
    partners: ['UNICEF DDR Unit', 'MONUSCO', 'IRC', 'DRC DDR Commission'],
  },

  'program-women-peace-leadership': {
    emoji: '👩‍⚖️',
    title: "Women's Leadership in Peacebuilding",
    section: 'Peace & Security',
    tagColor: 'bg-blue-100 text-blue-700',
    tagline: 'Training women in conflict transformation, local governance, and justice to lead peace from the inside out.',
    gradFrom: '#1e3a5f', gradTo: '#2563eb',
    accentText: 'text-blue-600', accentBg: 'bg-blue-100', accentBgSolid: 'bg-blue-500',
    accentBorder: 'border-blue-300', softBg: 'bg-blue-50',
    overview: [
      'UN Security Council Resolution 1325 affirms that women\'s full participation in peace processes is essential for sustainable peace. Yet in eastern DRC, women are routinely excluded from peace negotiations, community security forums, and governance bodies. Women Concern works to change this — one trained, empowered woman leader at a time.',
      'Our Women\'s Leadership in Peacebuilding programme trains women in conflict analysis, transformation methodologies, local governance, and advocacy — giving them the tools, confidence, and networks to participate meaningfully in peace and security decision-making at every level.',
      'Our graduates sit on local peace committees, advise government structures, and advocate at provincial and national levels. They do not wait to be invited — they lead.',
    ],
    stats: [
      { value: '280', label: 'Women trained in peacebuilding leadership' },
      { value: '45%', label: 'Now hold formal roles in local governance or peace structures' },
      { value: '18', label: 'Community peace committees with WOCO-trained women leaders' },
    ],
    steps: [
      { emoji: '🎓', title: 'Leadership Training', desc: '12-day intensive training in conflict analysis, mediation, UNSCR 1325, local governance, and women\'s rights in humanitarian law.' },
      { emoji: '🔗', title: 'Network Building', desc: 'Graduates are connected into a regional network of women peacebuilders who share strategies, support, and amplify each other\'s advocacy.' },
      { emoji: '🏛️', title: 'Governance Placement', desc: 'WOCO advocates for trained women to be appointed or elected to local peace committees, territorial administration, and security forums.' },
      { emoji: '📢', title: 'Advocacy Campaigns', desc: 'Women leaders develop and lead campaigns on issues critical to peace in their communities — from GBV to land rights to disarmament.' },
      { emoji: '🌍', title: 'Regional & National Platforms', desc: 'Selected leaders are supported to participate in provincial, national, and international peace forums, bringing local voices to global conversations.' },
      { emoji: '🔄', title: 'Mentoring Next Cohorts', desc: 'Experienced leaders mentor newer women entering the programme, creating an expanding network of women peacebuilders.' },
    ],
    outcomes: [
      'Women hold formal decision-making roles in local peace and governance structures',
      'Peace agreements and processes increasingly reflect women\'s priorities',
      'A connected, skilled network of women peacebuilders across eastern DRC',
      'Women confident to advocate publicly and challenge exclusion',
      'Communities benefit from more inclusive, sustainable peace processes',
      'DRC\'s commitments under UNSCR 1325 implemented at community level',
    ],
    quote: { text: 'They told us peace was men\'s business. We proved them wrong. My voice is in the agreements that keep our community safe.', author: 'Women\'s peace leader, South Kivu' },
    partners: ['UN Women', 'MONUSCO Gender Unit', 'PeaceWomen Across the Globe', 'DRC Ministry of Gender'],
  },

  // ═══════════════════════════════════════════════════
  // SECTION 5: RESEARCH & LEARNING
  // ═══════════════════════════════════════════════════

  'program-action-research': {
    emoji: '🔍',
    title: 'Action Research & Knowledge Generation',
    section: 'Research & Learning',
    tagColor: 'bg-purple-100 text-purple-700',
    tagline: 'Participatory field research tracking impact, generating local knowledge, and developing tools communities use.',
    gradFrom: '#3b0764', gradTo: '#7c3aed',
    accentText: 'text-purple-600', accentBg: 'bg-purple-100', accentBgSolid: 'bg-purple-500',
    accentBorder: 'border-purple-300', softBg: 'bg-purple-50',
    overview: [
      'Evidence transforms programmes from good intentions into proven solutions. Women Concern\'s Action Research programme ensures that everything we do is grounded in rigorous, community-based evidence — and that the knowledge we generate is owned by, and useful to, the communities we serve.',
      'Our research is participatory: women and community members are not just subjects of research but active co-researchers who help define questions, collect data, and interpret findings. This approach produces more accurate, contextually relevant knowledge and builds community capacity at the same time.',
      'Research findings feed directly back into programme design, advocacy, and knowledge sharing — creating a continuous learning loop that makes our work more effective with every cycle.',
    ],
    stats: [
      { value: '25+', label: 'Research studies and evaluations completed since 2015' },
      { value: '180', label: 'Community members trained as research assistants' },
      { value: '12', label: 'Research reports published and shared nationally and internationally' },
    ],
    steps: [
      { emoji: '❓', title: 'Community Question Setting', desc: 'Research questions are developed with communities — ensuring research addresses what matters most to the people affected.' },
      { emoji: '🎓', title: 'Research Team Training', desc: 'Community members are trained in data collection methods, ethics, and analysis — becoming active producers of knowledge.' },
      { emoji: '📋', title: 'Data Collection', desc: 'Mixed methods approaches combine surveys, focus groups, case studies, and participatory tools to capture the full picture.' },
      { emoji: '💡', title: 'Community Analysis', desc: 'Preliminary findings are shared back with communities for validation, interpretation, and enrichment before finalisation.' },
      { emoji: '📄', title: 'Knowledge Products', desc: 'Research is packaged into accessible formats: reports, toolkits, policy briefs, community guides, and visual materials in local languages.' },
      { emoji: '🔁', title: 'Programme Learning', desc: 'Findings are used in structured reflection sessions with WOCO staff to adapt and improve programme design and delivery.' },
    ],
    outcomes: [
      'Programme quality continuously improved through evidence-based learning',
      'Communities develop lasting research and analytical skills',
      'Local knowledge is documented, valued, and shared widely',
      'Advocacy is backed by rigorous, credible evidence',
      'WOCO contributes to the knowledge base on women\'s empowerment in conflict settings',
      'Research partnerships with universities and international bodies strengthen credibility',
    ],
    quote: { text: 'We are not waiting for outsiders to study us and tell us what we need. We research our own communities. We know the answers. We document them.', author: 'Community researcher, WOCO Research Team' },
    partners: ['CIFOR-ICRAF', 'University of Goma', 'IDS Sussex', 'Uwezo Network DRC'],
  },

  'program-policy-engagement': {
    emoji: '📜',
    title: 'Policy Engagement & Legal Reform',
    section: 'Research & Learning',
    tagColor: 'bg-purple-100 text-purple-700',
    tagline: 'Translating grassroots evidence into laws and policies that protect and advance women\'s rights in DRC.',
    gradFrom: '#3b0764', gradTo: '#7c3aed',
    accentText: 'text-purple-600', accentBg: 'bg-purple-100', accentBgSolid: 'bg-purple-500',
    accentBorder: 'border-purple-300', softBg: 'bg-purple-50',
    overview: [
      'Individual empowerment is powerful. But lasting change requires systems to change too. Women Concern\'s Policy Engagement programme ensures that the evidence from our work on the ground reaches the ears and desks of those who make and implement laws.',
      'We advocate for laws and policies that protect women\'s land rights, criminalise GBV, fund girls\' education, support DDR and reintegration, and ensure women\'s participation in governance. Our advocacy is evidence-based, coalition-driven, and strategically targeted.',
      'We also monitor compliance with existing legal commitments — including DRC\'s constitutional guarantees on gender equality and international frameworks like CEDAW and UNSCR 1325 — and hold decision-makers accountable when they fall short.',
    ],
    stats: [
      { value: '8', label: 'Policy briefs submitted to provincial and national government' },
      { value: '5', label: 'Legislative reform processes in which WOCO has participated' },
      { value: '3', label: 'New policies influenced or changed through WOCO advocacy' },
    ],
    steps: [
      { emoji: '🔬', title: 'Evidence Synthesis', desc: 'Research findings are synthesised into compelling, accessible policy briefs that translate community realities into actionable recommendations.' },
      { emoji: '🤝', title: 'Coalition Building', desc: 'WOCO builds and participates in advocacy coalitions with other NGOs, women\'s organisations, and rights groups to amplify impact.' },
      { emoji: '🏛️', title: 'Government Engagement', desc: 'Strategic meetings with parliamentarians, ministry officials, and local administrators present evidence and advocate for specific policy changes.' },
      { emoji: '📢', title: 'Public Advocacy', desc: 'Media campaigns, public forums, and civil society events build public pressure and awareness on key policy issues.' },
      { emoji: '📊', title: 'Compliance Monitoring', desc: 'WOCO tracks government implementation of gender commitments, documenting gaps and publicly reporting on accountability.' },
      { emoji: '🌍', title: 'International Reporting', desc: 'WOCO submits shadow reports to UN treaty bodies and participates in universal periodic review processes on DRC\'s human rights record.' },
    ],
    outcomes: [
      'Women\'s rights concerns reflected in national and provincial policy',
      'Decision-makers held accountable for gender equality commitments',
      'Community evidence shapes laws rather than just academic or donor agendas',
      'WOCO established as a credible policy voice at national and international levels',
      'Legal protections for women strengthened in practice, not just on paper',
      'Coalition of organisations advocating together with greater collective impact',
    ],
    quote: { text: 'We spent years helping women survive bad laws. Now we are working to change those laws. Both are necessary. Neither is enough alone.', author: 'WOCO Policy Officer' },
    partners: ['FIDH', 'Human Rights Watch', 'UN Women', 'DRC Civil Society Platform on Gender'],
  },

  'program-amplifying-voices': {
    emoji: '📢',
    title: "Amplifying Rural Women's Voices",
    section: 'Research & Learning',
    tagColor: 'bg-purple-100 text-purple-700',
    tagline: 'Connecting women from remote, conflict-affected communities to national and international decision-making forums.',
    gradFrom: '#3b0764', gradTo: '#7c3aed',
    accentText: 'text-purple-600', accentBg: 'bg-purple-100', accentBgSolid: 'bg-purple-500',
    accentBorder: 'border-purple-300', softBg: 'bg-purple-50',
    overview: [
      'The women most affected by poverty, conflict, and policy failure are almost always absent from the forums where decisions are made about their lives. Women Concern\'s Amplifying Voices programme changes this — systematically bringing the perspectives and testimonies of rural and conflict-affected women into national and global conversations.',
      'We identify and prepare articulate women leaders from our programme communities to participate in provincial consultations, national civil society forums, UN treaty body hearings, and international conferences on gender, peace, and development.',
      'Participation is not passive. Before each forum, women are prepared with speaking training, research support, and a clear mandate from their communities. After participation, they bring learnings back and continue to advocate locally.',
    ],
    stats: [
      { value: '85', label: 'Community women supported to participate in national/international forums' },
      { value: '20+', label: 'International platforms where WOCO community voices have been heard' },
      { value: '100%', label: 'Participants report increased confidence and community leadership after participation' },
    ],
    steps: [
      { emoji: '🔍', title: 'Leader Identification', desc: 'Community women with strong voices, community mandates, and desire to advocate are identified through transparent community selection processes.' },
      { emoji: '🎤', title: 'Advocacy Training', desc: 'Selected women receive training in public speaking, testimony giving, policy languages, and the specific context of the forum they will attend.' },
      { emoji: '📋', title: 'Community Mandate', desc: 'Women participate in community consultations to collect specific messages and priorities they are mandated to carry to the forum.' },
      { emoji: '✈️', title: 'Forum Participation', desc: 'WOCO provides logistical, financial, and translation support to ensure participation is meaningful, not tokenistic.' },
      { emoji: '🔄', title: 'Return & Reporting', desc: 'After the forum, women report back to their communities, share what they learned and heard, and continue local advocacy.' },
      { emoji: '🌱', title: 'Ongoing Leadership', desc: 'Forum alumni are supported to continue and deepen their advocacy, often becoming mentors for the next generation of community representatives.' },
    ],
    outcomes: [
      'Rural women\'s voices and priorities heard in national and international arenas',
      'Policies and programmes better reflect realities of women in conflict settings',
      'Women develop lasting confidence, skills, and networks from forum participation',
      'Communities feel connected to, and knowledgeable about, wider decision-making processes',
      'WOCO builds international reputation and partnerships through community-centred representation',
      'A pipeline of articulate, experienced women advocates across eastern DRC',
    ],
    quote: { text: 'I stood in Geneva and told them what it is like to be a woman in Goma. They listened. And when I came home, my community listened to what I had learned.', author: 'Community advocate, WOCO Voices programme' },
    partners: ['UN Women', 'Global Fund for Women', 'Association for Women\'s Rights in Development (AWID)', 'CSO Platform DRC'],
  },

  'program-upg-evidence': {
    emoji: '📊',
    title: 'Evidence for Scaling the UPG Model',
    section: 'Research & Learning',
    tagColor: 'bg-purple-100 text-purple-700',
    tagline: 'Documenting the impact of the Ultra-Poor Graduation model and advocating for its adoption by governments and planners.',
    gradFrom: '#3b0764', gradTo: '#7c3aed',
    accentText: 'text-purple-600', accentBg: 'bg-purple-100', accentBgSolid: 'bg-purple-500',
    accentBorder: 'border-purple-300', softBg: 'bg-purple-50',
    overview: [
      'The Ultra-Poor Graduation (UPG) model is one of the most rigorously tested anti-poverty approaches in the world. Women Concern is one of the few organisations implementing it in an active conflict setting — producing evidence that is uniquely valuable for understanding how graduation works under extreme conditions.',
      'Our UPG Evidence programme systematically documents outcomes across economic, social, and psychological dimensions, tracking women for up to five years after programme exit to measure whether changes last. This longitudinal evidence is rare and vital.',
      'We actively disseminate findings to DRC government planners, UN agencies, development banks, and global graduation practitioners — advocating for the model to be integrated into national social protection strategies and scaled up to reach more women.',
    ],
    stats: [
      { value: '5', label: 'Years of longitudinal tracking for programme graduates' },
      { value: '92%', label: 'Graduates maintain or improve their economic status 3 years after exit' },
      { value: '7', label: 'International conferences where WOCO presented UPG evidence' },
    ],
    steps: [
      { emoji: '📋', title: 'Programme Data Systems', desc: 'Robust data collection systems track all UPG participants from enrolment through 5-year post-exit follow-up across economic, health, and social indicators.' },
      { emoji: '🔬', title: 'Impact Evaluations', desc: 'External evaluations using quasi-experimental designs measure programme impact against comparison groups of similar non-participants.' },
      { emoji: '📄', title: 'Evidence Synthesis', desc: 'Research findings are synthesised across cohorts and years to build a cumulative, credible evidence base for the model\'s effectiveness in conflict settings.' },
      { emoji: '🌍', title: 'Knowledge Sharing', desc: 'WOCO shares evidence through publications, conference presentations, learning exchanges with other UPG practitioners, and online knowledge platforms.' },
      { emoji: '🏛️', title: 'Government Advocacy', desc: 'Evidence is packaged for DRC government and donor decision-makers, advocating for UPG integration into national social protection systems.' },
      { emoji: '🤝', title: 'Practitioner Network', desc: 'WOCO connects with BRAC and other global UPG practitioners to exchange learning and strengthen the global evidence base.' },
    ],
    outcomes: [
      'Compelling, credible evidence base for UPG effectiveness in conflict settings',
      'DRC government and donors increasingly recognise and fund the UPG approach',
      'Women\'s long-term economic resilience documented and understood',
      'WOCO positioned as a thought leader on graduation in fragile contexts',
      'Model adapted and improved based on continuous learning and evidence',
      'Other organisations supported to adopt UPG methodology through shared tools and guidance',
    ],
    quote: { text: 'The numbers matter. But what they represent are real women who will never go back. That is what we are proving — and why it must be scaled.', author: 'WOCO M&E Director' },
    partners: ['BRAC', 'CGAP', 'World Bank', 'Ford Foundation', 'University of Goma'],
  },

  // ═══════════════════════════════════════════════════
  // SECTION 6: ADVOCACY
  // ═══════════════════════════════════════════════════

  'program-leading-campaigns': {
    emoji: '📣',
    title: 'Leading Campaigns',
    section: 'Advocacy',
    tagColor: 'bg-yellow-100 text-yellow-700',
    tagline: 'Women and girls spearheading campaigns on gender justice, access to services, and legal rights.',
    gradFrom: '#713f12', gradTo: '#ca8a04',
    accentText: 'text-yellow-600', accentBg: 'bg-yellow-100', accentBgSolid: 'bg-yellow-500',
    accentBorder: 'border-yellow-300', softBg: 'bg-yellow-50',
    overview: [
      'Change does not come from silence. Women Concern designs and supports campaigns led by women and girls themselves — because we believe the most powerful advocates for change are those with the most direct experience of injustice.',
      'Our campaigns address the issues our communities identify as most urgent: ending gender-based violence, ensuring girls\' right to education, demanding access to health services, protecting women\'s land rights, and holding authorities accountable. Each campaign is community-initiated, women-led, and evidence-backed.',
      'Signature campaigns include our annual participation in the 16 Days of Activism Against Gender-Based Violence, where WOCO-trained advocates mobilise thousands across eastern DRC in visible, powerful collective action.',
    ],
    stats: [
      { value: '15+', label: 'Major advocacy campaigns led or co-led by WOCO since 2016' },
      { value: '75,000+', label: 'People reached through campaign activities annually' },
      { value: '16 Days', label: 'Annual GBV activism campaign engaging thousands across Kivu provinces' },
    ],
    steps: [
      { emoji: '🗣️', title: 'Issue Identification', desc: 'Communities and women\'s groups identify the campaign priorities that matter most to them through structured consultations.' },
      { emoji: '📋', title: 'Campaign Design', desc: 'Women campaign leaders, supported by WOCO, develop a campaign strategy with clear goals, messages, audiences, and tactics.' },
      { emoji: '🎓', title: 'Advocate Training', desc: 'Campaign leaders receive training in public communication, media engagement, social mobilisation, and rights-based advocacy.' },
      { emoji: '📡', title: 'Multi-Platform Outreach', desc: 'Campaigns use radio, community meetings, street theatre, social media, marches, and school events to reach the widest possible audience.' },
      { emoji: '🏛️', title: 'Decision-Maker Engagement', desc: 'Campaigns include targeted engagements with relevant authorities — presenting demands, evidence, and community expectations.' },
      { emoji: '📊', title: 'Campaign Evaluation', desc: 'Each campaign is evaluated for reach, attitude change, and policy impact, with learnings feeding into future campaigns.' },
    ],
    outcomes: [
      'Public awareness of gender justice issues significantly increased in campaign areas',
      'Decision-makers publicly commit to women\'s rights under campaign pressure',
      'Women develop lasting skills and confidence as public advocates',
      'Campaign issues increasingly reflected in local and national policy dialogue',
      'Eastern DRC\'s voices represented in global campaigns and solidarity movements',
      'A visible, active women\'s advocacy movement rooted in community leadership',
    ],
    quote: { text: 'We marched through Goma with a thousand students. The whole city saw us. That day, no one could pretend the problem doesn\'t exist.', author: 'Campaign leader, 16 Days of Activism, Goma 2025' },
    partners: ['UN Women', 'Oxfam', 'Global Network of Women Peacebuilders', 'Women\'s Media Network DRC'],
  },

  'program-duty-bearers': {
    emoji: '🏛️',
    title: 'Engaging Duty-Bearers',
    section: 'Advocacy',
    tagColor: 'bg-yellow-100 text-yellow-700',
    tagline: 'Working with local authorities, customary leaders, and policy-makers to uphold women\'s rights in practice.',
    gradFrom: '#713f12', gradTo: '#ca8a04',
    accentText: 'text-yellow-600', accentBg: 'bg-yellow-100', accentBgSolid: 'bg-yellow-500',
    accentBorder: 'border-yellow-300', softBg: 'bg-yellow-50',
    overview: [
      'Rights without accountability are just words on paper. Women Concern\'s Duty-Bearer Engagement programme works directly with those who hold power — local government officials, customary chiefs, religious leaders, and law enforcement — to ensure they fulfil their obligations to women and girls.',
      'Our approach is constructive and evidence-based: we present data on women\'s situations, share promising practices, build relationships, and hold duty-bearers publicly accountable for commitments. We recognise that most duty-bearers can be allies — and that engaging them respectfully but firmly is more effective than adversarial approaches alone.',
      'Women themselves lead these engagements — because nothing makes the case for women\'s rights more powerfully than women making it directly.',
    ],
    stats: [
      { value: '150+', label: 'Government and customary officials engaged in accountability dialogues' },
      { value: '25', label: 'Formal commitments made by duty-bearers in WOCO-facilitated forums' },
      { value: '80%', label: 'Of commitments monitored and followed up by community advocates' },
    ],
    steps: [
      { emoji: '🗺️', title: 'Power Mapping', desc: 'WOCO identifies which duty-bearers have most influence over the issues affecting women, mapping both formal and customary authority structures.' },
      { emoji: '🤝', title: 'Relationship Building', desc: 'Before advocacy, WOCO builds working relationships with key officials, understanding their priorities and finding common ground.' },
      { emoji: '📊', title: 'Evidence Presentation', desc: 'Women advocates present evidence on the situation of women and girls in their communities, making it personal, local, and specific.' },
      { emoji: '📣', title: 'Public Forums', desc: 'Open community forums create public accountability spaces where duty-bearers present their plans and are questioned by community members.' },
      { emoji: '📋', title: 'Commitment Tracking', desc: 'WOCO records all commitments made by duty-bearers and follows up formally, documenting compliance and publicly reporting on progress.' },
      { emoji: '🏆', title: 'Recognition & Incentives', desc: 'Duty-bearers who champion women\'s rights are publicly recognised and celebrated — creating positive incentives for leadership on gender equity.' },
    ],
    outcomes: [
      'Local leaders publicly committed to and accountable for women\'s rights',
      'Customary practices that harm women challenged and changed over time',
      'Women develop skills and confidence to engage power directly',
      'Government services increasingly responsive to women\'s specific needs',
      'A culture of accountability embedded in community governance',
      'Positive role models among duty-bearers inspire peers',
    ],
    quote: { text: 'I used to be afraid to speak to the chief. Now I sit at his table with evidence and I ask him: what will you do? And he answers.', author: 'Community advocate, duty-bearer engagement programme' },
    partners: ['NDI', 'MONUSCO Civil Affairs', 'DRC Gender Ministry', 'Customary Chiefs Association'],
  },

  'program-evidence-change': {
    emoji: '📈',
    title: 'Using Evidence for Change',
    section: 'Advocacy',
    tagColor: 'bg-yellow-100 text-yellow-700',
    tagline: 'Harnessing lived experience and community data to influence decisions and shift harmful social norms.',
    gradFrom: '#713f12', gradTo: '#ca8a04',
    accentText: 'text-yellow-600', accentBg: 'bg-yellow-100', accentBgSolid: 'bg-yellow-500',
    accentBorder: 'border-yellow-300', softBg: 'bg-yellow-50',
    overview: [
      'The most powerful evidence for change is not always a statistical table — it is a woman\'s story, told clearly and courageously. Women Concern\'s Evidence for Change programme trains community members to document, package, and deploy both quantitative data and personal testimonies in ways that shift minds, change policies, and move resources.',
      'We equip women advocates with the skills to translate their lived experiences into compelling narratives, visual data, case studies, and media stories that resonate with different audiences — from village elders to international donors. Evidence becomes a weapon for justice.',
      'This programme integrates our research, communications, and advocacy work into a coherent approach where every data point serves a strategic purpose and every story is part of a wider movement for change.',
    ],
    stats: [
      { value: '200+', label: 'Women trained in evidence-based advocacy skills' },
      { value: '40+', label: 'Community case studies and testimonies documented and published' },
      { value: '15', label: 'Media and communication outlets engaged through evidence campaigns' },
    ],
    steps: [
      { emoji: '📖', title: 'Story Documentation', desc: 'Women are trained in oral history and testimony techniques to document their own stories and those of peers in compelling, rights-framing ways.' },
      { emoji: '📊', title: 'Data Literacy', desc: 'Advocates learn to read, interpret, and present quantitative data — understanding how numbers tell stories and how to use them effectively.' },
      { emoji: '🎨', title: 'Visual Communication', desc: 'Infographics, photo stories, and community murals translate complex evidence into visual formats accessible to all literacy levels.' },
      { emoji: '📡', title: 'Media Engagement', desc: 'Advocates are trained in radio interviews, press releases, and social media to reach wider audiences through multiple channels.' },
      { emoji: '🎤', title: 'Testimony Practice', desc: 'Repeated rehearsal and feedback sessions build advocates\' ability to deliver powerful testimonies in high-pressure settings.' },
      { emoji: '🔄', title: 'Strategic Deployment', desc: 'WOCO helps advocates identify the right evidence for the right audience at the right moment in advocacy processes.' },
    ],
    outcomes: [
      'Women advocates communicate evidence persuasively to diverse audiences',
      'Community stories influence media coverage, public debate, and policy',
      'Decision-makers regularly encounter and respond to community evidence',
      'Social norms around gender justice shifted through narrative change',
      'A growing body of documented community evidence available for advocacy use',
      'Women experience profound confidence from having their stories heard and valued',
    ],
    quote: { text: 'I used to think my story was only mine. WOCO helped me understand that when I speak, I speak for thousands of women who cannot. That changed everything.', author: 'Community advocate, Evidence for Change programme' },
    partners: ['Witness.org', 'Tactical Tech', 'Women\'s Media Network', 'IDS Sussex'],
  },

}

const program = computed(() => allPrograms[props.programId] || allPrograms['program-basic-needs'])
</script>