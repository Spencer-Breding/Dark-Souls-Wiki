import React from 'react';
import Link from 'next/link';
import Header_Div from "../../components/header_div";
import Title_Div from "../../components/title_div";
import Grad from "../../components/grad";
import Spacer from "../../components/spacer";
import Title from "../../components/title";
import styles from "../../styles/Information.module.css";

const desc = "Equipment information covers anything that can be equipped such as: Weapons, Armor, Rings, and Spells";

const Equipment = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <Title title="Equipment Information"/>
                <Title_Div/>
                <text className={styles.description}>{desc}</text>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Equipment/Armor">Armor</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Equipment/Items">Items</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Equipment/Rings">Rings</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Equipment/Shields">Shields</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Equipment/Spells">Spells</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Equipment/Upgrades">Upgrades</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Equipment/Weapons">Weapons</Link>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default Equipment;