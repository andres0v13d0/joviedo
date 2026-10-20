import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  es: {
    nav: {
      about: 'Perfil',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      name: 'Jonathan Andres Oviedo Chalacan',
      title: 'Ingeniero de Software | Desarrollador Full Stack',
      subtitle:
        'Desarrollo plataformas empresariales, sistemas ERP/POS y aplicaciones web y móviles con NestJS, React y TypeScript. Más de 2 años de experiencia continua, trabajando en remoto desde Colombia.',
      location: 'Colombia',
      downloadCV: 'Descargar CV (PDF)'
    },
    about: {
      title: 'Perfil',
      paragraphs: [
        'Ingeniero de Software con más de 2 años de experiencia continua en desarrollo full stack para plataformas empresariales y sistemas ERP/POS, además de pasantías en desarrollo web y automatización. Trabajo con JavaScript, TypeScript, PHP, Python, React, NestJS y bases de datos MySQL y PostgreSQL.',
        'Me manejo bien en entornos remotos y autónomos, corrigiendo errores, probando lo que construyo y siguiendo las guías y buenas prácticas del equipo. Me interesa la consultoría y la transformación digital de negocios.'
      ]
    },
    skills: {
      title: 'Habilidades técnicas',
      groups: [
        { name: 'Lenguajes', items: 'JavaScript, TypeScript, PHP, Python, C#, HTML5, CSS3' },
        { name: 'Frontend', items: 'React, React Native, Flutter, Tailwind CSS' },
        { name: 'Backend', items: 'NestJS, Node.js, Express, APIs RESTful, ASP.NET Core' },
        { name: 'Bases de datos', items: 'MySQL, PostgreSQL, SQL Server, MongoDB, Firebase' },
        { name: 'Cloud y herramientas', items: 'AWS (EC2, RDS, S3, CloudFront, Route53), Docker, CI/CD, Git, GitHub, Postman, Linux, WordPress' },
        { name: 'Idiomas', items: 'Español (nativo), Inglés (intermedio)' }
      ]
    },
    experience: {
      title: 'Experiencia',
      educationTitle: 'Educación',
      experiences: [
        {
          role: 'Ingeniero de Software | Full Stack Developer',
          company: 'Minymol S.A.S.',
          place: 'Cali, Colombia (remoto)',
          period: 'Sep 2024 – Actualidad',
          summary: 'Plataformas empresariales de comercio e inventario: Minymol (marketplace B2B), Flystock (ERP/POS) y aplicaciones móviles.',
          points: [
            'Desarrollo full stack con NestJS, TypeScript, React y JavaScript, en un equipo colaborativo con Git.',
            'APIs RESTful y lógica de negocio para control de inventario, facturación electrónica y gestión de usuarios.',
            'Detección y corrección de errores en backend y frontend; pruebas funcionales de los módulos con Postman.',
            'Optimización de consultas y estructuras de datos en MySQL y PostgreSQL.',
            'Interfaces web responsivas (HTML5, CSS3, Tailwind) y módulos administrativos para sistemas ERP/POS.',
            'Despliegue y mantenimiento de servicios en AWS (EC2, RDS, S3, CloudFront) y documentación técnica.'
          ]
        },
        {
          role: 'Pasante de Desarrollo Web',
          company: 'Escuela Superior Politécnica de Chimborazo',
          place: 'Riobamba, Ecuador (remoto)',
          period: 'Oct 2024 – Mar 2025',
          summary: '',
          points: [
            'Mantenimiento y optimización del sitio institucional en WordPress, con mejoras de rendimiento, estabilidad y experiencia de usuario.',
            'Corrección de errores y mejoras de navegación trabajando con PHP, HTML, CSS y JavaScript.'
          ]
        },
        {
          role: 'Pasante de Soluciones TI y Automatización',
          company: 'Ministerio de Inclusión Económica y Social',
          place: 'Riobamba, Ecuador',
          period: 'Abr 2024 – Jul 2024',
          summary: '',
          points: [
            'Automatización de procesos administrativos y generación de reportes.',
            'Organización y digitalización de información de varios departamentos.',
            'Mantenimiento preventivo y correctivo de equipos y capacitación al personal.'
          ]
        }
      ],
      education: [
        {
          title: 'Ingeniería de Software',
          school: 'Escuela Superior Politécnica de Chimborazo',
          period: 'May 2025',
          note: 'Tesis: BactoSim, aplicación web 3D para simular la interacción entre el bacteriófago M13 y su entorno.'
        },
        {
          title: 'Técnico en Programación de Aplicaciones para Dispositivos Móviles',
          school: 'SENA, Colombia',
          period: 'Dic 2025',
          note: ''
        }
      ]
    },
    projects: {
      title: 'Proyectos',
      productsTitle: 'Productos',
      academicTitle: 'Proyectos académicos',
      visit: 'Ver sitio',
      code: 'Código',
      technologies: 'Tecnologías',
      projectsList: [
        {
          id: 'flystock',
          group: 'product',
          title: 'Flystock',
          meta: 'Ecosistema ERP / POS · 2024 – actualidad',
          description:
            'Ecosistema de software para negocios colombianos: tienda online, catálogos digitales, POS en la nube e inventario y ERP para distribuidores. Participo en el desarrollo full stack: inventario, facturación electrónica, usuarios y módulos administrativos.',
          technologies: ['NestJS', 'TypeScript', 'React', 'PostgreSQL', 'MySQL', 'AWS'],
          liveUrl: 'https://flystock.com.co/',
          githubUrl: null,
          image: null
        },
        {
          id: 'oviedotech',
          group: 'product',
          title: 'OviedoTech SAS',
          meta: 'Empresa de software · Cali, Colombia',
          description:
            'Empresa de software que desarrolla herramientas comerciales para tiendas, proveedores y distribuidores en Colombia. Su marca principal es Flystock.',
          technologies: ['React', 'NestJS', 'AWS'],
          liveUrl: 'https://oviedotechs.com/',
          githubUrl: null,
          image: null
        },
        {
          id: 'minymol',
          group: 'product',
          title: 'Minymol',
          meta: 'Marketplace B2B · 2024 – actualidad',
          description:
            'Marketplace B2B de comercio e inventario. Backend en NestJS con PostgreSQL, autenticación con Firebase y medios en AWS S3 y CloudFront; frontend en React optimizado para Safari en iOS.',
          technologies: ['NestJS', 'React', 'PostgreSQL', 'AWS', 'Firebase'],
          liveUrl: null,
          githubUrl: null,
          image: null
        },
        {
          id: 'bactosim',
          group: 'academic',
          title: 'BactoSim',
          meta: 'Proyecto de tesis · Universidad de Guadalajara · 2025',
          description:
            'Aplicación web educativa que simula la replicación del bacteriófago M13, con animación 3D creada en Blender y configuración de parámetros para explorar distintos escenarios.',
          technologies: ['React', 'Three.js', 'WebGL', 'Blender', 'JavaScript'],
          liveUrl: 'https://bactosim.com',
          githubUrl: 'https://github.com/andres0v13d0/m13animation',
          image: '/bactosim.png'
        },
        {
          id: 'novatech',
          group: 'academic',
          title: 'NovaTech',
          meta: 'E-commerce con IA · 2024',
          description:
            'Tienda en línea de productos tecnológicos con un chat basado en OpenAI que asesora la compra según las necesidades profesionales del usuario, catálogo y pagos con PayPal.',
          technologies: ['React', 'Node.js', 'OpenAI API', 'PayPal API'],
          liveUrl: null,
          githubUrl: 'https://github.com/andres0v13d0/nova',
          image: '/novatech.png'
        },
        {
          id: 'bidblitz',
          group: 'academic',
          title: 'BidBlitz',
          meta: 'App móvil de subastas · 2024',
          description:
            'Aplicación móvil de subastas en tiempo real hecha con Flutter, con WebSockets para notificar nuevas pujas al instante, historial y autenticación de usuarios.',
          technologies: ['Flutter', 'Dart', 'WebSockets', 'Firebase'],
          liveUrl: null,
          githubUrl: 'https://github.com/andres0v13d0/bidblitz',
          image: '/bidblitz.jpg'
        },
        {
          id: 'zoomy',
          group: 'academic',
          title: 'Zoomy',
          meta: 'App móvil con IA · 2024',
          description:
            'Aplicación móvil en Flutter que reconoce y clasifica objetos en tiempo real con un modelo de TensorFlow entrenado para 15 categorías, con historial en Firebase Realtime Database.',
          technologies: ['Flutter', 'Dart', 'TensorFlow', 'Firebase'],
          liveUrl: null,
          githubUrl: 'https://github.com/andres0v13d0/recutiles',
          image: '/zoomy.jpg'
        }
      ]
    },
    contact: {
      title: 'Contacto',
      intro: 'Si quieres hablar de un proyecto o de una vacante, escríbeme.',
      email: 'Correo',
      phone: 'Teléfono',
      location: 'Ubicación',
      locationValue: 'Colombia',
      form: {
        title: 'Enviar un mensaje',
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: 'Mensaje enviado. Te responderé pronto.',
        error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
        subject: 'Solicitud de contacto'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados'
    }
  },
  en: {
    nav: {
      about: 'Profile',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      name: 'Jonathan Andres Oviedo Chalacan',
      title: 'Software Engineer | Full Stack Developer',
      subtitle:
        'I build enterprise platforms, ERP/POS systems and web and mobile applications with NestJS, React and TypeScript. Over 2 years of continuous experience, working remotely from Colombia.',
      location: 'Colombia',
      downloadCV: 'Download CV (PDF)'
    },
    about: {
      title: 'Profile',
      paragraphs: [
        'Software Engineer with over 2 years of continuous experience in full stack development for enterprise platforms and ERP/POS systems, plus internships in web development and automation. I work with JavaScript, TypeScript, PHP, Python, React, NestJS and MySQL and PostgreSQL databases.',
        'I am comfortable in remote, autonomous environments: fixing bugs, testing what I build and following the team\'s guidelines and best practices. I am interested in consulting and digital transformation for businesses.'
      ]
    },
    skills: {
      title: 'Technical skills',
      groups: [
        { name: 'Languages', items: 'JavaScript, TypeScript, PHP, Python, C#, HTML5, CSS3' },
        { name: 'Frontend', items: 'React, React Native, Flutter, Tailwind CSS' },
        { name: 'Backend', items: 'NestJS, Node.js, Express, RESTful APIs, ASP.NET Core' },
        { name: 'Databases', items: 'MySQL, PostgreSQL, SQL Server, MongoDB, Firebase' },
        { name: 'Cloud and tools', items: 'AWS (EC2, RDS, S3, CloudFront, Route53), Docker, CI/CD, Git, GitHub, Postman, Linux, WordPress' },
        { name: 'Languages spoken', items: 'Spanish (native), English (intermediate)' }
      ]
    },
    experience: {
      title: 'Experience',
      educationTitle: 'Education',
      experiences: [
        {
          role: 'Software Engineer | Full Stack Developer',
          company: 'Minymol S.A.S.',
          place: 'Cali, Colombia (remote)',
          period: 'Sep 2024 – Present',
          summary: 'Enterprise commerce and inventory platforms: Minymol (B2B marketplace), Flystock (ERP/POS) and mobile applications.',
          points: [
            'Full stack development with NestJS, TypeScript, React and JavaScript, in a collaborative team using Git.',
            'RESTful APIs and business logic for inventory control, electronic invoicing and user management.',
            'Bug detection and fixing across backend and frontend; functional testing of modules with Postman.',
            'Query and data structure optimization in MySQL and PostgreSQL.',
            'Responsive web interfaces (HTML5, CSS3, Tailwind) and admin modules for ERP/POS systems.',
            'Deployment and maintenance of services on AWS (EC2, RDS, S3, CloudFront) and technical documentation.'
          ]
        },
        {
          role: 'Web Development Intern',
          company: 'Escuela Superior Politécnica de Chimborazo',
          place: 'Riobamba, Ecuador (remote)',
          period: 'Oct 2024 – Mar 2025',
          summary: '',
          points: [
            'Maintenance and optimization of the institutional WordPress site, improving performance, stability and user experience.',
            'Bug fixes and navigation improvements working with PHP, HTML, CSS and JavaScript.'
          ]
        },
        {
          role: 'IT Solutions and Automation Intern',
          company: 'Ministry of Economic and Social Inclusion',
          place: 'Riobamba, Ecuador',
          period: 'Apr 2024 – Jul 2024',
          summary: '',
          points: [
            'Automation of administrative processes and report generation.',
            'Organization and digitization of information for several departments.',
            'Preventive and corrective equipment maintenance and staff training.'
          ]
        }
      ],
      education: [
        {
          title: 'Software Engineering',
          school: 'Escuela Superior Politécnica de Chimborazo',
          period: 'May 2025',
          note: 'Thesis: BactoSim, a 3D web application that simulates the interaction between the M13 bacteriophage and its environment.'
        },
        {
          title: 'Technician in Mobile Application Programming',
          school: 'SENA, Colombia',
          period: 'Dec 2025',
          note: ''
        }
      ]
    },
    projects: {
      title: 'Projects',
      productsTitle: 'Products',
      academicTitle: 'Academic projects',
      visit: 'Visit site',
      code: 'Code',
      technologies: 'Technologies',
      projectsList: [
        {
          id: 'flystock',
          group: 'product',
          title: 'Flystock',
          meta: 'ERP / POS ecosystem · 2024 – present',
          description:
            'Software ecosystem for Colombian businesses: online store, digital catalogs, cloud POS with inventory, and an ERP for distributors. I take part in full stack development: inventory, electronic invoicing, users and admin modules.',
          technologies: ['NestJS', 'TypeScript', 'React', 'PostgreSQL', 'MySQL', 'AWS'],
          liveUrl: 'https://flystock.com.co/',
          githubUrl: null,
          image: null
        },
        {
          id: 'oviedotech',
          group: 'product',
          title: 'OviedoTech SAS',
          meta: 'Software company · Cali, Colombia',
          description:
            'Software company building commercial tools for stores, suppliers and distributors in Colombia. Its main brand is Flystock.',
          technologies: ['React', 'NestJS', 'AWS'],
          liveUrl: 'https://oviedotechs.com/',
          githubUrl: null,
          image: null
        },
        {
          id: 'minymol',
          group: 'product',
          title: 'Minymol',
          meta: 'B2B marketplace · 2024 – present',
          description:
            'B2B commerce and inventory marketplace. NestJS backend with PostgreSQL, Firebase authentication and media on AWS S3 and CloudFront; React frontend optimized for Safari on iOS.',
          technologies: ['NestJS', 'React', 'PostgreSQL', 'AWS', 'Firebase'],
          liveUrl: null,
          githubUrl: null,
          image: null
        },
        {
          id: 'bactosim',
          group: 'academic',
          title: 'BactoSim',
          meta: 'Thesis project · University of Guadalajara · 2025',
          description:
            'Educational web application that simulates the replication of the M13 bacteriophage, with a 3D animation made in Blender and a parameter configuration module to explore different scenarios.',
          technologies: ['React', 'Three.js', 'WebGL', 'Blender', 'JavaScript'],
          liveUrl: 'https://bactosim.com',
          githubUrl: 'https://github.com/andres0v13d0/m13animation',
          image: '/bactosim.png'
        },
        {
          id: 'novatech',
          group: 'academic',
          title: 'NovaTech',
          meta: 'E-commerce with AI · 2024',
          description:
            'Online store for technology products with an OpenAI-based chat that advises purchases according to the user\'s professional needs, plus catalog and PayPal payments.',
          technologies: ['React', 'Node.js', 'OpenAI API', 'PayPal API'],
          liveUrl: null,
          githubUrl: 'https://github.com/andres0v13d0/nova',
          image: '/novatech.png'
        },
        {
          id: 'bidblitz',
          group: 'academic',
          title: 'BidBlitz',
          meta: 'Auction mobile app · 2024',
          description:
            'Real-time auction mobile app built with Flutter, using WebSockets to notify new bids instantly, with bid history and user authentication.',
          technologies: ['Flutter', 'Dart', 'WebSockets', 'Firebase'],
          liveUrl: null,
          githubUrl: 'https://github.com/andres0v13d0/bidblitz',
          image: '/bidblitz.jpg'
        },
        {
          id: 'zoomy',
          group: 'academic',
          title: 'Zoomy',
          meta: 'Mobile app with AI · 2024',
          description:
            'Flutter mobile app that recognizes and classifies objects in real time with a TensorFlow model trained for 15 categories, with history stored in Firebase Realtime Database.',
          technologies: ['Flutter', 'Dart', 'TensorFlow', 'Firebase'],
          liveUrl: null,
          githubUrl: 'https://github.com/andres0v13d0/recutiles',
          image: '/zoomy.jpg'
        }
      ]
    },
    contact: {
      title: 'Contact',
      intro: 'If you want to talk about a project or a position, write to me.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Colombia',
      form: {
        title: 'Send a message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Message sent. I will reply soon.',
        error: 'The message could not be sent. Please try again.',
        subject: 'Contact Request'
      }
    },
    footer: {
      rights: 'All rights reserved'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
