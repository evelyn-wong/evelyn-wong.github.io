export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLanguage = "es";

export const ui = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.contact": "Contacto",
    "nav.language": "Idioma",

    // Hero
    "hero.title.line1": "Diseño",
    "hero.title.line2": "arquitectónico",
    "hero.title.highlight": "innovador",
    "hero.tagline":
      "Arquitecta especializada en diseño integral, planificación espacial y soluciones constructivas de calidad, con experiencia adicional en administración de proyectos, gestión inmobiliaria y coordinación logística.",
    "hero.cta": "Ver portafolio",

    // Service
    "service.title": "Servicios profesionales de diseño arquitectónico",
    "service.projects": "Proyectos",
    "service.satisfaction": "Satisfacción",
    "service.experience": "Experiencia",
    "service.stats.projects": "30+",
    "service.stats.satisfaction": "98%",
    "service.stats.experience": "3+ años",
    "service.design.name": "Diseño Arquitectónico",
    "service.design.desc":
      "Proyectos residenciales, comerciales y educativos con enfoque integral",
    "service.planning.name": "Planificación Espacial",
    "service.planning.desc":
      "Optimización de espacios y funcionalidad en proyectos de cualquier escala",
    "service.3d.name": "Modelos 3D y Visualización",
    "service.3d.desc": "Renderizados profesionales para presentación de proyectos",
    "service.docs.name": "Documentación Técnica",
    "service.docs.desc":
      "Planos detallados, especificaciones y detalles constructivos",
    "service.admin.name": "Gestión Administrativa & Inmobiliaria",
    "service.admin.desc":
      "Coordinación de proveedores, facturación, seguimiento a contratos de arrendamiento y optimización de procesos administrativos",

    // Tools
    "tools.title": "Herramientas",

    // Reviews
    "reviews.title": "Esto es lo que mis clientes opinan de mí",
    "reviews.jonathan.comment":
      "Evelyn ha sido una ayuda invaluable en la planeación de la remodelación de mi proyecto de vivienda. Se encargó de la gestión de oferta de inmuebles, el manejo de investigación y seguimiento a contratos de arrendamiento, así como de la cobranza y el seguimiento administrativo de la renta de los inmuebles, entre muchas otras tareas. Es una persona orientada a resultados y de total confianza.",
    "reviews.jonathan.name": "Jonathan Sandoval",
    "reviews.jonathan.role": "Ingeniero de Software Sr.",

    // CallToAction
    "cta.title": "¿Listo para tu próximo proyecto arquitectónico?",
    "cta.description":
      "Contacta conmigo para discutir tus ideas y crear soluciones arquitectónicas innovadoras y funcionales",
    "cta.button": "Contacta conmigo",

    // Footer
    "footer.tagline": "Evelyn",
    "footer.rights": "© 2024 Evelyn Wong. Todos los derechos reservados.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.contact": "Contact",
    "nav.language": "Language",

    // Hero
    "hero.title.line1": "Innovative",
    "hero.title.line2": "Architectural",
    "hero.title.highlight": "Design",
    "hero.tagline":
      "Architect specializing in comprehensive design, spatial planning and high-quality construction solutions, with additional experience in project administration, real estate management and logistics coordination.",
    "hero.cta": "View portfolio",

    // Service
    "service.title":
      "Professional architectural design and administrative services",
    "service.projects": "Projects",
    "service.satisfaction": "Satisfaction",
    "service.experience": "Experience",
    "service.stats.projects": "30+",
    "service.stats.satisfaction": "98%",
    "service.stats.experience": "3+ years",
    "service.design.name": "Architectural Design",
    "service.design.desc":
      "Residential, commercial and educational projects with comprehensive approach",
    "service.planning.name": "Spatial Planning",
    "service.planning.desc":
      "Space optimization and functionality in projects of any scale",
    "service.3d.name": "3D Models & Visualization",
    "service.3d.desc": "Professional renderings for project presentation",
    "service.docs.name": "Technical Documentation",
    "service.docs.desc":
      "Detailed plans, specifications and construction details",
    "service.admin.name": "Administrative & Real Estate Management",
    "service.admin.desc":
      "Supplier coordination, billing, lease agreement follow-up and process optimization",

    // Tools
    "tools.title": "Tools",

    // Reviews
    "reviews.title": "Here's what my clients are saying about my work",
    "reviews.jonathan.comment":
      "Evelyn was an invaluable help in planning the remodeling of my housing project. She handled real estate listings, research and lease-agreement follow-up, as well as billing and administrative follow-up for property rentals, among many other tasks. She is a results-driven person and completely trustworthy.",
    "reviews.jonathan.name": "Jonathan Sandoval",
    "reviews.jonathan.role": "Senior Software Engineer",

    // CallToAction
    "cta.title": "Ready for your next architectural project?",
    "cta.description":
      "Contact me to discuss your ideas and create innovative and functional architectural solutions",
    "cta.button": "Get in touch",

    // Footer
    "footer.tagline": "Evelyn",
    "footer.rights": "© 2024 Evelyn Wong. All rights reserved.",
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLanguage]): string {
    return ui[lang][key] || ui[defaultLanguage][key] || key;
  };
}
