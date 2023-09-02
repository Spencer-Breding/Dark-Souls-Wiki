import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

function Burger(props) {
    const ref = useRef(null);
    const [openBurger, setOpenBurger] = useState(false)


    const closeBurger = (e) => {
        if (ref.current && openBurger && !ref.current.contains(e.target)) {
            setOpenBurger(false);
        }
    }

    if (process.browser) {
        document.addEventListener('click', closeBurger);
    }

    return (
        <React.Fragment>
            <div className={styles.burger} onClick={() => setOpenBurger(!openBurger)}>
                {(openBurger === false) &&
                    <><div className={styles.burger_line} /><div className={styles.burger_line} /><div className={styles.burger_line} /></>
                }
                {(openBurger === true) &&
                    <><div className={styles.x_left} /><div className={styles.x_right} />
                        {props.children}
                    </>
                }
            </div>
        </React.Fragment >
    );
}

function BurgerCategory(props) {
    const ref = useRef(null);
    const [openDropdown, setOpenDropdown] = useState(false)
    const [hover, setHover] = useState(false)
    const hoverColor = "#333338"
    const notHoverColor = "#222226"
    let arrow;

    if (openDropdown) {
        arrow = "Ʌ";
    }
    else {
        arrow = "V";
    }

    return (
        <div className={styles.burger_category} >
            <div id={styles.burger_header} style={{ '--category-color': (hover === true && hoverColor) || notHoverColor }} ref={ref} onMouseEnter={() => { setHover(true); }}
                onMouseLeave={() => { setHover(false); }} onClick={(e) => { e.stopPropagation(); setOpenDropdown(!openDropdown) }}>
                <Image className={styles.burger_icon} src={props.icon} alt="icon" width={100} height={100} onClick={() => setOpenDropdown(!openDropdown)} />
                <text className={styles.burger_text} onClick={() => setOpenDropdown(!openDropdown)}>{props.text}</text>
                <text className={styles.arrow} onClick={() => setOpenDropdown(!openDropdown)}>{arrow}</text>
            </div>
            {openDropdown && props.children}
        </div>
    );
}

function BurgerItem(props) {
    const ref = useRef(null);
    const [openDropdown, setOpenDropdown] = useState(false)
    const [hover, setHover] = useState(false)
    const hoverColor = "#333338"
    const notHoverColor = "#222226"
    let arrow;

    if (openDropdown) {
        arrow = "Ʌ";
    }
    else {
        arrow = "V";
    }

    return (
        <div className={styles.burger_item}>
            <div id={styles.burger_header} style={{ '--category-color': (hover === true && hoverColor) || notHoverColor }} ref={ref} onMouseEnter={() => { setHover(true); }}
                onMouseLeave={() => { setHover(false); }} onClick={(e) => { e.stopPropagation(); setOpenDropdown(!openDropdown) }}>
                <Image className={styles.burger_icon} src={props.icon} alt="icon" width={100} height={100} onClick={() => setOpenDropdown(!openDropdown)} />
                <text className={styles.burger_text} onClick={() => setOpenDropdown(!openDropdown)}>{props.text}</text>
                <text style={((props.hasArrow === true) && { visibility:'visible' }) || { visibility:'hidden' }} className={styles.arrow} onClick={() => setOpenDropdown(!openDropdown)}>{arrow}</text>
            </div>
            {openDropdown && props.children}
        </div>
    );
}

function BurgerSubItem(props) {
    const ref = useRef(null);
    const [hover, setHover] = useState(false)
    const hoverColor = "#333338"
    const notHoverColor = "#222226"

    return (
        <div id={styles.burger_header} className={styles.burger_sub_item} style={{ '--category-color': (hover === true && hoverColor) || notHoverColor }} ref={ref} onMouseEnter={() => {setHover(true); }}
            onMouseLeave={() => { setHover(false); }}>
            <Image className={styles.burger_icon} src={props.icon} alt="icon" width={100} height={100} />
            <text className={styles.burger_text}>{props.text}</text>
        </div>
    );
}

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
        <div className={styles.nav_item} ref={ref} onClick={() => setOpenDropdown(!openDropdown)}>
            <div className={styles.nav_header}>
                <Image className={styles.nav_icon} src={props.icon} alt="icon" width={100} height={100} onClick={() => setOpenDropdown(!openDropdown)} />
                <text className={styles.nav_text} onClick={() => setOpenDropdown(!openDropdown)}>{props.text}</text>
            </div>
            {openDropdown && props.children}
        </div>
    );
}

