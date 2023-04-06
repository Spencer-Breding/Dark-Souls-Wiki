import React from 'react';
import Link from 'next/link';
import styles from "../styles/Information.module.css";

const desc = "Equipment information covers anything that can be equipped such as: Weapons, Armor, Rings, and Spells";

const Equipment = () => {
    return (
        <React.Fragment>
            <div className={styles.container }>
                <h2 className={styles.title }>Equipment Information</h2>
                <div className={styles.title_divider }>
                    <div className={styles.shadow }></div>
                </div>
                <text className={styles.description}>{desc}</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Armor">Armor</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Items">Items</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Rings">Rings</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Shields">Shields</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Spells">Spells</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Upgrades">Upgrades</Link>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <Link href="Weapons">Weapons</Link>
                </div>
                <div className={styles.spacer} />
            </div>
            <div className={styles.blank}></div>
        </React.Fragment>
    );
}

export default Equipment;