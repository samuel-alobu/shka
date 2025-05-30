import type { CSSProperties, MouseEventHandler } from "react";

type Props = {
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: "button";
  text: string;
  style: CSSProperties;
};

const Button = ({ className, onClick, type, text, style }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`${className} text-white rounded-full transform transition hover:scale-110 duration-300 ease-in-out z-50`}
    >
      {text}
    </button>
  );
};

export default Button;
