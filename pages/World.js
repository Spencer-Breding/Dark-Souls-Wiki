import React from 'react';
import Link from 'next/link';
import HeaderDiv from "../components/HeaderDiv";
import TitleDiv from "../components/TitleDiv";
import Grad from "../components/grad";
import Spacer from "../components/spacer";
import Title from "../components/title";
import styles from "../styles/Information.module.css";

const desc = "World information covers information relating to the world of Dark Souls.";

const World = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <Title title="World Information" />
                <TitleDiv />
                <text className={styles.description}>{desc}</text>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="World/Covenants">Covenants</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="World/Enemies">Enemies</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="World/Illusory_Walls">Illusory Walls</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="World/Locales">Locales</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="World/Lore">Lore</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="World/NPCs">NPCs</Link>
                </div>
                <Spacer />
            </div>
        </React.Fragment>
    );
}

export default World;