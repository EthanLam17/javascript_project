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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/scene */ \"./src/scripts/scene.js\");\n/* harmony import */ var _scripts_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/target */ \"./src/scripts/target.js\");\n\n(0,_scripts_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n(0,_scripts_target__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // document.addEventListener(\"DOMContentLoaded\", () => {\n//     const main = document.getElementById(\"game-canvas\")\n// })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7QUFDQUEsMERBQUc7QUFDSDtBQUNBQywyREFBTSxJQUNOO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGZvdiBmcm9tIFwiLi9zY3JpcHRzL3NjZW5lXCJcbmZvdigpO1xuaW1wb3J0IHRhcmdldCBmcm9tIFwiLi9zY3JpcHRzL3RhcmdldFwiXG50YXJnZXQoKTtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKVxuLy8gfSlcblxuIl0sIm5hbWVzIjpbImZvdiIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/scene.js":
/*!******************************!*\
  !*** ./src/scripts/scene.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fov)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nfunction fov() {\n  var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n  var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);\n  var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.body.appendChild(renderer.domElement);\n  var mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n  var target = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n  var windowHalf = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth / 2, window.innerHeight / 2);\n  document.addEventListener('mousemove', onMouseMove, false);\n  document.addEventListener('click', hitTarget);\n\n  function onMouseMove(event) {\n    mouse.x = event.clientX - windowHalf.x;\n    mouse.y = event.clientY - windowHalf.y; // mouse.x = -( event.clientX / renderer.domElement.clientWidth ) * 2 + 1;\n    // mouse.y = -( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;\n    // mouse.x = ( event.clientX - windowHalf.x ) * 2 + 1;\n    // mouse.y = ( event.clientY - windowHalf.y ) * 2 + 1;\n  }\n\n  function hitTarget() {\n    scene.remove(orb);\n  } // const crosshairMaterial = new THREE.LineBasicMaterial({color : 0xFFFFFF})\n  // let crosshairPoints = [];\n  // crosshairPoints.push(new THREE.Vector2(0, 10, 0));\n  // crosshairPoints.push(new THREE.Vector2(10, 0, 0));\n  // const crosshairGeometry = new THREE.BufferGeometry().setFromPoints(points);\n  // const line = new THREE.Line(crosshairGeometry, crosshairMaterial);\n  // scene.add(line);\n  // ATTEMPT TO MAKE CROSSHAIR OBJECT ^^\n  // NEEDS TO GO IN target.js\n\n\n  var orb_geometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(.5, 32, 16);\n  var orb_material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n    color: 0x9addfb\n  });\n  var orb = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(orb_geometry, orb_material);\n  scene.add(orb); // orb.position.x += 6;\n  // orb.position.y += 3;\n  // orb.position.z += -5;\n\n  camera.position.z = 7;\n  var meshFloor = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(20, 15, 6, 6), new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n    color: 0xC19A6B,\n    wireframe: true\n  }));\n  meshFloor.rotation.x += -1.4;\n  meshFloor.position.y -= 1;\n  scene.add(meshFloor);\n\n  function animate() {\n    requestAnimationFrame(animate);\n    target.x = (1 - mouse.x) * 0.002;\n    target.y = (1 - mouse.y) * 0.002; // if (camera.rotation.x < 1 && camera.rotation.x > -1) {\n\n    camera.rotation.x += 0.03 * (target.y - camera.rotation.x); // }\n    // console.log(camera.rotation.x)\n    // if (camera.rotation.y < 1 && camera.rotation.y > -1) {\n\n    camera.rotation.y += 0.03 * (target.x - camera.rotation.y); // }\n    // console.log(camera.rotation.y)\n\n    renderer.render(scene, camera);\n  }\n\n  animate();\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2ZDLElBQUFBLHFCQUFxQixDQUFFRCxPQUFGLENBQXJCO0FBRUF6QixJQUFBQSxNQUFNLENBQUNNLENBQVAsR0FBVyxDQUFFLElBQUlSLEtBQUssQ0FBQ1EsQ0FBWixJQUFrQixLQUE3QjtBQUNBTixJQUFBQSxNQUFNLENBQUNRLENBQVAsR0FBVyxDQUFFLElBQUlWLEtBQUssQ0FBQ1UsQ0FBWixJQUFrQixLQUE3QixDQUplLENBTVg7O0FBQ0l0QixJQUFBQSxNQUFNLENBQUNzQyxRQUFQLENBQWdCbEIsQ0FBaEIsSUFBcUIsUUFBU04sTUFBTSxDQUFDUSxDQUFQLEdBQVd0QixNQUFNLENBQUNzQyxRQUFQLENBQWdCbEIsQ0FBcEMsQ0FBckIsQ0FQTyxDQVFYO0FBQ0E7QUFDQTs7QUFDSXBCLElBQUFBLE1BQU0sQ0FBQ3NDLFFBQVAsQ0FBZ0JoQixDQUFoQixJQUFxQixRQUFTUixNQUFNLENBQUNNLENBQVAsR0FBV3BCLE1BQU0sQ0FBQ3NDLFFBQVAsQ0FBZ0JoQixDQUFwQyxDQUFyQixDQVhPLENBWVg7QUFDQTs7QUFDSmpCLElBQUFBLFFBQVEsQ0FBQ29DLE1BQVQsQ0FBZ0IzQyxLQUFoQixFQUF1QkUsTUFBdkI7QUFDSDs7QUFDRHVDLEVBQUFBLE9BQU87QUFDVjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc2NlbmUuanM/NjZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvdigpIHtcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSgxMDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuXG5jb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuY29uc3QgbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuY29uc3QgdGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbmNvbnN0IHdpbmRvd0hhbGYgPSBuZXcgVEhSRUUuVmVjdG9yMiggd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpdFRhcmdldClcblxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG4gICAgbW91c2UueCA9IChldmVudC5jbGllbnRYIC0gd2luZG93SGFsZi54KVxuICAgIG1vdXNlLnkgPSAoZXZlbnQuY2xpZW50WSAtIHdpbmRvd0hhbGYueSlcbiAgICAvLyBtb3VzZS54ID0gLSggZXZlbnQuY2xpZW50WCAvIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50V2lkdGggKSAqIDIgKyAxO1xuICAgIC8vIG1vdXNlLnkgPSAtKCBldmVudC5jbGllbnRZIC8gcmVuZGVyZXIuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQgKSAqIDIgKyAxO1xuXG4gICAgLy8gbW91c2UueCA9ICggZXZlbnQuY2xpZW50WCAtIHdpbmRvd0hhbGYueCApICogMiArIDE7XG4gICAgLy8gbW91c2UueSA9ICggZXZlbnQuY2xpZW50WSAtIHdpbmRvd0hhbGYueSApICogMiArIDE7XG59XG5cbmZ1bmN0aW9uIGhpdFRhcmdldCAoKSB7XG4gICAgc2NlbmUucmVtb3ZlKG9yYik7XG59XG5cblxuICAgIC8vIGNvbnN0IGNyb3NzaGFpck1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHtjb2xvciA6IDB4RkZGRkZGfSlcbiAgICAvLyBsZXQgY3Jvc3NoYWlyUG9pbnRzID0gW107XG4gICAgLy8gY3Jvc3NoYWlyUG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIoMCwgMTAsIDApKTtcbiAgICAvLyBjcm9zc2hhaXJQb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMigxMCwgMCwgMCkpO1xuXG4gICAgLy8gY29uc3QgY3Jvc3NoYWlyR2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKS5zZXRGcm9tUG9pbnRzKHBvaW50cyk7XG4gICAgLy8gY29uc3QgbGluZSA9IG5ldyBUSFJFRS5MaW5lKGNyb3NzaGFpckdlb21ldHJ5LCBjcm9zc2hhaXJNYXRlcmlhbCk7XG4gICAgLy8gc2NlbmUuYWRkKGxpbmUpO1xuXG4gICAgLy8gQVRURU1QVCBUTyBNQUtFIENST1NTSEFJUiBPQkpFQ1QgXl5cblxuLy8gTkVFRFMgVE8gR08gSU4gdGFyZ2V0LmpzXG4gICAgY29uc3Qgb3JiX2dlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KC41LCAzMiwgMTYpO1xuICAgIGNvbnN0IG9yYl9tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgge2NvbG9yOjB4OWFkZGZifSk7XG4gICAgY29uc3Qgb3JiID0gbmV3IFRIUkVFLk1lc2gob3JiX2dlb21ldHJ5LCBvcmJfbWF0ZXJpYWwpO1xuICAgIHNjZW5lLmFkZChvcmIpO1xuXG4gICAgLy8gb3JiLnBvc2l0aW9uLnggKz0gNjtcbiAgICAvLyBvcmIucG9zaXRpb24ueSArPSAzO1xuICAgIC8vIG9yYi5wb3NpdGlvbi56ICs9IC01O1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IDc7XG5cbiAgICBjb25zdCBtZXNoRmxvb3IgPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMjAsIDE1LCA2LCA2KSxcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtjb2xvcjoweEMxOUE2Qiwgd2lyZWZyYW1lOnRydWV9KVxuICAgICk7XG5cbiAgICAgICAgbWVzaEZsb29yLnJvdGF0aW9uLnggKz0gLTEuNDtcbiAgICAgICAgbWVzaEZsb29yLnBvc2l0aW9uLnkgLT0gMTtcbiAgICAgICAgc2NlbmUuYWRkKG1lc2hGbG9vcik7XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKGFuaW1hdGUpO1xuICAgICAgICBcbiAgICAgICAgdGFyZ2V0LnggPSAoIDEgLSBtb3VzZS54ICkgKiAwLjAwMjtcbiAgICAgICAgdGFyZ2V0LnkgPSAoIDEgLSBtb3VzZS55ICkgKiAwLjAwMjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYgKGNhbWVyYS5yb3RhdGlvbi54IDwgMSAmJiBjYW1lcmEucm90YXRpb24ueCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnJvdGF0aW9uLnggKz0gMC4wMyAqICggdGFyZ2V0LnkgLSBjYW1lcmEucm90YXRpb24ueCApO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2FtZXJhLnJvdGF0aW9uLngpXG4gICAgICAgICAgICAvLyBpZiAoY2FtZXJhLnJvdGF0aW9uLnkgPCAxICYmIGNhbWVyYS5yb3RhdGlvbi55ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjYW1lcmEucm90YXRpb24ueSArPSAwLjAzICogKCB0YXJnZXQueCAtIGNhbWVyYS5yb3RhdGlvbi55ICk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW1lcmEucm90YXRpb24ueSlcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG59O1xuXG5cblxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiZm92Iiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIm1vdXNlIiwiVmVjdG9yMiIsInRhcmdldCIsIndpbmRvd0hhbGYiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZU1vdmUiLCJoaXRUYXJnZXQiLCJldmVudCIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJyZW1vdmUiLCJvcmIiLCJvcmJfZ2VvbWV0cnkiLCJTcGhlcmVHZW9tZXRyeSIsIm9yYl9tYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJNZXNoIiwiYWRkIiwicG9zaXRpb24iLCJ6IiwibWVzaEZsb29yIiwiUGxhbmVHZW9tZXRyeSIsIndpcmVmcmFtZSIsInJvdGF0aW9uIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/scene.js\n");

/***/ }),

