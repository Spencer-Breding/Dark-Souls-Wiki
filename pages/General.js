import React from 'react';
import Link from 'next/link';
import styles from "../styles/Information.module.css";

const desc = "General information covers the basics of Dark Souls and its systems.";

const General = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h2 className={styles.title}>General Information</h2>
                <div className={styles.title_divider}>
                    <div className={styles.shadow }></div>
                </div>
                <text className={styles.description}>{desc}</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="About_Dark_Souls">About Dark Souls</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Dark_Souls_Remastered">About the Remaster</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Combat">Combat</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Controls">Controls</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Game_Mechanics">Game Mechanics</Link>
                </div>
                <div className={styles.spacer }/>
            </div>
            <div className={styles.blank}></div>
        </React.Fragment>
    );
}

export default General;