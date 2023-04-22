import React from 'react';
import Link from 'next/link';
import Contents from "../../../components/contents";
import Grad from "../../../components/grad";
import Spacer from "../../../components/spacer";
import Title_Div from "../../../components/title_div";
import Title from "../../../components/title";
import styles from "../../../styles/article.module.css";
import armor from "../../../styles/armor.module.css";

const dark = <Link href="/General/About_Dark_Souls">Dark Souls</Link>
const elemental = <Link href="/General/Mechanics/Damage/Elemental">elemental</Link>
const physical = <Link href="/General/Mechanics/Damage/Physical">physical</Link>
const poise = <Link href="/General/Mechanics/Poise">poise</Link>
const status = <Link href="/General/Mechanics/Status_Effects">status effects</Link>
const desc = <text><em>Armor</em> is a type of equipment in <em>{dark}</em> that provides: protection against both {physical} and {elemental}, resistance against
    negative {status}, and an increase the player's {poise }.</text>

export default function Armor() {
    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container }>
                <Title title="Armor" />
                <Title_Div />
                <div className={styles.info}>
                    <text className={styles.description}>{desc}</text>
                </div>
                <br />
                <br />
                <div className={styles.info }>
                    <Contents>
                        <Link href="#Chest"><li><text>Chest Pieces</text></li></Link>
                        <Link href='#Gauntlets'><li><text>Gauntlets</text></li></Link>
                        <Link href='#Helms'><li><text>Helms</text></li></Link>
                        <Link href="#Legs"><li><text>Leg Pieces</text></li></Link>
                    </Contents>
                    <br />
                    <br />
                    <h2 className={styles.body_header} id="Chest">Chest Pieces</h2>
                    <Title_Div />
                    <div className={armor.table}>
                        <div className={armor.table_item}>
                            <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/wanderer_hood.png" />
                            <Link href="/Equipment/Armor/Wanderer_Hood">Wanderer Hood</Link>
                        </div>
                    </div>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
        
        );
}