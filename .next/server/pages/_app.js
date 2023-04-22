(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6498:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__66x_3",
	"navbar_nav": "Navbar_navbar_nav__vx8ZF",
	"nav_item": "Navbar_nav_item__iOgft",
	"nav_icon": "Navbar_nav_icon__iaqML",
	"nav_text": "Navbar_nav_text__PzGy_",
	"logo_link": "Navbar_logo_link__e85x_",
	"logo": "Navbar_logo__E_Sw_",
	"nav_dropdown": "Navbar_nav_dropdown__K7GPv",
	"rotateMenu": "Navbar_rotateMenu__vqYxZ",
	"test": "Navbar_test__80YF2",
	"dropdown_item": "Navbar_dropdown_item___CQ89",
	"sub_item": "Navbar_sub_item___L_W3"
};


/***/ }),

/***/ 5077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: ./styles/styles.css
var styles = __webpack_require__(2522);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(6498);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar.js






function NavItem(props) {
    const ref = (0,external_react_.useRef)(null);
    const [openDropdown, setOpenDropdown] = (0,external_react_.useState)(false);
    const closeDropdown = (e)=>{
        if (ref.current && openDropdown && !ref.current.contains(e.target)) {
            setOpenDropdown(false);
        }
    };
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (Navbar_module_default()).nav_item,
        ref: ref,
        onClick: ()=>setOpenDropdown(!openDropdown),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: (Navbar_module_default()).nav_icon,
                src: props.icon,
                alt: "icon",
                width: 100,
                height: 100,
                onClick: ()=>setOpenDropdown(!openDropdown)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                className: (Navbar_module_default()).nav_text,
                onClick: ()=>setOpenDropdown(!openDropdown),
                children: props.text
            }),
            openDropdown && props.children
        ]
    });
}
function Navbar(props) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Navbar_module_default()).navbar,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: (Navbar_module_default()).navbar_nav,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: (Navbar_module_default()).logo_link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: (Navbar_module_default()).logo,
                            src: "https://www.pngmart.com/files/4/Dark-Souls-Logo-Transparent-PNG.png",
                            alt: "title",
                            width: 100,
                            height: 100
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Navbar_module_default()).test,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                        className: "general",
                        icon: "http://i.imgur.com/841SOQU.gif",
                        text: "General",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Navbar_module_default()).nav_dropdown,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (Navbar_module_default()).dropdown_item,
                                        onClick: ()=>router.push("/General/About_Dark_Souls"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                                width: 25,
                                                height: 25
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                                children: "About Dark Souls"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (Navbar_module_default()).dropdown_item,
                                        onClick: ()=>router.push("/General/Dark_Souls_Remastered"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                                width: 25,
                                                height: 25
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                                children: "About the Remaster"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (Navbar_module_default()).dropdown_item,
                                        onClick: ()=>router.push("/General/Combat"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                                width: 25,
                                                height: 25
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                                children: "Combat"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (Navbar_module_default()).dropdown_item,
                                        onClick: ()=>router.push("/General/Controls"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                                width: 25,
                                                height: 25
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                                children: "Controls"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (Navbar_module_default()).dropdown_item,
                                        onClick: ()=>router.push("/General/Mechanics"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                                width: 25,
                                                height: 25
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                                children: "Game Mechanics"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (Navbar_module_default()).sub_item,
                                        onClick: ()=>router.push("/General/Bonfires"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                                width: 25,
                                                height: 25
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                                children: "Bonfires"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (Navbar_module_default()).sub_item,
                                        onClick: ()=>router.push("/General/Humanity"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                                width: 25,
                                                height: 25
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                                children: "Humanity"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (Navbar_module_default()).sub_item,
                                        onClick: ()=>router.push("/General/Weapon_Scaling"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                                width: 25,
                                                height: 25
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                                children: "Weapon Scaling"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    className: "character",
                    icon: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2146.png",
                    text: "Character",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).nav_dropdown,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Character/Builds"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            href: "/Builds",
                                            children: "Builds"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/Character/PVE_Builds"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "PVE Builds"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/Character/PVP_Builds"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "PVP Builds"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Character/Classes"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Classes"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Character/Gestures"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Gestures"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Character/Gifts"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Gifts"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Character/Stats"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Stats"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    className: "equipment",
                    icon: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/elite_knight_helm.png",
                    text: "Equipment",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).nav_dropdown,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.replace("/Equipment/Armor"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Armor"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/Equipment/Chest_Pieces"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Chest Pieces"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/Equipment/Gauntlets"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Gauntlets"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/Equipment/Helms"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Helms"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/Equipment/Leg_Pieces"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Leg Pieces"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Equipment/Items"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Items"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Equipment/Rings"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Rings"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Equipment/Shields"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Shields"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Equipment/Spells"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Spells"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/Equipment/Spells/Miracles"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Miracles"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/Equipment/Spells/Pyromancies"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Pyromancies"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/Equipment/Spells/Sorceries"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Sorceries"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Equipment/Upgrades"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Upgrades"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Equipment/Weapons"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Weapons"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    className: "online",
                    icon: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2082.png",
                    text: "Online",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).nav_dropdown,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Online/Features"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Features"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Online/Invasions"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Invasions"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Online/Summoning"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Summoning"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    className: "world",
                    icon: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2035.png",
                    text: "World",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).nav_dropdown,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/World/Covenants"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Covenants"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/World/Enemies"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Enemies"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/World/Bosses"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Bosses"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/World/NPC_Invader"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "NPC Invaders"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/World/Illusory_Walls"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Illusory Walls"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/World/Locales"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Locales"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).sub_item,
                                    onClick: ()=>router.push("/World/Maps"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2047.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Maps"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/World/Lore"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Lore"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/World/NPCs"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "NPCs"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                    className: "guides",
                    icon: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Seek_Guidance.png",
                    text: "Guides",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).nav_dropdown,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Guides/Achievements"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Achievements"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Guides/New_Game_Plus"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "New Game +"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Guides/New_Player_Help"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "New Player Help"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: (Navbar_module_default()).dropdown_item,
                                    onClick: ()=>router.push("/Guides/Walkthrough"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/2051.png",
                                            width: 25,
                                            height: 25
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("text", {
                                            children: "Walkthrough"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout.js


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 2522:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675], () => (__webpack_exec__(5077)));
module.exports = __webpack_exports__;

})();