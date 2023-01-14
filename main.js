/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tabs/home */ \"./tabs/home.js\");\n/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs/menu */ \"./tabs/menu.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility */ \"./utility.js\");\n/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabs/contact */ \"./tabs/contact.js\");\n\n\n\n\n\n(0,_pageload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_tabs_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    const homeButton = document.querySelector(\".home-button\");\n    homeButton.addEventListener(\"click\", ()=>{\n        (0,_utility__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        (0,_tabs_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    const menuButton = document.querySelector(\".menu-button\");\n    menuButton.addEventListener(\"click\", ()=>{\n        (0,_utility__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,_tabs_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    const contactButton = document.querySelector(\".contact-button\");\n    contactButton.addEventListener(\"click\", ()=>{\n        (0,_utility__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        (0,_tabs_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    });\n    \n\n\nconsole.log(\"Worked!\");\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ \"./utility.js\");\n\nconst body = document.querySelector('body');\nfunction pageLoad(){\n    const header = document.createElement(\"header\");\n    const navbar = document.createElement('div');\n    \n    const home = document.createElement('button');\n    home.classList.add(\"home-button\");\n    home.textContent = \"Home\";\n\n    const menu = document.createElement('button');\n    menu.classList.add(\"menu-button\");\n    menu.textContent = \"Menu\";\n\n    const contact = document.createElement('button');\n    contact.classList.add(\"contact-button\");\n    contact.textContent = \"Contact\";\n\n    navbar.append(home, menu, contact);\n    body.insertAdjacentElement(\"afterbegin\", header);\n    header.appendChild(navbar);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

/***/ }),

/***/ "./tabs/contact.js":
/*!*************************!*\
  !*** ./tabs/contact.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ \"./utility.js\");\n\n\nconst contact = ()=>{\n    const div = document.createElement('div');\n    const cname = document.createElement('h3');\n    cname.textContent=\"Contact Us!\";\n    const adres = document.createElement('p');\n    adres.textContent=\"Lorem Street, 2514\";\n    const phone = document.createElement('p');\n    phone.textContent = \"+48.....\";\n\n    div.append(cname, adres, phone);\n    _utility__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(div);\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./tabs/contact.js?");

/***/ }),

/***/ "./tabs/home.js":
/*!**********************!*\
  !*** ./tabs/home.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ \"./utility.js\");\n\n\nconst about = ()=>{\n    const titleDiv = document.createElement('div');\n    const title = document.createElement('h1');\n    title.textContent = \"The DGN Food Palace\"\n    titleDiv.appendChild(title);\n\n    const descriptionDiv = document.createElement('div');\n    const description = document.createElement('p');\n    description.textContent = \"Since 1960 DGN Food Palace at serves of people of Istanbul. Everything we use are special to our restaurant. We delicately select our products.\"\n    descriptionDiv.appendChild(description);\n\n    _utility__WEBPACK_IMPORTED_MODULE_0__.content.append(titleDiv, descriptionDiv);\n}   \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./tabs/home.js?");

/***/ }),

/***/ "./tabs/menu.js":
/*!**********************!*\
  !*** ./tabs/menu.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ \"./utility.js\");\n\n\nconst menu = [\n{name:\"Bulgur Pilavi\",\ndescription: \"A traditional turkish bulgur pilav cooked with tomatoes souces.\",\nprice: \"24 TL\"\n},\n{name:\"Mantar Sote\",\ndescription: \"A traditional turkish bulgur pilav cooked with tomatoes souces.\",\nprice: \"24 TL\"\n},\n{name:\"Iskender\",\ndescription: \"A traditional turkish bulgur pilav cooked with tomatoes souces.\",\nprice: \"24 TL\"\n}];\nfunction loadMenu(){\nmenu.forEach((item)=>{\n    const div= document.createElement('div');\n    const fname = document.createElement('h3');\n   fname.textContent = item.name;\n    const fdes = document.createElement('p');\n    fdes.textContent=item.description;\n    const fprc = document.createElement('p');\n    fprc.textContent=item.price;\n\n    div.append(fname, fdes, fprc);\n\n    _utility__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(div);\n})\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./tabs/menu.js?");

/***/ }),

/***/ "./utility.js":
/*!********************!*\
  !*** ./utility.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"default\": () => (/* binding */ clean)\n/* harmony export */ });\nconst content = document.getElementById('content');\n\nfunction clean(){\n    content.replaceChildren();\n    return;\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./utility.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;