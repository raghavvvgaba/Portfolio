const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '⚡', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '📡', url: 'https://twitter.com' },
    { name: 'Email', icon: '✉️', url: 'mailto:contact@example.com' }
  ];

  const partners = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' }
  ];

  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <footer
      className="relative py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: '#000000' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Social Media Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-cp-cyan uppercase tracking-widest mb-6">FIND US ON</p>
          <div className="flex justify-center items-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-cp-cyan transition-colors duration-200 transform hover:scale-110"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">BUILT WITH</p>
          <div className="flex justify-center items-center space-x-12">
            {partners.map((partner) => (
              <div key={partner.name} className="text-center">
                <div className="text-3xl mb-2">{partner.icon}</div>
                <p className="text-xs text-gray-600 uppercase tracking-wider">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center space-x-6 mb-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-cp-cyan transition-colors duration-200 uppercase tracking-wider"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8 border-t border-gray-800">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm font-mono text-gray-400">
              © {currentYear} RAGHAV GABA • ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-cp-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-cp-cyan transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-cp-cyan transition-colors">
              Sitemap
            </a>
          </div>
        </div>

        {/* Brand */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-gray-600">
            DESIGNED & BUILT WITH <span className="text-cp-red">♥</span> IN NIGHT CITY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
