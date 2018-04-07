webpackHotUpdate(0,{

/***/ "./src/components/Forum/ForumComments.js":
/*!***********************************************!*\
  !*** ./src/components/Forum/ForumComments.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ForumTopic_css__ = __webpack_require__(/*! ./ForumTopic.css */ "./src/components/Forum/ForumTopic.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ForumTopic_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ForumTopic_css__);
var _jsxFileName = '/Users/leal/Workspace/alimente-se-bem/src/components/Forum/ForumComments.js',
    _this = this;





// const newLocal = ' Esse eh do commments ';
var forumComments = function forumComments(props) {
	// console.log (isArray(props.comments))

	if (props.comments && Object(__WEBPACK_IMPORTED_MODULE_1_util__["isArray"])(props.comments)) return props.comments.map(function (comments) {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ key: comments.id, __source: {
					fileName: _jsxFileName,
					lineNumber: 12
				},
				__self: _this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 13
					},
					__self: _this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 14
						},
						__self: _this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'label',
						{ className: 'forum-user', __source: {
								fileName: _jsxFileName,
								lineNumber: 15
							},
							__self: _this
						},
						' ',
						comments.id_User,
						' '
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'label',
						{ className: 'forum-data__resp', __source: {
								fileName: _jsxFileName,
								lineNumber: 16
							},
							__self: _this
						},
						' ',
						comments.data_Criacao
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 18
						},
						__self: _this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'label',
						{ className: 'forum-topico__respUser', __source: {
								fileName: _jsxFileName,
								lineNumber: 19
							},
							__self: _this
						},
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis mauris, et volutpat mauris rutrum hendrerit. Maecenas posuere, risus vel hendrerit dictum, velit lectus venenatis massa, sed varius ex augue vel mauris. Integer non gravida magna. Nam ac rutrum sem. Donec vel feugiat orci, nec facilisis libero. Aenean condimentum a lorem id dapibus. Cras purus nulla, commodo quis gravida nec, hendrerit sed enim. Phasellus suscipit magna sed nunc vehicula dignissim. Ut vitae fermentum nisi, a aliquet orci. Donec rutrum condimentum sem, et imperdiet ante. Maecenas molestie tristique metus sit amet dictum. Vivamus sed vulputate mauris. Sed et est magna. Donec condimentum condimentum orci, quis blandit lorem malesuada vitae. Etiam ut mauris sed orci tincidunt pharetra consequat eu ante.',
						comments.descricao
					)
				)
			)
		);
	});
};

/* harmony default export */ __webpack_exports__["a"] = (forumComments);

/***/ })

})
//# sourceMappingURL=0.8933d21c29b79af740c4.hot-update.js.map