import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [transformScale, setTransformScale] = useState(1.4);
  const heroRef = useRef(null);

  return (
    <Router>
      <AppContent
        transformScale={transformScale}
        setTransformScale={setTransformScale}
        heroRef={heroRef}
      />
    </Router>
  );
}

function AppContent({ transformScale, setTransformScale, heroRef }) {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/all-projects';

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    document.documentElement.style.scrollBehavior = 'smooth';

    if (!isProjectsPage) {
      const handleScroll = () => {
        if (heroRef.current) {
          const heroHeight = heroRef.current.offsetHeight;
          const scrollY = window.scrollY;
          const scrollProgress = Math.min(scrollY / heroHeight, 1);
          const newScale = 1.4 - (scrollProgress * 0.4);
          setTransformScale(newScale);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        document.documentElement.style.scrollBehavior = '';
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isProjectsPage, heroRef, setTransformScale]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">
      {!isProjectsPage && (
        <div
          className="fixed inset-0 z-0 overflow-hidden transition-transform duration-700 ease-out"
          style={{
            transform: `scale(${transformScale})`,
            transformOrigin: 'center center'
          }}
        >
          <img
            src="https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BrgEAiYsuzSw9UtI80XMydWj3YcgJHDAoKef4"
            alt="Hero background"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>
      )}

      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero ref={heroRef} />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/all-projects" element={<ProjectsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
