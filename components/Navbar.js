import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

function NavItem(props) {
    const ref = useRef(null);
    const [openDropdown, setOpenDropdown] = useState(false)

    const closeDropdown = (e) => {
        if (ref.current && openDropdown && !ref.current.contains(e.target)) {
            setOpenDropdown(false);
        }
    }

    if (process.browser) {
        document.addEventListener('click', closeDropdown);
    }

    return (
        <li className={styles.nav_item} ref={ref} onClick={() => setOpenDropdown(!openDropdown)}>
            <Image className={styles.nav_icon} src={props.icon} alt="icon" width={100} height={100} onClick={() => setOpenDropdown(!openDropdown)} />
            <text className={styles.nav_text} onClick={() => setOpenDropdown(!openDropdown)}>{props.text}</text>
            {openDropdown && props.children }
        </li>
        );
}

export default function Navbar(props) {
    return (
        <div className={styles.navbar}>
            <ul className={styles.navbar_nav}>
                <Link href="/" className={styles.logo_link}>
                    <Image className={styles.logo} src="https://www.pngmart.com/files/4/Dark-Souls-Logo-Transparent-PNG.png"
                        alt="title" width={100} height={100} />
                </Link>
                <NavItem className="general" icon="http://i.imgur.com/841SOQU.gif" text="General">

                    <div className={styles.nav_dropdown}>
                        <ul>
                            <Link href="Combat">Combat</Link>
                            <Link href="Controls">Controls</Link>
                            <Link href="/General_Information">General Information</Link>
                            <Link href="Secrets">Secrets</Link>
                            <Link href="Weapon+Scaling">Weapon Scaling</Link>
                            <ul>

                            </ul>
                        </ul>
                    </div>
                    
                </NavItem>
                <NavItem className="character" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png" text="Character">
                    
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <Link href="/Character_Information">Character Information</Link>
                            <Link href="/Classes">Classes</Link>
                        </ul>
                    </div>
                    
                </NavItem>
                <NavItem className="equipment" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png" text="Equipment">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <Link href="/Armor">Armor</Link>
                            <Link href="/Items">Items</Link>
                            <Link href="/Rings">Rings</Link>
                            <Link href="/Shields">Shields</Link>
                            <Link href="/Spells">Spells</Link>
                            <Link href="/Upgrades">Upgrades</Link>
                            <Link href="/Weapons">Weapons</Link>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="online" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2082.png" text="Online">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <Link href="/Features">Features</Link>
                            <Link href="/Invasions">Invasions</Link>
                            <Link href="/Summoning">Summoning</Link>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="world" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2035.png" text="World">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <Link href="/Covenants">Covenants</Link>
                            <Link href="/Enemies">Enemies</Link>
                            <Link href="/Locales">Locales</Link>
                            <Link href="/Lore">Lore</Link>
                            <Link href="/NPCs">NPCs</Link>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="guides" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/Seek_Guidance.png" text="Guides">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <Link href="/Bosses">Bosses</Link>
                            <Link href="/New+Game+Plus">New Game +</Link>
                            <Link href="/New+Player+Help">New Player Help</Link>
                            <Link href="/Walkthrough">Walkthrough</Link>
                        </ul>
                    </div>
                </NavItem>
            </ul>
        </div>
    );
}