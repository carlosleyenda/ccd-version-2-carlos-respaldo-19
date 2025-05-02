
import { JobListing, MarketTrend } from "./types";

export const jobListings: JobListing[] = [
  {
    id: "job-001",
    title: "Ingeniero de Minas Senior",
    company: "Minera Los Andes S.A.",
    location: "Arequipa, Perú",
    type: "Tiempo Completo",
    category: "mining",
    description: "Buscamos un Ingeniero de Minas Senior con experiencia en planificación y operaciones mineras para liderar proyectos de extracción en nuestra unidad principal.",
    responsibilities: [
      "Liderar la planificación y ejecución de operaciones mineras",
      "Optimizar procesos de extracción y reducir costos operativos",
      "Supervisar el cumplimiento de normas de seguridad y protocolos ambientales",
      "Gestionar equipos multidisciplinarios de trabajo",
      "Elaborar reportes técnicos y presentar resultados a la gerencia"
    ],
    requirements: [
      "Licenciatura en Ingeniería de Minas",
      "Mínimo 5 años de experiencia en operaciones mineras",
      "Conocimientos avanzados en planificación y gestión de minas",
      "Experiencia en uso de software especializado (Vulcan, MineSight o similar)",
      "Liderazgo y habilidades de gestión de equipos"
    ],
    requiredSkills: ["Planificación Minera", "Vulcan", "Gestión de Proyectos", "Seguridad Minera", "Optimización de Procesos"],
    benefits: [
      "Salario competitivo acorde a experiencia",
      "Seguro médico privado para ti y tu familia",
      "Bono anual por cumplimiento de objetivos",
      "Programa de desarrollo profesional",
      "14 días adicionales de vacaciones al año"
    ],
    salary: "S/. 12,000 - S/. 15,000 mensuales",
    postedDate: "Hace 3 días",
    recommendedCourses: [
      {
        id: "course-112",
        title: "Planificación Avanzada de Minas",
        description: "Domina las técnicas modernas de planificación de minas utilizando software especializado."
      },
      {
        id: "course-215",
        title: "Liderazgo en Operaciones Mineras",
        description: "Desarrolla habilidades de liderazgo en contextos mineros de alta complejidad."
      }
    ]
  },
  {
    id: "job-002",
    title: "Analista de Seguridad Minera",
    company: "Consorcio Minero del Sur",
    location: "Lima, Perú (Híbrido)",
    type: "Tiempo Completo",
    category: "safety",
    description: "Se requiere analista de seguridad para implementar y supervisar protocolos de seguridad en operaciones mineras según normativa vigente.",
    responsibilities: [
      "Implementar políticas y procedimientos de seguridad minera",
      "Realizar inspecciones y auditorías de seguridad periódicas",
      "Investigar incidentes y accidentes",
      "Capacitar al personal en normativas y protocolos de seguridad",
      "Elaborar informes de cumplimiento para entidades reguladoras"
    ],
    requirements: [
      "Licenciatura en Ingeniería de Minas o Seguridad Industrial",
      "Certificación en Seguridad Minera",
      "Mínimo 3 años de experiencia en seguridad minera",
      "Conocimiento actualizado de normativas nacionales e internacionales",
      "Experiencia en gestión de riesgos y prevención de accidentes"
    ],
    requiredSkills: ["Normativa OSHA", "Gestión de Riesgos", "Investigación de Accidentes", "ISO 45001", "Capacitación"],
    benefits: [
      "Salario competitivo más bonificaciones por resultados",
      "Horario flexible y modalidad híbrida",
      "Seguro de vida y accidentes laborales",
      "Capacitación constante en normas internacionales",
      "Plan de carrera dentro de la compañía"
    ],
    salary: "S/. 7,000 - S/. 9,000 mensuales",
    postedDate: "Hace 1 semana",
    recommendedCourses: [
      {
        id: "course-118",
        title: "Normativas Internacionales en Seguridad Minera",
        description: "Actualización completa en estándares OSHA, ISO 45001 y otras normativas clave."
      },
      {
        id: "course-155",
        title: "Gestión Avanzada de Riesgos en Minería",
        description: "Metodologías modernas para la identificación, evaluación y control de riesgos."
      }
    ]
  },
  {
    id: "job-003",
    title: "Gerente de Proyecto Minero",
    company: "Global Mining Group",
    location: "Cusco, Perú",
    type: "Tiempo Completo",
    category: "management",
    description: "Buscamos un Gerente de Proyecto para liderar la implementación y operación de un nuevo proyecto de extracción, garantizando el cumplimiento de los objetivos técnicos, financieros y de sostenibilidad.",
    responsibilities: [
      "Dirigir la planificación e implementación integral del proyecto minero",
      "Gestionar presupuestos, cronogramas y recursos asignados",
      "Coordinar equipos multidisciplinarios (técnicos, ambientales, comunitarios)",
      "Supervisar el cumplimiento de estándares técnicos y ambientales",
      "Reportar avances y resultados a la alta dirección y stakeholders"
    ],
    requirements: [
      "Maestría en Ingeniería de Minas, Gestión de Proyectos o afines",
      "Certificación PMP o equivalente",
      "Mínimo 8 años de experiencia en proyectos mineros de gran escala",
      "Experiencia demostrada en gestión de presupuestos superiores a $20M",
      "Habilidades avanzadas de negociación y comunicación"
    ],
    requiredSkills: ["Gestión de Proyectos", "Análisis Financiero", "MS Project", "Liderazgo", "Negociación"],
    benefits: [
      "Paquete de compensación competitivo a nivel internacional",
      "Bono por desempeño vinculado a objetivos del proyecto",
      "Programa de desarrollo ejecutivo internacional",
      "Seguro médico premium internacional",
      "Plan de jubilación complementario"
    ],
    salary: "S/. 20,000 - S/. 25,000 mensuales",
    postedDate: "Hace 5 días",
    recommendedCourses: [
      {
        id: "course-301",
        title: "Gestión Avanzada de Proyectos Mineros",
        description: "Metodologías y buenas prácticas para la dirección integral de proyectos mineros."
      },
      {
        id: "course-312",
        title: "Finanzas para Gerentes de Proyectos",
        description: "Herramientas financieras para la toma de decisiones estratégicas en proyectos extractivos."
      }
    ]
  },
  {
    id: "job-004",
    title: "Ingeniero de Procesos Metalúrgicos",
    company: "Metaltech Industries",
    location: "Piura, Perú",
    type: "Tiempo Completo",
    category: "engineering",
    description: "Se requiere ingeniero especializado en procesos metalúrgicos para optimizar las operaciones de procesamiento y refinación de minerales en planta.",
    responsibilities: [
      "Diseñar y optimizar procesos metalúrgicos para maximizar la recuperación de minerales",
      "Implementar mejoras en los circuitos de flotación, lixiviación y electrodeposición",
      "Realizar pruebas metalúrgicas y analizar resultados",
      "Elaborar balances metalúrgicos y reportes técnicos",
      "Supervisar el cumplimiento de parámetros operativos en planta"
    ],
    requirements: [
      "Ingeniería Metalúrgica, Química o afines",
      "Mínimo 4 años de experiencia en plantas concentradoras",
      "Conocimientos avanzados en procesos de flotación y lixiviación",
      "Experiencia en uso de equipos de laboratorio metalúrgico",
      "Manejo de software especializado (JKSimMet, METSIM o similar)"
    ],
    requiredSkills: ["Procesos de Flotación", "Hidrometalurgia", "Balance Metalúrgico", "JKSimMet", "Diseño de Procesos"],
    benefits: [
      "Salario competitivo más bonificación por rendimiento",
      "Régimen atractivo de trabajo (14x7 o similar)",
      "Alojamiento y alimentación durante el régimen",
      "Programa de entrenamiento internacional",
      "Seguro médico completo"
    ],
    salary: "S/. 8,000 - S/. 11,000 mensuales",
    postedDate: "Hace 2 semanas",
    recommendedCourses: [
      {
        id: "course-205",
        title: "Optimización de Circuitos de Flotación",
        description: "Técnicas avanzadas para incrementar la recuperación en procesos de flotación mineral."
      },
      {
        id: "course-217",
        title: "Modelamiento de Procesos con JKSimMet",
        description: "Aplicaciones prácticas del software JKSimMet para la simulación de plantas concentradoras."
      }
    ]
  },
  {
    id: "job-005",
    title: "Especialista en Geomecánica",
    company: "Andean Mining Consultants",
    location: "Remoto",
    type: "Tiempo Completo",
    category: "technical",
    description: "Buscamos un especialista en geomecánica para realizar análisis, modelamiento y diseño de excavaciones subterráneas y a tajo abierto, asegurando la estabilidad y seguridad de las operaciones mineras.",
    responsibilities: [
      "Realizar caracterizaciones geomecánicas del macizo rocoso",
      "Elaborar modelos geomecánicos utilizando software especializado",
      "Diseñar sistemas de sostenimiento para minas subterráneas",
      "Evaluar estabilidad de taludes en operaciones a tajo abierto",
      "Elaborar informes técnicos y recomendaciones operativas"
    ],
    requirements: [
      "Maestría en Ingeniería Geotécnica o Geomecánica",
      "Mínimo 5 años de experiencia en proyectos mineros",
      "Dominio de software especializado (Phase2, DIPS, Slide, FLAC)",
      "Experiencia en investigaciones de campo y laboratorio",
      "Inglés avanzado, oral y escrito"
    ],
    requiredSkills: ["Modelamiento Geomecánico", "Phase2", "DIPS", "Análisis de Estabilidad", "RMR/Q/GSI"],
    benefits: [
      "Trabajo 100% remoto con horario flexible",
      "Salario competitivo en dólares",
      "Oportunidades de participación en proyectos internacionales",
      "Pago de certificaciones profesionales",
      "Programa de capacitación continua"
    ],
    salary: "USD 3,500 - USD 4,500 mensuales",
    postedDate: "Hace 2 días",
    recommendedCourses: [
      {
        id: "course-255",
        title: "Modelamiento Avanzado con RS2 (Phase2)",
        description: "Domina el uso de RS2 para la simulación numérica en proyectos geotécnicos complejos."
      },
      {
        id: "course-258",
        title: "Diseño Geomecánico para Minería Subterránea",
        description: "Metodologías modernas para el diseño de excavaciones subterráneas y sistemas de soporte."
      }
    ]
  },
  {
    id: "job-006",
    title: "Analista de Datos Mineros",
    company: "MineData Solutions",
    location: "Lima, Perú",
    type: "Tiempo Completo",
    category: "engineering",
    description: "Se requiere analista de datos para procesar e interpretar información operativa minera, desarrollando modelos predictivos que mejoren la eficiencia y reducción de costos.",
    responsibilities: [
      "Recopilar y procesar datos operativos de diversas fuentes mineras",
      "Desarrollar dashboards y visualizaciones para la toma de decisiones",
      "Implementar modelos predictivos para mantenimiento y optimización",
      "Analizar tendencias y patrones en datos de producción y equipos",
      "Presentar hallazgos y recomendaciones a equipos operativos"
    ],
    requirements: [
      "Licenciatura en Ingeniería, Estadística, Matemáticas o afines",
      "Experiencia mínima de 3 años en análisis de datos",
      "Dominio de Python, R o herramientas similares de análisis",
      "Conocimiento de SQL y bases de datos",
      "Experiencia con herramientas de visualización (Tableau, PowerBI)"
    ],
    requiredSkills: ["Python", "SQL", "Machine Learning", "Tableau", "PowerBI"],
    benefits: [
      "Salario competitivo en el sector tecnológico",
      "Modalidad híbrida (3 días remotos, 2 presenciales)",
      "Seguro médico privado",
      "Presupuesto anual para capacitación técnica",
      "Ambiente dinámico y startup con oportunidades de crecimiento"
    ],
    salary: "S/. 6,500 - S/. 8,500 mensuales",
    postedDate: "Hace 1 semana",
    recommendedCourses: [
      {
        id: "course-405",
        title: "Análisis Predictivo para Operaciones Mineras",
        description: "Aplicaciones prácticas de machine learning para la optimización de operaciones extractivas."
      },
      {
        id: "course-412",
        title: "Visualización de Datos Mineros con PowerBI",
        description: "Desarrollo de dashboards efectivos para el monitoreo de KPIs mineros."
      }
    ]
  }
];

