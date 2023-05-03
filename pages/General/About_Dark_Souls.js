import React from 'react';
import Iframe from 'react-iframe';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Contents from "../../components/contents";
import TitleDiv from "../../components/TitleDiv";
import Grad from "../../components/grad";
import Spacer from "../../components/spacer";
import Title from "../../components/title";
import styles from "../../styles/article.module.css";

const artorias = <Link href="/General_Information/Artorias_of_the_Abyss">Artorias of the Abyss</Link>;
const boss = <Link href="/World/Enemies/Bosses">bosses</Link>
const demon = <a href="https://en.wikipedia.org/wiki/Demon's_Souls" target="blank">Demon's Souls</a>;
const from = <a href="https://en.wikipedia.org/wiki/FromSoftware" target="blank">FromSoftware</a>;
const king = <a href="https://en.wikipedia.org/wiki/King's_Field" target="blank">King's Field</a>
const locale = <Link href="/Locales">locales</Link>;
const namco = <a href="https://en.wikipedia.org/wiki/Bandai_Namco_Entertainment" target="blank">Namco Bandai</a>;
const prepare = <Link href="/">Prepare to Die Edition</Link>;
const prepare_min_reqs = <text className={styles.body_text}><b>OS:</b> Windows XP, Windows Vista, Windows 7 or newer
    <br />
    <b>CPU:</b> Intel Core 2 Duo E6850 GHz+ or AMD Phenom II X2 545 3.0 GHz+
    <br />
    <b>RAM:</b> 2 GB
    <br />
    <b>GPU:</b> GeForce 9800 GTX+ or ATI Radeon HD 4870+
    <br />
    <b>DX:</b> 9.0c
    <br />
    <b>Storage:</b> 4 GB
    <br />
    <b>Sound Card:</b> Direct Sound Compatible
</text>;
const remaster = <Link href="/General_Information/Dark_Souls_Remastered">Dark Souls Remastered</Link>;
const remaster_min_reqs = <text className={styles.body_text}><b>OS:</b> Windows 7 64-bit, Service Pack 1
    <br />
    <b>CPU:</b> Intel Core I5-2300 2.8 GHz / AMD FX-6300 3.5 GHz
    <br />
    <b>RAM:</b> 6 GB
    <br />
    <b>GPU:</b> GeForce GTX 460, 1 GB / Radeon HD 6870, 1 GB
    <br />
    <b>DX:</b> 11
    <br />
    <b>Storage:</b> 8 GB
    <br />
    <b>Sound:</b> DirectX 11 sound device
</text>
const remaster_rec_reqs = <text className={styles.body_text}><b>OS:</b> Windows 10 64-bit
    <br />
    <b>CPU:</b> Intel Core i5-4570 3.2 GHz / AMD FX-8350 4.2 GHz
    <br />
    <b>RAM:</b> 8 GB
    <br />
    <b>GPU:</b> GeForce GTX 660, 2 GB / Radeon HD 7870, 2 GB
    <br />
    <b>DX:</b> 11
    <br />
    <b>Storage:</b> 8 GB
    <br />
    <b>Sound:</b> DirectX 11 sound device
</text>
const weapon = <Link href="/Equipment/Weapons">weapons</Link>;
const desc = <text className={styles.description }><em><b>Dark Souls</b></em> is a video game developed by <em>{from}</em>. The game has been published on the PlayStation 3 and Xbox 360 by <em>{namco}</em>.
    <br />
    <br />
    It was previously developed under the codename Project Dark and is the spiritual successor to <em>{demon}</em>. It also uses an updated variant of said game's engine.
    <br />
    <br />
    Dark Souls was released in Japan for the PlayStation 3 on September 22nd, 2011, in North America for Xbox 360 and PlayStation 3 on October 4th, 2011 and in Europe on October 7th, 2011.
    The game was made available on PC with the <em>{prepare}</em> on August 24th, 2012. In 2018, <em>{remaster}</em> was released.</text>
