import style from './button.module.css';

const Button = ({
  className,
  children,
  type,
  onClick,
  onSubmit
}) => {
  const classList = [style.button, className].join(' ');

  return (
    <button
      className={classList}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
};

export default Button;