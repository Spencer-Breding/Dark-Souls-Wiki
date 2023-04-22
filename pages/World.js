import React from 'react';
import Link from 'next/link';
import Header_Div from "../components/header_div";
import Title_Div from "../components/title_div";
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
                <Title_Div/>
                <text className={styles.description}>{desc}</text>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="World/Covenants">Covenants</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="World/Enemies">Enemies</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="World/Illusory_Walls">Illusory Walls</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="World/Locales">Locales</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="World/Lore">Lore</Link>
                </div>
                <Header_Div />
                <div className={styles.row}>
                    <Link href="World/NPCs">NPCs</Link>
                </div>
                <Spacer />
            </div>
        </React.Fragment>
    );
}

export default World;