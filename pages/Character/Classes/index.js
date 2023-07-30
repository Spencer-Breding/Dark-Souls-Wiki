import React from 'react';
import Link from 'next/link';
import HeaderDiv from "../../../components/HeaderDiv";
import TitleDiv from "../../../components/TitleDiv";
import Grad from "../../../components/grad";
import Spacer from "../../../components/spacer";
import Title from "../../../components/title";
import ClassItem from "../../../components/ClassItem";
import styles from "../../../styles/article.module.css";
import classes from "../../../styles/classes.module.css";
import { ST } from '../../../node_modules/next/dist/shared/lib/utils';

const stats = <Link href="/Character/Stats">stats</Link>
const equip = <Link href="/Equipment">equipment</Link>
const weapons = <Link href="/Equipment/Weapons">weapons</Link>
const items = <Link href="/Equipment/Items">items</Link>
const armor = <Link href="/Equipment/Armor">armor</Link>
const spells = <Link href="/Equipment/Spells">spells</Link>
const gifts = <Link href="/Character/Gifts">gifts</Link>
const master = <Link href="/Equipment/Items/Key/Master_Key">Master Key</Link>
const desc = <text className={styles.description}><b>Classes</b> in <em><b>Dark Souls</b></em> determine the starting {stats} and {equip} of the player. Classes do not determine what {weapons}, {items}, {armor },
    or {spells} your character is able to use, they only determine what your character starts the game with. As you progress through the game and raise your levels, your character can
    potentially take up any role regardless of class.<br /><br />
    In addition to choosing a class, players can choose a {gifts} to begin the game with. All gifts can be found in the game later on, but taking one here can let
    the player enjoy a benefit they wouldn't normally have until much later. A first time player should be careful about choosing gifts that will let them enter
    end-game areas from the start of the game such as the {master }, since they could potentially end up stranded in a very difficult area without the knowledge or
    equipment to get back out. Note that the Master Key is infinitely reusable, and the Thief starting class begins the game with one already. Taking a second Master Key
    as a Thief is a waste of a gift.<br /><br />
    The cost of raising a level increases as your character's level increases. The amount of souls each level costs is the same for all classes, though classes begin at
    different levels. For example, a character that starts at level 1 may find leveling up to be extremely affordable, but the character who starts at level 10 didn't have
    to pay anything to get to that point. When the level 1 character reaches level 10, going from 10 to level 11 will cost exactly the same amount of souls as it would for the
    character who started at level 10. Because of this, starting at a lower level actually ends up costing more overall, however the player will be able to put their stats exactly
    where they want them instead of starting with a more pre-determined kit. The starting level of a character ignores the Resistance stat, so characters with high resistance start
    at lower levels than they would if those points were allotted to a different stat.</text>

