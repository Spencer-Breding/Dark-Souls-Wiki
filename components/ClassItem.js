import React from 'react';
import Link from 'next/link';
import styles from '../styles/class_item.module.css';

export default function ClassItem({ name, portrait, equipment, level, vitality, attunement, endurance, strength, dexterity, resistance, intelligence, faith, humanity }) {
    const link = "Character/Classes/" + { name };

    return (
        <div className={styles.container}>
            <Link href={"Classes/"+name }>
                {name}
            </Link>
            <img className={styles.portrait} src={portrait} />
            <div className={styles.stat_table}>
                <div className={styles.stat_table_row}>
                    <div className={styles.stat_table_entry} id={styles.level }>
                        <img className={styles.stat_icon} id={styles.level_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_level.png" />
                        <span>{level}</span>
                    </div>
                    <div className={styles.stat_table_entry} id={styles.vitality}>
                        <img className={styles.stat_icon} id={styles.vitality_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_vitality.png" />
                        <span>{vitality}</span>
                    </div>
                </div>
                <div className={styles.stat_table_row}>
                    <div className={styles.stat_table_entry} id={styles.attunement}>
                        <img className={styles.stat_icon} id={styles.attunement_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_attunement.png" />
                        <span>{attunement}</span>
                    </div>
                    <div className={styles.stat_table_entry} id={styles.endurance}>
                        <img className={styles.stat_icon} id={styles.endurance_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_endurance.png" />
                        <span>{endurance}</span>
                    </div>
                </div>
                <div className={styles.stat_table_row}>
                    <div className={styles.stat_table_entry} id={styles.strength}>
                        <img className={styles.stat_icon} id={styles.strength_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_strength.png" />
                        <span>{strength}</span>
                    </div>
                    <div className={styles.stat_table_entry} id={styles.dexterity}>
                        <img className={styles.stat_icon} id={styles.dexterity_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_dexterity.png" />
                        <span>{dexterity}</span>
                    </div>
                </div>
                <div className={styles.stat_table_row}>
                    <div className={styles.stat_table_entry} id={styles.resistance}>
                        <img className={styles.stat_icon} id={styles.resistance_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_resistance.png" />
                        <span>{resistance}</span>
                    </div>
                    <div className={styles.stat_table_entry} id={styles.intelligence}>
                        <img className={styles.stat_icon} id={styles.intelligence_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_intelligence.png" />
                        <span>{intelligence}</span>
                    </div>
                </div>
                <div className={styles.stat_table_row}>
                    <div className={styles.stat_table_entry} id={styles.faith}>
                        <img className={styles.stat_icon} id={styles.faith_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_faith.png" />
                        <span>{faith}</span>
                    </div>
                    <div className={styles.stat_table_entry} id={styles.humanity}>
                        <img className={styles.stat_icon} id={styles.humanity_icon} src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_humanity.png" />
                        <span>{humanity}</span>
                    </div>
                </div>
            </div>
            <span id={styles.equipment }>Starts With:{equipment}</span>
        </div>
    );
}