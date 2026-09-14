/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/coaching-pathways-panel/template.js"
/*!********************************************************!*\
  !*** ./src/blocks/coaching-pathways-panel/template.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TEMPLATE: () => (/* binding */ TEMPLATE),
/* harmony export */   getPanelTemplate: () => (/* binding */ getPanelTemplate)
/* harmony export */ });
function getPanelTemplate(position) {
  const isRight = position === 'right';
  return [['core/paragraph', {
    className: 'coaching-pathways__eyebrow',
    content: isRight ? 'For organisations' : 'For individuals'
  }], ['core/heading', {
    className: 'coaching-pathways__heading',
    content: isRight ? 'Team and leadership coaching' : 'One-to-one coaching',
    level: 3
  }], ['core/paragraph', {
    className: 'coaching-pathways__content',
    content: isRight ? 'Strengthen leadership, relationships and performance across your organisation.' : 'Create space to think, grow and move forward with focused personal support.'
  }], ['core/buttons', {}, [['core/button', {
    className: 'is-style-hawthorn-arrow',
    text: isRight ? 'Explore organisational coaching' : 'Explore individual coaching'
  }]]]];
}
const TEMPLATE = [['hawthorn/coaching-pathways-panel', {
  position: 'left'
}, getPanelTemplate('left')], ['hawthorn/coaching-pathways-panel', {
  position: 'right'
}, getPanelTemplate('right')], ['hawthorn/coaching-pathways-connector'], ['hawthorn/coaching-pathways-panel', {
  position: 'bottom'
}, [['core/heading', {
  className: 'coaching-pathways__heading',
  content: 'Not sure where to begin?',
  level: 3
}], ['core/paragraph', {
  className: 'coaching-pathways__content',
  content: 'Let’s find the coaching pathway that best fits where you are and where you want to go.'
}]]]];

/***/ },

/***/ "./src/blocks/coaching-pathways/deprecated.js"
/*!****************************************************!*\
  !*** ./src/blocks/coaching-pathways/deprecated.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/coaching-pathways/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ConnectorLines({
  legacy = false
}) {
  const paths = legacy ? ['M250 0 V45 Q250 70 275 70 H500', 'M750 0 V45 Q750 70 725 70 H500'] : ['M250 0 V66 Q250 70 254 70 H500', 'M750 0 V66 Q750 70 746 70 H500'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "coaching-pathways__connectors",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
      viewBox: "0 0 1000 140",
      preserveAspectRatio: "none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
        d: paths[0]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
        d: paths[1]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
        d: "M500 70 V140"
      })]
    })
  });
}
function PathwayPanel({
  position,
  eyebrow,
  heading,
  content,
  buttonText,
  buttonUrl,
  legacy = false
}) {
  const button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "a",
    className: `coaching-pathways__button wp-block-button__link wp-element-button${legacy ? '' : ' is-style-hawthorn-arrow'}`,
    value: buttonText,
    href: buttonUrl || undefined
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `coaching-pathways__panel coaching-pathways__panel--${position}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "p",
      className: "coaching-pathways__eyebrow",
      value: eyebrow
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "h3",
      className: "coaching-pathways__heading",
      value: heading
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "p",
      className: "coaching-pathways__content",
      value: content
    }), legacy ? button : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "wp-block-button is-style-hawthorn-arrow",
      children: button
    })]
  });
}
function saveStatic({
  attributes,
  legacy = false
}) {
  const {
    leftEyebrow,
    leftHeading,
    leftContent,
    leftButtonText,
    leftButtonUrl,
    rightEyebrow,
    rightHeading,
    rightContent,
    rightButtonText,
    rightButtonUrl,
    bottomHeading,
    bottomContent
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'coaching-pathways'
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "coaching-pathways__top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PathwayPanel, {
        position: "left",
        eyebrow: leftEyebrow,
        heading: leftHeading,
        content: leftContent,
        buttonText: leftButtonText,
        buttonUrl: leftButtonUrl,
        legacy: legacy
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PathwayPanel, {
        position: "right",
        eyebrow: rightEyebrow,
        heading: rightHeading,
        content: rightContent,
        buttonText: rightButtonText,
        buttonUrl: rightButtonUrl,
        legacy: legacy
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ConnectorLines, {
      legacy: legacy
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "coaching-pathways__panel coaching-pathways__panel--bottom",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
        tagName: "h3",
        className: "coaching-pathways__heading",
        value: bottomHeading
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
        tagName: "p",
        className: "coaching-pathways__content",
        value: bottomContent
      })]
    })]
  });
}
function migrate(attributes) {
  const makePanel = (position, values) => {
    const innerBlocks = [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/heading', {
      className: 'coaching-pathways__heading',
      content: values.heading || '',
      level: 3
    }), (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
      className: 'coaching-pathways__content',
      content: values.content || ''
    })];
    if (position !== 'bottom') {
      innerBlocks.unshift((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
        className: 'coaching-pathways__eyebrow',
        content: values.eyebrow || ''
      }));
      innerBlocks.push((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/buttons', {}, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/button', {
        className: 'is-style-hawthorn-arrow',
        text: values.buttonText || '',
        url: values.buttonUrl || ''
      })]));
    }
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('hawthorn/coaching-pathways-panel', {
      position
    }, innerBlocks);
  };
  return [{}, [makePanel('left', {
    eyebrow: attributes.leftEyebrow,
    heading: attributes.leftHeading,
    content: attributes.leftContent,
    buttonText: attributes.leftButtonText,
    buttonUrl: attributes.leftButtonUrl
  }), makePanel('right', {
    eyebrow: attributes.rightEyebrow,
    heading: attributes.rightHeading,
    content: attributes.rightContent,
    buttonText: attributes.rightButtonText,
    buttonUrl: attributes.rightButtonUrl
  }), (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('hawthorn/coaching-pathways-connector'), makePanel('bottom', {
    heading: attributes.bottomHeading,
    content: attributes.bottomContent
  })]];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_2__.attributes,
  migrate,
  save: props => saveStatic(props)
}, {
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_2__.attributes,
  migrate,
  save: props => saveStatic({
    ...props,
    legacy: true
  })
}]);

/***/ },

