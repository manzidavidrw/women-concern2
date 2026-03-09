// src/data/programsData.js

export const programsData = {
  'program-basic-needs': {
    emoji: '🍽️',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Basic Needs Support', fr: 'Soutien aux Besoins de Base' },
    subtitle: {
      en: 'Addressing urgent vulnerabilities with dignity',
      fr: 'Répondre aux vulnérabilités urgentes avec dignité'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/basic.png', import.meta.url).href,
    overview: {
      en: 'Our Basic Needs Support program provides immediate assistance to women and families facing extreme poverty. We address urgent vulnerabilities through food assistance, hygiene products, and essential health care to restore dignity and create readiness for development.',
      fr: 'Notre programme de Soutien aux Besoins de Base fournit une assistance immédiate aux femmes et aux familles confrontées à l\'extrême pauvreté. Nous répondons aux vulnérabilités urgentes par une aide alimentaire, des produits d\'hygiène et des soins de santé essentiels pour restaurer la dignité et créer une préparation au développement.'
    },
    objectives: {
      en: [
        'Provide immediate food security and nutrition support to ultra-poor households',
        'Ensure access to essential hygiene products and sanitation supplies',
        'Connect families with basic health services and emergency medical care',
        'Restore dignity and stability as foundation for economic empowerment'
      ],
      fr: [
        'Fournir une sécurité alimentaire et un soutien nutritionnel immédiats aux ménages ultra-pauvres',
        'Assurer l\'accès aux produits d\'hygiène essentiels et aux fournitures sanitaires',
        'Connecter les familles aux services de santé de base et aux soins médicaux d\'urgence',
        'Restaurer la dignité et la stabilité comme fondement de l\'autonomisation économique'
      ]
    },
    activities: {
      en: [
        {
          title: 'Emergency Food Distribution',
          description: 'Monthly food parcels containing rice, beans, oil, and other staples for vulnerable families'
        },
        {
          title: 'Hygiene Kit Provision',
          description: 'Distribution of soap, sanitary products, and basic hygiene supplies'
        },
        {
          title: 'Health Care Access',
          description: 'Referrals and support for essential medical services and treatments'
        },
        {
          title: 'Dignity Restoration',
          description: 'Psychosocial support and counseling to rebuild confidence and hope'
        }
      ],
      fr: [
        {
          title: 'Distribution Alimentaire d\'Urgence',
          description: 'Colis alimentaires mensuels contenant du riz, des haricots, de l\'huile et d\'autres produits de base pour les familles vulnérables'
        },
        {
          title: 'Fourniture de Kits d\'Hygiène',
          description: 'Distribution de savon, produits sanitaires et fournitures d\'hygiène de base'
        },
        {
          title: 'Accès aux Soins de Santé',
          description: 'Orientations et soutien pour les services et traitements médicaux essentiels'
        },
        {
          title: 'Restauration de la Dignité',
          description: 'Soutien psychosocial et conseil pour reconstruire la confiance et l\'espoir'
        }
      ]
    },
    impact: {
      en: [
        { value: '3,500+', label: 'Families Supported Annually' },
        { value: '95%', label: 'Report Improved Food Security' },
        { value: '100%', label: 'Access to Hygiene Products' }
      ],
      fr: [
        { value: '3 500+', label: 'Familles Soutenues Annuellement' },
        { value: '95%', label: 'Signalent une Sécurité Alimentaire Améliorée' },
        { value: '100%', label: 'Accès aux Produits d\'Hygiène' }
      ]
    },
    stories: {
      en: [
        {
          name: 'Marie K.',
          location: 'Bukavu, South Kivu',
          quote: 'When I received the food parcel, I cried tears of joy. My children had not eaten properly in days. This support gave us hope and the strength to keep going.'
        }
      ],
      fr: [
        {
          name: 'Marie K.',
          location: 'Bukavu, Sud-Kivu',
          quote: 'Quand j\'ai reçu le colis alimentaire, j\'ai pleuré de joie. Mes enfants n\'avaient pas mangé correctement depuis des jours. Ce soutien nous a donné de l\'espoir et la force de continuer.'
        }
      ]
    }
  },

  'program-skills-training': {
    emoji: '🪡',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Skills & Livelihood Training', fr: 'Formation aux Compétences et Moyens de Subsistance' },
    subtitle: {
      en: 'Practical vocational training for sustainable livelihoods',
      fr: 'Formation professionnelle pratique pour des moyens de subsistance durables'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/skills.jpeg', import.meta.url).href,
    overview: {
      en: 'Women receive practical vocational training based on market demand — including agriculture, improved cookstove production, tailoring, and other non-farm income-generating activities. Our training combines technical skills with business management and financial literacy.',
      fr: 'Les femmes reçoivent une formation professionnelle pratique basée sur la demande du marché — incluant l\'agriculture, la production de cuisinières améliorées, la couture et d\'autres activités génératrices de revenus non agricoles. Notre formation combine compétences techniques avec gestion d\'entreprise et littératie financière.'
    },
    objectives: {
      en: [
        'Provide market-relevant vocational skills training to ultra-poor women',
        'Build business management and entrepreneurship capabilities',
        'Connect trainees with income-generating opportunities',
        'Foster confidence and economic independence'
      ],
      fr: [
        'Fournir une formation aux compétences professionnelles pertinente pour le marché aux femmes ultra-pauvres',
        'Développer les capacités de gestion d\'entreprise et d\'entrepreneuriat',
        'Connecter les stagiaires aux opportunités génératrices de revenus',
        'Favoriser la confiance et l\'indépendance économique'
      ]
    },
    activities: {
      en: [
        {
          title: 'Agricultural Training',
          description: 'Climate-smart farming, crop diversification, and sustainable practices'
        },
        {
          title: 'Artisan Skills',
          description: 'Tailoring, weaving, soap-making, and handicraft production'
        },
        {
          title: 'Cookstove Production',
          description: 'Technical training in manufacturing energy-efficient stoves'
        },
        {
          title: 'Business Development',
          description: 'Financial literacy, record-keeping, marketing, and customer service'
        }
      ],
      fr: [
        {
          title: 'Formation Agricole',
          description: 'Agriculture intelligente face au climat, diversification des cultures et pratiques durables'
        },
        {
          title: 'Compétences Artisanales',
          description: 'Couture, tissage, fabrication de savon et production artisanale'
        },
        {
          title: 'Production de Cuisinières',
          description: 'Formation technique à la fabrication de poêles économes en énergie'
        },
        {
          title: 'Développement d\'Entreprise',
          description: 'Littératie financière, tenue de registres, marketing et service client'
        }
      ]
    },
    impact: {
      en: [
        { value: '2,000+', label: 'Women Trained Annually' },
        { value: '85%', label: 'Start Income-Generating Activities' },
        { value: '70%', label: 'Achieve Financial Independence' }
      ],
      fr: [
        { value: '2 000+', label: 'Femmes Formées Annuellement' },
        { value: '85%', label: 'Démarrent des Activités Génératrices de Revenus' },
        { value: '70%', label: 'Atteignent l\'Indépendance Financière' }
      ]
    }
  },

  'program-asset-transfers': {
    emoji: '🌾',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Productive Asset Transfers', fr: 'Transferts d\'Actifs Productifs' },
    subtitle: {
      en: 'Seed capital and equipment for self-sufficiency',
      fr: 'Capital de démarrage et équipement pour l\'autosuffisance'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/productive.jpeg', import.meta.url).href,
    overview: {
      en: 'We provide seed capital or equipment to launch small businesses or agricultural activities, empowering women to be self-sufficient. Assets include livestock, agricultural inputs, business inventory, and production tools tailored to each woman\'s skills and market opportunities.',
      fr: 'Nous fournissons du capital de démarrage ou de l\'équipement pour lancer de petites entreprises ou des activités agricoles, permettant aux femmes d\'être autosuffisantes. Les actifs comprennent du bétail, des intrants agricoles, des stocks commerciaux et des outils de production adaptés aux compétences de chaque femme et aux opportunités du marché.'
    },
    objectives: {
      en: [
        'Transfer productive assets matched to women\'s skills and market demand',
        'Enable women to generate sustainable income and build wealth',
        'Reduce dependency on external aid through self-reliance',
        'Create multiplier effects through income reinvestment'
      ],
      fr: [
        'Transférer des actifs productifs adaptés aux compétences des femmes et à la demande du marché',
        'Permettre aux femmes de générer des revenus durables et de créer de la richesse',
        'Réduire la dépendance à l\'aide externe grâce à l\'autonomie',
        'Créer des effets multiplicateurs par le réinvestissement des revenus'
      ]
    },
    activities: {
      en: [
        {
          title: 'Livestock Provision',
          description: 'Goats, chickens, and rabbits for breeding and income generation'
        },
        {
          title: 'Agricultural Inputs',
          description: 'Seeds, fertilizers, and farming tools for crop production'
        },
        {
          title: 'Business Inventory',
          description: 'Start-up stock for trading activities and small retail businesses'
        },
        {
          title: 'Production Equipment',
          description: 'Sewing machines, cooking equipment, and artisan tools'
        }
      ],
      fr: [
        {
          title: 'Provision de Bétail',
          description: 'Chèvres, poulets et lapins pour l\'élevage et la génération de revenus'
        },
        {
          title: 'Intrants Agricoles',
          description: 'Semences, engrais et outils agricoles pour la production agricole'
        },
        {
          title: 'Stock Commercial',
          description: 'Stock de démarrage pour les activités commerciales et les petites entreprises de vente au détail'
        },
        {
          title: 'Équipement de Production',
          description: 'Machines à coudre, équipement de cuisine et outils artisanaux'
        }
      ]
    },
    impact: {
      en: [
        { value: '1,800+', label: 'Women Received Assets' },
        { value: '92%', label: 'Successfully Generate Income' },
        { value: '$450', label: 'Average Annual Income Increase' }
      ],
      fr: [
        { value: '1 800+', label: 'Femmes Ont Reçu des Actifs' },
        { value: '92%', label: 'Génèrent des Revenus avec Succès' },
        { value: '450$', label: 'Augmentation Moyenne Annuelle des Revenus' }
      ]
    }
  },

  'program-savings-financial': {
    emoji: '💰',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Savings & Financial Inclusion', fr: 'Épargne et Inclusion Financière' },
    subtitle: {
      en: 'Village savings groups for economic stability',
      fr: 'Groupes d\'épargne villageois pour la stabilité économique'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/savings.jpg', import.meta.url).href,
    overview: {
      en: 'Through Village Savings and Loan Associations (VSLAs), women access savings and credit services, allowing reinvestment in businesses and building financial resilience. VSLAs provide a safe space for women to save money, access loans, and develop financial management skills.',
      fr: 'Grâce aux Associations Villageoises d\'Épargne et de Crédit (AVEC), les femmes accèdent aux services d\'épargne et de crédit, permettant le réinvestissement dans les entreprises et le renforcement de la résilience financière. Les AVEC offrent un espace sûr pour que les femmes économisent de l\'argent, accèdent aux prêts et développent des compétences en gestion financière.'
    },
    objectives: {
      en: [
        'Establish and strengthen community-based savings groups',
        'Provide access to credit for women without formal banking',
        'Build financial literacy and money management skills',
        'Create safety nets and mutual support systems'
      ],
      fr: [
        'Établir et renforcer des groupes d\'épargne communautaires',
        'Fournir un accès au crédit pour les femmes sans services bancaires formels',
        'Développer la littératie financière et les compétences en gestion de l\'argent',
        'Créer des filets de sécurité et des systèmes de soutien mutuel'
      ]
    },
    activities: {
      en: [
        {
          title: 'VSLA Formation',
          description: 'Organize and train women\'s savings groups with democratic governance'
        },
        {
          title: 'Financial Literacy Training',
          description: 'Teach budgeting, saving, borrowing, and investment principles'
        },
        {
          title: 'Loan Access',
          description: 'Enable members to borrow from group funds for business or emergency needs'
        },
        {
          title: 'Linkages to Formal Banking',
          description: 'Connect successful groups with microfinance institutions and banks'
        }
      ],
      fr: [
        {
          title: 'Formation AVEC',
          description: 'Organiser et former des groupes d\'épargne de femmes avec une gouvernance démocratique'
        },
        {
          title: 'Formation en Littératie Financière',
          description: 'Enseigner les principes de budgétisation, d\'épargne, d\'emprunt et d\'investissement'
        },
        {
          title: 'Accès aux Prêts',
          description: 'Permettre aux membres d\'emprunter sur les fonds du groupe pour les besoins commerciaux ou d\'urgence'
        },
        {
          title: 'Liens avec le Secteur Bancaire Formel',
          description: 'Connecter les groupes prospères avec les institutions de microfinance et les banques'
        }
      ]
    },
    impact: {
      en: [
        { value: '150+', label: 'Active VSLAs' },
        { value: '4,500+', label: 'Women Members' },
        { value: '$280K', label: 'Total Savings Mobilized' }
      ],
      fr: [
        { value: '150+', label: 'AVEC Actives' },
        { value: '4 500+', label: 'Femmes Membres' },
        { value: '280K$', label: 'Épargne Totale Mobilisée' }
      ]
    }
  },

  'program-coaching-mentorship': {
    emoji: '🤝',
    category: { en: 'Economic Empowerment', fr: 'Autonomisation Économique' },
    title: { en: 'Coaching & Mentorship', fr: 'Coaching et Mentorat' },
    subtitle: {
      en: 'Personalized support for lasting transformation',
      fr: 'Soutien personnalisé pour une transformation durable'
    },
    tagColor: 'bg-emerald-100 text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    hero: new URL('../assets/programs/caoching.jpg', import.meta.url).href,
    overview: {
      en: 'Each woman receives personalized mentorship in goal setting, financial literacy, leadership, and confidence-building. Our coaches provide ongoing support, accountability, and encouragement throughout the graduation journey.',
      fr: 'Chaque femme reçoit un mentorat personnalisé en matière de définition d\'objectifs, de littératie financière, de leadership et de renforcement de la confiance. Nos coaches fournissent un soutien continu, de la responsabilisation et des encouragements tout au long du parcours de graduation.'
    },
    objectives: {
      en: [
        'Provide individualized coaching and emotional support',
        'Build self-confidence and decision-making capacity',
        'Support goal-setting and personal development planning',
        'Create peer support networks and role models'
      ],
      fr: [
        'Fournir un coaching individualisé et un soutien émotionnel',
        'Développer la confiance en soi et la capacité de prise de décision',
        'Soutenir la définition d\'objectifs et la planification du développement personnel',
        'Créer des réseaux de soutien par les pairs et des modèles'
      ]
    },
    activities: {
      en: [
        {
          title: 'One-on-One Coaching',
          description: 'Regular individual sessions addressing personal goals and challenges'
        },
        {
          title: 'Group Mentorship',
          description: 'Peer learning circles for shared experiences and mutual support'
        },
        {
          title: 'Life Skills Training',
          description: 'Workshops on communication, problem-solving, and leadership'
        },
        {
          title: 'Goal Tracking',
          description: 'Progress monitoring and celebration of achievements'
        }
      ],
      fr: [
        {
          title: 'Coaching Individuel',
          description: 'Sessions individuelles régulières abordant les objectifs et défis personnels'
        },
        {
          title: 'Mentorat de Groupe',
          description: 'Cercles d\'apprentissage par les pairs pour des expériences partagées et un soutien mutuel'
        },
        {
          title: 'Formation aux Compétences de Vie',
          description: 'Ateliers sur la communication, la résolution de problèmes et le leadership'
        },
        {
          title: 'Suivi des Objectifs',
          description: 'Suivi des progrès et célébration des réalisations'
        }
      ]
    },
    impact: {
      en: [
        { value: '100%', label: 'Women Receive Coaching' },
        { value: '88%', label: 'Report Increased Confidence' },
        { value: '78%', label: 'Become Peer Mentors' }
      ],
      fr: [
        { value: '100%', label: 'Femmes Reçoivent du Coaching' },
        { value: '88%', label: 'Signalent une Confiance Accrue' },
        { value: '78%', label: 'Deviennent Mentors de Pairs' }
      ]
    }
  },

  'program-school-sponsorship': {
    emoji: '🎒',
    category: { en: 'Education', fr: 'Éducation' },
    title: { en: 'School Sponsorship & Retention', fr: 'Parrainage Scolaire et Rétention' },
    subtitle: {
      en: 'Keeping girls in school and learning',
      fr: 'Garder les filles à l\'école et en apprentissage'
    },
    tagColor: 'bg-amber-100 text-amber-700',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    hero: new URL('../assets/programs/school.jpeg', import.meta.url).href,
    overview: {
      en: 'We identify girls at risk of dropping out and provide school fees, uniforms, and learning materials to ensure continuous education. Our holistic approach addresses both financial barriers and the social factors that keep girls out of school.',
      fr: 'Nous identifions les filles à risque d\'abandon scolaire et fournissons des frais de scolarité, des uniformes et du matériel d\'apprentissage pour assurer une éducation continue. Notre approche holistique aborde à la fois les barrières financières et les facteurs sociaux qui empêchent les filles d\'aller à l\'école.'
    },
    objectives: {
      en: [
        'Eliminate financial barriers to girls\' education',
        'Reduce school dropout rates among vulnerable girls',
        'Improve academic performance and learning outcomes',
        'Support transition to secondary and vocational education'
      ],
      fr: [
        'Éliminer les barrières financières à l\'éducation des filles',
        'Réduire les taux d\'abandon scolaire parmi les filles vulnérables',
        'Améliorer les performances académiques et les résultats d\'apprentissage',
        'Soutenir la transition vers l\'enseignement secondaire et professionnel'
      ]
    },
    activities: {
      en: [
        {
          title: 'School Fees Payment',
          description: 'Cover tuition, exam fees, and other school-related costs'
        },
        {
          title: 'Scholastic Materials',
          description: 'Provide uniforms, shoes, books, pens, and learning supplies'
        },
        {
          title: 'Academic Support',
          description: 'Tutorial sessions and study groups for struggling learners'
        },
        {
          title: 'Parent Engagement',
          description: 'Work with families to value and prioritize girls\' education'
        }
      ],
      fr: [
        {
          title: 'Paiement des Frais Scolaires',
          description: 'Couvrir les frais de scolarité, les frais d\'examen et autres coûts liés à l\'école'
        },
        {
          title: 'Matériel Scolaire',
          description: 'Fournir des uniformes, des chaussures, des livres, des stylos et des fournitures d\'apprentissage'
        },
        {
          title: 'Soutien Académique',
          description: 'Sessions de tutorat et groupes d\'étude pour les apprenants en difficulté'
        },
        {
          title: 'Engagement des Parents',
          description: 'Travailler avec les familles pour valoriser et prioriser l\'éducation des filles'
        }
      ]
    },
    impact: {
      en: [
        { value: '1,200+', label: 'Girls Sponsored' },
        { value: '96%', label: 'Retention Rate' },
        { value: '85%', label: 'Pass to Next Grade' }
      ],
      fr: [
        { value: '1 200+', label: 'Filles Parrainées' },
        { value: '96%', label: 'Taux de Rétention' },
        { value: '85%', label: 'Passent au Niveau Suivant' }
      ]
    }
  },

  'program-girls-leadership': {
    emoji: '🌟',
    category: { en: 'Education', fr: 'Éducation' },
    title: { en: 'Girls\' Leadership Academy', fr: 'Académie de Leadership pour Filles' },
    subtitle: {
      en: 'Inspiring dreams and building leaders',
      fr: 'Inspirer des rêves et former des leaders'
    },
    tagColor: 'bg-amber-100 text-amber-700',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    hero: new URL('../assets/programs/career.jpeg', import.meta.url).href,
    overview: {
      en: 'Our Girls Academy offers life skills, mentorship, and career development to inspire girls\' dreams and leadership pathways. We create safe spaces where girls can explore their potential, develop confidence, and envision their futures.',
      fr: 'Notre Académie pour Filles offre des compétences de vie, du mentorat et du développement de carrière pour inspirer les rêves et les parcours de leadership des filles. Nous créons des espaces sûrs où les filles peuvent explorer leur potentiel, développer leur confiance et envisager leur avenir.'
    },
    objectives: {
      en: [
        'Develop leadership skills and self-confidence in adolescent girls',
        'Provide career guidance and role models',
        'Build critical thinking and decision-making abilities',
        'Create peer support networks and mentorship relationships'
      ],
      fr: [
        'Développer les compétences en leadership et la confiance en soi chez les adolescentes',
        'Fournir une orientation professionnelle et des modèles',
        'Développer la pensée critique et les capacités de prise de décision',
        'Créer des réseaux de soutien par les pairs et des relations de mentorat'
      ]
    },
    activities: {
      en: [
        {
          title: 'Leadership Training',
          description: 'Workshops on public speaking, advocacy, and community organizing'
        },
        {
          title: 'Career Mentorship',
          description: 'Exposure to diverse career paths through role model interactions'
        },
        {
          title: 'Life Skills Camps',
          description: 'Residential camps focusing on confidence, communication, and goal-setting'
        },
        {
          title: 'Girls\' Clubs',
          description: 'School-based clubs for ongoing peer support and activities'
        }
      ],
      fr: [
        {
          title: 'Formation au Leadership',
          description: 'Ateliers sur la prise de parole en public, le plaidoyer et l\'organisation communautaire'
        },
        {
          title: 'Mentorat de Carrière',
          description: 'Exposition à divers parcours professionnels à travers des interactions avec des modèles'
        },
        {
          title: 'Camps de Compétences de Vie',
          description: 'Camps résidentiels axés sur la confiance, la communication et la définition d\'objectifs'
        },
        {
          title: 'Clubs de Filles',
          description: 'Clubs scolaires pour un soutien continu par les pairs et des activités'
        }
      ]
    },
    impact: {
      en: [
        { value: '800+', label: 'Girls in Academy' },
        { value: '92%', label: 'Report Increased Confidence' },
        { value: '65%', label: 'Pursue Higher Education' }
      ],
      fr: [
        { value: '800+', label: 'Filles dans l\'Académie' },
        { value: '92%', label: 'Signalent une Confiance Accrue' },
        { value: '65%', label: 'Poursuivent des Études Supérieures' }
      ]
    }
  },

  'program-menstrual-hygiene': {
    emoji: '🌸',
    category: { en: 'Education', fr: 'Éducation' },
    title: { en: 'Menstrual Hygiene & Malkia Pads', fr: 'Hygiène Menstruelle et Serviettes Malkia' },
    subtitle: {
      en: 'Dignity and school attendance for girls',
      fr: 'Dignité et assiduité scolaire pour les filles'
    },
    tagColor: 'bg-amber-100 text-amber-700',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    hero: new URL('../assets/programs/menstrual.jpeg', import.meta.url).href,
    overview: {
      en: 'We locally produce and distribute washable Malkia Pads to schools and girls\' clubs, ensuring dignity and school attendance. Lack of menstrual products is a major barrier to girls\' education in DRC, causing them to miss up to 5 days of school each month.',
      fr: 'Nous produisons et distribuons localement des serviettes hygiéniques lavables Malkia aux écoles et aux clubs de filles, garantissant la dignité et l\'assiduité scolaire. Le manque de produits menstruels est un obstacle majeur à l\'éducation des filles en RDC, les amenant à manquer jusqu\'à 5 jours d\'école chaque mois.'
    },
    objectives: {
      en: [
        'Eliminate period poverty as a barrier to education',
        'Produce affordable, sustainable menstrual products locally',
        'Break stigma and promote menstrual health education',
        'Create employment for women in pad production'
      ],
      fr: [
        'Éliminer la précarité menstruelle comme obstacle à l\'éducation',
        'Produire des produits menstruels abordables et durables localement',
        'Briser la stigmatisation et promouvoir l\'éducation à la santé menstruelle',
        'Créer des emplois pour les femmes dans la production de serviettes'
      ]
    },
    activities: {
      en: [
        {
          title: 'Malkia Pad Production',
          description: 'Manufacture washable, reusable menstrual pads from local materials'
        },
        {
          title: 'School Distribution',
          description: 'Provide free pads to girls in primary and secondary schools'
        },
        {
          title: 'Menstrual Health Education',
          description: 'Teach girls about menstruation, hygiene, and body literacy'
        },
        {
          title: 'Community Awareness',
          description: 'Engage parents and communities to normalize menstruation'
        }
      ],
      fr: [
        {
          title: 'Production de Serviettes Malkia',
          description: 'Fabriquer des serviettes menstruelles lavables et réutilisables à partir de matériaux locaux'
        },
        {
          title: 'Distribution Scolaire',
          description: 'Fournir des serviettes gratuites aux filles dans les écoles primaires et secondaires'
        },
        {
          title: 'Éducation à la Santé Menstruelle',
          description: 'Enseigner aux filles la menstruation, l\'hygiène et la littératie corporelle'
        },
        {
          title: 'Sensibilisation Communautaire',
          description: 'Engager les parents et les communautés pour normaliser la menstruation'
        }
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
    category: { en: 'Education', fr: 'Éducation' },
    title: { en: 'Sexual & Reproductive Health Rights', fr: 'Droits à la Santé Sexuelle et Reproductive' },
    subtitle: {
      en: 'Empowering girls with knowledge and choices',
      fr: 'Autonomiser les filles avec des connaissances et des choix'
    },
    tagColor: 'bg-amber-100 text-amber-700',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    hero: new URL('../assets/programs/sexual.jpeg', import.meta.url).href,
    overview: {
      en: 'Through peer education and school clubs, we create safe spaces where girls learn about their bodies, rights, and choices. Our comprehensive sexuality education program addresses physical health, emotional wellbeing, and gender-based violence prevention.',
      fr: 'Grâce à l\'éducation par les pairs et aux clubs scolaires, nous créons des espaces sûrs où les filles apprennent sur leur corps, leurs droits et leurs choix. Notre programme complet d\'éducation à la sexualité aborde la santé physique, le bien-être émotionnel et la prévention de la violence basée sur le genre.'
    },
    objectives: {
      en: [
        'Provide age-appropriate comprehensive sexuality education',
        'Prevent early pregnancy and sexually transmitted infections',
        'Combat gender-based violence and harmful practices',
        'Empower girls to make informed decisions about their bodies'
      ],
      fr: [
        'Fournir une éducation sexuelle complète adaptée à l\'âge',
        'Prévenir les grossesses précoces et les infections sexuellement transmissibles',
        'Combattre la violence basée sur le genre et les pratiques néfastes',
        'Autonomiser les filles pour prendre des décisions éclairées sur leur corps'
      ]
    },
    activities: {
      en: [
        {
          title: 'Peer Education',
          description: 'Train girls as peer educators on SRHR topics'
        },
        {
          title: 'School-Based Clubs',
          description: 'Safe spaces for discussion, support, and learning'
        },
        {
          title: 'Health Services Access',
          description: 'Link girls to youth-friendly health services and counseling'
        },
        {
          title: 'GBV Prevention',
          description: 'Workshops on consent, boundaries, and reporting mechanisms'
        }
      ],
      fr: [
        {
          title: 'Éducation par les Pairs',
          description: 'Former les filles comme éducatrices de pairs sur les sujets de DSSR'
        },
        {
          title: 'Clubs Scolaires',
          description: 'Espaces sûrs pour la discussion, le soutien et l\'apprentissage'
        },
        {
          title: 'Accès aux Services de Santé',
          description: 'Lier les filles aux services de santé adaptés aux jeunes et au conseil'
        },
        {
          title: 'Prévention de la VBG',
          description: 'Ateliers sur le consentement, les limites et les mécanismes de signalement'
        }
      ]
    },
    impact: {
      en: [
        { value: '5,000+', label: 'Girls Educated' },
        { value: '60%', label: 'Reduction in Teen Pregnancy' },
        { value: '95%', label: 'Know How to Access Services' }
      ],
      fr: [
        { value: '5 000+', label: 'Filles Éduquées' },
        { value: '60%', label: 'Réduction des Grossesses Adolescentes' },
        { value: '95%', label: 'Savent Comment Accéder aux Services' }
      ]
    }
  },

  'program-ruzizi': {
    emoji: '🌱',
    category: { en: 'Climate & Environment', fr: 'Climat et Environnement' },
    title: { en: 'Ruzizi Plain Greening Project', fr: 'Projet de Verdissement de la Plaine de Ruzizi' },
    subtitle: {
      en: 'Women-led land restoration and agroforestry',
      fr: 'Restauration des terres dirigée par les femmes et agroforesterie'
    },
    tagColor: 'bg-green-100 text-green-700',
    accentBg: 'bg-green-50',
    accentText: 'text-green-600',
    hero: new URL('../assets/programs/ruzizi.jpeg', import.meta.url).href,
    overview: {
      en: 'Women-led cooperatives establish nurseries, plant agroforestry trees, and adopt climate-smart farming practices to restore degraded lands in the Ruzizi Plain. This project combines environmental restoration with economic empowerment and food security.',
      fr: 'Des coopératives dirigées par des femmes établissent des pépinières, plantent des arbres agroforestiers et adoptent des pratiques agricoles intelligentes face au climat pour restaurer les terres dégradées dans la Plaine de Ruzizi. Ce projet combine restauration environnementale avec autonomisation économique et sécurité alimentaire.'
    },
    objectives: {
      en: [
        'Restore degraded agricultural lands through tree planting',
        'Improve soil fertility and water retention',
        'Increase agricultural productivity and food security',
        'Generate income through agroforestry products'
      ],
      fr: [
        'Restaurer les terres agricoles dégradées par la plantation d\'arbres',
        'Améliorer la fertilité des sols et la rétention d\'eau',
        'Augmenter la productivité agricole et la sécurité alimentaire',
        'Générer des revenus grâce aux produits agroforestiers'
      ]
    },
    activities: {
      en: [
        {
          title: 'Tree Nurseries',
          description: 'Women establish and manage tree nurseries with indigenous species'
        },
        {
          title: 'Agroforestry Training',
          description: 'Integrate trees with crops for improved yields and soil health'
        },
        {
          title: 'Climate-Smart Agriculture',
          description: 'Conservation farming, composting, and water management techniques'
        },
        {
          title: 'Value Chain Development',
          description: 'Market linkages for fruits, timber, and non-timber forest products'
        }
      ],
      fr: [
        {
          title: 'Pépinières d\'Arbres',
          description: 'Les femmes établissent et gèrent des pépinières d\'arbres avec des espèces indigènes'
        },
        {
          title: 'Formation en Agroforesterie',
          description: 'Intégrer les arbres avec les cultures pour améliorer les rendements et la santé des sols'
        },
        {
          title: 'Agriculture Intelligente Face au Climat',
          description: 'Agriculture de conservation, compostage et techniques de gestion de l\'eau'
        },
        {
          title: 'Développement de la Chaîne de Valeur',
          description: 'Liens de marché pour les fruits, le bois et les produits forestiers non ligneux'
        }
      ]
    },
    impact: {
      en: [
        { value: '200K+', label: 'Trees Planted' },
        { value: '500', label: 'Hectares Restored' },
        { value: '1,000+', label: 'Women Farmers' }
      ],
      fr: [
        { value: '200K+', label: 'Arbres Plantés' },
        { value: '500', label: 'Hectares Restaurés' },
        { value: '1 000+', label: 'Femmes Agricultrices' }
      ]
    }
  },

  'program-jiko': {
    emoji: '🔥',
    category: { en: 'Climate & Environment', fr: 'Climat et Environnement' },
    title: { en: 'Jiko Life: Family & Forest', fr: 'Jiko Life : Famille et Forêt' },
    subtitle: {
      en: 'Clean cookstoves for health and forests',
      fr: 'Cuisinières propres pour la santé et les forêts'
    },
    tagColor: 'bg-green-100 text-green-700',
    accentBg: 'bg-green-50',
    accentText: 'text-green-600',
    hero: new URL('../assets/programs/jiko.jpeg', import.meta.url).href,
    overview: {
      en: 'Jiko Life promotes improved cookstoves that reduce charcoal use by 60%, cutting indoor air pollution and deforestation while creating sustainable income for local producers. Women are trained to produce and market these stoves.',
      fr: 'Jiko Life promeut des cuisinières améliorées qui réduisent l\'utilisation de charbon de bois de 60%, réduisant la pollution de l\'air intérieur et la déforestation tout en créant des revenus durables pour les producteurs locaux. Les femmes sont formées pour produire et commercialiser ces cuisinières.'
    },
    objectives: {
      en: [
        'Reduce household charcoal consumption and deforestation',
        'Improve indoor air quality and family health',
        'Create income opportunities in cookstove production',
        'Build awareness of climate change and clean energy'
      ],
      fr: [
        'Réduire la consommation de charbon de bois des ménages et la déforestation',
        'Améliorer la qualité de l\'air intérieur et la santé familiale',
        'Créer des opportunités de revenus dans la production de cuisinières',
        'Sensibiliser au changement climatique et à l\'énergie propre'
      ]
    },
    activities: {
      en: [
        {
          title: 'Stove Production Training',
          description: 'Women learn to manufacture energy-efficient cookstoves'
        },
        {
          title: 'Household Distribution',
          description: 'Subsidized stoves provided to vulnerable families'
        },
        {
          title: 'Marketing Support',
          description: 'Business development for women producers and retailers'
        },
        {
          title: 'Environmental Education',
          description: 'Community awareness on deforestation and clean cooking'
        }
      ],
      fr: [
        {
          title: 'Formation à la Production de Cuisinières',
          description: 'Les femmes apprennent à fabriquer des cuisinières économes en énergie'
        },
        {
          title: 'Distribution aux Ménages',
          description: 'Cuisinières subventionnées fournies aux familles vulnérables'
        },
        {
          title: 'Soutien au Marketing',
          description: 'Développement d\'entreprise pour les femmes productrices et détaillantes'
        },
        {
          title: 'Éducation Environnementale',
          description: 'Sensibilisation communautaire sur la déforestation et la cuisine propre'
        }
      ]
    },
    impact: {
      en: [
        { value: '8,000+', label: 'Stoves Distributed' },
        { value: '60%', label: 'Reduction in Charcoal Use' },
        { value: '200+', label: 'Women Producers' }
      ],
      fr: [
        { value: '8 000+', label: 'Cuisinières Distribuées' },
        { value: '60%', label: 'Réduction de l\'Utilisation de Charbon' },
        { value: '200+', label: 'Femmes Productrices' }
      ]
    }
  },

  'program-peace-plot': {
    emoji: '🕊️',
    category: { en: 'Climate & Peace', fr: 'Climat et Paix' },
    title: { en: 'Peace Plot Project', fr: 'Projet de Parcelle de Paix' },
    subtitle: {
      en: 'Cultivating peace through shared farming',
      fr: 'Cultiver la paix à travers l\'agriculture partagée'
    },
    tagColor: 'bg-green-100 text-green-700',
    accentBg: 'bg-green-50',
    accentText: 'text-green-600',
    hero: new URL('../assets/programs/peace.jpeg', import.meta.url).href,
    overview: {
      en: 'Communities cultivate shared farmland, practice climate-smart farming, and build trust — sowing seeds of both peace and prosperity. Former combatants, displaced persons, and host communities work together on peace plots.',
      fr: 'Les communautés cultivent des terres agricoles partagées, pratiquent une agriculture intelligente face au climat et construisent la confiance — semant des graines de paix et de prospérité. Les anciens combattants, les personnes déplacées et les communautés d\'accueil travaillent ensemble sur des parcelles de paix.'
    },
    objectives: {
      en: [
        'Use agriculture as a platform for peacebuilding and reconciliation',
        'Generate food security and income for conflict-affected communities',
        'Build social cohesion between formerly divided groups',
        'Promote sustainable farming and environmental stewardship'
      ],
      fr: [
        'Utiliser l\'agriculture comme plateforme pour la consolidation de la paix et la réconciliation',
        'Générer la sécurité alimentaire et des revenus pour les communautés touchées par les conflits',
        'Construire la cohésion sociale entre des groupes autrefois divisés',
        'Promouvoir l\'agriculture durable et la gestion environnementale'
      ]
    },
    activities: {
      en: [
        {
          title: 'Shared Farming',
          description: 'Mixed groups work together on communal agricultural plots'
        },
        {
          title: 'Dialogue Sessions',
          description: 'Facilitated conversations on reconciliation and shared futures'
        },
        {
          title: 'Harvest Sharing',
          description: 'Equitable distribution of produce and profits among participants'
        },
        {
          title: 'Community Events',
          description: 'Celebrations and ceremonies to strengthen social bonds'
        }
      ],
      fr: [
        {
          title: 'Agriculture Partagée',
          description: 'Des groupes mixtes travaillent ensemble sur des parcelles agricoles communautaires'
        },
        {
          title: 'Sessions de Dialogue',
          description: 'Conversations facilitées sur la réconciliation et les avenirs partagés'
        },
        {
          title: 'Partage des Récoltes',
          description: 'Distribution équitable des produits et des bénéfices entre les participants'
        },
        {
          title: 'Événements Communautaires',
          description: 'Célébrations et cérémonies pour renforcer les liens sociaux'
        }
      ]
    },
    impact: {
      en: [
        { value: '25', label: 'Peace Plots Established' },
        { value: '600+', label: 'Community Members' },
        { value: '85%', label: 'Report Improved Relations' }
      ],
      fr: [
        { value: '25', label: 'Parcelles de Paix Établies' },
        { value: '600+', label: 'Membres de la Communauté' },
        { value: '85%', label: 'Signalent des Relations Améliorées' }
      ]
    }
  },

  'program-salw': {
    emoji: '🔫',
    category: { en: 'Peace & Security', fr: 'Paix et Sécurité' },
    title: { en: 'Combating Small Arms & Light Weapons', fr: 'Lutte contre les Armes Légères et de Petit Calibre' },
    subtitle: {
      en: 'Community-led disarmament advocacy',
      fr: 'Plaidoyer pour le désarmement dirigé par la communauté'
    },
    tagColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    hero: new URL('../assets/programs/Combating.jpeg', import.meta.url).href,
    overview: {
      en: 'Community awareness campaigns on small arms proliferation, advocacy with local leaders, and links to national/international disarmament frameworks. Women lead grassroots movements to reduce weapons circulation.',
      fr: 'Campagnes de sensibilisation communautaire sur la prolifération des armes légères, plaidoyer auprès des dirigeants locaux et liens avec les cadres de désarmement nationaux/internationaux. Les femmes dirigent des mouvements de base pour réduire la circulation des armes.'
    },
    objectives: {
      en: [
        'Raise awareness on the dangers of weapons proliferation',
        'Mobilize communities to support disarmament efforts',
        'Advocate for stricter weapons control policies',
        'Link local action to national and international frameworks'
      ],
      fr: [
        'Sensibiliser aux dangers de la prolifération des armes',
        'Mobiliser les communautés pour soutenir les efforts de désarmement',
        'Plaider pour des politiques de contrôle des armes plus strictes',
        'Lier l\'action locale aux cadres nationaux et internationaux'
      ]
    },
    activities: {
      en: [
        {
          title: 'Community Sensitization',
          description: 'Door-to-door campaigns and community meetings on weapons risks'
        },
        {
          title: 'Women\'s Advocacy Networks',
          description: 'Organize women to advocate for disarmament with local authorities'
        },
        {
          title: 'Voluntary Surrender',
          description: 'Support community-led voluntary weapons collection initiatives'
        },
        {
          title: 'Policy Engagement',
          description: 'Advocate for implementation of SALW control policies'
        }
      ],
      fr: [
        {
          title: 'Sensibilisation Communautaire',
          description: 'Campagnes de porte-à-porte et réunions communautaires sur les risques des armes'
        },
        {
          title: 'Réseaux de Plaidoyer de Femmes',
          description: 'Organiser les femmes pour plaider en faveur du désarmement auprès des autorités locales'
        },
        {
          title: 'Remise Volontaire',
          description: 'Soutenir les initiatives de collecte volontaire d\'armes dirigées par la communauté'
        },
        {
          title: 'Engagement Politique',
          description: 'Plaider pour la mise en œuvre des politiques de contrôle des ALPC'
        }
      ]
    },
    impact: {
      en: [
        { value: '50+', label: 'Communities Reached' },
        { value: '10,000+', label: 'People Sensitized' },
        { value: '300+', label: 'Weapons Surrendered' }
      ],
      fr: [
        { value: '50+', label: 'Communautés Touchées' },
        { value: '10 000+', label: 'Personnes Sensibilisées' },
        { value: '300+', label: 'Armes Rendues' }
      ]
    }
  },

  'program-dialogue': {
    emoji: '💬',
    category: { en: 'Peace & Security', fr: 'Paix et Sécurité' },
    title: { en: 'Community Dialogue & Mediation', fr: 'Dialogue Communautaire et Médiation' },
    subtitle: {
      en: 'Building bridges through conversation',
      fr: 'Construire des ponts à travers la conversation'
    },
    tagColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    hero: new URL('../assets/programs/Dialogue.jpeg', import.meta.url).href,
    overview: {
      en: 'Safe spaces for women and community members to discuss tensions, mediate disputes, and build mutual understanding. Our trained mediators facilitate constructive dialogue to prevent violence and promote peaceful coexistence.',
      fr: 'Des espaces sûrs pour que les femmes et les membres de la communauté discutent des tensions, médient les différends et construisent une compréhension mutuelle. Nos médiateurs formés facilitent un dialogue constructif pour prévenir la violence et promouvoir la coexistence pacifique.'
    },
    objectives: {
      en: [
        'Create safe spaces for open dialogue on community conflicts',
        'Train women as peace mediators and conflict resolvers',
        'Prevent escalation of disputes through early intervention',
        'Strengthen community cohesion and trust'
      ],
      fr: [
        'Créer des espaces sûrs pour un dialogue ouvert sur les conflits communautaires',
        'Former les femmes comme médiatrices de paix et résoluteurs de conflits',
        'Prévenir l\'escalade des différends par une intervention précoce',
        'Renforcer la cohésion et la confiance communautaires'
      ]
    },
    activities: {
      en: [
        {
          title: 'Mediation Training',
          description: 'Train women in conflict analysis, facilitation, and mediation skills'
        },
        {
          title: 'Dialogue Forums',
          description: 'Regular community meetings to address tensions and grievances'
        },
        {
          title: 'Dispute Resolution',
          description: 'Mediate land conflicts, family disputes, and community tensions'
        },
        {
          title: 'Peace Committees',
          description: 'Establish local peace committees with women\'s participation'
        }
      ],
      fr: [
        {
          title: 'Formation en Médiation',
          description: 'Former les femmes à l\'analyse des conflits, à la facilitation et aux compétences de médiation'
        },
        {
          title: 'Forums de Dialogue',
          description: 'Réunions communautaires régulières pour aborder les tensions et les griefs'
        },
        {
          title: 'Résolution de Différends',
          description: 'Médier les conflits fonciers, les différends familiaux et les tensions communautaires'
        },
        {
          title: 'Comités de Paix',
          description: 'Établir des comités de paix locaux avec la participation des femmes'
        }
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

  'program-reintegration': {
    emoji: '🔄',
    category: { en: 'Peace & Security', fr: 'Paix et Sécurité' },
    title: { en: 'Reintegration of Ex-Combatants', fr: 'Réintégration des Ex-Combattants' },
    subtitle: {
      en: 'From weapons to livelihoods',
      fr: 'Des armes aux moyens de subsistance'
    },
    tagColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    hero: new URL('../assets/programs/Reintegration.jpeg', import.meta.url).href,
    overview: {
      en: 'Using the UPG model, we support former combatants with psychosocial counseling, livelihood support, and skills training to facilitate peaceful reintegration into communities. Special focus on women ex-combatants and wives of former fighters.',
      fr: 'En utilisant le modèle UPG, nous soutenons les anciens combattants avec des conseils psychosociaux, un soutien aux moyens de subsistance et une formation aux compétences pour faciliter la réintégration pacifique dans les communautés. Focus spécial sur les femmes ex-combattantes et les épouses d\'anciens combattants.'
    },
    objectives: {
      en: [
        'Facilitate successful reintegration of ex-combatants',
        'Provide trauma healing and psychosocial support',
        'Build sustainable livelihoods and economic independence',
        'Promote community acceptance and reconciliation'
      ],
      fr: [
        'Faciliter la réintégration réussie des ex-combattants',
        'Fournir un soutien psychosocial et de guérison des traumatismes',
        'Construire des moyens de subsistance durables et l\'indépendance économique',
        'Promouvoir l\'acceptation communautaire et la réconciliation'
      ]
    },
    activities: {
      en: [
        {
          title: 'Trauma Counseling',
          description: 'Individual and group therapy for PTSD and conflict-related trauma'
        },
        {
          title: 'Vocational Training',
          description: 'Skills development in agriculture, trades, and entrepreneurship'
        },
        {
          title: 'Asset Provision',
          description: 'Startup capital and tools for income-generating activities'
        },
        {
          title: 'Community Sensitization',
          description: 'Prepare communities to welcome and support returnees'
        }
      ],
      fr: [
        {
          title: 'Conseil en Traumatisme',
          description: 'Thérapie individuelle et de groupe pour le TSPT et les traumatismes liés aux conflits'
        },
        {
          title: 'Formation Professionnelle',
          description: 'Développement de compétences en agriculture, métiers et entrepreneuriat'
        },
        {
          title: 'Provision d\'Actifs',
          description: 'Capital de démarrage et outils pour les activités génératrices de revenus'
        },
        {
          title: 'Sensibilisation Communautaire',
          description: 'Préparer les communautés à accueillir et soutenir les personnes de retour'
        }
      ]
    },
    impact: {
      en: [
        { value: '450+', label: 'Ex-Combatants Supported' },
        { value: '85%', label: 'Successfully Reintegrated' },
        { value: '70%', label: 'Achieve Economic Stability' }
      ],
      fr: [
        { value: '450+', label: 'Ex-Combattants Soutenus' },
        { value: '85%', label: 'Réintégrés avec Succès' },
        { value: '70%', label: 'Atteignent la Stabilité Économique' }
      ]
    }
  },

  'program-women-peace-leadership': {
    emoji: '👩‍⚖️',
    category: { en: 'Peace & Security', fr: 'Paix et Sécurité' },
    title: { en: 'Women\'s Leadership in Peacebuilding', fr: 'Leadership des Femmes dans la Consolidation de la Paix' },
    subtitle: {
      en: 'Women at the peace table',
      fr: 'Les femmes à la table de la paix'
    },
    tagColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    hero: new URL('../assets/programs/Leadership.jpeg', import.meta.url).href,
    overview: {
      en: 'Women trained in conflict transformation, leadership, and local governance to influence decisions and promote justice and inclusion. We support women\'s participation in peace processes at all levels.',
      fr: 'Femmes formées à la transformation des conflits, au leadership et à la gouvernance locale pour influencer les décisions et promouvoir la justice et l\'inclusion. Nous soutenons la participation des femmes aux processus de paix à tous les niveaux.'
    },
    objectives: {
      en: [
        'Increase women\'s participation in peace processes and governance',
        'Build women\'s capacity as peace leaders and advocates',
        'Amplify women\'s voices in decision-making spaces',
        'Promote gender-inclusive peace and security policies'
      ],
      fr: [
        'Augmenter la participation des femmes aux processus de paix et à la gouvernance',
        'Renforcer la capacité des femmes comme leaders de paix et défenseurs',
        'Amplifier les voix des femmes dans les espaces de prise de décision',
        'Promouvoir des politiques de paix et de sécurité inclusives sur le genre'
      ]
    },
    activities: {
      en: [
        {
          title: 'Leadership Training',
          description: 'Develop skills in advocacy, negotiation, and public speaking'
        },
        {
          title: 'Political Participation',
          description: 'Support women candidates for local governance positions'
        },
        {
          title: 'Peace Networks',
          description: 'Build coalitions of women peace advocates across territories'
        },
        {
          title: 'Policy Advocacy',
          description: 'Campaign for implementation of UNSCR 1325 and gender policies'
        }
      ],
      fr: [
        {
          title: 'Formation au Leadership',
          description: 'Développer des compétences en plaidoyer, négociation et prise de parole en public'
        },
        {
          title: 'Participation Politique',
          description: 'Soutenir les candidates femmes aux postes de gouvernance locale'
        },
        {
          title: 'Réseaux de Paix',
          description: 'Construire des coalitions de femmes défenseures de la paix à travers les territoires'
        },
        {
          title: 'Plaidoyer Politique',
          description: 'Campagne pour la mise en œuvre de la RCSNU 1325 et des politiques de genre'
        }
      ]
    },
    impact: {
      en: [
        { value: '300+', label: 'Women Leaders Trained' },
        { value: '45', label: 'Elected to Local Councils' },
        { value: '20', label: 'Peace Coalitions Formed' }
      ],
      fr: [
        { value: '300+', label: 'Femmes Leaders Formées' },
        { value: '45', label: 'Élues aux Conseils Locaux' },
        { value: '20', label: 'Coalitions de Paix Formées' }
      ]
    }
  },

  'program-action-research': {
    emoji: '🔍',
    category: { en: 'Research & Learning', fr: 'Recherche et Apprentissage' },
    title: { en: 'Action Research & Knowledge Generation', fr: 'Recherche-Action et Génération de Connaissances' },
    subtitle: {
      en: 'Evidence for grassroots advocacy',
      fr: 'Preuves pour le plaidoyer de base'
    },
    tagColor: 'bg-purple-100 text-purple-700',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-600',
    hero: new URL('../assets/programs/Action.jpeg', import.meta.url).href,
    overview: {
      en: 'Participatory field research to identify gender issues, track program impact, and develop localized toolkits, manuals, and reports. Our research is led by and for communities to inform advocacy and programming.',
      fr: 'Recherche participative sur le terrain pour identifier les problèmes de genre, suivre l\'impact des programmes et développer des boîtes à outils, manuels et rapports localisés. Notre recherche est dirigée par et pour les communautés pour informer le plaidoyer et la programmation.'
    },
    objectives: {
      en: [
        'Generate locally-relevant evidence on gender and development',
        'Document program impact and best practices',
        'Develop tools and resources for practitioners',
        'Build research capacity in grassroots organizations'
      ],
      fr: [
        'Générer des preuves localement pertinentes sur le genre et le développement',
        'Documenter l\'impact des programmes et les meilleures pratiques',
        'Développer des outils et des ressources pour les praticiens',
        'Renforcer la capacité de recherche dans les organisations de base'
      ]
    },
    activities: {
      en: [
        {
          title: 'Participatory Research',
          description: 'Community-led data collection and analysis on priority issues'
        },
        {
          title: 'Impact Evaluation',
          description: 'Assess outcomes of UPG and other programs using mixed methods'
        },
        {
          title: 'Knowledge Products',
          description: 'Develop toolkits, case studies, and research reports'
        },
        {
          title: 'Capacity Building',
          description: 'Train community researchers and data collectors'
        }
      ],
      fr: [
        {
          title: 'Recherche Participative',
          description: 'Collecte et analyse de données dirigées par la communauté sur les problèmes prioritaires'
        },
        {
          title: 'Évaluation d\'Impact',
          description: 'Évaluer les résultats de l\'UPG et d\'autres programmes en utilisant des méthodes mixtes'
        },
        {
          title: 'Produits de Connaissance',
          description: 'Développer des boîtes à outils, des études de cas et des rapports de recherche'
        },
        {
          title: 'Renforcement des Capacités',
          description: 'Former les chercheurs communautaires et les collecteurs de données'
        }
      ]
    },
    impact: {
      en: [
        { value: '25+', label: 'Research Studies Completed' },
        { value: '15', label: 'Toolkits Developed' },
        { value: '100+', label: 'Community Researchers Trained' }
      ],
      fr: [
        { value: '25+', label: 'Études de Recherche Complétées' },
        { value: '15', label: 'Boîtes à Outils Développées' },
        { value: '100+', label: 'Chercheurs Communautaires Formés' }
      ]
    }
  },

  'program-policy-engagement': {
    emoji: '📜',
    category: { en: 'Research & Learning', fr: 'Recherche et Apprentissage' },
    title: { en: 'Policy Engagement & Legal Reform', fr: 'Engagement Politique et Réforme Juridique' },
    subtitle: {
      en: 'Laws that protect and empower',
      fr: 'Des lois qui protègent et autonomisent'
    },
    tagColor: 'bg-purple-100 text-purple-700',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-600',
    hero: new URL('../assets/programs/policy.jpeg', import.meta.url).href,
    overview: {
      en: 'Advocate for laws and policies that protect women\'s rights and ensure accountability on gender commitments in post-conflict recovery. We bridge grassroots experiences with policy advocacy.',
      fr: 'Plaider pour des lois et des politiques qui protègent les droits des femmes et assurent la responsabilisation sur les engagements de genre dans la reprise post-conflit. Nous relions les expériences de base au plaidoyer politique.'
    },
    objectives: {
      en: [
        'Influence gender-responsive policies at local and national levels',
        'Advocate for implementation of existing gender laws',
        'Monitor government commitments on women\'s rights',
        'Strengthen legal frameworks for women\'s protection'
      ],
      fr: [
        'Influencer les politiques sensibles au genre aux niveaux local et national',
        'Plaider pour la mise en œuvre des lois sur le genre existantes',
        'Surveiller les engagements gouvernementaux sur les droits des femmes',
        'Renforcer les cadres juridiques pour la protection des femmes'
      ]
    },
    activities: {
      en: [
        {
          title: 'Policy Analysis',
          description: 'Review and critique existing laws from a gender perspective'
        },
        {
          title: 'Legislative Advocacy',
          description: 'Campaign for pro-women legal reforms and policies'
        },
        {
          title: 'Monitoring & Accountability',
          description: 'Track implementation of gender commitments and budgets'
        },
        {
          title: 'Coalition Building',
          description: 'Form alliances with CSOs for collective advocacy'
        }
      ],
      fr: [
        {
          title: 'Analyse Politique',
          description: 'Examiner et critiquer les lois existantes d\'une perspective de genre'
        },
        {
          title: 'Plaidoyer Législatif',
          description: 'Campagne pour des réformes juridiques et des politiques pro-femmes'
        },
        {
          title: 'Suivi et Responsabilisation',
          description: 'Suivre la mise en œuvre des engagements et budgets de genre'
        },
        {
          title: 'Construction de Coalitions',
          description: 'Former des alliances avec les OSC pour un plaidoyer collectif'
        }
      ]
    },
    impact: {
      en: [
        { value: '8', label: 'Policy Reforms Influenced' },
        { value: '30+', label: 'Policy Briefs Published' },
        { value: '15', label: 'CSO Partners' }
      ],
      fr: [
        { value: '8', label: 'Réformes Politiques Influencées' },
        { value: '30+', label: 'Notes Politiques Publiées' },
        { value: '15', label: 'Partenaires OSC' }
      ]
    }
  },

  'program-amplifying-voices': {
    emoji: '📢',
    category: { en: 'Research & Learning', fr: 'Recherche et Apprentissage' },
    title: { en: 'Amplifying Rural Women\'s Voices', fr: 'Amplifier les Voix des Femmes Rurales' },
    subtitle: {
      en: 'From margins to center stage',
      fr: 'Des marges au devant de la scène'
    },
    tagColor: 'bg-purple-100 text-purple-700',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-600',
    hero: new URL('../assets/programs/Amplifying.jpeg', import.meta.url).href,
    overview: {
      en: 'Facilitate participation of women from remote, conflict-affected areas in national and international forums. We ensure that the voices and priorities of marginalized women shape development and peace agendas.',
      fr: 'Faciliter la participation des femmes des zones reculées et touchées par les conflits dans les forums nationaux et internationaux. Nous veillons à ce que les voix et les priorités des femmes marginalisées façonnent les agendas de développement et de paix.'
    },
    objectives: {
      en: [
        'Enable grassroots women to participate in high-level forums',
        'Document and share women\'s experiences and priorities',
        'Influence global and national development agendas',
        'Build women\'s confidence as public speakers and advocates'
      ],
      fr: [
        'Permettre aux femmes de base de participer aux forums de haut niveau',
        'Documenter et partager les expériences et priorités des femmes',
        'Influencer les agendas de développement mondiaux et nationaux',
        'Renforcer la confiance des femmes comme oratrices publiques et défenseures'
      ]
    },
    activities: {
      en: [
        {
          title: 'Forum Participation',
          description: 'Sponsor women to attend national and international conferences'
        },
        {
          title: 'Storytelling Training',
          description: 'Help women articulate and share their experiences powerfully'
        },
        {
          title: 'Media Engagement',
          description: 'Connect women with journalists and documentary filmmakers'
        },
        {
          title: 'Platform Building',
          description: 'Create spaces for women to present their ideas and solutions'
        }
      ],
      fr: [
        {
          title: 'Participation aux Forums',
          description: 'Parrainer les femmes pour qu\'elles assistent aux conférences nationales et internationales'
        },
        {
          title: 'Formation à la Narration',
          description: 'Aider les femmes à articuler et partager leurs expériences avec force'
        },
        {
          title: 'Engagement Médiatique',
          description: 'Connecter les femmes avec les journalistes et les cinéastes documentaires'
        },
        {
          title: 'Construction de Plateformes',
          description: 'Créer des espaces pour que les femmes présentent leurs idées et solutions'
        }
      ]
    },
    impact: {
      en: [
        { value: '150+', label: 'Women Represented' },
        { value: '40+', label: 'Forums Attended' },
        { value: '20', label: 'Media Features' }
      ],
      fr: [
        { value: '150+', label: 'Femmes Représentées' },
        { value: '40+', label: 'Forums Participés' },
        { value: '20', label: 'Reportages Médiatiques' }
      ]
    }
  },

  'program-upg-evidence': {
    emoji: '📊',
    category: { en: 'Research & Learning', fr: 'Recherche et Apprentissage' },
    title: { en: 'Evidence for Scaling UPG', fr: 'Preuves pour l\'Extension de l\'UPG' },
    subtitle: {
      en: 'Documenting what works for poverty graduation',
      fr: 'Documenter ce qui fonctionne pour la graduation de la pauvreté'
    },
    tagColor: 'bg-purple-100 text-purple-700',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-600',
    hero: new URL('../assets/programs/Evidence.jpeg', import.meta.url).href,
    overview: {
      en: 'Research and document the impact of the UPG model and advocate for its adoption by governments and community planners. Our evidence demonstrates that graduation approaches work in conflict settings.',
      fr: 'Rechercher et documenter l\'impact du modèle UPG et plaider pour son adoption par les gouvernements et les planificateurs communautaires. Nos preuves démontrent que les approches de graduation fonctionnent dans les contextes de conflit.'
    },
    objectives: {
      en: [
        'Generate rigorous evidence on UPG effectiveness in DRC',
        'Document adaptations needed for conflict-affected contexts',
        'Advocate for government adoption of graduation approaches',
        'Support other organizations to implement UPG with quality'
      ],
      fr: [
        'Générer des preuves rigoureuses sur l\'efficacité de l\'UPG en RDC',
        'Documenter les adaptations nécessaires pour les contextes touchés par les conflits',
        'Plaider pour l\'adoption gouvernementale des approches de graduation',
        'Soutenir d\'autres organisations pour mettre en œuvre l\'UPG avec qualité'
      ]
    },
    activities: {
      en: [
        {
          title: 'Impact Studies',
          description: 'Rigorous evaluations of UPG outcomes using control groups'
        },
        {
          title: 'Cost-Benefit Analysis',
          description: 'Document return on investment for poverty graduation programs'
        },
        {
          title: 'Case Documentation',
          description: 'Capture success stories and lessons learned'
        },
        {
          title: 'Technical Assistance',
          description: 'Support other NGOs and governments to implement UPG'
        }
      ],
      fr: [
        {
          title: 'Études d\'Impact',
          description: 'Évaluations rigoureuses des résultats de l\'UPG en utilisant des groupes témoins'
        },
        {
          title: 'Analyse Coût-Bénéfice',
          description: 'Documenter le retour sur investissement pour les programmes de graduation de la pauvreté'
        },
        {
          title: 'Documentation de Cas',
          description: 'Capturer les réussites et les leçons apprises'
        },
        {
          title: 'Assistance Technique',
          description: 'Soutenir d\'autres ONG et gouvernements pour mettre en œuvre l\'UPG'
        }
      ]
    },
    impact: {
      en: [
        { value: '5', label: 'Impact Studies Published' },
        { value: '78%', label: 'Graduate from Poverty' },
        { value: '10+', label: 'Organizations Adopting UPG' }
      ],
      fr: [
        { value: '5', label: 'Études d\'Impact Publiées' },
        { value: '78%', label: 'Sortent de la Pauvreté' },
        { value: '10+', label: 'Organisations Adoptant l\'UPG' }
      ]
    }
  },

  'program-leading-campaigns': {
    emoji: '📣',
    category: { en: 'Advocacy', fr: 'Plaidoyer' },
    title: { en: 'Leading Grassroots Campaigns', fr: 'Diriger des Campagnes de Base' },
    subtitle: {
      en: 'Women-led movements for change',
      fr: 'Mouvements dirigés par les femmes pour le changement'
    },
    tagColor: 'bg-yellow-100 text-yellow-700',
    accentBg: 'bg-yellow-50',
    accentText: 'text-yellow-600',
    hero: new URL('../assets/programs/Leading.jpeg', import.meta.url).href,
    overview: {
      en: 'Women and girls spearhead campaigns on gender justice, access to services, and legal rights within their communities. We support grassroots women to organize, strategize, and lead advocacy initiatives.',
      fr: 'Les femmes et les filles dirigent des campagnes sur la justice de genre, l\'accès aux services et les droits légaux au sein de leurs communautés. Nous soutenons les femmes de base pour qu\'elles organisent, stratégisent et dirigent des initiatives de plaidoyer.'
    },
    objectives: {
      en: [
        'Build women\'s capacity to organize and lead campaigns',
        'Address community-prioritized issues through collective action',
        'Achieve concrete improvements in services and rights',
        'Create sustainable advocacy movements'
      ],
      fr: [
        'Renforcer la capacité des femmes à organiser et diriger des campagnes',
        'Aborder les problèmes priorisés par la communauté par l\'action collective',
        'Obtenir des améliorations concrètes dans les services et les droits',
        'Créer des mouvements de plaidoyer durables'
      ]
    },
    activities: {
      en: [
        {
          title: 'Campaign Planning',
          description: 'Support women to identify issues and design advocacy strategies'
        },
        {
          title: 'Community Mobilization',
          description: 'Organize petitions, marches, and public awareness activities'
        },
        {
          title: 'Social Media Advocacy',
          description: 'Amplify campaigns through digital platforms and media'
        },
        {
          title: 'Victory Celebration',
          description: 'Document and celebrate campaign successes to inspire others'
        }
      ],
      fr: [
        {
          title: 'Planification de Campagne',
          description: 'Soutenir les femmes pour identifier les problèmes et concevoir des stratégies de plaidoyer'
        },
        {
          title: 'Mobilisation Communautaire',
          description: 'Organiser des pétitions, des marches et des activités de sensibilisation publique'
        },
        {
          title: 'Plaidoyer sur les Médias Sociaux',
          description: 'Amplifier les campagnes à travers les plateformes numériques et les médias'
        },
        {
          title: 'Célébration de la Victoire',
          description: 'Documenter et célébrer les succès de campagne pour inspirer les autres'
        }
      ]
    },
    impact: {
      en: [
        { value: '50+', label: 'Campaigns Led' },
        { value: '35', label: 'Policy Changes Achieved' },
        { value: '10,000+', label: 'Women Mobilized' }
      ],
      fr: [
        { value: '50+', label: 'Campagnes Dirigées' },
        { value: '35', label: 'Changements Politiques Obtenus' },
        { value: '10 000+', label: 'Femmes Mobilisées' }
      ]
    }
  },

  'program-duty-bearers': {
    emoji: '🏛️',
    category: { en: 'Advocacy', fr: 'Plaidoyer' },
    title: { en: 'Engaging Duty-Bearers', fr: 'Engager les Détenteurs d\'Obligations' },
    subtitle: {
      en: 'Accountability from those in power',
      fr: 'Responsabilité de ceux au pouvoir'
    },
    tagColor: 'bg-yellow-100 text-yellow-700',
    accentBg: 'bg-yellow-50',
    accentText: 'text-yellow-600',
    hero: new URL('../assets/programs/Engaging.jpeg', import.meta.url).href,
    overview: {
      en: 'Engage with local authorities, customary leaders, and policy-makers to advocate for policies that uphold women\'s rights. We facilitate direct dialogue between women and decision-makers.',
      fr: 'Engager avec les autorités locales, les chefs coutumiers et les décideurs pour plaider en faveur de politiques qui défendent les droits des femmes. Nous facilitons le dialogue direct entre les femmes et les décideurs.'
    },
    objectives: {
      en: [
        'Hold duty-bearers accountable to gender commitments',
        'Create channels for women to access decision-makers',
        'Influence budget allocations for women\'s priorities',
        'Monitor service delivery and quality'
      ],
      fr: [
        'Tenir les détenteurs d\'obligations responsables des engagements de genre',
        'Créer des canaux pour que les femmes accèdent aux décideurs',
        'Influencer les allocations budgétaires pour les priorités des femmes',
        'Surveiller la prestation et la qualité des services'
      ]
    },
    activities: {
      en: [
        {
          title: 'Public Dialogues',
          description: 'Organize town halls where women engage directly with officials'
        },
        {
          title: 'Budget Advocacy',
          description: 'Campaign for gender-responsive budgeting and resource allocation'
        },
        {
          title: 'Service Monitoring',
          description: 'Track quality of health, education, and justice services'
        },
        {
          title: 'Scorecard Development',
          description: 'Create community scorecards to assess government performance'
        }
      ],
      fr: [
        {
          title: 'Dialogues Publics',
          description: 'Organiser des assemblées publiques où les femmes s\'engagent directement avec les officiels'
        },
        {
          title: 'Plaidoyer Budgétaire',
          description: 'Campagne pour une budgétisation sensible au genre et une allocation de ressources'
        },
        {
          title: 'Suivi des Services',
          description: 'Suivre la qualité des services de santé, d\'éducation et de justice'
        },
        {
          title: 'Développement de Fiches d\'Évaluation',
          description: 'Créer des fiches d\'évaluation communautaires pour évaluer la performance gouvernementale'
        }
      ]
    },
    impact: {
      en: [
        { value: '80+', label: 'Dialogues Held' },
        { value: '$2M', label: 'Redirected to Women\'s Programs' },
        { value: '25', label: 'Service Improvements' }
      ],
      fr: [
        { value: '80+', label: 'Dialogues Tenus' },
        { value: '2M$', label: 'Redirigés vers les Programmes pour Femmes' },
        { value: '25', label: 'Améliorations de Services' }
      ]
    }
  },

  'program-evidence-change': {
    emoji: '📈',
    category: { en: 'Advocacy', fr: 'Plaidoyer' },
    title: { en: 'Using Evidence for Change', fr: 'Utiliser les Preuves pour le Changement' },
    subtitle: {
      en: 'Data-driven advocacy that works',
      fr: 'Plaidoyer basé sur les données qui fonctionne'
    },
    tagColor: 'bg-yellow-100 text-yellow-700',
    accentBg: 'bg-yellow-50',
    accentText: 'text-yellow-600',
    hero: new URL('../assets/programs/Using.jpeg', import.meta.url).href,
    overview: {
      en: 'Harness evidence from lived experiences to influence decision-making and create tangible improvements in policies and social norms. We translate research into actionable advocacy.',
      fr: 'Exploiter les preuves des expériences vécues pour influencer la prise de décision et créer des améliorations tangibles dans les politiques et les normes sociales. Nous traduisons la recherche en plaidoyer actionnable.'
    },
    objectives: {
      en: [
        'Use research findings to inform advocacy strategies',
        'Present compelling evidence to policy-makers',
        'Document policy wins and replicate successful models',
        'Build data literacy among grassroots advocates'
      ],
      fr: [
        'Utiliser les résultats de recherche pour informer les stratégies de plaidoyer',
        'Présenter des preuves convaincantes aux décideurs',
        'Documenter les victoires politiques et répliquer les modèles réussis',
        'Développer la littératie des données parmi les défenseurs de base'
      ]
    },
    activities: {
      en: [
        {
          title: 'Evidence Translation',
          description: 'Convert research into policy briefs and advocacy materials'
        },
        {
          title: 'Data Visualization',
          description: 'Create infographics and presentations for decision-makers'
        },
        {
          title: 'Testimonies & Stories',
          description: 'Combine data with powerful personal narratives'
        },
        {
          title: 'Impact Tracking',
          description: 'Monitor how evidence leads to policy and practice changes'
        }
      ],
      fr: [
        {
          title: 'Traduction de Preuves',
          description: 'Convertir la recherche en notes politiques et matériaux de plaidoyer'
        },
        {
          title: 'Visualisation de Données',
          description: 'Créer des infographies et des présentations pour les décideurs'
        },
        {
          title: 'Témoignages et Histoires',
          description: 'Combiner les données avec des récits personnels puissants'
        },
        {
          title: 'Suivi d\'Impact',
          description: 'Surveiller comment les preuves conduisent aux changements de politique et de pratique'
        }
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