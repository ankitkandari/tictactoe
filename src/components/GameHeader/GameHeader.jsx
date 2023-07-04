import React from 'react';
import styles from './GameHeader.module.scss';
import { FiRotateCcw, FiClock } from 'react-icons/fi';
import classNames from 'classnames';
import { HistoryPanel } from 'components/HistoryPanel';

export function GameHeader({ status, historyToggle, history, showHistory, jump,restartGame }) {
  return (
    <>
      <header className={styles.ttHeader}>
        <h2>Tic Tac Toe</h2>
        <div>
          <button className={classNames(styles.ttButton, styles.ttIconButton)} onClick={restartGame}><FiRotateCcw /><span>Restart</span></button>
          <div className={styles.ttHistoryButtonWrapper}>
            <button className={classNames(styles.ttButton, styles.ttIconButton)} onClick={historyToggle}><FiClock /><span>History</span></button>
            <HistoryPanel historyToggle={historyToggle} history={history} showHistory={showHistory} jump={jump} />
          </div>

        </div>
      </header>

    </>
  );
}
