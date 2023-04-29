import React from 'react';
import ArmorTableRow from "/components/ArmorTableRow";
import TitleDiv from "/components/TitleDiv";
import styles from "../styles/armor.module.css";

export default function Full() {
    return (
        <React.Fragment>
            <h2 id="Brigand">Brigand Set</h2>
            <TitleDiv />
            <div className={styles.table}>
                <ArmorTableRow link="Brigand_Hood" image="brigand_hood" title="Brigand Hood" durability="200" weight="1.2" regular="9" strike="10"
                    slash="10" thrust="9" magic="8" fire="5" lightning="6" bleed="8" poison="8" curse="0" poise="0" />
                <ArmorTableRow link="Brigand_Armor" image="brigand_armor" title="Brigand Armor" durability="200" weight="3.1" regular="23" strike="25.3"
                    slash="23" thrust="20.7" magic="20" fire="13" lightning="17" bleed="20" poison="20" curse="0" poise="0" />
                <ArmorTableRow link="Brigand_Gauntlets" image="brigand_gauntlets" title="Brigand Gauntlets" durability="200" weight="1.8" regular="14" strike="15.4"
                    slash="14" thrust="12.6" magic="12" fire="8" lightning="10" bleed="12" poison="12" curse="0" poise="0" />
                <ArmorTableRow link="Brigand_Trousers" image="brigand_trousers" title="Brigand Trousers" durability="200" weight="1.8" regular="14" strike="15.4"
                    slash="14" thrust="12.6" magic="12" fire="8" lightning="10" bleed="12" poison="12" curse="0" poise="0" />
            </div>
            <br />
            <br />
            <h2 id="Channeler">Channeler's Set</h2>
            <TitleDiv />
            <div className={styles.table}>
                <ArmorTableRow link="Sixeyed_Helm_of_the_Channelers" image="sixeyed_helm_of_the_channelers" title="Six-Eyed Helm of the Channelers" durability="300" weight="3.9" regular="20" strike="19.2"
                    slash="22.8" thrust="20" magic="18" fire="17" lightning="13" bleed="15" poison="13" curse="0" poise="5" />
                <ArmorTableRow link="Robe_of_the_Channelers" image="robe_of_the_channelers" title="Robe of the Channelers" durability="300" weight="10.1" regular="53" strike="50.9"
                    slash="60.4" thrust="53" magic="45" fire="45" lightning="35" bleed="38" poison="33" curse="0" poise="12" />
                <ArmorTableRow link="Gauntlets_of_the_Channelers" image="gauntlets_of_the_channelers" title="Gauntlets of the Channelers" durability="300" weight="3" regular="17" strike="16.3"
                    slash="19.4" thrust="17" magic="13" fire="13" lightning="0" bleed="12" poison="10" curse="0" poise="3" />
                <ArmorTableRow link="Waistcloth_of_the_Channelers" image="waistcloth_of_the_channelers" title="Waistcloth of the Channelers" durability="300" weight="6" regular="32" strike="30.7"
                    slash="36.5" thrust="32" magic="27" fire="27" lightning="30" bleed="23" poison="20" curse="0" poise="7" />
            </div>
            <br />
            <br />
            <h2 id="Tattered">Tattered Cloth Set</h2>
            <TitleDiv />
            <div className={styles.table}>
                <ArmorTableRow link="Tattered_Cloth_Hood" image="tattered_cloth_hood" title="Tattered Cloth Hood" durability="400" weight="1.1" regular="8" strike="8.9"
                    slash="8" thrust="8" magic="9" fire="12" lightning="6" bleed="9" poison="23" curse="1" poise="0" />
                <ArmorTableRow link="Tattered_Cloth_Robe" image="tattered_cloth_robe" title="Tattered Cloth Robe" durability="400" weight="2.7" regular="21" strike="23.3"
                    slash="21" thrust="21" magic="23" fire="30" lightning="17" bleed="23" poison="59" curse="2" poise="0" />
                <ArmorTableRow link="Tattered_Cloth_Manchette" image="tattered_cloth_manchette" title="Tattered Cloth Manchette" durability="400" weight="1.6" regular="12" strike="13.3"
                    slash="12" thrust="12" magic="14" fire="18" lightning="10" bleed="14" poison="35" curse="1" poise="0" />
                <ArmorTableRow link="Heavy_Boots" image="heavy_boots" title="Heavy Boots" durability="400" weight="1.6" regular="12" strike="13.3"
                    slash="12" thrust="12" magic="14" fire="18" lightning="10" bleed="14" poison="35" curse="1" poise="0" />
            </div>
            <br />
            <br />
            <h2 id="Wanderer">Wanderer Set</h2>
            <TitleDiv />
            <div className={styles.table}>
                <ArmorTableRow link="Wanderer_Hood" image="wanderer_hood" title="Wanderer Hood" durability="400" weight="1.4" regular="9" strike="10"
                    slash="10" thrust="9" magic="8" fire="9" lightning="10" bleed="8" poison="8" curse="0" poise="0" />
                <ArmorTableRow link="Wanderer_Coat" image="wanderer_coat" title="Wanderer Coat" durability="400" weight="3.5" regular="23" strike="24.6"
                    slash="24.6" thrust="23" magic="21" fire="26" lightning="23" bleed="21" poison="21" curse="0" poise="0" />
                <ArmorTableRow link="Wanderer_Manchette" image="wanderer_manchette" title="Wanderer Manchette" durability="400" weight="2.1" regular="14" strike="15"
                    slash="15" thrust="14" magic="12" fire="15" lightning="13" bleed="13" poison="13" curse="0" poise="0" />
                <ArmorTableRow link="Wanderer_Boots" image="wanderer_boots" title="Wanderer Boots" durability="400" weight="2.1" regular="14" strike="15"
                    slash="15" thrust="14" magic="12" fire="15" lightning="13" bleed="13" poison="13" curse="0" poise="0" />
            </div>
        </React.Fragment>
    );
}