/***/ "./src/scripts/target.js":
/*!*******************************!*\
  !*** ./src/scripts/target.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ target)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nfunction target() {\n  var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene(); // const orb_geometry = new THREE.SphereGeometry(.5, 32, 16);\n  // const orb_material = new THREE.MeshBasicMaterial( {color:0x98FB98});\n  // const orb = new THREE.Mesh(orb_geometry, orb_material);\n  // scene.add(orb);\n  // function animate() {\n  //     requestAnimationFrame (animate);\n  //     renderer.render(scene);\n  // }\n  // animate()\n  // const POSITIONS = \n  // X positions between: -6 and 6;\n  // y positions between: 0 and 3\n  // Z positions between: -5 and 1\n  // const geometry = new THREE.SphereGeometry(3, 10, 10);\n  // const material = new THREE.MeshBasicMaterial( {color:0x98FB98});\n  // const orb = new THREE.Mesh(geometry, material);\n  // scene.add( cube );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YXJnZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFFN0IsTUFBTUMsS0FBSyxHQUFHLElBQUlGLHdDQUFKLEVBQWQsQ0FGNkIsQ0FJN0I7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzP2UyOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXJnZXQoKSB7XG5cbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgLy8gY29uc3Qgb3JiX2dlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KC41LCAzMiwgMTYpO1xuICAgIC8vIGNvbnN0IG9yYl9tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgge2NvbG9yOjB4OThGQjk4fSk7XG4gICAgLy8gY29uc3Qgb3JiID0gbmV3IFRIUkVFLk1lc2gob3JiX2dlb21ldHJ5LCBvcmJfbWF0ZXJpYWwpO1xuICAgIC8vIHNjZW5lLmFkZChvcmIpO1xuXG4gICAgLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChhbmltYXRlKTtcblxuICAgIC8vICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUpO1xuXG4gICAgLy8gfVxuICAgIC8vIGFuaW1hdGUoKVxuICAgIC8vIGNvbnN0IFBPU0lUSU9OUyA9IFxuICAgIC8vIFggcG9zaXRpb25zIGJldHdlZW46IC02IGFuZCA2O1xuICAgIC8vIHkgcG9zaXRpb25zIGJldHdlZW46IDAgYW5kIDNcbiAgICAvLyBaIHBvc2l0aW9ucyBiZXR3ZWVuOiAtNSBhbmQgMVxuXG4gICAgLy8gY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMywgMTAsIDEwKTtcbiAgICAvLyBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgge2NvbG9yOjB4OThGQjk4fSk7XG4gICAgLy8gY29uc3Qgb3JiID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgIC8vIHNjZW5lLmFkZCggY3ViZSApO1xufSJdLCJuYW1lcyI6WyJUSFJFRSIsInRhcmdldCIsInNjZW5lIiwiU2NlbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/target.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;