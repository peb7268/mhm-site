/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./images/denver-skyline-option-3.jpg":
/*!********************************************!*\
  !*** ./images/denver-skyline-option-3.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/denver-skyline-option-3.jpg";

/***/ }),

/***/ "./images/logo-1.png":
/*!***************************!*\
  !*** ./images/logo-1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo-1.png";

/***/ }),

/***/ "./images/mhm-logo.svg":
/*!*****************************!*\
  !*** ./images/mhm-logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mhm-logo.svg";

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _images_logo_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo-1.png */ \"./images/logo-1.png\");\n/* harmony import */ var _images_mhm_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/mhm-logo.svg */ \"./images/mhm-logo.svg\");\n/* harmony import */ var _images_denver_skyline_option_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/denver-skyline-option-3.jpg */ \"./images/denver-skyline-option-3.jpg\");\n// Import SCSS\n\n\n// Import the mountain landscape image, logo, and Denver skyline\n\n\n\n\n// Main JavaScript functionality\ndocument.addEventListener('DOMContentLoaded', function() {\n    // Set the imported images as sources\n    const landscapeImage = document.querySelector('.landscape-image');\n    if (landscapeImage) {\n        landscapeImage.src = _images_logo_1_png__WEBPACK_IMPORTED_MODULE_1__;\n    }\n\n    const logoImage = document.querySelector('.logo-image');\n    if (logoImage) {\n        logoImage.src = _images_mhm_logo_svg__WEBPACK_IMPORTED_MODULE_2__;\n    }\n\n    const skylineImage = document.querySelector('.skyline-image');\n    if (skylineImage) {\n        skylineImage.src = _images_denver_skyline_option_3_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    }\n    // Navigation buttons\n    const navButtons = document.querySelectorAll('.nav-button');\n    navButtons.forEach(button => {\n        button.addEventListener('click', function() {\n            console.log('Navigate to:', this.textContent);\n            // Add navigation logic here\n        });\n    });\n\n    // Review buttons\n    const reviewButtons = document.querySelectorAll('.review-btn');\n    reviewButtons.forEach(button => {\n        button.addEventListener('click', function() {\n            console.log('Review on:', this.textContent);\n            if (this.textContent === 'On Google') {\n                // Open Google Reviews\n                window.open('https://www.google.com/search?q=mile+high+marketing+reviews', '_blank');\n            } else if (this.textContent === 'On Nextdoor') {\n                // Open Nextdoor\n                window.open('https://nextdoor.com', '_blank');\n            }\n        });\n    });\n\n    // Social icons\n    const socialIcons = document.querySelectorAll('.social-icon');\n    socialIcons.forEach(icon => {\n        icon.addEventListener('click', function(e) {\n            e.preventDefault();\n            const iconClass = this.classList[1]; // Get the second class (facebook, email, phone)\n            \n            switch(iconClass) {\n                case 'facebook':\n                    window.open('https://facebook.com', '_blank');\n                    break;\n                case 'email':\n                    window.location.href = 'mailto:contact@milehighmarketing.com';\n                    break;\n                case 'phone':\n                    window.location.href = 'tel:+1234567890';\n                    break;\n            }\n        });\n    });\n\n    // CTA button\n    const ctaButton = document.querySelector('.cta-button');\n    ctaButton.addEventListener('click', function() {\n        console.log('Read more clicked');\n        // Add scroll to content or page navigation\n        // For now, just smooth scroll down\n        window.scrollBy({\n            top: window.innerHeight,\n            behavior: 'smooth'\n        });\n    });\n\n    // Parallax effect for mountains (optional)\n    let ticking = false;\n    \n    function updateParallax() {\n        const scrolled = window.pageYOffset;\n        const parallax = scrolled * 0.5;\n        \n        const mountainBack = document.querySelector('.mountain-back');\n        const mountainMid = document.querySelector('.mountain-mid');\n        const mountainFront = document.querySelector('.mountain-front');\n        \n        if (mountainBack) mountainBack.style.transform = `translateY(${parallax}px)`;\n        if (mountainMid) mountainMid.style.transform = `translateY(${parallax * 0.7}px)`;\n        if (mountainFront) mountainFront.style.transform = `translateY(${parallax * 0.4}px)`;\n        \n        ticking = false;\n    }\n    \n    function requestTick() {\n        if (!ticking) {\n            requestAnimationFrame(updateParallax);\n            ticking = true;\n        }\n    }\n    \n    window.addEventListener('scroll', requestTick);\n});\n\n// Export for potential use in other modules\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    init() {\n        console.log('MHM Site initialized');\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDNkI7O0FBRTdCO0FBQ3FEO0FBQ1I7QUFDcUI7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsK0NBQWlCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQU87QUFDL0I7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixnRUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLFNBQVM7QUFDaEYscUVBQXFFLGVBQWU7QUFDcEYseUVBQXlFLGVBQWU7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21obS1zaXRlLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBTQ1NTXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG4vLyBJbXBvcnQgdGhlIG1vdW50YWluIGxhbmRzY2FwZSBpbWFnZSwgbG9nbywgYW5kIERlbnZlciBza3lsaW5lXG5pbXBvcnQgbW91bnRhaW5MYW5kc2NhcGUgZnJvbSAnLi4vaW1hZ2VzL2xvZ28tMS5wbmcnO1xuaW1wb3J0IG1obUxvZ28gZnJvbSAnLi4vaW1hZ2VzL21obS1sb2dvLnN2Zyc7XG5pbXBvcnQgZGVudmVyU2t5bGluZSBmcm9tICcuLi9pbWFnZXMvZGVudmVyLXNreWxpbmUtb3B0aW9uLTMuanBnJztcblxuLy8gTWFpbiBKYXZhU2NyaXB0IGZ1bmN0aW9uYWxpdHlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICAvLyBTZXQgdGhlIGltcG9ydGVkIGltYWdlcyBhcyBzb3VyY2VzXG4gICAgY29uc3QgbGFuZHNjYXBlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZHNjYXBlLWltYWdlJyk7XG4gICAgaWYgKGxhbmRzY2FwZUltYWdlKSB7XG4gICAgICAgIGxhbmRzY2FwZUltYWdlLnNyYyA9IG1vdW50YWluTGFuZHNjYXBlO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWltYWdlJyk7XG4gICAgaWYgKGxvZ29JbWFnZSkge1xuICAgICAgICBsb2dvSW1hZ2Uuc3JjID0gbWhtTG9nbztcbiAgICB9XG5cbiAgICBjb25zdCBza3lsaW5lSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2t5bGluZS1pbWFnZScpO1xuICAgIGlmIChza3lsaW5lSW1hZ2UpIHtcbiAgICAgICAgc2t5bGluZUltYWdlLnNyYyA9IGRlbnZlclNreWxpbmU7XG4gICAgfVxuICAgIC8vIE5hdmlnYXRpb24gYnV0dG9uc1xuICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbicpO1xuICAgIG5hdkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXZpZ2F0ZSB0bzonLCB0aGlzLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIC8vIEFkZCBuYXZpZ2F0aW9uIGxvZ2ljIGhlcmVcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBSZXZpZXcgYnV0dG9uc1xuICAgIGNvbnN0IHJldmlld0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3LWJ0bicpO1xuICAgIHJldmlld0J1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXZpZXcgb246JywgdGhpcy50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gJ09uIEdvb2dsZScpIHtcbiAgICAgICAgICAgICAgICAvLyBPcGVuIEdvb2dsZSBSZXZpZXdzXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9bWlsZStoaWdoK21hcmtldGluZytyZXZpZXdzJywgJ19ibGFuaycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRleHRDb250ZW50ID09PSAnT24gTmV4dGRvb3InKSB7XG4gICAgICAgICAgICAgICAgLy8gT3BlbiBOZXh0ZG9vclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL25leHRkb29yLmNvbScsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBTb2NpYWwgaWNvbnNcbiAgICBjb25zdCBzb2NpYWxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb2NpYWwtaWNvbicpO1xuICAgIHNvY2lhbEljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBpY29uQ2xhc3MgPSB0aGlzLmNsYXNzTGlzdFsxXTsgLy8gR2V0IHRoZSBzZWNvbmQgY2xhc3MgKGZhY2Vib29rLCBlbWFpbCwgcGhvbmUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN3aXRjaChpY29uQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdmYWNlYm9vayc6XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2ZhY2Vib29rLmNvbScsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdtYWlsdG86Y29udGFjdEBtaWxlaGlnaG1hcmtldGluZy5jb20nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwaG9uZSc6XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ3RlbDorMTIzNDU2Nzg5MCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIENUQSBidXR0b25cbiAgICBjb25zdCBjdGFCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3RhLWJ1dHRvbicpO1xuICAgIGN0YUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVhZCBtb3JlIGNsaWNrZWQnKTtcbiAgICAgICAgLy8gQWRkIHNjcm9sbCB0byBjb250ZW50IG9yIHBhZ2UgbmF2aWdhdGlvblxuICAgICAgICAvLyBGb3Igbm93LCBqdXN0IHNtb290aCBzY3JvbGwgZG93blxuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoe1xuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBQYXJhbGxheCBlZmZlY3QgZm9yIG1vdW50YWlucyAob3B0aW9uYWwpXG4gICAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVQYXJhbGxheCgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHBhcmFsbGF4ID0gc2Nyb2xsZWQgKiAwLjU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtb3VudGFpbkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW91bnRhaW4tYmFjaycpO1xuICAgICAgICBjb25zdCBtb3VudGFpbk1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3VudGFpbi1taWQnKTtcbiAgICAgICAgY29uc3QgbW91bnRhaW5Gcm9udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3VudGFpbi1mcm9udCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1vdW50YWluQmFjaykgbW91bnRhaW5CYWNrLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGFyYWxsYXh9cHgpYDtcbiAgICAgICAgaWYgKG1vdW50YWluTWlkKSBtb3VudGFpbk1pZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3BhcmFsbGF4ICogMC43fXB4KWA7XG4gICAgICAgIGlmIChtb3VudGFpbkZyb250KSBtb3VudGFpbkZyb250LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGFyYWxsYXggKiAwLjR9cHgpYDtcbiAgICAgICAgXG4gICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcmVxdWVzdFRpY2soKSB7XG4gICAgICAgIGlmICghdGlja2luZykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBhcmFsbGF4KTtcbiAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCByZXF1ZXN0VGljayk7XG59KTtcblxuLy8gRXhwb3J0IGZvciBwb3RlbnRpYWwgdXNlIGluIG90aGVyIG1vZHVsZXNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTUhNIFNpdGUgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/main.js\n\n}");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvbWFpbi5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21obS1zaXRlLy4vc3R5bGVzL21haW4uc2Nzcz83OGY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/main.scss\n\n}");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;