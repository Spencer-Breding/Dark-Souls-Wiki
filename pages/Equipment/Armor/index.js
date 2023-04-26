import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Contents from "../../../components/contents";
import Grad from "../../../components/grad";
import Full from "../../../components/ArmorFull";
import Individual from "../../../components/ArmorIndividual";
import Spacer from "../../../components/spacer";
import TitleDiv from "../../../components/TitleDiv";
import Title from "../../../components/title";
import styles from "../../../styles/armor.module.css";

const dark = <Link href="/General/About_Dark_Souls">Dark Souls</Link>
const elemental = <Link href="/General/Mechanics/Damage/Elemental">elemental</Link>
const physical = <Link href="/General/Mechanics/Damage/Physical">physical</Link>
const poise = <Link href="/General/Mechanics/Poise">poise</Link>
const status = <Link href="/General/Mechanics/Status_Effects">status effects</Link>
const desc = <text><em>Armor</em> is a type of equipment in <em>{dark}</em> that provides: protection against both {physical} and {elemental} damage, resistance against
    negative {status}, and an increase the player's {poise }.</text>

export default function Armor() {
    const [sortMode, setSortMode] = useState(0);
    var fullColor;
    var fullHover;
    var individualColor;
    var individualHover;

    if (sortMode == 0) {
        fullColor = "#AE9E69";
        fullHover = "#907040";
        individualColor = "#333333";
        individualHover = "#222226";
    }
    else {
        fullColor = "#333333";
        fullHover = "#222226";
        individualColor = "#AE9E69";
        individualHover = "#907040";
    }

    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.container }>
                <Title title="Armor" />
                <TitleDiv />
                <div className={styles.info}>
                    <text className={styles.description}>{desc}</text>
                </div>
                <br />
                <br />
                <div className={styles.info }>
                    <Contents>
                        {(sortMode == 0) &&
                            <>
                                <Link href='#Brigand'><li><text>Brigand Set</text></li></Link>
                                <Link href="#Channeler"><li><text>Channeler's Set</text></li></Link>
                                <Link href='#Tattered'><li><text>Tattered Cloth Set</text></li></Link>
                                <Link href="#Wanderer"><li><text>Wanderer Set</text></li></Link>
                            </>
                        }
                        {(sortMode == 1) &&
                        <>
                            <Link href='#Helms'><li><text>Helms</text></li></Link>
                            <Link href="#Chest"><li><text>Chest Pieces</text></li></Link>
                            <Link href='#Gauntlets'><li><text>Gauntlets</text></li></Link>
                            <Link href="#Legs"><li><text>Leg Pieces</text></li></Link>
                        </>
                        }
                    </Contents>
                    <br />
                    <br />
                    <text className={styles.sort}>Sort By</text>
                    <div className={styles.sorting_buttons}>
                        <button className={styles.button_full} style={{ '--button-full-color': fullColor, '--button-full-hover': fullHover }} onClick={() =>
                            setSortMode(0)
                        }>Full Sets</button>
                        <button className={styles.button_individual} style={{ '--button-individual-color': individualColor, '--button-individual-hover': individualHover }} onClick={() =>
                            setSortMode(1)
                           
                        }>Individual Pieces</button>
                    </div>
                    {
                        (sortMode == 0) && < Full />
                    }
                    {
                        (sortMode == 1) && < Individual />
                    }
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
        
        );
}