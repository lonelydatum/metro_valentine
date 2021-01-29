(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

function transformOrigin(id, percent) {
	var el = document.getElementById(id);
	var w = el.offsetWidth;
	var h = el.offsetHeight;
	var transformOrigin = {
		x: w * percent.w,
		y: h * percent.h
	};
	var pos = {
		x: -transformOrigin.x / 2,
		y: -transformOrigin.y / 2
	};

	var result = _extends({
		transformOrigin: transformOrigin.x + "px " + transformOrigin.y + "px"
	}, pos);

	return result;
}

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var TIME = .4;
	var read = {
		t1: 2.5,
		t2: 2,
		t3: 2,
		t4: 2
	};
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", TIME, { opacity: 0, y: "+=50" }, "+=.2");

	tl.add('t1-out', "+=" + read.t1);

	tl.to(".t1", TIME, { y: "-=180", opacity: 0 }, "t1-out");
	tl.to(".heart", TIME, { y: 0 }, "t1-out");

	tl.add("bloom");
	tl.from(".rose", .8, { scale: 0 }, "bloom");
	tl.from(".t2_rose", 1, { y: "+=180", opacity: 0 }, "bloom");

	tl.to(".t2_rose", TIME, { opacity: 0 }, "+=" + read.t2);

	tl.add('choc', "+=.1");

	tl.from([".t3_choc"], TIME, { y: "+=180", opacity: 0 }, "choc");
	tl.from([".choc"], TIME, { y: "+=180", opacity: 0 }, "choc");

	tl.to(".t3_choc", TIME, { opacity: 0 }, "+=" + read.t3);

	tl.from(".t4_points", TIME, { opacity: 0 }, "+=.1");
	tl.to(".t4_points", TIME, { opacity: 0 }, "+=" + read.t4);

	tl.from(".t5a", TIME, { y: "+=180", opacity: 0 }, "+=.1");
	tl.from(".t5b", TIME, { y: "+=180", opacity: 0 }, "-=.1");

	tl.add('cta', "+=.3");
	tl.from(".cta", TIME, { opacity: 0 }, "cta");

	var tl_cta = new TimelineMax({ repeat: 7, yoyo: true });
	tl_cta.to(".cta.chev", .3, { x: "+=4", ease: Power1.easeOut });
	tl.add(tl_cta);

	// tl.gotoAndPlay("cta")
}

exports.size = size;
exports.transformOrigin = transformOrigin;
exports.start = start;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.start)();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
