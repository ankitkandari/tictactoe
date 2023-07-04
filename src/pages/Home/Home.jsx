import * as React from 'react';
import styles from './Home.module.scss';
import {Game} from 'components/Game';

export function Home() {
    return (
        <main className={styles.ttMain}>
            <Game />
        </main>
    )
}
