(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./console_log.js":
/*!************************!*\
  !*** ./console_log.js ***!
  \************************/
/*! exports provided: run, __wbg_log_738c31fa5cdb7577, __wbg_log_40ca944c2cefeec1, __wbg_log_2949f3d792510a3e, __widl_f_log_1_, __widl_f_log_2_, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_number_new */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_738c31fa5cdb7577\", function() { return __wbg_log_738c31fa5cdb7577; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_40ca944c2cefeec1\", function() { return __wbg_log_40ca944c2cefeec1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_2949f3d792510a3e\", function() { return __wbg_log_2949f3d792510a3e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_1_\", function() { return __widl_f_log_1_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_2_\", function() { return __widl_f_log_2_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony import */ var _console_log_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console_log_bg */ \"./console_log_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _console_log_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _console_log_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_console_log_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_738c31fa5cdb7577(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    console.log(varg0);\n}\n\nfunction __wbg_log_40ca944c2cefeec1(arg0) {\n    console.log(arg0);\n}\n\nfunction __wbg_log_2949f3d792510a3e(arg0, arg1, arg2, arg3) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    let varg2 = getStringFromWasm(arg2, arg3);\n    console.log(varg0, varg2);\n}\n\nconst stack = [];\n\nconst slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n        return val.obj;\n\n    }\n}\n\nconst __widl_f_log_1__target = console.log;\n\nfunction __widl_f_log_1_(arg0) {\n    __widl_f_log_1__target(getObject(arg0));\n}\n\nconst __widl_f_log_2__target = console.log;\n\nfunction __widl_f_log_2_(arg0, arg1) {\n    __widl_f_log_2__target(getObject(arg0), getObject(arg1));\n}\n\nlet slab_next = slab.length;\n\nfunction dropRef(idx) {\n\n    idx = idx >> 1;\n    if (idx < 4) return;\n    let obj = slab[idx];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0) return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx] = slab_next;\n    slab_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n    dropRef(i);\n}\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length) slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction __wbindgen_number_new(i) {\n    return addHeapObject(i);\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./console_log.js?");

/***/ }),

/***/ "./console_log_bg.wasm":
/*!*****************************!*\
  !*** ./console_log_bg.wasm ***!
  \*****************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./console_log */ \"./console_log.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./console_log_bg.wasm?");

/***/ })

}]);