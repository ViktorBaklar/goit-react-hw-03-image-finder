import style from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({
  className,
  children,
  type,
  onClick
}) => {
  const classList = [style.button, className].join(' ');

  return (
    <button
      className={classList}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;