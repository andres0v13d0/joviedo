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
                subtitle: 'Tecnologías y herramientas que utilizo para crear experiencias digitales excepcionales',
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
                },
                additionalInfo: {
                    learning: {
                        title: 'Aprendizaje Continuo',
                        description: 'Siempre explorando nuevas tecnologías y mejores prácticas de desarrollo'
                    },
                    teamwork: {
                        title: 'Trabajo en Equipo',
                        description: 'Experiencia colaborando en equipos ágiles y multidisciplinarios'
                    },
                    innovation: {
                        title: 'Innovación',
                        description: 'Enfocado en crear soluciones innovadoras y eficientes'
                    }
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
                viewCode: 'Ver Código',
                viewDetails: 'Ver Detalles',
                projectDescription: 'Descripción del Proyecto',
                keyFeatures: 'Características Principales',
                technologies: 'Tecnologías:',
                company: 'Empresa',
                client: 'Cliente',
                duration: 'Duración',
                categories: {
                    all: 'Todos',
                    web: 'Aplicaciones Web',
                    mobile: 'Apps Móviles',
                    dashboard: 'Sistemas'
                },
                projectsList: [
                    {
                        id: 1,
                        title: 'NovaTech',
                        category: 'web',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        client: 'TechSolutions',
                        description: 'E-commerce inteligente con IA para productos tecnológicos que incluye chat inteligente para asesoramiento personalizado de compras.',
                        longDescription: 'Desarrollé una plataforma de comercio electrónico innovadora especializada en productos tecnológicos que integra OpenAI para proporcionar un chat inteligente que ayuda a los usuarios a tomar decisiones de compra basadas en sus necesidades profesionales. La plataforma incluye un catálogo completo de computadoras, laptops y dispositivos tecnológicos con sistema de pagos integrado.',
                        image: '/novatech.png',
                        liveUrl: null,
                        githubUrl: 'https://github.com/andres0v13d0/nova',
                        technologies: ['React', 'Node.js', 'HTML5', 'CSS3', 'OpenAI API', 'PayPal API'],
                        features: [
                            'Chat inteligente con OpenAI para asesoramiento de compras',
                            'Catálogo especializado en productos tecnológicos',
                            'Sistema de recomendaciones basado en perfil profesional',
                            'Integración completa con PayPal API',
                            'Interfaz responsive y moderna',
                            'Sistema de búsqueda avanzada'
                        ],
                        year: '2024',
                        status: 'Completado',
                        duration: '6 meses'
                    },
                    {
                        id: 2,
                        title: 'BidBlitz',
                        category: 'mobile',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        client: 'Proyecto Académico',
                        description: 'Aplicación móvil de subastas en tiempo real con notificaciones instantáneas y sistema de pujas competitivo.',
                        longDescription: 'Creé una aplicación móvil completa para subastas en tiempo real utilizando Flutter y Dart. La aplicación implementa WebSockets para garantizar notificaciones instantáneas de nuevas ofertas, proporcionando una experiencia fluida y competitiva para los usuarios que participan en subastas.',
                        image: '/bidblitz.jpg',
                        liveUrl: null,
                        githubUrl: 'https://github.com/andres0v13d0/bidblitz',
                        technologies: ['Flutter', 'Dart', 'WebSockets', 'Firebase', 'Socket.io'],
                        features: [
                            'Subastas en tiempo real con WebSockets',
                            'Notificaciones push instantáneas',
                            'Sistema de pujas automáticas',
                            'Historial completo de subastas',
                            'Interfaz intuitiva y responsive',
                            'Autenticación segura de usuarios'
                        ],
                        year: '2024',
                        status: 'Completado',
                        duration: '1 mes'
                    },
                    {
                        id: 3,
                        title: 'Zoomy',
                        category: 'mobile',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        client: 'Proyecto Académico',
                        description: 'Aplicación móvil con inteligencia artificial para reconocimiento de objetos en tiempo real y clasificación automática.',
                        longDescription: 'Desarrollé una aplicación móvil innovadora que integra un modelo de inteligencia artificial entrenado para reconocer y clasificar objetos en tiempo real. La aplicación utiliza Flutter para una experiencia de usuario fluida y Firebase Realtime Database para almacenamiento y sincronización de datos.',
                        image: '/zoomy.jpg',
                        liveUrl: null,
                        githubUrl: 'https://github.com/andres0v13d0/recutiles',
                        technologies: ['Flutter', 'Dart', 'TensorFlow', 'Firebase Realtime', 'Machine Learning'],
                        features: [
                            'Reconocimiento de objetos en tiempo real',
                            'Modelo de IA entrenado para 15 categorías',
                            'Base de datos en tiempo real con Firebase',
                            'Interfaz intuitiva y responsive',
                            'Historial de reconocimientos',
                            'Modo cámara con detección instantánea'
                        ],
                        year: '2024',
                        status: 'Completado',
                        duration: '2 meses'
                    },
                    {
                        id: 4,
                        title: 'BactoSim',
                        category: 'web',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        client: 'Universidad de Guadalajara',
                        description: 'Simulador web interactivo del proceso de replicación del bacteriófago M13 con animaciones 3D y configuración de parámetros.',
                        longDescription: 'Desarrollé mi proyecto de tesis: una aplicación web educativa que simula el proceso de replicación del bacteriófago M13. La plataforma incluye un módulo de animación 3D creado en Blender y un sistema de configuración de parámetros que permite a los usuarios explorar diferentes escenarios de replicación viral con fines educativos y de investigación.',
                        image: '/bactosim.png',
                        liveUrl: 'https://bactosim.com',
                        githubUrl: 'https://github.com/andres0v13d0/m13animation',
                        technologies: ['React', 'Blender', 'Three.js', 'WebGL', 'JavaScript', 'CSS3'],
                        features: [
                            'Animación 3D del proceso de replicación viral',
                            'Módulo de configuración de parámetros',
                            'Simulación interactiva en tiempo real',
                            'Interfaz educativa y científica',
                            'Visualización de diferentes escenarios',
                            'Exportación de resultados de simulación'
                        ],
                        year: '2025',
                        status: 'Completado',
                        duration: '6 meses'
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
                intro: {
                    title: '¡Trabajemos Juntos!',
                    description: '¿Tienes un proyecto en mente? ¿Necesitas ayuda con desarrollo web? ¡Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad!'
                },
                form: {
                    title: 'Envíame un Mensaje',
                    subtitle: 'Completa el formulario y te responderé lo más pronto posible',
                    name: 'Nombre',
                    email: 'Correo',
                    message: 'Mensaje',
                    send: 'Enviar Mensaje',
                    sending: 'Enviando...',
                    success: '¡Mensaje enviado exitosamente! Te responderé pronto.',
                    error: 'Hubo un error al enviar el mensaje. Intenta nuevamente.'
                },
                cta: {
                    title: '¿Listo para empezar tu proyecto?',
                    description: 'Trabajemos juntos para crear algo increíble. Desde la idea inicial hasta el producto final.',
                    viewWork: 'Ver Mi Trabajo',
                    contactNow: 'Contactar Ahora'
                },
                info: {
                    email: 'oviedojonathan2001@gmail.com',
                    phone: '301 664 3479',
                    location: 'Cali, Colombia'
                }
            },
            // Footer
            footer: {
                quickNavigation: 'Navegación Rápida',
                contactInfo: 'Información de Contacto',
                workTogether: {
                    title: '¿Trabajamos Juntos?',
                    description: '¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!'
                },
                buttons: {
                    contactNow: 'Contactar Ahora',
                    viewProjects: 'Ver Proyectos'
                },
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
                subtitle: 'Technologies and tools I use to create exceptional digital experiences',
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
                },
                additionalInfo: {
                    learning: {
                        title: 'Continuous Learning',
                        description: 'Always exploring new technologies and development best practices'
                    },
                    teamwork: {
                        title: 'Teamwork',
                        description: 'Experience collaborating in agile and multidisciplinary teams'
                    },
                    innovation: {
                        title: 'Innovation',
                        description: 'Focused on creating innovative and efficient solutions'
                    }
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
                viewCode: 'View Code',
                viewDetails: 'View Details',
                projectDescription: 'Project Description',
                keyFeatures: 'Key Features',
                technologies: 'Technologies:',
                company: 'Company',
                client: 'Client',
                duration: 'Duration',
                categories: {
                    all: 'All',
                    web: 'Web Applications',
                    mobile: 'Mobile Apps',
                    dashboard: 'Systems'
                },
                projectsList: [
                    {
                        id: 1,
                        title: 'NovaTech',
                        category: 'web',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        client: 'TechSolutions',
                        description: 'Intelligent e-commerce with AI for technology products featuring smart chat for personalized purchase advice.',
                        longDescription: 'I developed an innovative e-commerce platform specialized in technology products that integrates OpenAI to provide intelligent chat that helps users make purchase decisions based on their professional needs. The platform includes a complete catalog of computers, laptops and technological devices with integrated payment system.',
                        image: '/novatech.png',
                        liveUrl: null,
                        githubUrl: 'https://github.com/andres0v13d0/nova',
                        technologies: ['React', 'Node.js', 'HTML5', 'CSS3', 'OpenAI API', 'PayPal API'],
                        features: [
                            'Smart chat with OpenAI for purchase advice',
                            'Specialized catalog for technology products',
                            'Professional profile-based recommendation system',
                            'Complete PayPal API integration',
                            'Responsive and modern interface',
                            'Advanced search system'
                        ],
                        year: '2024',
                        status: 'Completed',
                        duration: '6 months'
                    },
                    {
                        id: 2,
                        title: 'BidBlitz',
                        category: 'mobile',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        client: 'Academic Project',
                        description: 'Real-time auction mobile app with instant notifications and competitive bidding system.',
                        longDescription: 'I created a complete mobile application for real-time auctions using Flutter and Dart. The application implements WebSockets to ensure instant notifications of new offers, providing a smooth and competitive experience for users participating in auctions.',
                        image: '/bidblitz.jpg',
                        liveUrl: null,
                        githubUrl: 'https://github.com/andres0v13d0/bidblitz',
                        technologies: ['Flutter', 'Dart', 'WebSockets', 'Firebase', 'Socket.io'],
                        features: [
                            'Real-time auctions with WebSockets',
                            'Instant push notifications',
                            'Automatic bidding system',
                            'Complete auction history',
                            'Intuitive and responsive interface',
                            'Secure user authentication'
                        ],
                        year: '2024',
                        status: 'Completed',
                        duration: '1 month'
                    },
                    {
                        id: 3,
                        title: 'Zoomy',
                        category: 'mobile',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        client: 'Academic Project',
                        description: 'Mobile app with artificial intelligence for real-time object recognition and automatic classification.',
                        longDescription: 'I developed an innovative mobile application that integrates an artificial intelligence model trained to recognize and classify objects in real time. The application uses Flutter for a smooth user experience and Firebase Realtime Database for data storage and synchronization.',
                        image: '/zoomy.jpg',
                        liveUrl: null,
                        githubUrl: 'https://github.com/andres0v13d0/recutiles',
                        technologies: ['Flutter', 'Dart', 'TensorFlow', 'Firebase Realtime', 'Machine Learning'],
                        features: [
                            'Real-time object recognition',
                            'AI model trained for 15 categories',
                            'Real-time database with Firebase',
                            'Intuitive and responsive interface',
                            'Recognition history',
                            'Camera mode with instant detection'
                        ],
                        year: '2024',
                        status: 'Completed',
                        duration: '2 months'
                    },
                    {
                        id: 4,
                        title: 'BactoSim',
                        category: 'web',
                        company: 'Escuela Superior Politécnica de Chimborazo',
                        client: 'University of Guadalajara',
                        description: 'Interactive web simulator of M13 bacteriophage replication process with 3D animations and parameter configuration.',
                        longDescription: 'I developed my thesis project: an educational web application that simulates the M13 bacteriophage replication process. The platform includes a 3D animation module created in Blender and a parameter configuration system that allows users to explore different viral replication scenarios for educational and research purposes.',
                        image: '/bactosim.png',
                        liveUrl: 'https://bactosim.com',
                        githubUrl: 'https://github.com/andres0v13d0/m13animation',
                        technologies: ['React', 'Blender', 'Three.js', 'WebGL', 'JavaScript', 'CSS3'],
                        features: [
                            '3D animation of viral replication process',
                            'Parameter configuration module',
                            'Interactive real-time simulation',
                            'Educational and scientific interface',
                            'Visualization of different scenarios',
                            'Simulation results export'
                        ],
                        year: '2025',
                        status: 'Completed',
                        duration: '6 months'
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
                intro: {
                    title: 'Let\'s Work Together!',
                    description: 'Do you have a project in mind? Need help with web development? I\'d love to learn more about your idea and how I can help you make it a reality!'
                },
                form: {
                    title: 'Send Me a Message',
                    subtitle: 'Fill out the form and I\'ll get back to you as soon as possible',
                    name: 'Name',
                    email: 'Email',
                    message: 'Message',
                    send: 'Send Message',
                    sending: 'Sending...',
                    success: 'Message sent successfully! I\'ll get back to you soon.',
                    error: 'There was an error sending the message. Please try again.'
                },
                cta: {
                    title: 'Ready to start your project?',
                    description: 'Let\'s work together to create something amazing. From initial idea to final product.',
                    viewWork: 'View My Work',
                    contactNow: 'Contact Now'
                },
                info: {
                    email: 'oviedojonathan2001@gmail.com',
                    phone: '(+57) 301 664 3479',
                    location: 'Cali, Colombia'
                }
            },
            // Footer
            footer: {
                quickNavigation: 'Quick Navigation',
                contactInfo: 'Contact Information',
                workTogether: {
                    title: 'Let\'s Work Together?',
                    description: 'Do you have a project in mind? Let\'s talk and make it happen!'
                },
                buttons: {
                    contactNow: 'Contact Now',
                    viewProjects: 'View Projects'
                },
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
