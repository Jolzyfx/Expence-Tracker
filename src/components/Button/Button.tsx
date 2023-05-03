import styles from "./Button.module.css"

interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={[styles.btn, styles['btn-' + color]] .join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
