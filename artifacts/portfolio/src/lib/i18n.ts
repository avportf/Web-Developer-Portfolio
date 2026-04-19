export type LangCode = 'en' | 'es' | 'fr' | 'de' | 'ja';

export interface Translation {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    manageLanguages: string;
  };
  hero: {
    greeting: string;
    role: string;
    bio: string;
    ctaWork: string;
    ctaContact: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    devops: string;
  };
  projects: {
    title: string;
    featured: string;
    descriptions: [string, string, string];
  };
  experience: {
    title: string;
    roles: [string, string, string];
    duties: [string[], string[], string[]];
  };
  contact: {
    tagline: string;
    title: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successDesc: string;
  };
  languages: {
    pageTitle: string;
    pageDesc: string;
    back: string;
    enabledLabel: string;
    currentLabel: string;
    tip: string;
  };
}

export const LANGUAGES: { code: LangCode; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English',  nativeName: 'English',    flag: '🇬🇧' },
  { code: 'es', name: 'Spanish',  nativeName: 'Español',    flag: '🇪🇸' },
  { code: 'fr', name: 'French',   nativeName: 'Français',   flag: '🇫🇷' },
  { code: 'de', name: 'German',   nativeName: 'Deutsch',    flag: '🇩🇪' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語',       flag: '🇯🇵' },
];

export const translations: Record<LangCode, Translation> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      manageLanguages: 'Manage Languages',
    },
    hero: {
      greeting: 'Hi, my name is',
      role: 'I build things for the web.',
      bio: "I'm a full-stack engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
      ctaWork: 'Check out my work!',
      ctaContact: 'Get in touch',
    },
    about: {
      title: 'About Me',
      p1: "Hello! My name is Alex and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about design and structure!",
      p2: "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.",
      p3: "I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.",
    },
    skills: {
      title: 'Technical Arsenal',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps & Tools',
    },
    projects: {
      title: "Some Things I've Built",
      featured: 'Featured Project',
      descriptions: [
        'A comprehensive analytics dashboard for tracking user engagement and revenue metrics. Features real-time data visualization, customizable widgets, and dark/light mode support.',
        'A headless e-commerce storefront built for high performance and conversion. Includes a custom cart implementation, Stripe integration, and Algolia search.',
        'A cross-platform mobile application for personal finance management. Syncs securely with bank accounts using Plaid API and provides ML-driven spending insights.',
      ],
    },
    experience: {
      title: "Where I've Worked",
      roles: ['Senior Engineer', 'Studio Developer', 'Software Engineer Co-op'],
      duties: [
        [
          'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, and more.',
          'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements.',
          'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.',
          'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
        ],
        [
          "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout's inaugural Fall Studio.",
          "Worked closely with designers and management team to develop, document, and manage the conference's marketing website using Jekyll, Sass, and JavaScript.",
          'Interfaced with clients on a weekly basis, providing technological expertise and guidance on product development.',
        ],
        [
          'Developed and shipped highly interactive web applications for Apple Music using Ember.js.',
          'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs.',
          "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser.",
        ],
      ],
    },
    contact: {
      tagline: "What's Next?",
      title: 'Get In Touch',
      description: "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      messagePlaceholder: "Hello, I'd like to talk about...",
      submit: 'Say Hello',
      sending: 'Sending...',
      successTitle: 'Message sent successfully!',
      successDesc: "Thanks for reaching out. I'll get back to you soon.",
    },
    languages: {
      pageTitle: 'Language Settings',
      pageDesc: 'Enable or disable languages available in the portfolio switcher.',
      back: 'Back to Portfolio',
      enabledLabel: 'Enabled',
      currentLabel: 'Active',
      tip: 'At least one language must remain enabled.',
    },
  },

  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
      manageLanguages: 'Gestionar idiomas',
    },
    hero: {
      greeting: 'Hola, mi nombre es',
      role: 'Construyo cosas para la web.',
      bio: 'Soy un ingeniero full-stack especializado en crear (y ocasionalmente diseñar) experiencias digitales excepcionales. Actualmente me enfoco en productos accesibles y centrados en el usuario.',
      ctaWork: '¡Mira mi trabajo!',
      ctaContact: 'Contáctame',
    },
    about: {
      title: 'Sobre mí',
      p1: '¡Hola! Mi nombre es Alex y disfruto crear cosas que viven en internet. Mi interés en el desarrollo web comenzó en 2012 cuando decidí editar temas de Tumblr — ¡resulta que hackear HTML y CSS me enseñó mucho sobre diseño y estructura!',
      p2: 'Avanzando hasta hoy, he tenido el privilegio de trabajar en una agencia de publicidad, una startup, una gran corporación y un estudio de diseño universitario. Mi enfoque principal es crear productos e experiencias digitales accesivas e inclusivas.',
      p3: 'También lancé recientemente un curso que cubre todo lo necesario para construir una app web con la API de Spotify usando Node y React.',
    },
    skills: {
      title: 'Arsenal Técnico',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps y Herramientas',
    },
    projects: {
      title: 'Algunas cosas que construí',
      featured: 'Proyecto Destacado',
      descriptions: [
        'Un panel de analíticas integral para rastrear el engagement de usuarios y métricas de ingresos. Incluye visualización de datos en tiempo real y soporte para modo oscuro/claro.',
        'Una tienda e-commerce headless construida para alto rendimiento y conversión. Incluye carrito personalizado, integración con Stripe y búsqueda Algolia.',
        'Una aplicación móvil multiplataforma para gestión de finanzas personales. Sincroniza con cuentas bancarias mediante Plaid API y ofrece insights de gastos con ML.',
      ],
    },
    experience: {
      title: 'Dónde he trabajado',
      roles: ['Ingeniero Senior', 'Desarrollador de Estudio', 'Ingeniero de Software Co-op'],
      duties: [
        [
          'Entrego código de producción robusto y de alta calidad para una variedad de proyectos con clientes como Harvard Business School, Pratt Institute y más.',
          'Trabajo junto a directores creativos para liderar la investigación, desarrollo y arquitectura de soluciones técnicas.',
          'Colaboro con diseñadores y gerentes de proyectos para transformar conceptos creativos en realidades de producción.',
          'Proveo liderazgo dentro del departamento de ingeniería mediante colaboración, intercambio de conocimientos y mentoría.',
        ],
        [
          "Colaboré con un equipo pequeño de diseñadores para impulsar una nueva marca y sistema de diseño para el Studio inaugural de Scout.",
          "Trabajé con el equipo de gestión para desarrollar y administrar el sitio web de marketing de la conferencia usando Jekyll, Sass y JavaScript.",
          'Me relacioné con clientes semanalmente, proporcionando experiencia tecnológica y orientación en el desarrollo de productos.',
        ],
        [
          'Desarrollé y lancé aplicaciones web altamente interactivas para Apple Music usando Ember.js.',
          'Construí y lancé la extensión de Apple Music dentro de Facebook Messenger utilizando APIs internas y de terceros.',
          "Diseñé e implementé el front-end del widget embebible de Apple Music, que permite a usuarios escuchar canciones completas en el navegador.",
        ],
      ],
    },
    contact: {
      tagline: '¿Qué sigue?',
      title: 'Ponte en contacto',
      description: 'Aunque actualmente no busco nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré lo posible por responderte!',
      nameLabel: 'Nombre',
      emailLabel: 'Correo',
      messageLabel: 'Mensaje',
      namePlaceholder: 'Juan García',
      emailPlaceholder: 'juan@ejemplo.com',
      messagePlaceholder: 'Hola, me gustaría hablar sobre...',
      submit: 'Enviar saludo',
      sending: 'Enviando...',
      successTitle: '¡Mensaje enviado con éxito!',
      successDesc: 'Gracias por contactarme. Te responderé pronto.',
    },
    languages: {
      pageTitle: 'Configuración de idiomas',
      pageDesc: 'Activa o desactiva los idiomas disponibles en el selector del portfolio.',
      back: 'Volver al Portfolio',
      enabledLabel: 'Activado',
      currentLabel: 'Activo',
      tip: 'Al menos un idioma debe estar activado.',
    },
  },

  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
      manageLanguages: 'Gérer les langues',
    },
    hero: {
      greeting: 'Bonjour, je m\'appelle',
      role: 'Je construis des choses pour le web.',
      bio: "Je suis un ingénieur full-stack spécialisé dans la création (et parfois la conception) d'expériences numériques exceptionnelles. Je me concentre sur la création de produits accessibles et centrés sur l'humain.",
      ctaWork: 'Voir mon travail !',
      ctaContact: 'Me contacter',
    },
    about: {
      title: 'À propos de moi',
      p1: "Bonjour ! Je m'appelle Alex et j'aime créer des choses qui vivent sur internet. Mon intérêt pour le développement web a commencé en 2012 quand j'ai commencé à modifier des thèmes Tumblr — modifier HTML et CSS m'a appris beaucoup sur le design et la structure !",
      p2: "Aujourd'hui, j'ai eu le privilège de travailler dans une agence de publicité, une startup, une grande entreprise et un studio de design universitaire. Je me concentre sur la création de produits numériques accessibles et inclusifs.",
      p3: "J'ai également lancé un cours qui couvre tout ce dont vous avez besoin pour créer une application web avec l'API Spotify en utilisant Node et React.",
    },
    skills: {
      title: 'Arsenal Technique',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps & Outils',
    },
    projects: {
      title: "Ce que j'ai construit",
      featured: 'Projet Phare',
      descriptions: [
        "Un tableau de bord analytique complet pour suivre l'engagement des utilisateurs et les métriques de revenus. Inclut la visualisation de données en temps réel et le support des modes clair/sombre.",
        "Une vitrine e-commerce headless conçue pour des performances élevées et la conversion. Comprend un panier personnalisé, l'intégration Stripe et la recherche Algolia.",
        "Une application mobile multiplateforme pour la gestion des finances personnelles. Synchronise avec les comptes bancaires via Plaid API et fournit des insights de dépenses par ML.",
      ],
    },
    experience: {
      title: "Où j'ai travaillé",
      roles: ['Ingénieur Senior', 'Développeur Studio', 'Ingénieur Logiciel Co-op'],
      duties: [
        [
          "Livraison de code de production robuste et de haute qualité pour des projets variés avec des clients comme Harvard Business School, Pratt Institute et d'autres.",
          'Travail aux côtés de directeurs créatifs pour diriger la recherche, le développement et l\'architecture de solutions techniques.',
          'Collaboration avec des designers et chefs de projet pour transformer des concepts créatifs en réalités de production.',
          'Leadership au sein du département ingénierie par la collaboration, le partage des connaissances et le mentorat.',
        ],
        [
          "Collaboration avec une petite équipe de designers étudiants pour développer une nouvelle marque et un système de design pour le Studio inaugural de Scout.",
          "Travail avec l'équipe de gestion pour développer et gérer le site marketing de la conférence en utilisant Jekyll, Sass et JavaScript.",
          'Interface avec les clients chaque semaine, fournissant expertise technologique et conseils en développement produit.',
        ],
        [
          "Développement et lancement d'applications web hautement interactives pour Apple Music avec Ember.js.",
          "Construction et lancement de l'extension Apple Music dans Facebook Messenger en exploitant des APIs tierces et internes.",
          "Conception et implémentation du front-end du widget intégrable d'Apple Music permettant aux utilisateurs d'écouter des chansons entières dans le navigateur.",
        ],
      ],
    },
    contact: {
      tagline: 'Et ensuite ?',
      title: 'Prendre Contact',
      description: "Même si je ne recherche pas actuellement de nouvelles opportunités, ma boîte mail est toujours ouverte. Que vous ayez une question ou souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
      nameLabel: 'Nom',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Jean Dupont',
      emailPlaceholder: 'jean@exemple.com',
      messagePlaceholder: "Bonjour, j'aimerais parler de...",
      submit: 'Dire Bonjour',
      sending: 'Envoi en cours...',
      successTitle: 'Message envoyé avec succès !',
      successDesc: "Merci d'avoir pris contact. Je vous répondrai bientôt.",
    },
    languages: {
      pageTitle: 'Paramètres de langue',
      pageDesc: 'Activez ou désactivez les langues disponibles dans le sélecteur du portfolio.',
      back: 'Retour au Portfolio',
      enabledLabel: 'Activé',
      currentLabel: 'Actif',
      tip: 'Au moins une langue doit rester activée.',
    },
  },

  de: {
    nav: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      experience: 'Erfahrung',
      contact: 'Kontakt',
      manageLanguages: 'Sprachen verwalten',
    },
    hero: {
      greeting: 'Hallo, mein Name ist',
      role: 'Ich baue Dinge für das Web.',
      bio: 'Ich bin ein Full-Stack-Ingenieur, spezialisiert auf die Entwicklung (und gelegentlich das Design) außergewöhnlicher digitaler Erlebnisse. Mein Fokus liegt auf barrierefreien, menschenzentrierten Produkten.',
      ctaWork: 'Meine Arbeit ansehen!',
      ctaContact: 'Kontakt aufnehmen',
    },
    about: {
      title: 'Über mich',
      p1: 'Hallo! Mein Name ist Alex und ich erschaffe gerne Dinge, die im Internet leben. Mein Interesse an der Webentwicklung begann 2012, als ich anfing, Tumblr-Themes zu bearbeiten — HTML und CSS zu hacken lehrte mich viel über Design und Struktur!',
      p2: 'Heute hatte ich das Privileg, in einer Werbeagentur, einem Startup, einem großen Konzern und einem studentischen Designstudio zu arbeiten. Mein Hauptfokus liegt auf der Erstellung zugänglicher und inklusiver Produkte.',
      p3: 'Kürzlich habe ich auch einen Kurs gestartet, der alles abdeckt, was man braucht, um eine Web-App mit der Spotify-API mit Node und React zu erstellen.',
    },
    skills: {
      title: 'Technisches Arsenal',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps & Werkzeuge',
    },
    projects: {
      title: 'Einige meiner Projekte',
      featured: 'Ausgewähltes Projekt',
      descriptions: [
        'Ein umfassendes Analyse-Dashboard zur Verfolgung von Nutzerengagement und Umsatzkennzahlen. Bietet Echtzeit-Datenvisualisierung und Unterstützung für Dark/Light-Mode.',
        'Ein Headless-E-Commerce-Storefront für hohe Performance und Conversion. Umfasst einen benutzerdefinierten Warenkorb, Stripe-Integration und Algolia-Suche.',
        'Eine plattformübergreifende mobile App für persönliches Finanzmanagement. Synchronisiert sicher mit Bankkonten über die Plaid-API und bietet ML-gestützte Ausgabenanalysen.',
      ],
    },
    experience: {
      title: 'Wo ich gearbeitet habe',
      roles: ['Senior Ingenieur', 'Studio-Entwickler', 'Software-Ingenieur Co-op'],
      duties: [
        [
          'Lieferung von hochwertigem, robustem Produktionscode für vielfältige Projekte mit Kunden wie Harvard Business School, Pratt Institute und mehr.',
          'Zusammenarbeit mit Kreativdirektoren bei der Forschung, Entwicklung und Architektur technischer Lösungen.',
          'Zusammenarbeit mit Designern und Projektmanagern, um kreative Konzepte in Produktionsrealitäten umzusetzen.',
          'Führung im Ingenieurbereich durch enge Zusammenarbeit, Wissensaustausch und Mentoring.',
        ],
        [
          "Zusammenarbeit mit einem kleinen Team von Studentendesignern zur Entwicklung einer neuen Marke und eines Designsystems für Scouts erstes Fall Studio.",
          "Enge Zusammenarbeit mit dem Managementteam zur Entwicklung und Pflege der Marketing-Website der Konferenz mit Jekyll, Sass und JavaScript.",
          'Wöchentlicher Kundenkontakt mit technologischer Expertise und Produktentwicklungsberatung.',
        ],
        [
          'Entwicklung und Launch hochgradig interaktiver Web-Apps für Apple Music mit Ember.js.',
          'Aufbau und Launch der Apple Music Extension in Facebook Messenger unter Nutzung von Drittanbieter- und internen APIs.',
          "Architektur und Implementierung des Frontends des einbettbaren Apple Music Widgets, das Nutzern ermöglicht, ganze Songs im Browser zu hören.",
        ],
      ],
    },
    contact: {
      tagline: 'Was kommt als nächstes?',
      title: 'Kontakt aufnehmen',
      description: 'Obwohl ich derzeit nicht nach neuen Möglichkeiten suche, steht mein Posteingang immer offen. Ob Sie eine Frage haben oder einfach Hallo sagen möchten — ich tue mein Bestes, um zu antworten!',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      messageLabel: 'Nachricht',
      namePlaceholder: 'Max Mustermann',
      emailPlaceholder: 'max@beispiel.de',
      messagePlaceholder: 'Hallo, ich würde gerne über... sprechen',
      submit: 'Hallo sagen',
      sending: 'Wird gesendet...',
      successTitle: 'Nachricht erfolgreich gesendet!',
      successDesc: 'Vielen Dank für Ihre Nachricht. Ich melde mich bald bei Ihnen.',
    },
    languages: {
      pageTitle: 'Spracheinstellungen',
      pageDesc: 'Aktivieren oder deaktivieren Sie die im Portfolio-Wechsler verfügbaren Sprachen.',
      back: 'Zurück zum Portfolio',
      enabledLabel: 'Aktiviert',
      currentLabel: 'Aktiv',
      tip: 'Mindestens eine Sprache muss aktiviert bleiben.',
    },
  },

  ja: {
    nav: {
      about: '自己紹介',
      skills: 'スキル',
      projects: 'プロジェクト',
      experience: '経歴',
      contact: 'お問い合わせ',
      manageLanguages: '言語を管理',
    },
    hero: {
      greeting: 'こんにちは、私の名前は',
      role: 'ウェブのためにものを作っています。',
      bio: 'フルスタックエンジニアとして、優れたデジタル体験の構築（そして時にはデザイン）を専門としています。現在はアクセシブルで人間中心のプロダクト開発に注力しています。',
      ctaWork: '作品を見る',
      ctaContact: 'お問い合わせ',
    },
    about: {
      title: '自己紹介',
      p1: 'こんにちは！私はAlexといい、インターネット上に存在するものを作ることが好きです。ウェブ開発への興味は2012年にTumblrのカスタムテーマを編集しようとしたときに始まりました。HTMLとCSSをいじることで、デザインと構造について多くを学びました！',
      p2: '現在まで、広告代理店、スタートアップ、大企業、学生主導のデザインスタジオで働く機会に恵まれました。現在の主な焦点は、さまざまなクライアントのためのアクセシブルで包括的なデジタル体験の構築です。',
      p3: 'また最近、NodeとReactを使ってSpotify APIでウェブアプリを構築するために必要なすべてをカバーするコースを開始しました。',
    },
    skills: {
      title: '技術スタック',
      frontend: 'フロントエンド',
      backend: 'バックエンド',
      devops: 'DevOps・ツール',
    },
    projects: {
      title: '制作実績',
      featured: '注目プロジェクト',
      descriptions: [
        'ユーザーエンゲージメントと収益指標を追跡するための包括的な分析ダッシュボード。リアルタイムデータ可視化、カスタマイズ可能なウィジェット、ダーク/ライトモードに対応。',
        '高いパフォーマンスとコンバージョンのために構築されたヘッドレスECストアフロント。カスタムカート実装、Stripe連携、Algolia検索を含む。',
        '個人財務管理のためのクロスプラットフォームモバイルアプリ。Plaid APIを使用して銀行口座と安全に同期し、ML駆動の支出インサイトを提供。',
      ],
    },
    experience: {
      title: '職務経歴',
      roles: ['シニアエンジニア', 'スタジオデベロッパー', 'ソフトウェアエンジニア（インターン）'],
      duties: [
        [
          'Harvard Business School、Pratt Instituteなど多様なクライアントのプロジェクトに対し、高品質で堅牢なプロダクションコードを提供。',
          'クリエイティブディレクターとともに技術的ソリューションの研究・開発・アーキテクチャを主導。',
          'デザイナー、プロジェクトマネージャー、他エンジニアと協力し、クリエイティブなコンセプトをプロダクションの現実に変換。',
          '緊密な協力、知識共有、メンタリングを通じてエンジニアリング部門のリーダーシップを発揮。',
        ],
        [
          "Scoutの最初のFall Studioのための新しいブランドとデザインシステムを学生デザイナーのチームと共同で推進。",
          "Jekyll、Sass、JavaScriptを使用してカンファレンスのマーケティングウェブサイトを開発・管理。",
          '毎週クライアントとやり取りし、技術的な専門知識とプロダクト開発のガイダンスを提供。',
        ],
        [
          'Ember.jsを使用してApple Music向けの高度にインタラクティブなウェブアプリを開発・リリース。',
          'サードパーティおよび内部APIを活用してFacebook Messenger内のApple Music Extensionを構築・リリース。',
          'ブラウザで完全な曲を聴けるApple Musicの埋め込みウェブプレイヤーウィジェットのフロントエンドを設計・実装。',
        ],
      ],
    },
    contact: {
      tagline: '次のステップは？',
      title: 'お問い合わせ',
      description: '現在は新しい機会を積極的に探していませんが、メールはいつでも歓迎です。質問がある方も、ただ挨拶をしたい方も、できる限り返信いたします！',
      nameLabel: 'お名前',
      emailLabel: 'メールアドレス',
      messageLabel: 'メッセージ',
      namePlaceholder: '山田太郎',
      emailPlaceholder: 'yamada@example.jp',
      messagePlaceholder: 'こんにちは。〜についてお話ししたいです...',
      submit: 'メッセージを送る',
      sending: '送信中...',
      successTitle: 'メッセージを送信しました！',
      successDesc: 'ご連絡ありがとうございます。近日中にご返信いたします。',
    },
    languages: {
      pageTitle: '言語設定',
      pageDesc: 'ポートフォリオの言語スイッチャーで使用できる言語を有効・無効にします。',
      back: 'ポートフォリオに戻る',
      enabledLabel: '有効',
      currentLabel: '使用中',
      tip: '少なくとも1つの言語を有効にする必要があります。',
    },
  },
};
