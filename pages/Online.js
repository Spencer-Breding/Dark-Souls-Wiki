import React from 'react';
import Link from 'next/link';
import HeaderDiv from "../components/HeaderDiv";
import TitleDiv from "../components/TitleDiv";
import Grad from "../components/grad";
import Spacer from "../components/spacer";
import Title from "../components/title";
import styles from "../styles/Information.module.css";

const desc = "Online information covers information relating to the game's online systems.";

const Character = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <Title title="Online Information" />
                <TitleDiv />
                <text className={styles.description}>{desc}</text>
                <HeaderDiv/>
                <div className={styles.row}>
                    <Link href="Online/Features">Features</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Online/Invasions">Invasions</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Online/Summoning">Summoning</Link>
                </div>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
            </div>
        </React.Fragment>
    );
}

export default Character;