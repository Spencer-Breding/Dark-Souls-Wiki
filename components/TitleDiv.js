import React from 'react';
import styles from "../styles/page_elements.module.css";

export default function TitleDiv() {
    return (
        <div className={styles.title_divider}>
            <div className={styles.shadow}></div>
        </div>
    );
}