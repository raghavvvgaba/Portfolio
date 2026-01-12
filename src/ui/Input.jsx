import React from 'react';

/**
 * Input Component
 * Supports text, email, and textarea types
 */
const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  required = false,
  className = '',
  error = '',
  ...props
}) => {
  const baseStyles = 'w-full bg-transparent border-2 border-black px-4 py-3 rounded-md text-base text-black placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_0_3px_rgba(0,255,255,0.2)]';

  if (type === 'textarea') {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-black mb-2">
            {label}
            {required && <span className="text-accent-red ml-1">*</span>}
          </label>
        )}
        <textarea
          className={`${baseStyles} ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={5}
          {...props}
        />
        {error && <p className="text-accent-red text-sm mt-1">{error}</p>}
      </div>
    );
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-black mb-2">
          {label}
          {required && <span className="text-accent-red ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`${baseStyles} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
      {error && <p className="text-accent-red text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
