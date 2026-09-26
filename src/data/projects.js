import infraaiLogo from '../assets/images/projects/infraai-logo.png'
import identixLogo from '../assets/images/projects/identix-logo.JPEG'
import tokLogo from '../assets/images/projects/tok-logo.png'
import brochomakerLogo from '../assets/images/projects/brochomaker-logo.JPEG'
import fileOrganiserPreview from '../assets/images/projects/file-organiser-preview.png'
import infraaiCaseStudy from '../assets/images/projects/infraai-case-study.png'
import identixCaseStudy from '../assets/images/projects/identix-case-study.png'

export const projects = [
  {
    id: 'infraai',
    title: 'InfraAI',
    image: infraaiLogo,
    caseStudyImage: infraaiCaseStudy,
    category: 'AI / System Architecture',
    teamProject: true,
    description:
      'An AI-powered platform for designing and documenting system architectures, with collaborative architecture canvases, AI assistance and project communication.',
    tech: ['React', 'Python', 'Flask', 'PostgreSQL', 'OpenRouter', 'RAG'],
    featured: true,
    links: [{ label: 'GitHub', href: 'https://github.com/Ahmedsalim90/infraAI' }],

    role: 'Developer / Team Contributor',
    type: 'Collaborative Project',
    status: 'In Development',
    overview:
      'InfraAI is a platform for designing and documenting system architectures. It combines a collaborative architecture canvas with AI assistance, allowing a team to visualize, discuss and document how a system is structured in one shared space.',
    problem:
      'Designing and documenting system architecture is often scattered across separate tools — diagrams, chat, and documents — making it hard for a team to keep a shared, up-to-date picture of a system. InfraAI addresses this by bringing architecture visualization, AI assistance and team communication into one workspace.',
    approach:
      'The project combines a real-time collaborative canvas for architecture diagrams with an AI assistant that can help generate and explain architecture decisions, using retrieval-augmented generation to ground responses in relevant context.',
    build: {
      Frontend: ['React'],
      Backend: ['Python', 'Flask'],
      Database: ['PostgreSQL'],
      AI: ['OpenRouter', 'RAG'],
    },
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

  {
    id: 'identix',
    title: 'IDENTIX',
    image: identixLogo,
    caseStudyImage: identixCaseStudy,
    category: 'Web Application',
    teamProject: false,
    description:
      'A student ID card generation and administration system: students submit their information, and administrators select students and generate print-ready ID cards in bulk.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL'],
    featured: true,
    links: [
      { label: 'Student side', href: 'https://github.com/Ahmedsalim90/Student-IDentix' },
      { label: 'Admin side', href: 'https://github.com/Ahmedsalim90/Identixadmin' },
    ],

    role: 'Developer',
    type: 'Individual Project',
    status: 'Project',
    overview:
      'IDENTIX is a two-sided system for generating student ID cards. Students register and submit their information and photo, while administrators review submissions, select students and generate print-ready ID cards in bulk.',
    problem:
      'IDENTIX addresses the process of collecting student information and generating student ID cards by providing a structured registration workflow for students and an administrative generation workflow for staff.',
    approach:
      'The system is split into a student-facing registration interface and an admin dashboard. Students submit their details and photo; administrators can then select registered students and generate bulk, print-ready ID cards as PDF output.',
    build: {
      Frontend: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      Backend: ['Python', 'FastAPI'],
      Database: ['PostgreSQL'],
    },
    contribution:
      'IDENTIX was built individually, covering both the student registration interface and the admin dashboard, including the bulk ID card generation workflow.',
    challenges:
      'Challenges and implementation details will be expanded as the project case study is documented.',
    lessons:
      'Building IDENTIX involved working through structured data flows between a registration interface, an administrative dashboard, and generating consistent, print-ready PDF output in bulk.',
    currentState: 'Project',
  },

  {
    id: 'tok',
    title: 'Tok',
    category: 'Mobile Application',
    teamProject: false,
    description:
      'A Flutter/Dart messaging application where users can discover other users, send friend requests, and chat once the request is accepted.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    featured: false,
    links: [{ label: 'GitHub', href: 'https://github.com/Ahmedsalim90/Tok' }],
    image: tokLogo,

    role: 'Developer',
    type: 'Individual Project',
    status: 'Project',
    overview:
      'Tok is a mobile messaging application built with Flutter and Dart. Users can discover other users on the platform, send friend requests, and start chatting once a request is accepted.',
    problem:
      'Tok explores a core messaging-app workflow: user discovery, connection requests and real-time chat, implemented as a native mobile experience.',
    approach:
      'The app is built with Flutter for a cross-platform mobile interface, using Firebase for backend services such as data storage and real-time updates needed for the friend-request and chat flow.',
    build: {
      Mobile: ['Flutter', 'Dart'],
      Backend: ['Firebase'],
    },
    contribution:
      'Tok was built individually, covering the mobile interface, the friend-request flow, and the chat functionality.',
    challenges:
      'Challenges and implementation details will be expanded as the project case study is documented.',
    lessons:
      'Building Tok involved practical experience with Flutter/Dart mobile development and using Firebase to support real-time application features.',
    currentState: 'Project',
  },

  {
    id: 'brochomaker',
    title: 'BrochoMaker',
    category: 'Web Application',
    teamProject: false,
    description:
      'A web-based flyer generator: users enter company information, select a template and generate a flyer.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    featured: false,
    links: [{ label: 'GitHub', href: 'https://github.com/Ahmedsalim90/BrochoMaker' }],
    image: brochomakerLogo,

    role: 'Developer',
    type: 'Individual Project',
    status: 'Project',
    overview:
      'BrochoMaker is a web application that lets users generate a flyer by entering company information and selecting a template.',
    problem:
      'BrochoMaker provides a simple structured workflow for generating a flyer without needing design software: enter information, pick a template, generate the result.',
    approach:
      'The application takes user-submitted company information, applies it to a selected template, and generates the resulting flyer through a PHP backend.',
    build: {
      Frontend: ['HTML', 'CSS', 'JavaScript'],
      Backend: ['PHP'],
    },
    contribution:
      'My work on BrochoMaker involved building the information input flow, template selection and flyer generation based on the project\'s existing codebase.',
    challenges:
      'Challenges and implementation details will be expanded as the project case study is documented.',
    lessons:
      'Working on BrochoMaker involved handling structured user input and generating templated output on the server side.',
    currentState: 'Project',
  },

  {
    id: 'file-organiser',
    title: 'File Organiser',
    category: 'C Program / Utility',
    teamProject: false,
    description:
      'A C program that organizes files inside a folder based on the selected directory.',
    tech: ['C'],
    featured: false,
    image: fileOrganiserPreview,
    links: [{ label: 'GitHub', href: 'https://github.com/Ahmedsalim90/File_organiser.c' }],

    role: 'Developer',
    type: 'Individual Project',
    status: 'Project',
    overview:
      'File Organiser is a command-line utility written in C. The user provides a folder path, and the program organizes the files inside it.',
    problem:
      'File Organiser explores low-level file-system operations in C: reading a directory, inspecting its contents, and organizing files programmatically.',
    approach:
      'The program takes a directory path as input and processes the files it contains, using C\'s standard file and directory handling functions.',
    build: {
      Language: ['C'],
    },
    contribution:
      'File Organiser was built individually as a utility program.',
    challenges:
      'Challenges and implementation details will be expanded as the project case study is documented.',
    lessons:
      'Building File Organiser involved working directly with C\'s file-system APIs outside of a typical web or mobile framework.',
    currentState: 'Project',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.id === slug)
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((project) => project.id === slug)
  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}