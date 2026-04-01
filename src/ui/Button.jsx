const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  style: externalStyle,
  children,
  ...props
}) => {
  const baseStyle = {
    fontFamily: '"Rajdhani", sans-serif',
    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
    ...externalStyle,
  };

  const variants = {
    primary: 'bg-black text-white border-none',
    outline: 'bg-transparent text-white border-2 border-cp-cyan hover:bg-cp-cyan/10 hover:border-cp-yellow',
  };

  const sizes = {
    sm: 'px-2 sm:px-4 lg:px-6 py-3 text-sm sm:text-base',
    md: 'px-8 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      style={baseStyle}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
