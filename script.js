// script.js

const btnLang = document.getElementById('btn-lang');
let isEnglish = true; // estado actual del idioma

// traducciones para cambiar el texto
const translations = {
  es: {
    'nav-inicio': 'Inicio',
    'nav-sobre-mi': 'Sobre mí',
    'nav-proyectos': 'Proyectos',
    'nav-skills': 'Habilidades',
    'nav-contacto': 'Contacto',
    'inicio-title': 'Juan Martín López',
    'inicio-subtitle': 'Desarrollador de Software | Web & Escritorio | Bases de Datos',
    'about-title': 'Sobre mí',
    'about-p1': `Actualmente soy estudiante de Técnico en Programación, desarrollando activamente mis habilidades en desarrollo de software.
      Aunque aún no tengo experiencia profesional, he aplicado mis conocimientos ayudando en la gestión y análisis de datos
      directamente desde bases de datos en el negocio familiar.`,
    'about-p2': `Me apasiona aprender y mejorar continuamente mis habilidades en desarrollo web, aplicaciones de escritorio,
      y gestión de bases de datos. Estoy entusiasmado por asumir nuevos desafíos y aportar ideas y soluciones frescas.`,
    'skills-title': 'Habilidades',
    'projects-title': 'Proyectos',
   
    'contact-title': 'Contacto',
    'contact-p1': 'Podés escribirme a <a href="mailto:jml.desarrollador@gmail.com">JML.DESARROLLADOR@GMAIL.COM</a>',
    'contact-p2': `<a href="https://github.com/tuusuario" target="_blank">GitHub</a> |
      <a href="https://linkedin.com/in/tuusuario" target="_blank">LinkedIn</a>`,
    'btn-lang': 'EN'
  },

  en: {
    'nav-inicio': 'Home',
    'nav-sobre-mi': 'About Me',
    'nav-proyectos': 'Projects',
    'nav-skills': 'Skills',
    'nav-contacto': 'Contact',
    'inicio-title': 'Juan Martín López',
    'inicio-subtitle': 'Software Developer | Web & Desktop | Databases',
    'about-title': 'About Me',
    'about-p1': `I am currently a student of Programming Technician, actively developing my skills in software development.
      Although I do not have professional experience yet, I have applied my knowledge by assisting in managing and analyzing data
      directly from databases in my family business.`,
    'about-p2': `I am passionate about learning and continuously improving my abilities in web development, desktop applications,
      and database management. I am eager to take on new challenges and contribute with fresh ideas and solutions.`,
    'skills-title': 'Skills',
    'projects-title': 'Projects',
    
    'contact-title': 'Contact',
    'contact-p1': 'You can write to me at <a href="mailto:jml.desarrollador@gmail.com">JML.DESARROLLADOR@GMAIL.COM</a>',
    'contact-p2': `<a href="https://github.com/tuusuario" target="_blank">GitHub</a> |
      <a href="https://linkedin.com/in/tuusuario" target="_blank">LinkedIn</a>`,
    'btn-lang': 'ES'
  }
};

btnLang.addEventListener('click', () => {
  isEnglish = !isEnglish;
  const lang = isEnglish ? 'en' : 'es';

  // recorre todas las keys de traducción
  for (const id in translations[lang]) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = translations[lang][id];
    }
  }

  // cambia el texto del botón
  btnLang.textContent = translations[lang]['btn-lang'];
});
