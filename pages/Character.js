import React from 'react';
import Link from 'next/link';
import HeaderDiv from "../components/HeaderDiv";
import TitleDiv from "../components/TitleDiv";
import Grad from "../components/grad";
import Spacer from "../components/spacer";
import Title from "../components/title";
import styles from "../styles/Information.module.css";

const desc = "Character information covers things relating to the player's character like classes and stats.";

const Character = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <Title title="Character Information"/>
                <TitleDiv />
                <text className={styles.description}>{desc}</text>
                <HeaderDiv/>
                <div className={styles.row}>
                    <Link href="Character/Builds">Builds</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Character/Classes">Classes</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Character/Gestures">Gestures</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Character/Gifts">Gifts</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Character/Stats">Stats</Link>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default Character;