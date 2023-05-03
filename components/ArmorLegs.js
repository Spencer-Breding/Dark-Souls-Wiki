import React from 'react';
import ArmorTableRow from "/components/ArmorTableRow";
import styles from "../styles/armor.module.css";

export default function Legs() {
    return (
        <div className={styles.table}>
            <ArmorTableRow link="Brigand_Trousers" image="brigand_trousers" title="Brigand Trousers" durability="200" weight="1.8" regular="14" strike="15.4"
                slash="14" thrust="12.6" magic="12" fire="8" lightning="10" bleed="12" poison="12" curse="0" poise="0" />
            <ArmorTableRow link="Heavy_Boots" image="heavy_boots" title="Heavy Boots" durability="400" weight="1.6" regular="12" strike="13.3"
                slash="12" thrust="12" magic="14" fire="18" lightning="10" bleed="14" poison="35" curse="1" poise="0" />
            <ArmorTableRow link="Waistcloth_of_the_Channelers" image="waistcloth_of_the_channelers" title="Waistcloth of the Channelers" durability="300" weight="6" regular="32" strike="30.7"
                slash="36.5" thrust="32" magic="27" fire="27" lightning="30" bleed="23" poison="20" curse="0" poise="7" />
            <ArmorTableRow link="Wanderer_Boots" image="wanderer_boots" title="Wanderer Boots" durability="400" weight="2.1" regular="14" strike="15"
                slash="15" thrust="14" magic="12" fire="15" lightning="13" bleed="13" poison="13" curse="0" poise="0" />
        </div>
    );
}