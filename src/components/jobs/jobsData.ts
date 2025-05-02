import { JobListing, MarketTrend, Company } from "./types";

// Mock company data
export const companies: Company[] = [
  {
    id: "comp-1",
    name: "Minera Perú Copper",
    description: "Líder en la industria minera peruana, especializada en la extracción y procesamiento de cobre con operaciones en Arequipa, Cusco y Apurímac.",
    industry: "Minería",
    location: "Lima, Perú",
    website: "https://www.perucopper.com",
    employeeCount: "1,500+",
    founded: "1985",
    specialties: ["Extracción de Cobre", "Sostenibilidad", "Procesos Metalúrgicos", "Desarrollo Comunitario"],
    openPositions: 8,
    benefits: [
      "Seguro médico privado",
      "Bonos por productividad",
      "Desarrollo profesional continuo",
      "Horarios de trabajo flexibles",
      "Programas de bienestar",
      "Transporte a zonas mineras"
    ]
  },
  {
    id: "comp-2",
    name: "TechMine Solutions",
    description: "Empresa especializada en soluciones tecnológicas para la industria minera, ofreciendo servicios de automatización, monitoreo y optimización de procesos.",
    industry: "Tecnología",
    location: "Lima, Perú",
    website: "https://www.techminesolutions.com",
    employeeCount: "200-500",
    founded: "2010",
    specialties: ["Software minero", "IoT", "Automatización", "Análisis de datos"],
    openPositions: 5,
    benefits: [
      "Trabajo remoto flexible",
      "Horario de trabajo personalizado",
      "Equipos de última generación",
      "Capacitaciones internacionales",
      "Seguro médico familiar"
    ]
  },
  {
    id: "comp-3",
    name: "Ingeniería & Construcción S.A.",
    description: "Compañía líder en el diseño y construcción de infraestructura para proyectos mineros, energéticos e industriales en toda Latinoamérica.",
    industry: "Ingeniería",
    location: "Lima, Perú",
    website: "https://www.icsa.com.pe",
    employeeCount: "1,000+",
    founded: "1995",
    specialties: ["Diseño estructural", "Manejo de proyectos", "Construcción civil", "Consultoría"],
    openPositions: 12,
    benefits: [
      "Programa de desarrollo de carrera",
      "Seguro de vida",
      "Bonos por proyecto",
      "Capacitaciones especializadas",
      "Club de empleados",
      "Descuentos corporativos"
    ]
  },
  {
    id: "comp-4",
    name: "SafetyFirst Mining",
    description: "Empresa dedicada a la consultoría y capacitación en seguridad minera, con enfoque en prevención de riesgos y cumplimiento normativo.",
    industry: "Seguridad",
    location: "Arequipa, Perú",
    website: "https://www.safetyfirst.pe",
    employeeCount: "50-200",
    founded: "2008",
    specialties: ["Seguridad ocupacional", "Capacitación", "Gestión de riesgos", "Auditorías de seguridad"],
    openPositions: 3,
    benefits: [
      "Capacitación continua",
      "Seguro complementario",
      "Bonos por certificaciones",
      "Esquema de trabajo flexible"
    ]
  },
  {
    id: "comp-5",
    name: "GeoAnalytics",
    description: "Consultora especializada en análisis geológicos, utilizando tecnologías avanzadas para la exploración y evaluación de recursos minerales.",
    industry: "Geología",
    location: "Cusco, Perú",
    website: "https://www.geoanalytics.com.pe",
    employeeCount: "20-50",
    founded: "2015",
    specialties: ["Geofísica", "Modelamiento 3D", "Análisis de muestras", "Exploración"],
    openPositions: 4,
    benefits: [
      "Proyectos internacionales",
      "Participación en investigaciones",
      "Horario compacto",
      "Programa de referidos"
    ]
  },
  {
    id: "comp-6",
    name: "EnviroMine Consulting",
    description: "Firma consultora especializada en gestión ambiental para proyectos mineros, con enfoque en sostenibilidad y relaciones comunitarias.",
    industry: "Ambiental",
    location: "Lima, Perú",
    website: "https://www.enviromine.com",
    employeeCount: "50-200",
    founded: "2012",
    specialties: ["Impacto ambiental", "Relaciones comunitarias", "Normativa ambiental", "Restauración"],
    openPositions: 6,
    benefits: [
      "Trabajo en campo internacional",
      "Proyectos de investigación",
      "Programas de voluntariado",
      "Desarrollo profesional"
    ]
  }
];

