import React from 'react';
import Link from 'next/link';
import Grad from "../components/grad";
import Spacer from "../components/spacer";
import styles from "../styles/Information.module.css";

const desc = "General information covers the basics of Dark Souls and its systems.";

const General = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <h1 className={styles.title}>General Information</h1>
                <div className={styles.title_divider}>
                    <div className={styles.shadow }></div>
                </div>
                <text className={styles.description}>{desc}</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="/General_Information/About_Dark_Souls">About Dark Souls</Link>
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
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default General;