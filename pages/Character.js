import React from 'react';
import Link from 'next/link';
import styles from "../styles/Information.module.css";

const desc = "Character information covers things relating to the player's character like classes and stats.";

const Character = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h2 className={styles.title}>Character Information</h2>
                <div className={styles.title_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <text className={styles.description}>{desc}</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Builds">Builds</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Classes">Classes</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Gestures">Gestures</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Gifts">Gifts</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Stats">Stats</Link>
                </div>
                <div className={styles.spacer} />
            </div>
            <div className={styles.blank}></div>
        </React.Fragment>
    );
}

export default Character;