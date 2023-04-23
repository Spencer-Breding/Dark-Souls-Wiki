import React from 'react';
import styles from "../styles/page_elements.module.css";

export default function HeaderDiv() {
    return (
        <div className={styles.header_divider}>
            <div className={styles.shadow}></div>
        </div>
    );
}