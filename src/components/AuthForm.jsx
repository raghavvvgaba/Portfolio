import { useState } from 'react';

export default function AuthForm() {
  const [formData, setFormData] = useState({
    userId: '',
    accessKey: '',
    module: 'Neural Link',
    twoFactor: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="systems" className="py-20 px-4 bg-cp-surface">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cp-yellow mb-4 uppercase tracking-wider font-ui">
            SYSTEM ACCESS
          </h2>
          <p className="text-cp-cyan text-lg font-mono">
            // AUTHENTICATE TO PROCEED
          </p>
        </div>

        <form onSubmit={handleSubmit} className="hud-card rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <label className="block text-cp-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-2 font-aux">
                User ID
              </label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
                placeholder="ENTER_CREDENTIALS"
                required
                className="form-input w-full px-4 py-3 bg-cp-surface border border-cp-cyan/30 text-white font-mono text-sm transition-all duration-180 focus:border-cp-yellow focus:bg-cp-surface-2 focus:shadow-[0_0_15px_rgba(252,238,12,0.3)] focus:outline-none focus:ring-2 focus:ring-cp-yellow focus:ring-offset-2 focus:ring-offset-cp-surface"
              />
              <p className="form-helper text-cp-teal font-mono text-xs mt-2 opacity-80">
                Unique system identifier
              </p>
            </div>

            <div className="mb-8">
              <label className="block text-cp-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-2 font-aux">
                Access Key
              </label>
              <input
                type="password"
                name="accessKey"
                value={formData.accessKey}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
                className="form-input w-full px-4 py-3 bg-cp-surface border border-cp-cyan/30 text-white font-mono text-sm transition-all duration-180 focus:border-cp-yellow focus:bg-cp-surface-2 focus:shadow-[0_0_15px_rgba(252,238,12,0.3)] focus:outline-none focus:ring-2 focus:ring-cp-yellow focus:ring-offset-2 focus:ring-offset-cp-surface"
              />
              <p className="form-helper text-cp-teal font-mono text-xs mt-2 opacity-80">
                Encryption key for secure access
              </p>
            </div>

            <div className="mb-8">
              <label className="block text-cp-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-2 font-aux">
                Module
              </label>
              <select
                name="module"
                value={formData.module}
                onChange={handleInputChange}
                className="form-input w-full px-4 py-3 bg-cp-surface border border-cp-cyan/30 text-white font-mono text-sm transition-all duration-180 focus:border-cp-yellow focus:bg-cp-surface-2 focus:shadow-[0_0_15px_rgba(252,238,12,0.3)] focus:outline-none focus:ring-2 focus:ring-cp-yellow focus:ring-offset-2 focus:ring-offset-cp-surface"
              >
                <option>Neural Link</option>
                <option>Data Matrix</option>
                <option>Security Grid</option>
                <option>All Systems</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="twoFactor"
                  checked={formData.twoFactor}
                  onChange={handleInputChange}
                  className="w-5 h-5 accent-cp-cyan border border-cp-cyan bg-cp-surface cursor-pointer transition-all duration-180 checked:shadow-[0_0_10px_var(--color-cyan)] focus:outline-none focus:ring-2 focus:ring-cp-yellow focus:ring-offset-2 focus:ring-offset-cp-surface"
                />
                <span className="text-sm text-cp-teal font-mono group-hover:text-cp-yellow transition-colors duration-180">
                  Enable two-factor authentication
                </span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="btn-cp btn-cp-primary flex-1 text-lg px-8 py-4 hover:shadow-[0_0_10px_#03D8F3,0_0_20px_#03D8F3,0_0_30px_#03D8F3] hover:translate-y-[-1px] transition-all duration-180"
              >
                <span>AUTHENTICATE</span>
              </button>
              <button
                type="button"
                className="btn-cp btn-cp-secondary flex-1 text-lg px-8 py-4 hover:shadow-[0_0_10px_#FCEE0C,0_0_20px_#FCEE0C,0_0_30px_#FCEE0C] hover:translate-y-[-1px] transition-all duration-180"
              >
                <span>CANCEL</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}