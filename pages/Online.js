import React from 'react';
import Link from 'next/link';
import Grad from "../components/grad";
import Spacer from "../components/spacer";
import styles from "../styles/Information.module.css";

const desc = "Online information covers information relating to the game's online systems.";

const Character = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <h1 className={styles.title}>Online Information</h1>
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
                <Spacer />
            </div>
        </React.Fragment>
    );
}

export default Character;