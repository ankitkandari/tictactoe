import React from 'react';
import styles from './Board.module.scss';
import { Square } from 'components/Sqaure';

export const Board = ({ square, handleClick }) => {

  const squares = Array(9).fill(null).map((ele, idx) => {
    return <Square value={square[idx]} handleClick={() => { handleClick(idx) }} />
  })

  return (
    <div className={styles.ttBoxArea}>
      <div className={styles.ttBoxWrapper}>
        {squares}
      </div>
    </div>
  );
}
