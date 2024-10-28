"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/es-set-tostringtag";
exports.ids = ["vendor-chunks/es-set-tostringtag"];
exports.modules = {

/***/ "(ssr)/./node_modules/es-set-tostringtag/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es-set-tostringtag/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\n\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true);\n\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(ssr)/./node_modules/has-tostringtag/shams.js\")();\nvar hasOwn = __webpack_require__(/*! hasown */ \"(ssr)/./node_modules/hasown/index.js\");\n\nvar toStringTag = hasToStringTag ? Symbol.toStringTag : null;\n\n/** @type {import('.')} */\nmodule.exports = function setToStringTag(object, value) {\n\tvar overrideIfSet = arguments.length > 2 && arguments[2] && arguments[2].force;\n\tif (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {\n\t\tif ($defineProperty) {\n\t\t\t$defineProperty(object, toStringTag, {\n\t\t\t\tconfigurable: true,\n\t\t\t\tenumerable: false,\n\t\t\t\tvalue: value,\n\t\t\t\twritable: false\n\t\t\t});\n\t\t} else {\n\t\t\tobject[toStringTag] = value; // eslint-disable-line no-param-reassign\n\t\t}\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXMtc2V0LXRvc3RyaW5ndGFnL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLGtFQUFlOztBQUUxQzs7QUFFQSxxQkFBcUIsbUJBQU8sQ0FBQyw0RUFBdUI7QUFDcEQsYUFBYSxtQkFBTyxDQUFDLG9EQUFROztBQUU3Qjs7QUFFQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9lcy1zZXQtdG9zdHJpbmd0YWcvaW5kZXguanM/ZTU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG5cbnZhciBoYXNUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJ2hhcy10b3N0cmluZ3RhZy9zaGFtcycpKCk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnaGFzb3duJyk7XG5cbnZhciB0b1N0cmluZ1RhZyA9IGhhc1RvU3RyaW5nVGFnID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogbnVsbDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0VG9TdHJpbmdUYWcob2JqZWN0LCB2YWx1ZSkge1xuXHR2YXIgb3ZlcnJpZGVJZlNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAmJiBhcmd1bWVudHNbMl0uZm9yY2U7XG5cdGlmICh0b1N0cmluZ1RhZyAmJiAob3ZlcnJpZGVJZlNldCB8fCAhaGFzT3duKG9iamVjdCwgdG9TdHJpbmdUYWcpKSkge1xuXHRcdGlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0XHRcdCRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHRvU3RyaW5nVGFnLCB7XG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b2JqZWN0W3RvU3RyaW5nVGFnXSA9IHZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdFx0fVxuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/es-set-tostringtag/index.js\n");

/***/ })

};
;