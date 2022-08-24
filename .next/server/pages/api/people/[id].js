"use strict";
(() => {
var exports = {};
exports.id = 44;
exports.ids = [44];
exports.modules = {

/***/ 7036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ personHandler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);

function personHandler(req, res) {
    const { query  } = req;
    const { id  } = query;
    const filtered = _data__WEBPACK_IMPORTED_MODULE_0__/* .people.filter */ .M.filter((p)=>p.id === id);
    // User with id exists
    return filtered.length > 0 ? res.status(200).json(filtered[0]) : res.status(404).json({
        message: `User with id: ${id} not found.`
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [926], () => (__webpack_exec__(7036)));
module.exports = __webpack_exports__;

})();