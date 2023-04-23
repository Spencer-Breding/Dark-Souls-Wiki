import React from 'react';
import Link from 'next/link';
import HeaderDiv from "../components/HeaderDiv";
import TitleDiv from "../components/TitleDiv";
import Grad from "../components/grad";
import Spacer from "../components/spacer";
import Title from "../components/title";
import styles from "../styles/Information.module.css";

const desc = "Guides provide assistance to players looking to overcome the challenges of Dark Souls.";

const Character = () => {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container}>
                <Title title="Guides" />
                <TitleDiv />
                <text className={styles.description}>{desc}</text>
                <HeaderDiv/>
                <div className={styles.row}>
                    <Link href="Guides/Achievements">Achievements</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Guides/New_Game_Plus">New Game +</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Guides/New_Player_Help">New Player Help</Link>
                </div>
                <HeaderDiv />
                <div className={styles.row}>
                    <Link href="Guides/Walkthrough">Walkthrough</Link>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default Character;