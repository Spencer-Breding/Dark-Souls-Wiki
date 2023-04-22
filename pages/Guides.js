import React from 'react';
import Link from 'next/link';
import Header_Div from "../components/header_div";
import Title_Div from "../components/title_div";
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
                <Title_Div/>
                <text className={styles.description}>{desc}</text>
                <Header_Div/>
                <div className={styles.row}>
                    <Link href="Guides/Achievements">Achievements</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Guides/New_Game_Plus">New Game +</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Guides/New_Player_Help">New Player Help</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Guides/Walkthrough">Walkthrough</Link>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default Character;