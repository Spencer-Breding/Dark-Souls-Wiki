import React from 'react';
import Link from 'next/link';
import Grad from "../components/grad";
import Spacer from "../components/spacer";
import styles from "../styles/Information.module.css";

const desc = "World information covers information relating to the world of Dark Souls.";

const World = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <h1 className={styles.title}>World Information</h1>
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
                <Spacer />
            </div>
        </React.Fragment>
    );
}

export default World;