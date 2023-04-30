import React from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import HeaderDiv from "../../components/HeaderDiv";
import TitleDiv from "../../components/TitleDiv";
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
                <TitleDiv/>
                <text className={styles.description}>{desc}</text>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Equipment/Armor"><text onClick={() => {
                        setCookie('armor_state', 1);
                        window.dispatchEvent(new Event("cookie"));
                    }}>Armor</text></Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Equipment/Items">Items</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Equipment/Rings">Rings</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Equipment/Shields">Shields</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Equipment/Spells">Spells</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Equipment/Upgrades">Upgrades</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Equipment/Weapons">Weapons</Link>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default Equipment;