import React, { useState, useEffect } from 'react';
import styles from "../styles/contents.module.css";

export default function Contents(props) {
    const [openDropdown, setOpenDropdown] = useState(localStorage.getItem('openDropdown'));

    useEffect(() => {
        localStorage.setItem('openDropdown', openDropdown);
    }, [openDropdown]);

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
                <text className={styles.dropdown_brackets} onClick={() => setOpenDropdown(!openDropdown)} >
                    [ <text className={styles.dropdown_button }>{dropdownText}</text> ]
                </text>
            </div>
            {openDropdown && <ul>{props.children}</ul>}
        </div>

    );
}