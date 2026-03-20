// src/data/programsData.js

export const programsData = {

  // ══════════════════════════════════════════
  // PROGRAM 1: WOMEN'S ECONOMIC EMPOWERMENT
  // ══════════════════════════════════════════

  'program-identifying-vulnerable': {
    emoji: '🔍',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Identifying the Most Vulnerable Women', fr: 'Identifier les Femmes les Plus Vulnérables' },
    subtitle: {
      en: 'Community-led targeting of women in extreme poverty',
      fr: 'Ciblage communautaire des femmes en extrême pauvreté'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/basic.png', import.meta.url).href,
    overview: {
      en: 'Our work begins by identifying women living in extreme poverty through community consultations and local verification processes. Priority is given to widows, displaced women, survivors of violence, and women heading households with limited access to income or assets. This participatory process ensures that support reaches those who need it most.',
      fr: 'Notre travail commence par l\'identification des femmes vivant dans l\'extrême pauvreté grâce à des consultations communautaires et des processus de vérification locaux. La priorité est donnée aux veuves, aux femmes déplacées, aux survivantes de violences et aux femmes cheffes de ménage ayant un accès limité aux revenus ou aux actifs.'
    },
    objectives: {
      en: [
        'Identify women living in extreme poverty through community-based processes',
        'Prioritize widows, displaced women, survivors of violence, and female-headed households',
        'Use participatory verification to ensure targeting accuracy',
        'Build community trust and ownership from the start of the program'
      ],
      fr: [
        'Identifier les femmes vivant dans l\'extrême pauvreté par des processus communautaires',
        'Prioriser les veuves, les femmes déplacées, les survivantes de violences et les ménages dirigés par des femmes',
        'Utiliser une vérification participative pour assurer la précision du ciblage',
        'Renforcer la confiance et l\'appropriation communautaire dès le début du programme'
      ]
    },
    activities: {
      en: [
        { title: 'Community Consultations', description: 'Engage local leaders, community members, and women\'s groups to identify the most vulnerable households' },
        { title: 'Local Verification', description: 'Cross-check findings through community-based verification to ensure support reaches those most in need' },
        { title: 'Vulnerability Criteria', description: 'Apply clear criteria including widowhood, displacement, GBV survival, and limited income or assets' },
        { title: 'Participatory Mapping', description: 'Map vulnerable women within communities to build an accurate and inclusive program enrollment list' }
      ],
      fr: [
        { title: 'Consultations Communautaires', description: 'Engager les leaders locaux, membres de la communauté et groupes de femmes pour identifier les ménages les plus vulnérables' },
        { title: 'Vérification Locale', description: 'Croiser les résultats via une vérification communautaire pour s\'assurer que le soutien atteint ceux qui en ont le plus besoin' },
        { title: 'Critères de Vulnérabilité', description: 'Appliquer des critères clairs incluant le veuvage, le déplacement, la survie à des violences, et un accès limité aux revenus ou actifs' },
        { title: 'Cartographie Participative', description: 'Cartographier les femmes vulnérables dans les communautés pour construire une liste d\'inscription précise et inclusive' }
      ]
    },
    impact: {
      en: [
        { value: '3,800+', label: 'Women Identified & Enrolled' },
        { value: '100%', label: 'Community-Led Targeting' },
        { value: '12+', label: 'Communities Reached' }
      ],
      fr: [
        { value: '3 800+', label: 'Femmes Identifiées et Inscrites' },
        { value: '100%', label: 'Ciblage Communautaire' },
        { value: '12+', label: 'Communautés Atteintes' }
      ]
    }
  },

  'program-skills-training': {
    emoji: '💪',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Building Skills and Confidence', fr: 'Renforcer les Compétences et la Confiance' },
    subtitle: {
      en: 'Practical and personal capacity training for vulnerable women',
      fr: 'Formation pratique et personnelle pour les femmes vulnérables'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/skills.jpeg', import.meta.url).href,
    overview: {
      en: 'Women participate in training sessions designed to strengthen both practical and personal capacities. These trainings include small business and livelihood development, financial literacy and savings management, leadership and decision-making skills, and community participation. The goal is not only to build income-generating skills but also to strengthen self-confidence and agency.',
      fr: 'Les femmes participent à des sessions de formation conçues pour renforcer leurs capacités pratiques et personnelles. Ces formations comprennent le développement des moyens de subsistance et des petites entreprises, la gestion financière, le leadership et les compétences de prise de décision, et la participation communautaire.'
    },
    objectives: {
      en: [
        'Strengthen practical income-generating and business skills',
        'Build financial literacy and savings management capacity',
        'Develop leadership, decision-making, and self-confidence',
        'Promote community participation and collective action'
      ],
      fr: [
        'Renforcer les compétences pratiques de génération de revenus et de gestion d\'entreprise',
        'Développer la capacité de littératie financière et de gestion de l\'épargne',
        'Développer le leadership, la prise de décision et la confiance en soi',
        'Promouvoir la participation communautaire et l\'action collective'
      ]
    },
    activities: {
      en: [
        { title: 'Small Business & Livelihood Training', description: 'Practical skills in agriculture, trade, artisanship, and other locally relevant income-generating activities' },
        { title: 'Financial Literacy', description: 'Training in savings management, budgeting, record-keeping, and responsible borrowing' },
        { title: 'Leadership Development', description: 'Workshops on decision-making, public speaking, community organizing, and advocacy' },
        { title: 'Collective Action', description: 'Group activities that build solidarity, peer learning, and community participation' }
      ],
      fr: [
        { title: 'Formation en Petite Entreprise et Moyens de Subsistance', description: 'Compétences pratiques en agriculture, commerce, artisanat et autres activités génératrices de revenus localement pertinentes' },
        { title: 'Littératie Financière', description: 'Formation en gestion de l\'épargne, budgétisation, tenue de registres et emprunt responsable' },
        { title: 'Développement du Leadership', description: 'Ateliers sur la prise de décision, la prise de parole en public, l\'organisation communautaire et le plaidoyer' },
        { title: 'Action Collective', description: 'Activités de groupe qui renforcent la solidarité, l\'apprentissage par les pairs et la participation communautaire' }
      ]
    },
    impact: {
      en: [
        { value: '3,800', label: 'Women Trained' },
        { value: '85%', label: 'Report Increased Confidence' },
        { value: '18', label: 'Cooperatives Supported' }
      ],
      fr: [
        { value: '3 800', label: 'Femmes Formées' },
        { value: '85%', label: 'Signalent une Confiance Accrue' },
        { value: '18', label: 'Coopératives Soutenues' }
      ]
    }
  },

  'program-livelihood-development': {
    emoji: '🌱',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Supporting Livelihood Development', fr: 'Soutenir le Développement des Moyens de Subsistance' },
    subtitle: {
      en: 'Start-up capital, assets, and technical support for economic activities',
      fr: 'Capital de démarrage, actifs et soutien technique pour les activités économiques'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/productive.jpeg', import.meta.url).href,
    overview: {
      en: 'To help women start or expand economic activities, WOCO provides support tailored to their chosen livelihoods. This may include small start-up capital or productive assets, technical support in agriculture, small trade, or other local activities, access to markets and value chains, and continuous coaching to strengthen business management. Women are encouraged to develop activities that respond to local economic opportunities and community needs.',
      fr: 'Pour aider les femmes à démarrer ou développer des activités économiques, WOCO fournit un soutien adapté à leurs moyens de subsistance choisis. Cela peut inclure un petit capital de démarrage ou des actifs productifs, un soutien technique en agriculture ou petit commerce, l\'accès aux marchés et aux chaînes de valeur, et un coaching continu.'
    },
    objectives: {
      en: [
        'Provide start-up capital or productive assets matched to women\'s chosen livelihoods',
        'Offer technical support in agriculture, small trade, and other local activities',
        'Connect women to markets, value chains, and economic opportunities',
        'Deliver continuous business coaching for sustainable income generation'
      ],
      fr: [
        'Fournir du capital de démarrage ou des actifs productifs adaptés aux moyens de subsistance choisis',
        'Offrir un soutien technique en agriculture, petit commerce et autres activités locales',
        'Connecter les femmes aux marchés, chaînes de valeur et opportunités économiques',
        'Assurer un coaching commercial continu pour une génération durable de revenus'
      ]
    },
    activities: {
      en: [
        { title: 'Productive Asset Transfer', description: 'Provision of livestock, seeds, tools, equipment, or business inventory to launch income-generating activities' },
        { title: 'Agricultural Technical Support', description: 'Climate-smart farming, crop diversification, agroforestry, and sustainable land practices' },
        { title: 'Market Linkages', description: 'Connecting women producers to local markets, cooperatives, and value chains' },
        { title: 'Business Coaching', description: 'Ongoing guidance on business management, customer relations, and growth strategies' }
      ],
      fr: [
        { title: 'Transfert d\'Actifs Productifs', description: 'Fourniture de bétail, semences, outils, équipements ou stocks commerciaux pour lancer des activités génératrices de revenus' },
        { title: 'Soutien Technique Agricole', description: 'Agriculture intelligente face au climat, diversification des cultures, agroforesterie et pratiques durables' },
        { title: 'Liens avec les Marchés', description: 'Connecter les femmes productrices aux marchés locaux, coopératives et chaînes de valeur' },
        { title: 'Coaching Commercial', description: 'Accompagnement continu sur la gestion d\'entreprise, les relations clients et les stratégies de croissance' }
      ]
    },
    impact: {
      en: [
        { value: '8', label: 'Tree Nurseries by Women\'s Groups' },
        { value: '12K+', label: 'Trees Planted & Monitored' },
        { value: '18', label: 'Cooperatives Created & Supported' }
      ],
      fr: [
        { value: '8', label: 'Pépinières par des Groupes de Femmes' },
        { value: '12K+', label: 'Arbres Plantés et Surveillés' },
        { value: '18', label: 'Coopératives Créées et Soutenues' }
      ]
    }
  },

  'program-savings-financial': {
    emoji: '💰',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Savings & Financial Inclusion', fr: 'Épargne et Inclusion Financière' },
    subtitle: {
      en: 'Community savings groups for economic resilience',
      fr: 'Groupes d\'épargne communautaires pour la résilience économique'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/savings.jpg', import.meta.url).href,
    overview: {
      en: 'Women are supported to organize themselves into community savings groups where they can save regularly, access small loans, and support one another financially. These groups help women build financial resilience, develop saving habits, and gradually accumulate productive capital.',
      fr: 'Les femmes sont soutenues pour s\'organiser en groupes d\'épargne communautaires où elles peuvent épargner régulièrement, accéder à de petits prêts et se soutenir financièrement. Ces groupes aident les femmes à renforcer leur résilience financière, développer des habitudes d\'épargne et accumuler progressivement du capital productif.'
    },
    objectives: {
      en: [
        'Organize women into community savings groups (VSLAs)',
        'Enable regular saving and access to small loans',
        'Build financial resilience and healthy money management habits',
        'Gradually accumulate productive capital for reinvestment'
      ],
      fr: [
        'Organiser les femmes en groupes d\'épargne communautaires (AVEC)',
        'Permettre l\'épargne régulière et l\'accès aux petits prêts',
        'Renforcer la résilience financière et les bonnes habitudes de gestion de l\'argent',
        'Accumuler progressivement du capital productif pour le réinvestissement'
      ]
    },
    activities: {
      en: [
        { title: 'VSLA Formation & Training', description: 'Establish and train Village Savings and Loan Associations with democratic governance and transparent processes' },
        { title: 'Regular Savings Cycles', description: 'Weekly or monthly savings meetings where members contribute and build a collective fund' },
        { title: 'Loan Access', description: 'Members borrow from group funds at low interest for business, emergency, or productive needs' },
        { title: 'Financial Literacy Training', description: 'Teach budgeting, savings, borrowing principles, and investment planning' }
      ],
      fr: [
        { title: 'Formation et Création d\'AVEC', description: 'Établir et former des Associations Villageoises d\'Épargne et de Crédit avec une gouvernance démocratique' },
        { title: 'Cycles d\'Épargne Réguliers', description: 'Réunions d\'épargne hebdomadaires ou mensuelles où les membres contribuent et construisent un fonds collectif' },
        { title: 'Accès aux Prêts', description: 'Les membres empruntent sur les fonds du groupe à faible intérêt pour des besoins commerciaux, d\'urgence ou productifs' },
        { title: 'Formation en Littératie Financière', description: 'Enseigner la budgétisation, l\'épargne, les principes d\'emprunt et la planification des investissements' }
      ]
    },
    impact: {
      en: [
        { value: '8', label: 'Savings Groups (VSLAs) Established' },
        { value: '3,800+', label: 'Women Members' },
        { value: '100%', label: 'Financial Inclusion for Participants' }
      ],
      fr: [
        { value: '8', label: 'Groupes d\'Épargne (AVEC) Établis' },
        { value: '3 800+', label: 'Femmes Membres' },
        { value: '100%', label: 'Inclusion Financière pour les Participantes' }
      ]
    }
  },

  'program-coaching-mentorship': {
    emoji: '🤝',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Ongoing Mentorship & Community Support', fr: 'Mentorat Continu et Soutien Communautaire' },
    subtitle: {
      en: 'Personalized coaching for lasting transformation',
      fr: 'Coaching personnalisé pour une transformation durable'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/caoching.jpg', import.meta.url).href,
    overview: {
      en: 'Throughout the program, WOCO staff and community facilitators provide regular coaching and mentorship. These visits help women track progress in their livelihoods, address challenges early, strengthen motivation and confidence, and maintain strong participation in savings groups and community initiatives. This continuous accompaniment is key to ensuring lasting change.',
      fr: 'Tout au long du programme, le personnel de WOCO et les facilitateurs communautaires fournissent un coaching et un mentorat réguliers. Ces visites aident les femmes à suivre leurs progrès, à aborder les défis tôt, à renforcer la motivation et la confiance, et à maintenir une participation active dans les groupes d\'épargne.'
    },
    objectives: {
      en: [
        'Provide regular household visits and personalized coaching',
        'Help women track and celebrate progress in their livelihoods',
        'Address challenges and setbacks with timely support',
        'Strengthen motivation, confidence, and community participation'
      ],
      fr: [
        'Fournir des visites à domicile régulières et un coaching personnalisé',
        'Aider les femmes à suivre et célébrer leurs progrès dans leurs moyens de subsistance',
        'Aborder les défis et les revers avec un soutien en temps utile',
        'Renforcer la motivation, la confiance et la participation communautaire'
      ]
    },
    activities: {
      en: [
        { title: 'Regular Household Visits', description: 'WOCO coaches visit women at home to provide personalized support, guidance, and accountability' },
        { title: 'Progress Tracking', description: 'Monitor livelihood activities, savings, and personal development milestones with each participant' },
        { title: 'Psychosocial Support', description: 'Emotional support, confidence-building, and motivation during challenging moments' },
        { title: 'Peer Learning Groups', description: 'Facilitated group sessions where women share experiences, learn from each other, and build solidarity' }
      ],
      fr: [
        { title: 'Visites à Domicile Régulières', description: 'Les coaches de WOCO rendent visite aux femmes chez elles pour fournir un soutien personnalisé, des conseils et une responsabilisation' },
        { title: 'Suivi des Progrès', description: 'Surveiller les activités de subsistance, l\'épargne et les étapes de développement personnel avec chaque participante' },
        { title: 'Soutien Psychosocial', description: 'Soutien émotionnel, renforcement de la confiance et motivation dans les moments difficiles' },
        { title: 'Groupes d\'Apprentissage par les Pairs', description: 'Sessions de groupe facilitées où les femmes partagent leurs expériences, apprennent les unes des autres et renforcent la solidarité' }
      ]
    },
    impact: {
      en: [
        { value: '3,800', label: 'Women Receiving Mentorship' },
        { value: '100%', label: 'Receive Ongoing Coaching' },
        { value: '78%', label: 'Become Peer Mentors' }
      ],
      fr: [
        { value: '3 800', label: 'Femmes Bénéficiant du Mentorat' },
        { value: '100%', label: 'Reçoivent un Coaching Continu' },
        { value: '78%', label: 'Deviennent Mentors de Pairs' }
      ]
    }
  },

  // ══════════════════════════════════════════
  // PROGRAM 2: GIRLS LEADERSHIP ACADEMY
  // ══════════════════════════════════════════

  'program-school-sponsorship': {
    emoji: '🎒',
    category: { en: 'Girls Leadership Academy', fr: 'Académie de Leadership pour Filles' },
    title: { en: 'Education Access & Sponsorship', fr: 'Accès à l\'Éducation et Parrainage' },
    subtitle: {
      en: 'Keeping girls in school and opening doors to their futures',
      fr: 'Garder les filles à l\'école et ouvrir les portes de leur avenir'
    },
    tagColor: 'bg-amber-100 text-amber-700',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    hero: new URL('../assets/programs/school.jpeg', import.meta.url).href,
    overview: {
      en: 'Education is the foundation of girls\' empowerment. Women Concern identifies the most vulnerable girls — including those affected by poverty, discrimination, early motherhood, or displacement — and supports them to remain in school or return to education. Girls unable to continue formal education are supported to access vocational training aligned with their interests and opportunities.',
      fr: 'L\'éducation est le fondement de l\'autonomisation des filles. Women Concern identifie les filles les plus vulnérables — y compris celles affectées par la pauvreté, la discrimination, la maternité précoce ou le déplacement — et les soutient pour rester à l\'école ou retourner à l\'éducation.'
    },
    objectives: {
      en: [
        'Identify and enroll the most vulnerable girls in the sponsorship program',
        'Eliminate financial barriers including school fees, uniforms, and materials',
        'Support school reintegration for girls who have dropped out',
        'Connect girls unable to attend formal school to vocational training'
      ],
      fr: [
        'Identifier et inscrire les filles les plus vulnérables dans le programme de parrainage',
        'Éliminer les barrières financières incluant les frais de scolarité, uniformes et matériels',
        'Soutenir la réintégration scolaire des filles qui ont abandonné l\'école',
        'Connecter les filles ne pouvant pas fréquenter l\'école formelle à la formation professionnelle'
      ]
    },
    activities: {
      en: [
        { title: 'School Fees Assistance', description: 'Cover tuition, exam fees, and other school-related costs for vulnerable girls' },
        { title: 'Learning Materials', description: 'Provide uniforms, shoes, books, pens, and learning supplies' },
        { title: 'School Reintegration', description: 'Support girls who dropped out to return and continue their education' },
        { title: 'Vocational Pathways', description: 'Connect girls unable to attend formal school to vocational training matched to their interests' }
      ],
      fr: [
        { title: 'Aide aux Frais de Scolarité', description: 'Couvrir les frais de scolarité, les frais d\'examen et autres coûts scolaires pour les filles vulnérables' },
        { title: 'Matériel Scolaire', description: 'Fournir des uniformes, chaussures, livres, stylos et fournitures d\'apprentissage' },
        { title: 'Réintégration Scolaire', description: 'Soutenir les filles qui ont abandonné l\'école pour y retourner et poursuivre leurs études' },
        { title: 'Filières Professionnelles', description: 'Connecter les filles ne pouvant pas fréquenter l\'école formelle à la formation professionnelle adaptée' }
      ]
    },
    impact: {
      en: [
        { value: '1,200+', label: 'Girls Sponsored' },
        { value: '96%', label: 'School Retention Rate' },
        { value: '85%', label: 'Progress to Next Grade' }
      ],
      fr: [
        { value: '1 200+', label: 'Filles Parrainées' },
        { value: '96%', label: 'Taux de Rétention Scolaire' },
        { value: '85%', label: 'Passent au Niveau Suivant' }
      ]
    }
  },

  'program-girls-leadership': {
    emoji: '🌟',
    category: { en: 'Girls Leadership Academy', fr: 'Académie de Leadership pour Filles' },
    title: { en: 'Leadership & Life Skills Development', fr: 'Développement du Leadership et des Compétences de Vie' },
    subtitle: {
      en: 'Equipping girls with knowledge and confidence to lead',
      fr: 'Équiper les filles avec les connaissances et la confiance pour diriger'
    },
    tagColor: 'bg-amber-100 text-amber-700',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    hero: new URL('../assets/programs/career.jpeg', import.meta.url).href,
    overview: {
      en: 'The Academy equips girls with the knowledge and confidence needed to lead. Participants join Girls Leadership Clubs, where they receive training in leadership and public speaking, self-confidence and personal development, financial literacy and entrepreneurship, digital literacy, civic engagement, and gender equality. Girls also receive mentorship from female leaders and professionals who help guide their personal and professional aspirations.',
      fr: 'L\'Académie équipe les filles avec les connaissances et la confiance nécessaires pour diriger. Les participantes rejoignent des Clubs de Leadership pour Filles, où elles reçoivent une formation en leadership, confiance en soi, littératie financière, littératie numérique, engagement civique et égalité des genres.'
    },
    objectives: {
      en: [
        'Develop leadership, public speaking, and advocacy skills in girls',
        'Build self-confidence, personal development, and financial literacy',
        'Promote digital literacy, civic engagement, and gender equality',
        'Provide mentorship from female leaders and professionals'
      ],
      fr: [
        'Développer les compétences en leadership, prise de parole en public et plaidoyer chez les filles',
        'Renforcer la confiance en soi, le développement personnel et la littératie financière',
        'Promouvoir la littératie numérique, l\'engagement civique et l\'égalité des genres',
        'Fournir un mentorat de la part de femmes leaders et professionnelles'
      ]
    },
    activities: {
      en: [
        { title: 'Girls Leadership Clubs', description: 'School-based clubs providing ongoing peer support, learning, and leadership activities' },
        { title: 'Leadership Training Workshops', description: 'Structured training on public speaking, advocacy, decision-making, and community organizing' },
        { title: 'Mentorship Programme', description: 'Girls are paired with female role models who guide their personal and professional aspirations' },
        { title: 'Entrepreneurship & Digital Skills', description: 'Practical training in financial literacy, entrepreneurship, and basic digital tools' }
      ],
      fr: [
        { title: 'Clubs de Leadership pour Filles', description: 'Clubs scolaires offrant un soutien continu par les pairs, des activités d\'apprentissage et de leadership' },
        { title: 'Ateliers de Formation au Leadership', description: 'Formation structurée en prise de parole en public, plaidoyer, prise de décision et organisation communautaire' },
        { title: 'Programme de Mentorat', description: 'Les filles sont jumelées avec des modèles féminins qui guident leurs aspirations personnelles et professionnelles' },
        { title: 'Compétences Entrepreneuriales et Numériques', description: 'Formation pratique en littératie financière, entrepreneuriat et outils numériques de base' }
      ]
    },
    impact: {
      en: [
        { value: '800+', label: 'Girls in Leadership Academy' },
        { value: '92%', label: 'Report Increased Confidence' },
        { value: '65%', label: 'Pursue Higher Education' }
      ],
      fr: [
        { value: '800+', label: 'Filles dans l\'Académie de Leadership' },
        { value: '92%', label: 'Signalent une Confiance Accrue' },
        { value: '65%', label: 'Poursuivent des Études Supérieures' }
      ]
    }
  },

  'program-menstrual-hygiene': {
    emoji: '🌸',
    category: { en: 'Girls Leadership Academy', fr: 'Académie de Leadership pour Filles' },
    title: { en: 'Menstrual Health & Dignity', fr: 'Santé Menstruelle et Dignité' },
    subtitle: {
      en: 'Breaking stigma and keeping girls in school',
      fr: 'Briser la stigmatisation et garder les filles à l\'école'
    },
    tagColor: 'bg-amber-100 text-amber-700',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    hero: new URL('../assets/programs/menstrual.jpeg', import.meta.url).href,
    overview: {
      en: 'Menstrual stigma and lack of hygiene products remain a major barrier to girls\' education. The Academy promotes menstrual dignity through health education, distribution of reusable menstrual pads such as Safi Pad and Malkia Pad, school awareness campaigns, and safe discussions that break stigma around menstruation. By addressing menstrual health, the program helps girls stay in school with confidence and dignity.',
      fr: 'La stigmatisation menstruelle et le manque de produits d\'hygiène restent un obstacle majeur à l\'éducation des filles. L\'Académie promeut la dignité menstruelle par l\'éducation, la distribution de serviettes hygiéniques réutilisables comme Safi Pad et Malkia Pad, et des campagnes de sensibilisation scolaire.'
    },
    objectives: {
      en: [
        'Provide menstrual health education to break stigma and misinformation',
        'Distribute reusable Safi Pad and Malkia Pad to schools and girls\' clubs',
        'Run school and community awareness campaigns on menstrual dignity',
        'Create safe spaces for girls to discuss menstrual health openly'
      ],
      fr: [
        'Fournir une éducation à la santé menstruelle pour briser la stigmatisation',
        'Distribuer des serviettes hygiéniques réutilisables Safi Pad et Malkia Pad aux écoles et clubs de filles',
        'Mener des campagnes de sensibilisation scolaire et communautaire sur la dignité menstruelle',
        'Créer des espaces sûrs pour que les filles discutent ouvertement de la santé menstruelle'
      ]
    },
    activities: {
      en: [
        { title: 'Menstrual Health Education', description: 'Age-appropriate education on menstruation, body literacy, and hygiene practices' },
        { title: 'Safi Pad & Malkia Pad Distribution', description: 'Locally produced reusable menstrual pads distributed free to schools and girls\' clubs' },
        { title: 'School Awareness Campaigns', description: 'Campaigns targeting teachers, students, and parents to normalize menstruation and reduce stigma' },
        { title: 'Safe Discussion Spaces', description: 'Facilitated sessions where girls can ask questions and share experiences about menstrual health' }
      ],
      fr: [
        { title: 'Éducation à la Santé Menstruelle', description: 'Éducation adaptée à l\'âge sur la menstruation, la littératie corporelle et les pratiques d\'hygiène' },
        { title: 'Distribution de Safi Pad et Malkia Pad', description: 'Serviettes hygiéniques réutilisables produites localement et distribuées gratuitement aux écoles et clubs de filles' },
        { title: 'Campagnes de Sensibilisation Scolaire', description: 'Campagnes ciblant enseignants, élèves et parents pour normaliser la menstruation et réduire la stigmatisation' },
        { title: 'Espaces de Discussion Sûrs', description: 'Sessions facilitées où les filles peuvent poser des questions et partager leurs expériences sur la santé menstruelle' }
      ]
    },
    impact: {
      en: [
        { value: '15,000+', label: 'Girls Reached' },
        { value: '45,000+', label: 'Pads Distributed' },
        { value: '80%', label: 'Reduction in Absenteeism' }
      ],
      fr: [
        { value: '15 000+', label: 'Filles Touchées' },
        { value: '45 000+', label: 'Serviettes Distribuées' },
        { value: '80%', label: 'Réduction de l\'Absentéisme' }
      ]
    }
  },

  'program-srhr': {
    emoji: '💜',
    category: { en: 'Girls Leadership Academy', fr: 'Académie de Leadership pour Filles' },
    title: { en: 'Sexual & Reproductive Health & Rights (SRHR)', fr: 'Santé et Droits Sexuels et Reproductifs (SDSR)' },
    subtitle: {
      en: 'Empowering girls with knowledge, rights, and choices',
      fr: 'Autonomiser les filles avec des connaissances, des droits et des choix'
    },
    tagColor: 'bg-amber-100 text-amber-700',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    hero: new URL('../assets/programs/sexual.jpeg', import.meta.url).href,
    overview: {
      en: 'Many girls lack access to accurate information about their bodies and health. The Academy provides age-appropriate education on reproductive health, prevention of early pregnancy, gender-based violence awareness, bodily autonomy and rights, and healthy relationships. Girls also learn how to access youth-friendly health services in their communities.',
      fr: 'Beaucoup de filles n\'ont pas accès à des informations précises sur leur corps et leur santé. L\'Académie fournit une éducation adaptée à l\'âge sur la santé reproductive, la prévention de la grossesse précoce, la sensibilisation à la violence basée sur le genre, l\'autonomie corporelle et les droits, et les relations saines.'
    },
    objectives: {
      en: [
        'Provide age-appropriate comprehensive SRHR education',
        'Prevent early pregnancy and gender-based violence through awareness',
        'Empower girls with knowledge of their bodily autonomy and rights',
        'Connect girls to youth-friendly health services in their communities'
      ],
      fr: [
        'Fournir une éducation SDSR complète adaptée à l\'âge',
        'Prévenir la grossesse précoce et la violence basée sur le genre par la sensibilisation',
        'Autonomiser les filles avec la connaissance de leur autonomie corporelle et de leurs droits',
        'Connecter les filles aux services de santé adaptés aux jeunes dans leurs communautés'
      ]
    },
    activities: {
      en: [
        { title: 'Reproductive Health Education', description: 'Comprehensive, age-appropriate lessons on puberty, reproductive health, and sexual wellbeing' },
        { title: 'GBV Awareness & Prevention', description: 'Workshops on recognizing, preventing, and responding to gender-based violence and harmful practices' },
        { title: 'Bodily Autonomy & Rights', description: 'Sessions on consent, healthy relationships, personal boundaries, and the right to say no' },
        { title: 'Health Services Linkages', description: 'Referrals and guidance on accessing youth-friendly health services and counseling' }
      ],
      fr: [
        { title: 'Éducation à la Santé Reproductive', description: 'Cours complets et adaptés à l\'âge sur la puberté, la santé reproductive et le bien-être sexuel' },
        { title: 'Sensibilisation et Prévention de la VBG', description: 'Ateliers sur la reconnaissance, la prévention et la réponse à la violence basée sur le genre et aux pratiques néfastes' },
        { title: 'Autonomie Corporelle et Droits', description: 'Sessions sur le consentement, les relations saines, les limites personnelles et le droit de dire non' },
        { title: 'Liens avec les Services de Santé', description: 'Références et conseils pour accéder aux services de santé et aux conseils adaptés aux jeunes' }
      ]
    },
    impact: {
      en: [
        { value: '5,000+', label: 'Girls Educated on SRHR' },
        { value: '60%', label: 'Reduction in Teen Pregnancy' },
        { value: '95%', label: 'Know How to Access Services' }
      ],
      fr: [
        { value: '5 000+', label: 'Filles Éduquées sur le SDSR' },
        { value: '60%', label: 'Réduction des Grossesses Adolescentes' },
        { value: '95%', label: 'Savent Comment Accéder aux Services' }
      ]
    }
  },

  // ══════════════════════════════════════════
  // PROGRAM 3: LAND RESTORATION & CLIMATE
  // ══════════════════════════════════════════

  'program-ruzizi': {
    emoji: '🌱',
    category: { en: 'Climate & Environment', fr: 'Climat et Environnement' },
    title: { en: 'Ruzizi Greening Project', fr: 'Projet de Verdissement de Ruzizi' },
    subtitle: {
      en: 'Community-led restoration of the Ruzizi Plain landscape',
      fr: 'Restauration communautaire du paysage de la Plaine de Ruzizi'
    },
    tagColor: 'bg-green-100 text-green-700',
    accentBg: 'bg-green-50',
    accentText: 'text-green-600',
    hero: new URL('../assets/programs/ruzizi.jpeg', import.meta.url).href,
    overview: {
      en: 'Women Concern leads the Ruzizi Greening Project, a flagship landscape restoration initiative focused on the Ruzizi Plain in Eastern DRC. The project works with communities to restore ecosystems while strengthening climate-resilient livelihoods, particularly for women farmers and rural households. Women\'s cooperatives are supported to adopt regenerative agricultural practices, establish agroforestry nurseries, and develop green enterprises.',
      fr: 'Women Concern dirige le Projet de Verdissement de Ruzizi, une initiative phare de restauration des paysages axée sur la Plaine de Ruzizi en RDC orientale. Le projet travaille avec les communautés pour restaurer les écosystèmes tout en renforçant les moyens de subsistance résilients au climat, particulièrement pour les femmes agricultrices.'
    },
    objectives: {
      en: [
        'Restore degraded ecosystems through agroforestry and community tree planting',
        'Strengthen climate-resilient livelihoods for women farmers',
        'Establish community tree nurseries managed by women\'s cooperatives',
        'Promote soil conservation, watershed protection, and regenerative horticulture'
      ],
      fr: [
        'Restaurer les écosystèmes dégradés par l\'agroforesterie et la plantation communautaire d\'arbres',
        'Renforcer les moyens de subsistance résilients au climat pour les femmes agricultrices',
        'Établir des pépinières communautaires gérées par les coopératives de femmes',
        'Promouvoir la conservation des sols, la protection des bassins versants et l\'horticulture régénérative'
      ]
    },
    activities: {
      en: [
        { title: 'Agroforestry & Tree Planting', description: 'Community tree planting campaigns integrating agroforestry with food crop production' },
        { title: 'Community Tree Nurseries', description: 'Women\'s cooperatives establish and manage nurseries using indigenous species' },
        { title: 'Soil & Water Conservation', description: 'Training in conservation farming, composting, and watershed protection practices' },
        { title: 'Regenerative Horticulture', description: 'Women-led regenerative vegetable and food production using organic techniques' }
      ],
      fr: [
        { title: 'Agroforesterie et Plantation d\'Arbres', description: 'Campagnes communautaires de plantation d\'arbres intégrant l\'agroforesterie avec la production alimentaire' },
        { title: 'Pépinières Communautaires', description: 'Les coopératives de femmes établissent et gèrent des pépinières avec des espèces indigènes' },
        { title: 'Conservation des Sols et de l\'Eau', description: 'Formation en agriculture de conservation, compostage et pratiques de protection des bassins versants' },
        { title: 'Horticulture Régénérative', description: 'Production végétale et alimentaire régénérative dirigée par des femmes utilisant des techniques biologiques' }
      ]
    },
    impact: {
      en: [
        { value: '12K+', label: 'Trees Planted & Monitored' },
        { value: '8', label: 'Tree Nurseries by Women\'s Groups' },
        { value: '1,000+', label: 'Women Farmers Engaged' }
      ],
      fr: [
        { value: '12K+', label: 'Arbres Plantés et Surveillés' },
        { value: '8', label: 'Pépinières par des Groupes de Femmes' },
        { value: '1 000+', label: 'Femmes Agricultrices Engagées' }
      ]
    }
  },

  'program-jiko': {
    emoji: '🔥',
    category: { en: 'Climate & Environment', fr: 'Climat et Environnement' },
    title: { en: 'Clean Cooking Solutions', fr: 'Solutions de Cuisine Propre' },
    subtitle: {
      en: 'Improved cookstoves for forests, health, and livelihoods',
      fr: 'Cuisinières améliorées pour les forêts, la santé et les moyens de subsistance'
    },
    tagColor: 'bg-green-100 text-green-700',
    accentBg: 'bg-green-50',
    accentText: 'text-green-600',
    hero: new URL('../assets/programs/jiko.jpeg', import.meta.url).href,
    overview: {
      en: 'Traditional cooking methods rely heavily on firewood, contributing to deforestation and indoor air pollution. Through GLFx Kivu, Women Concern promotes clean cooking solutions that combine environmental protection, indigenous knowledge, and livelihood opportunities. The program trains communities to produce improved cookstoves locally, promoting indigenous knowledge in sustainable cooking practices and supporting artisans to transform cookstove production into income-generating activities.',
      fr: 'Les méthodes de cuisine traditionnelles dépendent fortement du bois de chauffe, contribuant à la déforestation et à la pollution de l\'air intérieur. À travers GLFx Kivu, Women Concern promeut des solutions de cuisine propre combinant protection environnementale, savoirs indigènes et opportunités de moyens de subsistance.'
    },
    objectives: {
      en: [
        'Reduce household firewood and charcoal consumption to protect forests',
        'Improve indoor air quality and family health outcomes',
        'Train communities to produce improved cookstoves locally',
        'Support artisans to transform cookstove production into income-generating activities'
      ],
      fr: [
        'Réduire la consommation de bois de chauffe et de charbon des ménages pour protéger les forêts',
        'Améliorer la qualité de l\'air intérieur et les résultats sanitaires des familles',
        'Former les communautés à produire des cuisinières améliorées localement',
        'Soutenir les artisans pour transformer la production de cuisinières en activités génératrices de revenus'
      ]
    },
    activities: {
      en: [
        { title: 'Cookstove Production Training', description: 'Hands-on training for community artisans, particularly indigenous populations, to produce energy-efficient stoves' },
        { title: 'Indigenous Knowledge Integration', description: 'Promote and preserve traditional sustainable cooking knowledge alongside improved technologies' },
        { title: 'Community Distribution', description: 'Distribute improved cookstoves to households, especially the most vulnerable families' },
        { title: 'Environmental Awareness', description: 'Community campaigns linking deforestation, cooking practices, and climate change' }
      ],
      fr: [
        { title: 'Formation à la Production de Cuisinières', description: 'Formation pratique pour les artisans communautaires, notamment les populations indigènes, pour produire des poêles économes en énergie' },
        { title: 'Intégration des Savoirs Indigènes', description: 'Promouvoir et préserver les savoirs traditionnels en cuisine durable aux côtés des technologies améliorées' },
        { title: 'Distribution Communautaire', description: 'Distribuer des cuisinières améliorées aux ménages, en particulier les familles les plus vulnérables' },
        { title: 'Sensibilisation Environnementale', description: 'Campagnes communautaires reliant déforestation, pratiques culinaires et changement climatique' }
      ]
    },
    impact: {
      en: [
        { value: '8,000+', label: 'Stoves Distributed' },
        { value: '60%', label: 'Reduction in Firewood Use' },
        { value: '200+', label: 'Artisan Producers Supported' }
      ],
      fr: [
        { value: '8 000+', label: 'Cuisinières Distribuées' },
        { value: '60%', label: 'Réduction de l\'Utilisation de Bois' },
        { value: '200+', label: 'Artisans Producteurs Soutenus' }
      ]
    }
  },

  'program-green-enterprise': {
    emoji: '♻️',
    category: { en: 'Climate & Environment', fr: 'Climat et Environnement' },
    title: { en: 'Green Enterprise & Regenerative Agriculture', fr: 'Entreprise Verte et Agriculture Régénérative' },
    subtitle: {
      en: 'Environmental restoration generating sustainable livelihoods',
      fr: 'Restauration environnementale générant des moyens de subsistance durables'
    },
    tagColor: 'bg-green-100 text-green-700',
    accentBg: 'bg-green-50',
    accentText: 'text-green-600',
    hero: new URL('../assets/programs/peace.jpeg', import.meta.url).href,
    overview: {
      en: 'Environmental restoration can generate new economic opportunities. The program supports women and youth to develop green enterprises linked to sustainable landscape management, including agroforestry businesses, tree nursery enterprises, climate-resilient horticulture, and organic food production. Through training, mentorship, and financial inclusion initiatives, communities transform restoration efforts into sustainable livelihoods.',
      fr: 'La restauration environnementale peut générer de nouvelles opportunités économiques. Le programme soutient les femmes et les jeunes pour développer des entreprises vertes liées à la gestion durable des paysages, incluant les entreprises agroforestières, les pépinières d\'arbres, l\'horticulture résiliente au climat et la production alimentaire biologique.'
    },
    objectives: {
      en: [
        'Support women and youth to develop green enterprises linked to restoration',
        'Promote regenerative agriculture practices that restore soil health',
        'Build green entrepreneurship skills and market access',
        'Connect restoration activities to financial inclusion through savings groups'
      ],
      fr: [
        'Soutenir les femmes et les jeunes pour développer des entreprises vertes liées à la restauration',
        'Promouvoir des pratiques agricoles régénératives qui restaurent la santé des sols',
        'Développer les compétences en entrepreneuriat vert et l\'accès aux marchés',
        'Connecter les activités de restauration à l\'inclusion financière par les groupes d\'épargne'
      ]
    },
    activities: {
      en: [
        { title: 'Green Enterprise Training', description: 'Business development training in agroforestry, tree nurseries, organic food production, and restoration services' },
        { title: 'Regenerative Agriculture', description: 'Agroecological farming, organic soil management, crop diversification, and water conservation' },
        { title: 'Women\'s Land Rights', description: 'Awareness and advocacy on women\'s land rights and gender-inclusive land governance' },
        { title: 'Youth Climate Leadership', description: 'Engaging young people in restoration, climate advocacy, and green entrepreneurship through GLFx Kivu' }
      ],
      fr: [
        { title: 'Formation en Entreprise Verte', description: 'Formation en développement d\'entreprise en agroforesterie, pépinières, production alimentaire biologique et services de restauration' },
        { title: 'Agriculture Régénérative', description: 'Agriculture agroécologique, gestion biologique des sols, diversification des cultures et conservation de l\'eau' },
        { title: 'Droits Fonciers des Femmes', description: 'Sensibilisation et plaidoyer sur les droits fonciers des femmes et la gouvernance foncière inclusive en matière de genre' },
        { title: 'Leadership Climatique des Jeunes', description: 'Engager les jeunes dans la restauration, le plaidoyer climatique et l\'entrepreneuriat vert à travers GLFx Kivu' }
      ]
    },
    impact: {
      en: [
        { value: '500+', label: 'Hectares Under Restoration' },
        { value: '18', label: 'Women\'s Cooperatives Supported' },
        { value: '100+', label: 'Green Enterprises Launched' }
      ],
      fr: [
        { value: '500+', label: 'Hectares en Restauration' },
        { value: '18', label: 'Coopératives de Femmes Soutenues' },
        { value: '100+', label: 'Entreprises Vertes Lancées' }
      ]
    }
  },

  // ══════════════════════════════════════════
  // PROGRAM 4: PEACEBUILDING & DISARMAMENT
  // ══════════════════════════════════════════

  'program-salw': {
    emoji: '🛡️',
    category: { en: 'Peace & Security', fr: 'Paix et Sécurité' },
    title: { en: 'Reducing the Spread of Small Arms (SALW)', fr: 'Réduire la Prolifération des Armes Légères (ALPC)' },
    subtitle: {
      en: 'Community-owned security models led by women',
      fr: 'Modèles de sécurité communautaires dirigés par les femmes'
    },
    tagColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    hero: new URL('../assets/programs/Combating.jpeg', import.meta.url).href,
    overview: {
      en: 'The widespread presence of Small Arms and Light Weapons (SALW) fuels fear, instability, and cycles of violence — disproportionately affecting women and youth. WOCO implements a community-owned security model that places women at the forefront through Community Protection Brigades, Women-Led Safety Networks, and Collaborative Security Platforms that transform disarmament from a top-down process into a community-driven system.',
      fr: 'La présence généralisée des Armes Légères et de Petit Calibre (ALPC) alimente la peur, l\'instabilité et les cycles de violence — affectant de manière disproportionnée les femmes et les jeunes. WOCO met en œuvre un modèle de sécurité communautaire qui place les femmes en première ligne.'
    },
    objectives: {
      en: [
        'Establish Community Protection Brigades with women, youth, and community leaders',
        'Build Women-Led Safety Networks to identify risks and promote non-violent solutions',
        'Create collaborative security platforms between communities and authorities',
        'Transform disarmament into a community-driven, women-led process'
      ],
      fr: [
        'Établir des Brigades de Protection Communautaire avec des femmes, des jeunes et des leaders communautaires',
        'Construire des Réseaux de Sécurité Dirigés par les Femmes pour identifier les risques et promouvoir des solutions non violentes',
        'Créer des plateformes de sécurité collaborative entre communautés et autorités',
        'Transformer le désarmement en un processus communautaire dirigé par les femmes'
      ]
    },
    activities: {
      en: [
        { title: 'Community Protection Brigades (CPBs)', description: 'Locally trained groups of women, youth, and leaders who lead awareness campaigns and monitor arms movements' },
        { title: 'Women-Led Safety Networks', description: 'Organized women\'s groups identifying risks, influencing community norms, and promoting non-violent solutions' },
        { title: 'Early Warning Systems', description: 'Community-based mechanisms to monitor and report suspicious arms movements to authorities' },
        { title: 'Collaborative Security Platforms', description: 'Structured engagement between communities, local authorities, and security actors to co-produce safety' }
      ],
      fr: [
        { title: 'Brigades de Protection Communautaire (BPC)', description: 'Groupes formés localement de femmes, jeunes et leaders qui mènent des campagnes de sensibilisation et surveillent les mouvements d\'armes' },
        { title: 'Réseaux de Sécurité Dirigés par les Femmes', description: 'Groupes organisés de femmes identifiant les risques, influençant les normes communautaires et promouvant des solutions non violentes' },
        { title: 'Systèmes d\'Alerte Précoce', description: 'Mécanismes communautaires pour surveiller et signaler les mouvements suspects d\'armes aux autorités' },
        { title: 'Plateformes de Sécurité Collaborative', description: 'Engagement structuré entre communautés, autorités locales et acteurs de sécurité pour co-produire la sûreté' }
      ]
    },
    impact: {
      en: [
        { value: '50+', label: 'Communities Covered' },
        { value: '10,000+', label: 'People Sensitized' },
        { value: '300+', label: 'Weapons Surrendered' }
      ],
      fr: [
        { value: '50+', label: 'Communautés Couvertes' },
        { value: '10 000+', label: 'Personnes Sensibilisées' },
        { value: '300+', label: 'Armes Rendues' }
      ]
    }
  },

  'program-dialogue': {
    emoji: '🕊️',
    category: { en: 'Peace & Security', fr: 'Paix et Sécurité' },
    title: { en: 'Women-Led Peace Dialogues', fr: 'Dialogues de Paix Dirigés par les Femmes' },
    subtitle: {
      en: 'Permanent dialogue systems for conflict prevention and peacebuilding',
      fr: 'Systèmes de dialogue permanents pour la prévention des conflits et la consolidation de la paix'
    },
    tagColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    hero: new URL('../assets/programs/Dialogue.jpeg', import.meta.url).href,
    overview: {
      en: 'Sustainable peace requires spaces where all voices are heard — and where women actively shape decisions. WOCO establishes inclusive and permanent dialogue systems including Community Dialogue Platforms, Women Mediators Circles, and Peace Labs — safe and innovative spaces where women and youth co-create solutions to emerging conflicts. The goal is to move from one-off dialogues to lasting peace infrastructures led by women.',
      fr: 'La paix durable nécessite des espaces où toutes les voix sont entendues — et où les femmes façonnent activement les décisions. WOCO établit des systèmes de dialogue inclusifs et permanents incluant des Plateformes de Dialogue Communautaire, des Cercles de Médiatrices et des Laboratoires de Paix.'
    },
    objectives: {
      en: [
        'Create permanent Community Dialogue Platforms for conflict prevention and consensus-building',
        'Train and support Women Mediators Circles as recognized community peace leaders',
        'Establish Peace Labs as safe spaces for women and youth to co-create solutions',
        'Build lasting peace infrastructure led by women rather than one-off interventions'
      ],
      fr: [
        'Créer des Plateformes de Dialogue Communautaire permanentes pour la prévention des conflits',
        'Former et soutenir des Cercles de Médiatrices comme leaders de paix communautaires reconnus',
        'Établir des Laboratoires de Paix comme espaces sûrs pour les femmes et les jeunes',
        'Construire une infrastructure de paix durable dirigée par les femmes'
      ]
    },
    activities: {
      en: [
        { title: 'Community Dialogue Platforms', description: 'Continuous spaces for conflict prevention, mediation, and consensus-building at community level' },
        { title: 'Women Mediators Circles', description: 'Training and supporting women as recognized and skilled community mediators and peace leaders' },
        { title: 'Peace Labs', description: 'Innovative, safe spaces where women and youth collaboratively develop solutions to emerging tensions' },
        { title: 'Mediation & Dispute Resolution', description: 'Direct mediation of land conflicts, family disputes, and inter-community tensions' }
      ],
      fr: [
        { title: 'Plateformes de Dialogue Communautaire', description: 'Espaces continus pour la prévention des conflits, la médiation et la construction du consensus au niveau communautaire' },
        { title: 'Cercles de Médiatrices', description: 'Former et soutenir les femmes comme médiatrices et leaders de paix communautaires reconnues et compétentes' },
        { title: 'Laboratoires de Paix', description: 'Espaces innovants et sûrs où les femmes et les jeunes développent collaborativement des solutions aux tensions émergentes' },
        { title: 'Médiation et Résolution de Conflits', description: 'Médiation directe des conflits fonciers, des différends familiaux et des tensions intercommunautaires' }
      ]
    },
    impact: {
      en: [
        { value: '120', label: 'Women Mediators Trained' },
        { value: '800+', label: 'Disputes Mediated' },
        { value: '90%', label: 'Resolution Success Rate' }
      ],
      fr: [
        { value: '120', label: 'Femmes Médiatrices Formées' },
        { value: '800+', label: 'Différends Médiés' },
        { value: '90%', label: 'Taux de Réussite de Résolution' }
      ]
    }
  },

  'program-gbv-response': {
    emoji: '💜',
    category: { en: 'Peace & Security', fr: 'Paix et Sécurité' },
    title: { en: 'GBV Prevention & Survivor Support', fr: 'Prévention de la VBG et Soutien aux Survivantes' },
    subtitle: {
      en: 'Holistic, survivor-centered response to gender-based violence',
      fr: 'Réponse holistique et centrée sur les survivantes à la violence basée sur le genre'
    },
    tagColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    hero: new URL('../assets/programs/Leadership.jpeg', import.meta.url).href,
    overview: {
      en: 'Gender-based violence remains one of the most pervasive consequences of conflict. WOCO\'s response is holistic, survivor-centered, and transformative through an Integrated Survivor Support Model. Women Empowerment Hubs provide psychosocial support, legal services, and economic empowerment. Mobile Outreach Units bring services to remote areas. Survivor-to-Leader Pathways support survivors to become peer mentors and advocates.',
      fr: 'La violence basée sur le genre reste l\'une des conséquences les plus répandues des conflits. La réponse de WOCO est holistique, centrée sur les survivantes et transformatrice à travers un Modèle de Soutien Intégré aux Survivantes.'
    },
    objectives: {
      en: [
        'Provide psychosocial support and trauma-informed care to GBV survivors',
        'Offer legal orientation and referral services for access to justice',
        'Support economic empowerment of survivors through skills and savings groups',
        'Engage men, boys, and community leaders to transform harmful norms'
      ],
      fr: [
        'Fournir un soutien psychosocial et des soins sensibles au traumatisme aux survivantes de VBG',
        'Offrir une orientation juridique et des services de référence pour l\'accès à la justice',
        'Soutenir l\'autonomisation économique des survivantes par les compétences et les groupes d\'épargne',
        'Engager les hommes, les garçons et les leaders communautaires pour transformer les normes néfastes'
      ]
    },
    activities: {
      en: [
        { title: 'Women Empowerment Hubs', description: 'Safe, accessible spaces where survivors receive psychosocial support, legal orientation, and economic empowerment' },
        { title: 'Mobile Outreach Units', description: 'Services brought to remote, displaced, and underserved populations who cannot access hubs directly' },
        { title: 'Survivor-to-Leader Pathways', description: 'Support survivors to heal, rebuild, and become peer mentors, advocates, and leaders in prevention' },
        { title: 'Community Norms Transformation', description: 'Engaging men, boys, and leaders to challenge harmful norms and strengthen community protection systems' }
      ],
      fr: [
        { title: 'Centres d\'Autonomisation des Femmes', description: 'Espaces sûrs et accessibles où les survivantes reçoivent un soutien psychosocial, une orientation juridique et une autonomisation économique' },
        { title: 'Unités de Sensibilisation Mobile', description: 'Services apportés aux populations éloignées, déplacées et mal desservies qui ne peuvent pas accéder directement aux centres' },
        { title: 'Parcours de Survivante à Leader', description: 'Soutenir les survivantes pour guérir, se reconstruire et devenir mentors de pairs, défenseures et leaders dans la prévention' },
        { title: 'Transformation des Normes Communautaires', description: 'Engager les hommes, garçons et leaders pour remettre en question les normes néfastes et renforcer les systèmes de protection' }
      ]
    },
    impact: {
      en: [
        { value: '500+', label: 'Survivors Supported' },
        { value: '5', label: 'Women Empowerment Hubs' },
        { value: '85%', label: 'Report Improved Wellbeing' }
      ],
      fr: [
        { value: '500+', label: 'Survivantes Soutenues' },
        { value: '5', label: 'Centres d\'Autonomisation des Femmes' },
        { value: '85%', label: 'Signalent un Mieux-Être Amélioré' }
      ]
    }
  },

  'program-reintegration': {
    emoji: '🔄',
    category: { en: 'Peace & Security', fr: 'Paix et Sécurité' },
    title: { en: 'Reintegration Through Inclusive Recovery', fr: 'Réintégration par une Reprise Inclusive' },
    subtitle: {
      en: 'Community-centered reintegration rebuilding trust and livelihoods',
      fr: 'Réintégration centrée sur la communauté reconstruisant la confiance et les moyens de subsistance'
    },
    tagColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    hero: new URL('../assets/programs/Reintegration.jpeg', import.meta.url).href,
    overview: {
      en: 'Reintegration is not only about individuals — it is about rebuilding trust and restoring social balance. WOCO applies a community-centered and gender-inclusive reintegration model with a Dual Reintegration Approach supporting both ex-combatants and conflict-affected women, Community Acceptance Dialogues facilitated by women leaders, and Economic Reintegration Ecosystems connecting beneficiaries to cooperatives and markets.',
      fr: 'La réintégration ne concerne pas seulement les individus — elle implique la reconstruction de la confiance et la restauration de l\'équilibre social. WOCO applique un modèle de réintégration centré sur la communauté et inclusif en matière de genre.'
    },
    objectives: {
      en: [
        'Support both ex-combatants and conflict-affected women through the Dual Reintegration Approach',
        'Facilitate Community Acceptance Dialogues led by women to rebuild trust',
        'Connect reintegrated individuals to cooperatives, savings groups, and local markets',
        'Ensure reintegration is socially embedded, economically viable, and community-led'
      ],
      fr: [
        'Soutenir à la fois les ex-combattants et les femmes touchées par les conflits par l\'Approche de Réintégration Duale',
        'Faciliter des Dialogues d\'Acceptation Communautaire dirigés par les femmes pour reconstruire la confiance',
        'Connecter les individus réintégrés aux coopératives, groupes d\'épargne et marchés locaux',
        'Assurer que la réintégration est socialement enracinée, économiquement viable et dirigée par la communauté'
      ]
    },
    activities: {
      en: [
        { title: 'Dual Reintegration Approach', description: 'Simultaneous support for ex-combatants and conflict-affected women through livelihoods, psychosocial care, and economic inclusion' },
        { title: 'Community Acceptance Dialogues', description: 'Women-led facilitated dialogues to rebuild social trust, accountability, and peaceful coexistence' },
        { title: 'Economic Reintegration', description: 'Connection to cooperatives, savings groups, vocational training, and local market opportunities' },
        { title: 'Psychosocial Recovery', description: 'Trauma counseling, group therapy, and mental health support for both ex-combatants and survivors' }
      ],
      fr: [
        { title: 'Approche de Réintégration Duale', description: 'Soutien simultané aux ex-combattants et aux femmes touchées par les conflits par les moyens de subsistance et l\'inclusion économique' },
        { title: 'Dialogues d\'Acceptation Communautaire', description: 'Dialogues facilités par les femmes pour reconstruire la confiance sociale, la responsabilité et la coexistence pacifique' },
        { title: 'Réintégration Économique', description: 'Connexion aux coopératives, groupes d\'épargne, formation professionnelle et opportunités de marché local' },
        { title: 'Rétablissement Psychosocial', description: 'Conseil en traumatisme, thérapie de groupe et soutien en santé mentale pour les ex-combattants et les survivantes' }
      ]
    },
    impact: {
      en: [
        { value: '450+', label: 'Individuals Reintegrated' },
        { value: '85%', label: 'Successfully Reintegrated' },
        { value: '70%', label: 'Achieve Economic Stability' }
      ],
      fr: [
        { value: '450+', label: 'Individus Réintégrés' },
        { value: '85%', label: 'Réintégrés avec Succès' },
        { value: '70%', label: 'Atteignent la Stabilité Économique' }
      ]
    }
  },

  // ══════════════════════════════════════════
  // PROGRAM 5: RESEARCH & ADVOCACY
  // ══════════════════════════════════════════

  'program-action-research': {
    emoji: '🔬',
    category: { en: 'Research & Advocacy', fr: 'Recherche et Plaidoyer' },
    title: { en: 'Community-Based Research & Evidence Generation', fr: 'Recherche Communautaire et Génération de Preuves' },
    subtitle: {
      en: 'Women-inclusive research reflecting real priorities and experiences',
      fr: 'Recherche inclusive des femmes reflétant les priorités et expériences réelles'
    },
    tagColor: 'bg-purple-100 text-purple-700',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-600',
    hero: new URL('../assets/programs/Action.jpeg', import.meta.url).href,
    overview: {
      en: 'WOCO conducts research that reflects the realities, priorities, and experiences of women, youth, and conflict-affected communities. This includes baseline and endline studies, needs assessments, vulnerability analyses, and thematic research on peacebuilding, GBV, livelihoods, and reintegration. Women are not only subjects of research — they are actively engaged in the knowledge generation process, ensuring their realities are accurately represented and validated.',
      fr: 'WOCO mène des recherches qui reflètent les réalités, les priorités et les expériences des femmes, des jeunes et des communautés touchées par les conflits. Les femmes ne sont pas seulement sujettes de la recherche — elles sont activement engagées dans le processus de génération de connaissances.'
    },
    objectives: {
      en: [
        'Conduct baseline, endline, and thematic research on priority gender issues',
        'Engage women as active participants in data collection and analysis',
        'Ensure research accurately reflects women\'s realities and priorities',
        'Generate locally relevant evidence to inform programming and advocacy'
      ],
      fr: [
        'Mener des recherches de base, de fin et thématiques sur les problèmes de genre prioritaires',
        'Engager les femmes comme participantes actives dans la collecte et l\'analyse des données',
        'S\'assurer que la recherche reflète fidèlement les réalités et priorités des femmes',
        'Générer des preuves localement pertinentes pour informer la programmation et le plaidoyer'
      ]
    },
    activities: {
      en: [
        { title: 'Participatory Research', description: 'Community-led data collection and analysis with women as active contributors, not just subjects' },
        { title: 'Baseline & Endline Studies', description: 'Rigorous evaluations of program outcomes and community impact over time' },
        { title: 'Thematic Research', description: 'Deep-dive studies on peacebuilding, GBV, livelihoods, reintegration, and women\'s leadership' },
        { title: 'Vulnerability Analyses', description: 'Needs assessments identifying priority issues and gaps for targeted programming' }
      ],
      fr: [
        { title: 'Recherche Participative', description: 'Collecte et analyse de données dirigées par la communauté avec les femmes comme contributrices actives, pas seulement sujettes' },
        { title: 'Études de Référence et Finales', description: 'Évaluations rigoureuses des résultats des programmes et de l\'impact communautaire dans le temps' },
        { title: 'Recherche Thématique', description: 'Études approfondies sur la consolidation de la paix, la VBG, les moyens de subsistance, la réintégration et le leadership des femmes' },
        { title: 'Analyses de Vulnérabilité', description: 'Évaluations des besoins identifiant les problèmes prioritaires et les lacunes pour une programmation ciblée' }
      ]
    },
    impact: {
      en: [
        { value: '25+', label: 'Research Studies Completed' },
        { value: '100+', label: 'Community Researchers Trained' },
        { value: '15', label: 'Knowledge Products Developed' }
      ],
      fr: [
        { value: '25+', label: 'Études de Recherche Complétées' },
        { value: '100+', label: 'Chercheurs Communautaires Formés' },
        { value: '15', label: 'Produits de Connaissance Développés' }
      ]
    }
  },

  'program-policy-engagement': {
    emoji: '📜',
    category: { en: 'Research & Advocacy', fr: 'Recherche et Plaidoyer' },
    title: { en: 'Knowledge Production for Strategic Influence', fr: 'Production de Connaissances pour l\'Influence Stratégique' },
    subtitle: {
      en: 'Transforming evidence into advocacy tools for women\'s visibility',
      fr: 'Transformer les preuves en outils de plaidoyer pour la visibilité des femmes'
    },
    tagColor: 'bg-purple-100 text-purple-700',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-600',
    hero: new URL('../assets/programs/policy.jpeg', import.meta.url).href,
    overview: {
      en: 'WOCO transforms evidence into actionable knowledge that informs programming and advocacy while strengthening women\'s visibility in policy spaces. This includes policy briefs, analytical reports, documentation of lessons learned and best practices, and strategic knowledge products tailored for decision-makers. Knowledge is deliberately packaged to be used as an advocacy tool that supports women\'s voices in influencing decisions and policies.',
      fr: 'WOCO transforme les preuves en connaissances actionnables qui informent la programmation et le plaidoyer tout en renforçant la visibilité des femmes dans les espaces politiques. La connaissance est délibérément conditionnée pour être utilisée comme outil de plaidoyer.'
    },
    objectives: {
      en: [
        'Produce policy briefs, analytical reports, and strategic knowledge products',
        'Document lessons learned and best practices from program implementation',
        'Package evidence deliberately as advocacy tools for women\'s voices',
        'Share knowledge through continuous learning systems to improve effectiveness'
      ],
      fr: [
        'Produire des notes de politique, des rapports analytiques et des produits de connaissance stratégiques',
        'Documenter les leçons apprises et les meilleures pratiques de la mise en œuvre des programmes',
        'Conditionner délibérément les preuves comme outils de plaidoyer pour les voix des femmes',
        'Partager les connaissances par des systèmes d\'apprentissage continu pour améliorer l\'efficacité'
      ]
    },
    activities: {
      en: [
        { title: 'Policy Briefs & Reports', description: 'Translating research findings into accessible policy documents targeted at decision-makers' },
        { title: 'Lessons Documentation', description: 'Systematic documentation of what works, what doesn\'t, and how programs can be improved' },
        { title: 'Advocacy Knowledge Products', description: 'Infographics, case studies, and materials that amplify women\'s voices in policy spaces' },
        { title: 'Continuous Learning Systems', description: 'Internal mechanisms to capture and apply learning across programs in real time' }
      ],
      fr: [
        { title: 'Notes de Politique et Rapports', description: 'Traduction des résultats de recherche en documents politiques accessibles ciblant les décideurs' },
        { title: 'Documentation des Leçons', description: 'Documentation systématique de ce qui fonctionne, ce qui ne fonctionne pas et comment les programmes peuvent être améliorés' },
        { title: 'Produits de Connaissance pour le Plaidoyer', description: 'Infographies, études de cas et matériaux qui amplifient les voix des femmes dans les espaces politiques' },
        { title: 'Systèmes d\'Apprentissage Continu', description: 'Mécanismes internes pour capturer et appliquer les apprentissages dans tous les programmes en temps réel' }
      ]
    },
    impact: {
      en: [
        { value: '30+', label: 'Policy Briefs Published' },
        { value: '8', label: 'Policy Reforms Influenced' },
        { value: '15', label: 'CSO Partners' }
      ],
      fr: [
        { value: '30+', label: 'Notes de Politique Publiées' },
        { value: '8', label: 'Réformes Politiques Influencées' },
        { value: '15', label: 'Partenaires OSC' }
      ]
    }
  },

  'program-amplifying-voices': {
    emoji: '📢',
    category: { en: 'Research & Advocacy', fr: 'Recherche et Plaidoyer' },
    title: { en: 'Advocacy & Women in Decision-Making', fr: 'Plaidoyer et Femmes dans la Prise de Décision' },
    subtitle: {
      en: 'Positioning women as leaders and influencers in governance spaces',
      fr: 'Positionner les femmes comme leaders et influenceuses dans les espaces de gouvernance'
    },
    tagColor: 'bg-purple-100 text-purple-700',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-600',
    hero: new URL('../assets/programs/Amplifying.jpeg', import.meta.url).href,
    overview: {
      en: 'WOCO\'s advocacy goes beyond influencing policies — it focuses on ensuring women are present, heard, and influential in decision-making platforms. This includes supporting women leaders to participate in policy dialogues and governance forums, facilitating women\'s representation at local, national, and regional levels, building coalitions that amplify women\'s collective voice, and engaging institutions to create gender-responsive decision-making environments.',
      fr: 'Le plaidoyer de WOCO va au-delà de l\'influence sur les politiques — il se concentre sur la présence, l\'écoute et l\'influence des femmes dans les plateformes de prise de décision. Cela inclut le soutien aux femmes leaders pour participer aux dialogues politiques et aux forums de gouvernance.'
    },
    objectives: {
      en: [
        'Support women leaders to participate in policy dialogues and governance forums',
        'Facilitate women\'s representation at local, national, and regional platforms',
        'Build coalitions and networks that amplify women\'s collective voice',
        'Engage institutions to create inclusive, gender-responsive decision-making environments'
      ],
      fr: [
        'Soutenir les femmes leaders pour participer aux dialogues politiques et aux forums de gouvernance',
        'Faciliter la représentation des femmes aux niveaux local, national et régional',
        'Construire des coalitions et réseaux qui amplifient la voix collective des femmes',
        'Engager les institutions pour créer des environnements de prise de décision inclusifs et sensibles au genre'
      ]
    },
    activities: {
      en: [
        { title: 'Policy Dialogue Participation', description: 'Sponsoring and preparing women to meaningfully participate in policy dialogues, consultations, and forums' },
        { title: 'Women\'s Leadership Platforms', description: 'Creating and connecting spaces where women directly engage with policymakers and stakeholders' },
        { title: 'Coalition Building', description: 'Forming alliances of women\'s organizations for collective advocacy with greater influence' },
        { title: 'Institutional Engagement', description: 'Working with government, UN agencies, and CSOs to create gender-responsive decision-making spaces' }
      ],
      fr: [
        { title: 'Participation aux Dialogues Politiques', description: 'Parrainer et préparer les femmes à participer de manière significative aux dialogues politiques, consultations et forums' },
        { title: 'Plateformes de Leadership des Femmes', description: 'Créer et connecter des espaces où les femmes s\'engagent directement avec les décideurs et les parties prenantes' },
        { title: 'Construction de Coalitions', description: 'Former des alliances d\'organisations de femmes pour un plaidoyer collectif avec une plus grande influence' },
        { title: 'Engagement Institutionnel', description: 'Travailler avec le gouvernement, les agences de l\'ONU et les OSC pour créer des espaces de prise de décision sensibles au genre' }
      ]
    },
    impact: {
      en: [
        { value: '150+', label: 'Women Represented in Forums' },
        { value: '40+', label: 'Policy Forums Attended' },
        { value: '20', label: 'Advocacy Coalitions Built' }
      ],
      fr: [
        { value: '150+', label: 'Femmes Représentées dans les Forums' },
        { value: '40+', label: 'Forums Politiques Participés' },
        { value: '20', label: 'Coalitions de Plaidoyer Construites' }
      ]
    }
  },

  'program-upg-evidence': {
    emoji: '📊',
    category: { en: 'Research & Advocacy', fr: 'Recherche et Plaidoyer' },
    title: { en: 'Amplifying Women as Knowledge & Policy Actors', fr: 'Amplifier les Femmes comme Actrices de la Connaissance et des Politiques' },
    subtitle: {
      en: 'Elevating women from data subjects to recognized contributors',
      fr: 'Élever les femmes de sujets de données à contributrices reconnues'
    },
    tagColor: 'bg-purple-100 text-purple-700',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-600',
    hero: new URL('../assets/programs/Evidence.jpeg', import.meta.url).href,
    overview: {
      en: 'WOCO elevates women from being represented in data to becoming recognized contributors to knowledge, policy, and governance. This means supporting women to articulate and present evidence-based perspectives, creating platforms where women directly engage with policymakers, documenting and disseminating women-led insights and solutions, and promoting women as experts and decision-shapers — not only as beneficiaries.',
      fr: 'WOCO élève les femmes de représentées dans les données à contributrices reconnues à la connaissance, aux politiques et à la gouvernance. Cela signifie soutenir les femmes pour articuler des perspectives fondées sur des preuves et promouvoir les femmes comme expertes et façonneuses de décisions.'
    },
    objectives: {
      en: [
        'Support women to articulate and present evidence-based perspectives in public spaces',
        'Create platforms where women directly engage with policymakers as equals',
        'Document and disseminate women-led insights, solutions, and innovations',
        'Promote women as recognized experts, knowledge holders, and decision-shapers'
      ],
      fr: [
        'Soutenir les femmes pour articuler et présenter des perspectives fondées sur des preuves dans les espaces publics',
        'Créer des plateformes où les femmes s\'engagent directement avec les décideurs en tant qu\'égales',
        'Documenter et diffuser les insights, solutions et innovations menés par les femmes',
        'Promouvoir les femmes comme expertes reconnues, détentrices de connaissances et façonneuses de décisions'
      ]
    },
    activities: {
      en: [
        { title: 'Evidence Presentation Training', description: 'Capacity building for women to confidently articulate evidence-based perspectives and present at forums' },
        { title: 'Women-Expert Platforms', description: 'Creating spaces that position women as invited experts and knowledge contributors, not just participants' },
        { title: 'Women-Led Insights Documentation', description: 'Capturing and disseminating solutions, innovations, and insights generated by women themselves' },
        { title: 'Leadership Capacity Building', description: 'Strengthening women\'s confidence and skills for active engagement in governance and policy spaces' }
      ],
      fr: [
        { title: 'Formation à la Présentation de Preuves', description: 'Renforcement des capacités pour que les femmes articulent avec confiance des perspectives fondées sur des preuves et présentent dans les forums' },
        { title: 'Plateformes d\'Expertes Femmes', description: 'Créer des espaces qui positionnent les femmes comme expertes invitées et contributrices de connaissances, pas seulement participantes' },
        { title: 'Documentation des Insights Menés par les Femmes', description: 'Capturer et diffuser les solutions, innovations et insights générés par les femmes elles-mêmes' },
        { title: 'Renforcement des Capacités de Leadership', description: 'Renforcer la confiance et les compétences des femmes pour un engagement actif dans les espaces de gouvernance et de politique' }
      ]
    },
    impact: {
      en: [
        { value: '40+', label: 'Evidence Briefs Published' },
        { value: '15', label: 'Policies Influenced' },
        { value: '100K+', label: 'Lives Impacted' }
      ],
      fr: [
        { value: '40+', label: 'Notes de Preuves Publiées' },
        { value: '15', label: 'Politiques Influencées' },
        { value: '100K+', label: 'Vies Impactées' }
      ]
    }
  }
}