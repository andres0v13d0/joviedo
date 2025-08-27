import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

    const translations = {
        es: {
            // Navigation
            nav: {
                home: 'Inicio',
                about: 'Sobre Mí',
                skills: 'Habilidades',
                experience: 'Experiencia',
                projects: 'Proyectos',
                contact: 'Contacto'
            },
            // Hero Section
            hero: {
                greeting: 'Hola, soy',
                name: 'Jonathan Oviedo',
                title: 'Desarrollador Full Stack',
                titles: [
                    'Desarrollador Full Stack',
                    'Ingeniero de Software',
                    'Desarrollador Web',
                    'Entusiasta UI/UX'
                ],
                subtitle: 'Desarrollador Full Stack con experiencia en React, JavaScript, CSS3 y Flutter para el desarrollo de interfaces web y móviles, y en backend con Node.js, NestJS y Firebase.',
                cta: 'Ver Mi Trabajo',
                downloadCV: 'Descargar CV',
                location: 'Cali, Colombia',
                profession: 'Ingeniero en Software'
            },
            // About Section
            about: {
                title: 'Sobre Mí',
                description: 'Desarrollador Full Stack con experiencia en React, JavaScript, CSS3 y Flutter para el desarrollo de interfaces web y móviles, y en backend con Node.js, NestJS y Firebase. Manejo sólido de bases de datos como PostgreSQL y MySQL, así como integración de APIs y servicios externos. Me caracterizo por ser proactivo, adaptable y con orientación a resultados, aplicando metodologías ágiles como Scrum y buenas prácticas de desarrollo para entregar soluciones funcionales y escalables.',
                highlights: [
                    'Desarrollo Frontend con React y CSS3',
                    'Backend con Node.js y NestJS',
                    'Bases de datos PostgreSQL y MySQL',
                    'Integración con Firebase y AWS',
                    'Desarrollo móvil con Flutter'
                ],
                stats: [
                    { number: '2+', label: 'Años de Experiencia' },
                    { number: '10+', label: 'Proyectos Completados' },
                    { number: '8+', label: 'Tecnologías Dominadas' },
                    { number: '100%', label: 'Compromiso' }
                ]
            },
            // Skills Section
            skills: {
                title: 'Habilidades Técnicas',
                categories: {
                    frontend: 'Frontend',
                    backend: 'Backend',
                    database: 'Bases de Datos',
                    tools: 'Herramientas'
                },
                skillsList: {
                    frontend: [
                        { name: 'React', level: 90 },
                        { name: 'JavaScript', level: 95 },
                        { name: 'CSS3', level: 90 },
                        { name: 'HTML5', level: 95 },
                        { name: 'Flutter', level: 80 }
                    ],
                    backend: [
                        { name: 'Node.js', level: 85 },
                        { name: 'NestJS', level: 80 },
                        { name: 'Firebase', level: 85 },
                        { name: 'Python', level: 70 },
                        { name: 'Express.js', level: 80 }
                    ],
                    database: [
                        { name: 'PostgreSQL', level: 85 },
                        { name: 'MySQL', level: 90 },
                        { name: 'Firebase', level: 80 },
                        { name: 'MongoDB', level: 75 }
                    ],
                    tools: [
                        { name: 'Git', level: 90 },
                        { name: 'AWS S3', level: 75 },
                        { name: 'CloudFront', level: 70 },
                        { name: 'WordPress', level: 85 }
                    ]
                }
            },
            // Experience Section
            experience: {
                title: 'Experiencia Profesional',
                current: 'Actual',
                experiences: [
                    {
                        title: 'Desarrollador Full Stack',
                        company: 'Minymol SAS',
                        location: 'Cali, Colombia',
                        period: 'Septiembre 2024 – Presente',
                        type: 'En curso',
                        description: 'Desarrollo full stack de una plataforma e-commerce tipo marketplace. Backend en NestJS con PostgreSQL, autenticación Firebase y medios en AWS S3/CloudFront. Frontend en React con CSS personalizado, optimizado para Safari iOS.',
                        technologies: ['NestJS', 'React', 'AWS', 'PostgreSQL', 'Redis', 'Ubuntu', 'CSS3', 'React Native'],
                        achievements: [
                            'Automatización de pedidos y carrito de compras',
                            'Gestión de proveedores y catálogos',
                            'Optimización para Safari iOS',
                            'Integración con AWS S3 y CloudFront'
                        ]
                    },
                    {
                        title: 'Practicante Web',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        location: 'Riobamba, Ecuador',
                        period: 'Octubre 2024 – Marzo 2025',
                        type: 'Prácticas',
                        description: 'Actualización y mantenimiento del sitio institucional en WordPress. Mejora de navegación, incorporación de nuevas secciones y corrección de errores visuales para asegurar compatibilidad en distintos dispositivos.',
                        technologies: ['WordPress', 'CSS3', 'JavaScript'],
                        achievements: [
                            'Mejora de navegación del sitio web',
                            'Incorporación de nuevas secciones',
                            'Corrección de errores visuales',
                            'Compatibilidad multi-dispositivo'
                        ]
                    },
                    {
                        title: 'Practicante de TI',
                        company: 'Ministerio de Inclusión Económica y Social',
                        location: 'Riobamba, Ecuador',
                        period: 'Abril – Julio 2024',
                        type: 'Prácticas',
                        description: 'Soporte técnico en mantenimiento preventivo y correctivo de equipos. Gestión de documentación física y digital, administración de datos en Excel, y capacitación al personal en herramientas tecnológicas.',
                        technologies: ['Excel', 'Node.js', 'HTML5', 'CSS3'],
                        achievements: [
                            'Mantenimiento preventivo y correctivo de equipos',
                            'Gestión de documentación digital',
                            'Administración de datos en Excel',
                            'Capacitación al personal en tecnología'
                        ]
                    }
                ]
            },
            // Projects Section
            projects: {
                title: 'Proyectos Destacados',
                subtitle: 'Algunos de los proyectos académicos que he desarrollado',
                viewProject: 'Ver Proyecto',
                technologies: 'Tecnologías:',
                categories: {
                    all: 'Todos',
                    web: 'Aplicaciones Web',
                    mobile: 'Apps Móviles',
                    dashboard: 'Sistemas'
                },
                projectsList: [
                    {
                        id: 1,
                        title: 'Aplicación móvil con AI',
                        category: 'mobile',
                        description: 'Desarrollo de aplicación móvil con inteligencia artificial utilizando Flutter y Python.',
                        technologies: ['Flutter', 'Python', 'AI/ML'],
                        image: '/placeholder-project.jpg',
                        year: '2024'
                    },
                    {
                        id: 2,
                        title: 'Plataforma de E-commerce',
                        category: 'web',
                        description: 'Plataforma de comercio electrónico responsiva con carrito de compras y gestión de productos.',
                        technologies: ['Node.js', 'React', 'Tailwind CSS', 'HTML5'],
                        image: '/placeholder-project.jpg',
                        year: '2024'
                    },
                    {
                        id: 3,
                        title: 'Sistema de Gestión de Laboratorios',
                        category: 'dashboard',
                        description: 'Sistema completo para la gestión y administración de laboratorios de cómputo.',
                        technologies: ['Node.js', 'Angular', 'Google Firebase'],
                        image: '/placeholder-project.jpg',
                        year: '2023'
                    }
                ]
            },
            // Contact Section
            contact: {
                title: 'Contacto',
                subtitle: 'Hablemos sobre tu próximo proyecto',
                email: 'Correo Electrónico',
                phone: 'Teléfono',
                location: 'Ubicación',
                social: 'Redes Sociales',
                form: {
                    name: 'Nombre',
                    email: 'Correo',
                    message: 'Mensaje',
                    send: 'Enviar Mensaje'
                },
                info: {
                    email: 'oviedojonathan2001@gmail.com',
                    phone: '301 664 3479',
                    location: 'Cali, Colombia'
                }
            },
            // Footer
            footer: {
                rights: 'Todos los derechos reservados',
                built: 'Construido con React y mucho ☕'
            }
        },
        en: {
            // Navigation
            nav: {
                home: 'Home',
                about: 'About',
                skills: 'Skills',
                experience: 'Experience',
                projects: 'Projects',
                contact: 'Contact'
            },
            // Hero Section
            hero: {
                greeting: 'Hi, I\'m',
                name: 'Jonathan Oviedo',
                title: 'Full Stack Developer',
                titles: [
                    'Full Stack Developer',
                    'Software Engineer',
                    'Web Developer',
                    'UI/UX Enthusiast'
                ],
                subtitle: 'Full Stack Developer with hands-on experience in building responsive web and mobile interfaces using React, JavaScript, CSS3, and Flutter. Proficient in backend development with Node.js, NestJS, and Firebase.',
                cta: 'View My Work',
                downloadCV: 'Download CV',
                location: 'Cali, Colombia',
                profession: 'Software Engineer'
            },
            // About Section
            about: {
                title: 'About Me',
                description: 'Full Stack Developer with hands-on experience in building responsive web and mobile interfaces using React, JavaScript, CSS3, and Flutter. Proficient in backend development with Node.js, NestJS, and Firebase, as well as in managing relational databases like PostgreSQL and MySQL. Skilled in API integration and third-party service implementation. Known for being proactive, adaptable, and results-driven, with a strong focus on clean code practices, agile methodologies (Scrum), and delivering scalable, production-ready solutions.',
                highlights: [
                    'Frontend Development with React and CSS3',
                    'Backend with Node.js and NestJS',
                    'PostgreSQL and MySQL databases',
                    'Firebase and AWS integration',
                    'Mobile development with Flutter'
                ],
                stats: [
                    { number: '2+', label: 'Years of Experience' },
                    { number: '10+', label: 'Completed Projects' },
                    { number: '8+', label: 'Mastered Technologies' },
                    { number: '100%', label: 'Commitment' }
                ]
            },
            // Skills Section
            skills: {
                title: 'Technical Skills',
                categories: {
                    frontend: 'Frontend',
                    backend: 'Backend',
                    database: 'Databases',
                    tools: 'Tools'
                },
                skillsList: {
                    frontend: [
                        { name: 'React', level: 90 },
                        { name: 'JavaScript', level: 95 },
                        { name: 'CSS3', level: 90 },
                        { name: 'HTML5', level: 95 },
                        { name: 'Flutter', level: 80 }
                    ],
                    backend: [
                        { name: 'Node.js', level: 85 },
                        { name: 'NestJS', level: 80 },
                        { name: 'Firebase', level: 85 },
                        { name: 'Python', level: 70 },
                        { name: 'Express.js', level: 80 }
                    ],
                    database: [
                        { name: 'PostgreSQL', level: 85 },
                        { name: 'MySQL', level: 90 },
                        { name: 'Firebase', level: 80 },
                        { name: 'MongoDB', level: 75 }
                    ],
                    tools: [
                        { name: 'Git', level: 90 },
                        { name: 'AWS S3', level: 75 },
                        { name: 'CloudFront', level: 70 },
                        { name: 'WordPress', level: 85 }
                    ]
                }
            },
            // Experience Section
            experience: {
                title: 'Professional Experience',
                current: 'Current',
                experiences: [
                    {
                        title: 'Full Stack Developer',
                        company: 'Minymol SAS',
                        location: 'Cali, Colombia',
                        period: 'September 2024 – Present',
                        type: 'Current',
                        description: 'Full stack development of a custom e-commerce marketplace platform. Backend built with NestJS and PostgreSQL, featuring Firebase Authentication and media handling through AWS S3 and CloudFront. Frontend implemented in React with custom CSS, fully optimized for Safari on iOS.',
                        technologies: ['NestJS', 'React', 'AWS', 'PostgreSQL', 'Redis', 'Ubuntu', 'CSS3', 'React Native'],
                        achievements: [
                            'Automated orders and shopping cart flows',
                            'Supplier and catalog management',
                            'Safari iOS optimization',
                            'AWS S3 and CloudFront integration'
                        ]
                    },
                    {
                        title: 'Web Development Intern',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        location: 'Riobamba, Ecuador',
                        period: 'October 2024 – March 2025',
                        type: 'Internship',
                        description: 'Responsible for updating and maintaining the institutional website on WordPress. Improved navigation structure, added new content sections, and fixed UI/UX bugs to ensure multi-device compatibility.',
                        technologies: ['WordPress', 'CSS3', 'JavaScript'],
                        achievements: [
                            'Improved website navigation',
                            'Added new content sections',
                            'Fixed visual errors',
                            'Multi-device compatibility'
                        ]
                    },
                    {
                        title: 'IT Support Intern',
                        company: 'Ministry of Economic and Social Inclusion',
                        location: 'Riobamba, Ecuador',
                        period: 'April – July 2024',
                        type: 'Internship',
                        description: 'Provided technical support through preventive and corrective maintenance of IT equipment. Managed both physical and digital documentation, organized data using Excel, and trained staff in tech tools.',
                        technologies: ['Excel', 'Node.js', 'HTML5', 'CSS3'],
                        achievements: [
                            'Preventive and corrective equipment maintenance',
                            'Digital documentation management',
                            'Data administration in Excel',
                            'Staff training in technology tools'
                        ]
                    }
                ]
            },
            // Projects Section
            projects: {
                title: 'Notable Projects',
                subtitle: 'Some of the academic projects I\'ve developed',
                viewProject: 'View Project',
                technologies: 'Technologies:',
                categories: {
                    all: 'All',
                    web: 'Web Applications',
                    mobile: 'Mobile Apps',
                    dashboard: 'Systems'
                },
                projectsList: [
                    {
                        id: 1,
                        title: 'Mobile Application with AI',
                        category: 'mobile',
                        description: 'Development of Mobile Application with AI using Flutter and Python.',
                        technologies: ['Flutter', 'Python', 'AI/ML'],
                        image: '/placeholder-project.jpg',
                        year: '2024'
                    },
                    {
                        id: 2,
                        title: 'E-commerce Platform',
                        category: 'web',
                        description: 'Development of an Ecommerce Platform with shopping cart and product management.',
                        technologies: ['Node.js', 'React', 'Tailwind CSS', 'HTML5'],
                        image: '/placeholder-project.jpg',
                        year: '2024'
                    },
                    {
                        id: 3,
                        title: 'Computer Lab Management System',
                        category: 'dashboard',
                        description: 'Development of a Computer Lab Management System for administrative purposes.',
                        technologies: ['Node.js', 'Angular', 'Google Firebase'],
                        image: '/placeholder-project.jpg',
                        year: '2023'
                    }
                ]
            },
            // Contact Section
            contact: {
                title: 'Contact',
                subtitle: 'Let\'s talk about your next project',
                email: 'Email',
                phone: 'Phone',
                location: 'Location',
                social: 'Social Media',
                form: {
                    name: 'Name',
                    email: 'Email',
                    message: 'Message',
                    send: 'Send Message'
                },
                info: {
                    email: 'oviedojonathan2001@gmail.com',
                    phone: '(+57) 301 664 3479',
                    location: 'Cali, Colombia'
                }
            },
            // Footer
            footer: {
                rights: 'All rights reserved',
                built: 'Built with React and lots of ☕'
            }
        }
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
