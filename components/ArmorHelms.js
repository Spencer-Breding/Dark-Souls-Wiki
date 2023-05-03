import React from 'react';
import ArmorTableRow from "/components/ArmorTableRow";
import styles from "../styles/armor.module.css";

export default function Helms() {
    return (
        <div className={styles.table}>
            <ArmorTableRow link="Brigand_Hood" image="brigand_hood" title="Brigand Hood" durability="200" weight="1.2" regular="9" strike="10"
                slash="10" thrust="9" magic="8" fire="5" lightning="6" bleed="8" poison="8" curse="0" poise="0" />
            <ArmorTableRow link="Sixeyed_Helm_of_the_Channelers" image="sixeyed_helm_of_the_channelers" title="Six-Eyed Helm of the Channelers" durability="300" weight="3.9" regular="20" strike="19.2"
                slash="22.8" thrust="20" magic="18" fire="17" lightning="13" bleed="15" poison="13" curse="0" poise="5" />
            <ArmorTableRow link="Tattered_Cloth_Hood" image="tattered_cloth_hood" title="Tattered Cloth Hood" durability="400" weight="1.1" regular="8" strike="8.9"
                slash="8" thrust="8" magic="9" fire="12" lightning="6" bleed="9" poison="23" curse="1" poise="0" />
            <ArmorTableRow link="Wanderer_Hood" image="wanderer_hood" title="Wanderer Hood" durability="400" weight="1.4" regular="9" strike="10"
                slash="10" thrust="9" magic="8" fire="9" lightning="10" bleed="8" poison="8" curse="0" poise="0" />
        </div>
    );
}