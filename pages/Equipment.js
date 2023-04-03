import React from 'react';
import styles from "../styles/Equipment.module.css";

const desc = "Equipment Information covers anything that can be equipped such as: Weapons, Armor, Rings, and Spells";

const Equipment = () => {
    return (
        <React.Fragment>
            <div className={styles.equipment }>
                <h2 className={styles.title }>Equipment Information</h2>
                <div className={styles.title_divider }>
                    <div className={styles.shadow }></div>
                </div>
                <text className={styles.description }>{desc}</text>
            </div>
        </React.Fragment>
    );
}

export default Equipment;