import React from "react";
import "./Square.style.css";
import { SquareProps } from "../../common/types/square-type";
function Square({ onPress, val }: SquareProps) {
  return (
    <div onClick={onPress} className="square">
      {val}
    </div>
  );
}
export default Square;
