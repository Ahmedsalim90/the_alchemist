export const translations = {
  en: {
    nav: { work: 'Work', about: 'About', lab: 'Lab', contact: 'Contact' },
    hero: {
      roleDesigner: 'DESIGNER',
      roleFull: 'FULL-STACK & MOBILE DEVELOPER',
      headlineLine1: 'I TURN REAL-WORLD PROBLEMS',
      headlineLine2: 'INTO SOFTWARE.',
      paragraph:
        'Software Engineering student, developer and builder creating web applications, mobile experiences, backend systems and AI-powered tools.',
      capabilityLine: 'Designer · Developer · Problem Solver',
      ctaPrimary: 'EXPLORE MY WORK →',
      ctaSecondary: "LET'S BUILD →",
      location: 'Based in Cameroon · Open to opportunities',
    },
    work: {
      eyebrow: 'Selected Work',
      heading: 'Projects built to solve real problems.',
      description:
        'A selection of web, mobile, backend and AI-powered projects built while learning, experimenting and solving real problems.',
      caseStudy: 'Case Study',
      teamProject: 'Team Project',
    },
    projects: {
      infraai:
        'An AI-powered platform for designing and documenting system architectures, with collaborative architecture canvases, AI assistance and project communication.',
      identix:
        'A student ID card generation and administration system: students submit their information, and administrators select students and generate print-ready ID cards in bulk.',
      tok: 'A Flutter/Dart messaging application where users can discover other users, send friend requests, and chat once the request is accepted.',
      brochomaker:
        'A web-based flyer generator: users enter company information, select a template and generate a flyer.',
      'file-organiser':
        'A C program that organizes files inside a folder based on the selected directory.',
    },
    caseStudy: {
      back: '← Back to Selected Work',
      role: 'Role',
      type: 'Type',
      technologies: 'Technologies',
      status: 'Status',
      overview: 'Overview',
      problem: 'Problem',
      approach: 'Approach',
      build: 'Build',
      contribution: 'My Contribution',
      collaboration: 'Collaboration',
      challenges: 'Challenges',
      lessons: 'Lessons Learned',
      currentState: 'Current State',
      nextProject: 'Next project',
      teamProject: 'Team Project',
      buildCategories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Database: 'Database',
        AI: 'AI',
        Mobile: 'Mobile',
        Language: 'Language',
      },
    },
    caseStudies: {
      infraai: {
        role: 'Developer / Team Contributor',
        type: 'Collaborative Project',
        status: 'In Development',
        overview:
          'InfraAI is a platform for designing and documenting system architectures. It combines a collaborative architecture canvas with AI assistance, allowing a team to visualize, discuss and document how a system is structured in one shared space.',
        problem:
          'Designing and documenting system architecture is often scattered across separate tools — diagrams, chat, and documents — making it hard for a team to keep a shared, up-to-date picture of a system. InfraAI addresses this by bringing architecture visualization, AI assistance and team communication into one workspace.',
        approach:
          'The project combines a real-time collaborative canvas for architecture diagrams with an AI assistant that can help generate and explain architecture decisions, using retrieval-augmented generation to ground responses in relevant context.',
        contribution:
          'As a contributor on this team project, my work has involved frontend development with React and collaborating with the team on the overall product direction. Specific responsibilities will be expanded as the case study is documented further.',
        collaboration:
          'InfraAI is built collaboratively with a team. It is not a solo project — the architecture, features and implementation are the result of shared team effort.',
        challenges:
          'Challenges and implementation details will be expanded as the project case study is documented.',
        lessons:
          'Working on InfraAI has involved practical experience with real-time collaborative features, integrating AI through RAG, and coordinating development within a team.',
        currentState: 'In Development',
      },
      identix: {
        role: 'Developer',
        type: 'Individual Project',
        status: 'Project',
        overview:
          'IDENTIX is a two-sided system for generating student ID cards. Students register and submit their information and photo, while administrators review submissions, select students and generate print-ready ID cards in bulk.',
        problem:
          'IDENTIX addresses the process of collecting student information and generating student ID cards by providing a structured registration workflow for students and an administrative generation workflow for staff.',
        approach:
          'The system is split into a student-facing registration interface and an admin dashboard. Students submit their details and photo; administrators can then select registered students and generate bulk, print-ready ID cards as PDF output.',
        contribution:
          'IDENTIX was built individually, covering both the student registration interface and the admin dashboard, including the bulk ID card generation workflow.',
        challenges:
          'Challenges and implementation details will be expanded as the project case study is documented.',
        lessons:
          'Building IDENTIX involved working through structured data flows between a registration interface, an administrative dashboard, and generating consistent, print-ready PDF output in bulk.',
        currentState: 'Project',
      },
      tok: {
        role: 'Developer',
        type: 'Individual Project',
        status: 'Project',
        overview:
          'Tok is a mobile messaging application built with Flutter and Dart. Users can discover other users on the platform, send friend requests, and start chatting once a request is accepted.',
        problem:
          'Tok explores a core messaging-app workflow: user discovery, connection requests and real-time chat, implemented as a native mobile experience.',
        approach:
          'The app is built with Flutter for a cross-platform mobile interface, using Firebase for backend services such as data storage and real-time updates needed for the friend-request and chat flow.',
        contribution:
          'Tok was built individually, covering the mobile interface, the friend-request flow, and the chat functionality.',
        challenges:
          'Challenges and implementation details will be expanded as the project case study is documented.',
        lessons:
          'Building Tok involved practical experience with Flutter/Dart mobile development and using Firebase to support real-time application features.',
        currentState: 'Project',
      },
      brochomaker: {
        role: 'Developer',
        type: 'Individual Project',
        status: 'Project',
        overview:
          'BrochoMaker is a web application that lets users generate a flyer by entering company information and selecting a template.',
        problem:
          'BrochoMaker provides a simple structured workflow for generating a flyer without needing design software: enter information, pick a template, generate the result.',
        approach:
          "The application takes user-submitted company information, applies it to a selected template, and generates the resulting flyer through a PHP backend.",
        contribution:
          "My work on BrochoMaker involved building the information input flow, template selection and flyer generation based on the project's existing codebase.",
        challenges:
          'Challenges and implementation details will be expanded as the project case study is documented.',
        lessons:
          'Working on BrochoMaker involved handling structured user input and generating templated output on the server side.',
        currentState: 'Project',
      },
      'file-organiser': {
        role: 'Developer',
        type: 'Individual Project',
        status: 'Project',
        overview:
          'File Organiser is a command-line utility written in C. The user provides a folder path, and the program organizes the files inside it.',
        problem:
          "File Organiser explores low-level file-system operations in C: reading a directory, inspecting its contents, and organizing files programmatically.",
        approach:
          "The program takes a directory path as input and processes the files it contains, using C's standard file and directory handling functions.",
        contribution: 'File Organiser was built individually as a utility program.',
        challenges:
          'Challenges and implementation details will be expanded as the project case study is documented.',
        lessons:
          "Building File Organiser involved working directly with C's file-system APIs outside of a typical web or mobile framework.",
        currentState: 'Project',
      },
    },
    method: {
      eyebrow: 'The Alchemist Method',
      heading: 'How I turn problems into software.',
      description:
        'I start with the problem, shape the solution, build it, test it, and keep refining it until an idea becomes something useful.',
      closing: 'Think. Build. Transform.',
      steps: [
        { title: 'Think', description: 'I start by understanding the problem, the people involved and what the software needs to accomplish.' },
        { title: 'Design', description: 'I think through interfaces, user flows, system structure and technical architecture before building, using tools like Figma and draw.io.' },
        { title: 'Build', description: 'I translate the solution into working web applications, mobile experiences, backend systems and AI-powered tools.' },
        { title: 'Test', description: 'I test the implementation, identify problems and iterate until the solution becomes more reliable.' },
        { title: 'Transform', description: 'The goal is not simply to write code. It is to transform a real problem or idea into something people can actually use.' },
      ],
    },
    designEngineering: {
      eyebrow: 'Design + Engineering',
      heading: 'From idea to implementation.',
      description:
        'I combine design thinking, system architecture and software development to turn ideas and real-world problems into usable digital products.',
      infraaiLink: 'See this approach in InfraAI',
      process: ['Idea', 'Design', 'Architecture', 'Build', 'Transform'],
      capabilities: [
        { title: 'Design', description: 'I use interface and visual design tools to think through structure, layout and user experience before implementation.', itemsLabel: 'Tools' },
        { title: 'Architecture', description: 'I think about how systems, services, APIs and data flows fit together before turning them into working software.', itemsLabel: 'Concepts' },
        { title: 'Development', description: 'I turn designs and technical ideas into working web applications, mobile applications, backend systems and AI-powered tools.', itemsLabel: 'Technologies' },
      ],
    },
    toolbox: {
      eyebrow: 'The Toolbox',
      heading: 'Tools I use to build.',
      description:
        "A practical stack built around software development, system design, mobile applications, AI-powered tools and the technologies I'm currently learning.",
      learningLabel: 'Currently Learning',
      learningNote: 'Expanding the backend toolbox.',
      categories: {
        Frontend: 'Frontend', Mobile: 'Mobile', Backend: 'Backend', Database: 'Database',
        'AI / Intelligent Systems': 'AI / Intelligent Systems', 'Tools / Workflow': 'Tools / Workflow',
        'Design / Architecture': 'Design / Architecture', Deployment: 'Deployment',
      },
    },
    about: {
      eyebrow: 'About The Alchemist',
      heading: 'Building, learning, and turning ideas into software.',
      paragraphs: [
        'My name is Nsangou Ahmed Salim, a Software Engineering student and developer based in Cameroon. I enjoy turning real-world problems and ideas into software that people can actually use.',
        'My work spans web applications, mobile experiences, backend systems and AI-powered tools. I also care about the thinking behind the code — from interface design and user flows to system architecture and implementation.',
        'I am still learning, building and experimenting. For me, every project is an opportunity to understand a problem better, improve my skills and create something useful.',
      ],
      closing: 'Still learning. Still building.',
      academicJourney: 'Academic Journey',
      academicInternship: 'Academic Internship',
      internshipDescription:
        'As part of my academic journey, I completed an internship at Digimark Consulting, gaining practical exposure to a professional working environment and the opportunity to apply what I had learned beyond the classroom.',
      photoCaption: 'Photo coming soon',
      photoTag: 'Nsangou Ahmed Salim · Software Engineering · Cameroon',
    },
    lab: {
      eyebrow: 'The Lab',
      heading: 'Still building.',
      description:
        "Not everything I'm building is finished. That's part of the process. The Lab represents work that is currently in development and technologies currently being learned.",
      learningLabel: 'Currently Learning',
      learningNote: 'Expanding the backend toolbox.',
      status: 'In Development',
      items: {
        mboahub: 'A project currently in development as part of my ongoing work.',
        edunova: 'An online class system exploring features such as video calls and assignments.',
      },
    },
    collaboration: {
      eyebrow: 'Collaboration',
      heading: 'Software is built together.',
      description:
        'Good software often comes from combining different ideas, perspectives and skills. I enjoy contributing to collaborative projects where technical thinking, communication and implementation come together.',
      technology: 'Technology',
      collaborativeElements: 'Collaborative Elements',
      collaborativeElementsValue:
        'Real-time collaboration · Project messaging · Shared architecture workspace',
      viewCaseStudy: 'View InfraAI Case Study',
      teamProject: 'Team Project',
      steps: [
        { title: 'Share', description: 'Discuss ideas, approaches and technical decisions openly.' },
        { title: 'Build', description: 'Contribute to a shared implementation and help move the project forward.' },
        { title: 'Learn', description: 'Use collaboration as an opportunity to understand different approaches and improve.' },
      ],
    },
    github: {
      eyebrow: 'GitHub / Code',
      heading: 'Code is where ideas become real.',
      description: 'My GitHub is where I experiment, build, learn and share the code behind my projects.',
      viewGithub: 'View My GitHub',
      viewAll: 'View All Code On GitHub',
      featured: 'Featured Repositories',
      viewRepository: 'View Repository',
      teamProject: 'Team Project',
      contributionLabel: 'Contributions',
      contributionContext: 'Current Snapshot',
      repositories: {
        infraai: 'AI-powered architecture design and documentation platform developed collaboratively.',
        identix: 'Student ID registration system for collecting student information and supporting ID generation workflows.',
        'identix-admin': 'Administrative interface for managing students and generating student ID cards.',
        tok: 'Flutter mobile messaging application with user discovery, friend requests and chat functionality.',
        brochomaker: 'Flyer generation application where users provide company information, select a template and generate a flyer.',
        'file-organiser': 'C program that organizes files within a specified folder path.',
      },
    },
    contact: {
      eyebrow: "Let's Build",
      headingLine1: 'Have a problem worth solving?',
      headingLine2: "Let's turn it into software.",
      description:
        "Whether it's a project, collaboration, internship opportunity or simply an idea worth exploring, I'm open to conversations that lead to useful things.",
      cta: "LET'S BUILD →",
      methods: {
        Email: { label: 'Email', action: 'Send an Email' },
        WhatsApp: { label: 'WhatsApp', action: 'Message on WhatsApp' },
        Phone: { label: 'Phone', action: 'Call Me' },
        LinkedIn: { label: 'LinkedIn', action: 'LinkedIn' },
        GitHub: { label: 'GitHub', action: 'GitHub' },
      },
    },
    footer: {
      role: 'Full-Stack & Mobile Developer',
      identity: 'Designer · Developer · Problem Solver',
      location: 'Cameroon',
      tagline: 'Think / Build / Transform',
      explore: 'Explore',
      code: 'Code',
      connect: 'Connect',
      selectedWork: 'Selected Work',
      copyright: '© 2026 Nsangou Ahmed Salim. All rights reserved.',
    },
  },

  fr: {
    nav: { work: 'Travail', about: 'À propos', lab: 'Labo', contact: 'Contact' },
    hero: {
      roleDesigner: 'DESIGNER',
      roleFull: 'DÉVELOPPEUR FULL-STACK & MOBILE',
      headlineLine1: 'JE TRANSFORME DES PROBLÈMES RÉELS',
      headlineLine2: 'EN LOGICIELS.',
      paragraph:
        "Étudiant en génie logiciel, développeur et bâtisseur créant des applications web, des expériences mobiles, des systèmes backend et des outils basés sur l'IA.",
      capabilityLine: 'Designer · Développeur · Résolveur de problèmes',
      ctaPrimary: 'DÉCOUVRIR MON TRAVAIL →',
      ctaSecondary: 'CONSTRUISONS →',
      location: 'Basé au Cameroun · Ouvert aux opportunités',
    },
    work: {
      eyebrow: 'Travaux sélectionnés',
      heading: 'Des projets conçus pour résoudre de vrais problèmes.',
      description:
        "Une sélection de projets web, mobiles, backend et basés sur l'IA, réalisés en apprenant, expérimentant et résolvant de vrais problèmes.",
      caseStudy: 'Étude de cas',
      teamProject: "Projet d'équipe",
    },
    projects: {
      infraai:
        "Une plateforme basée sur l'IA pour concevoir et documenter des architectures système, avec des canevas d'architecture collaboratifs, une assistance IA et une communication de projet.",
      identix:
        "Un système de génération et d'administration de cartes d'identité étudiantes : les étudiants soumettent leurs informations, et les administrateurs sélectionnent les étudiants et génèrent des cartes prêtes à imprimer en masse.",
      tok: "Une application de messagerie Flutter/Dart où les utilisateurs peuvent découvrir d'autres utilisateurs, envoyer des demandes d'ami et discuter une fois la demande acceptée.",
      brochomaker:
        'Un générateur de flyers basé sur le web : les utilisateurs saisissent les informations de leur entreprise, sélectionnent un modèle et génèrent un flyer.',
      'file-organiser':
        'Un programme en C qui organise les fichiers dans un dossier en fonction du répertoire sélectionné.',
    },
    caseStudy: {
      back: '← Retour aux travaux sélectionnés',
      role: 'Rôle',
      type: 'Type',
      technologies: 'Technologies',
      status: 'Statut',
      overview: 'Aperçu',
      problem: 'Problème',
      approach: 'Approche',
      build: 'Construction',
      contribution: 'Ma contribution',
      collaboration: 'Collaboration',
      challenges: 'Défis',
      lessons: 'Leçons apprises',
      currentState: 'État actuel',
      nextProject: 'Projet suivant',
      teamProject: "Projet d'équipe",
      buildCategories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Database: 'Base de données',
        AI: 'IA',
        Mobile: 'Mobile',
        Language: 'Langage',
      },
    },
    caseStudies: {
      infraai: {
        role: "Développeur / Contributeur d'équipe",
        type: 'Projet collaboratif',
        status: 'En développement',
        overview:
          "InfraAI est une plateforme pour concevoir et documenter des architectures système. Elle combine un canevas d'architecture collaboratif avec une assistance IA, permettant à une équipe de visualiser, discuter et documenter la structure d'un système dans un espace partagé.",
        problem:
          "La conception et la documentation de l'architecture système sont souvent dispersées entre plusieurs outils — diagrammes, discussions, documents — rendant difficile pour une équipe de garder une vision partagée et à jour d'un système. InfraAI répond à cela en réunissant visualisation d'architecture, assistance IA et communication d'équipe dans un seul espace de travail.",
        approach:
          "Le projet combine un canevas collaboratif en temps réel pour les diagrammes d'architecture avec un assistant IA capable d'aider à générer et expliquer des décisions d'architecture, en utilisant la génération augmentée par récupération (RAG) pour ancrer les réponses dans un contexte pertinent.",
        contribution:
          "En tant que contributeur sur ce projet d'équipe, mon travail a porté sur le développement frontend avec React et la collaboration avec l'équipe sur l'orientation générale du produit. Les responsabilités précises seront détaillées à mesure que l'étude de cas sera documentée.",
        collaboration:
          "InfraAI est construit en collaboration avec une équipe. Ce n'est pas un projet solo — l'architecture, les fonctionnalités et l'implémentation sont le résultat d'un effort d'équipe partagé.",
        challenges:
          "Les défis et détails d'implémentation seront développés au fur et à mesure que l'étude de cas du projet sera documentée.",
        lessons:
          "Travailler sur InfraAI m'a permis d'acquérir une expérience pratique des fonctionnalités collaboratives en temps réel, de l'intégration de l'IA via le RAG, et de la coordination du développement au sein d'une équipe.",
        currentState: 'En développement',
      },
      identix: {
        role: 'Développeur',
        type: 'Projet individuel',
        status: 'Projet',
        overview:
          "IDENTIX est un système à deux volets pour générer des cartes d'identité étudiantes. Les étudiants s'inscrivent et soumettent leurs informations et leur photo, tandis que les administrateurs examinent les soumissions, sélectionnent les étudiants et génèrent des cartes prêtes à imprimer en masse.",
        problem:
          "IDENTIX répond au processus de collecte des informations des étudiants et de génération des cartes d'identité en fournissant un flux d'inscription structuré pour les étudiants et un flux de génération administratif pour le personnel.",
        approach:
          "Le système est divisé en une interface d'inscription destinée aux étudiants et un tableau de bord administrateur. Les étudiants soumettent leurs informations et leur photo ; les administrateurs peuvent ensuite sélectionner les étudiants inscrits et générer en masse des cartes d'identité prêtes à imprimer au format PDF.",
        contribution:
          "IDENTIX a été construit individuellement, couvrant à la fois l'interface d'inscription des étudiants et le tableau de bord administrateur, y compris le flux de génération de cartes en masse.",
        challenges:
          "Les défis et détails d'implémentation seront développés au fur et à mesure que l'étude de cas du projet sera documentée.",
        lessons:
          "Construire IDENTIX a impliqué de gérer des flux de données structurés entre une interface d'inscription, un tableau de bord administratif, et de générer une sortie PDF cohérente et prête à imprimer en masse.",
        currentState: 'Projet',
      },
      tok: {
        role: 'Développeur',
        type: 'Projet individuel',
        status: 'Projet',
        overview:
          "Tok est une application de messagerie mobile construite avec Flutter et Dart. Les utilisateurs peuvent découvrir d'autres utilisateurs sur la plateforme, envoyer des demandes d'ami, et commencer à discuter une fois la demande acceptée.",
        problem:
          "Tok explore un flux de travail central des applications de messagerie : découverte d'utilisateurs, demandes de connexion et discussion en temps réel, implémenté comme une expérience mobile native.",
        approach:
          "L'application est construite avec Flutter pour une interface mobile multiplateforme, en utilisant Firebase pour les services backend tels que le stockage de données et les mises à jour en temps réel nécessaires au flux de demandes d'ami et de discussion.",
        contribution:
          "Tok a été construit individuellement, couvrant l'interface mobile, le flux de demandes d'ami et la fonctionnalité de discussion.",
        challenges:
          "Les défis et détails d'implémentation seront développés au fur et à mesure que l'étude de cas du projet sera documentée.",
        lessons:
          "Construire Tok m'a permis d'acquérir une expérience pratique du développement mobile Flutter/Dart et de l'utilisation de Firebase pour prendre en charge des fonctionnalités applicatives en temps réel.",
        currentState: 'Projet',
      },
      brochomaker: {
        role: 'Développeur',
        type: 'Projet individuel',
        status: 'Projet',
        overview:
          "BrochoMaker est une application web qui permet aux utilisateurs de générer un flyer en saisissant les informations de leur entreprise et en sélectionnant un modèle.",
        problem:
          "BrochoMaker propose un flux de travail simple et structuré pour générer un flyer sans avoir besoin de logiciel de design : saisir les informations, choisir un modèle, générer le résultat.",
        approach:
          "L'application prend les informations d'entreprise soumises par l'utilisateur, les applique à un modèle sélectionné, et génère le flyer résultant via un backend PHP.",
        contribution:
          "Mon travail sur BrochoMaker a consisté à construire le flux de saisie des informations, la sélection de modèle et la génération de flyers à partir de la base de code existante du projet.",
        challenges:
          "Les défis et détails d'implémentation seront développés au fur et à mesure que l'étude de cas du projet sera documentée.",
        lessons:
          "Travailler sur BrochoMaker a impliqué de gérer une saisie utilisateur structurée et de générer une sortie basée sur des modèles côté serveur.",
        currentState: 'Projet',
      },
      'file-organiser': {
        role: 'Développeur',
        type: 'Projet individuel',
        status: 'Projet',
        overview:
          "File Organiser est un utilitaire en ligne de commande écrit en C. L'utilisateur fournit un chemin de dossier, et le programme organise les fichiers qu'il contient.",
        problem:
          "File Organiser explore des opérations de système de fichiers de bas niveau en C : lire un répertoire, inspecter son contenu, et organiser les fichiers de façon programmatique.",
        approach:
          "Le programme prend un chemin de répertoire en entrée et traite les fichiers qu'il contient, en utilisant les fonctions standards de gestion de fichiers et de répertoires de C.",
        contribution: "File Organiser a été construit individuellement en tant que programme utilitaire.",
        challenges:
          "Les défis et détails d'implémentation seront développés au fur et à mesure que l'étude de cas du projet sera documentée.",
        lessons:
          "Construire File Organiser a impliqué de travailler directement avec les API de système de fichiers de C, en dehors d'un cadre web ou mobile typique.",
        currentState: 'Projet',
      },
    },
    method: {
      eyebrow: "La méthode de l'Alchimiste",
      heading: 'Comment je transforme les problèmes en logiciels.',
      description:
        "Je commence par le problème, je façonne la solution, je la construis, je la teste, et je continue à l'affiner jusqu'à ce qu'une idée devienne utile.",
      closing: 'Penser. Construire. Transformer.',
      steps: [
        { title: 'Penser', description: 'Je commence par comprendre le problème, les personnes concernées et ce que le logiciel doit accomplir.' },
        { title: 'Concevoir', description: "Je réfléchis aux interfaces, aux parcours utilisateurs, à la structure du système et à l'architecture technique avant de construire, avec des outils comme Figma et draw.io." },
        { title: 'Construire', description: "Je traduis la solution en applications web, expériences mobiles, systèmes backend et outils basés sur l'IA fonctionnels." },
        { title: 'Tester', description: "Je teste l'implémentation, j'identifie les problèmes et j'itère jusqu'à ce que la solution soit plus fiable." },
        { title: 'Transformer', description: "L'objectif n'est pas simplement d'écrire du code. C'est de transformer un vrai problème ou une idée en quelque chose que les gens peuvent réellement utiliser." },
      ],
    },
    designEngineering: {
      eyebrow: 'Design + Ingénierie',
      heading: "De l'idée à l'implémentation.",
      description:
        "Je combine la réflexion design, l'architecture système et le développement logiciel pour transformer des idées et des problèmes réels en produits numériques utilisables.",
      infraaiLink: 'Voir cette approche dans InfraAI',
      process: ['Idée', 'Conception', 'Architecture', 'Construction', 'Transformation'],
      capabilities: [
        { title: 'Design', description: "J'utilise des outils de design d'interface et visuel pour réfléchir à la structure, la mise en page et l'expérience utilisateur avant l'implémentation.", itemsLabel: 'Outils' },
        { title: 'Architecture', description: "Je réfléchis à la manière dont les systèmes, services, API et flux de données s'articulent avant de les transformer en logiciel fonctionnel.", itemsLabel: 'Concepts' },
        { title: 'Développement', description: "Je transforme les designs et idées techniques en applications web, applications mobiles, systèmes backend et outils basés sur l'IA.", itemsLabel: 'Technologies' },
      ],
    },
    toolbox: {
      eyebrow: 'La boîte à outils',
      heading: "Les outils que j'utilise pour construire.",
      description:
        "Une stack pratique construite autour du développement logiciel, de la conception système, des applications mobiles, des outils basés sur l'IA et des technologies que j'apprends actuellement.",
      learningLabel: "En cours d'apprentissage",
      learningNote: 'Élargir la boîte à outils backend.',
      categories: {
        Frontend: 'Frontend', Mobile: 'Mobile', Backend: 'Backend', Database: 'Base de données',
        'AI / Intelligent Systems': 'IA / Systèmes intelligents', 'Tools / Workflow': 'Outils / Workflow',
        'Design / Architecture': 'Design / Architecture', Deployment: 'Déploiement',
      },
    },
    about: {
      eyebrow: "À propos de l'Alchimiste",
      heading: 'Construire, apprendre, et transformer des idées en logiciels.',
      paragraphs: [
        "Je m'appelle Nsangou Ahmed Salim, étudiant en génie logiciel et développeur basé au Cameroun. J'aime transformer des problèmes et des idées réels en logiciels que les gens peuvent réellement utiliser.",
        "Mon travail couvre les applications web, les expériences mobiles, les systèmes backend et les outils basés sur l'IA. Je me soucie aussi de la réflexion derrière le code — du design d'interface aux parcours utilisateurs, jusqu'à l'architecture système et l'implémentation.",
        "Je continue d'apprendre, de construire et d'expérimenter. Pour moi, chaque projet est une occasion de mieux comprendre un problème, d'améliorer mes compétences et de créer quelque chose d'utile.",
      ],
      closing: 'Toujours en apprentissage. Toujours en construction.',
      academicJourney: 'Parcours académique',
      academicInternship: 'Stage académique',
      internshipDescription:
        "Dans le cadre de mon parcours académique, j'ai effectué un stage chez Digimark Consulting, ce qui m'a permis d'acquérir une expérience pratique dans un environnement professionnel et l'occasion d'appliquer ce que j'avais appris en dehors de la salle de classe.",
      photoCaption: 'Photo à venir',
      photoTag: 'Nsangou Ahmed Salim · Génie Logiciel · Cameroun',
    },
    lab: {
      eyebrow: 'Le Laboratoire',
      heading: 'Toujours en construction.',
      description:
        "Tout ce que je construis n'est pas terminé. Cela fait partie du processus. Le Laboratoire représente les travaux actuellement en développement et les technologies actuellement en apprentissage.",
      learningLabel: "En cours d'apprentissage",
      learningNote: 'Élargir la boîte à outils backend.',
      status: 'En développement',
      items: {
        mboahub: 'Un projet actuellement en développement dans le cadre de mon travail en cours.',
        edunova: 'Un système de cours en ligne explorant des fonctionnalités telles que les appels vidéo et les devoirs.',
      },
    },
    collaboration: {
      eyebrow: 'Collaboration',
      heading: 'Le logiciel se construit ensemble.',
      description:
        "Un bon logiciel naît souvent de la combinaison d'idées, de perspectives et de compétences différentes. J'aime contribuer à des projets collaboratifs où la réflexion technique, la communication et l'implémentation se rejoignent.",
      technology: 'Technologie',
      collaborativeElements: 'Éléments collaboratifs',
      collaborativeElementsValue:
        "Collaboration en temps réel · Messagerie de projet · Espace d'architecture partagé",
      viewCaseStudy: "Voir l'étude de cas InfraAI",
      teamProject: "Projet d'équipe",
      steps: [
        { title: 'Partager', description: 'Discuter ouvertement des idées, des approches et des décisions techniques.' },
        { title: 'Construire', description: 'Contribuer à une implémentation partagée et aider à faire avancer le projet.' },
        { title: 'Apprendre', description: "Utiliser la collaboration comme une occasion de comprendre différentes approches et de s'améliorer." },
      ],
    },
    github: {
      eyebrow: 'GitHub / Code',
      heading: "Le code, c'est là où les idées deviennent réelles.",
      description: "Mon GitHub est l'endroit où j'expérimente, construis, apprends et partage le code derrière mes projets.",
      viewGithub: 'Voir mon GitHub',
      viewAll: 'Voir tout le code sur GitHub',
      featured: 'Dépôts en vedette',
      viewRepository: 'Voir le dépôt',
      teamProject: "Projet d'équipe",
      contributionLabel: 'Contributions',
      contributionContext: 'Aperçu actuel',
      repositories: {
        infraai: "Plateforme de conception et de documentation d'architecture basée sur l'IA, développée en collaboration.",
        identix: "Système d'inscription d'identité étudiante pour collecter les informations des étudiants et prendre en charge les flux de génération de cartes.",
        'identix-admin': "Interface administrative pour gérer les étudiants et générer les cartes d'identité étudiantes.",
        tok: "Application de messagerie mobile Flutter avec découverte d'utilisateurs, demandes d'ami et fonctionnalité de discussion.",
        brochomaker: 'Application de génération de flyers où les utilisateurs fournissent les informations de leur entreprise, sélectionnent un modèle et génèrent un flyer.',
        'file-organiser': 'Programme en C qui organise les fichiers dans un chemin de dossier spécifié.',
      },
    },
    contact: {
      eyebrow: 'Construisons',
      headingLine1: "Un problème qui mérite d'être résolu ?",
      headingLine2: 'Transformons-le en logiciel.',
      description:
        "Qu'il s'agisse d'un projet, d'une collaboration, d'une opportunité de stage ou simplement d'une idée à explorer, je suis ouvert aux conversations qui mènent à des choses utiles.",
      cta: 'CONSTRUISONS →',
      methods: {
        Email: { label: 'Email', action: 'Envoyer un email' },
        WhatsApp: { label: 'WhatsApp', action: 'Message sur WhatsApp' },
        Phone: { label: 'Téléphone', action: "M'appeler" },
        LinkedIn: { label: 'LinkedIn', action: 'LinkedIn' },
        GitHub: { label: 'GitHub', action: 'GitHub' },
      },
    },
    footer: {
      role: 'Développeur Full-Stack & Mobile',
      identity: 'Designer · Développeur · Résolveur de problèmes',
      location: 'Cameroun',
      tagline: 'Penser / Construire / Transformer',
      explore: 'Explorer',
      code: 'Code',
      connect: 'Contact',
      selectedWork: 'Travaux sélectionnés',
      copyright: '© 2026 Nsangou Ahmed Salim. Tous droits réservés.',
    },
  },
}