import { useEffect } from 'react';

const Toast = ({ message, type = 'info', isVisible, onClose, autoClose = true }) => {
  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, onClose]);

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-cp-teal/10',
          border: 'border-cp-teal/40',
          text: 'text-cp-teal',
          progress: 'bg-cp-teal'
        };
      case 'error':
        return {
          bg: 'bg-cp-red/10',
          border: 'border-cp-red/40',
          text: 'text-cp-red',
          progress: 'bg-cp-red'
        };
      case 'warning':
        return {
          bg: 'bg-cp-yellow/10',
          border: 'border-cp-yellow/40',
          text: 'text-cp-yellow',
          progress: 'bg-cp-yellow'
        };
      default:
        return {
          bg: 'bg-cp-cyan/10',
          border: 'border-cp-cyan/40',
          text: 'text-cp-cyan',
          progress: 'bg-cp-cyan'
        };
    }
  };

  const styles = getToastStyles();

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex items-start space-x-3 animate-pulse">
      <div className={`hud-card ${styles.bg} ${styles.border} p-4 min-w-80 max-w-md shadow-neon-out`}>
        <div className="flex items-start space-x-3">
          {/* Icon */}
          <div className={`flex-shrink-0 text-2xl ${styles.text}`}>
            {type === 'success' && '✓'}
            {type === 'error' && '✕'}
            {type === 'warning' && '⚠'}
            {type === 'info' && 'ℹ'}
          </div>

          {/* Message */}
          <div className="flex-1">
            <p className={`font-ui text-sm ${styles.text} font-medium`}>
              {message}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className={`flex-shrink-0 ${styles.text} hover:opacity-70 transition-opacity duration-150`}
            aria-label="Close notification"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        {autoClose && (
          <div className="mt-3 h-0.5 bg-surface/20 rounded-full overflow-hidden">
            <div
              className={`h-full ${styles.progress} transition-all duration-3000 ease-linear`}
              style={{
                width: '100%',
                animation: 'shrink 3s linear forwards'
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toast;