const gameplay = <text className={styles.body_text}><em>Dark Souls</em> focuses on dungeon exploring and the tension and fear that arise when players encounter enemies in this setting. The game is a spiritual
    successor to <em>Demon's Souls</em>, which in turn is considered a spiritual successor to the <em>{king}</em> games. The game takes place in an open world environment and
    uses a third-person perspective. The player battles using various weapons and strategies to survive in a dark fantasy world. Online features allow players to share the play
    experience without need for direct communication.
    <br />
    <br />
    With respect to <em>Demon's Souls</em>, there are more {weapon}, spells, and new classes. Before release, it was also said to be "significantly harder", with more enemies and more
    difficult encounters. It includes leaving messages to other players, seeing others' deaths, and player versus player (as well as a new co-op system); similar to the online functions
    in <em>Demon's Souls</em>. The items the player uses in these games are significantly different.
</text>
const ptd = <text className={styles.body_text}>Dark Souls: Prepare to Die Edition is the first Release of <em>Dark Souls</em> for the PC as well as a re-release for the PS3 and Xbox 360.
    <br />
    <br />
    This edition of the game was released on August 24th, 2012 for PC and in October 2012 for PS3 and Xbox 360 and includes the {artorias} expansion which introduced
    new {boss}, weapons, and {locale}. The Artorias of the Abyss DLC is also available as a separate download for Xbox 360 and PS3 owners.
</text>
const ds_remastered = <text className={styles.body_text}>In a surprise Nintendo Direct conference on January 11, 2018, it was announced that <em>Dark Souls</em> would be remastered and ported to the
    Nintendo Switch, Xbox One, PlayStation 4, and PC. The remaster released on PlayStation 4, Xbox One, and PC on May 24 and 25, 2018.
    <br />
    <br />
    The Nintendo Switch release was originally planned for May 25 as well, but was delayed to summer 2018. On August 14, 2018, it was announced that the Switch version would be releasing
    on October 19, 2018.
    <br />
    <br />
    The remaster includes the <em>Artorias of the Abyss</em> expansion and improved graphics, lightning, shading, and sound effects and runs at 60 frames per second on both consoles and PC.
    The multiplayer component received dedicated servers for all four platforms, with up to 6 players.
</text>
const reception = <text className={styles.body_text}><em>Dark Souls</em> received critical acclaim, earning an 89 on Metacritic.IGN gave the game a 9/10, whilst GameSpot gave the game a 9.5/10. Many players had divided
    opinions, saying that the game was too hard, too boring, and uninteresting; others claimed Dark Souls to be one of the best RPGs of all time.
    <br />
    <br />
    David Houghton from Gamesradar rated it as
    the greatest game of all time out of 100 games.
    <br />
    <br />
    <em>Edge</em> magazine named Dark Souls the best game of the seventh generation of game consoles. In September 2015, Dark Souls topped the
    magazine's special issue "The 100 Greatest Videogames".</text>

