import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import './Navbar.css';

function NavItem(props) {
    const ref = useRef(null);
    const [openDropdown, setOpenDropdown] = useState(false)

    const closeDropdown = (e) => {
        if (ref.current && openDropdown && !ref.current.contains(e.target)) {
            setOpenDropdown(false);
        }
    }

    document.addEventListener('click', closeDropdown);

    return (
        <li className="nav-item" ref={ref} onClick={() => setOpenDropdown(!openDropdown)}>
            <img className="nav-icon" src={props.icon} alt="icon" onClick={() => setOpenDropdown(!openDropdown)} />
            <text className="nav-text" onClick={() => setOpenDropdown(!openDropdown)}>{props.text}</text>
            {openDropdown && props.children }
        </li>
        );
}

export default function Navbar(props) {
    return (
        <div className="navbar">
            <ul className="navbar-nav">
                <Link to="/" className="logo-link">
                    <img className="logo" src="https://www.pngmart.com/files/4/Dark-Souls-Logo-Transparent-PNG.png"
                        alt="title" onClick />
                </Link>
                <NavItem className="general" icon="http://i.imgur.com/841SOQU.gif" text="General">

                    <div className="nav-dropdown">
                        <ul>
                            <Link to="Combat">Combat</Link>
                            <Link to="Controls">Controls</Link>
                            <Link to="/General+Information">General Information</Link>
                            <Link to="Secrets">Secrets</Link>
                            <Link to="Weapon+Scaling">Weapon Scaling</Link>
                            <ul>

                            </ul>
                        </ul>
                    </div>
                    
                </NavItem>
                <NavItem className="character" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png" text="Character">
                    
                    <div className="nav-dropdown">
                        <ul>
                            <Link to="/Character+Information">Character Information</Link>
                            <Link to="/Classes">Classes</Link>
                        </ul>
                    </div>
                    
                </NavItem>
                <NavItem className="equipment" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png" text="Equipment">
                    <div className="nav-dropdown">
                        <ul>
                            <Link to="/Armor">Armor</Link>
                            <Link to="/Items">Items</Link>
                            <Link to="/Rings">Rings</Link>
                            <Link to="/Shields">Shields</Link>
                            <Link to="/Spells">Spells</Link>
                            <Link to="/Upgrades">Upgrades</Link>
                            <Link to="/Weapons">Weapons</Link>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="online" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2082.png" text="Online">
                    <div className="nav-dropdown">
                        <ul>
                            <Link to="/Features">Features</Link>
                            <Link to="/Invasions">Invasions</Link>
                            <Link to="/Summoning">Summoning</Link>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="world" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/2035.png" text="World">
                    <div className="nav-dropdown">
                        <ul>
                            <Link to="/Covenants">Covenants</Link>
                            <Link to="/Enemies">Enemies</Link>
                            <Link to="/Locales">Locales</Link>
                            <Link to="/Lore">Lore</Link>
                            <Link to="/NPCs">NPCs</Link>
                        </ul>
                    </div>
                </NavItem>
                <NavItem className="guides" icon="https://darksouls.wiki.fextralife.com/file/Dark-Souls/Seek_Guidance.png" text="Guides">
                    <div className="nav-dropdown">
                        <ul>
                            <Link to="/Bosses">Bosses</Link>
                            <Link to="/New+Game+Plus">New Game +</Link>
                            <Link to="/New+Player+Help">New Player Help</Link>
                            <Link to="/Walkthrough">Walkthrough</Link>
                        </ul>
                    </div>
                </NavItem>
            </ul>
        </div>
    );
}