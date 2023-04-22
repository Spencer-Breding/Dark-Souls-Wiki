import React from 'react';
import Link from 'next/link';
import Header_Div from "../components/header_div";
import Title_Div from "../components/title_div";
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
                <Title_Div/>
                <text className={styles.description}>{desc}</text>
                <Header_Div/>
                <div className={styles.row}>
                    <Link href="Character/Builds">Builds</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Character/Classes">Classes</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Character/Gestures">Gestures</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Character/Gifts">Gifts</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="Character/Stats">Stats</Link>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default Character;