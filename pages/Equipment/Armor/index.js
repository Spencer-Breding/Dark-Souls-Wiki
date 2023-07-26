import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {hasCookie, setCookie, getCookie } from 'cookies-next';
import Contents from "../../../components/contents";
import Grad from "../../../components/grad";
import Full from "../../../components/ArmorFull";
import Helms from "../../../components/ArmorHelms";
import Chests from "../../../components/ArmorChests";
import Gauntlets from "../../../components/ArmorGauntlets";
import Legs from "../../../components/ArmorLegs";
import Spacer from "../../../components/spacer";
import TitleDiv from "../../../components/TitleDiv";
import Title from "../../../components/title";
import styles from "../../../styles/armor.module.css";

const dark = <Link href="/General/About_Dark_Souls">Dark Souls</Link>
const elemental = <Link href="/General/Mechanics/Damage/Elemental">elemental</Link>
const physical = <Link href="/General/Mechanics/Damage/Physical">physical</Link>
const poise = <Link href="/General/Mechanics/Poise">poise</Link>
const status = <Link href="/General/Mechanics/Status_Effects">status effects</Link>
const desc = <text className={styles.description}><em>Armor</em> is a type of equipment in <em>{dark}</em> that provides: protection against both {physical} and {elemental} damage, resistance against
    negative {status}, and an increase the player's {poise}.</text>

export default function Armor() {
    const [sortMode, setSortMode] = useState(0);
    useEffect(() => {
        if (hasCookie('armor_state')) {
            setSortMode(getCookie('armor_state'));
        }
        else {
            setSortMode(1);
            setCookie('armor_state', 1);
        }
        const listenCookieChange = () => {
            setSortMode(getCookie('armor_state'));
        }
        window.addEventListener("cookie", listenCookieChange);
        return () => window.removeEventListener("cookie", listenCookieChange);
    }, [])
    const selectedColor = "#AE9E69";
    const selectedHover = "#907040";
    const notSelectedColor = "#333333";
    const notSelectedHover = "#222226";

    return (
        <React.Fragment>
            <Grad />
            <div className={styles.container}>
                <Title title="Armor" />
                <TitleDiv />
                <div className={styles.info}>
                    {desc}
                    <br />
                    <br />
                    <br />
                    {(sortMode == 1) && <Contents>
                        <Link href='#Brigand'><li><text>Brigand Set</text></li></Link>
                        <Link href="#Channeler"><li><text>Channeler's Set</text></li></Link>
                        <Link href='#Tattered'><li><text>Tattered Cloth Set</text></li></Link>
                        <Link href="#Wanderer"><li><text>Wanderer Set</text></li></Link>
                    </Contents>}
                    <br />
                    <br />
                    <br />
                    <h2 className={styles.sort}>Sort By</h2>
                    <div className={styles.sorting_buttons}>
                        <button className={styles.button_full} style={{ '--button-full-color': sortMode == 1 && selectedColor || notSelectedColor, '--button-full-hover': sortMode == 1 && selectedHover || notSelectedHover }}
                            onClick={() => {
                                setSortMode(1)
                                setCookie('armor_state', 1);
                            }}>Full Sets</button>
                        <button className={styles.button_helm} style={{ '--button-helm-color': sortMode == 2 && selectedColor || notSelectedColor, '--button-helm-hover': sortMode == 2 && selectedHover || notSelectedHover }}
                            onClick={() => {
                                setSortMode(2)
                                setCookie('armor_state', 2);
                            }}>Helms</button>
                        <button className={styles.button_chest} style={{ '--button-chest-color': sortMode == 3 && selectedColor || notSelectedColor, '--button-chest-hover': sortMode == 3 && selectedHover || notSelectedHover }}
                            onClick={() => {
                                setSortMode(3)
                                setCookie('armor_state', 3);
                            }}>Chest Pieces</button>
                        <button className={styles.button_gauntlets} style={{ '--button-gauntlets-color': sortMode == 4 && selectedColor || notSelectedColor, '--button-gauntlets-hover': sortMode == 4 && selectedHover || notSelectedHover }}
                            onClick={() => {
                                setSortMode(4)
                                setCookie('armor_state', 4);
                            }}>Gauntlets</button>
                        <button className={styles.button_legs} style={{ '--button-legs-color': sortMode == 5 && selectedColor || notSelectedColor, '--button-legs-hover': sortMode == 5 && selectedHover || notSelectedHover }}
                            onClick={() => {
                                setSortMode(5);
                                setCookie('armor_state', 5);
                            }}>Leggings</button>
                    </div>
                    {(sortMode == 1) && <Full />}
                    {(sortMode == 2) && <Helms />}
                    {(sortMode == 3) && <Chests />}
                    {(sortMode == 4) && <Gauntlets />}
                    {(sortMode == 5) && <Legs />}
                </div>
                <Spacer />
            </div>
        </React.Fragment>

    );
}