export const marketTrends: MarketTrend = {
  skillsDemand: [
    { name: "Minería de Datos", demand: 85, growth: 32 },
    { name: "IA en Minería", demand: 78, growth: 45 },
    { name: "Gestión Ambiental", demand: 92, growth: 28 },
    { name: "Automatización", demand: 89, growth: 38 },
    { name: "Seguridad Minera", demand: 95, growth: 15 },
    { name: "Eficiencia Energética", demand: 82, growth: 24 }
  ],
  jobsBySector: [
    { name: "Minería", value: 42 },
    { name: "Ingeniería", value: 28 },
    { name: "Gestión", value: 15 },
    { name: "Técnico", value: 10 },
    { name: "Seguridad", value: 5 }
  ],
  salaryTrend: [
    { year: "2020", engineering: 7200, mining: 8500, management: 12000 },
    { year: "2021", engineering: 7500, mining: 9000, management: 13000 },
    { year: "2022", engineering: 8000, mining: 9800, management: 14000 },
    { year: "2023", engineering: 8500, mining: 10500, management: 15000 },
    { year: "2024", engineering: 9200, mining: 11200, management: 16000 },
    { year: "2025", engineering: 10000, mining: 12000, management: 17500 }
  ],
  growingSkills: [
    { name: "Análisis de Datos Mineros", growth: 45 },
    { name: "Automatización de Procesos", growth: 38 },
    { name: "Gestión de Sostenibilidad", growth: 35 },
    { name: "Minería Digital", growth: 32 },
    { name: "Eficiencia Energética", growth: 28 }
  ],
  decliningSkills: [
    { name: "Métodos Tradicionales de Extracción", growth: -18 },
    { name: "Operación Manual de Equipos", growth: -25 },
    { name: "Procesos No Optimizados", growth: -22 },
    { name: "Gestión No Integrada", growth: -15 },
    { name: "Métodos Analógicos", growth: -35 }
  ],
  recommendedCourses: [
    {
      id: "course-405",
      title: "Análisis de Datos para Minería",
      description: "Aprende a utilizar Python y herramientas de análisis para optimizar operaciones mineras.",
      demandGrowth: 45
    },
    {
      id: "course-318",
      title: "Automatización de Procesos Mineros",
      description: "Implementación de soluciones automatizadas para incrementar eficiencia y seguridad.",
      demandGrowth: 38
    },
    {
      id: "course-287",
      title: "Minería Sostenible y ESG",
      description: "Estrategias para implementar prácticas sostenibles alineadas con estándares ESG.",
      demandGrowth: 35
    },
    {
      id: "course-156",
      title: "Transformación Digital en Minería",
      description: "Implementación de tecnologías digitales para modernizar operaciones extractivas.",
      demandGrowth: 32
    },
    {
      id: "course-224",
      title: "Eficiencia Energética en Operaciones Mineras",
      description: "Metodologías para reducir consumo energético y optimizar recursos.",
      demandGrowth: 28
    },
    {
      id: "course-375",
      title: "Gestión Avanzada de Seguridad Minera",
      description: "Protocolos modernos para garantizar operaciones seguras y cumplimiento normativo.",
      demandGrowth: 24
    }
  ]
};
