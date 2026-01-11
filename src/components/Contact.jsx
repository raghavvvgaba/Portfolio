import { useState } from 'react';
import Toast from './Toast';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'info' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !agreed) {
      setToast({
        isVisible: true,
        message: 'Please enter your email and agree to the terms.',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setToast({
        isVisible: true,
        message: 'Successfully subscribed! Stay tuned for updates.',
        type: 'success'
      });

      setEmail('');
      setAgreed(false);
    } catch (error) {
      setToast({
        isVisible: true,
        message: 'Failed to subscribe. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: '#FCEE0C' }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-black text-black uppercase tracking-wider mb-4"
              style={{ fontFamily: '"Rajdhani", sans-serif' }}
            >
              STAY CONNECTED
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Enter your email address to receive updates on my latest projects and announcements.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-transparent text-black text-base font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-cp-cyan"
                style={{ fontFamily: '"Rajdhani", sans-serif' }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest border-none transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3 mb-4">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 border-2 border-black bg-transparent cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-black cursor-pointer">
                I would like to receive news, special offers, and other information about projects and updates.
              </label>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-black/70 max-w-2xl mx-auto">
              Your data will be processed in accordance with our Privacy Policy. You can unsubscribe at any time.
            </p>
          </form>

          {/* Contact Links */}
          <div className="mt-16 text-center">
            <p className="text-sm text-black mb-4 uppercase tracking-wider">Or reach out directly</p>
            <a
              href="mailto:contact@raghavgaba.com"
              className="inline-block px-8 py-3 bg-transparent text-black text-sm font-bold uppercase tracking-widest border-2 border-black transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
              }}
            >
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </>
  );
};

export default Contact;
