import styles from "./Button.module.css";
export const Button = (props) => {
  const { isOutline, icon, text } = props;
  return (
    <button
      className={
        props.isOutline ? styles.outline_button : styles.primary_button
      }
    >
      {icon}
      {text}
    </button>
  );
};
