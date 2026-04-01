const Input = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  className = '',
  ...props
}) => {
  const baseStyles = 'w-full px-6 py-4 text-black text-base font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-cp-cyan resize-none';
  const style = { fontFamily: '"Rajdhani", sans-serif', background: '#FEF9E7' };

  if (type === 'textarea') {
    return (
      <textarea
        className={`${baseStyles} ${className}`}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        {...props}
      />
    );
  }

  return (
    <input
      type={type}
      className={`${baseStyles} ${className}`}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
