import './App.css';
import GameBoard from 'src/components/GameBoard';
import React from 'react';
import Game from "./game/Game";
const App: React.FunctionComponent = ():JSX.Element => {

  return (
    <div>
      <h1>Connect Four</h1>
      <GameBoard/>
      <Game />
    </div>

  );
}

export default App;
