import { WINNING_PATTERN } from "../constants/winning-pattern";

export const winnerFinder = (squares: number[] | string[]) => {
  var winnerFlag: boolean = false;
  WINNING_PATTERN.forEach((pattern) => {
    if (
      squares[pattern[0]] === "" ||
      squares[pattern[1]] === "" ||
      squares[pattern[2]] === ""
    ) {
      return;
    } else if (
      squares[pattern[0]] === squares[pattern[1]] &&
      squares[pattern[1]] === squares[pattern[2]]
    ) {
      winnerFlag = true;
    }
  });
  return winnerFlag;
};
