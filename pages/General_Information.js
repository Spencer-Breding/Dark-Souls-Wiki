import React from 'react';
import Link from 'next/link';
import styles from "../styles/General_Information.module.css";

const desc = "General Information covers the basics of Dark Souls and its systems.";

const General = () => {
    return (
        <React.Fragment>
            <div className={styles.general}>
                <h2 className={styles.title}>General Information</h2>
                <div className={styles.title_divider}>
                    <div className={styles.shadow }></div>
                </div>
                <text className={styles.description}>{desc}</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <ul>
                        <li><Link href="About_Dark_Souls">About Dark Souls</Link></li>
                        <li><Link href="Dark_Souls_Remastered">Dark Souls Remastered</Link></li>
                    </ul>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <ul>
                        <li><Link href="About_Dark_Souls">Combat</Link></li>
                        <li><Link href="Controls">Controls</Link></li>
                    </ul>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <ul>
                        <li><Link href="Bonfires">Bonfires</Link></li>
                        <li><Link href="Humanity">Humanity</Link></li>
                        <li><Link href="Weapon_Scaling">Weapon Scaling</Link></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
        );
}

export default General;