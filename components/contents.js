import React, { useState, useRef } from 'react';
import styles from "../styles/contents.module.css";

export default function Contents(props) {
    const ref = useRef(null);
    const [openDropdown, setOpenDropdown] = useState(false)
    let dropdownText;

    if (openDropdown) {
        dropdownText = "Hide";
    }
    else {
        dropdownText = "Show";
    }

    return (
        <div className={styles.contents_container }>
            <div className={styles.contents_head }>
                <text>
                    Contents
                </text>
                <text className={styles.dropdown_brackets} ref={ref} onClick={() => setOpenDropdown(!openDropdown)} >
                    [ <text className={styles.dropdown_button }>{dropdownText}</text> ]
                </text>
            </div>
            {openDropdown && <ul>{props.children}</ul>}
        </div>

    );
}