// Include existing jobListings and marketTrends data
export const jobListings: JobListing[] = [
  {
    id: "job-1",
    title: "Ingeniero de Minas Senior",
    company: "Minera Perú Copper",
    companyId: "comp-1",
    location: "Arequipa, Perú",
    type: "Tiempo completo",
    category: "mining",
    description: "Buscamos un Ingeniero de Minas Senior con experiencia en operaciones de cobre para liderar proyectos de optimización y expansión en nuestra unidad minera en Arequipa.",
    responsibilities: [
      "Supervisar y optimizar operaciones mineras",
      "Desarrollar planes de minado a corto y mediano plazo",
      "Implementar tecnologías para mejorar la eficiencia operativa",
      "Gestionar equipos multidisciplinarios",
      "Asegurar el cumplimiento de normativas de seguridad y ambientales"
    ],
    requirements: [
      "Ingeniero de Minas colegiado y habilitado",
      "Mínimo 8 años de experiencia en operaciones mineras, preferiblemente en cobre",
      "Experiencia en gestión de proyectos y equipos",
      "Conocimientos avanzados en sistemas de gestión minera",
      "Dominio de inglés nivel intermedio-avanzado"
    ],
    requiredSkills: [
      "Planificación minera",
      "Gestión de operaciones",
      "Softwares mineros (Datamine, Vulcan)",
      "Optimización de procesos",
      "Normativa minera"
    ],
    benefits: [
      "Salario competitivo según experiencia",
      "Bonos por cumplimiento de objetivos",
      "Seguro médico privado familiar",
      "Capacitaciones especializadas",
      "Posibilidades de desarrollo internacional"
    ],
    salary: "S/120,000 - S/150,000 anual",
    postedDate: "15/04/2025",
    recommendedCourses: [
      {
        id: "course-1",
        title: "Optimización de Operaciones Mineras",
        description: "Técnicas avanzadas para maximizar la productividad en minas de cobre."
      },
      {
        id: "course-2",
        title: "Gestión de Seguridad en Minería",
        description: "Protocolos y mejores prácticas para garantizar operaciones seguras."
      }
    ]
  },
  {
    id: "job-2",
    title: "Analista de Seguridad Minera",
    company: "MineSafe Solutions",
    companyId: "comp-4",
    location: "Lima, Perú",
    type: "Tiempo completo",
    category: "safety",
    description: "Estamos buscando un Analista de Seguridad Minera para unirse a nuestro equipo. El candidato ideal tendrá experiencia en la identificación de riesgos y la implementación de medidas de seguridad en entornos mineros.",
    responsibilities: [
      "Realizar inspecciones de seguridad en las instalaciones mineras",
      "Identificar y evaluar riesgos laborales",
      "Desarrollar e implementar planes de seguridad",
      "Capacitar a los empleados en prácticas de seguridad",
      "Investigar accidentes e incidentes"
    ],
    requirements: [
      "Título en Ingeniería de Seguridad, Ingeniería Industrial o campo relacionado",
      "Experiencia mínima de 3 años en seguridad minera",
      "Conocimiento de las regulaciones de seguridad minera",
      "Habilidades de comunicación y resolución de problemas",
      "Certificación en seguridad (deseable)"
    ],
    requiredSkills: [
      "Evaluación de riesgos",
      "Planes de seguridad",
      "Capacitación en seguridad",
      "Investigación de accidentes",
      "Regulaciones mineras"
    ],
    benefits: [
      "Salario competitivo",
      "Seguro de salud",
      "Plan de jubilación",
      "Oportunidades de desarrollo profesional"
    ],
    salary: "S/80,000 - S/100,000 anual",
    postedDate: "10/04/2025",
    recommendedCourses: [
      {
        id: "course-3",
        title: "Seguridad en la Industria Minera",
        description: "Curso completo sobre seguridad en la industria minera."
      },
      {
        id: "course-4",
        title: "Manejo de Riesgos en la Minería",
        description: "Aprenda a identificar y mitigar riesgos en la minería."
      }
    ]
  },
  {
    id: "job-3",
    title: "Geólogo de Exploración",
    company: "Global Mining Corp",
    companyId: "comp-5",
    location: "Cusco, Perú",
    type: "Tiempo completo",
    category: "mining",
    description: "Global Mining Corp está buscando un Geólogo de Exploración para unirse a nuestro equipo. El candidato ideal tendrá experiencia en la exploración de minerales y la gestión de proyectos de exploración.",
    responsibilities: [
      "Planificar y ejecutar programas de exploración",
      "Recopilar y analizar datos geológicos",
      "Supervisar la perforación y el muestreo",
      "Evaluar el potencial de los depósitos minerales",
      "Preparar informes geológicos"
    ],
    requirements: [
      "Título en Geología",
      "Experiencia mínima de 5 años en exploración de minerales",
      "Conocimiento de técnicas de muestreo y perforación",
      "Habilidades de interpretación de datos geológicos",
      "Disponibilidad para viajar"
    ],
    requiredSkills: [
      "Exploración de minerales",
      "Muestreo geológico",
      "Perforación",
      "Interpretación de datos",
      "Gestión de proyectos"
    ],
    benefits: [
      "Salario competitivo",
      "Seguro de salud",
      "Plan de jubilación",
      "Oportunidades de desarrollo profesional"
    ],
    salary: "S/90,000 - S/120,000 anual",
    postedDate: "05/04/2025",
    recommendedCourses: [
      {
        id: "course-5",
        title: "Exploración de Depósitos Minerales",
        description: "Curso avanzado sobre exploración de depósitos minerales."
      },
      {
        id: "course-6",
        title: "Geología Estructural",
        description: "Aprenda sobre geología estructural y su aplicación en la exploración."
      }
    ]
  },
  {
    id: "job-4",
    title: "Supervisor de Operaciones",
    company: "Andina Mining",
    companyId: "comp-1",
    location: "Arequipa, Perú",
    type: "Tiempo completo",
    category: "management",
    description: "Andina Mining está buscando un Supervisor de Operaciones para unirse a nuestro equipo. El candidato ideal tendrá experiencia en la supervisión de operaciones mineras y la gestión de equipos.",
    responsibilities: [
      "Supervisar las operaciones diarias en la mina",
      "Gestionar y coordinar equipos de trabajo",
      "Asegurar el cumplimiento de los objetivos de producción",
      "Implementar mejoras en los procesos operativos",
      "Garantizar la seguridad en el trabajo"
    ],
    requirements: [
      "Título en Ingeniería de Minas, Ingeniería Industrial o campo relacionado",
      "Experiencia mínima de 5 años en supervisión de operaciones mineras",
      "Habilidades de liderazgo y gestión de equipos",
      "Conocimiento de los procesos mineros",
      "Disponibilidad para trabajar en turnos"
    ],
    requiredSkills: [
      "Supervisión de operaciones",
      "Gestión de equipos",
      "Planificación de la producción",
      "Mejora de procesos",
      "Seguridad en el trabajo"
    ],
    benefits: [
      "Salario competitivo",
      "Seguro de salud",
      "Plan de jubilación",
      "Oportunidades de desarrollo profesional"
    ],
    salary: "S/100,000 - S/130,000 anual",
    postedDate: "01/04/2025",
    recommendedCourses: [
      {
        id: "course-7",
        title: "Supervisión Efectiva en la Minería",
        description: "Curso sobre supervisión efectiva en la minería."
      },
      {
        id: "course-8",
        title: "Gestión de Operaciones Mineras",
        description: "Aprenda a gestionar operaciones mineras de manera eficiente."
      }
    ]
  },
  {
    id: "job-5",
    title: "Ingeniero Metalúrgico",
    company: "ProcessMet Technologies",
    companyId: "comp-2",
    location: "Lima, Perú",
    type: "Tiempo completo",
    category: "engineering",
    description: "ProcessMet Technologies está buscando un Ingeniero Metalúrgico para unirse a nuestro equipo. El candidato ideal tendrá experiencia en el procesamiento de minerales y la optimización de procesos metalúrgicos.",
    responsibilities: [
      "Diseñar y optimizar procesos metalúrgicos",
      "Realizar pruebas de laboratorio y planta piloto",
      "Supervisar la operación de plantas de procesamiento de minerales",
      "Desarrollar nuevos métodos de procesamiento",
      "Asegurar el cumplimiento de las normas ambientales"
    ],
    requirements: [
      "Título en Ingeniería Metalúrgica",
      "Experiencia mínima de 5 años en procesamiento de minerales",
      "Conocimiento de los procesos metalúrgicos",
      "Habilidades de resolución de problemas",
      "Conocimiento de las normas ambientales"
    ],
    requiredSkills: [
      "Procesamiento de minerales",
      "Optimización de procesos",
      "Pruebas de laboratorio",
      "Operación de plantas",
      "Normas ambientales"
    ],
    benefits: [
      "Salario competitivo",
      "Seguro de salud",
      "Plan de jubilación",
      "Oportunidades de desarrollo profesional"
    ],
    salary: "S/90,000 - S/120,000 anual",
    postedDate: "28/03/2025",
    recommendedCourses: [
      {
        id: "course-9",
        title: "Procesamiento de Minerales",
        description: "Curso avanzado sobre procesamiento de minerales."
      },
      {
        id: "course-10",
        title: "Metalurgia Extractiva",
        description: "Aprenda sobre metalurgia extractiva y su aplicación en la minería."
      }
    ]
  },
  {
    id: "job-6",
    title: "Ingeniero Ambiental",
    company: "EnviroSolutions",
    companyId: "comp-6",
    location: "Lima, Perú",
    type: "Tiempo completo",
    category: "management",
    description: "EnviroSolutions está buscando un Ingeniero Ambiental para unirse a nuestro equipo. El candidato ideal tendrá experiencia en la gestión ambiental en la industria minera.",
    responsibilities: [
      "Desarrollar e implementar planes de gestión ambiental",
      "Realizar evaluaciones de impacto ambiental",
      "Supervisar el cumplimiento de las normas ambientales",
      "Gestionar los permisos ambientales",
      "Participar en la gestión de residuos"
    ],
    requirements: [
      "Título en Ingeniería Ambiental",
      "Experiencia mínima de 5 años en gestión ambiental en la industria minera",
      "Conocimiento de las normas ambientales",
      "Habilidades de comunicación y gestión",
      "Certificación en gestión ambiental (deseable)"
    ],
    requiredSkills: [
      "Gestión ambiental",
      "Evaluación de impacto ambiental",
      "Normas ambientales",
      "Gestión de permisos",
      "Gestión de residuos"
    ],
    benefits: [
      "Salario competitivo",
      "Seguro de salud",
      "Plan de jubilación",
      "Oportunidades de desarrollo profesional"
    ],
    salary: "S/85,000 - S/110,000 anual",
    postedDate: "22/03/2025",
    recommendedCourses: [
      {
        id: "course-11",
        title: "Gestión Ambiental en la Minería",
        description: "Curso sobre gestión ambiental en la minería."
      },
      {
        id: "course-12",
        title: "Evaluación de Impacto Ambiental",
        description: "Aprenda a realizar evaluaciones de impacto ambiental."
      }
    ]
  }
];