/***/ "./src/blocks/coaching-pathways/edit.js"
/*!**********************************************!*\
  !*** ./src/blocks/coaching-pathways/edit.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coaching_pathways_panel_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coaching-pathways-panel/template */ "./src/blocks/coaching-pathways-panel/template.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/coaching-pathways/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ALLOWED_BLOCKS = ['hawthorn/coaching-pathways-panel', 'hawthorn/coaching-pathways-connector'];
function Edit() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
      className: 'coaching-pathways coaching-pathways--inner-blocks'
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      template: _coaching_pathways_panel_template__WEBPACK_IMPORTED_MODULE_1__.TEMPLATE,
      templateLock: "all"
    })
  });
}

/***/ },

/***/ "./src/blocks/coaching-pathways/index.js"
/*!***********************************************!*\
  !*** ./src/blocks/coaching-pathways/index.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/coaching-pathways/block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/coaching-pathways/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/coaching-pathways/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/coaching-pathways/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/coaching-pathways/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ },

/***/ "./src/blocks/coaching-pathways/save.js"
/*!**********************************************!*\
  !*** ./src/blocks/coaching-pathways/save.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: 'coaching-pathways coaching-pathways--inner-blocks'
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ },

/***/ "./src/blocks/coaching-pathways/editor.scss"
/*!**************************************************!*\
  !*** ./src/blocks/coaching-pathways/editor.scss ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/coaching-pathways/style.scss"
/*!*************************************************!*\
  !*** ./src/blocks/coaching-pathways/style.scss ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "./src/blocks/coaching-pathways/block.json"
/*!*************************************************!*\
  !*** ./src/blocks/coaching-pathways/block.json ***!
  \*************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"hawthorn/coaching-pathways","version":"1.0.0","title":"Coaching Pathways","category":"design","icon":"networking","description":"Two coaching pathways that converge on a shared next step.","keywords":["coaching","pathways","services"],"textdomain":"hawthorn","attributes":{"leftEyebrow":{"type":"string","source":"html","selector":".coaching-pathways__panel--left .coaching-pathways__eyebrow","default":"For individuals"},"leftHeading":{"type":"string","source":"html","selector":".coaching-pathways__panel--left .coaching-pathways__heading","default":"One-to-one coaching"},"leftContent":{"type":"string","source":"html","selector":".coaching-pathways__panel--left .coaching-pathways__content","default":"Create space to think, grow and move forward with focused personal support."},"leftButtonText":{"type":"string","source":"html","selector":".coaching-pathways__panel--left .coaching-pathways__button","default":"Explore individual coaching"},"leftButtonUrl":{"type":"string","default":""},"rightEyebrow":{"type":"string","source":"html","selector":".coaching-pathways__panel--right .coaching-pathways__eyebrow","default":"For organisations"},"rightHeading":{"type":"string","source":"html","selector":".coaching-pathways__panel--right .coaching-pathways__heading","default":"Team and leadership coaching"},"rightContent":{"type":"string","source":"html","selector":".coaching-pathways__panel--right .coaching-pathways__content","default":"Strengthen leadership, relationships and performance across your organisation."},"rightButtonText":{"type":"string","source":"html","selector":".coaching-pathways__panel--right .coaching-pathways__button","default":"Explore organisational coaching"},"rightButtonUrl":{"type":"string","default":""},"bottomHeading":{"type":"string","source":"html","selector":".coaching-pathways__panel--bottom .coaching-pathways__heading","default":"Not sure where to begin?"},"bottomContent":{"type":"string","source":"html","selector":".coaching-pathways__panel--bottom .coaching-pathways__content","default":"Let’s find the coaching pathway that best fits where you are and where you want to go."}},"supports":{"align":["wide","full"],"spacing":{"margin":true},"html":false},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority ||= 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			let notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn, priority] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (((priority & 1) === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"blocks/coaching-pathways/index": 0,
/******/ 			"blocks/coaching-pathways/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkhawthorn"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/coaching-pathways/style-index"], () => (__webpack_require__("./src/blocks/coaching-pathways/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map