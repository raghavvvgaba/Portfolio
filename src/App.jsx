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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [transformScale, setTransformScale] = useState(1.4);
  const heroRef = useRef(null);

  const VIDEO_URL = "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BBglak2JCNftR5xP7nE8sopbjTvOH9IGYZJXV";
  const FALLBACK_IMAGE_URL = "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BMMAw1lr2RgWsSbxpBZzeoHCcUV0DQEfaJ41F";

  return (
    <Router>
      <AppContent
        isVideoLoaded={isVideoLoaded}
        setIsVideoLoaded={setIsVideoLoaded}
        hasVideoError={hasVideoError}
        setHasVideoError={setHasVideoError}
        transformScale={transformScale}
        setTransformScale={setTransformScale}
        heroRef={heroRef}
        VIDEO_URL={VIDEO_URL}
        FALLBACK_IMAGE_URL={FALLBACK_IMAGE_URL}
      />
    </Router>
  );
}

function AppContent({ isVideoLoaded, setIsVideoLoaded, hasVideoError, setHasVideoError, transformScale, setTransformScale, heroRef, VIDEO_URL, FALLBACK_IMAGE_URL }) {
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
            src={FALLBACK_IMAGE_URL}
            alt="Hero background"
            fetchPriority="high"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isVideoLoaded && !hasVideoError ? 'opacity-0' : 'opacity-70'
            }`}
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setHasVideoError(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              hasVideoError ? 'opacity-0' : 'opacity-0.7'
            }`}
          >
            <source src={VIDEO_URL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
