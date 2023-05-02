import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
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
            {openDropdown && props.children}
        </li>
    );
}

export default function Navbar(props) {
    return (
        <div className={styles.navbar}>
            <ul className={styles.navbar_nav}>
                <li>
                    <Link href="/" className={styles.logo_link}>
                        <Image className={styles.logo} src="https://www.pngmart.com/files/4/Dark-Souls-Logo-Transparent-PNG.png"
                            alt="title" width={100} height={100} />
                    </Link>
                </li>

                <NavItem className="general" icon="http://i.imgur.com/841SOQU.gif" text="General">

                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item}>
                                <Link href="/General/About_Dark_Souls">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>About Dark Souls</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/General/Dark_Souls_Remastered">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>About the Remaster</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/General/Combat">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Combat</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/General/Controls">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Controls</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/General/Mechanics">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Game Mechanics</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/General/Mechanics/Bonfires">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Bonfires</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/General/Mechanics/Humanity">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Humanity</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/General/Mechanics/Weapon_Scaling">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Weapon Scaling</text>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </NavItem>

                <NavItem className="character" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png" text="Character">

                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item}>
                                <Link href="/Character/Builds">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text href="/Builds">Builds</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/Character/Builds/PVE">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>PVE Builds</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/Character/Builds/PVP">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>PVP Builds</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Character/Classes">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Classes</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Character/Gestures">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Gestures</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Character/Gifts">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Gifts</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Character/Stats">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Stats</text>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </NavItem>
                <NavItem className="equipment" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png" text="Equipment">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item} onClick={() => {
                                setCookie('armor_state', 1);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <Link href="/Equipment/Armor">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Armor</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item} onClick={() => {
                                setCookie('armor_state', 2);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <Link href='/Equipment/Armor'>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Helms</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item} onClick={() => {
                                setCookie('armor_state', 3);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <Link href='/Equipment/Armor'>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Chest Pieces</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item} onClick={() => {
                                setCookie('armor_state', 4);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <Link href={'/Equipment/Armor'}>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Gauntlets</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item} onClick={() => {
                                setCookie('armor_state', 5);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <Link href={'/Equipment/Armor'} >
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Leg Pieces</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Equipment/Armor#Helms">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Items</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Equipment/Rings">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Rings</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Equipment/Shields">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Shields</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Equipment/Spells">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Spells</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/Equipment/Miracles">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Miracles</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/Equipment/Pyromancies">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Pyromancies</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/Equipment/Sorceries">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Sorceries</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Equipment/Upgrades">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Upgrades</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Equipment/Weapons">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Weapons</text>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="online" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2082.png" text="Online">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item}>
                                <Link href="/Online/Features">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Features</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Online/Invasions">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Invasions</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Online/Summoning">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Summoning</text>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="world" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2035.png" text="World">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item}>
                                <Link href="/World/Covenants">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Covenants</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/World/Enemies">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Enemies</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/World/Bosses">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25}></Image>
                                    <text>Bosses</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/World/NPC_Invaders">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25}></Image>
                                    <text>NPC Invaders</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/World/Illusory_Walls">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Illusory Walls</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/World/Locales">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Locales</text>
                                </Link>
                            </li>
                            <li className={styles.sub_item}>
                                <Link href="/World/Maps">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Maps</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/World/Lore">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Lore</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/World/NPCs">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>NPCs</text>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="guides" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/Seek_Guidance.png" text="Guides">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item}>
                                <Link href="/Guides/Achievements">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Achievements</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Guides/New_Game_Plus">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>New Game +</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Guides/New_Player_Help">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>New Player Help</text>
                                </Link>
                            </li>
                            <li className={styles.dropdown_item}>
                                <Link href="/Guides/Walkthrough">
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Walkthrough</text>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </NavItem>
            </ul>
        </div>
    );
}