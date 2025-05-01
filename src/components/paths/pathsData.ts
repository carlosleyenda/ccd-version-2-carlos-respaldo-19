
import { LearningPath } from "./types";

export const learningPaths: LearningPath[] = [
  {
    id: "mining-safety",
    title: "Seguridad en Operaciones Mineras",
    description: "Domina los protocolos de seguridad más importantes para operaciones mineras según estándares internacionales.",
    category: "mining",
    level: "Intermedio",
    duration: "120 horas",
    courses: [
      {
        id: "safety-fundamentals",
        title: "Fundamentos de Seguridad Minera",
        duration: "20 horas",
        completed: true
      },
      {
        id: "risk-assessment",
        title: "Evaluación de Riesgos",
        duration: "30 horas",
        completed: true
      },
      {
        id: "emergency-protocols",
        title: "Protocolos de Emergencia",
        duration: "25 horas",
        completed: false
      },
      {
        id: "safety-leadership",
        title: "Liderazgo en Seguridad",
        duration: "25 horas",
        completed: false
      },
      {
        id: "safety-certification",
        title: "Certificación en Seguridad Minera",
        duration: "20 horas",
        completed: false
      }
    ],
    skills: [
      "Evaluación de riesgos",
      "Protocolos de seguridad",
      "Gestión de emergencias",
      "Normativa internacional",
      "Auditoría de seguridad"
    ],
    progress: 40,
    color: "mining"
  },
  {
    id: "project-management",
    title: "Gestión de Proyectos Mineros",
    description: "Aprende metodologías modernas para liderar proyectos mineros de manera eficiente, sostenible y rentable.",
    category: "management",
    level: "Avanzado",
    duration: "180 horas",
    courses: [
      {
        id: "project-fundamentals",
        title: "Fundamentos de Gestión de Proyectos",
        duration: "30 horas",
        completed: false
      },
      {
        id: "financial-evaluation",
        title: "Evaluación Financiera de Proyectos",
        duration: "40 horas",
        completed: false
      },
      {
        id: "resource-optimization",
        title: "Optimización de Recursos",
        duration: "30 horas",
        completed: false
      },
      {
        id: "risk-management",
        title: "Gestión de Riesgos",
        duration: "40 horas",
        completed: false
      },
      {
        id: "project-leadership",
        title: "Liderazgo en Proyectos",
        duration: "40 horas",
        completed: false
      }
    ],
    skills: [
      "Planificación estratégica",
      "Gestión de presupuestos",
      "Evaluación de riesgos",
      "Negociación",
      "Liderazgo"
    ],
    progress: 0,
    color: "management"
  },
  {
    id: "metallurgical-processes",
    title: "Procesos Metalúrgicos Avanzados",
    description: "Especialízate en los últimos avances de procesos metalúrgicos para optimizar la extracción y procesamiento de minerales.",
    category: "engineering",
    level: "Avanzado",
    duration: "200 horas",
    courses: [
      {
        id: "metallurgy-fundamentals",
        title: "Fundamentos de Metalurgia Moderna",
        duration: "40 horas",
        completed: true
      },
      {
        id: "hydrometallurgy",
        title: "Hidrometalurgia Avanzada",
        duration: "40 horas",
        completed: true
      },
      {
        id: "pyrometallurgy",
        title: "Pirometalurgia Industrial",
        duration: "40 horas",
        completed: true
      },
      {
        id: "process-optimization",
        title: "Optimización de Procesos",
        duration: "40 horas",
        completed: false
      },
      {
        id: "metallurgical-innovation",
        title: "Innovación en Metalurgia",
        duration: "40 horas",
        completed: false
      }
    ],
    skills: [
      "Procesos hidrometalúrgicos",
      "Pirometalurgia",
      "Diseño de procesos",
      "Control de calidad",
      "Eficiencia energética"
    ],
    progress: 60,
    color: "engineering"
  },
  {
    id: "mine-planning",
    title: "Planificación y Diseño de Minas",
    description: "Aprende técnicas modernas para la planificación, diseño y evaluación de proyectos mineros utilizando software especializado.",
    category: "engineering",
    level: "Intermedio",
    duration: "160 horas",
    courses: [
      {
        id: "mine-design-fundamentals",
        title: "Fundamentos de Diseño Minero",
        duration: "30 horas",
        completed: false
      },
      {
        id: "resource-estimation",
        title: "Estimación de Recursos",
        duration: "40 horas",
        completed: false
      },
      {
        id: "open-pit-design",
        title: "Diseño de Minas a Cielo Abierto",
        duration: "30 horas",
        completed: false
      },
      {
        id: "underground-design",
        title: "Diseño de Minas Subterráneas",
        duration: "30 horas",
        completed: false
      },
      {
        id: "mine-software",
        title: "Software Especializado",
        duration: "30 horas",
        completed: false
      }
    ],
    skills: [
      "Modelamiento geológico",
      "Optimización de tajos",
      "Secuenciamiento minero",
      "Evaluación económica",
      "Software minero"
    ],
    progress: 0,
    color: "engineering"
  },
  {
    id: "sustainable-mining",
    title: "Minería Sostenible",
    description: "Desarrolla proyectos mineros con enfoque en sostenibilidad ambiental, social y económica siguiendo estándares globales.",
    category: "mining",
    level: "Intermedio",
    duration: "150 horas",
    courses: [
      {
        id: "sustainability-intro",
        title: "Introducción a la Minería Sostenible",
        duration: "30 horas",
        completed: true
      },
      {
        id: "environmental-management",
        title: "Gestión Ambiental en Minería",
        duration: "30 horas",
        completed: false
      },
      {
        id: "social-responsibility",
        title: "Responsabilidad Social Corporativa",
        duration: "30 horas",
        completed: false
      },
      {
        id: "water-management",
        title: "Gestión de Recursos Hídricos",
        duration: "30 horas",
        completed: false
      },
      {
        id: "mine-closure",
        title: "Cierre de Minas y Restauración",
        duration: "30 horas",
        completed: false
      }
    ],
    skills: [
      "Gestión ambiental",
      "Relaciones comunitarias",
      "Economía circular",
      "Eficiencia energética",
      "Restauración ecológica"
    ],
    progress: 20,
    color: "mining"
  },
  {
    id: "mining-leadership",
    title: "Liderazgo en la Industria Minera",
    description: "Desarrolla habilidades de liderazgo estratégico para impulsar equipos y organizaciones en el sector minero global.",
    category: "management",
    level: "Avanzado",
    duration: "140 horas",
    courses: [
      {
        id: "leadership-fundamentals",
        title: "Fundamentos de Liderazgo",
        duration: "25 horas",
        completed: true
      },
      {
        id: "team-management",
        title: "Gestión de Equipos Multidisciplinarios",
        duration: "30 horas",
        completed: true
      },
      {
        id: "strategic-thinking",
        title: "Pensamiento Estratégico",
        duration: "30 horas",
        completed: false
      },
      {
        id: "change-management",
        title: "Gestión del Cambio",
        duration: "30 horas",
        completed: false
      },
      {
        id: "executive-communication",
        title: "Comunicación Ejecutiva",
        duration: "25 horas",
        completed: false
      }
    ],
    skills: [
      "Liderazgo estratégico",
      "Gestión de equipos",
      "Resolución de conflictos",
      "Toma de decisiones",
      "Comunicación ejecutiva"
    ],
    progress: 35,
    color: "management"
  }
];
