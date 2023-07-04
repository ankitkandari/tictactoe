import React from 'react';
import styles from './Sqaure.module.scss';
import classNames from 'classnames';


export const Square = ({ value, handleClick }) => {
  return (
    <div className={styles.ttSquareWrapper}>
      <div className={classNames(styles.ttSquare, value ? styles.ttSquareActive : '')} onClick={handleClick}>{value}</div>
    </div>
  );
}