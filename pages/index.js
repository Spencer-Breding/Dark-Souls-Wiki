import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderDiv from "../components/HeaderDiv";
import Grad from "../components/grad";
import Spacer from "../components/spacer";
import Title from "../components/title";
import TitleDiv from "../components/TitleDiv";
import styles from '../styles/index.module.css';
const Home = () => {

    return (
        <React.Fragment>
            <Grad/>
            <div className={styles.home}>
                <Title title="Wiki Home" />
                <TitleDiv/>
                <text className={styles.welcome}>Dark Souls Wiki <br/>(Work In Progress)</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <text className={styles.description}>From weapons to enemies to lore, find out everything you need to know about Dark Souls here!</text>
                <HeaderDiv/>
                <div className={styles.row}>
                    <div className={styles.menu_item }>
                        <Image src="http://i.Imgur.com/841SOQU.gif" width={100} height={100} alt="" />
                        <div>
                            <Link href="General">General Information</Link>
                            <ul>
                                <li><Link href="General/About_Dark_Souls">About Dark Souls</Link></li>
                                <li><Link href="General/Dark_Souls_Remastered">About the Remaster</Link></li>
                                <li><Link href="General/Combat">Combat</Link></li>
                                <li><Link href="General/Controls">Controls</Link></li>
                                <li><Link href="General/Game_Mechanics">Game Mechanics</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.menu_item}>
                        <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png" width={100} height={100} alt="" />
                        <div>
                            <Link href="/Character">Character Information</Link>
                            <ul>
                                <li><Link href="Character/Builds">Builds</Link></li>
                                <li><Link href="Character/Classes">Classes</Link></li>
                                <li><Link href="Character/Gestures">Gestures</Link></li>
                                <li><Link href="Character/Gifts">Gifts</Link></li>
                                <li><Link href="Character/Stats">Stats</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.menu_item}>
                        <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png" width={100} height={100} alt="" />
                        <div>
                            <Link href="Equipment">Equipment Information</Link>
                            <ul>
                                <li><Link href="Equipment/Armor">Armor</Link></li>
                                <li><Link href="Equipment/Items">Items</Link></li>
                                <li><Link href="Equipment/Rings">Rings</Link></li>
                                <li><Link href="Equipment/Shields">Shields</Link></li>
                                <li><Link href="Equipment/Spells">Spells</Link></li>
                                <li><Link href="Equipment/Upgrades">Upgrades</Link></li>
                                <li><Link href="Equipment/Weapons">Weapons</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <HeaderDiv/>
                <div className={styles.row }>
                    <div className={styles.menu_item}>
                        <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2082.png" width={100} height={100} alt="" />
                        <div>
                            <Link href="Online">Online Information</Link>
                            <ul>
                                <li><Link href="Features">Features</Link></li>
                                <li><Link href="Invasions">Invasions</Link></li>
                                <li><Link href="Summoning">Summoning</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.menu_item}>
                        <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2035.png" width={100} height={100} alt="" />
                        <div>
                            <Link href="World">World Information</Link>
                            <ul>
                                <li><Link href="Covenants">Covenants</Link></li>
                                <li><Link href="Enemies">Enemies</Link></li>
                                <li><Link href="Locales">Locales</Link></li>
                                <li><Link href="Lores">Lore</Link></li>
                                <li><Link href="NPCs">NPCs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.menu_item}>
                        <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/Seek_Guidance.png" width={100} height={100} alt="" />
                        <div>
                            <Link href="Guides">Guides</Link>
                            <ul>
                                <li><Link href="Bosses">Bosses</Link></li>
                                <li><Link href="New_Game_Plus">New Game +</Link></li>
                                <li><Link href="New_Player_Help">New Player Help</Link></li>
                                <li><Link href="Walkthrough">Walkthrough</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Spacer/>
            </div>
        </React.Fragment>
    );
}

export default Home;