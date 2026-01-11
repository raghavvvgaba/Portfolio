import React from 'react';

/**
 * Card Component
 * Base card component with cyberpunk styling
 */
const Card = ({
  children,
  className = '',
  hover = true,
  ...props
}) => {
  const baseStyles = 'bg-black border border-accent-cyan p-5 transition-all duration-300';

  const hoverStyles = hover
    ? 'hover:shadow-glow hover:-translate-y-1 hover:border-accent-cyan-dark'
    : '';

  const combinedClassName = `${baseStyles} ${hoverStyles} ${className}`.trim();

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;
