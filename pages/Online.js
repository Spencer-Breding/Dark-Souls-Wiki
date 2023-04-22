import React from 'react';
import Link from 'next/link';
import Header_Div from "../components/header_div";
import Title_Div from "../components/title_div";
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
                <Title_Div/>
                <text className={styles.description}>{desc}</text>
                <Header_Div/>
                <div className={styles.row}>
                    <Link href="Online/Features">Features</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Online/Invasions">Invasions</Link>
                </div>
                <Header_Div />
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