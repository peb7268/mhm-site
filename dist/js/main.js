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

/***/ "./images/c6f28b9ee2132fab7176486f6cb3deefa25586ad.png":
/*!*************************************************************!*\
  !*** ./images/c6f28b9ee2132fab7176486f6cb3deefa25586ad.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c6f28b9ee2132fab7176486f6cb3deefa25586ad.png";

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _images_c6f28b9ee2132fab7176486f6cb3deefa25586ad_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/c6f28b9ee2132fab7176486f6cb3deefa25586ad.png */ \"./images/c6f28b9ee2132fab7176486f6cb3deefa25586ad.png\");\n/* harmony import */ var _images_mhm_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/mhm-logo.svg */ \"./images/mhm-logo.svg\");\n// Import SCSS\n\n\n// Import the mountain landscape image and logo\n\n\n\n// Main JavaScript functionality\ndocument.addEventListener('DOMContentLoaded', function() {\n    // Set the imported images as sources\n    const landscapeImage = document.querySelector('.landscape-image');\n    if (landscapeImage) {\n        landscapeImage.src = _images_c6f28b9ee2132fab7176486f6cb3deefa25586ad_png__WEBPACK_IMPORTED_MODULE_1__;\n    }\n    \n    const logoImage = document.querySelector('.logo-image');\n    if (logoImage) {\n        logoImage.src = _images_mhm_logo_svg__WEBPACK_IMPORTED_MODULE_2__;\n    }\n    // Navigation buttons\n    const navButtons = document.querySelectorAll('.nav-button');\n    navButtons.forEach(button => {\n        button.addEventListener('click', function() {\n            console.log('Navigate to:', this.textContent);\n            // Add navigation logic here\n        });\n    });\n\n    // Review buttons\n    const reviewButtons = document.querySelectorAll('.review-btn');\n    reviewButtons.forEach(button => {\n        button.addEventListener('click', function() {\n            console.log('Review on:', this.textContent);\n            if (this.textContent === 'On Google') {\n                // Open Google Reviews\n                window.open('https://www.google.com/search?q=mile+high+marketing+reviews', '_blank');\n            } else if (this.textContent === 'On Nextdoor') {\n                // Open Nextdoor\n                window.open('https://nextdoor.com', '_blank');\n            }\n        });\n    });\n\n    // Social icons\n    const socialIcons = document.querySelectorAll('.social-icon');\n    socialIcons.forEach(icon => {\n        icon.addEventListener('click', function(e) {\n            e.preventDefault();\n            const iconClass = this.classList[1]; // Get the second class (facebook, email, phone)\n            \n            switch(iconClass) {\n                case 'facebook':\n                    window.open('https://facebook.com', '_blank');\n                    break;\n                case 'email':\n                    window.location.href = 'mailto:contact@milehighmarketing.com';\n                    break;\n                case 'phone':\n                    window.location.href = 'tel:+1234567890';\n                    break;\n            }\n        });\n    });\n\n    // CTA button\n    const ctaButton = document.querySelector('.cta-button');\n    ctaButton.addEventListener('click', function() {\n        console.log('Read more clicked');\n        // Add scroll to content or page navigation\n        // For now, just smooth scroll down\n        window.scrollBy({\n            top: window.innerHeight,\n            behavior: 'smooth'\n        });\n    });\n\n    // Parallax effect for mountains (optional)\n    let ticking = false;\n    \n    function updateParallax() {\n        const scrolled = window.pageYOffset;\n        const parallax = scrolled * 0.5;\n        \n        const mountainBack = document.querySelector('.mountain-back');\n        const mountainMid = document.querySelector('.mountain-mid');\n        const mountainFront = document.querySelector('.mountain-front');\n        \n        if (mountainBack) mountainBack.style.transform = `translateY(${parallax}px)`;\n        if (mountainMid) mountainMid.style.transform = `translateY(${parallax * 0.7}px)`;\n        if (mountainFront) mountainFront.style.transform = `translateY(${parallax * 0.4}px)`;\n        \n        ticking = false;\n    }\n    \n    function requestTick() {\n        if (!ticking) {\n            requestAnimationFrame(updateParallax);\n            ticking = true;\n        }\n    }\n    \n    window.addEventListener('scroll', requestTick);\n});\n\n// Export for potential use in other modules\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    init() {\n        console.log('MHM Site initialized');\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUM2Qjs7QUFFN0I7QUFDdUY7QUFDMUM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUZBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsU0FBUztBQUNoRixxRUFBcUUsZUFBZTtBQUNwRix5RUFBeUUsZUFBZTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWhtLXNpdGUvLi9qcy9tYWluLmpzP2UzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IFNDU1NcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbi8vIEltcG9ydCB0aGUgbW91bnRhaW4gbGFuZHNjYXBlIGltYWdlIGFuZCBsb2dvXG5pbXBvcnQgbW91bnRhaW5MYW5kc2NhcGUgZnJvbSAnLi4vaW1hZ2VzL2M2ZjI4YjllZTIxMzJmYWI3MTc2NDg2ZjZjYjNkZWVmYTI1NTg2YWQucG5nJztcbmltcG9ydCBtaG1Mb2dvIGZyb20gJy4uL2ltYWdlcy9taG0tbG9nby5zdmcnO1xuXG4vLyBNYWluIEphdmFTY3JpcHQgZnVuY3Rpb25hbGl0eVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIC8vIFNldCB0aGUgaW1wb3J0ZWQgaW1hZ2VzIGFzIHNvdXJjZXNcbiAgICBjb25zdCBsYW5kc2NhcGVJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kc2NhcGUtaW1hZ2UnKTtcbiAgICBpZiAobGFuZHNjYXBlSW1hZ2UpIHtcbiAgICAgICAgbGFuZHNjYXBlSW1hZ2Uuc3JjID0gbW91bnRhaW5MYW5kc2NhcGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWltYWdlJyk7XG4gICAgaWYgKGxvZ29JbWFnZSkge1xuICAgICAgICBsb2dvSW1hZ2Uuc3JjID0gbWhtTG9nbztcbiAgICB9XG4gICAgLy8gTmF2aWdhdGlvbiBidXR0b25zXG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnV0dG9uJyk7XG4gICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRlIHRvOicsIHRoaXMudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgLy8gQWRkIG5hdmlnYXRpb24gbG9naWMgaGVyZVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFJldmlldyBidXR0b25zXG4gICAgY29uc3QgcmV2aWV3QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXZpZXctYnRuJyk7XG4gICAgcmV2aWV3QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldmlldyBvbjonLCB0aGlzLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRDb250ZW50ID09PSAnT24gR29vZ2xlJykge1xuICAgICAgICAgICAgICAgIC8vIE9wZW4gR29vZ2xlIFJldmlld3NcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1taWxlK2hpZ2grbWFya2V0aW5nK3Jldmlld3MnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGV4dENvbnRlbnQgPT09ICdPbiBOZXh0ZG9vcicpIHtcbiAgICAgICAgICAgICAgICAvLyBPcGVuIE5leHRkb29yXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vbmV4dGRvb3IuY29tJywgJ19ibGFuaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFNvY2lhbCBpY29uc1xuICAgIGNvbnN0IHNvY2lhbEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvY2lhbC1pY29uJyk7XG4gICAgc29jaWFsSWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGljb25DbGFzcyA9IHRoaXMuY2xhc3NMaXN0WzFdOyAvLyBHZXQgdGhlIHNlY29uZCBjbGFzcyAoZmFjZWJvb2ssIGVtYWlsLCBwaG9uZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3dpdGNoKGljb25DbGFzcykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZhY2Vib29rJzpcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZmFjZWJvb2suY29tJywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ21haWx0bzpjb250YWN0QG1pbGVoaWdobWFya2V0aW5nLmNvbSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAndGVsOisxMjM0NTY3ODkwJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ1RBIGJ1dHRvblxuICAgIGNvbnN0IGN0YUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdGEtYnV0dG9uJyk7XG4gICAgY3RhQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWFkIG1vcmUgY2xpY2tlZCcpO1xuICAgICAgICAvLyBBZGQgc2Nyb2xsIHRvIGNvbnRlbnQgb3IgcGFnZSBuYXZpZ2F0aW9uXG4gICAgICAgIC8vIEZvciBub3csIGp1c3Qgc21vb3RoIHNjcm9sbCBkb3duXG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFBhcmFsbGF4IGVmZmVjdCBmb3IgbW91bnRhaW5zIChvcHRpb25hbClcbiAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xuICAgICAgICBjb25zdCBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgY29uc3QgcGFyYWxsYXggPSBzY3JvbGxlZCAqIDAuNTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1vdW50YWluQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3VudGFpbi1iYWNrJyk7XG4gICAgICAgIGNvbnN0IG1vdW50YWluTWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdW50YWluLW1pZCcpO1xuICAgICAgICBjb25zdCBtb3VudGFpbkZyb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdW50YWluLWZyb250Jyk7XG4gICAgICAgIFxuICAgICAgICBpZiAobW91bnRhaW5CYWNrKSBtb3VudGFpbkJhY2suc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtwYXJhbGxheH1weClgO1xuICAgICAgICBpZiAobW91bnRhaW5NaWQpIG1vdW50YWluTWlkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGFyYWxsYXggKiAwLjd9cHgpYDtcbiAgICAgICAgaWYgKG1vdW50YWluRnJvbnQpIG1vdW50YWluRnJvbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtwYXJhbGxheCAqIDAuNH1weClgO1xuICAgICAgICBcbiAgICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZXF1ZXN0VGljaygpIHtcbiAgICAgICAgaWYgKCF0aWNraW5nKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUGFyYWxsYXgpO1xuICAgICAgICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHJlcXVlc3RUaWNrKTtcbn0pO1xuXG4vLyBFeHBvcnQgZm9yIHBvdGVudGlhbCB1c2UgaW4gb3RoZXIgbW9kdWxlc1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNSE0gU2l0ZSBpbml0aWFsaXplZCcpO1xuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/main.js\n\n}");

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