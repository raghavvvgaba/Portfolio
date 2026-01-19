import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'info' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setToast({
        isVisible: true,
        message: 'Please fill in all fields',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setToast({
        isVisible: true,
        message: 'Message sent successfully!',
        type: 'success'
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setToast({
        isVisible: true,
        message: 'Failed to send message. Please try again.',
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
        className="relative py-20 pl-4 pr-4 sm:pl-16 sm:pr-6 lg:pl-20 lg:pr-8"
        style={{ background: '#FCEE0C' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-black text-black uppercase tracking-wider mb-4"
              style={{ fontFamily: '"Rajdhani", sans-serif' }}
            >
              Contact Me
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Send me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
            {/* Contact Form - Left */}
            <form onSubmit={handleSubmit} className="w-full max-w-xl">
              <div className="flex flex-col gap-4 mb-6">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="px-6 py-4 bg-transparent text-black text-base font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-cp-cyan"
                  style={{ fontFamily: '"Rajdhani", sans-serif' }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="px-6 py-4 bg-transparent text-black text-base font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-cp-cyan"
                  style={{ fontFamily: '"Rajdhani", sans-serif' }}
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows="5"
                  className="px-6 py-4 bg-transparent text-black text-base font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-cp-cyan resize-none"
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
            </form>

            {/* Contact Info - Right */}
            <div className="flex flex-col justify-center w-full max-w-xl md:max-w-md">
              <h3
                className="text-2xl font-black text-black uppercase tracking-wider mb-6"
                style={{ fontFamily: '"Rajdhani", sans-serif' }}
              >
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FCEE0C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-black/70 uppercase tracking-wider mb-1">Email</p>
                    <a
                      href="mailto:raghavvvgaba@gmail.com"
                      className="text-lg font-bold text-black hover:text-black/80 transition-colors"
                      style={{ fontFamily: '"Rajdhani", sans-serif' }}
                    >
                      raghavvvgaba@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FCEE0C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-black/70 uppercase tracking-wider mb-1">Phone</p>
                    <a
                      href="tel:+918979887318"
                      className="text-lg font-bold text-black hover:text-black/80 transition-colors"
                      style={{ fontFamily: '"Rajdhani", sans-serif' }}
                    >
                      +91 8979887318
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
