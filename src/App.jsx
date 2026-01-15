import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  const VIDEO_URL = "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4BdbpeehBTCdpHZF4O2LRJmVeucoy6QDxkEUw8";
  const FALLBACK_IMAGE_URL = "https://rjrvvxgo7y.ufs.sh/f/COht9FMnsV4B8gBfZ6FodyA1UHK5XvoCfWnst3u6J4zewpME";

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fixed Video Background */}
      <div className="fixed inset-0 z-0">
        <img
          src={FALLBACK_IMAGE_URL}
          alt="Hero background"
          fetchpriority="high"
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

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
