import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from "../styles/armor.module.css";

export default function ArmorTableRow(props) {
    return (
        <div className={styles.table_row }>
            <div className={styles.table_item_link }>
                <Link href={ "/Equipment/Armor/"+props.link }>
                    <img src={"https://darksouls.wiki.fextralife.com/file/Dark-Souls/" + props.image + ".png"} />
                    <text>{props.title}</text>
                </Link>
            </div>
            <div className={styles.table_item_info }>
                <div className={styles.table_item_column }>
                    <text>{props.durability}</text>
                    <img id={styles.durability_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_other_dura.png" />
                    <div id={styles.durability_container} className={styles.table_dropdown}>
                        <text>Durability</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.weight}</text>
                    <img id={styles.weight_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_other_weig.png" />
                    <div id={styles.weight_container} className={styles.table_dropdown}>
                        <text>Weight</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.regular}</text>
                    <img id={styles.regular_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_phy.png" />
                    <div id={styles.regular_container} className={styles.table_dropdown }>
                        <text>Regular Defense</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.strike}</text>
                    <img id={styles.strike_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_strike.png" />
                    <div id={styles.strike_container} className={styles.table_dropdown}>
                        <text>Strike Defense</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.slash}</text>
                    <img id={styles.slash_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_slash.png" />
                    <div id={styles.slash_container} className={styles.table_dropdown}>
                        <text>Slash Defense</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.thrust}</text>
                    <img id={styles.thrust_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_thrust.png" />
                    <div id={styles.thrust_container} className={styles.table_dropdown}>
                        <text>Thrust Defense</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.magic}</text>
                    <img id={styles.magic_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_magi.png" />
                    <div id={styles.magic_container} className={styles.table_dropdown}>
                        <text>Magic Defense</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.fire}</text>
                    <img id={styles.fire_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_fire.png" />
                    <div id={styles.fire_container} className={styles.table_dropdown}>
                        <text>Fire Defense</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.lightning}</text>
                    <img id={styles.lightning_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_prot_lightn.png" />
                    <div id={styles.lightning_container} className={styles.table_dropdown}>
                        <text>Lightning Defense</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.bleed}</text>
                    <img id={styles.bleed_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_bleed.png" />
                    <div id={styles.bleed_container} className={styles.table_dropdown}>
                        <text>Bleed Resistance</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.poison}</text>
                    <img id={styles.poison_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_poison.png" />
                    <div id={styles.poison_container} className={styles.table_dropdown}>
                        <text>Poison Resistance</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.curse}</text>
                    <img id={styles.curse_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_curse.png" />
                    <div id={styles.curse_container} className={styles.table_dropdown}>
                        <text>Curse Resistance</text>
                    </div>
                </div>
                <div className={styles.table_item_column}>
                    <text>{props.poise}</text>
                    <img id={styles.poise_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_poise.png" />
                    <div id={styles.poise_container} className={styles.table_dropdown}>
                        <text>Poise</text>
                    </div>
                </div>
            </div>
        </div>
    );
}