// Add at least 5 more jobs with expanded information
const additionalJobs: JobListing[] = [
  {
    id: "job-7",
    title: "Especialista en Geomecánica",
    company: "GeoAnalytics",
    companyId: "comp-5",
    location: "Cusco, Perú",
    type: "Tiempo completo",
    category: "engineering",
    experienceLevel: "Mid",
    description: "Empresa líder en análisis geológico busca Especialista en Geomecánica para evaluación de estabilidad de taludes y diseño de sistemas de soporte en proyectos mineros.",
    responsibilities: [
      "Realizar caracterizaciones geomecánicas del macizo rocoso",
      "Diseñar sistemas de sostenimiento para labores mineras",
      "Modelar y analizar la estabilidad de taludes",
      "Elaborar informes técnicos especializados",
      "Participar en la planificación de proyectos mineros"
    ],
    requirements: [
      "Ingeniero Civil o Geólogo con especialización en geomecánica",
      "5 años de experiencia en proyectos mineros",
      "Conocimiento avanzado de software de modelamiento (FLAC3D, SLIDE, Phase2)",
      "Experiencia en clasificación de macizos rocosos",
      "Disponibilidad para trabajar en campo"
    ],
    requiredSkills: [
      "Modelamiento geomecánico",
      "Caracterización de macizos rocosos",
      "Diseño de sostenimiento",
      "Software especializado",
      "Análisis de estabilidad"
    ],
    benefits: [
      "Remuneración competitiva",
      "Plan de desarrollo profesional",
      "Participación en proyectos internacionales",
      "Capacitaciones especializadas",
      "Seguro de vida y salud"
    ],
    salary: "S/85,000 - S/100,000 anual",
    postedDate: "20/04/2025",
    applicationDeadline: "20/05/2025",
    applicationProcess: "El proceso incluye evaluación técnica, evaluación de campo y entrevistas con el equipo técnico.",
    interviewProcess: "Se realizará una prueba técnica de modelamiento y clasificación de macizos rocosos, seguida de entrevistas con especialistas senior.",
    contactEmail: "jobs@geoanalytics.com.pe",
    recommendedCourses: [
      {
        id: "course-geo1",
        title: "Modelamiento Avanzado en Geomecánica",
        description: "Técnicas de modelamiento numérico para análisis geomecánico."
      },
      {
        id: "course-geo2",
        title: "Estabilidad de Taludes en Minería",
        description: "Métodos de análisis y diseño para garantizar la estabilidad en operaciones mineras."
      }
    ]
  },
  {
    id: "job-8",
    title: "Analista de Datos para Minería",
    company: "TechMine Solutions",
    companyId: "comp-2",
    location: "Remoto, Perú",
    type: "Tiempo completo",
    category: "technical",
    experienceLevel: "Mid",
    description: "Buscamos un Analista de Datos especializado en minería para transformar datos operativos en insights accionables que mejoren la toma de decisiones y optimicen procesos.",
    responsibilities: [
      "Recopilar y procesar grandes volúmenes de datos de operaciones mineras",
      "Desarrollar dashboards interactivos para visualización de KPIs",
      "Identificar patrones y tendencias para optimizar procesos",
      "Colaborar con equipos de operaciones para implementar mejoras basadas en datos",
      "Crear modelos predictivos para mantenimiento y producción"
    ],
    requirements: [
      "Formación en Ingeniería, Estadística, Informática o afines",
      "3+ años de experiencia en análisis de datos, preferiblemente en minería",
      "Dominio de Python, R o herramientas similares",
      "Experiencia con bases de datos SQL y NoSQL",
      "Conocimiento de herramientas de BI (Power BI, Tableau)"
    ],
    requiredSkills: [
      "Python",
      "SQL",
      "Power BI/Tableau",
      "Machine Learning",
      "Estadística aplicada",
      "Minería de datos"
    ],
    benefits: [
      "Trabajo 100% remoto",
      "Horario flexible",
      "Equipamiento de última generación",
      "Capacitaciones continuas",
      "Bonos por desempeño"
    ],
    salary: "S/70,000 - S/90,000 anual",
    postedDate: "03/05/2025",
    recommendedCourses: [
      {
        id: "course-data1",
        title: "Análisis de Big Data para Minería",
        description: "Técnicas avanzadas para procesar y analizar grandes volúmenes de datos mineros."
      },
      {
        id: "course-data2",
        title: "Visualización de Datos para Operaciones Mineras",
        description: "Creación de dashboards efectivos para monitoreo de KPIs en minería."
      }
    ]
  },
  {
    id: "job-9",
    title: "Especialista en Sostenibilidad Minera",
    company: "EnviroMine Consulting",
    companyId: "comp-6",
    location: "Lima, Perú",
    type: "Tiempo completo",
    category: "management",
    experienceLevel: "Senior",
    description: "Empresa consultora especializada busca Especialista en Sostenibilidad para liderar iniciativas que aseguren operaciones mineras responsables con el medio ambiente y comunidades.",
    responsibilities: [
      "Desarrollar e implementar políticas de sostenibilidad para proyectos mineros",
      "Coordinar evaluaciones de impacto ambiental y social",
      "Gestionar relaciones con comunidades y grupos de interés",
      "Asegurar el cumplimiento de normativas ambientales",
      "Liderar programas de responsabilidad social empresarial"
    ],
    requirements: [
      "Formación en Ingeniería Ambiental, Gestión Ambiental o afines",
      "7+ años en sostenibilidad, preferiblemente en industria minera",
      "Experiencia en evaluación de impacto ambiental",
      "Conocimiento profundo de normativa ambiental nacional e internacional",
      "Habilidades de comunicación y negociación"
    ],
    requiredSkills: [
      "Gestión ambiental",
      "Relaciones comunitarias",
      "Sostenibilidad corporativa",
      "Evaluación de impacto",
      "Normativa ambiental",
      "Mediación de conflictos"
    ],
    benefits: [
      "Salario competitivo",
      "Desarrollo profesional internacional",
      "Posibilidad de trabajo híbrido",
      "Seguro médico completo",
      "Bonos por objetivos"
    ],
    salary: "S/110,000 - S/140,000 anual",
    postedDate: "28/04/2025",
    applicationDeadline: "28/05/2025",
    contactEmail: "careers@enviromine.com",
    recommendedCourses: [
      {
        id: "course-env1",
        title: "Minería Sostenible y Responsable",
        description: "Estrategias para implementar prácticas mineras sostenibles y socialmente responsables."
      },
      {
        id: "course-env2",
        title: "Gestión de Conflictos Socioambientales",
        description: "Técnicas de mediación y resolución de conflictos en proyectos mineros."
      }
    ]
  },
  {
    id: "job-10",
    title: "Supervisor de Seguridad Minera",
    company: "SafetyFirst Mining",
    companyId: "comp-4",
    location: "Arequipa, Perú",
    type: "Tiempo completo",
    category: "safety",
    experienceLevel: "Mid",
    description: "Empresa especializada en seguridad minera busca Supervisor para implementar y mantener sistemas de gestión de seguridad en operaciones mineras, con enfoque en prevención de accidentes.",
    responsibilities: [
      "Supervisar el cumplimiento de protocolos de seguridad",
      "Capacitar al personal en prevención de riesgos",
      "Investigar incidentes y accidentes",
      "Implementar mejoras en sistemas de gestión de seguridad",
      "Realizar inspecciones y auditorías periódicas"
    ],
    requirements: [
      "Ingeniero de Minas, Industrial o especialidad afín",
      "5+ años en seguridad minera",
      "Certificación en sistemas de gestión de seguridad",
      "Conocimiento de normativas nacionales e internacionales",
      "Experiencia en capacitación y gestión de equipos"
    ],
    requiredSkills: [
      "Sistema IPERC",
      "Investigación de accidentes",
      "ISO 45001",
      "Gestión de riesgos",
      "Capacitación en seguridad",
      "Auditorías de seguridad"
    ],
    benefits: [
      "Remuneración atractiva",
      "Seguro de accidentes complementario",
      "Capacitaciones internacionales",
      "Bonos por reducción de accidentes",
      "Plan de carrera"
    ],
    salary: "S/80,000 - S/95,000 anual",
    postedDate: "05/05/2025",
    applicationProcess: "El proceso incluye pruebas técnicas sobre normativa de seguridad, entrevistas y un caso práctico de resolución de problemas.",
    recommendedCourses: [
      {
        id: "course-safety1",
        title: "Sistemas Integrados de Gestión de Seguridad",
        description: "Implementación efectiva de sistemas de seguridad en minería."
      },
      {
        id: "course-safety2",
        title: "Prevención y Gestión de Emergencias en Minería",
        description: "Protocolos avanzados para respuesta a emergencias en entornos mineros."
      }
    ]
  },
  {
    id: "job-11",
    title: "Ingeniero de Proyectos Civiles",
    company: "Ingeniería & Construcción S.A.",
    companyId: "comp-3",
    location: "Lima con viajes a provincias, Perú",
    type: "Tiempo completo",
    category: "engineering",
    experienceLevel: "Mid-Senior",
    description: "Se busca Ingeniero Civil con experiencia en proyectos mineros para liderar el diseño y ejecución de infraestructura para operaciones mineras en diferentes regiones del país.",
    responsibilities: [
      "Diseñar y supervisar la construcción de infraestructura minera",
      "Gestionar proyectos de construcción, desde la planificación hasta la entrega",
      "Coordinar con equipos multidisciplinarios",
      "Asegurar cumplimiento de especificaciones técnicas y normativas",
      "Optimizar procesos constructivos y controlar costos"
    ],
    requirements: [
      "Ingeniero Civil colegiado",
      "6+ años de experiencia en proyectos de construcción para minería",
      "Conocimiento de software AutoCAD, Civil 3D, MS Project",
      "Experiencia en gestión de contratos y presupuestos",
      "Disponibilidad para viajar frecuentemente"
    ],
    requiredSkills: [
      "Diseño de infraestructura",
      "Gestión de proyectos",
      "AutoCAD/Civil 3D",
      "Control de costos",
      "Licitaciones",
      "Supervisión de obras"
    ],
    benefits: [
      "Salario competitivo",
      "Bonos por cumplimiento de proyectos",
      "Seguro de vida y salud",
      "Plan de desarrollo profesional",
      "Asignación por viajes"
    ],
    salary: "S/90,000 - S/120,000 anual",
    postedDate: "25/04/2025",
    applicationDeadline: "25/05/2025",
    interviewProcess: "El proceso incluye evaluación de portafolio de proyectos, evaluaciones técnicas y entrevistas con equipo directivo.",
    contactEmail: "rrhh@icsa.com.pe",
    recommendedCourses: [
      {
        id: "course-civil1",
        title: "Diseño de Infraestructura para Minería",
        description: "Principios y técnicas para el diseño óptimo de instalaciones mineras."
      },
      {
        id: "course-civil2",
        title: "Gestión Avanzada de Proyectos de Construcción",
        description: "Metodologías modernas para administrar proyectos constructivos en minería."
      }
    ]
  },
  {
    id: "job-12",
    title: "Metalurgista Senior",
    company: "Minera Perú Copper",
    companyId: "comp-1",
    location: "Cusco, Perú",
    type: "Tiempo completo",
    category: "mining",
    experienceLevel: "Senior",
    description: "Importante compañía minera busca Metalurgista Senior para optimizar procesos de procesamiento de minerales y recuperación de metales, enfocado en aumentar eficiencia y reducir costos operativos.",
    responsibilities: [
      "Dirigir la optimización de procesos metalúrgicos",
      "Desarrollar e implementar mejoras en recuperación de minerales",
      "Supervisar pruebas piloto de nuevas tecnologías",
      "Capacitar equipos técnicos",
      "Generar reportes técnicos para la gerencia"
    ],
    requirements: [
      "Ingeniero Metalúrgico, Químico o afines",
      "8+ años de experiencia en plantas concentradoras",
      "Experiencia en procesos de flotación y lixiviación",
      "Conocimientos avanzados en balance metalúrgico",
      "Capacidad de liderazgo y gestión de equipos"
    ],
    requiredSkills: [
      "Flotación de minerales",
      "Hidrometalurgia",
      "Control de procesos",
      "Balance metalúrgico",
      "Manejo de reactivos",
      "Simulación de procesos"
    ],
    benefits: [
      "Salario superior al mercado",
      "Sistema de bonos por resultados",
      "Régimen atractivo de trabajo",
      "Vivienda en campamento de primer nivel",
      "Capacitación internacional"
    ],
    salary: "S/130,000 - S/160,000 anual",
    postedDate: "01/05/2025",
    applicationDeadline: "01/06/2025",
    applicationProcess: "El proceso incluye evaluación técnica, pruebas de conocimiento metalúrgico y entrevistas con la gerencia de operaciones.",
    interviewProcess: "Las entrevistas se realizan en tres fases: evaluación de conocimientos técnicos, evaluación práctica con casos de estudio, y entrevista final con gerencia.",
    contactEmail: "careers@perucopper.com",
    recommendedCourses: [
      {
        id: "course-metal1",
        title: "Optimización de Procesos Metalúrgicos",
        description: "Técnicas avanzadas para maximizar recuperación y reducir costos operativos."
      },
      {
        id: "course-metal2",
        title: "Nuevas Tecnologías en Procesamiento de Minerales",
        description: "Innovaciones tecnológicas para el procesamiento eficiente de minerales."
      }
    ]
  }
];

// Update marketTrends to include new data properties
export const marketTrends: MarketTrend = {
  skillsDemand: [
    { name: "Automatización", demand: 85, growth: 12 },
    { name: "Análisis de datos", demand: 78, growth: 15 },
    { name: "Gestión ambiental", demand: 72, growth: 8 },
    { name: "Modelado 3D", demand: 65, growth: 10 },
    { name: "Seguridad ocupacional", demand: 80, growth: 5 },
    { name: "Metalurgia", demand: 70, growth: 3 },
    { name: "Geología", demand: 75, growth: 4 }
  ],
  jobsBySector: [
    { name: "Minería", value: 35 },
    { name: "Ingeniería", value: 25 },
    { name: "Gestión", value: 15 },
    { name: "Seguridad", value: 10 },
    { name: "Ambiental", value: 15 }
  ],
  salaryTrend: [
    { year: "2020", engineering: 60000, mining: 65000, management: 75000 },
    { year: "2021", engineering: 63000, mining: 68000, management: 78000 },
    { year: "2022", engineering: 67000, mining: 72000, management: 83000 },
    { year: "2023", engineering: 72000, mining: 78000, management: 89000 },
    { year: "2024", engineering: 78000, mining: 85000, management: 9
