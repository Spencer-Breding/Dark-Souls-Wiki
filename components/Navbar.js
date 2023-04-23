import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    return (
        <div className={styles.navbar}>
            <ul className={styles.navbar_nav}>
                <li>
                    <Link href="/" className={styles.logo_link}>
                        <Image className={styles.logo} src="https://www.pngmart.com/files/4/Dark-Souls-Logo-Transparent-PNG.png"
                            alt="title" width={100} height={100} />
                    </Link>
                </li>
                <div className={styles.test }>
                    <NavItem className="general" icon="http://i.imgur.com/841SOQU.gif" text="General">

                        <div className={styles.nav_dropdown}>
                            <ul>
                                <li className={styles.dropdown_item} onClick={() => router.push('/General/About_Dark_Souls')}>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>About Dark Souls</text>
                                </li>
                                <li className={styles.dropdown_item} onClick={() => router.push('/General/Dark_Souls_Remastered')}>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>About the Remaster</text>
                                </li>
                                <li className={styles.dropdown_item} onClick={() => router.push('/General/Combat')}>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Combat</text>
                                </li>
                                <li className={styles.dropdown_item} onClick={() => router.push('/General/Controls')}>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Controls</text>
                                </li>
                                <li className={styles.dropdown_item} onClick={() => router.push('/General/Mechanics')}>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                    <text>Game Mechanics</text>
                                </li>
                                <li className={styles.sub_item} onClick={() => router.push('/General/Bonfires')}>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Bonfires</text>
                                </li>
                                <li className={styles.sub_item} onClick={() => router.push('/General/Humanity')}>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                    <text>Humanity</text>
                                </li>
                                <li className={styles.sub_item} onClick={() => router.push('/General/Weapon_Scaling')}>
                                    <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25 }/>
                                    <text>Weapon Scaling</text>
                                </li>
                            </ul>
                        </div>
                    
                    </NavItem>
                </div>
                <NavItem className="character" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png" text="Character">
                    
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Character/Builds')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text href="/Builds">Builds</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/Character/PVE_Builds')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>PVE Builds</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/Character/PVP_Builds')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>PVP Builds</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Character/Classes')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Classes</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Character/Gestures')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Gestures</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Character/Gifts')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Gifts</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Character/Stats')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Stats</text>
                            </li>
                        </ul>
                    </div>
                    
                </NavItem>
                <NavItem className="equipment" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png" text="Equipment">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item} onClick={() => router.replace('/Equipment/Armor')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Armor</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/Equipment/Helms')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>Helms</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/Equipment/Chest_Pieces')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>Chest Pieces</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/Equipment/Gauntlets')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>Gauntlets</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/Equipment/Leg_Pieces')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>Leg Pieces</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Equipment/Items')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Items</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Equipment/Rings')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Rings</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Equipment/Shields')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Shields</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Equipment/Spells')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Spells</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/Equipment/Spells/Miracles')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>Miracles</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/Equipment/Spells/Pyromancies')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>Pyromancies</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/Equipment/Spells/Sorceries')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>Sorceries</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Equipment/Upgrades')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Upgrades</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Equipment/Weapons')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Weapons</text>
                            </li>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="online" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2082.png" text="Online">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Online/Features')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Features</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Online/Invasions')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Invasions</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Online/Summoning')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Summoning</text>
                            </li>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="world" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2035.png" text="World">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item} onClick={() => router.push('/World/Covenants')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Covenants</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/World/Enemies')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Enemies</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/World/Bosses')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25}></Image>
                                <text>Bosses</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/World/NPC_Invader')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25}></Image>
                                <text>NPC Invaders</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/World/Illusory_Walls')} >
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Illusory Walls</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/World/Locales')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Locales</text>
                            </li>
                            <li className={styles.sub_item} onClick={() => router.push('/World/Maps')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                                <text>Maps</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/World/Lore')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Lore</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/World/NPCs')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>NPCs</text>
                            </li>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="guides" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/Seek_Guidance.png" text="Guides">
                    <div className={styles.nav_dropdown}>
                        <ul>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Guides/Achievements')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Achievements</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Guides/New_Game_Plus')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>New Game +</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Guides/New_Player_Help')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>New Player Help</text>
                            </li>
                            <li className={styles.dropdown_item} onClick={() => router.push('/Guides/Walkthrough')}>
                                <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                                <text>Walkthrough</text>
                            </li>
                        </ul>
                    </div>
                </NavItem>
            </ul>
        </div>
    );
}