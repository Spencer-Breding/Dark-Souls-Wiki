import React from 'react';
import Link from 'next/link';
import Header_Div from "../../components/header_div";
import Title_Div from "../../components/title_div";
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
                <Title_Div/>
                <text className={styles.description}>{desc}</text>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="/General/About_Dark_Souls">About Dark Souls</Link>
                </div>
                <Header_Div/>
                <div className={styles.row}>
                    <Link href="/General/Dark_Souls_Remastered">About the Remaster</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="/General/Combat">Combat</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="/General/Controls">Controls</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="/General/Game_Mechanics">Game Mechanics</Link>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default General;