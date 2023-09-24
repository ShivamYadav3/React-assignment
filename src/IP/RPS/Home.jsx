import Computer from "./Computer";
import { useEffect, useState, useMemo } from "react";
import Player from "./player";

export default function Home() {
  const [playerInput, setPlayerInput] = useState("");
  const [computer, setComputer] = useState("");
  useEffect(() => {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      setComputer("rock");
    } else if (randomNum === 1) {
      setComputer("paper");
    } else if (randomNum === 2) {
      setComputer("scissor");
    }
  }, [playerInput]);

  const result = useMemo(() => {
    if (playerInput === computer) {
      return "tie";
    } else if (playerInput === "rock" && computer === "paper") {
      return "computer wins";
    } else if (playerInput === "rock" && computer !== "paper") {
      return "player wins";
    } else if (playerInput === "paper" && computer === "scissor") {
      return "computer wins";
    } else if (playerInput === "paper" && computer !== "scissor") {
      return "player wins";
    } else if (playerInput === "scissor" && computer === "rock") {
      return "computer wins";
    } else if (playerInput === "scissor" && computer !== "rock") {
      return "player wins";
    }
  });
  console.log("comp:-", computer, "player:-", playerInput);
  return (
    <div>
      <Player setPlayerInput={setPlayerInput} playerInput={playerInput} />
      <Computer computer={computer} />
      message:{result}
    </div>
  );
}
