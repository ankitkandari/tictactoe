import React from 'react';
import styles from './GameFooter.module.scss';
import Confetti from 'react-confetti'

export function GameFooter({ status }) {
  return <div className={styles.ttFooter}>
    <h2 className={(status === "Winner is X" || status === "Winner is O") ? styles.ttZoomInZoomOut : ''}>{status}</h2>
    {(status === "Winner is X" || status === "Winner is O") && (<Confetti />)}
  </div>;
}
