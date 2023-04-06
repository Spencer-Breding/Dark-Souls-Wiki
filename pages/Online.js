import React from 'react';
import Link from 'next/link';
import styles from "../styles/Information.module.css";

const desc = "Online information covers information relating to the game's online systems.";

const Character = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h2 className={styles.title}>Online Information</h2>
                <div className={styles.title_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <text className={styles.description}>{desc}</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Features">Features</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Invasions">Invasions</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Summoning">Summoning</Link>
                </div>
                <div className={styles.spacer} />
            </div>
        </React.Fragment>
    );
}

export default Character;