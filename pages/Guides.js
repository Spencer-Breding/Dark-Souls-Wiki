import React from 'react';
import Link from 'next/link';
import styles from "../styles/Information.module.css";

const desc = "Guides provide assistance to players looking to overcome the challenges of Dark Souls.";

const Character = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h2 className={styles.title}>Guides</h2>
                <div className={styles.title_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <text className={styles.description}>{desc}</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Achievements">Achievements</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="New_Game_Plus">New Game +</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="New_Player_Help">New Player Help</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Walkthrough">Walkthrough</Link>
                </div>
                <div className={styles.spacer} />
            </div>
        </React.Fragment>
    );
}

export default Character;