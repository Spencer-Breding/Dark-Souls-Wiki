import React from 'react';
import ArmorTableRow from "/components/ArmorTableRow";
import styles from "../styles/armor.module.css";

export default function Gauntlets() {
    return (
        <div className={styles.table}>
            <ArmorTableRow link="Brigand_Gauntlets" image="brigand_gauntlets" title="Brigand Gauntlets" durability="200" weight="1.8" regular="14" strike="15.4"
                slash="14" thrust="12.6" magic="12" fire="8" lightning="10" bleed="12" poison="12" curse="0" poise="0" />
            <ArmorTableRow link="Gauntlets_of_the_Channelers" image="gauntlets_of_the_channelers" title="Gauntlets of the Channelers" durability="300" weight="3" regular="17" strike="16.3"
                slash="19.4" thrust="17" magic="13" fire="13" lightning="0" bleed="12" poison="10" curse="0" poise="3" />
            <ArmorTableRow link="Tattered_Cloth_Manchette" image="tattered_cloth_manchette" title="Tattered Cloth Manchette" durability="400" weight="1.6" regular="12" strike="13.3"
                slash="12" thrust="12" magic="14" fire="18" lightning="10" bleed="14" poison="35" curse="1" poise="0" />
            <ArmorTableRow link="Wanderer_Manchette" image="wanderer_manchette" title="Wanderer Manchette" durability="400" weight="2.1" regular="14" strike="15"
                slash="15" thrust="14" magic="12" fire="15" lightning="13" bleed="13" poison="13" curse="0" poise="0" />
        </div>
    );
}