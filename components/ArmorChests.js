import React from 'react';
import ArmorTableRow from "/components/ArmorTableRow";
import TitleDiv from "/components/TitleDiv";
import styles from "../styles/armor.module.css";

export default function Chests() {
    return (
        <div className={styles.table}>
            <ArmorTableRow link="Brigand_Armor" image="brigand_armor" title="Brigand Armor" durability="200" weight="3.1" regular="23" strike="25.3"
                slash="23" thrust="20.7" magic="20" fire="13" lightning="17" bleed="20" poison="20" curse="0" poise="0" />
            <ArmorTableRow link="Robe_of_the_Channelers" image="robe_of_the_channelers" title="Robe of the Channelers" durability="300" weight="10.1" regular="53" strike="50.9"
                slash="60.4" thrust="53" magic="45" fire="45" lightning="35" bleed="38" poison="33" curse="0" poise="12" />
            <ArmorTableRow link="Tattered_Cloth_Robe" image="tattered_cloth_robe" title="Tattered Cloth Robe" durability="400" weight="2.7" regular="21" strike="23.3"
                slash="21" thrust="21" magic="23" fire="30" lightning="17" bleed="23" poison="59" curse="2" poise="0" />
            <ArmorTableRow link="Wanderer_Coat" image="wanderer_coat" title="Wanderer Coat" durability="400" weight="3.5" regular="23" strike="24.6"
                slash="24.6" thrust="23" magic="21" fire="26" lightning="23" bleed="21" poison="21" curse="0" poise="0" />
        </div>
    );
}