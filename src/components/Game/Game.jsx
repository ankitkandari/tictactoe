import React from 'react';
import styles from './Game.module.scss';
import { Board } from 'components/Board';
import { useState } from 'react';
import { GameHeader } from 'components/GameHeader';
import { GameFooter } from 'components/GameFooter';

export const Game = () => {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [showHistory, setShowHistory] = useState(true);
  const isX = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  function handleHistory(squares) {
    const nextHistory = [...history.slice(0, currentMove + 1), squares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleSqaureClick(i) {
    if (currentSquare[i] || calculateWinner(currentSquare)) return;

    let squaresCopy = currentSquare.slice();
    squaresCopy[i] = isX ? 'X' : 'O';
    handleHistory(squaresCopy)
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[b] && squares[c] && squares[a] == squares[b] && squares[b] == squares[c])
        return squares[a];
    }
    return null;
  }

  function jumpTo(i) {
    setCurrentMove(i);
  }

  function toggleHistoryPanel() {
    setShowHistory(!showHistory);
  }

  function restartGame(){
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0)
  }

  const winner = calculateWinner(currentSquare);
  let status = null;
  if (winner)
    status = `Winner is ${winner}`
  else
    status = `Next Player is ${isX ? 'X' : 'O'}`



  return (
    <>
      <GameHeader status={status} historyToggle={toggleHistoryPanel} history={history} showHistory={showHistory} jump={jumpTo} restartGame={restartGame} />
      <Board square={currentSquare} handleClick={handleSqaureClick} />
      <GameFooter status={status} />
    </>
  );
}
