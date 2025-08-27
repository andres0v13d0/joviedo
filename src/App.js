import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Agregar números animados a las estadísticas
    const animateNumbers = () => {
      const counters = document.querySelectorAll('.stat-count');

      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const originalText = counter.getAttribute('data-original');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        // Solo animar si hay un valor numérico válido
        if (!isNaN(target) && target > 0) {
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
              // Restaurar el texto original al final de la animación
              counter.textContent = originalText;
            } else {
              // Obtener el sufijo del texto original (+ o %)
              const suffix = originalText.replace(/[0-9]/g, '');
              counter.textContent = Math.floor(current) + suffix;
            }
          }, 16);
        }
      });
    };

    // Observer para activar animaciones de números
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'about') {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    });

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
