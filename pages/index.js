import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const Home = () => {
    return (
        <React.Fragment>
            <div className={styles.home}>
                <h2 className={styles.title}>Wiki Home</h2>
                <div className={styles.title_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <text className={styles.welcome}>Dark Souls Wiki</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <text className={styles.description}>From weapons to enemies to lore, find out everything you need to know about Dark Souls here!</text>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.menu_item }>
                        <Image src="http://i.Imgur.com/841SOQU.gif" width={100} height={100} alt="" />
                        <div>
                            <Link href="General">General Information</Link>
                            <ul>
                                <li><Link href="About_Dark_Souls">About Dark Souls</Link></li>
                                <li><Link href="Dark_Souls_Remastered">About the Remaster</Link></li>
                                <li><Link href="Combat">Combat</Link></li>
                                <li><Link href="Controls">Controls</Link></li>
                                <li><Link href="Game_Mechanics">Game Mechanics</Link></li>
                                <li><Link href="Secrets">Secrets</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.menu_item}>
                        <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png" width={100} height={100} alt="" />
                        <div>
                            <Link href="/Character">Character Information</Link>
                            <ul>
                                <li><Link href="Builds">Builds</Link></li>
                                <li><Link href="Classes">Classes</Link></li>
                                <li><Link href="Gestures">Gestures</Link></li>
                                <li><Link href="Gifts">Gifts</Link></li>
                                <li><Link href="Stats">Stats</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.menu_item}>
                        <Image src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png" width={100} height={100} alt="" />
                        <div>
                            <Link href="Equipment">Equipment Information</Link>
                            <ul>
                                <li><Link href="Armor">Armor</Link></li>
                                <li><Link href="Items">Items</Link></li>
                                <li><Link href="Rings">Rings</Link></li>
                                <li><Link href="Shields">Shields</Link></li>
                                <li><Link href="Spells">Spells</Link></li>
                                <li><Link href="Upgrades">Upgrades</Link></li>
                                <li><Link href="Weapons">Weapons</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.h_divider}>
                    <div className={styles.shadow}></div>
                </div>
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
                <div className={styles.spacer} />
            </div>
            <div className={styles.blank }></div>
        </React.Fragment>
    );
}

export default Home;