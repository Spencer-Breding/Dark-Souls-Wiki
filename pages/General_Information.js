import React from 'react';
import styles from "../styles/General_Information.module.css";

const desc = "General Information covers the basics of Dark Souls and its systems.";

const General = () => {
    return (
        <React.Fragment>
            <div className={styles.general}>
                <h2 className={styles.title}>General Information</h2>
                <div className={styles.title_divider}>
                    <div className={styles.shadow }></div>
                </div>
                <text className={styles.description }>{desc}</text>
            </div>
        </React.Fragment>
        );
}

export default General;