
import { LearningPath } from "./types";

export const learningPaths: LearningPath[] = [
  // INGENIERÍA
  {
    id: "construction-management",
    title: "Gestión y Construcción de Obras",
    description: "Domina la gestión integral de proyectos de construcción, desde la planificación hasta la liquidación de obras públicas y privadas.",
    category: "engineering",
    level: "Avanzado",
    duration: "300 horas",
    courses: [
      {
        id: "residencia-supervision",
        title: "Residencia y Supervisión de Obras Públicas y Privadas",
        duration: "40 horas",
        completed: false
      },
      {
        id: "asistente-tecnico",
        title: "Asistente Técnico del Residente y Supervisor de Obras",
        duration: "35 horas",
        completed: false
      },
      {
        id: "expedientes-tecnicos",
        title: "Elaboración de Expedientes Técnicos de Obra",
        duration: "30 horas",
        completed: false
      },
      {
        id: "valorizacion-liquidacion",
        title: "Valorización y Liquidación de Obras Públicas y Privadas",
        duration: "40 horas",
        completed: false
      },
      {
        id: "metrados-costos-s10",
        title: "Metrados, Costos y Presupuesto en Edificaciones con S10",
        duration: "35 horas",
        completed: false
      },
      {
        id: "gerencia-construccion",
        title: "Gerencia de Proyectos de Construcción",
        duration: "40 horas",
        completed: false
      },
      {
        id: "ms-project-last-planner",
        title: "Planificación, Programación y Control de Obras con MS Project y Last Planner® System",
        duration: "45 horas",
        completed: false
      },
      {
        id: "primavera-p6-power-bi",
        title: "Gestión de la Construcción con Primavera P6 y Power BI",
        duration: "35 horas",
        completed: false
      }
    ],
    skills: [
      "Gestión de proyectos",
      "Supervisión de obras",
      "Expedientes técnicos",
      "Valorización de obras",
      "Metrados y presupuestos",
      "Control de costos",
      "Planificación con MS Project"
    ],
    progress: 0,
    color: "engineering"
  },
  {
    id: "structural-design",
    title: "Diseño Estructural y Sismorresistente",
    description: "Especialízate en el diseño de estructuras seguras y sismorresistentes, incluyendo cimentaciones y elementos estructurales.",
    category: "engineering",
    level: "Avanzado",
    duration: "280 horas",
    courses: [
      {
        id: "estructuras-sismicas",
        title: "Estructuras e Ingeniería Sísmica en Proyectos de Construcción",
        duration: "40 horas",
        completed: false
      },
      {
        id: "construccion-sismorresistente",
        title: "Construcción y Diseño de Estructuras Sismorresistentes",
        duration: "45 horas",
        completed: false
      },
      {
        id: "diseno-albañileria",
        title: "Diseño de Estructuras de Albañilería",
        duration: "30 horas",
        completed: false
      },
      {
        id: "cimentaciones-pilotes",
        title: "Diseño de Cimentaciones, Pilotes y Muros de Contención",
        duration: "40 horas",
        completed: false
      },
      {
        id: "mecanica-suelos-pavimentos",
        title: "Mecánica de Suelos y Pavimentos",
        duration: "35 horas",
        completed: false
      },
      {
        id: "mecanica-suelos-cimentaciones",
        title: "Mecánica de Suelos en Cimentaciones",
        duration: "30 horas",
        completed: false
      },
      {
        id: "diseno-acero",
        title: "Diseño para Construcción en Acero",
        duration: "35 horas",
        completed: false
      },
      {
        id: "puentes-concreto",
        title: "Diseño de Puentes de Concreto Armado y Presforzado",
        duration: "25 horas",
        completed: false
      }
    ],
    skills: [
      "Diseño estructural",
      "Análisis sísmico",
      "Mecánica de suelos",
      "Diseño de cimentaciones",
      "Estructuras de acero",
      "Diseño de puentes",
      "Normativa sismorresistente"
    ],
    progress: 0,
    color: "engineering"
  },
  {
    id: "bim-technology",
    title: "Tecnología BIM y Modelado Digital",
    description: "Domina las herramientas BIM más avanzadas para el modelado, coordinación y gestión de proyectos de construcción.",
    category: "engineering",
    level: "Intermedio",
    duration: "220 horas",
    courses: [
      {
        id: "coordinador-bim",
        title: "Coordinador BIM",
        duration: "50 horas",
        completed: false
      },
      {
        id: "modelador-bim",
        title: "Modelador BIM",
        duration: "40 horas",
        completed: false
      },
      {
        id: "bim-revit-arquitectura",
        title: "BIM Revit Arquitectura",
        duration: "35 horas",
        completed: false
      },
      {
        id: "bim-revit-estructuras",
        title: "BIM Revit Estructuras",
        duration: "35 horas",
        completed: false
      },
      {
        id: "bim-revit-mep",
        title: "BIM Revit MEP",
        duration: "30 horas",
        completed: false
      },
      {
        id: "bim-proyectos-viales",
        title: "BIM para Proyectos Viales",
        duration: "30 horas",
        completed: false
      }
    ],
    skills: [
      "Modelado BIM",
      "Coordinación BIM",
      "Revit Arquitectura",
      "Revit Estructuras",
      "Revit MEP",
      "BIM para infraestructura"
    ],
    progress: 0,
    color: "engineering"
  },
  {
    id: "road-infrastructure",
    title: "Infraestructura Vial y Topografía",
    description: "Especialízate en el diseño, construcción y mantenimiento de infraestructura vial con tecnología avanzada.",
    category: "engineering",
    level: "Intermedio",
    duration: "260 horas",
    courses: [
      {
        id: "topografia-civil3d",
        title: "Topografía y Diseño de Carreteras con Autodesk Civil 3D",
        duration: "40 horas",
        completed: false
      },
      {
        id: "topografia-drones",
        title: "Topografía con Drones y Licenciamiento de Vuelo",
        duration: "35 horas",
        completed: false
      },
      {
        id: "ingenieria-viales",
        title: "Ingeniería de Proyectos Viales",
        duration: "40 horas",
        completed: false
      },
      {
        id: "diseno-pavimentos",
        title: "Diseño de Pavimentos Nuevos y Rehabilitación",
        duration: "35 horas",
        completed: false
      },
      {
        id: "mantenimiento-vial",
        title: "Mantenimiento de Infraestructura Vial en Caminos Vecinales y Departamentales",
        duration: "30 horas",
        completed: false
      },
      {
        id: "obras-drenaje",
        title: "Diseño de Obras de Drenaje en Carretera",
        duration: "25 horas",
        completed: false
      },
      {
        id: "autodesk-3d",
        title: "Autodesk 3D",
        duration: "30 horas",
        completed: false
      },
      {
        id: "lectura-planos",
        title: "Lectura, Interpretación y Representación de Planos",
        duration: "25 horas",
        completed: false
      }
    ],
    skills: [
      "Topografía con drones",
      "Diseño vial",
      "Civil 3D",
      "Diseño de pavimentos",
      "Mantenimiento vial",
      "Obras de drenaje"
    ],
    progress: 0,
    color: "engineering"
  },

  // MINERÍA
  {
    id: "mining-operations",
    title: "Operaciones Mineras Avanzadas",
    description: "Domina las técnicas modernas de extracción, perforación y voladura en minería superficial y subterránea.",
    category: "mining",
    level: "Avanzado",
    duration: "280 horas",
    courses: [
      {
        id: "control-operaciones-mineras",
        title: "Control de Operaciones Mineras",
        duration: "40 horas",
        completed: false
      },
      {
        id: "perforacion-voladura-subterranea",
        title: "Perforación y Voladura en Minería Subterránea",
        duration: "45 horas",
        completed: false
      },
      {
        id: "perforacion-voladura-superficial",
        title: "Gestión de Perforación y Voladura en Minería Superficial y Subterránea",
        duration: "50 horas",
        completed: false
      },
      {
        id: "perforacion-carreteras",
        title: "Perforación y Voladura en Minería y Carreteras",
        duration: "35 horas",
        completed: false
      },
      {
        id: "ventilacion-minera",
        title: "Ventilación Minera",
        duration: "40 horas",
        completed: false
      },
      {
        id: "geomecanica-minera",
        title: "Geomecánica Minera",
        duration: "40 horas",
        completed: false
      },
      {
        id: "ingenieria-geologica",
        title: "Ingeniería Geológica Aplicada a Obras Civiles y Minera",
        duration: "30 horas",
        completed: false
      }
    ],
    skills: [
      "Control de operaciones",
      "Perforación y voladura",
      "Ventilación minera",
      "Geomecánica",
      "Minería subterránea",
      "Ingeniería geológica"
    ],
    progress: 0,
    color: "mining"
  },
  {
    id: "mining-safety",
    title: "Seguridad y Medio Ambiente Minero",
    description: "Implementa sistemas integrales de seguridad, salud ocupacional y gestión ambiental en operaciones mineras.",
    category: "mining",
    level: "Intermedio",
    duration: "220 horas",
    courses: [
      {
        id: "ssoma-minero",
        title: "SSOMA Aplicado al Sector Construcción, Industrial y Minero",
        duration: "40 horas",
        completed: true
      },
      {
        id: "supervisor-ssoma",
        title: "Supervisor SSOMA Aplicado al Sector Construcción, Industrial y Minero",
        duration: "45 horas",
        completed: true
      },
      {
        id: "gestion-ambiental-minera",
        title: "Gestión Ambiental Minera",
        duration: "35 horas",
        completed: false
      },
      {
        id: "estudio-impacto-ambiental",
        title: "Estudio del Impacto Ambiental con ArcGIS",
        duration: "30 horas",
        completed: false
      },
      {
        id: "gerencia-seguridad",
        title: "Gerencia de la Seguridad y Salud en el Trabajo",
        duration: "35 horas",
        completed: false
      },
      {
        id: "estabilidad-taludes",
        title: "Estabilidad de Taludes",
        duration: "35 horas",
        completed: false
      }
    ],
    skills: [
      "Gestión SSOMA",
      "Supervisión de seguridad",
      "Gestión ambiental",
      "Evaluación de impacto ambiental",
      "Estabilidad de taludes",
      "Normativa minera"
    ],
    progress: 40,
    color: "mining"
  },
  {
    id: "hydraulic-engineering",
    title: "Ingeniería Hidráulica y Defensas Ribereñas",
    description: "Especialízate en el diseño y construcción de sistemas hidráulicos y defensas ribereñas para proyectos mineros e civiles.",
    category: "mining",
    level: "Avanzado",
    duration: "180 horas",
    courses: [
      {
        id: "hidraulica-fluvial",
        title: "Hidráulica Fluvial: Diseño y Construcción de Defensas Ribereñas",
        duration: "45 horas",
        completed: true
      },
      {
        id: "redes-agua-saneamiento",
        title: "Diseño de Redes de Agua y Saneamiento",
        duration: "40 horas",
        completed: false
      },
      {
        id: "gestion-riesgo-desastres",
        title: "Gestión del Riesgo de Desastres",
        duration: "35 horas",
        completed: false
      },
      {
        id: "derecho-ambiental",
        title: "Derecho Ambiental y Sostenible",
        duration: "30 horas",
        completed: false
      },
      {
        id: "itse-seguridad",
        title: "Reglamento ITSE Inspecciones Técnicas de Seguridad en Edificaciones",
        duration: "30 horas",
        completed: false
      }
    ],
    skills: [
      "Hidráulica fluvial",
      "Defensas ribereñas",
      "Sistemas de agua",
      "Gestión de riesgos",
      "Derecho ambiental",
      "Inspecciones técnicas"
    ],
    progress: 20,
    color: "mining"
  },

  // GESTIÓN PÚBLICA
  {
    id: "public-contracting",
    title: "Contrataciones del Estado y Certificación OSCE",
    description: "Domina el marco normativo de contrataciones públicas según la Ley N° 32069 y prepárate para la certificación OSCE.",
    category: "management",
    level: "Avanzado",
    duration: "320 horas",
    courses: [
      {
        id: "ley-32069-contrataciones",
        title: "Contrataciones del Estado en el Marco de la Ley N° 32069",
        duration: "50 horas",
        completed: false
      },
      {
        id: "ley-32069-obras",
        title: "Ley N° 32069 Contrataciones del Estado Durante Ejecución de Obras Públicas",
        duration: "45 horas",
        completed: false
      },
      {
        id: "preparacion-osce",
        title: "Contrataciones del Estado y Preparación para la Certificación OSCE",
        duration: "60 horas",
        completed: false
      },
      {
        id: "contratos-nec-fidic",
        title: "Contratos NEC y FIDIC",
        duration: "40 horas",
        completed: false
      },
      {
        id: "peru-compras-seace",
        title: "Perú Compras y SEACE 3.0",
        duration: "35 horas",
        completed: false
      },
      {
        id: "sistemas-administrativos",
        title: "Sistemas Administrativos del Estado: SIGA, SEACE, SIAF",
        duration: "45 horas",
        completed: false
      },
      {
        id: "siga-logistico",
        title: "SIGA - Módulo Logístico y Gestión de Almacenes",
        duration: "25 horas",
        completed: false
      },
      {
        id: "siaf-cierre-contable",
        title: "Cierre Contable en el SIAF - Plataforma en Web",
        duration: "20 horas",
        completed: false
      }
    ],
    skills: [
      "Ley de contrataciones 32069",
      "Certificación OSCE",
      "Contratos NEC y FIDIC",
      "SEACE y Perú Compras",
      "Sistemas administrativos",
      "SIGA y SIAF"
    ],
    progress: 0,
    color: "management"
  },
  {
    id: "public-investment",
    title: "Inversión Pública y Sistema Invierte.pe",
    description: "Especialízate en la formulación, evaluación y gestión de proyectos de inversión pública bajo el marco Invierte.pe.",
    category: "management",
    level: "Avanzado",
    duration: "300 horas",
    courses: [
      {
        id: "invierte-pe-sistema",
        title: "Sistema Nacional de Programación Multianual y Gestión de Inversiones - Invierte.PE",
        duration: "45 horas",
        completed: false
      },
      {
        id: "formulacion-evaluacion-pip",
        title: "Programación, Formulación y Evaluación de Proyectos de Inversión Invierte.PE",
        duration: "50 horas",
        completed: false
      },
      {
        id: "perfil-fichas-invierte",
        title: "Perfil y Fichas Técnicas de Proyectos de Inversión Pública en el Marco del Invierte.PE",
        duration: "40 horas",
        completed: false
      },
      {
        id: "expedientes-tecnicos-invierte",
        title: "Perfil y Fichas Técnicas y Expedientes Técnicos en Proyectos de Inversión Pública",
        duration: "45 horas",
        completed: false
      },
      {
        id: "fichas-ioarr",
        title: "Fichas Técnicas e Inversiones de Optimización, Ampliación Marginal, Reposición y Rehabilitación – IOARR",
        duration: "35 horas",
        completed: false
      },
      {
        id: "proyectos-idi",
        title: "Formulación y Gestión de Proyectos de I+D+I para Fondos Concursables",
        duration: "30 horas",
        completed: false
      },
      {
        id: "presupuesto-resultados",
        title: "Presupuesto Público por Resultados",
        duration: "35 horas",
        completed: false
      },
      {
        id: "pei-poi-ceplan",
        title: "PEI y POI - Aplicativo CEPLAN",
        duration: "20 horas",
        completed: false
      }
    ],
    skills: [
      "Sistema Invierte.pe",
      "Formulación de PIP",
      "Fichas técnicas",
      "Expedientes técnicos",
      "IOARR",
      "Presupuesto por resultados"
    ],
    progress: 0,
    color: "management"
  },
  {
    id: "public-administration",
    title: "Administración y Gestión Pública Integral",
    description: "Desarrolla competencias integrales en administración pública, gestión municipal y modernización del Estado.",
    category: "management",
    level: "Intermedio",
    duration: "280 horas",
    courses: [
      {
        id: "administracion-gestion-publica",
        title: "Administración y Gestión Pública",
        duration: "40 horas",
        completed: true
      },
      {
        id: "gestion-municipal",
        title: "Gestión Municipal",
        duration: "35 horas",
        completed: true
      },
      {
        id: "gestion-publica-salud",
        title: "Gestión Pública de la Salud",
        duration: "30 horas",
        completed: false
      },
      {
        id: "planeamiento-estrategico",
        title: "Planeamiento Estratégico en el Sector Público",
        duration: "35 horas",
        completed: false
      },
      {
        id: "planes-desarrollo-concertado",
        title: "Planes de Desarrollo Concertado Regional y Local",
        duration: "30 horas",
        completed: false
      },
      {
        id: "etica-integridad",
        title: "Ética, Integridad y su Importancia en la Gestión Pública",
        duration: "25 horas",
        completed: false
      },
      {
        id: "control-interno",
        title: "Control Interno en las Entidades Públicas",
        duration: "30 horas",
        completed: false
      },
      {
        id: "auditoria-gubernamental",
        title: "Auditoría y Control Gubernamental",
        duration: "35 horas",
        completed: false
      },
      {
        id: "administracion-documentaria",
        title: "Administración Documentaria y de Archivo en el Sector Público",
        duration: "20 horas",
        completed: false
      }
    ],
    skills: [
      "Administración pública",
      "Gestión municipal",
      "Planeamiento estratégico",
      "Control interno",
      "Auditoría gubernamental",
      "Gestión documentaria"
    ],
    progress: 35,
    color: "management"
  },
  {
    id: "public-law",
    title: "Derecho Público y Anticorrupción",
    description: "Especialízate en derecho administrativo, penal y la lucha contra la corrupción en la administración pública.",
    category: "management",
    level: "Avanzado",
    duration: "240 horas",
    courses: [
      {
        id: "derecho-penal-publico",
        title: "Derecho Penal y Delitos Contra la Administración Pública",
        duration: "45 horas",
        completed: false
      },
      {
        id: "derecho-administrativo",
        title: "Derecho Administrativo",
        duration: "40 horas",
        completed: false
      },
      {
        id: "derecho-penal-anticorrupcion",
        title: "Derecho Penal, Nuevo Código Procesal Penal, Prisión Preventiva y Anticorrupción",
        duration: "50 horas",
        completed: false
      },
      {
        id: "tributacion-empresarial",
        title: "Tributación Empresarial",
        duration: "35 horas",
        completed: false
      },
      {
        id: "procedimiento-disciplinario",
        title: "Procedimiento Administrativo Disciplinario LEY 30057",
        duration: "30 horas",
        completed: false
      },
      {
        id: "recursos-humanos-servir",
        title: "Gestión de Recursos Humanos y LEY SERVIR",
        duration: "40 horas",
        completed: false
      }
    ],
    skills: [
      "Derecho penal público",
      "Derecho administrativo",
      "Anticorrupción",
      "Tributación empresarial",
      "Procedimientos disciplinarios",
      "LEY SERVIR"
    ],
    progress: 0,
    color: "management"
  },
  {
    id: "digital-skills-analysis",
    title: "Competencias Digitales y Análisis de Datos",
    description: "Desarrolla habilidades digitales avanzadas para la gestión pública moderna con herramientas de análisis de datos.",
    category: "management",
    level: "Intermedio",
    duration: "200 horas",
    courses: [
      {
        id: "excel-profesional",
        title: "Excel Profesional",
        duration: "30 horas",
        completed: false
      },
      {
        id: "power-bi-ia",
        title: "Análisis de Datos con Power BI e Inteligencia Artificial",
        duration: "40 horas",
        completed: false
      },
      {
        id: "office-profesional",
        title: "Office Profesional - Word y Excel Intermedio",
        duration: "25 horas",
        completed: false
      },
      {
        id: "business-intelligence-sql",
        title: "Business Intelligence con SQL Server",
        duration: "35 horas",
        completed: false
      },
      {
        id: "ciencia-datos-banca",
        title: "Ciencia de Datos Aplicado a Banca y Finanzas",
        duration: "30 horas",
        completed: false
      },
      {
        id: "ia-estrategia-empresarial",
        title: "Inteligencia Artificial Aplicada a la Estrategia Empresarial",
        duration: "40 horas",
        completed: false
      }
    ],
    skills: [
      "Excel avanzado",
      "Power BI",
      "Inteligencia artificial",
      "Business Intelligence",
      "Ciencia de datos",
      "Análisis estratégico"
    ],
    progress: 0,
    color: "management"
  },
  {
    id: "citizen-service",
    title: "Atención Ciudadana y Competencias Blandas",
    description: "Desarrolla habilidades de atención al ciudadano y competencias blandas esenciales para el servicio público.",
    category: "management",
    level: "Principiante",
    duration: "180 horas",
    courses: [
      {
        id: "atencion-ciudadano",
        title: "Atención al Ciudadano en el Sector Público",
        duration: "25 horas",
        completed: false
      },
      {
        id: "secretariado-ejecutivo",
        title: "Secretariado Ejecutivo para la Administración Pública",
        duration: "30 horas",
        completed: false
      },
      {
        id: "asistente-administrativo",
        title: "Asistente Administrativo en la Gestión Pública",
        duration: "25 horas",
        completed: false
      },
      {
        id: "redaccion-documentos",
        title: "Redacción de Documentos en la Gestión Pública",
        duration: "20 horas",
        completed: false
      },
      {
        id: "tramite-documentario",
        title: "Trámite Documentario y Gestión de Archivos en el Sector Público",
        duration: "25 horas",
        completed: false
      },
      {
        id: "coaching-liderazgo",
        title: "Coaching y Liderazgo",
        duration: "30 horas",
        completed: false
      },
      {
        id: "enfoque-genero",
        title: "Enfoque de Género",
        duration: "25 horas",
        completed: false
      }
    ],
    skills: [
      "Atención al ciudadano",
      "Secretariado ejecutivo",
      "Redacción oficial",
      "Gestión documentaria",
      "Liderazgo",
      "Enfoque de género"
    ],
    progress: 0,
    color: "management"
  }
];
