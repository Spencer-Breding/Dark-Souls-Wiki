exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 4823:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "article_container__oaxBq",
	"info": "article_info__9UdZ_",
	"body_header": "article_body_header__ndzTf",
	"body_sub_header": "article_body_sub_header__k5b1v",
	"description": "article_description__PHUak",
	"body_text": "article_body_text__ZNQmN",
	"info_table": "article_info_table__MCG0G",
	"info_table_title": "article_info_table_title__7Pdnu",
	"info_table_item": "article_info_table_item__b0afJ",
	"info_table_header": "article_info_table_header__SdA2A",
	"info_table_item_details": "article_info_table_item_details__M48_c",
	"cover": "article_cover__qN3JC",
	"h_divider": "article_h_divider__fhIYr",
	"shadow": "article_shadow__vMhRm",
	"title_divider": "article_title_divider__56i7Y",
	"gallery_container": "article_gallery_container__cIDkU",
	"gallery_row": "article_gallery_row__zccxM",
	"gallery_item": "article_gallery_item__zKSRH",
	"trailer_container": "article_trailer_container__ya1Xr",
	"trailer_row": "article_trailer_row__qzQqQ",
	"external": "article_external__q_g__"
};


/***/ }),

/***/ 1246:
/***/ ((module) => {

// Exports
module.exports = {
	"contents_container": "contents_contents_container__ieq1i",
	"contents_head": "contents_contents_head__tJS_t",
	"dropdown_brackets": "contents_dropdown_brackets__S5GDe",
	"dropdown_button": "contents_dropdown_button__HHoUI"
};


/***/ }),

/***/ 7647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Contents)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_contents_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1246);
/* harmony import */ var _styles_contents_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_contents_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Contents(props) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [openDropdown, setOpenDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let dropdownText;
    if (openDropdown) {
        dropdownText = "Hide";
    } else {
        dropdownText = "Show";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_contents_module_css__WEBPACK_IMPORTED_MODULE_2___default().contents_container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_contents_module_css__WEBPACK_IMPORTED_MODULE_2___default().contents_head),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                        children: "Contents"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("text", {
                        className: (_styles_contents_module_css__WEBPACK_IMPORTED_MODULE_2___default().dropdown_brackets),
                        ref: ref,
                        onClick: ()=>setOpenDropdown(!openDropdown),
                        children: [
                            "[ ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                className: (_styles_contents_module_css__WEBPACK_IMPORTED_MODULE_2___default().dropdown_button),
                                children: dropdownText
                            }),
                            " ]"
                        ]
                    })
                ]
            }),
            openDropdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: props.children
            })
        ]
    });
}


/***/ }),

/***/ 5051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Title_Div)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_page_elements_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2161);
/* harmony import */ var _styles_page_elements_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_page_elements_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Title_Div() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_page_elements_module_css__WEBPACK_IMPORTED_MODULE_2___default().title_divider),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_page_elements_module_css__WEBPACK_IMPORTED_MODULE_2___default().shadow)
        })
    });
}


/***/ })

};
;