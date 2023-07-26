import React from 'react';
import Link from 'next/link';
import HeaderDiv from "../../../components/HeaderDiv";
import TitleDiv from "../../../components/TitleDiv";
import Grad from "../../../components/grad";
import Spacer from "../../../components/spacer";
import Title from "../../../components/title";
import ClassItem from "../../../components/ClassItem";
import styles from "../../../styles/Information.module.css";
import classes from "../../../styles/classes.module.css";

const desc = ""

export default function Classes() {
    return (
        <React.Fragment>
            <Grad />
            <div className={styles.container}>
                <Title title="Classes" />
                <TitleDiv />
                <text className={styles.description}>{desc}</text>
                <HeaderDiv />
                
                <div className={classes.row}>
                    <ClassItem name="Warrior" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/warrior-starting-class-male-dark-souls.jpg" level="4" vitality="11"
                        attunement="9" endurance="11" strength="12" dexterity="14" resistance="11" intelligence="9" faith="9" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Longsword">Longsword</Link>, <Link href="/Equipment/Shields/Heater_Shield">Heater Shield</Link>, 
                            <Link href="/Equipment/Armor/Standard_Helm">Standard Helm</Link>, <Link href="/Equipment/Armor/Hard_Leather_Armor">Hard Leather Armor</Link>, 
                            <Link href="/Equipment/Armor/Hard_Leather_Gauntlets">Hard Leather Gauntlets</Link>, <Link href="/Equipment/Armor/Hard_Leather_Boots">Hard Leather Boots</Link>
                        </text>
                    />
                </div>
            </div>
        </React.Fragment>
        )
}