export default function Navbar(props) {
    return (
        <div className={styles.navbar}>
            <Burger>
                <div className={styles.burger_dropdown}>
                    <BurgerCategory icon="http://i.imgur.com/841SOQU.gif" text="General Information">
                        <Link href="/General/About_Dark_Souls">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="About Dark Souls" hasArrow={false} />
                        </Link>
                        <Link href="/General/Dark_Souls_Remastered">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="About the Remaster" hasArrow={false} />
                        </Link>
                        <Link href="/General/Combat">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Combat" hasArrow={false} />
                        </Link>
                        <Link href="/General/Controls">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Controls" hasArrow={false} />
                        </Link>
                        <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Game Mechanics" hasArrow={true}>
                            <Link href="/General/Mechanics/Bonfires">
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Bonfires" />
                            </Link>
                            <Link href="/General/Mechanics/Humanity">
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Humanity" />
                            </Link>
                            <Link href="/General/Mechanics/Weapon_Scaling">
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Weapon Scaling" />
                            </Link>
                        </BurgerItem>
                    </BurgerCategory>
                    <BurgerCategory icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png" text="Character">
                        
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Builds" hasArrow={true}>
                                <Link href="/Character/Builds/PVE">
                                    <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="PVE Builds" />
                                </Link>
                                <Link href="/Character/Builds/PVP">
                                    <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="PVP Builds" />
                                </Link>
                        </BurgerItem>
                        <Link href="/Character/Classes">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Classes" hasArrow={false} />
                        </Link>
                        <Link href="/Character/Gestures">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Gestures" hasArrow={false} />
                        </Link>
                        <Link href="/Character/Gifts">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Gifts" hasArrow={false} />
                        </Link>
                        <Link href="/Character/Stats">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Stats" hasArrow={false} />
                        </Link>
                    </BurgerCategory>
                    <BurgerCategory icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png" text="Equipment">
                        <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Armor" hasArrow={true}>
                            <Link href='/Equipment/Armor' onClick={() => {
                                setCookie('armor_state', 1);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Full Sets"/>
                            </Link>
                            <Link href='/Equipment/Armor' onClick={() => {
                                setCookie('armor_state', 2);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Helms" />
                            </Link>
                            <Link href='/Equipment/Armor' onClick={() => {
                                setCookie('armor_state', 3);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Chest Pieces" />
                            </Link>
                            <Link href='/Equipment/Armor' onClick={() => {
                                setCookie('armor_state', 4);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Gauntlets" />
                            </Link>
                            <Link href='/Equipment/Armor' onClick={() => {
                                setCookie('armor_state', 5);
                                window.dispatchEvent(new Event("cookie"));
                            }}>
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Leggings" />
                            </Link>
                        </BurgerItem>
                        <Link href="/Equipment/Items">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Items" hasArrow={false} />
                        </Link>
                        <Link href="/Equipment/Rings">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Rings" hasArrow={false} />
                        </Link>
                        <Link href="/Equipment/Rings">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Rings" hasArrow={false} />
                        </Link>
                    </BurgerCategory>
                    <BurgerCategory icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2082.png" text="Online">
                        <Link href="/Online/Features">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Features" hasArrow={false} />
                        </Link>
                        <Link href="/Online/Invasions">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Invasions" hasArrow={false} />
                        </Link>
                        <Link href="/Online/Summoning">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Summoning" hasArrow={false} />
                        </Link>
                    </BurgerCategory>
                    <BurgerCategory icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2035.png" text="World">
                        <Link href="/World/Covenants">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Covenants" hasArrow={false} />
                        </Link>
                        <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Enemies" hasArrow={true}>
                            <Link href="/World/Enemies/Bosses">
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Bosses" />
                            </Link>
                            <Link href="/World/Enemies">
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Common" />
                            </Link>
                            <Link href="/World/Enemies/NPC_Invaders">
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="NPC Invaders" />
                            </Link>
                        </BurgerItem>
                        <Link href="/World/Illusory_Walls">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Illusory Walls" hasArrow={false} />
                        </Link>
                        <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Locales" hasArrow={true}>
                            <Link href="/World/Locales">
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="All Locales" />
                            </Link>
                            <Link href="/World/Locales/Maps">
                                <BurgerSubItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" text="Maps" />
                            </Link>
                        </BurgerItem>
                        <Link href="/World/Lore">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Lore" hasArrow={false} />
                        </Link>
                        <Link href="/World/NPCs">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="NPCs" hasArrow={false} />
                        </Link>
                    </BurgerCategory>
                    <BurgerCategory icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/Seek_Guidance.png" text="Guides">
                        <Link href="/Guides/Achievements">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Achievements" hasArrow={false} />
                        </Link>
                        <Link href="/Guides/New_Game_Plus">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="New Game +" hasArrow={false} />
                        </Link>
                        <Link href="/Guides/New_Player_Help">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="New Player Help" hasArrow={false} />
                        </Link>
                        <Link href="/Guides/Walkthrough">
                            <BurgerItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" text="Walkthrough" hasArrow={false} />
                        </Link>
                    </BurgerCategory>
                </div>
            </Burger>
            <Link href="/" className={styles.logo_link}>
                <Image className={styles.logo} src="https://www.pngmart.com/files/4/Dark-Souls-Logo-Transparent-PNG.png"
                    alt="title" width={100} height={100} />
            </Link>

            <NavItem icon="http://i.imgur.com/841SOQU.gif" text="General">

                <div id={styles.general_dropdown} className={styles.nav_dropdown}>
                    <div className={styles.dropdown_item}>
                        <Link href="/General/About_Dark_Souls">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>About Dark Souls</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/General/Dark_Souls_Remastered">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>About the Remaster</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/General/Combat">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Combat</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/General/Controls">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Controls</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/General/Mechanics">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Game Mechanics</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/General/Mechanics/Bonfires">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Bonfires</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/General/Mechanics/Humanity">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Humanity</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/General/Mechanics/Weapon_Scaling">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Weapon Scaling</text>
                        </Link>
                    </div>
                </div>

            </NavItem>

            <NavItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png" text="Character">

                <div id={styles.character_dropdown} className={styles.nav_dropdown}>
                    <div className={styles.dropdown_item}>
                        <Link href="/Character/Builds">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text href="/Builds">Builds</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/Character/Builds/PVE">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>PVE Builds</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/Character/Builds/PVP">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>PVP Builds</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Character/Classes">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Classes</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Character/Gestures">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Gestures</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Character/Gifts">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Gifts</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Character/Stats">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Stats</text>
                        </Link>
                    </div>

                </div>

            </NavItem>
            <NavItem icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png" text="Equipment">
                <div id={styles.equipment_dropdown} className={styles.nav_dropdown}>
                    <div className={styles.dropdown_item} onClick={() => {
                        setCookie('armor_state', 1);
                        window.dispatchEvent(new Event("cookie"));
                    }}>
                        <Link href="/Equipment/Armor">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Armor</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item} onClick={() => {
                        setCookie('armor_state', 2);
                        window.dispatchEvent(new Event("cookie"));
                    }}>
                        <Link href='/Equipment/Armor'>
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Helms</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item} onClick={() => {
                        setCookie('armor_state', 3);
                        window.dispatchEvent(new Event("cookie"));
                    }}>
                        <Link href='/Equipment/Armor'>
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Chest Pieces</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item} onClick={() => {
                        setCookie('armor_state', 4);
                        window.dispatchEvent(new Event("cookie"));
                    }}>
                        <Link href={'/Equipment/Armor'}>
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Gauntlets</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item} onClick={() => {
                        setCookie('armor_state', 5);
                        window.dispatchEvent(new Event("cookie"));
                    }}>
                        <Link href={'/Equipment/Armor'} >
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Leg Pieces</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Equipment/Armor#Helms">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Items</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Equipment/Rings">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Rings</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Equipment/Shields">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Shields</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Equipment/Spells">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Spells</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/Equipment/Miracles">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Miracles</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/Equipment/Pyromancies">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Pyromancies</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/Equipment/Sorceries">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Sorceries</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Equipment/Upgrades">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Upgrades</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Equipment/Weapons">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Weapons</text>
                        </Link>
                    </div>

                </div>
            </NavItem>
            <NavItem className="online" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2082.png" text="Online">
                <div id={styles.online_dropdown} className={styles.nav_dropdown}>
                    <div className={styles.dropdown_item}>
                        <Link href="/Online/Features">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Features</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Online/Invasions">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Invasions</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Online/Summoning">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Summoning</text>
                        </Link>
                    </div>
                </div>
            </NavItem>
            <NavItem className="world" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2035.png" text="World">
                <div id={styles.world_dropdown} className={styles.nav_dropdown}>

                    <div className={styles.dropdown_item}>
                        <Link href="/World/Covenants">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Covenants</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/World/Enemies">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Enemies</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/World/Bosses">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25}></Image>
                            <text>Bosses</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/World/NPC_Invaders">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25}></Image>
                            <text>NPC Invaders</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/World/Illusory_Walls">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Illusory Walls</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/World/Locales">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Locales</text>
                        </Link>
                    </div>
                    <div className={styles.sub_item}>
                        <Link href="/World/Maps">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png" width={25} height={25} />
                            <text>Maps</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/World/Lore">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Lore</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/World/NPCs">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>NPCs</text>
                        </Link>
                    </div>
                </div>
            </NavItem>
            <NavItem id={styles.guides} icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/Seek_Guidance.png" text="Guides">
                <div id={styles.guides_dropdown} className={styles.nav_dropdown}>
                    <div className={styles.dropdown_item}>
                        <Link href="/Guides/Achievements">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Achievements</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Guides/New_Game_Plus">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>New Game +</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Guides/New_Player_Help">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>New Player Help</text>
                        </Link>
                    </div>
                    <div className={styles.dropdown_item}>
                        <Link href="/Guides/Walkthrough">
                            <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png" width={25} height={25}></Image>
                            <text>Walkthrough</text>
                        </Link>
                    </div>
                </div>
            </NavItem>
        </div>
    );
}