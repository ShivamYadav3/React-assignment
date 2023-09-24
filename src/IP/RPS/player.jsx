export default function Player({ setPlayerInput, playerInput }) {
  const clickRock = () => {
    setPlayerInput("rock");
  };
  const clickPaper = () => {
    setPlayerInput("paper");
  };
  const clickScissor = () => {
    setPlayerInput("scissor");
  };
  return (
    <div>
      <div>My responses {playerInput}</div>
      <div>
        <button className="button" onClick={clickRock}>
          rock
        </button>
        <button className="button" onClick={clickPaper}>
          paper
        </button>
        <button className="button" onClick={clickScissor}>
          scissor
        </button>
      </div>
    </div>
  );
}
