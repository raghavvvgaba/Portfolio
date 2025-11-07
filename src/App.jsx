import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import AuthForm from './components/AuthForm';

export default function App() {
  useEffect(() => {
    // Custom smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroSection = document.querySelector('.hero-bg');
      if (heroSection) {
        const parallax = scrolled * 0.5;
        heroSection.style.transform = `translateY(${parallax}px)`;
        heroSection.style.opacity = 1 - (scrolled * 0.001);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cp-black text-white overflow-x-hidden">
      <Navigation />

      <main className="pt-20 lg:pl-16">
        <Hero />
        <Features />
        <Dashboard />
        <AuthForm />

        {/* Footer */}
        <footer className="py-12 px-4 bg-cp-deep border-t border-cp-cyan/20">
          <div className="container mx-auto text-center">
            <div className="mb-6">
              <span className="text-cp-yellow font-bold text-2xl tracking-wider font-ui">NEXUS</span>
              <span className="text-cp-cyan text-xs font-mono ml-2">// v2.2</span>
            </div>
            <p className="text-cp-teal font-mono text-sm mb-4">
              CYBERPARK INTERFACE SYSTEM // ESTABLISHED 2077
            </p>
            <div className="flex justify-center space-x-6 text-xs font-mono text-gray-500">
              <span>STATUS: ONLINE</span>
              <span>|</span>
              <span>SECURITY: ENCRYPTED</span>
              <span>|</span>
              <span>NETWORK: OPTIMAL</span>
            </div>
          </div>
        </footer>
      </main>

      {/* Toast Container */}
      <div id="toast-container" className="fixed top-24 right-4 z-50 space-y-2"></div>
    </div>
  );
}