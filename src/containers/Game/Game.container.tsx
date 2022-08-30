import React, { useState } from "react";
import Square from "../../components/Square";
import "./Game.style.css";
import { ResultType } from "../../common/types/result-type";
import { TurnType } from "../../common/types/turn-type";
import { winnerFinder } from "../../common/utilities/winner-finder";
import Button from "../../components/Button";
function Game() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState<TurnType>("x");
  const [result, setResult] = useState<ResultType>({
    winner: "none",
    state: "none",
  });
  const [winnerMessage, setWinnerMessage] = useState<string>("");
  const [clickCount, setClickCount] = useState<number>(0);
  const changeTurn = () => {
    setTurn(turn === "x" ? "o" : "x");
  };

  const handlePress = (num: number) => {
    if (cells[num] !== "" || result.state !== "none") {
      return;
    }
    setClickCount(clickCount + 1);
    const newBoard = cells.map((item, index) =>
      index === num ? (turn === "x" ? "x" : "o") : item
    );
    if (winnerFinder(newBoard)) {
      setResult({
        winner: turn,
        state: "WINNER",
        message: `Kazanan: ${turn} Tekrar Oyna !`,
      });
    } else if (clickCount === 8) {
      setResult({
        winner: "No One",
        state: "tie",
        message: `Eşitlik Var Tekrar Oyna !`,
      });
    }
    setCells(newBoard);
    changeTurn();
  };
  const restartGame = () => {
    setCells(Array(9).fill(""));
    setResult({ winner: "none", state: "none" });
    setTurn("x");
    setClickCount(0);
  };
  const checkTie = (newBoard: string[]) => {
    return newBoard.every((x) => x !== "");
  };

  return (
    <>
      {result.state !== "none" ? (
        <Button text={result.message} onClick={restartGame} />
      ) : (
        <div className="turn">
          <span className="turn__text">Turn is: </span>
          <span className="turn__candidate">{turn}</span>
        </div>
      )}

      <div className="gameBoard">
        <div className="row">
          <Square val={cells[0]} onPress={() => handlePress(0)} />
          <Square val={cells[1]} onPress={() => handlePress(1)} />
          <Square val={cells[2]} onPress={() => handlePress(2)} />
        </div>
        <div className="row">
          <Square val={cells[3]} onPress={() => handlePress(3)} />
          <Square val={cells[4]} onPress={() => handlePress(4)} />
          <Square val={cells[5]} onPress={() => handlePress(5)} />
        </div>
        <div className="row">
          <Square val={cells[6]} onPress={() => handlePress(6)} />
          <Square val={cells[7]} onPress={() => handlePress(7)} />
          <Square val={cells[8]} onPress={() => handlePress(8)} />
        </div>
      </div>
    </>
  );
}
export default Game;
