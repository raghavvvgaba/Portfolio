import { useState } from 'react';
import { FiSearch, FiSettings, FiMenu, FiX, FiHome, FiActivity, FiCpu, FiDatabase } from 'react-icons/fi';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home', icon: FiHome },
    { name: 'DASHBOARD', href: '#dashboard', icon: FiActivity },
    { name: 'SYSTEMS', href: '#systems', icon: FiCpu },
    { name: 'DATA', href: '#data', icon: FiDatabase },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cp-deep border-b border-cp-cyan/20 backdrop-blur-sm bg-opacity-90">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo Lockup */}
          <div className="flex items-center space-x-4">
            <div className="text-cp-yellow font-bold text-2xl tracking-wider font-ui">NEXUS</div>
            <span className="text-cp-cyan text-xs font-mono">// v2.2</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-white hover:text-cp-yellow transition-all duration-180 uppercase text-sm tracking-wider relative group"
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-cp-cyan to-cp-teal group-hover:w-full transition-all duration-180 shadow-[0_0_10px_#03D8F3]"></span>
              </button>
            ))}
          </div>

          {/* Right Utilities */}
          <div className="flex items-center space-x-4">
            <button className="text-cp-cyan hover:text-cp-yellow transition-colors p-2 hover:shadow-[0_0_10px_currentColor]">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="text-cp-cyan hover:text-cp-yellow transition-colors p-2 hover:shadow-[0_0_10px_currentColor]">
              <FiSettings className="w-5 h-5" />
            </button>
            <button
              className="lg:hidden text-cp-cyan hover:text-cp-yellow p-2 hover:shadow-[0_0_10px_currentColor]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Side Rail (Desktop) */}
      <aside className="fixed left-0 top-20 bottom-0 w-16 bg-cp-deep border-r border-cp-cyan/20 hidden lg:flex flex-col items-center py-8 space-y-8 z-40">
        {navItems.slice(0, 3).map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.href)}
            className="text-cp-cyan hover:text-cp-yellow transition-all duration-180 group hover:scale-110"
          >
            <item.icon className="w-6 h-6 group-hover:shadow-[0_0_15px_currentColor]" />
          </button>
        ))}
      </aside>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-cp-deep/95 z-50 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="mobile-nav-link text-cp-yellow text-2xl font-ui uppercase tracking-wider hover:text-cp-cyan hover:shadow-[0_0_20px_currentColor] hover:scale-105 transition-all duration-180"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 text-cp-cyan hover:text-cp-yellow hover:shadow-[0_0_15px_currentColor] transition-colors"
            >
              <FiX className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}