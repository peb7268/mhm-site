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

/***/ "./images/logo-1.png":
/*!***************************!*\
  !*** ./images/logo-1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo-1.png";

/***/ }),

/***/ "./images/logo-active.png":
/*!********************************!*\
  !*** ./images/logo-active.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo-active.png";

/***/ }),

/***/ "./js/form-handler.js":
/*!****************************!*\
  !*** ./js/form-handler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFormHandler: () => (/* binding */ initFormHandler)\n/* harmony export */ });\n/**\n * Shared Formspree form submission handler.\n * Handles AJAX submission with success/error feedback.\n */\nfunction initFormHandler() {\n    const forms = document.querySelectorAll('form[action*=\"formspree.io\"]');\n\n    forms.forEach(form => {\n        form.addEventListener('submit', function(e) {\n            e.preventDefault();\n\n            const submitBtn = form.querySelector('[type=\"submit\"]');\n            const originalText = submitBtn.textContent;\n            submitBtn.textContent = 'Sending...';\n            submitBtn.disabled = true;\n\n            const data = new FormData(form);\n\n            fetch(form.action, {\n                method: 'POST',\n                body: data,\n                headers: { 'Accept': 'application/json' }\n            })\n            .then(response => {\n                if (response.ok) {\n                    form.reset();\n                    submitBtn.textContent = 'Sent!';\n                    setTimeout(() => { submitBtn.textContent = originalText; submitBtn.disabled = false; }, 3000);\n                } else {\n                    throw new Error('Form submission failed');\n                }\n            })\n            .catch(() => {\n                submitBtn.textContent = 'Error - Try Again';\n                submitBtn.disabled = false;\n                setTimeout(() => { submitBtn.textContent = originalText; }, 3000);\n            });\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9mb3JtLWhhbmRsZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQ0FBc0MsNkJBQTZCO0FBQzFHLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1Q0FBdUM7QUFDMUUsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taG0tc2l0ZS8uL2pzL2Zvcm0taGFuZGxlci5qcz82MmJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2hhcmVkIEZvcm1zcHJlZSBmb3JtIHN1Ym1pc3Npb24gaGFuZGxlci5cbiAqIEhhbmRsZXMgQUpBWCBzdWJtaXNzaW9uIHdpdGggc3VjY2Vzcy9lcnJvciBmZWVkYmFjay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRGb3JtSGFuZGxlcigpIHtcbiAgICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm1bYWN0aW9uKj1cImZvcm1zcHJlZS5pb1wiXScpO1xuXG4gICAgZm9ybXMuZm9yRWFjaChmb3JtID0+IHtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IHN1Ym1pdEJ0bi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTZW5kaW5nLi4uJztcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICAgICAgICAgIGZldGNoKGZvcm0uYWN0aW9uLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU2VudCEnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc3VibWl0QnRuLnRleHRDb250ZW50ID0gb3JpZ2luYWxUZXh0OyBzdWJtaXRCdG4uZGlzYWJsZWQgPSBmYWxzZTsgfSwgMzAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtIHN1Ym1pc3Npb24gZmFpbGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0Vycm9yIC0gVHJ5IEFnYWluJztcbiAgICAgICAgICAgICAgICBzdWJtaXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc3VibWl0QnRuLnRleHRDb250ZW50ID0gb3JpZ2luYWxUZXh0OyB9LCAzMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/form-handler.js\n\n}");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _images_logo_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo-1.png */ \"./images/logo-1.png\");\n/* harmony import */ var _images_logo_active_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logo-active.png */ \"./images/logo-active.png\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-menu */ \"./js/mobile-menu.js\");\n/* harmony import */ var _form_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-handler */ \"./js/form-handler.js\");\n// Import SCSS\n\n\n// Hero illustration (logo-1.png is the panoramic mountain landscape) + brand logo.\n// The About section now uses an inline SVG illustration (set via the HTML src\n// attribute, no JS swap) so it stays consistent with the hero's flat-vector style.\n\n  // canonical active brand mark — overwrite logo-active.png to swap\n\n\n\n\n// Main JavaScript functionality\ndocument.addEventListener('DOMContentLoaded', function() {\n    // Set the imported images as sources\n    const landscapeImage = document.querySelector('.landscape-image');\n    if (landscapeImage) landscapeImage.src = _images_logo_1_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    const logoImage = document.querySelector('.logo-image');\n    if (logoImage) logoImage.src = _images_logo_active_png__WEBPACK_IMPORTED_MODULE_2__;\n\n    // Review buttons\n    const reviewButtons = document.querySelectorAll('.review-btn');\n    reviewButtons.forEach(button => {\n        button.addEventListener('click', function() {\n            if (this.textContent === 'On Google') {\n                window.open('https://www.google.com/search?q=mile+high+marketing+reviews', '_blank');\n            } else if (this.textContent === 'On Nextdoor') {\n                window.open('https://nextdoor.com', '_blank');\n            }\n        });\n    });\n\n    // Social icons\n    const socialIcons = document.querySelectorAll('.social-icon');\n    socialIcons.forEach(icon => {\n        icon.addEventListener('click', function(e) {\n            e.preventDefault();\n            const iconClass = this.classList[1];\n\n            switch(iconClass) {\n                case 'facebook':\n                    window.open('https://facebook.com', '_blank');\n                    break;\n                case 'email':\n                    document.querySelector('.contact-section')?.scrollIntoView({ behavior: 'smooth' });\n                    break;\n                case 'phone':\n                    window.location.href = 'tel:+17208190314';\n                    break;\n            }\n        });\n    });\n\n    // CTA button - scroll to services section\n    const ctaButton = document.querySelector('.cta-button');\n    if (ctaButton) {\n        ctaButton.addEventListener('click', function() {\n            document.querySelector('.services-section')?.scrollIntoView({ behavior: 'smooth' });\n        });\n    }\n\n    // Contact form submission (Formspree)\n    (0,_form_handler__WEBPACK_IMPORTED_MODULE_4__.initFormHandler)();\n\n    // Parallax effect for mountains\n    let ticking = false;\n\n    function updateParallax() {\n        const scrolled = window.pageYOffset;\n        const parallax = scrolled * 0.5;\n\n        const mountainBack = document.querySelector('.mountain-back');\n        const mountainMid = document.querySelector('.mountain-mid');\n        const mountainFront = document.querySelector('.mountain-front');\n\n        if (mountainBack) mountainBack.style.transform = `translateY(${parallax}px)`;\n        if (mountainMid) mountainMid.style.transform = `translateY(${parallax * 0.7}px)`;\n        if (mountainFront) mountainFront.style.transform = `translateY(${parallax * 0.4}px)`;\n\n        ticking = false;\n    }\n\n    function requestTick() {\n        if (!ticking) {\n            requestAnimationFrame(updateParallax);\n            ticking = true;\n        }\n    }\n\n    window.addEventListener('scroll', requestTick);\n\n    // Mobile menu\n    (0,_mobile_menu__WEBPACK_IMPORTED_MODULE_3__.initMobileMenu)();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQzZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDcUQ7QUFDTCxFQUFFOztBQUVIO0FBQ0U7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUFpQjs7QUFFOUQ7QUFDQSxtQ0FBbUMsb0RBQU87O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsb0JBQW9CO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxvQkFBb0I7QUFDOUYsU0FBUztBQUNUOztBQUVBO0FBQ0EsSUFBSSw4REFBZTs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVFQUF1RSxTQUFTO0FBQ2hGLHFFQUFxRSxlQUFlO0FBQ3BGLHlFQUF5RSxlQUFlOztBQUV4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksNERBQWM7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21obS1zaXRlLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBTQ1NTXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG4vLyBIZXJvIGlsbHVzdHJhdGlvbiAobG9nby0xLnBuZyBpcyB0aGUgcGFub3JhbWljIG1vdW50YWluIGxhbmRzY2FwZSkgKyBicmFuZCBsb2dvLlxuLy8gVGhlIEFib3V0IHNlY3Rpb24gbm93IHVzZXMgYW4gaW5saW5lIFNWRyBpbGx1c3RyYXRpb24gKHNldCB2aWEgdGhlIEhUTUwgc3JjXG4vLyBhdHRyaWJ1dGUsIG5vIEpTIHN3YXApIHNvIGl0IHN0YXlzIGNvbnNpc3RlbnQgd2l0aCB0aGUgaGVybydzIGZsYXQtdmVjdG9yIHN0eWxlLlxuaW1wb3J0IG1vdW50YWluTGFuZHNjYXBlIGZyb20gJy4uL2ltYWdlcy9sb2dvLTEucG5nJztcbmltcG9ydCBtaG1Mb2dvIGZyb20gJy4uL2ltYWdlcy9sb2dvLWFjdGl2ZS5wbmcnOyAgLy8gY2Fub25pY2FsIGFjdGl2ZSBicmFuZCBtYXJrIOKAlCBvdmVyd3JpdGUgbG9nby1hY3RpdmUucG5nIHRvIHN3YXBcblxuaW1wb3J0IHsgaW5pdE1vYmlsZU1lbnUgfSBmcm9tICcuL21vYmlsZS1tZW51JztcbmltcG9ydCB7IGluaXRGb3JtSGFuZGxlciB9IGZyb20gJy4vZm9ybS1oYW5kbGVyJztcblxuLy8gTWFpbiBKYXZhU2NyaXB0IGZ1bmN0aW9uYWxpdHlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICAvLyBTZXQgdGhlIGltcG9ydGVkIGltYWdlcyBhcyBzb3VyY2VzXG4gICAgY29uc3QgbGFuZHNjYXBlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZHNjYXBlLWltYWdlJyk7XG4gICAgaWYgKGxhbmRzY2FwZUltYWdlKSBsYW5kc2NhcGVJbWFnZS5zcmMgPSBtb3VudGFpbkxhbmRzY2FwZTtcblxuICAgIGNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWltYWdlJyk7XG4gICAgaWYgKGxvZ29JbWFnZSkgbG9nb0ltYWdlLnNyYyA9IG1obUxvZ287XG5cbiAgICAvLyBSZXZpZXcgYnV0dG9uc1xuICAgIGNvbnN0IHJldmlld0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3LWJ0bicpO1xuICAgIHJldmlld0J1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHRDb250ZW50ID09PSAnT24gR29vZ2xlJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPW1pbGUraGlnaCttYXJrZXRpbmcrcmV2aWV3cycsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gJ09uIE5leHRkb29yJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL25leHRkb29yLmNvbScsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBTb2NpYWwgaWNvbnNcbiAgICBjb25zdCBzb2NpYWxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb2NpYWwtaWNvbicpO1xuICAgIHNvY2lhbEljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBpY29uQ2xhc3MgPSB0aGlzLmNsYXNzTGlzdFsxXTtcblxuICAgICAgICAgICAgc3dpdGNoKGljb25DbGFzcykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZhY2Vib29rJzpcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZmFjZWJvb2suY29tJywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXNlY3Rpb24nKT8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Bob25lJzpcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAndGVsOisxNzIwODE5MDMxNCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIENUQSBidXR0b24gLSBzY3JvbGwgdG8gc2VydmljZXMgc2VjdGlvblxuICAgIGNvbnN0IGN0YUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdGEtYnV0dG9uJyk7XG4gICAgaWYgKGN0YUJ1dHRvbikge1xuICAgICAgICBjdGFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlcy1zZWN0aW9uJyk/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDb250YWN0IGZvcm0gc3VibWlzc2lvbiAoRm9ybXNwcmVlKVxuICAgIGluaXRGb3JtSGFuZGxlcigpO1xuXG4gICAgLy8gUGFyYWxsYXggZWZmZWN0IGZvciBtb3VudGFpbnNcbiAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBjb25zdCBwYXJhbGxheCA9IHNjcm9sbGVkICogMC41O1xuXG4gICAgICAgIGNvbnN0IG1vdW50YWluQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3VudGFpbi1iYWNrJyk7XG4gICAgICAgIGNvbnN0IG1vdW50YWluTWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdW50YWluLW1pZCcpO1xuICAgICAgICBjb25zdCBtb3VudGFpbkZyb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdW50YWluLWZyb250Jyk7XG5cbiAgICAgICAgaWYgKG1vdW50YWluQmFjaykgbW91bnRhaW5CYWNrLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGFyYWxsYXh9cHgpYDtcbiAgICAgICAgaWYgKG1vdW50YWluTWlkKSBtb3VudGFpbk1pZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3BhcmFsbGF4ICogMC43fXB4KWA7XG4gICAgICAgIGlmIChtb3VudGFpbkZyb250KSBtb3VudGFpbkZyb250LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGFyYWxsYXggKiAwLjR9cHgpYDtcblxuICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdFRpY2soKSB7XG4gICAgICAgIGlmICghdGlja2luZykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBhcmFsbGF4KTtcbiAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHJlcXVlc3RUaWNrKTtcblxuICAgIC8vIE1vYmlsZSBtZW51XG4gICAgaW5pdE1vYmlsZU1lbnUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/main.js\n\n}");

/***/ }),

/***/ "./js/mobile-menu.js":
/*!***************************!*\
  !*** ./js/mobile-menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMobileMenu: () => (/* binding */ initMobileMenu)\n/* harmony export */ });\n// Shared mobile menu toggle - imported by all page entry points\nfunction initMobileMenu() {\n    const toggle = document.querySelector('.mobile-menu-toggle');\n    const overlay = document.querySelector('.mobile-menu-overlay');\n\n    if (!toggle || !overlay) return;\n\n    toggle.addEventListener('click', function() {\n        this.classList.toggle('active');\n        overlay.classList.toggle('active');\n        document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';\n    });\n\n    overlay.addEventListener('click', function(e) {\n        if (e.target === this) {\n            toggle.classList.remove('active');\n            this.classList.remove('active');\n            document.body.style.overflow = '';\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2JpbGUtbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL21obS1zaXRlLy4vanMvbW9iaWxlLW1lbnUuanM/OTA1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaGFyZWQgbW9iaWxlIG1lbnUgdG9nZ2xlIC0gaW1wb3J0ZWQgYnkgYWxsIHBhZ2UgZW50cnkgcG9pbnRzXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1vYmlsZU1lbnUoKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51LXRvZ2dsZScpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUtb3ZlcmxheScpO1xuXG4gICAgaWYgKCF0b2dnbGUgfHwgIW92ZXJsYXkpIHJldHVybjtcblxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID8gJ2hpZGRlbicgOiAnJztcbiAgICB9KTtcblxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcykge1xuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/mobile-menu.js\n\n}");

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