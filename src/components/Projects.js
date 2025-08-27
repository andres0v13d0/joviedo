import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Datos de proyectos - Aquí puedes agregar tus proyectos reales
    const projectsData = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'web',
            company: 'TechCorp Solutions',
            client: 'Retail Company',
            description: 'Plataforma completa de e-commerce con sistema de pagos integrado, gestión de inventario y panel administrativo.',
            longDescription: 'Desarrollé una plataforma de e-commerce completa desde cero, incluyendo frontend responsivo, backend robusto, integración con pasarelas de pago, sistema de gestión de inventario en tiempo real, y un panel administrativo completo para gestionar productos, órdenes y usuarios.',
            image: '/placeholder-project.jpg',
            liveUrl: 'https://ejemplo-ecommerce.com',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
            features: [
                'Sistema de autenticación completo',
                'Carrito de compras con persistencia',
                'Integración con múltiples pasarelas de pago',
                'Panel administrativo con analytics',
                'Sistema de notificaciones en tiempo real'
            ],
            year: '2023',
            status: 'Completado',
            duration: '4 meses'
        },
        {
            id: 2,
            title: 'Dashboard Analytics',
            category: 'dashboard',
            company: 'DataViz Agency',
            client: 'Marketing Firm',
            description: 'Dashboard interactivo para visualización de datos de marketing con gráficos en tiempo real y reportes automáticos.',
            longDescription: 'Creé un dashboard completo para análisis de datos de marketing que permite visualizar métricas en tiempo real, generar reportes automáticos, y proporcionar insights accionables para optimizar campañas publicitarias.',
            image: '/placeholder-project.jpg',
            liveUrl: 'https://ejemplo-dashboard.com',
            technologies: ['Vue.js', 'D3.js', 'Express.js', 'PostgreSQL', 'Chart.js'],
            features: [
                'Visualización de datos en tiempo real',
                'Gráficos interactivos personalizables',
                'Generación automática de reportes PDF',
                'Sistema de alertas configurables',
                'Integración con múltiples APIs'
            ],
            year: '2023',
            status: 'Completado',
            duration: '3 meses'
        },
        {
            id: 3,
            title: 'Medical App',
            category: 'mobile',
            company: 'HealthTech StartUp',
            client: 'Medical Center',
            description: 'Aplicación móvil para gestión de citas médicas, historial clínico y comunicación paciente-doctor.',
            longDescription: 'Desarrollé una aplicación móvil completa para el sector salud que permite a los pacientes gestionar sus citas, acceder a su historial médico, y mantener comunicación directa con sus doctores de manera segura y eficiente.',
            image: '/placeholder-project.jpg',
            liveUrl: 'https://ejemplo-medical-app.com',
            technologies: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
            features: [
                'Gestión de citas en tiempo real',
                'Historial médico digitalizado',
                'Chat seguro paciente-doctor',
                'Notificaciones push personalizadas',
                'Integración con sistemas hospitalarios'
            ],
            year: '2022',
            status: 'Completado',
            duration: '5 meses'
        },
        {
            id: 4,
            title: 'Portfolio Website',
            category: 'web',
            company: 'Freelance',
            client: 'Creative Agency',
            description: 'Sitio web portfolio moderno con animaciones avanzadas y diseño responsivo para agencia creativa.',
            longDescription: 'Diseñé y desarrollé un sitio web portfolio impactante para una agencia creativa, con animaciones CSS avanzadas, transiciones suaves, y un diseño completamente responsivo que destaca el trabajo de la agencia.',
            image: '/placeholder-project.jpg',
            liveUrl: 'https://ejemplo-portfolio.com',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Sass'],
            features: [
                'Animaciones CSS avanzadas',
                'Diseño responsivo optimizado',
                'Galería de proyectos interactiva',
                'Formulario de contacto funcional',
                'Optimización SEO completa'
            ],
            year: '2022',
            status: 'Completado',
            duration: '2 meses'
        },
        {
            id: 5,
            title: 'Learning Management System',
            category: 'web',
            company: 'EduTech Solutions',
            client: 'University',
            description: 'Plataforma educativa completa con cursos online, evaluaciones automáticas y seguimiento de progreso.',
            longDescription: 'Desarrollé una plataforma LMS completa que permite a instituciones educativas ofrecer cursos online, realizar evaluaciones automáticas, hacer seguimiento del progreso estudiantil, y facilitar la comunicación entre profesores y alumnos.',
            image: '/placeholder-project.jpg',
            liveUrl: 'https://ejemplo-lms.com',
            technologies: ['Angular', 'Spring Boot', 'MySQL', 'AWS', 'Docker'],
            features: [
                'Sistema de cursos multimedia',
                'Evaluaciones automáticas con IA',
                'Seguimiento de progreso detallado',
                'Foros de discusión integrados',
                'Certificaciones digitales'
            ],
            year: '2023',
            status: 'En desarrollo',
            duration: '6 meses'
        },
        {
            id: 6,
            title: 'Restaurant Management',
            category: 'web',
            company: 'FoodTech Solutions',
            client: 'Restaurant Chain',
            description: 'Sistema de gestión integral para restaurantes con POS, inventario, reservas y delivery.',
            longDescription: 'Creé un sistema completo de gestión para restaurantes que incluye punto de venta (POS), control de inventario, gestión de reservas, sistema de delivery, y analytics para optimizar operaciones.',
            image: '/placeholder-project.jpg',
            liveUrl: 'https://ejemplo-restaurant.com',
            technologies: ['React', 'Python', 'Django', 'Redis', 'PayPal API'],
            features: [
                'Sistema POS integrado',
                'Control de inventario automático',
                'Gestión de reservas online',
                'Plataforma de delivery',
                'Analytics y reportes detallados'
            ],
            year: '2023',
            status: 'Completado',
            duration: '4 meses'
        }
    ];

    const categories = [
        { id: 'all', name: 'Todos', icon: 'fas fa-th' },
        { id: 'web', name: 'Web Apps', icon: 'fas fa-globe' },
        { id: 'mobile', name: 'Mobile Apps', icon: 'fas fa-mobile-alt' },
        { id: 'dashboard', name: 'Dashboards', icon: 'fas fa-chart-bar' }
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    const openProjectModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="projects" className="projects-showcase-section" ref={sectionRef}>
            <div className="projects-container-wrapper">
                <div className="projects-header-section">
                    <h2 className="section-main-title">{t.projects.title}</h2>
                    <div className="title-underline-accent"></div>
                    <p className="section-subtitle-text">
                        {t.projects.subtitle}
                    </p>
                </div>

                <div className="projects-filter-navigation">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-category-button ${selectedCategory === category.id ? 'filter-active' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            <i className={category.icon}></i>
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>

                <div className={`projects-grid-container ${isVisible ? 'projects-visible' : ''}`}>
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => openProjectModal(project)}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-main-image" />
                                <div className="project-overlay-content">
                                    <div className="overlay-icons-section">
                                        <button className="overlay-action-button">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="overlay-action-button"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content-section">
                                <div className="project-header-info">
                                    <h3 className="project-title-text">{project.title}</h3>
                                    <div className="project-meta-info">
                                        <span className="project-company-text">
                                            <i className="fas fa-building"></i>
                                            {project.company}
                                        </span>
                                        <span className="project-year-text">{project.year}</span>
                                    </div>
                                </div>

                                <p className="project-description-text">{project.description}</p>

                                <div className="project-technologies-section">
                                    <div className="tech-tags-container">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span key={idx} className="tech-tag-item">{tech}</span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="tech-more-indicator">+{project.technologies.length - 3}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="project-actions-footer">
                                    <button className="view-details-button">
                                        Ver Detalles
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                    <div className="project-status-badge">
                                        <span className={`status-indicator ${project.status === 'Completado' ? 'status-completed' : 'status-progress'}`}></span>
                                        {project.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Modal */}
                {selectedProject && (
                    <div className="project-modal-overlay" onClick={closeProjectModal}>
                        <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close-button" onClick={closeProjectModal}>
                                <i className="fas fa-times"></i>
                            </button>

                            <div className="modal-content-wrapper">
                                <div className="modal-image-section">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="modal-project-image" />
                                </div>

                                <div className="modal-info-section">
                                    <div className="modal-header-section">
                                        <h3 className="modal-project-title">{selectedProject.title}</h3>
                                        <div className="modal-project-meta">
                                            <span className="modal-company-info">
                                                <i className="fas fa-building"></i>
                                                {selectedProject.company}
                                            </span>
                                            <span className="modal-client-info">
                                                <i className="fas fa-user"></i>
                                                Cliente: {selectedProject.client}
                                            </span>
                                            <span className="modal-duration-info">
                                                <i className="fas fa-clock"></i>
                                                Duración: {selectedProject.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="modal-description-section">
                                        <h4>Descripción del Proyecto</h4>
                                        <p>{selectedProject.longDescription}</p>
                                    </div>

                                    <div className="modal-features-section">
                                        <h4>Características Principales</h4>
                                        <ul className="features-list-container">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="feature-item-text">
                                                    <i className="fas fa-check"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="modal-technologies-section">
                                        <h4>{t.projects.technologies}</h4>
                                        <div className="modal-tech-tags">
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <span key={idx} className="modal-tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="modal-actions-section">
                                        <a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modal-action-button primary-action"
                                        >
                                            <i className="fas fa-external-link-alt"></i>
                                            {t.projects.viewProject}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