export default function Classes() {
    return (
        <React.Fragment>
            <Grad />
            <div className={styles.container}>
                <Title title="Classes" />
                <TitleDiv />
                <div className={styles.info }>
                    {desc}
                </div>
                <br />
                <br />
                <br />
                <TitleDiv />
                
                <div className={classes.tables}>
                    <ClassItem name="Warrior" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/warrior-starting-class-male-dark-souls.jpg" level="4" vitality="11"
                        attunement="8" endurance="12" strength="13" dexterity="13" resistance="11" intelligence="9" faith="9" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Longsword">Longsword</Link>, <Link href="/Equipment/Shields/Heater_Shield">Heater Shield</Link>, 
                            <Link href="/Equipment/Armor/Standard_Helm">Standard Helm</Link>, <Link href="/Equipment/Armor/Hard_Leather_Armor">Hard Leather Armor</Link>, 
                            <Link href="/Equipment/Armor/Hard_Leather_Gauntlets">Hard Leather Gauntlets</Link>, <Link href="/Equipment/Armor/Hard_Leather_Boots">Hard Leather Boots</Link>
                        </text>
                    />
                    <ClassItem name="Knight" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/knight-starting-class-male-dark-souls.jpg" level="5" vitality="14"
                        attunement="10" endurance="10" strength="11" dexterity="11" resistance="10" intelligence="0" faith="11" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Broadsword">Broadsword</Link>, <Link href="/Equipment/Shields/Tower_Kite_Shield">Tower Kite Shield</Link>,
                            <Link href="/Equipment/Armor/Knight_Helm">Knight Helm</Link>, <Link href="/Equipment/Armor/Knight_Armor">Knight Armor</Link>,
                            <Link href="/Equipment/Armor/Knight_Gauntlets">Knight Gauntlets</Link>, <Link href="/Equipment/Armor/Knight_Leggings">Knight Boots</Link>
                        </text>
                    />
                    <ClassItem name="Wanderer" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/wanderer-starting-class-male-dark-souls.jpg" level="3" vitality="10"
                        attunement="11" endurance="10" strength="10" dexterity="14" resistance="12" intelligence="11" faith="8" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Scimitar">Scimitar</Link>, <Link href="/Equipment/Shields/Leather_Shield">Leather Shield</Link>,
                            <Link href="/Equipment/Armor/Wanderer_Hood">Wanderer Hood</Link>, <Link href="/Equipment/Armor/Wanderer_Coat">Wanderer Coat</Link>,
                            <Link href="/Equipment/Armor/Wanderer_Manchette">Wanderer Manchette</Link>, <Link href="/Equipment/Armor/Wanderer_Boots">Wanderer Boots</Link>
                        </text>
                    />
                    <ClassItem name="Thief" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/thief-starting-class-male-dark-souls.jpg" level="5" vitality="9"
                        attunement="11" endurance="9" strength="9" dexterity="15" resistance="10" intelligence="12" faith="11" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Bandits_Knife">Bandit's Knife</Link>, <Link href="/Equipment/Shields/Target_Shield">Target Shield</Link>,{' ' }
                            <Link href="/Equipment/Armor/Thief_Mask">Thief Mask</Link>, <Link href="/Equipment/Armor/Black_Leather_Armor">Black Leather Armor</Link>,
                            <Link href="/Equipment/Armor/Black_Leather_Gloves">Black Leather Gloves</Link>, <Link href="/Equipment/Armor/Black_Leather_Boots">Black Leather Boots</Link>,
                            {master }
                        </text>
                    />
                    <ClassItem name="Bandit" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/bandit-starting-class-male-dark-souls.jpg" level="4" vitality="12"
                        attunement="8" endurance="14" strength="14" dexterity="9" resistance="11" intelligence="8" faith="10" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Battle_Axe">Battle Axe</Link>, <Link href="/Equipment/Shields/Spider_Shield">Spider Shield</Link>,
                            <Link href="/Equipment/Armor/Brigand_Hood">Brigand Hood</Link>, <Link href="/Equipment/Armor/Brigand_Armor">Brigand Armor</Link>,
                            <Link href="/Equipment/Armor/Brigand_Gauntlets">Brigand Gauntlets</Link>, <Link href="/Equipment/Armor/Brigand_Trousers">Brigand Trousers</Link>
                        </text>
                    />
                    <ClassItem name="Hunter" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/hunter-starting-class-male-dark-souls.jpg" level="4" vitality="11"
                        attunement="9" endurance="11" strength="12" dexterity="14" resistance="11" intelligence="9" faith="9" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Showrtsword">Shortsword</Link>, <Link href="/Equipment/Shields/Hard_Leather_Shield">Hard Leather Shield</Link>,
                            <Link href="/Equipment/Weapons/Short_Bow">Short Bow</Link>, <Link href="/Equipment/Items/Standard_Arrow">Standard Arrow</Link>, <Link href="/Equipment/Armor/Leather_Armor">Leather Armor</Link>,
                            <Link href="/Equipment/Armor/Leather_Gloves">Leather Gloves</Link>, <Link href="/Equipment/Armor/Leather_Boots">Leather Boots</Link>
                        </text>
                    />
                    <ClassItem name="Sorcerer" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/sorcerer-starting-class-male-dark-souls.jpg" level="3" vitality="8"
                        attunement="15" endurance="8" strength="9" dexterity="11" resistance="8" intelligence="15" faith="8" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Dagger">Dagger</Link>, <Link href="/Equipment/Shields/Small_Leather_Shield">Small Leather Shield</Link>,
                            <Link href="/Equipment/Weapons/Sorcerers_Catalyst">Sorcerer's Catalyst</Link>, <Link href="/Equipment/Spells/Soul_Arrow">Soul Arrow</Link>,{" " }
                            <Link href="/Equipment/Armor/Sorcerer_Hat">Sorcerer Hat</Link>, <Link href="/Equipment/Armor/Sorcerer_Cloak">Sorcerer Cloak</Link>,
                            <Link href="/Equipment/Armor/Sorcerer_Gauntlets">Sorcerer Gauntlets</Link>, <Link href="/Equipment/Armor/Sorcerer_Boots">Sorcerer Boots</Link>
                        </text>
                    />
                    <ClassItem name="Pyromancer" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/pyromancer-starting-class-male-dark-souls.jpg" level="2" vitality="11"
                        attunement="11" endurance="9" strength="12" dexterity="8" resistance="11" intelligence="8" faith="14" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Hand_Axe">Hand Axe</Link>, <Link href="/Equipment/Shields/Cracked_Round_Shield">Cracked Round Shield</Link>,
                            <Link href="/Equipment/Weapons/Pyromancy_Flame">Pyromancy Flame</Link>,<br/> <Link href="/Equipment/Spells/Fireball">Fireball</Link>,
                            <Link href="/Equipment/Armor/Tattered_Cloth_Hood">Tattered Cloth Hood</Link>, <Link href="/Equipment/Armor/Tattered_Cloth_Robe">Tattered Cloth Robe</Link>,
                            <Link href="/Equipment/Armor/Tattered_Cloth_Manchette">Tattered Cloth Manchette</Link>, <Link href="/Equipment/Armor/Heavy_Boots">Heavy Boots</Link>
                        </text>
                    />
                    <ClassItem name="Cleric" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/cleric-starting-class-male-dark-souls.jpg" level="2" vitality="11"
                        attunement="11" endurance="9" strength="12" dexterity="8" resistance="11" intelligence="8" faith="14" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Mace">Mace</Link>, <Link href="/Equipment/Shields/East_West_Shield">East West Shield</Link>,
                            <Link href="/Equipment/Weapons/Canvas_Talisman">Canvas Talisman</Link>, <Link href="/Equipment/Spells/Heal">Heal</Link>,
                            <Link href="/Equipment/Armor/Holy_Robe">Holy Robe</Link>,
                            <Link href="/Equipment/Armor/Travelling_Gloves">Travelling Gloves</Link>, <Link href="/Equipment/Armor/Holy_Trousers">Holy Trousers</Link>
                        </text>
                    />
                    <ClassItem name="Deprived" portrait="https://darksouls.wiki.fextralife.com/file/Dark-Souls/deprived-starting-class-male-dark-souls.jpg" level="6" vitality="11"
                        attunement="11" endurance="11" strength="11" dexterity="11" resistance="11" intelligence="11" faith="11" humanity="0"
                        equipment=<text className={classes.equipment_list}><Link href="/Equipment/Weapons/Club">Club</Link>, <Link href="/Equipment/Shields/Plank_Shield">Plank Shield</Link>
                        </text>
                    />
                </div>
            </div>
        </React.Fragment>
        )
}