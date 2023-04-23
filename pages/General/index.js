import React from 'react';
import Link from 'next/link';
import HeaderDiv from "../../components/HeaderDiv";
import TitleDiv from "../../components/TitleDiv";
import Grad from "../../components/grad";
import Spacer from "../../components/spacer";
import Title from "../../components/title";
import styles from "../../styles/Information.module.css";

const desc = "General information covers the basics of Dark Souls and its systems.";

const General = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <Title title="General Information" />
                <TitleDiv/>
                <text className={styles.description}>{desc}</text>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="/General/About_Dark_Souls">About Dark Souls</Link>
                </div>
                <HeaderDiv/>
                <div className={styles.row}>
                    <Link href="/General/Dark_Souls_Remastered">About the Remaster</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="/General/Combat">Combat</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="/General/Controls">Controls</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="/General/Game_Mechanics">Game Mechanics</Link>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default General;