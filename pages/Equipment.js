import React from 'react';
import Link from 'next/link';
import Grad from "../components/grad";
import Spacer from "../components/spacer";
import styles from "../styles/Information.module.css";

const desc = "Equipment information covers anything that can be equipped such as: Weapons, Armor, Rings, and Spells";

const Equipment = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <h1 className={styles.title}>Equipment Information</h1>
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
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default Equipment;