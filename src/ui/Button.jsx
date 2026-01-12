import React from 'react';

/**
 * Button Component
 * Supports primary, secondary, and submit variants
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'font-semibold text-transform uppercase transition-all duration-200 focus-ring border-none cursor-pointer';

  const variantStyles = {
    primary: 'bg-primary text-black hover:bg-primary-dark active:scale-95',
    secondary: 'bg-transparent text-accent-cyan border-2 border-accent-cyan hover:bg-accent-cyan hover:text-black active:scale-95',
    submit: 'bg-tertiary text-black border border-black hover:bg-primary active:scale-95',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();

  return (
    <button
      className={combinedClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
