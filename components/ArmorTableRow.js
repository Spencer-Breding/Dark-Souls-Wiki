import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from "../styles/armor.module.css";

export default function ArmorTableRow(props) {
    return (
        <div className={styles.table_item}>
            <Link className={styles.table_item_link} href={ "/Equipment/Armor/"+props.link }>
                <img src={"https://darksouls.wiki.fextralife.com/file/Dark-Souls/" + props.image + ".png"} />
                <text>{props.title}</text>
            </Link>
            <div className={styles.table_item_info }>
                <text>{props.durability}</text>
                <img className={styles.durability_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_other_dura.png" />
                <div className={styles.durability_container}>
                    <text>Durability</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.weight}</text>
                <img className={styles.weight_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_other_weig.png" />
                <div className={styles.weight_container}>
                    <text>Weight</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.regular}</text>
                <img className={styles.regular_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_phy.png" />
                <div className={styles.regular_container}>
                    <text>Regular Defense</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.strike}</text>
                <img className={styles.strike_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_strike.png" />
                <div className={styles.strike_container}>
                    <text>Strike Defense</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.slash}</text>
                <img className={styles.slash_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_slash.png" />
                <div className={styles.slash_container}>
                    <text>Slash Defense</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.thrust}</text>
                <img className={styles.thrust_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_thrust.png" />
                <div className={styles.thrust_container}>
                    <text>Thrust Defense</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.magic}</text>
                <img className={styles.magic_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_magi.png" />
                <div className={styles.magic_container}>
                    <text>Magic Defense</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.fire}</text>
                <img className={styles.fire_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_fire.png" />
                <div className={styles.fire_container}>
                    <text>Fire Defense</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.lightning}</text>
                <img className={styles.lightning_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_lightn.png" />
                <div className={styles.lightning_container}>
                    <text>Lightning Defense</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.bleed}</text>
                <img className={styles.bleed_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_bleed.png" />
                <div className={styles.bleed_container}>
                    <text>Bleed Resistance</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.poison}</text>
                <img className={styles.poison_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_poison.png" />
                <div className={styles.poison_container}>
                    <text>Poison Resistance</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.curse}</text>
                <img className={styles.curse_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_curse.png" />
                <div className={styles.curse_container}>
                    <text>Curse Resistance</text>
                </div>
            </div>
            <div className={styles.table_item_info}>
                <text>{props.poise}</text>
                <img className={styles.poise_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_poise.png" />
                <div className={styles.poise_container}>
                    <text>Poise</text>
                </div>
            </div>
        </div>
    );
}