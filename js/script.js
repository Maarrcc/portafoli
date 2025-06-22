// Language translations
const translations = {
  es: {
    name: "Marc",
    title: "Desarrollador Web Junior",
    subtitle:
      "Especializado en PHP y JavaScript",
    "nav-about": "Sobre mí",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    "about-title": "Sobre mí",
    "about-subtitle":
      "Desarrollador junior apasionado por crear soluciones tecnológicas innovadoras",
    "about-text1":
      "Soy un desarrollador web junior especializado en PHP y JavaScript. Recientemente he completado mis estudios de Desarrollo de Aplicaciones Web (DAW), donde he adquirido una sólida formación en tecnologías tanto de frontend como de backend.",
    "about-text2":
      "Mi experiencia abarca desde el desarrollo con PHP y Laravel hasta la creación de interfaces dinámicas con JavaScript. Me especializo en el desarrollo de sistemas de gestión complejos, como mi proyecto destacado EduPlanner, un sistema integral de gestión de horarios académicos.",
    "backend-desc": "PHP, Laravel, MySQL, APIs RESTful",
    "frontend-desc": "JavaScript, HTML5, CSS3, Bootstrap",
    "skills-title": "Habilidades Técnicas",
    "skills-subtitle": "Tecnologías y herramientas que domino",
    "skill-backend": "Desarrollo Backend",
    "skill-frontend": "Desarrollo Frontend",
    "skill-database": "Base de Datos",
    "skill-tools": "Herramientas",
    "projects-title": "Proyectos Destacados",
    "projects-subtitle":
      "Aplicaciones reales desarrolladas durante mi formación",
    "project-subtitle": "Sistema integral de gestión de horarios académicos",
    "project-desc-title": "Descripción del Proyecto",
    "project-description":
      "EduPlanner es un sistema completo de gestión de horarios académicos desarrollado como proyecto final de DAW. La aplicación permite a instituciones educativas gestionar de manera eficiente horarios, aulas, profesores y estudiantes, con una interfaz intuitiva y funcionalidades avanzadas.",
    "project-features-title": "Características Principales",
    "project-features": [
      "Gestión completa de horarios académicos",
      "Sistema de reservas de aulas",
      "Panel de administración avanzado",
      "Interfaz responsive y moderna",
      "Sistema de notificaciones",
      "Reportes y estadísticas",
    ],
    "project-tech-title": "Tecnologías Utilizadas",
    "project-challenges-title": "Desafíos Superados",
    "project-challenges": [
      "Algoritmos complejos de asignación de horarios",
      "Gestión de conflictos de horarios",
      "Optimización de consultas de base de datos",
      "Implementación de sistema de permisos",
      "Diseño responsive para múltiples dispositivos",
    ],
    "view-demo": "Ver Demo",
    "view-code": "Ver Código",
    "contact-title": "¿Trabajamos juntos?",
    "contact-subtitle":
      "Estoy disponible para nuevos proyectos y oportunidades laborales. ¡No dudes en contactarme!",
    location: "Barcelona, España",
  },
  ca: {
    name: "Marc",
    title: "Desenvolupador Web Júnior",
    subtitle:
      "Especialitzat en PHP i JavaScript",
    "nav-about": "Sobre mi",
    "nav-skills": "Habilitats",
    "nav-projects": "Projectes",
    "nav-contact": "Contacte",
    "about-title": "Sobre mi",
    "about-subtitle":
      "Desenvolupador junior apassionat per crear solucions tecnològiques innovadores",
    "about-text1":
      "Soc un desenvolupador web junior especialitzat en PHP i JavaScript. Recentment he completat els meus estudis de Desenvolupament d'Aplicacions Web (DAW), on he adquirit una sòlida formació en tecnologies tant de frontend com de backend.",
    "about-text2":
      "La meva experiència abasta des del desenvolupament amb PHP i Laravel fins a la creació d'interfícies dinàmiques amb JavaScript. M'especialitzo en el desenvolupament de sistemes de gestió complexos, com el meu projecte destacat EduPlanner, un sistema integral de gestió d'horaris acadèmics.",
    "backend-desc": "PHP, Laravel, MySQL, APIs RESTful",
    "frontend-desc": "JavaScript, HTML5, CSS3, Bootstrap",
    "skills-title": "Habilitats Tècniques",
    "skills-subtitle": "Tecnologies i eines que domino",
    "skill-backend": "Desenvolupament Backend",
    "skill-frontend": "Desenvolupament Frontend",
    "skill-database": "Base de Dades",
    "skill-tools": "Eines",
    "projects-title": "Projectes Destacats",
    "projects-subtitle":
      "Aplicacions reals desenvolupades durant la meva formació",
    "project-subtitle": "Sistema integral de gestió d'horaris acadèmics",
    "project-desc-title": "Descripció del Projecte",
    "project-description":
      "EduPlanner és un sistema complet de gestió d'horaris acadèmics desenvolupat com a projecte final de DAW. L'aplicació permet a institucions educatives gestionar de manera eficient horaris, aules, professors i estudiants, amb una interfície intuïtiva i funcionalitats avançades.",
    "project-features-title": "Característiques Principals",
    "project-features": [
      "Gestió completa d'horaris acadèmics",
      "Sistema de reserves d'aules",
      "Panell d'administració avançat",
      "Interfície responsive i moderna",
      "Sistema de notificacions",
      "Informes i estadístiques",
    ],
    "project-tech-title": "Tecnologies Utilitzades",
    "project-challenges-title": "Desafiaments Superats",
    "project-challenges": [
      "Algoritmes complexos d'assignació d'horaris",
      "Gestió de conflictes d'horaris",
      "Optimització de consultes de base de dades",
      "Implementació de sistema de permisos",
      "Disseny responsive per a múltiples dispositius",
    ],
    "view-demo": "Veure Demo",
    "view-code": "Veure Codi",
    "contact-title": "¿Treballem junts?",
    "contact-subtitle":
      "Estic disponible per a nous projectes i oportunitats laborals. ¡No dubtis a contactar-me!",
    location: "Barcelona, Espanya",
  },
};

let currentLanguage = "es";

function changeLanguage(lang) {
  currentLanguage = lang;

  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add("active");

  // Update content
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      if (Array.isArray(translations[lang][key])) {
        // Handle arrays (for lists)
        element.innerHTML = translations[lang][key]
          .map((item) => `<li>${item}</li>`)
          .join("");
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update document language
  document.documentElement.lang = lang;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
}, observerOptions);

// Observe sections for animation
document
  .querySelectorAll(".section, .skill-card, .project-featured")
  .forEach((el) => {
    observer.observe(el);
  });

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  changeLanguage("es");
});
