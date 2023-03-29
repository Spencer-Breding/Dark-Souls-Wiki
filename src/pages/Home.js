import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    return (
        <React.Fragment>
            <div className="home">
                <h2 className="title">Wiki Home</h2>
                <div className="title-divider">
                    <div class="shadow"></div>
                </div>
                <text className="welcome">Dark Souls Wiki</text>
                <div className="h-divider">
                    <div class="shadow"></div>
                </div>
                <text className="description">From weapons to enemies to lore, find out everything you need to know about Dark Souls here!</text>
                <div className="h-divider">
                    <div class="shadow"></div>
                </div>
                <div className="row">
                    <div className="menu-item">
                        <img src="http://i.imgur.com/841SOQU.gif" alt="" />
                        <div>
                            <Link to="/General+Information">General Information</Link>
                            <ul>
                                <li><Link to="About+Dark+Souls">About Dark Souls</Link></li>
                                <li><Link to="Combat">Combat</Link></li>
                                <li><Link to="Controls">Controls</Link></li>
                                <li><Link to="Weapon+Scaling">Weapon Scaling</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png" alt="" />
                        <div>
                            <Link to="/Character+Information">Character Information</Link>
                            <ul>
                                <li><Link to="/Builds">Builds</Link></li>
                                <li><Link to="/Classes">Classes</Link></li>
                                <li><Link to="Stats">Stats</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png" alt="" />
                        <div>
                            <Link to="Equipment+Information">Equipment Information</Link>
                            <ul>
                                <li><Link to="Armor">Armor</Link></li>
                                <li><Link to="Magic">Magic</Link></li>
                                <li><Link to="Upgrades">Upgrades</Link></li>
                                <li><Link to="Weapons">Weapons</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="h-divider">
                    <div class="shadow"></div>
                </div>
                <div className="row">
                    <div className="menu-item">
                        <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2082.png" alt="" />
                        <div>
                            <Link to="Online+Information">Online Information</Link>
                            <ul>
                                <li><Link to="Features">Features</Link></li>
                                <li><Link to="Invasions">Invasions</Link></li>
                                <li><Link to="Summoning">Summoning</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2035.png" alt="" />
                        <div>
                            <Link to="World+Information">World Information</Link>
                            <ul>
                                <li><Link to="Covenants">Covenants</Link></li>
                                <li><Link to="Enemies">Enemies</Link></li>
                                <li><Link to="Locales">Locales</Link></li>
                                <li><Link to="Lores">Lore</Link></li>
                                <li><Link to="NPCs">NPCs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/Seek_Guidance.png" alt="" />
                        <div>
                            <Link to="Guides">Guides</Link>
                            <ul>
                                <li><Link to="Bosses">Bosses</Link></li>
                                <li><Link to="New+Game+Plus">New Game +</Link></li>
                                <li><Link to="New+Player+Help">New Player Help</Link></li>
                                <li><Link to="Walkthrough">Walkthrough</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blank"></div>
        </React.Fragment>
    );
}

export default Home;