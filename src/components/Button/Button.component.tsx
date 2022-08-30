import React from "react";
import "./Button.style.css";
import { ButtonProps } from "../../common/types/button-type";
function Button({ text, onClick }: ButtonProps) {
  return (
    <div onClick={onClick} className="button">
      <span>{text}</span>
    </div>
  );
}
export default Button;
