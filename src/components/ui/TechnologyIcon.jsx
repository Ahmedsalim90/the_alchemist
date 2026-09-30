import {
  siHtml5, siCss, siJavascript, siBootstrap, siReact, siFlutter, siDart,
  siFirebase, siC, siCplusplus, siPhp, siPython, siFlask, siFastapi,
  siPostgresql, siGit, siGithub, siDocker, siAndroidstudio,
  siFigma, siDiagramsdotnet, siVercel, siRender, siRailway, siNodedotjs,
  siExpress,
} from 'simple-icons'
import { Blocks, Code2, Database, GitBranch, Network, Server, Workflow } from 'lucide-react'

const brands = {
  HTML: [siHtml5, 'html'], CSS: [siCss, 'css'], JavaScript: [siJavascript, 'javascript'],
  Bootstrap: [siBootstrap, 'bootstrap'], React: [siReact, 'react'], 'React.js': [siReact, 'react'],
  Flutter: [siFlutter, 'flutter'], Dart: [siDart, 'dart'], Firebase: [siFirebase, 'firebase'],
  C: [siC, 'c'], 'C++': [siCplusplus, 'cplusplus'], PHP: [siPhp, 'php'],
  Python: [siPython, 'python'], Flask: [siFlask, 'flask'], FastAPI: [siFastapi, 'fastapi'],
  PostgreSQL: [siPostgresql, 'postgresql'],
  Git: [siGit, 'git'], GitHub: [siGithub, 'ink'], Docker: [siDocker, 'docker'],
  'Android Studio': [siAndroidstudio, 'androidstudio'], Figma: [siFigma, 'figma'],
  'draw.io': [siDiagramsdotnet, 'diagrams'], Vercel: [siVercel, 'ink'],
  Render: [siRender, 'ink'], Railway: [siRailway, 'ink'],
  'Node.js': [siNodedotjs, 'node'], 'Express.js': [siExpress, 'ink'],
}

const symbols = {
  'VS Code': Code2, RAG: Network, 'System Architecture': Network,
  OpenRouter: Network, 'API Design': Blocks, 'Data Flow': Workflow, 'Backend Structure': Server,
}

function TechnologyIcon({ name, className = 'h-5 w-5' }) {
  const brand = brands[name]
  if (brand) {
    const [icon, token] = brand
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
        className={`${className} shrink-0 brand-${token}`}>
        <path d={icon.path} />
      </svg>
    )
  }
  const Symbol = symbols[name] || (name.toLowerCase().includes('data') ? Database : GitBranch)
  return <Symbol aria-hidden="true" strokeWidth={1.8} className={`${className} shrink-0 text-accent`} />
}

export default TechnologyIcon