export default function About_ds() {
    const router = useRouter();
    return (
        <React.Fragment>
            <Grad />
            <div className={styles.container}>
                <Title title="About Dark Souls" />
                <TitleDiv />
                <div className={styles.info}>
                    <div className={styles.info_table}>
                        <h2>Dark Souls</h2>
                        <div className={styles.cover_container }>
                            <a href="https://i.imgur.com/nvd5Nsj.jpeg" target="blank">
                                <Image className={styles.cover} src="https://i.imgur.com/nvd5Nsj.jpg" width={379} height={440} alt="" />
                            </a>
                        </div>
                        <div className={styles.info_table_item}>
                            <text className={styles.info_table_header}>Release Date</text>
                            <text className={styles.info_table_item_details}>September 22nd 2011 (JP)<br />October 4th 2011 (NA)<br />October 7th 2011 (EU)<br />August 24th 2012 (PC)</text>
                        </div>
                        <div className={styles.info_table_item}>
                            <text className={styles.info_table_header}>Genre</text>
                            <text className={styles.info_table_item_details}>Action RPG</text>
                        </div>
                        <div className={styles.info_table_item}>
                            <text className={styles.info_table_header}>Rating</text>
                            <text className={styles.info_table_item_details}>Mature</text>
                        </div>
                        <div className={styles.info_table_item}>
                            <text className={styles.info_table_header}>Platforms</text>
                            <text className={styles.info_table_item_details}>Playstation 3<br />Xbox 360<br />PC</text>
                        </div>
                        <div className={styles.info_table_item}>
                            <text className={styles.info_table_header}>Developer</text>
                            <text className={styles.info_table_item_details}>FromSoftware</text>
                        </div>
                        <div className={styles.info_table_item}>
                            <text className={styles.info_table_header}>Publisher</text>
                            <text className={styles.info_table_item_details}>FromSoftware (JP)<br />Bandai Namco Games (International)</text>
                        </div>
                        <div className={styles.info_table_item}>
                            <text className={styles.info_table_header}>Director</text>
                            <text className={styles.info_table_item_details}>Miyazaki Hidetaka</text>
                        </div>
                    </div>
                    {desc}
                    <br />
                    <br />
                    <Contents>
                        <Link href="#Gameplay"><li><text>Gameplay</text></li></Link>
                        <Link href='#Prepare_to_Die_Edition'><li><text>Prepare to Die Edition</text></li></Link>
                        <ul>
                            <Link href="#Minimum_System_Requirements_PTD"><li>Minimum System Requirements</li></Link>
                        </ul>
                        <Link href='#Dark_Souls_Remastered'><li><text>Dark Souls Remastered</text></li></Link>
                        <ul>
                            <Link href="#Minimum_System_Requirements_Remaster"><li><text>Minimum System Requirements</text></li></Link>
                            <Link href="#Recommended_System_Requirements"><li><text>Recommended System Requirements</text></li></Link>
                        </ul>
                        <Link href="#Reception"><li><text>Reception</text></li></Link>
                        <Link href="#Gallery"><li><text>Gallery</text></li></Link>
                        <Link href="#Trailers"><li><text>Trailers</text></li></Link>
                        <Link href="#External_Links"><li><text>External Links</text></li></Link>
                    </Contents>
                    <br />
                    <br />
                    <h3 className={styles.body_header} id="Gameplay">Gameplay</h3>
                    <TitleDiv />
                    {gameplay}
                    <h3 className={styles.body_header} id="Prepare_to_Die_Edition">Prepare to Die Edition</h3>
                    <TitleDiv />
                    {ptd}
                    <br />
                    <h4 className={styles.body_sub_header} id="Minimum_System_Requirements_PTD">Minimum System Requirements</h4>
                    {prepare_min_reqs}
                    <h3 className={styles.body_header} id="Dark_Souls_Remastered">Dark Souls Remastered</h3>
                    <TitleDiv />
                    {ds_remastered}
                    <br />
                    <h4 className={styles.body_sub_header} id="Minimum_System_Requirements_Remaster">Minimum System Requirements</h4>
                    {remaster_min_reqs}
                    <br />
                    <h4 className={styles.body_sub_header} id="Recommended_System_Requirements">Recommended System Requirements</h4>
                    {remaster_rec_reqs}
                    <br />
                    <br />
                    <h3 className={styles.body_header} id="Reception">Reception</h3>
                    <TitleDiv />
                    {reception}
                    <br />
                    <br />
                    <h3 className={styles.body_header} id="Gallery">Gallery</h3>
                    <TitleDiv />
                    <div className={styles.gallery_container}>
                       
                            <div className={styles.gallery_item}>
                                <a href="https://www.gematsu.com/wp-content/uploads/2011/05/Dark-Souls-Jap-Box-Art.jpg" target="blank">
                                    <img src="https://www.gematsu.com/wp-content/uploads/2011/05/Dark-Souls-Jap-Box-Art.jpg" alt="" />
                                </a>
                                <text>Japanese Box Art</text>
                            </div>
                            <div className={styles.gallery_item}>
                                <a href="https://conceptartworld.com/wp-content/uploads/2014/01/Dark_Souls_Design_Works_01.jpg" target="blank">
                                    <img src="https://conceptartworld.com/wp-content/uploads/2014/01/Dark_Souls_Design_Works_01.jpg" alt="" />
                                </a>
                                <text>Western Box Art</text>
                            </div>
                            <div className={styles.gallery_item}>
                                <a href="https://m.media-amazon.com/images/I/71sXzLCahJL.jpg" target="blank">
                                    <img src="https://m.media-amazon.com/images/I/71sXzLCahJL.jpg" alt="" />
                                </a>
                                <text>Prepare to Die Edition Box Art</text>
                            </div>
                      
                        
                            <div className={styles.gallery_item}>
                                <a href="https://image.api.playstation.com/cdn/EP0700/CUSA08495_00/COYF3JBI46ftkG7tIdTjQg0v9aZ2378N.png" target="blank">
                                    <img src="https://image.api.playstation.com/cdn/EP0700/CUSA08495_00/COYF3JBI46ftkG7tIdTjQg0v9aZ2378N.png" alt="" />
                                </a>
                                <text>Dark Souls Remastered Box Art</text>
                            </div>
                            <div className={styles.gallery_item}>
                                <a href="https://www.creativeuncut.com/social/dark-souls.jpg" target="blank">
                                    <img src="https://www.creativeuncut.com/social/dark-souls.jpg" alt="" />
                                </a>
                                <text>Enemy Concept Art</text>
                            </div>
                            <div className={styles.gallery_item}>
                                <a href="https://i.pinimg.com/736x/aa/13/5d/aa135d573e8eff6d968841c298428dac--videogame-art-dark-souls.jpg" target="blank">
                                    <img src="https://i.pinimg.com/736x/aa/13/5d/aa135d573e8eff6d968841c298428dac--videogame-art-dark-souls.jpg" alt="" />
                                </a>
                                <text>Knight Concept Art</text>
                            </div>
                      
                            <div className={styles.gallery_item}>
                                <a href="https://cdn.cloudflare.steamstatic.com/steam/apps/570940/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.1920x1080.jpg?t=1668145065" target="blank">
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/570940/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.1920x1080.jpg?t=1668145065" alt="" />
                                </a>
                                <text>Boss Fight Promotional Image</text>
                            </div>
                            <div className={styles.gallery_item}>
                                <a href="https://cdn.cloudflare.steamstatic.com/steam/apps/570940/ss_f1617a419eb3b0cd877ec71230c59aa2672b62dc.1920x1080.jpg?t=1668145065" target="blank">
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/570940/ss_f1617a419eb3b0cd877ec71230c59aa2672b62dc.1920x1080.jpg?t=1668145065" alt="" />
                                </a>
                                <text>Player Promotional Image</text>
                            </div>
                            <div className={styles.gallery_item}>
                                <a href="https://cdn.cloudflare.steamstatic.com/steam/apps/570940/ss_f60f54e58b13d0744853672ccd35810397e3fa26.1920x1080.jpg?t=1668145065" target="blank">
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/570940/ss_f60f54e58b13d0744853672ccd35810397e3fa26.1920x1080.jpg?t=1668145065" alt="" />
                                </a>
                                <text>Enemy Encounter Promotional Image</text>
                            </div>
                        
                    </div>
                </div>
                <br />
                <br />
                <h3 className={styles.body_header} id="Trailers">Trailers</h3>
                <TitleDiv />
                <div className={styles.trailer_container}>
                    <div className={styles.trailer_row}>
                        <Iframe src="https://www.youtube.com/embed/9IbPrk-yuts" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                        <Iframe src="https://www.youtube.com/embed/WlVBVKAFFg4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                        <Iframe src="https://www.youtube.com/embed/KfjG9ZLGBHE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                    </div>
                    <div className={styles.trailer_row}>
                        <Iframe src="https://www.youtube.com/embed/o1780AqAa20" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                        <Iframe src="https://www.youtube.com/embed/QNpLhv21BS0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                        <Iframe src="https://www.youtube.com/embed/93LFz_j5fQA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                    </div>
                </div>
                <br />
                <br />
                <h3 className={styles.body_header} id="External_Links">External Links</h3>
                <TitleDiv />
                <ul className={styles.external}>
                    <li><a href="https://web.archive.org/web/20111231103938/http://www.preparetodie.com/en/" target="blank">Official English Website</a><text> (Archived)</text></li>
                    <li><a href="https://www.darksouls.jp/" target="blank">Official Japanese Website</a></li>
                </ul>
                <Spacer />
            </div>
        </React.Fragment>
    );
}