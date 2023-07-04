import React from 'react';
import styles from './HistoryPanel.module.scss';
import Draggable from 'react-draggable';

export function HistoryPanel({ history, jump, showHistory, historyToggle }) {
  return (
    showHistory && (<Draggable
      bounds="main"
      axis="both"
      defaultPosition={{ x: -100, y: 30 }}
      position={null}
      allowAnyClick={true}
      scale={1}>
      <div className={styles.ttHistoryWrapper}>
        <div className={styles.ttHistoryBar}>
          <p>History</p>
          <span onClick={historyToggle}>X</span>
        </div>
        <div className={styles.ttHistoryList}>
          {history.map((ele, idx) => {
            return <span key={idx} className={styles.ttHistoryItem} onClick={() => { jump(idx) }}>Go to {idx ? `Step ${idx}` : `Start`}</span>
          })}
        </div>
      </div>
    </Draggable>)
  );
}
