"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 9566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//import { getSortedPostsData } from '../../lib/posts'
//const posts = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getSortedPostsData()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {
  const results = req.query.q ? posts.filter(post => post.title.toLowerCase().includes(req.query.q)) : [];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    results
  }));
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9566));
module.exports = __webpack_exports__;

})();