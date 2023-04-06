import React from 'react';
import Link from 'next/link';
import styles from "../styles/Information.module.css";

const desc = "World information covers information relating to the world of Dark Souls.";

const World = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <h2 className={styles.title}>World Information</h2>
                <div className={styles.title_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <text className={styles.description}>{desc}</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Covenants">Covenants</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Enemies">Enemies</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Illusory_Walls">Illusory Walls</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Locales">Locales</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Lore">Lore</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="NPCs">NPCs</Link>
                </div>
                <div className={styles.spacer} />
            </div>
            <div className={styles.blank}></div>
        </React.Fragment>
    );
}

export default World;