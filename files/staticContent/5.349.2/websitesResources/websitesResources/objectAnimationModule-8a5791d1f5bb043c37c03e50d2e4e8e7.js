//# sourceMappingURL=objectAnimationModule.js.map
var $jscomp = {
    scope: {},
    getGlobal: function (g) {
        return "undefined" != typeof window && window === g ? g : "undefined" != typeof global ? global : g
    }
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.patches = {};
$jscomp.patch = function (g, c) {
    ($jscomp.patches[g] = $jscomp.patches[g] || []).push(c);
    var b = $jscomp.global;
    g = g.split(".");
    for (var k = 0; k < g.length - 1 && b; k++)
        b = b[g[k]];
    g = g[g.length - 1];
    b && b[g]instanceof Function && (b[g] = c(b[g]))
};
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
    $jscomp.initSymbol = function () {};
    if (!$jscomp.global.Symbol) {
        $jscomp.global.Symbol = $jscomp.Symbol;
        var g = [],
        c = function (b) {
            return function (c) {
                g = [];
                c = b(c);
                for (var l = [], f = 0, h = c.length; f < h; f++) {
                    var d;
                    a: if (d = c[f], d.length < $jscomp.SYMBOL_PREFIX.length)
                        d = !1;
                    else {
                        for (var a = 0; a < $jscomp.SYMBOL_PREFIX.length; a++)
                            if (d[a] != $jscomp.SYMBOL_PREFIX[a]) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                    d ? g.push(c[f]) : l.push(c[f])
                }
                return l
            }
        };
        $jscomp.patch("Object.keys", c);
        $jscomp.patch("Object.getOwnPropertyNames", c);
        $jscomp.patch("Object.getOwnPropertySymbols",
            function (b) {
            return function (k) {
                c.unused = Object.getOwnPropertyNames(k);
                g.push.apply(b(k));
                return g
            }
        })
    }
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function (g) {
    return $jscomp.SYMBOL_PREFIX + g + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    $jscomp.global.Symbol.iterator || ($jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    $jscomp.initSymbolIterator = function () {}
};
!function (g) {
    function c(k) {
        if (b[k])
            return b[k].exports;
        var l = b[k] = {
            i: k,
            l: !1,
            exports: {}
        };
        return g[k].call(l.exports, l, l.exports, c),
        l.l = !0,
        l.exports
    }
    var b = {};
    c.m = g;
    c.c = b;
    c.d = function (b, l, f) {
        c.o(b, l) || Object.defineProperty(b, l, {
            configurable: !1,
            enumerable: !0,
            get: f
        })
    };
    c.n = function (b) {
        var l = b && b.__esModule ? function () {
            return b.default
        }
         : function () {
            return b
        };
        return c.d(l, "a", l),
        l
    };
    c.o = function (b, c) {
        return Object.prototype.hasOwnProperty.call(b, c)
    };
    c.p = "";
    c(c.s = 6670)
}
({
    0: function (g, c, b) {
        c.a = function (b, c) {
            if (!(b instanceof
                    c))
                throw new TypeError("Cannot call a class as a function");
        }
    },
    1: function (g, c, b) {
        function k(b, c) {
            for (var h = 0; h < c.length; h++) {
                var d = c[h];
                d.enumerable = d.enumerable || !1;
                d.configurable = !0;
                "value" in d && (d.writable = !0);
                Object.defineProperty(b, d.key, d)
            }
        }
        c.a = function (b, c, h) {
            c && k(b.prototype, c);
            h && k(b, h);
            return Object.defineProperty(b, "prototype", {
                writable: !1
            }),
            b
        }
    },
    107: function (g, c, b) {
        c.a = {
            TOP: "top",
            TOP_RIGHT: "topRight",
            RIGHT: "right",
            BOTTOM_RIGHT: "bottomRight",
            BOTTOM: "bottom",
            BOTTOM_LEFT: "bottomLeft",
            LEFT: "left",
            TOP_LEFT: "topLeft",
            CENTER: "center"
        }
    },
    108: function (g, c, b) {
        g = {
            PX: "px",
            PERCENT: "%",
            VW: "vw",
            VH: "vh"
        };
        Object.freeze(g);
        c.a = g
    },
    11: function (g, c, b) {
        c.a = function (b) {
            if (void 0 === b)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b
        }
    },
    114: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(108),
        h = function () {
            function b() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                Object(k.a)(this, b);
                this.value = webwave.isNumberAndNotNaN(a.value) ?
                    a.value : 0;
                this.unit = webwave.isValidEnumValue(a.unit, f.a) ? a.unit : f.a.PX
            }
            return Object(l.a)(b, [{
                        key: "getUnit",
                        value: function () {
                            return this.unit
                        }
                    }, {
                        key: "setUnit",
                        value: function (a) {
                            webwave.isValidEnumValue(a, f.a) && (this.unit = a)
                        }
                    }, {
                        key: "getValue",
                        value: function () {
                            return this.value
                        }
                    }, {
                        key: "setValue",
                        value: function (a) {
                            webwave.isNumberAndNotNaN(a) && (this.value = a)
                        }
                    }, {
                        key: "serialize",
                        value: function () {
                            return {
                                value: this.value,
                                unit: this.unit
                            }
                        }
                    }, {
                        key: "add",
                        value: function (a) {
                            a instanceof b && this.unit === a.getUnit() &&
                            (this.value += a.getValue())
                        }
                    }, {
                        key: "subtract",
                        value: function (a) {
                            return this.unit === a.getUnit() && (this.value -= a.getValue()),
                            this
                        }
                    }, {
                        key: "multiply",
                        value: function (a) {
                            return this.value *= a,
                            this
                        }
                    }, {
                        key: "equals",
                        value: function (a) {
                            return this.getUnit() === a.getUnit() && this.getValue() === a.getValue()
                        }
                    }, {
                        key: "toString",
                        value: function () {
                            return this.value + this.unit
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b({
                                value: this.value,
                                unit: this.unit
                            })
                        }
                    }, {
                        key: "loadValuesFromObject",
                        value: function (a) {
                            this.setUnit(a.getUnit());
                            this.setValue(a.getValue())
                        }
                    }
                ], [{
                        key: "parseLengthString",
                        value: function (a) {
                            var b = String(a);
                            a = parseFloat(b);
                            b = b.match(/%|em/);
                            return isNaN(a) ? "" : b ? a + b : "".concat(Math.round(a), "px")
                        }
                    }, {
                        key: "parseLengthUnitString",
                        value: function (a) {
                            return (a = String(a).match(/%|em|vh|vw/)) ? a.toString() : f.a.PX
                        }
                    }, {
                        key: "isUnitVWorVH",
                        value: function (a) {
                            return a === f.a.VH || a === f.a.VW
                        }
                    }, {
                        key: "isUnitPX",
                        value: function (a) {
                            return a === f.a.PX
                        }
                    }, {
                        key: "isUnitVH",
                        value: function (a) {
                            return a === f.a.VH
                        }
                    }, {
                        key: "isUnitVW",
                        value: function (a) {
                            return a ===
                            f.a.VW
                        }
                    }, {
                        key: "isUnitDynamic",
                        value: function (a) {
                            return b.isUnitVH(a) || b.isUnitVW(a)
                        }
                    }, {
                        key: "createLengthWithPxUnitFromValue",
                        value: function (a) {
                            return new b({
                                value: !1 === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).withoutRounding ? Math.round(a) : a,
                                unit: f.a.PX
                            })
                        }
                    }
                ]),
            b
        }
        ()
    },
    122: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(377),
        h = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "_normalizeTable",
                        value: function (a) {
                            a.replaceWith("<div>".concat(a.text().replace(/\s+/g,
                                        " ").trim(), "</div>"))
                        }
                    }, {
                        key: "htmlElementToText",
                        value: function (a) {
                            var e;
                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!0 === e.preserveWhiteSpaces) {
                                var m = webwave.isDefAndNotNull(e.replaceValue) ? e.replaceValue : "\n";
                                e = e.property === f.a.INNER_TEXT ? a[0].innerText.replace(b.multipleNewLineCharRegex, m) : a[0].textContent.replace(b.multipleNewLineCharRegex, m)
                            } else
                                e = a.text();
                            return e
                        }
                    }, {
                        key: "html2Text",
                        value: function (a) {
                            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            m = $('<div style="white-space: pre;"/>').html(a);
                            !0 === e.stripTables && m.find("table").each(function (a, e) {
                                b._normalizeTable($(e))
                            });
                            m = b.htmlElementToText(m, e);
                            return !1 === webwave.isDefAndNotEmpty(m) && webwave.isStringAndNotEmpty(e.optionalValueOnEmpty) && (m = e.optionalValueOnEmpty),
                            m
                        }
                    }, {
                        key: "changeCssPropertyForEachChildrenElementInTextElement",
                        value: function (a, b) {
                            a = a.find('*[style*="'.concat(b.cssProperty, '"]'));
                            for (var m = 0; m < a.length; m++)
                                a[m].style[b.cssProperty] = b.newCssValue;
                            return a
                        }
                    }, {
                        key: "decodeHtml",
                        value: function (a) {
                            var b = document.createElement("textarea");
                            b.innerHTML = a;
                            a = b.value;
                            return b.remove(),
                            a
                        }
                    }, {
                        key: "getTextContentWithoutRedundantNewLines",
                        value: function (a) {
                            for (var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, m = "", d = a[0].childNodes, c = 0; c < d.length; c++)
                                m += d[c].textContent, c !== d.length - 1 && (!0 === b.withSpace ? m += " " : m += "\n");
                            return m
                        }
                    }, {
                        key: "getTextContentWithoutRedundantNewLinesFromElementHtml",
                        value: function (a) {
                            var e = document.createElement("div");
                            return $(e).html(a.html()),
                            b.getTextContentWithoutRedundantNewLines($(e))
                        }
                    }, {
                        key: "textToHTMLWithDivs",
                        value: function (a) {
                            return webwave.isStringAndNotEmpty(a) ? (a = a.split(/\n/g), (a = a.map(function (a) {
                                        return "" === a ? "<div>&nbsp;</div>" : "<div>".concat(a, "</div>")
                                    })).join("")) : a
                        }
                    }
                ]),
            b
        }
        ();
        h.htmlToElements = function (b) {
            var a = document.createElement("template");
            return a.innerHTML = b.trim(),
            a.content.childNodes
        };
        h.multipleNewLineCharRegex = /(\n)((\s)*(\n))+/g
    },
    1224: function (g, c, b) {
        b.d(c, "a", function () {
            return f
        });
        var k = b(0),
        l = b(1),
        f = function () {
            function b(d) {
                Object(k.a)(this, b);
                this.propertyName = d.propertyName;
                this.template =
                    d.template;
                this.noClear = d.noClear;
                this.startValues = d.startValues;
                this.finalValues = d.finalValues;
                this.valueDeltas = [];
                for (d = 0; d < this.finalValues.length; d++)
                    this.valueDeltas.push(this.finalValues[d] - this.startValues[d])
            }
            return Object(l.a)(b, [{
                        key: "generateStyleString",
                        value: function (b) {
                            for (var a = this.template, e = 0; e < this.valueDeltas.length; e++)
                                a = a.replace("${".concat(e, "}"), this.startValues[e] + this.valueDeltas[e] * b);
                            return a
                        }
                    }
                ]),
            b
        }
        ()
    },
    1230: function (g, c, b) {
        c.a = {
            LEFT: "left",
            CENTER: "center",
            RIGHT: "right"
        }
    },
    1236: function (g, c, b) {
        function k(b, d) {
            var a = Object.keys(b);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(b);
                d && (e = e.filter(function (a) {
                        return Object.getOwnPropertyDescriptor(b, a).enumerable
                    }));
                a.push.apply(a, e)
            }
            return a
        }
        function l(b) {
            for (var d = 1; d < arguments.length; d++) {
                var a = null != arguments[d] ? arguments[d] : {};
                d % 2 ? k(Object(a), !0).forEach(function (e) {
                    Object(f.a)(b, e, a[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(a)) : k(Object(a)).forEach(function (e) {
                    Object.defineProperty(b,
                        e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return b
        }
        var f = b(15);
        g = b(2668);
        b = b(2669);
        b = l(l({}, g.a), b.a);
        c.a = b
    },
    1279: function (g, c, b) {
        g = b(8519);
        b = b(1599);
        c.a = {
            BRAND: g.u.createVariableById(b.a.BRAND),
            SECONDARY: g.u.createVariableById(b.a.SECONDARY),
            COMPLEMENTARY: g.u.createVariableById(b.a.COMPLEMENTARY),
            FIRST_NEUTRAL: g.u.createVariableById(b.a.FIRST_NEUTRAL),
            SECOND_NEUTRAL: g.u.createVariableById(b.a.SECOND_NEUTRAL)
        }
    },
    1300: function (g, c, b) {
        g = b(178);
        c.a = {
            DEFAULT_ANIMATION_TIME: 300,
            DEFAULT_DIRECTION: g.a.TOP
        }
    },
    1301: function (g, c, b) {
        b.d(c, "a", function () {
            return d
        });
        var k = b(0),
        l = b(1);
        g = (b(1224), b(1713));
        var f = b(1636),
        h = g.a.SWING,
        d = function () {
            function a(b) {
                Object(k.a)(this, a);
                webwave.isNotDef(b) && (b = {});
                this._duration = webwave.isNumberAndNotNaN(b.duration) ? b.duration : .5;
                this._delay = webwave.isNumberAndNotNaN(b.delay) ? b.delay : 0;
                this._distance = webwave.isNumberAndNotNaN(b.distance) ? b.distance : 200;
                this._onlyOnce = !0 === b.onlyOnce;
                this._easing = webwave.isDef(b.easing) ? b.easing : h;
                this._startCondition = webwave.isValidEnumValue(b.startCondition,
                        f.a) ? b.startCondition : a.DEFAULT_START_CONDITION;
                this._startConditionDistance = webwave.isDef(b.startConditionDistance) ? b.startConditionDistance : 0
            }
            return Object(l.a)(a, [{
                        key: "getDuration",
                        value: function () {
                            return this._duration
                        }
                    }, {
                        key: "setDuration",
                        value: function (a) {
                            a = this._getValidFloatValue(a);
                            webwave.isDef(a) && (this._duration = a)
                        }
                    }, {
                        key: "getDelay",
                        value: function () {
                            return this._delay
                        }
                    }, {
                        key: "getDelayInMs",
                        value: function () {
                            return 1E3 * this._delay
                        }
                    }, {
                        key: "setDelay",
                        value: function (a) {
                            a = this._getValidFloatValue(a);
                            webwave.isDef(a) && (this._delay = a)
                        }
                    }, {
                        key: "getDistance",
                        value: function () {
                            return this._distance
                        }
                    }, {
                        key: "setDistance",
                        value: function (a) {
                            webwave.isString(a) && (a = parseInt(a));
                            webwave.isNumberAndNotNaN(a) && (this._distance = a)
                        }
                    }, {
                        key: "getOnlyOnce",
                        value: function () {
                            return this._onlyOnce
                        }
                    }, {
                        key: "setOnlyOnce",
                        value: function (a) {
                            this._onlyOnce = !0 === a
                        }
                    }, {
                        key: "getEasing",
                        value: function () {
                            return this._easing
                        }
                    }, {
                        key: "setEasing",
                        value: function (a) {
                            this._easing = a
                        }
                    }, {
                        key: "getStartCondition",
                        value: function () {
                            return this._startCondition
                        }
                    }, {
                        key: "setStartCondition",
                        value: function (a) {
                            this._startCondition = a
                        }
                    }, {
                        key: "getStartConditionDistance",
                        value: function () {
                            return this._startConditionDistance
                        }
                    }, {
                        key: "setStartConditionDistance",
                        value: function (a) {
                            webwave.isString(a) && (a = parseInt(a));
                            webwave.isNumberAndNotNaN(a) && (this._startConditionDistance = a)
                        }
                    }, {
                        key: "serialize",
                        value: function () {
                            return {
                                duration: this._duration,
                                delay: this._delay,
                                distance: this._distance,
                                onlyOnce: this._onlyOnce,
                                easing: this._easing,
                                startCondition: this._startCondition,
                                startConditionDistance: this._startConditionDistance
                            }
                        }
                    }, {
                        key: "getMapToCopyAnimationSettings",
                        value: function () {
                            var a = this.serialize();
                            return delete a.direction,
                            a
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            return []
                        }
                    }, {
                        key: "prepareAnimatableObjectForAnimation",
                        value: function (a) {
                            a.visibilities.setDuringAnimationVisibility(!0);
                            a.getDomObject()[0].style.pointerEvents = "none"
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            a.visibilities.setDuringAnimationVisibility(void 0);
                            a.getDomObject()[0].style.pointerEvents = ""
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new a(this.serialize())
                        }
                    }, {
                        key: "getType",
                        value: function () {}
                    }, {
                        key: "_getValidFloatValue",
                        value: function (a) {
                            if (webwave.isString(a) && "." !== a[a.length - 1] && (a = parseFloat(a)), webwave.isNumberAndNotNaN(a))
                                return a
                        }
                    }
                ]),
            a
        }
        ();
        d.DEFAULT_START_CONDITION = f.a.TOP_VISIBLE
    },
    1318: function (g, c, b) {
        b.d(c, "a", function () {
            return f
        });
        var k = b(0),
        l = b(1),
        f = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "stripQuotesAndBackslashes",
                        value: function (b) {
                            return webwave.isDef(b) ? b.replace(/["'\\]/g, "") : ""
                        }
                    }, {
                        key: "stripBackgroundImageUrl",
                        value: function (b) {
                            return b.substring(4, b.length - 1).toLowerCase()
                        }
                    }, {
                        key: "setCssPropertyForElement",
                        value: function (d, a, e) {
                            d.style[a] = b.tryToFixValueToBeAcceptableByDOMApi(a, e)
                        }
                    }, {
                        key: "tryToFixValueToBeAcceptableByDOMApi",
                        value: function (b, a) {
                            var e = a;
                            return -1 < ["left", "right", "top", "bottom"].indexOf(b) && webwave.isNumberAndNotNaN(a) && (e = "".concat(e, "px")),
                            e
                        }
                    }, {
                        key: "setCssPropertiesForElement",
                        value: function (d, a) {
                            for (var e in a)
                                a.hasOwnProperty(e) && b.setCssPropertyForElement(d, e, a[e])
                        }
                    }, {
                        key: "setCssPropertiesForElements",
                        value: function (d, a) {
                            for (var e = 0; e < d.length; e++)
                                b.setCssPropertiesForElement(d[e], a)
                        }
                    }
                ]),
            b
        }
        ()
    },
    1325: function (g, c, b) {
        b.d(c, "a", function () {
            return d
        });
        var k = b(0),
        l = b(1),
        f = b(1300),
        h = 0,
        d = function () {
            function a(b) {
                Object(k.a)(this, a);
                webwave.isNotDef(b) && (b = {});
                this._id = h++;
                this._duration = webwave.isDef(b.duration) && webwave.isNumber(b.duration) ? b.duration : f.a.DEFAULT_ANIMATION_TIME;
                this._progress = this._currentTime = this._startTime = 0;
                this._finished = this._running = this._started = !1
            }
            return Object(l.a)(a, [{
                        key: "setStartTime",
                        value: function (a) {
                            this._startTime = a
                        }
                    }, {
                        key: "setCurrentTime",
                        value: function (a) {
                            this._currentTime = Math.min(a, this._duration);
                            this._progress = Math.min(this._currentTime / this._duration, 1)
                        }
                    }, {
                        key: "getProgress",
                        value: function () {
                            return this._progress
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function () {
                            return this._currentTime
                        }
                    }, {
                        key: "getCurrentProgress",
                        value: function () {
                            return this._progress
                        }
                    }, {
                        key: "getStartTime",
                        value: function () {
                            return this._startTime
                        }
                    }, {
                        key: "getDuration",
                        value: function () {
                            return this._duration
                        }
                    }, {
                        key: "start",
                        value: function (a) {
                            !1 === this._started && (this.setStartTime(a), this._started = !0, this._running = !0)
                        }
                    }, {
                        key: "isStarted",
                        value: function () {
                            return this._started
                        }
                    }, {
                        key: "isRunning",
                        value: function () {
                            return this._running
                        }
                    }, {
                        key: "isFinished",
                        value: function () {
                            return this._finished
                        }
                    }, {
                        key: "stop",
                        value: function (a) {
                            !1 === this._finished && (this._running = !1, this._finished = !0, !0 === a && this.finish())
                        }
                    }, {
                        key: "finish",
                        value: function () {}
                    }, {
                        key: "tick",
                        value: function (a) {}
                    }
                ]),
            a
        }
        ()
    },
    141: function (g, c, b) {
        c.a = function (b, c) {
            (null ==
                c || c > b.length) && (c = b.length);
            for (var f = 0, h = Array(c); f < c; f++)
                h[f] = b[f];
            return h
        }
    },
    144: function (g, c, b) {
        b.d(c, "a", function () {
            return a
        });
        var k = b(0),
        l = b(1),
        f = b(65),
        h = b(42),
        d = b(32),
        a = function () {
            function a(b) {
                Object(k.a)(this, a);
                webwave.isNotDef(b) && (b = {});
                this._position = new h.a(b.position);
                this._size = new d.a(b.size)
            }
            return Object(l.a)(a, [{
                        key: "getSize",
                        value: function () {
                            return this._size
                        }
                    }, {
                        key: "setSize",
                        value: function (a) {
                            this._size = a
                        }
                    }, {
                        key: "getPosition",
                        value: function () {
                            return this._position
                        }
                    }, {
                        key: "setPosition",
                        value: function (a) {
                            this._position = a
                        }
                    }, {
                        key: "equals",
                        value: function (a) {
                            return this.getPosition().equals(a.getPosition()) && this.getSize().equals(a.getSize())
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new a({
                                size: this.getSize().clone(),
                                position: this.getPosition().clone()
                            })
                        }
                    }, {
                        key: "moveBy",
                        value: function (a) {
                            this.getPosition().add(a)
                        }
                    }, {
                        key: "getX1",
                        value: function () {
                            return this.getPosition().getX()
                        }
                    }, {
                        key: "setX1",
                        value: function (a) {
                            var b = a - this.getPosition().getX();
                            this.getSize().setWidth(this.getSize().getWidth() -
                                b);
                            this.getPosition().setX(a)
                        }
                    }, {
                        key: "getX2",
                        value: function () {
                            return this.getPosition().getX() + this.getSize().getWidth()
                        }
                    }, {
                        key: "setX2",
                        value: function (a) {
                            this.getSize().setWidth(a - this.getPosition().getX())
                        }
                    }, {
                        key: "getY1",
                        value: function () {
                            return this.getPosition().getY()
                        }
                    }, {
                        key: "setY1",
                        value: function (a) {
                            var b = a - this.getPosition().getY();
                            this.getSize().setHeight(this.getSize().getHeight() - b);
                            this.getPosition().setY(a)
                        }
                    }, {
                        key: "getY2",
                        value: function () {
                            return this.getPosition().getY() + this.getSize().getHeight()
                        }
                    }, {
                        key: "setY2",
                        value: function (a) {
                            this.getSize().setHeight(a - this.getPosition().getY())
                        }
                    }, {
                        key: "getWidth",
                        value: function () {
                            return this.getSize().getWidth()
                        }
                    }, {
                        key: "setWidth",
                        value: function (a) {
                            this.getSize().setWidth(a)
                        }
                    }, {
                        key: "getHeight",
                        value: function () {
                            return this.getSize().getHeight()
                        }
                    }, {
                        key: "setHeight",
                        value: function (a) {
                            this.getSize().setHeight(a)
                        }
                    }, {
                        key: "intersects",
                        value: function (a) {
                            return this.getX1() <= a.getX2() && this.getX2() >= a.getX1() && this.getY1() <= a.getY2() && this.getY2() >= a.getY1()
                        }
                    }, {
                        key: "getCenterX",
                        value: function () {
                            return this.getPosition().getX() + this.getSize().getWidth() / 2
                        }
                    }, {
                        key: "getCenterY",
                        value: function () {
                            return this.getPosition().getY() + this.getSize().getHeight() / 2
                        }
                    }, {
                        key: "getCenter",
                        value: function () {
                            return new h.a({
                                x: this.getCenterX(),
                                y: this.getCenterY()
                            })
                        }
                    }, {
                        key: "containsMoreThanHalf",
                        value: function (a) {
                            var b = a.getCenterX();
                            a = a.getCenterY();
                            return a >= this.getPosition().getY() && a <= this.getY2() && b >= this.getPosition().getX() && b <= this.getX2()
                        }
                    }, {
                        key: "join",
                        value: function (a) {
                            return this.setX1(Math.min(this.getX1(),
                                    a.getX1())),
                            this.setY1(Math.min(this.getY1(), a.getY1())),
                            this.setX2(Math.max(this.getX2(), a.getX2())),
                            this.setY2(Math.max(this.getY2(), a.getY2())),
                            this
                        }
                    }, {
                        key: "collidesXByHalf",
                        value: function (a) {
                            var b = this.getCenterX(),
                            e = a.getCenterX();
                            return b >= a.getX1() && b <= a.getX2() || e >= this.getX1() && e <= this.getX2()
                        }
                    }, {
                        key: "collidesYByHalf",
                        value: function (a) {
                            var b = this.getCenterY(),
                            e = a.getCenterY();
                            return b >= a.getY1() && b <= a.getY2() || e >= this.getY1() && e <= this.getY2()
                        }
                    }, {
                        key: "crossCollidesByHalf",
                        value: function (a) {
                            return this.collidesXByHalf(a) ||
                            this.collidesYByHalf(a)
                        }
                    }, {
                        key: "crossCollidesY",
                        value: function (a) {
                            return this.getY1() <= a.getY2() && this.getY2() >= a.getY1()
                        }
                    }, {
                        key: "crossCollidesX",
                        value: function (a) {
                            return this.getX1() <= a.getX2() && this.getX2() >= a.getX1()
                        }
                    }, {
                        key: "contains",
                        value: function (a) {
                            return this.getX1() <= a.getX1() && this.getX2() >= a.getX2() && this.getY1() <= a.getY1() && this.getY2() >= a.getY2()
                        }
                    }, {
                        key: "getDistance2D",
                        value: function (a) {
                            a = this.getDistance2DWithAvailableNegativeValue(a);
                            return new h.a({
                                x: Math.max(a.x, 0),
                                y: Math.max(a.y,
                                    0)
                            })
                        }
                    }, {
                        key: "getDistance2DWithAvailableNegativeValue",
                        value: function (a) {
                            var b = this.getX1() < a.getX1() ? a.getX1() - this.getX2() : this.getX1() - a.getX2();
                            a = this.getY1() < a.getY1() ? a.getY1() - this.getY2() : this.getY1() - a.getY2();
                            return new h.a({
                                x: b,
                                y: a
                            })
                        }
                    }, {
                        key: "getRectBetweenY",
                        value: function (b) {
                            var d = {
                                x: Math.min(this.getX1(), b.getX1()),
                                y: Math.min(this.getY2(), b.getY2())
                            };
                            return new a({
                                position: d,
                                size: {
                                    height: Math.max(0, Math.max(this.getY1(), b.getY1()) - d.y),
                                    width: Math.max(this.getX2(), b.getX2()) - d.x
                                }
                            })
                        }
                    }, {
                        key: "getRectBetweenX",
                        value: function (b) {
                            var d = {
                                x: Math.min(this.getX2(), b.getX2()),
                                y: Math.min(this.getY1(), b.getY1())
                            };
                            return new a({
                                position: d,
                                size: {
                                    height: Math.max(this.getY2(), b.getY2()) - d.y,
                                    width: Math.max(0, Math.max(this.getX1(), b.getX1()) - d.x)
                                }
                            })
                        }
                    }, {
                        key: "moveTo",
                        value: function (a) {
                            a = a.clone();
                            a.subtract(this.getPosition());
                            this.moveBy(a)
                        }
                    }, {
                        key: "isPointAbove",
                        value: function (a) {
                            return a.getY() < this.getY1()
                        }
                    }, {
                        key: "isPointBelow",
                        value: function (a) {
                            return a.getY() > this.getY2()
                        }
                    }, {
                        key: "isPointOnTheLeft",
                        value: function (a) {
                            return a.getX() <
                            this.getX1()
                        }
                    }, {
                        key: "isPointOnTheRight",
                        value: function (a) {
                            return a.getX() > this.getX2()
                        }
                    }, {
                        key: "isRectangleAbove",
                        value: function (a) {
                            return this.getY1() > a.getY2()
                        }
                    }, {
                        key: "isRectangleBelow",
                        value: function (a) {
                            return this.getY2() < a.getY1()
                        }
                    }, {
                        key: "containsPoint",
                        value: function (a) {
                            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            return (this.isPointBetweenX(a) || !0 === b.checkIsBetweenY) && (this.isPointBetweenY(a) || !0 === b.checkIsBetweenX)
                        }
                    }, {
                        key: "isPointBetweenX",
                        value: function (a) {
                            return this.getX1() <=
                            a.getX() && this.getX2() >= a.getX()
                        }
                    }, {
                        key: "isPointBetweenY",
                        value: function (a) {
                            return this.getY1() <= a.getY() && this.getY2() >= a.getY()
                        }
                    }, {
                        key: "countYDistanceToPoint",
                        value: function (a) {
                            return Math.min(Math.abs(this.getY1() - a.getY()), Math.abs(this.getY2() - a.getY()))
                        }
                    }, {
                        key: "addSize",
                        value: function (a) {
                            this._size.add(a)
                        }
                    }, {
                        key: "addSizeValueByOrientation",
                        value: function (a, b) {
                            switch (b) {
                            case f.a.HORIZONTAL:
                                this._size.addWidth(a);
                                break;
                            case f.a.VERTICAL:
                                this._size.addHeight(a)
                            }
                        }
                    }, {
                        key: "getTopCenterPoint",
                        value: function () {
                            return new h.a({
                                x: this.getCenterX(),
                                y: this.getY1()
                            })
                        }
                    }, {
                        key: "getTopRightPoint",
                        value: function () {
                            return new h.a({
                                x: this.getX2(),
                                y: this.getY1()
                            })
                        }
                    }
                ]),
            a
        }
        ()
    },
    15: function (g, c, b) {
        c.a = function (b, c, f) {
            c in b ? Object.defineProperty(b, c, {
                value: f,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : b[c] = f;
            return b
        }
    },
    1552: function (g, c, b) {
        var k = {
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
            getOppositeDirection: function (b) {
                switch (b) {
                case k.TOP:
                    return k.BOTTOM;
                case k.RIGHT:
                    return k.LEFT;
                case k.BOTTOM:
                    return k.TOP;
                case k.LEFT:
                    return k.RIGHT
                }
                return b
            }
        };
        c.a = k
    },
    1599: function (g, c, b) {
        c.a = {
            BRAND: "brand",
            SECONDARY: "secondary",
            COMPLEMENTARY: "complementary",
            FIRST_NEUTRAL: "neutral1",
            SECOND_NEUTRAL: "neutral2"
        }
    },
    16: function (g, c, b) {
        b.d(c, "a", function () {
            return k
        });
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        var k = {
            AdditionalEventService: Symbol.for("AdditionalEventService"),
            AILanguageService: Symbol.for("AILanguageService"),
            AINewsGenerationService: Symbol.for("AINewsGenerationService"),
            AISectionGenerationService: Symbol.for("AISectionGenerationService"),
            AISeoWriterService: Symbol.for("AISeoWriterService"),
            AIWebsiteColorsService: Symbol.for("AIWebsiteColorsService"),
            AIWebsiteCookiesService: Symbol.for("AIWebsiteCookiesService"),
            AIWebsiteFontsService: Symbol.for("AIWebsiteFontsService"),
            AIWebsiteTranslationService: Symbol.for("AIWebsiteTranslationService"),
            AIWebsiteService: Symbol.for("AIWebsiteService"),
            AIWebsiteWObjectManager: Symbol.for("AIWebsiteWObjectManager"),
            AIWebsiteWPagesService: Symbol.for("AIWebsiteWPagesService"),
            AIWrapperFactory: Symbol.for("AIWrapperFactory"),
            AlignElementsService: Symbol.for("AlignElementsService"),
            AnimationOnScrollService: Symbol.for("AnimationOnScrollService"),
            Animator: Symbol.for("Animator"),
            WebsiteDataStoreService: Symbol.for("WebsiteDataStoreService"),
            AutoSaveService: Symbol.for("AutoSaveService"),
            AutomaticImportService: Symbol.for("AutomaticImportService"),
            BackgroundMapCreatorService: Symbol.for("BackgroundMapCreatorService"),
            BackgroundParallaxService: Symbol.for("BackgroundParallaxService"),
            BackupService: Symbol.for("BackupService"),
            BasicFontService: Symbol.for("BasicFontService"),
            BrowserDetectService: Symbol.for("BrowserDetectService"),
            ButtonService: Symbol.for("ButtonService"),
            CKEditorOpenAI: Symbol.for("CKEditorOpenAI"),
            CarouselService: Symbol.for("CarouselService"),
            ClipboardService: Symbol.for("ClipboardService"),
            CommandService: Symbol.for("CommandService"),
            CommentAuthenticationService: Symbol.for("CommentAuthenticationService"),
            CommentLinkService: Symbol.for("CommentLinkService"),
            CommentService: Symbol.for("CommentService"),
            ContextMenuService: Symbol.for("ContextMenuService"),
            CookieBarService: Symbol.for("CookieBarService"),
            CookiePopupSettingsService: Symbol.for("CookiePopupSettingsService"),
            CookiePopupIconService: Symbol.for("CookiePopupIconService"),
            CookieShowSettingsService: Symbol.for("CookieShowSettingsService"),
            CoreService: Symbol.for("CoreService"),
            DatePickerService: Symbol.for("DatePickerService"),
            DispatchActionIcon: Symbol.for("DispatchActionIcon"),
            DownloadProtectionService: Symbol.for("DownloadProtectionService"),
            DropImageUpload: Symbol.for("DropImageUpload"),
            DuplicateService: Symbol.for("DuplicateService"),
            DynamicMenuService: Symbol.for("DynamicMenuService"),
            DropdownMenuItemFactory: Symbol.for("DropdownMenuItemFactory"),
            EditorControlsOverlayService: Symbol.for("EditorControlsOverlayService"),
            EditorRoleService: Symbol.for("EditorRoleService"),
            EditorSelectionManager: Symbol.for("EditorSelectionManager"),
            EditorSettingsService: Symbol.for("EditorSettingsService"),
            ElementRotationService: Symbol.for("ElementRotationService"),
            EmbeddedElementService: Symbol.for("EmbeddedElementService"),
            ElementService: Symbol.for("ElementService"),
            FeedService: Symbol.for("FeedService"),
            FeedCategoryService: Symbol.for("FeedCategoryService"),
            FeedInnerElementFactory: Symbol.for("FeedInnerElementFactory"),
            FeedHtmlBuilder: Symbol.for("FeedHtmlBuilder"),
            FileManagerService: Symbol.for("FileManagerService"),
            FontManagerService: Symbol.for("FontManagerService"),
            FontService: Symbol.for("FontService"),
            FooterService: Symbol.for("FooterService"),
            FormService: Symbol.for("FormService"),
            GalleryService: Symbol.for("GalleryService"),
            GeneralSettingsService: Symbol.for("GeneralSettingsService"),
            GoogleFontService: Symbol.for("GoogleFontService"),
            GoogleMapsService: Symbol.for("GoogleMapsService"),
            GradientService: Symbol.for("GradientService"),
            GroupService: Symbol.for("GroupService"),
            GuiEditorBaseShortcuts: Symbol.for("GuiEditorBaseShortcuts"),
            GuiModeService: Symbol.for("GuiModeService"),
            GuideService: Symbol.for("GuideService"),
            GuideStoreService: Symbol.for("GuideStoreService"),
            HeadCodeService: Symbol.for("HeadCodeService"),
            HeaderBoxService: Symbol.for("HeaderBoxService"),
            HtmlEditorService: Symbol.for("HtmlEditorService"),
            IdGeneratorService: Symbol.for("IdGeneratorService"),
            ImageBankService: Symbol.for("ImageBankService"),
            ImageEditorService: Symbol.for("ImageEditorService"),
            ImgService: Symbol.for("ImgService"),
            InfoboxService: Symbol.for("InfoboxService"),
            InitGUIService: Symbol.for("InitGUIService"),
            InnerElementControlsVisualiser: Symbol.for("InnerElementControlsVisualiser"),
            InnerElementService: Symbol.for("InnerElementService"),
            InpostEasyPackService: Symbol.for("InpostEasyPackService"),
            InteractionsService: Symbol.for("InteractionsService"),
            JsonUpgradeService: Symbol.for("JsonUpgradeService"),
            KenBurnsService: Symbol.for("KenBurnsService"),
            KeyboardService: Symbol.for("KeyboardService"),
            LanguageService: Symbol.for("LanguageService"),
            LayerFooterButtonService: Symbol.for("LayerFooterButtonService"),
            LayerManager: Symbol.for("LayerManager"),
            LayerNodeFactory: Symbol.for("LayerNodeFactory"),
            LayerNodeService: Symbol.for("LayerNodeService"),
            LayerNodeStore: Symbol.for("LayerNodeStore"),
            LayerService: Symbol.for("LayerService"),
            LayerStackFactory: Symbol.for("LayerStackFactory"),
            LayoutService: Symbol.for("LayoutService"),
            LinkElementService: Symbol.for("LinkElementService"),
            LocalStorageService: Symbol.for("LocalStorageService"),
            LocationService: Symbol.for("LocationService"),
            MarketingService: Symbol.for("MarketingService"),
            MediaPlayerService: Symbol.for("MediaPlayerService"),
            MediaService: Symbol.for("MediaService"),
            MenuItemService: Symbol.for("MenuItemService"),
            MenuManagerService: Symbol.for("MenuManagerService"),
            MenuToolService: Symbol.for("MenuToolService"),
            MouseDragSelectionService: Symbol.for("MouseDragSelectionService"),
            MultiSectionElementsLockService: Symbol.for("MultiSectionElementsLockService"),
            NavigationService: Symbol.for("NavigationService"),
            NavigationFooterService: Symbol.for("NavigationFooterService"),
            NavigationTopService: Symbol.for("NavigationTopService"),
            NavigationTopView: Symbol.for("NavigationTopView"),
            NewLanguageService: Symbol.for("NewLanguageService"),
            NewsCategoryManagerService: Symbol.for("NewsCategoryManagerService"),
            NewsManagerService: Symbol.for("NewsManagerService"),
            NewsCategoryService: Symbol.for("NewsCategoryService"),
            NewsLayoutManagerService: Symbol.for("NewsLayoutManagerService"),
            NewsLayoutService: Symbol.for("NewsLayoutService"),
            FeedPaginationService: Symbol.for("FeedPaginationService"),
            NewsService: Symbol.for("NewsService"),
            NewsfeedService: Symbol.for("NewsfeedService"),
            ObjectAnimationService: Symbol.for("ObjectAnimationService"),
            ObjectDistanceService: Symbol.for("ObjectDistanceService"),
            ObjectEdgeService: Symbol.for("ObjectEdgeService"),
            ObjectFixService: Symbol.for("ObjectFixService"),
            ObjectImportHelper: Symbol.for("ObjectImportHelper"),
            ObjectLibraryService: Symbol.for("ObjectLibraryService"),
            ObjectLibraryToolWindow: Symbol.for("ObjectLibraryToolWindow"),
            ObjectRelationService: Symbol.for("ObjectRelationService"),
            ObjectService: Symbol.for("ObjectService"),
            OnboardingService: Symbol.for("OnboardingService"),
            OnlineStoreService: Symbol.for("OnlineStoreService"),
            OrderHistoryPopupService: Symbol.for("OrderHistoryPopupService"),
            OrderHistoryService: Symbol.for("OrderHistoryService"),
            OrderPopupService: Symbol.for("OrderPopupService"),
            PageAreaBackgroundService: Symbol.for("PageAreaBackgroundService"),
            PageCanvasService: Symbol.for("PageCanvasService"),
            PageManagerService: Symbol.for("PageManagerService"),
            PageService: Symbol.for("PageService"),
            PaletteService: Symbol.for("PaletteService"),
            PhotoswipeService: Symbol.for("PhotoswipeService"),
            PopupManager: Symbol.for("PopupManager"),
            PopupPageManagerService: Symbol.for("PopupPageMangerService"),
            NewsManagementService: Symbol.for("NewsManagementService"),
            PositionService: Symbol.for("PositionService"),
            ProductCategoryService: Symbol.for("ProductCategoryService"),
            ProductCategoryStore: Symbol.for("ProductCategoryStore"),
            ProductLayoutService: Symbol.for("ProductLayoutService"),
            ProductListPopupService: Symbol.for("ProductListPopupService"),
            ProductMapGenerator: Symbol.for("ProductMapGenerator"),
            ProductPageService: Symbol.for("ProductPageService"),
            ProfileService: Symbol.for("ProfileService"),
            ProjectService: Symbol.for("ProjectService"),
            PublicationRestrictionService: Symbol.for("PublicationRestrictionService"),
            PublishService: Symbol.for("PublishService"),
            RelationManagerService: Symbol.for("RelationManagerService"),
            RwdPropertiesService: Symbol.for("RwdPropertiesService"),
            RwdService: Symbol.for("RwdService"),
            RwdSizeTransformerFactory: Symbol.for("RwdSizeTransformerFactory"),
            SalesmanagoEventService: Symbol.for("SalesmanagoEventService"),
            ScreenshotService: Symbol.for("ScreenshotService"),
            ScrollService: Symbol.for("ScrollService"),
            SectionIcons: Symbol.for("SectionIcons"),
            SectionModeService: Symbol.for("SectionModeService"),
            SeoAutomatonManagerService: Symbol.for("SeoAutomatonManagerService"),
            SeoAutomatonService: Symbol.for("SeoAutomatonService"),
            SeoCriterionFactory: Symbol.for("SeoCriterionFactory"),
            SeoElementFinder: Symbol.for("SeoElementFinder"),
            SeoSettingsPopupService: Symbol.for("SeoSettingsPopupService"),
            SimpleTextEditorService: Symbol.for("SimpleTextEditorService"),
            SnipcartService: Symbol.for("SnipcartService"),
            SnipcartStoreService: Symbol.for("SnipcartStoreService"),
            StorageService: Symbol.for("StorageService"),
            StoreAnalyticsManager: Symbol.for("StoreAnalyticsManager"),
            StoreDotPayPaymentProvider: Symbol.for("StoreDotPayPaymentProvider"),
            StoreP24PaymentProvider: Symbol.for("StoreP24PaymentProvider"),
            StorePayPalPaymentProvider: Symbol.for("StorePayPalPaymentProvider"),
            StorePaymentProvider: Symbol.for("StorePaymentProvider"),
            StorePaymentProviderFactory: Symbol.for("StorePaymentProviderFactory"),
            StoreService: Symbol.for("StoreService"),
            StoreSettingsMapGenerator: Symbol.for("StoreSettingsMapGenerator"),
            StoreSettingsService: Symbol.for("StoreSettingsService"),
            StoreStripePaymentProvider: Symbol.for("StoreStripePaymentProvider"),
            StyleableComponentSelectorFactory: Symbol.for("StyleableComponentSelectorFactory"),
            StyleService: Symbol.for("StyleService"),
            TemplateStore: Symbol.for("TemplateStore"),
            TextEditorService: Symbol.for("TextEditorService"),
            TextElementService: Symbol.for("TextElementService"),
            TextStyleService: Symbol.for("TextStyleService"),
            ToolWindowService: Symbol.for("ToolWindowService"),
            TooltipCommentService: Symbol.for("TooltipCommentService"),
            TutorialService: Symbol.for("TutorialService"),
            UndoButtonService: Symbol.for("UndoButtonService"),
            UndoService: Symbol.for("UndoService"),
            UpgradeService: Symbol.for("UpgradeService"),
            UploadFileService: Symbol.for("UploadFileService"),
            UserChatService: Symbol.for("UserChatService"),
            UserFlowService: Symbol.for("UserFlowService"),
            UserFontService: Symbol.for("UserFontService"),
            UsersPopupService: Symbol.for("UsersPopupService"),
            VisibilityKnowledgeService: Symbol.for("VisibilityKnowledgeService"),
            WElementFactory: Symbol.for("WElementFactory"),
            WElementImageCropperFactory: Symbol.for("WElementImageCropperFactory"),
            WFooterFactory: Symbol.for("WFooterFactory"),
            WGroupFactory: Symbol.for("WGroupFactory"),
            WLayoutGroupFactory: Symbol.for("WLayoutGroupFactory"),
            WObjectComponentSelectorService: Symbol.for("WObjectComponentSelectorService"),
            WObjectControlsVisualiser: Symbol.for("WObjectControlsVisualiser"),
            WObjectEditIcons: Symbol.for("WObjectEditIcons"),
            WObjectFactory: Symbol.for("WObjectFactory"),
            WObjectLockService: Symbol.for("WObjectLockService"),
            WObjectMoveLimitService: Symbol.for("WObjectMoveLimitService"),
            WObjectMoveService: Symbol.for("WObjectMoveService"),
            WObjectRwdMathService: Symbol.for("WObjectRwdMathService"),
            WObjectSnapService: Symbol.for("WObjectSnapService"),
            WPageDuplicateService: Symbol.for("WPageDuplicateService"),
            WPageFactory: Symbol.for("WPageFactory"),
            WPageStore: Symbol.for("WPageStore"),
            WSectionFactory: Symbol.for("WSectionFactory"),
            WSectionService: Symbol.for("WSectionService"),
            WebmasterObjectLibraryService: Symbol.for("WebmasterObjectLibraryService"),
            WebmasterObjectService: Symbol.for("WebmasterObjectService"),
            WebpageBackgroundService: Symbol.for("WebpageBackgroundService"),
            WebpageService: Symbol.for("WebpageService"),
            WebpageWithSectionsService: Symbol.for("WebpageWithSectionsService"),
            WebsiteAccessPopupService: Symbol.for("WebsiteAccessPopupService"),
            WebsiteColorPropertyFactory: Symbol.for("WebsiteColorPropertyFactory"),
            WebsiteColorService: Symbol.for("WebsiteColorService"),
            WebsiteColorStyleManager: Symbol.for("WebsiteColorStyleManager"),
            WebsiteItemListService: Symbol.for("WebsiteItemListService"),
            WebsitePropertiesService: Symbol.for("WebsitePropertiesService"),
            WebwaveTemplateJsonUpgradeService: Symbol.for("WebwaveTemplateJsonUpgradeService"),
            ZoomService: Symbol.for("ZoomService"),
            PagePanService: Symbol.for("PagePanService")
        }
    },
    1609: function (g, c, b) {
        c.a = {
            DISABLED: "disabled",
            BASIC_KEN_BURNS: "basicKenBurns"
        }
    },
    161: function (g, c, b) {
        c.a = function (b, c) {
            if (b) {
                if ("string" == typeof b)
                    return Object(k.a)(b, c);
                var h = Object.prototype.toString.call(b).slice(8,
                        -1);
                "Object" === h && b.constructor && (h = b.constructor.name);
                if ("Map" === h || "Set" === h)
                    return Array.from(b);
                if ("Arguments" === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))
                    return Object(k.a)(b, c)
            }
        };
        var k = b(141)
    },
    1636: function (g, c, b) {
        c.a = {
            TOP_VISIBLE: "topVisible",
            BOTTOM_VISIBLE: "bottomVisible",
            DISTANCE_FROM_TOP: "distanceFromTop"
        }
    },
    1669: function (g, c, b) {
        function k() {}
        b.d(c, "a", function () {
            return h
        });
        var l = b(1),
        f = b(0);
        !function () {
            var b = [];
            window.addEventListener("message", function (a) {
                a.source == window &&
                "zero-timeout-message" == a.data && (a.stopPropagation(), 0 < b.length && b.shift()())
            }, !0);
            window.setZeroTimeout = function (a) {
                b.push(a);
                window.postMessage("zero-timeout-message", "*")
            }
        }
        ();
        var h = function () {
            function b(a) {
                Object(f.a)(this, b);
                void 0 === a && (a = {});
                this.queue = [];
                this._errorHandler = a.onError || k;
                this._continueOnError = a.continueOnError
            }
            return Object(l.a)(b, [{
                        key: "addToQueue",
                        value: function (a, b) {
                            this.queue.push(new function q(a, b) {
                                Object(f.a)(this, q);
                                this.func = a;
                                this.args = b
                            }
                                (a, Array.prototype.slice.call(arguments,
                                        1)))
                        }
                    }, {
                        key: "dequeue",
                        value: function () {
                            var a = this;
                            0 < a.queue.length && setZeroTimeout(function () {
                                var b = a.queue.shift();
                                try {
                                    var d = b.func.apply(this, b.args);
                                    webwave.isObject(d) && webwave.isFunction(d.then) ? d.then(function () {
                                        a.dequeue()
                                    }) : a.dequeue()
                                } catch (c) {
                                    "function" == typeof a._errorHandler ? a._errorHandler.call(a, c) : webwave.error(c),
                                    a.getContinueOnError() && a.dequeue()
                                }
                            }, 0)
                        }
                    }, {
                        key: "dequeueSync",
                        value: function () {
                            for (var a; a = this.queue.shift(); )
                                try {
                                    a.func.apply(this, a.args)
                                } catch (b) {
                                    webwave.log("error occured during Worker.dequeueSync",
                                        this, b),
                                    this._errorHandler.call(this, b)
                                }
                        }
                    }, {
                        key: "getContinueOnError",
                        value: function () {
                            return !0 === this._continueOnError
                        }
                    }
                ]),
            b
        }
        ();
        webwave.provide("com.webwave.worker.Worker");
        com.webwave.worker.Worker = h
    },
    17: function (g, c, b) {
        function k() {
            return (k = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (b, c, d) {
                var a = Object(l.a)(b, c);
                if (a)
                    return a = Object.getOwnPropertyDescriptor(a, c), a.get ? a.get.call(3 > arguments.length ? b : d) : a.value
            }).apply(this, arguments)
        }
        c.a = k;
        var l = b(407)
    },
    1713: function (g, c, b) {
        c.a = {
            SWING: "swing",
            LINEAR: "linear",
            EASE_IN: "ease-in",
            EASE_OUT: "ease-out",
            EASE_IN_OUT: "ease-in-out",
            BOUNCE_IN: "bounce-in",
            BOUNCE_OUT: "bounce-out",
            BOUNCE_IN_OUT: "bounce-in-out"
        }
    },
    1719: function (g, c, b) {
        c.a = {
            DOM_POSITION: "domPosition",
            DOM_SIZE: "domSize"
        }
    },
    1740: function (g, c, b) {
        function k(b) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var c;
                c = Object(a.a)(b);
                if (e) {
                    var f = Object(a.a)(this).constructor;
                    c = Reflect.construct(c, arguments, f)
                } else
                    c = c.apply(this, arguments);
                return Object(d.a)(this, c)
            }
        }
        b.d(c, "a", function () {
            return e
        });
        var l = b(0),
        f = b(1),
        h = b(3),
        d = b(4),
        a = b(2);
        g = b(1325);
        b = b(1713);
        var e = function (a) {
            function b(a) {
                var d;
                return Object(l.a)(this, b),
                (d = e.call(this, a))._easing = webwave.isDef(a.easing) ? a.easing : b.DEFAULT_EASING_FUNCTION,
                webwave.isString(d._easing) && (d._easing = jQuery.easing[d._easing]),
                d._onComplete = a.onComplete,
                d._stepCallback = a.step,
                d
            }
            Object(h.a)(b, a);
            var e = k(b);
            return Object(f.a)(b, [{
                        key: "finish",
                        value: function () {
                            this._running = !1;
                            this._finished = !0;
                            this.setCurrentTime(this.getDuration());
                            this.render();
                            this.clean();
                            webwave.isFunction(this._onComplete) && this._onComplete()
                        }
                    }, {
                        key: "reset",
                        value: function () {
                            this._running = !1;
                            this._finished = !0;
                            this.setCurrentTime(0);
                            this.render();
                            this.clean();
                            webwave.isFunction(this._onComplete) && this._onComplete()
                        }
                    }, {
                        key: "clean",
                        value: function () {}
                    }, {
                        key: "dispose",
                        value: function () {}
                    }, {
                        key: "render",
                        value: function () {
                            throw Error("renderer not implemented!");
                        }
                    }, {
                        key: "updateValues",
                        value: function () {
                            throw Error("update values not implemented!");
                        }
                    }, {
                        key: "tick",
                        value: function () {
                            this.updateValues();
                            this.render();
                            webwave.isFunction(this._stepCallback) && this._stepCallback()
                        }
                    }
                ]),
            b
        }
        (g.a);
        e.DEFAULT_EASING_FUNCTION = b.a.SWING
    },
    1771: function (g, c, b) {
        b.d(c, "a", function () {
            return p
        });
        var k = b(0),
        l = b(2171),
        f = b(2990),
        h = b(2831),
        d = b(2991),
        a = b(2832),
        e = b(2992),
        m = b(2394),
        q = b(2833),
        r = b(2670),
        t = b(2993),
        n = b(1236),
        p = function w() {
            Object(k.a)(this, w)
        };
        p.createObjectAnimationByMap = function (b) {
            if (!webwave.isNotDef(b))
                switch (b.class) {
                case "webwave.gui.animation.FadeInAnimation":
                    return new h.a(b);
                case "webwave.gui.animation.FadeOutAnimation":
                    return new d.a(b);
                case "webwave.gui.animation.FlyInAnimation":
                    return new l.a(b);
                case "webwave.gui.animation.FlyOutAnimation":
                    return new f.a(b);
                case "webwave.gui.animation.ExpandInAnimation":
                    return new a.a(b);
                case "webwave.gui.animation.ExpandOutAnimation":
                    return new e.a(b);
                case "webwave.gui.animation.FoldInAnimation":
                    return new m.a(b);
                case "webwave.gui.animation.FoldOutAnimation":
                    return new q.a(b);
                case "webwave.gui.animation.RevealAnimation":
                    return new r.a(b);
                case "webwave.gui.animation.HideAnimation":
                    return new t.a(b);
                default:
                    return void webwave.debug('Error during animation deserialization! class:"' + b.class)
                }
        };
        p.createNewObjectAnimationByTypeAndMap = function (b, c) {
            switch (b) {
            case n.a.FLY_IN:
                return new l.a(c);
            case n.a.FLY_OUT:
                return new f.a(c);
            case n.a.FADE_IN:
                return new h.a(c);
            case n.a.FADE_OUT:
                return new d.a(c);
            case n.a.EXPAND_IN:
                return new a.a(c);
            case n.a.EXPAND_OUT:
                return new e.a(c);
            case n.a.FOLD_IN:
                return new m.a(c);
            case n.a.FOLD_OUT:
                return new q.a(c);
            case n.a.REVEAL:
                return new r.a(c);
            case n.a.HIDE:
                return new t.a(c)
            }
        }
    },
    178: function (g, c, b) {
        c.a = {
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
    },
    1791: function (g, c, b) {
        c.a = {
            SHOW: "show",
            HIDE: "hide"
        }
    },
    1796: function (g, c, b) {
        b.d(c, "b", function () {
            return k
        });
        b.d(c, "a", function () {
            return l
        });
        var k = {
            UNINITIALIZED: "uninitialized",
            INITIALIZING: "initializing",
            INITIALIZED: "initialized"
        },
        l = "webwaveAppInitialized"
    },
    1863: function (g, c, b) {
        c.a = {
            SHOW_ELEMENT: "showElement",
            HIDE_ELEMENT: "hideElement"
        }
    },
    1864: function (g, c, b) {
        c.a = {
            DONT_HIDE: "dontHide",
            HIDE_WHEN: "hideWhen"
        }
    },
    1865: function (g, c, b) {
        c.a = {
            DONT_SHOW: "dontShow",
            SHOW_WHEN: "showWhen"
        }
    },
    1866: function (g, c, b) {
        c.a = {
            START: "start",
            FINISH: "finish"
        }
    },
    1884: function (g, c, b) {
        b.d(c, "a", function () {
            return f
        });
        var k = b(0),
        l = b(1),
        f = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null,
                [{
                        key: "srcIsSvgFile",
                        value: function (b) {
                            var a;
                            return !0 === ((null === b || void 0 === b ? void 0 : null === (a = b.toLowerCase()) || void 0 === a ? void 0 : a.endsWith(".svg")) || (null === b || void 0 === b ? void 0 : b.startsWith("data:image/svg+xml")))
                        }
                    }, {
                        key: "changeMobileMenuImageSrc",
                        value: function (d, a) {
                            d.attr("src", a);
                            d.css("height", b.srcIsSvgFile(a) ? "100%" : "")
                        }
                    }
                ]),
            b
        }
        ()
    },
    1969: function (g, c, b) {
        b.d(c, "b", function () {
            return l
        });
        b.d(c, "a", function () {
            return f
        });
        var k = b(36),
        l = function (b) {
            b = Object(k.a)(b);
            for (var d = [], a = 0; a < b.length; a++)
                d =
                    d.concat(b[a].getChildren(!0));
            for (a = 0; a < d.length; a++) {
                var e = b.indexOf(d[a]);
                -1 < e && b.splice(e, 1)
            }
            return b
        },
        f = function (b) {
            return JSON.parse(JSON.stringify(b))
        }
    },
    1985: function (g, c, b) {
        function k(b) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var c;
                c = Object(a.a)(b);
                if (e) {
                    var f = Object(a.a)(this).constructor;
                    c = Reflect.construct(c, arguments, f)
                } else
                    c = c.apply(this, arguments);
                return Object(d.a)(this, c)
            }
        }
        b.d(c, "a", function () {
            return e
        });
        var l = b(0),
        f = b(1),
        h = b(3),
        d = b(4),
        a = b(2),
        e = function (a) {
            function b(a) {
                var d;
                return Object(l.a)(this, b),
                webwave.isNotDef(a.duration) && (a.duration = b.DEFAULT_AUTO_ANIMATION_TIME),
                (d = e.call(this, a))._animation = a.animation,
                d._initialAnimProgress = a.animation.getCurrentProgress(),
                d._direction = a.direction,
                d._finalAnimProgress = "backward" === a.direction ? 0 : 1,
                d._animationProgressDelta = d._finalAnimProgress -
                    d._initialAnimProgress,
                d._animation._onComplete = a.onComplete,
                d
            }
            Object(h.a)(b, a);
            var e = k(b);
            return Object(f.a)(b, [{
                        key: "tick",
                        value: function () {
                            this._animation.setCurrentTime((this._initialAnimProgress + this._animationProgressDelta * this._progress) * this._animation.getDuration());
                            this._animation.updateValues();
                            this._animation.render();
                            webwave.isFunction(this._animation._stepCallback) && this._animation._stepCallback()
                        }
                    }, {
                        key: "finish",
                        value: function () {
                            this._animation.finish()
                        }
                    }
                ], [{
                        key: "createRevertAnimation",
                        value: function (a) {
                            if (a instanceof b) {
                                var e = "backward" === a._direction ? "forward" : "backward",
                                d = "forward" === e ? a._animation.getDuration() - a._animation.getCurrentTime() : a._animation.getCurrentTime();
                                return new b({
                                    animation: a._animation,
                                    onComplete: a._animation._onComplete,
                                    duration: d,
                                    direction: e
                                })
                            }
                            return new b({
                                animation: a,
                                direction: "backward",
                                duration: a.getCurrentTime(),
                                onComplete: a._onComplete
                            })
                        }
                    }
                ]),
            b
        }
        (b(1325).a);
        e.DEFAULT_AUTO_ANIMATION_TIME = 150
    },
    1997: function (g, c, b) {
        b.d(c, "a", function () {
            return m
        });
        var k =
            b(0),
        l = b(1),
        f = b(2443),
        h = b(2346),
        d = b(144),
        a = b(1636),
        e = b(1719),
        m = function () {
            function b(a) {
                Object(k.a)(this, b);
                this.interactionsService = a.interactionsService;
                this.wObject = a.wObject;
                this.animationStartPoint = this._countAnimationStartPoint();
                this.secondAnimationStartPoint = this._countSecondAnimationStartPoint();
                this.animationStatus = f.a.INITIAL;
                this.setMode(h.a.ONE_DIRECTION);
                this.addSpecificData(a);
                this.wObject.setObjectAnimationQueueItem(this)
            }
            return Object(l.a)(b, [{
                        key: "addSpecificData",
                        value: function (a) {
                            !0 ===
                            a.hideWObject && this.wObject.visibilities.setShowAnimationVisibility(!1);
                            this.wObject.addPropertyChangeListener(e.a.DOM_SIZE, this);
                            this.wObject.addPropertyChangeListener(e.a.DOM_POSITION, this)
                        }
                    }, {
                        key: "_animateWObject",
                        value: function () {
                            var a = this;
                            this.interactionsService.setWObjectShowAnimationVisibility(this.wObject, void 0, {
                                onComplete: function () {
                                    var b;
                                    a.animationStatus = !0 === (null === (b = a.wObject.getAnimation()) || void 0 === b ? void 0 : b.getOnlyOnce()) ? f.a.DISABLED : f.a.FINISHED
                                }
                            })
                        }
                    }, {
                        key: "doAnimation",
                        value: function () {
                            this.animationStatus =
                                f.a.IN_PROGRESS;
                            this._animateWObject()
                        }
                    }, {
                        key: "undoAnimation",
                        value: function () {
                            this.wObject.finishCurrentAnimation();
                            this.wObject.visibilities.setShowAnimationVisibility(!1);
                            this.animationStatus = f.a.INITIAL
                        }
                    }, {
                        key: "isAnimationInitial",
                        value: function () {
                            return this.animationStatus === f.a.INITIAL
                        }
                    }, {
                        key: "isAnimationFinished",
                        value: function () {
                            return this.animationStatus === f.a.FINISHED
                        }
                    }, {
                        key: "getAnimationStartPoint",
                        value: function () {
                            return this.animationStartPoint
                        }
                    }, {
                        key: "updateAnimationStartPoint",
                        value: function () {
                            this.animationStartPoint =
                                this._countAnimationStartPoint();
                            this.secondAnimationStartPoint = this._countSecondAnimationStartPoint()
                        }
                    }, {
                        key: "dispose",
                        value: function () {
                            this.wObject.finishCurrentAnimation();
                            this.wObject.visibilities.setShowAnimationVisibility(void 0);
                            this.wObject.removePropertyChangeListener(e.a.DOM_SIZE, this);
                            this.wObject.removePropertyChangeListener(e.a.DOM_POSITION, this);
                            this.wObject.setObjectAnimationQueueItem(void 0)
                        }
                    }, {
                        key: "onPropertyChange",
                        value: function (a) {
                            switch (a.propertyName) {
                            case e.a.DOM_SIZE:
                            case e.a.DOM_POSITION:
                                this.updateAnimationStartPoint()
                            }
                        }
                    }, {
                        key: "_getAnimationToCalculateStartPoint",
                        value: function () {
                            var a;
                            return null === (a = this.wObject) || void 0 === a ? void 0 : a.getAnimation()
                        }
                    }, {
                        key: "_countAnimationStartPoint",
                        value: function () {
                            var b = 0,
                            e = this._getAnimationToCalculateStartPoint();
                            if (webwave.isDef(e))
                                switch (e.getStartCondition()) {
                                case a.a.TOP_VISIBLE:
                                    b = this.wObject.getRenderedRectangle().getY1();
                                    break;
                                case a.a.BOTTOM_VISIBLE:
                                    b = this.wObject.getRenderedRectangle().getY2() - 1;
                                    break;
                                case a.a.DISTANCE_FROM_TOP:
                                    b = this.wObject.getRenderedRectangle().getY1() +
                                        e.getStartConditionDistance()
                                }
                            return b
                        }
                    }, {
                        key: "_countSecondAnimationStartPoint",
                        value: function () {
                            var b = 0,
                            e = this._getAnimationToCalculateStartPoint();
                            if (webwave.isDef(e))
                                switch (e.getStartCondition()) {
                                case a.a.TOP_VISIBLE:
                                    b = this.wObject.getRenderedRectangle().getY2() - 1;
                                    break;
                                case a.a.BOTTOM_VISIBLE:
                                    b = this.wObject.getRenderedRectangle().getY1()
                                }
                            return b
                        }
                    }, {
                        key: "canDoAnimation",
                        value: function (a) {
                            var b = !1;
                            return this.mode === h.a.ONE_DIRECTION ? b = this.animationStartPoint < a.getY2() : this.mode === h.a.BOTH_DIRECTIONS &&
                                (b = a.crossCollidesY(this.getBothDirectionWayAnimationStartRectangle())),
                            b
                        }
                    }, {
                        key: "getBothDirectionWayAnimationStartRectangle",
                        value: function () {
                            var a = this.secondAnimationStartPoint > this.animationStartPoint ? [this.animationStartPoint, this.secondAnimationStartPoint] : [this.secondAnimationStartPoint, this.animationStartPoint];
                            return new d.a({
                                position: {
                                    y: a[0]
                                },
                                size: {
                                    height: a[1] - a[0]
                                }
                            })
                        }
                    }, {
                        key: "canUndoAnimation",
                        value: function (a) {
                            var b = !1;
                            return this.mode === h.a.ONE_DIRECTION ? b = this.isAnimatedWObjectBelowViewPort(a) :
                                this.mode === h.a.BOTH_DIRECTIONS && (b = this.isAnimatedWObjectBelowViewPort(a) || this.isAnimatedWObjectAboveViewPort(a)),
                            b
                        }
                    }, {
                        key: "isAnimatedWObjectBelowViewPort",
                        value: function (a) {
                            return a.isRectangleBelow(this.wObject.getRenderedRectangle())
                        }
                    }, {
                        key: "isAnimatedWObjectAboveViewPort",
                        value: function (a) {
                            return a.isRectangleAbove(this.wObject.getRenderedRectangle())
                        }
                    }, {
                        key: "setMode",
                        value: function (a) {
                            this.mode = a
                        }
                    }
                ]),
            b
        }
        ()
    },
    2: function (g, c, b) {
        function k(b) {
            return (k = Object.setPrototypeOf ? Object.getPrototypeOf :
                function (b) {
                return b.__proto__ || Object.getPrototypeOf(b)
            })(b)
        }
        c.a = k
    },
    2171: function (g, c, b) {
        function k(b) {
            var d = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var c;
                c = Object(e.a)(b);
                if (d) {
                    var m = Object(e.a)(this).constructor;
                    c = Reflect.construct(c, arguments, m)
                } else
                    c = c.apply(this, arguments);
                return Object(a.a)(this, c)
            }
        }
        b.d(c, "a", function () {
            return p
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m = b(1236),
        q = b(1224),
        r = b(1318),
        t = b(1300),
        n = b(107),
        p = function (a) {
            function b(a) {
                var e;
                return Object(l.a)(this, b),
                e = c.call(this, a),
                webwave.isNotDef(a) && (a = {}),
                e._direction = webwave.isDef(a.direction) ? a.direction : t.a.DEFAULT_DIRECTION,
                e
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "serialize",
                        value: function () {
                            var a = Object(h.a)(Object(e.a)(b.prototype), "serialize", this).call(this);
                            return a.class =
                                "webwave.gui.animation.FlyInAnimation",
                            a.direction = this._direction,
                            a
                        }
                    }, {
                        key: "setDirection",
                        value: function (a) {
                            webwave.isValidEnumValue(a, n.a) && (this._direction = a)
                        }
                    }, {
                        key: "getDirection",
                        value: function () {
                            return this._direction
                        }
                    }, {
                        key: "prepareAnimatableObjectForAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "prepareAnimatableObjectForAnimation", this).call(this, a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                opacity: 0
                            })
                        }
                    }, {
                        key: "getInitialCss",
                        value: function () {
                            var a = 0,
                            b = 0;
                            switch (this._direction) {
                            case n.a.TOP:
                                b = -this._distance;
                                break;
                            case n.a.TOP_RIGHT:
                                a = this._distance;
                                b = -this._distance;
                                break;
                            case n.a.RIGHT:
                                a = this._distance;
                                break;
                            case n.a.BOTTOM_RIGHT:
                                b = a = this._distance;
                                break;
                            case n.a.BOTTOM:
                                b = this._distance;
                                break;
                            case n.a.BOTTOM_LEFT:
                                a = -this._distance;
                                b = this._distance;
                                break;
                            case n.a.LEFT:
                                a = -this._distance;
                                break;
                            case n.a.TOP_LEFT:
                                a = -this._distance,
                                b = -this._distance
                            }
                            return {
                                translateX: a,
                                translateY: b,
                                opacity: 0
                            }
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            var b =
                                this.getInitialCss(),
                            e = "translateX(${0}px) translateY(${1}px)";
                            return a.isRotated() && (e += " rotateZ(".concat(a.getRotation(), "deg)")),
                            [new q.a({
                                    propertyName: "transform",
                                    startValues: [b.translateX, b.translateY],
                                    finalValues: [0, 0],
                                    template: e
                                }), new q.a({
                                    propertyName: "opacity",
                                    startValues: [b.opacity],
                                    finalValues: [a.getComputedOpacity() / 100],
                                    template: "${0}"
                                })]
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "cleanAnimatableObjectAfterAnimation", this).call(this,
                                a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                transform: a.getRotationTransformCss(),
                                opacity: a.getComputedOpacity() / 100
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.FLY_IN
                        }
                    }
                ]),
            b
        }
        (b(1301).a)
    },
    2172: function (g, c, b) {
        c.a = function (b, c) {
            return 0 === b ? "0.001" + c : b.toString() + c.toString()
        }
    },
    2240: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(1552),
        h = function () {
            function b(a) {
                Object(k.a)(this, b);
                webwave.isNotDef(a) &&
                (a = {});
                this._type = webwave.isDef(a.type) ? a.type : b.DEFAULT_TYPE;
                this._duration = webwave.isDef(a.duration) ? a.duration : b.DEFAULT_DURATION;
                this._easing = webwave.isDef(a.easing) ? a.easing : b.DEFAULT_EASING;
                this._direction = webwave.isDef(a.direction) ? a.direction : b.DEFAULT_DIRECTION;
                this._enabled = webwave.isDef(a.enabled) ? a.enabled : b.DEFAULT_ENABLED
            }
            return Object(l.a)(b, [{
                        key: "setType",
                        value: function (a) {
                            this._type = a
                        }
                    }, {
                        key: "setEnabled",
                        value: function (a) {
                            this._enabled = a
                        }
                    }, {
                        key: "isEnabled",
                        value: function () {
                            return this._enabled
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return this._enabled ? this._type : b.DEFAULT_TYPE
                        }
                    }, {
                        key: "setDuration",
                        value: function (a) {
                            webwave.isNumberAndNotNaN(a) && 0 <= a && (this._duration = a)
                        }
                    }, {
                        key: "getDuration",
                        value: function () {
                            return this._enabled ? this._duration : 0
                        }
                    }, {
                        key: "setEasing",
                        value: function (a) {
                            this._easing = a
                        }
                    }, {
                        key: "getEasing",
                        value: function () {
                            return this._easing
                        }
                    }, {
                        key: "setDirection",
                        value: function (a) {
                            this._direction = a
                        }
                    }, {
                        key: "getDirection",
                        value: function (a) {
                            return !0 === a ? f.a.getOppositeDirection(this._direction) :
                            this._direction
                        }
                    }, {
                        key: "equals",
                        value: function (a) {
                            return this._direction === a._direction && this._duration === a._duration && this._easing === a._easing && this._type === a._type && this._enabled === a._enabled
                        }
                    }, {
                        key: "serialize",
                        value: function () {
                            return {
                                direction: this._direction,
                                duration: this._duration,
                                easing: this._easing,
                                type: this._type,
                                enabled: this._enabled
                            }
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }
                ]),
            b
        }
        ();
        h.DEFAULT_TYPE = "advancedFadeAnimation";
        h.DEFAULT_DURATION = 400;
        h.DEFAULT_EASING = "swing";
        h.DEFAULT_DIRECTION = "left";
        h.DEFAULT_ENABLED = !0
    },
    2280: function (g, c, b) {
        c.a = "afterInitializationServiceInitEvent"
    },
    2315: function (g, c, b) {
        function k(a, b) {
            var e = Object.keys(a);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(a);
                b && (c = c.filter(function (b) {
                        return Object.getOwnPropertyDescriptor(a, b).enumerable
                    }));
                e.push.apply(e, c)
            }
            return e
        }
        function l(a) {
            for (var b = 1; b < arguments.length; b++) {
                var e = null != arguments[b] ? arguments[b] : {};
                b % 2 ? k(Object(e), !0).forEach(function (b) {
                    Object(f.a)(a, b,
                        e[b])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e)) : k(Object(e)).forEach(function (b) {
                    Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(e, b))
                })
            }
            return a
        }
        b.d(c, "a", function () {
            return r
        });
        var f = b(15),
        h = b(0),
        d = b(1),
        a = b(2994),
        e = b(2995),
        m = b(2395),
        q = b(1791),
        r = function () {
            function b(a) {
                Object(h.a)(this, b);
                this._animatableObject = a;
                this._animationIsRunning = !1;
                this._onComplete = this._animationTimeoutId = void 0
            }
            return Object(d.a)(b, [{
                        key: "_easingToJqueryEasing",
                        value: function (a) {
                            return e.a[a]
                        }
                    }, {
                        key: "_startAnimation",
                        value: function (a) {
                            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            e = a.getDuration(),
                            c = a.getEasing();
                            this._animatableObject.finishCurrentAnimation();
                            this._onComplete = b.onComplete;
                            this._afterEachAnimationStop = b.afterEachAnimationStop;
                            webwave.isFunction(b.beforeEachAnimationStart) && b.beforeEachAnimationStart(this._animatableObject);
                            this._currentAnimation = a;
                            var d = a.getAnimationPropsData(this._animatableObject),
                            f = this._animatableObject.getElementsForAnimation();
                            this._prepareObjectForAnimation();
                            var x = this._currentAnimation.clone();
                            this._animationIsRunning = !0;
                            var h = this,
                            r = function () {
                                b.animationType === q.a.SHOW ? h._animatableObject.beforeShowRealAnimationStart() : b.animationType === q.a.HIDE && h._animatableObject.beforeHideRealAnimationStart();
                                h._toggleElementsAnimationInProgressClass(f, !0);
                                var a = new m.a({
                                    elements: f,
                                    props: d,
                                    easing: h._easingToJqueryEasing(c),
                                    duration: 1E3 * e,
                                    onComplete: function () {
                                        h._toggleElementsAnimationInProgressClass(f, !1);
                                        h._animationIsRunning =
                                            !1;
                                        h._cleanObjectAfterAnimation(x, b.cleanObjectDelay);
                                        h._currentAnimation = void 0;
                                        webwave.isFunction(b.onComplete) && b.onComplete();
                                        webwave.isFunction(b.afterEachAnimationStop) && b.afterEachAnimationStop(h._animatableObject)
                                    }
                                });
                                com.webwave.animator.animator.registerAnimation(a);
                                h._currentStyleAnimation = a
                            };
                            0 < b.delay ? this._animationTimeoutId = setTimeout(r, b.delay) : r()
                        }
                    }, {
                        key: "_toggleElementsAnimationInProgressClass",
                        value: function (e, c) {
                            a.a.toggleClassToListOfElements(e, b.ANIMATION_IN_PROGRESS, c)
                        }
                    }, {
                        key: "_prepareObjectForAnimation",
                        value: function () {
                            var a = this._currentAnimation;
                            webwave.isDef(a) && a.prepareAnimatableObjectForAnimation(this._animatableObject)
                        }
                    }, {
                        key: "_cleanObjectAfterAnimation",
                        value: function () {
                            var a = this,
                            b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this._currentAnimation,
                            e = 1 < arguments.length ? arguments[1] : void 0;
                            webwave.isDef(b) && (webwave.isDef(e) && 0 < e ? setTimeout(function () {
                                    b.cleanAnimatableObjectAfterAnimation(a._animatableObject)
                                }, e) : b.cleanAnimatableObjectAfterAnimation(this._animatableObject))
                        }
                    }, {
                        key: "playCurrentAnimation",
                        value: function () {
                            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            !0 === this._animatableObject.isAnimationEnabled() && webwave.isDef(this._animatableObject.getAnimation()) && (a = l(l({}, a), {
                                    animationType: q.a.SHOW
                                }), this.playAnimation(this._animatableObject.getAnimation(), a))
                        }
                    }, {
                        key: "playCurrentHideAnimation",
                        value: function () {
                            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            !0 === this._animatableObject.isHideAnimationEnabled() && webwave.isDef(this._animatableObject.getHideAnimation()) &&
                            (a = l(l({}, a), {
                                    animationType: q.a.HIDE
                                }), this.playAnimation(this._animatableObject.getHideAnimation(), a))
                        }
                    }, {
                        key: "playAnimation",
                        value: function (a) {
                            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            webwave.isDefAndNotNull(a) && (!0 === b.skipDelay ? b.delay = 0 : !1 === webwave.isNumberAndNotNaN(b.delay) && (b.delay = a.getDelayInMs()), this._startAnimation(a, b))
                        }
                    }, {
                        key: "finishCurrentAnimation",
                        value: function () {
                            if (!0 === this._animationIsRunning) {
                                clearTimeout(this._animationTimeoutId);
                                var a = this._currentAnimation;
                                webwave.isDefAndNotNull(this._currentStyleAnimation) && (this._currentStyleAnimation.stop(!0), this._currentStyleAnimation = void 0);
                                this._toggleElementsAnimationInProgressClass(this._animatableObject.getElementsForAnimation(), !1);
                                webwave.isDef(a) && this._cleanObjectAfterAnimation(a);
                                this._animationIsRunning = !1;
                                this._currentAnimation = void 0;
                                webwave.isFunction(this._onComplete) && this._onComplete();
                                webwave.isFunction(this._afterEachAnimationStop) && this._afterEachAnimationStop(this._animatableObject)
                            }
                        }
                    }
                ]),
            b
        }
        ();
        r.ANIMATION_IN_PROGRESS = "animation-in-progress"
    },
    2317: function (g, c, b) {
        c.a = {
            ADVANCED_FADE_ANIMATION: "advancedFadeAnimation",
            FADE_IN_OVER: "fadeInOver",
            SLIDE: "slide",
            CUBE: "cube",
            OPEN: "open"
        }
    },
    2346: function (g, c, b) {
        c.a = {
            ONE_DIRECTION: 1,
            BOTH_DIRECTIONS: 2
        }
    },
    2394: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var x = Object(e.a)(this).constructor;
                    d = Reflect.construct(d, arguments, x)
                } else
                    d = d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return u
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m = b(1236),
        q = b(1224),
        r = b(1318),
        t = b(1300);
        g = b(1301);
        var n = b(178),
        p = b(2172),
        u = function (a) {
            function b(a) {
                var e;
                return Object(l.a)(this, b),
                webwave.isNotDef(a) && (a = {}),
                (e = c.call(this, a))._direction = webwave.isValidEnumValue(a.direction,
                        n.a) ? a.direction : t.a.DEFAULT_DIRECTION,
                e
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "serialize",
                        value: function () {
                            var a = Object(h.a)(Object(e.a)(b.prototype), "serialize", this).call(this);
                            return a.class = "webwave.gui.animation.FoldInAnimation",
                            a.direction = this._direction,
                            a
                        }
                    }, {
                        key: "getDirection",
                        value: function () {
                            return this._direction
                        }
                    }, {
                        key: "setDirection",
                        value: function (a) {
                            webwave.isValidEnumValue(a, n.a) && (this._direction = a)
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.FOLD_IN
                        }
                    }, {
                        key: "getInitialCssProperties",
                        value: function (a) {
                            var b = 0,
                            e = 0,
                            c = 0,
                            d = 0,
                            m = a.getContentSize(),
                            f = a.getRotation() * (Math.PI / 180),
                            q = Math.sin(f),
                            f = Math.cos(f),
                            h = m.width,
                            m = m.height;
                            switch (this._direction) {
                            case n.a.TOP:
                                b = -90;
                                d = Math.min(f * m, q * h, f * m + q * h, 0);
                                break;
                            case n.a.RIGHT:
                                e = -90;
                                c = Math.max(-q * m, f * h, -q * m + f * h, 0);
                                break;
                            case n.a.BOTTOM:
                                b = 90;
                                d = Math.max(f * m, q * h, f * m + q * h, 0);
                                break;
                            case n.a.LEFT:
                                e = 90,
                                c = Math.min(-q * m, f * h, -q * m + f * h, 0)
                            }
                            q = "translate(".concat(Object(p.a)(-c, "px"), ", ").concat(Object(p.a)(-d, "px"), ")");
                            c = "translate(".concat(Object(p.a)(c,
                                        "px"), ", ").concat(Object(p.a)(d, "px"), ")");
                            if (b = 0 !== b ? {
                                    transform: [c + " rotateX(0) " + q, c + " rotateX(".concat(Object(p.a)(b, "deg"), ") ") + q]
                                }
                                 : {
                                transform: [c + " rotateY(0) " + q, c + " rotateY(".concat(Object(p.a)(e, "deg"), ") ") + q]
                            }, a.isRotated())
                                a = a.getRotation(), b.transform[0] += " rotateZ(".concat(Object(p.a)(a, "deg"), ")"), b.transform[1] += " rotateZ(".concat(Object(p.a)(a, "deg"), ")");
                            return b
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            var b = 0,
                            e = 0,
                            c = 0,
                            d = 0,
                            m = a.getContentSize(),
                            f = a.getRotation() * (Math.PI /
                                    180),
                            h = Math.sin(f),
                            f = Math.cos(f),
                            r = m.width,
                            m = m.height;
                            switch (this._direction) {
                            case n.a.TOP:
                                b = -90;
                                d = Math.min(f * m, h * r, f * m + h * r, 0);
                                break;
                            case n.a.RIGHT:
                                e = -90;
                                c = Math.max(-h * m, f * r, -h * m + f * r, 0);
                                break;
                            case n.a.BOTTOM:
                                b = 90;
                                d = Math.max(f * m, h * r, f * m + h * r, 0);
                                break;
                            case n.a.LEFT:
                                e = 90,
                                c = Math.min(-h * m, f * r, -h * m + f * r, 0)
                            }
                            h = "translate(".concat(Object(p.a)(-c, "px"), ", ").concat(Object(p.a)(-d, "px"), ")");
                            c = "translate(".concat(Object(p.a)(c, "px"), ", ").concat(Object(p.a)(d, "px"), ")");
                            c = 0 !== b ? "".concat(c, " rotateX(${0}deg) ").concat(h) :
                                "".concat(c, " rotateY(${0}deg) ").concat(h);
                            b = 0 !== b ? [b] : [e];
                            a.isRotated() && (a = a.getRotation(), c += " rotateZ(".concat(Object(p.a)(a, "deg"), ")"));
                            return [new q.a({
                                    propertyName: "transform",
                                    startValues: b,
                                    finalValues: [0],
                                    template: c
                                })]
                        }
                    }, {
                        key: "_getInitialTransformMap",
                        value: function () {
                            var a = {
                                perspectiveOriginX: 0,
                                perspectiveOriginY: 0,
                                perspective: "1000px",
                                rotateX: 0,
                                rotateY: 0
                            };
                            switch (this._direction) {
                            case n.a.TOP:
                                a.perspectiveOriginX = "50%";
                                a.perspectiveOriginY = "0";
                                a.rotateX = -90;
                                break;
                            case n.a.RIGHT:
                                a.perspectiveOriginX =
                                    "100%";
                                a.perspectiveOriginY = "50%";
                                a.rotateY = -90;
                                break;
                            case n.a.BOTTOM:
                                a.perspectiveOriginX = "50%";
                                a.perspectiveOriginY = "100%";
                                a.rotateX = 90;
                                break;
                            case n.a.LEFT:
                                a.perspectiveOriginX = "0",
                                a.perspectiveOriginY = "50%",
                                a.rotateY = 90
                            }
                            return a
                        }
                    }, {
                        key: "prepareAnimatableObjectForAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "prepareAnimatableObjectForAnimation", this).call(this, a);
                            var c = this._getInitialTransformMap();
                            a.getDomObject().css({
                                perspectiveOrigin: c.perspectiveOriginX + " " + c.perspectiveOriginY,
                                perspective: c.perspective
                            });
                            c = this.getInitialCssProperties(a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                transformOrigin: "0px 0px 0px",
                                transform: c.transform[1]
                            })
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "cleanAnimatableObjectAfterAnimation", this).call(this, a);
                            a.getDomObject().css({
                                perspectiveOrigin: "",
                                perspective: ""
                            });
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                transformOrigin: "",
                                transform: a.getRotationTransformCss()
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }
                ]),
            b
        }
        (g.a)
    },
    2395: function (g, c, b) {
        function k(b) {
            var e = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var c;
                c = Object(a.a)(b);
                if (e) {
                    var f = Object(a.a)(this).constructor;
                    c = Reflect.construct(c, arguments, f)
                } else
                    c = c.apply(this, arguments);
                return Object(d.a)(this, c)
            }
        }
        b.d(c, "a", function () {
            return e
        });
        var l = b(0),
        f = b(1),
        h = b(3),
        d = b(4),
        a = b(2),
        e = function (a) {
            function b(a) {
                var c;
                return Object(l.a)(this, b),
                (c = e.call(this, a))._elements = a.elements,
                c.props = a.props,
                c.multiplier = 0,
                c
            }
            Object(h.a)(b, a);
            var e = k(b);
            return Object(f.a)(b, [{
                        key: "updateValues",
                        value: function () {
                            this.multiplier = this._easing(this._progress)
                        }
                    }, {
                        key: "clean",
                        value: function () {
                            for (var a = 0; a < this.props.length; a++)
                                if (!0 !== this.props[a].noClear)
                                    for (var b = 0; b < this._elements.length; b++)
                                        webwave.isDefAndNotNull(this._elements[b]) &&
                                        (this._elements[b].style[this.props[a].propertyName] = "")
                        }
                    }, {
                        key: "render",
                        value: function () {
                            for (var a = 0; a < this.props.length; a++)
                                for (var b = this.props[a], e = 0; e < this._elements.length; e++)
                                    webwave.isDefAndNotNull(this._elements[e]) && (this._elements[e].style[b.propertyName] = b.generateStyleString(this.multiplier))
                        }
                    }
                ]),
            b
        }
        (b(1740).a)
    },
    2396: function (g, c, b) {
        function k(a, b) {
            $jscomp.initSymbol();
            $jscomp.initSymbol();
            $jscomp.initSymbolIterator();
            var e = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
            if (!e) {
                if (Array.isArray(a) || (e = function (a, b) {
                        if (a) {
                            if ("string" == typeof a)
                                return l(a, b);
                                var e = Object.prototype.toString.call(a).slice(8, -1);
                                "Object" === e && a.constructor && (e = a.constructor.name);
                                if ("Map" === e || "Set" === e)
                                    return Array.from(a);
                                if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                                    return l(a, b)
                            }
                        }
                            (a)) || b && a && "number" == typeof a.length) {
                        e && (a = e);
                        var c = 0;
                        b = function () {};
                        return {
                            s: b,
                            n: function () {
                                return c >= a.length ? {
                                    done: !0
                                }
                                 : {
                                    done: !1,
                                    value: a[c++]
                                }
                            },
                            e: function (a) {
                                throw a;
                            },
                            f: b
                        }
                    }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var d,
            m = !0,
            f = !1;
            return {
                s: function () {
                    e = e.call(a)
                },
                n: function () {
                    var a = e.next();
                    return m = a.done,
                    a
                },
                e: function (a) {
                    f = !0;
                    d = a
                },
                f: function () {
                    try {
                        m || null == e.return || e.return()
                    } finally {
                        if (f)
                            throw d;
                    }
                }
            }
        }
        function l(a, b) {
            (null == b || b > a.length) && (b = a.length);
            for (var e = 0, c = Array(b); e < b; e++)
                c[e] = a[e];
            return c
        }
        b.d(c, "a", function () {
            return m
        });
        var f = b(0),
        h = b(1),
        d = b(1985),
        a = b(32),
        e = b(2240),
        m = function () {
            function b(a, c) {
                Object(f.a)(this, b);
                webwave.isNotDef(c) && (c = {});
                this._wObject = a;
                this._animationData = new e.a(c.animationData);
                this._currentAnimation = null;
                this._disabled = !1
            }
            return Object(h.a)(b, [{
                        key: "_addAnimationSceneToHtml",
                        value: function (a) {}
                    }, {
                        key: "_renderAnimationScene",
                        value: function () {}
                    }, {
                        key: "renderPanel",
                        value: function (a) {}
                    }, {
                        key: "renderNextPanel",
                        value: function (a) {}
                    }, {
                        key: "playAnimation",
                        value: function (b) {
                            var e = this.getWObject(),
                            c = this._getSceneSize(),
                            d = this._renderAnimationScene(e),
                            m = this.renderPanel(c),
                            f = this.renderNextPanel(c);
                            if (!0 === b)
                                var h = m, m = f, f = h;
                            d.append(m, f);
                            this.beforeAnimation();
                            this._addAnimationSceneToHtml(d);
                            var q = this,
                            h = this.getAnimationData(),
                            x = e.getAnimatingContent(),
                            l = 0 < x.length ? d[0].getElementsByClassName(x[0].classList) : [];
                            b = com.webwave.webgal.animation.ChangeAnimationService.getInstance().createAnimationByName(h.getType(), {
                                panel: m,
                                nextPanel: f,
                                panelParent: d,
                                panelSize: new a.a({
                                    width: c.getWidth(),
                                    height: c.getHeight()
                                }),
                                duration: h.getDuration(),
                                easing: h.getEasing(),
                                direction: h.getDirection(!0 !== b),
                                step: function () {
                                    var a = e.getAnimatingContent();
                                    if (a.hasClass("animation-in-progress")) {
                                        var b,
                                        a = a[0].style,
                                        c = k(l);
                                        try {
                                            for (c.s(); !(b = c.n()).done; ) {
                                                var d = b.value;
                                                d.style.transform = a.transform;
                                                d.style.transformOrigin = a.transformOrigin;
                                                d.style.opacity = a.opacity;
                                                d.style.clip = a.clip
                                            }
                                        } catch (m) {
                                            c.e(m)
                                        } finally {
                                            c.f()
                                        }
                                    }
                                },
                                onComplete: function () {
                                    q.removeAnimation();
                                    q.afterAnimation()
                                }
                            });
                            com.webwave.animator.animator.registerAnimation(b);
                            this._currentAnimation = b;
                            this._$scene = d
                        }
                    }, {
                        key: "reverseCurrentAnimation",
                        value: function () {
                            if (null !== this._currentAnimation) {
                                var a = d.a.createRevertAnimation(this._currentAnimation);
                                com.webwave.animator.animator.unregisterAnimation(this._currentAnimation);
                                com.webwave.animator.animator.registerAnimation(a);
                                this._currentAnimation = a
                            }
                        }
                    }, {
                        key: "startInAnimation",
                        value: function () {
                            this.playAnimation(!1)
                        }
                    }, {
                        key: "startOutAnimation",
                        value: function () {
                            this.playAnimation(!0)
                        }
                    }, {
                        key: "stopAnimation",
                        value: function () {
                            null !== this._currentAnimation && (this._currentAnimation.finish(), this._currentAnimation = null)
                        }
                    }, {
                        key: "setDisabled",
                        value: function (a) {
                            this.hasAnimation() && this.stopAnimation();
                            this._disabled = !0 === a
                        }
                    }, {
                        key: "isDisabled",
                        value: function () {
                            return this._disabled
                        }
                    }, {
                        key: "hasAnimation",
                        value: function () {
                            return null !== this._currentAnimation
                        }
                    }, {
                        key: "getAnimation",
                        value: function () {
                            return this._currentAnimation
                        }
                    }, {
                        key: "removeAnimation",
                        value: function () {
                            webwave.isDef(this._$scene) && (this._$scene.remove(), this._$scene = void 0);
                            this.setAnimation(null)
                        }
                    }, {
                        key: "setAnimation",
                        value: function (a) {
                            this._currentAnimation = a
                        }
                    }, {
                        key: "serialize",
                        value: function () {
                            return {
                                animationData: this._animationData.serialize()
                            }
                        }
                    }, {
                        key: "setAnimationData",
                        value: function (a) {
                            this._animationData =
                                a
                        }
                    }, {
                        key: "getAnimationData",
                        value: function () {
                            return this._animationData
                        }
                    }, {
                        key: "animateBackward",
                        value: function () {
                            this.isDisabled() || (this.hasAnimation() ? this.reverseCurrentAnimation() : this.startOutAnimation())
                        }
                    }, {
                        key: "animateForward",
                        value: function () {
                            this.isDisabled() || (this.hasAnimation() ? this.reverseCurrentAnimation() : this.startInAnimation())
                        }
                    }, {
                        key: "beforeAnimation",
                        value: function () {}
                    }, {
                        key: "afterAnimation",
                        value: function () {}
                    }, {
                        key: "_getSceneSize",
                        value: function () {
                            var b = this.getWObject().getContent()[0];
                            return new a.a({
                                width: b.offsetWidth,
                                height: b.offsetHeight
                            })
                        }
                    }, {
                        key: "getWObject",
                        value: function () {
                            return this._wObject
                        }
                    }
                ]),
            b
        }
        ();
        m.TRANSITION_ANIMATION_RUNNING_CLASS = "transitionAnimationRunning"
    },
    2443: function (g, c, b) {
        c.a = {
            INITIAL: "initial",
            IN_PROGRESS: "IN_PROGRESS",
            FINISHED: "FINISHED",
            DISABLED: "DISABLED"
        }
    },
    26: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(122),
        h = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "setWindowConfigValue",
                        value: function (a,
                            e) {
                            b.setValue(window.config, a, e)
                        }
                    }, {
                        key: "setValue",
                        value: function (a, b, c) {
                            if (webwave.isString(b)) {
                                b = b.split(".");
                                a = webwave.isDef(a) ? a : window.config;
                                for (var d = 0; d < b.length - 1; d++)
                                    webwave.isNotDef(a[b[d]]) && (a[b[d]] = {}), a = a[b[d]];
                                a[b[b.length - 1]] = c
                            }
                        }
                    }, {
                        key: "getValue",
                        value: function (a, b, c) {
                            if (webwave.isString(a)) {
                                a = a.split(".");
                                c = webwave.isDef(c) ? c : window.config;
                                if (webwave.isNotDef(c))
                                    return b;
                                for (var d = 0; d < a.length; d++) {
                                    if (!webwave.isDef(c[a[d]]))
                                        return b;
                                    c = c[a[d]]
                                }
                                return c
                            }
                            return null
                        }
                    }, {
                        key: "getDecodedJSON",
                        value: function (a) {
                            a = f.a.decodeHtml(b.getValue(a));
                            return webwave.isValidJSON(a) ? JSON.parse(a) : {}
                        }
                    }, {
                        key: "isValueExists",
                        value: function (a, e) {
                            return webwave.isDef(b.getValue(a, e))
                        }
                    }
                ]),
            b
        }
        ()
    },
    2666: function (g, c, b) {
        b.d(c, "a", function () {
            return m
        });
        var k = b(0),
        l = b(1),
        f = b(2828),
        h = b(1863),
        d = b(1864),
        a = b(1866),
        e = b(1865),
        m = (b(114), function () {
            function b() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                Object(k.a)(this, b);
                this.stages = {
                    start: new f.a({
                        startLength: a.startStageStartValue,
                        type: webwave.isDef(a.startStageType) ?
                        a.startStageType : h.a.SHOW_ELEMENT
                    }),
                    finish: new f.a({
                        startLength: a.finishStageStartValue,
                        type: webwave.isDef(a.finishStageType) ? a.finishStageType : d.a.DONT_HIDE
                    })
                }
            }
            return Object(l.a)(b, [{
                        key: "recreateFinishStage",
                        value: function (b) {
                            this.stages[a.a.FINISH] = new f.a({
                                type: b
                            })
                        }
                    }, {
                        key: "getStage",
                        value: function (a) {
                            return this.stages[a]
                        }
                    }, {
                        key: "setStartStageType",
                        value: function (b) {
                            this.getStage(a.a.START).setName(b)
                        }
                    }, {
                        key: "getStartStageType",
                        value: function () {
                            return this.getStage(a.a.START).getType()
                        }
                    }, {
                        key: "setFinishStageType",
                        value: function (b) {
                            this.getStage(a.a.FINISH).setName(b)
                        }
                    }, {
                        key: "getFinishStageType",
                        value: function () {
                            return this.getStage(a.a.FINISH).getType()
                        }
                    }, {
                        key: "setStartStageStartValue",
                        value: function (b) {
                            this.getStage(a.a.START).setStartValue(b)
                        }
                    }, {
                        key: "addValueToStartStageStartValue",
                        value: function (b) {
                            var e = this.getStage(a.a.START).getStartValue();
                            this.getStage(a.a.START).setStartValue(e + b)
                        }
                    }, {
                        key: "getStartStageStartValue",
                        value: function () {
                            return this.getStage(a.a.START).getStartValue()
                        }
                    }, {
                        key: "setStartStageStartUnit",
                        value: function (b) {
                            this.getStage(a.a.START).setStartUnit(b)
                        }
                    }, {
                        key: "getStartStageStartUnit",
                        value: function () {
                            return this.getStage(a.a.START).getStartUnit()
                        }
                    }, {
                        key: "setFinishStageStartValue",
                        value: function (b) {
                            this.getStage(a.a.FINISH).setStartValue(b)
                        }
                    }, {
                        key: "addValueToFinishStageStartValue",
                        value: function (b) {
                            var e = this.getStage(a.a.FINISH).getStartValue();
                            this.getStage(a.a.FINISH).setStartValue(e + b)
                        }
                    }, {
                        key: "getFinishStageStartValue",
                        value: function () {
                            return this.getStage(a.a.FINISH).getStartValue()
                        }
                    }, {
                        key: "setFinishStageStartUnit",
                        value: function (b) {
                            this.getStage(a.a.FINISH).setStartUnit(b)
                        }
                    }, {
                        key: "getFinishStageStartUnit",
                        value: function () {
                            return this.getStage(a.a.FINISH).getStartUnit()
                        }
                    }, {
                        key: "computeFinishStageStartValue",
                        value: function () {
                            var a = this.getFinishStageType();
                            return a === e.a.SHOW_WHEN || a === d.a.HIDE_WHEN ? this.getFinishStageStartValue() : 1 / 0
                        }
                    }, {
                        key: "computeStartStageVisibility",
                        value: function () {
                            return this.getStartStageType() === h.a.SHOW_ELEMENT
                        }
                    }, {
                        key: "computeFinishStageVisibility",
                        value: function () {
                            var a =
                                this.getFinishStageType();
                            return a === e.a.SHOW_WHEN || a === d.a.DONT_HIDE
                        }
                    }, {
                        key: "serialize",
                        value: function () {
                            return {
                                startStageStartValue: this.getStage(a.a.START).getStartLength().serialize(),
                                startStageType: this.getStage(a.a.START).getType(),
                                finishStageStartValue: this.getStage(a.a.FINISH).getStartLength().serialize(),
                                finishStageType: this.getStage(a.a.FINISH).getType()
                            }
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }
                ], [{
                        key: "deserialize",
                        value: function (a) {
                            return new b(a)
                        }
                    }
                ]),
            b
        }
            ())
    },
    2668: function (g,
        c, b) {
        c.a = {
            FLY_OUT: "flyOut",
            FADE_OUT: "fadeOut",
            EXPAND_OUT: "expandOut",
            FOLD_OUT: "foldOut",
            HIDE: "hide"
        }
    },
    2669: function (g, c, b) {
        c.a = {
            FLY_IN: "flyIn",
            FADE_IN: "fadeIn",
            EXPAND_IN: "expandIn",
            FOLD_IN: "foldIn",
            REVEAL: "reveal"
        }
    },
    2670: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var f = Object(e.a)(this).constructor;
                    d = Reflect.construct(d, arguments, f)
                } else
                    d = d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return p
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m = b(1236),
        q = b(1224),
        r = b(1318),
        t = b(1300);
        g = b(1301);
        var n = b(178),
        p = function (a) {
            function b(a) {
                var e;
                return Object(l.a)(this, b),
                webwave.isNotDef(a) && (a = {}),
                (e = c.call(this, a))._direction = webwave.isValidEnumValue(a.direction, n.a) ? a.direction : t.a.DEFAULT_DIRECTION,
                e.previousHeight =
                    webwave.isDefAndNotNull(a.previousHeight) ? a.previousHeight : null,
                e.previousLeft = webwave.isDefAndNotNull(a.previousLeft) ? a.previousLeft : null,
                e
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "serialize",
                        value: function () {
                            var a = Object(h.a)(Object(e.a)(b.prototype), "serialize", this).call(this);
                            return a.class = "webwave.gui.animation.RevealAnimation",
                            a.direction = this._direction,
                            a.previousHeight = this.previousHeight,
                            a.previousLeft = this.previousLeft,
                            a
                        }
                    }, {
                        key: "getDirection",
                        value: function () {
                            return this._direction
                        }
                    }, {
                        key: "setDirection",
                        value: function (a) {
                            webwave.isValidEnumValue(a, n.a) && (this._direction = a)
                        }
                    }, {
                        key: "_createAnimationPropsMap",
                        value: function (a) {
                            var b = a.top,
                            e = a.right,
                            c = a.bottom,
                            d = a.left,
                            f = a.top,
                            m = a.right,
                            h = a.bottom;
                            a = a.left;
                            switch (this._direction) {
                            case n.a.TOP:
                                c = b;
                                break;
                            case n.a.RIGHT:
                                d = e;
                                break;
                            case n.a.BOTTOM:
                                b = c;
                                break;
                            case n.a.LEFT:
                                e = d
                            }
                            return [new q.a({
                                    propertyName: "clip",
                                    startValues: [b, e, c, d],
                                    finalValues: [f, m, h, a],
                                    template: "rect(${0}px ${1}px ${2}px ${3}px)"
                                })]
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            var b =
                                a.getShadowSizeCorrection();
                            a = a.getContentSize();
                            return this._createAnimationPropsMap({
                                top: -b.top,
                                right: a.getWidth() + b.right,
                                bottom: a.getHeight() + b.bottom,
                                left: -b.left
                            })
                        }
                    }, {
                        key: "prepareAnimatableObjectForAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "prepareAnimatableObjectForAnimation", this).call(this, a);
                            var c = a.getDomObject();
                            this.previousLeft = a.getContent().css("left");
                            var d = webwave.isStringAndNotEmpty(this.previousLeft) ? this.previousLeft : "0px";
                            "auto" === d && (d = "0px");
                            this.previousHeight =
                                c[0].style.height;
                            c[0].style.height = c[0].clientHeight + "px";
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                position: "absolute",
                                left: d,
                                right: 0,
                                clip: "rect(0, 0, 0, 0)"
                            })
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "cleanAnimatableObjectAfterAnimation", this).call(this, a);
                            a.getDomObject()[0].style.height = this.previousHeight;
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                position: "",
                                left: webwave.isStringAndNotEmpty(this.previousLeft) ?
                                this.previousLeft : "",
                                right: "",
                                clip: ""
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.REVEAL
                        }
                    }
                ]),
            b
        }
        (g.a)
    },
    2672: function (g, c, b) {
        c.a = {
            HIDDEN: "hidden",
            VISIBLE: "visible"
        }
    },
    2700: function (g, c, b) {
        g = b(1230);
        b = b(1279);
        c.a = {
            DEFAULT_MENU_COLOR: b.a.SECOND_NEUTRAL,
            DEFAULT_MOBILE_MENU_ACTIVE_IMAGE_ID: "ww_icon;set2-close-outline;#111318",
            DEFAULT_MOBILE_MENU_ANIMATION_DURATION: 750,
            DEFAULT_MOBILE_MENU_IMAGE_ID: "ww_icon;set2-menu;#111318",
            DEFAULT_MOBILE_MENU_ICON_ALIGN: g.a.CENTER
        }
    },
    2828: function (g, c, b) {
        b.d(c, "a", function () {
            return e
        });
        var k = b(0),
        l = b(1),
        f = b(114),
        h = b(1863),
        d = b(1864),
        a = b(1865),
        e = function () {
            function b() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                Object(k.a)(this, b);
                this.startLength = new f.a(a.startLength);
                this.type = a.type
            }
            return Object(l.a)(b, [{
                        key: "getStartLength",
                        value: function () {
                            return this.startLength
                        }
                    }, {
                        key: "setStartValue",
                        value: function (a) {
                            this.getStartLength().setValue(a)
                        }
                    }, {
                        key: "setStartUnit",
                        value: function (a) {
                            this.getStartLength().setUnit(a)
                        }
                    }, {
                        key: "getStartUnit",
                        value: function () {
                            return this.getStartLength().getUnit()
                        }
                    }, {
                        key: "getStartValue",
                        value: function () {
                            return this.getStartLength().getValue()
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return this.type
                        }
                    }, {
                        key: "setName",
                        value: function (a) {
                            this.type = a
                        }
                    }, {
                        key: "isShowElementAnimation",
                        value: function () {
                            return this.getType() === h.a.SHOW_ELEMENT
                        }
                    }, {
                        key: "isHideElementAnimation",
                        value: function () {
                            return this.getType() === h.a.HIDE_ELEMENT
                        }
                    }, {
                        key: "isDontHide",
                        value: function () {
                            return this.getType() === d.a.DONT_HIDE
                        }
                    }, {
                        key: "isHideWhen",
                        value: function () {
                            return this.getType() === d.a.HIDE_WHEN
                        }
                    }, {
                        key: "isDontShow",
                        value: function () {
                            return this.getType() === a.a.DONT_SHOW
                        }
                    }, {
                        key: "isShowWhen",
                        value: function () {
                            return this.getType() === a.a.SHOW_WHEN
                        }
                    }
                ]),
            b
        }
        ()
    },
    2831: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var f = Object(e.a)(this).constructor;
                    d = Reflect.construct(d, arguments, f)
                } else
                    d = d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return t
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m = b(1236),
        q = b(1224),
        r = b(1318),
        t = function (a) {
            function b(a) {
                return Object(l.a)(this, b),
                c.call(this, a)
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "serialize",
                        value: function () {
                            var a = Object(h.a)(Object(e.a)(b.prototype), "serialize", this).call(this);
                            return a.class = "webwave.gui.animation.FadeInAnimation",
                            a
                        }
                    }, {
                        key: "prepareAnimatableObjectForAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "prepareAnimatableObjectForAnimation", this).call(this, a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                opacity: 0
                            })
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            return [new q.a({
                                    propertyName: "opacity",
                                    startValues: [0],
                                    finalValues: [a.getComputedOpacity() / 100],
                                    template: "${0}"
                                })]
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype),
                                "cleanAnimatableObjectAfterAnimation", this).call(this, a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                opacity: a.getComputedOpacity() / 100
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.FADE_IN
                        }
                    }
                ]),
            b
        }
        (b(1301).a)
    },
    2832: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,
                            [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var f = Object(e.a)(this).constructor;
                    d = Reflect.construct(d, arguments, f)
                } else
                    d = d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return t
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m = b(1236),
        q = b(1224),
        r = b(1318),
        t = function (a) {
            function b(a) {
                return Object(l.a)(this, b),
                c.call(this, a)
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "serialize",
                        value: function () {
                            var a = Object(h.a)(Object(e.a)(b.prototype),
                                    "serialize", this).call(this);
                            return a.class = "webwave.gui.animation.ExpandInAnimation",
                            a
                        }
                    }, {
                        key: "prepareAnimatableObjectForAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "prepareAnimatableObjectForAnimation", this).call(this, a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                opacity: 0,
                                transformOrigin: "top left"
                            })
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            var b = a.getContentSize(),
                            c = "translate(".concat(-b.width / 2, "px, ").concat(-b.height / 2, "px)"),
                            b = "translate(".concat(b.width /
                                    2, "px, ").concat(b.height / 2, "px)"),
                            c = "".concat(b, " scale(${0}) ").concat(c);
                            return a.isRotated() && (c = "rotateZ(".concat(a.getRotation(), "deg) ").concat(c)),
                            [new q.a({
                                    propertyName: "transform",
                                    startValues: [0],
                                    finalValues: [1],
                                    template: c
                                }), new q.a({
                                    propertyName: "opacity",
                                    startValues: [0],
                                    finalValues: [a.getComputedOpacity() / 100],
                                    template: "${0}"
                                })]
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "cleanAnimatableObjectAfterAnimation", this).call(this, a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                transform: a.getRotationTransformCss(),
                                opacity: a.getComputedOpacity() / 100,
                                transformOrigin: ""
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.EXPAND_IN
                        }
                    }
                ]),
            b
        }
        (b(1301).a)
    },
    2833: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var f = Object(e.a)(this).constructor;
                    d = Reflect.construct(d, arguments, f)
                } else
                    d = d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return u
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m = b(1236),
        q = b(1224),
        r = b(1318),
        t = b(1300);
        g = b(1301);
        var n = b(178),
        p = b(2172),
        u = function (a) {
            function b(a) {
                var e;
                return Object(l.a)(this, b),
                webwave.isNotDef(a) && (a = {}),
                (e = c.call(this, a))._direction = webwave.isValidEnumValue(a.direction, n.a) ? a.direction :
                    t.a.DEFAULT_DIRECTION,
                e
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "serialize",
                        value: function () {
                            var a = Object(h.a)(Object(e.a)(b.prototype), "serialize", this).call(this);
                            return a.class = "webwave.gui.animation.FoldOutAnimation",
                            a.direction = this._direction,
                            a
                        }
                    }, {
                        key: "getDirection",
                        value: function () {
                            return this._direction
                        }
                    }, {
                        key: "setDirection",
                        value: function (a) {
                            webwave.isValidEnumValue(a, n.a) && (this._direction = a)
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.FOLD_OUT
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            var b = 0,
                            c = 0,
                            e = 0,
                            d = 0,
                            f = a.getContentSize(),
                            m = a.getRotation() * (Math.PI / 180),
                            h = Math.sin(m),
                            m = Math.cos(m),
                            k = f.width,
                            f = f.height;
                            switch (this._direction) {
                            case n.a.TOP:
                                b = -90;
                                d = Math.min(m * f, h * k, m * f + h * k, 0);
                                break;
                            case n.a.RIGHT:
                                c = -90;
                                e = Math.max(-h * f, m * k, -h * f + m * k, 0);
                                break;
                            case n.a.BOTTOM:
                                b = 90;
                                d = Math.max(m * f, h * k, m * f + h * k, 0);
                                break;
                            case n.a.LEFT:
                                c = 90,
                                e = Math.min(-h * f, m * k, -h * f + m * k, 0)
                            }
                            h = "translate(".concat(Object(p.a)(-e, "px"), ", ").concat(Object(p.a)(-d, "px"), ")");
                            e = "translate(".concat(Object(p.a)(e,
                                        "px"), ", ").concat(Object(p.a)(d, "px"), ")");
                            e = 0 !== b ? "".concat(e, " rotateX(${0}deg) ").concat(h) : "".concat(e, " rotateY(${0}deg) ").concat(h);
                            b = 0 !== b ? [b] : [c];
                            a.isRotated() && (a = a.getRotation(), e += " rotateZ(".concat(Object(p.a)(a, "deg"), ")"));
                            return [new q.a({
                                    propertyName: "transform",
                                    startValues: [0],
                                    finalValues: b,
                                    template: e,
                                    noClear: !0
                                })]
                        }
                    }, {
                        key: "_getOutitialTransformMap",
                        value: function () {
                            var a = {
                                transformOriginX: 0,
                                transformOriginY: 0,
                                perspectiveOriginX: 0,
                                perspectiveOriginY: 0,
                                perspective: "1000px",
                                rotateX: 0,
                                rotateY: 0
                            };
                            switch (this._direction) {
                            case n.a.TOP:
                                a.perspectiveOriginX = "50%";
                                a.perspectiveOriginY = "0";
                                a.rotateX = -90;
                                break;
                            case n.a.RIGHT:
                                a.transformOriginX = "100%";
                                a.perspectiveOriginX = "100%";
                                a.perspectiveOriginY = "50%";
                                a.rotateY = -90;
                                break;
                            case n.a.BOTTOM:
                                a.transformOriginY = "100%";
                                a.perspectiveOriginX = "50%";
                                a.perspectiveOriginY = "100%";
                                a.rotateX = 90;
                                break;
                            case n.a.LEFT:
                                a.perspectiveOriginX = "0",
                                a.perspectiveOriginY = "50%",
                                a.rotateY = 90
                            }
                            return a
                        }
                    }, {
                        key: "prepareAnimatableObjectForAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype),
                                "prepareAnimatableObjectForAnimation", this).call(this, a);
                            var c = this._getOutitialTransformMap();
                            a.getDomObject().css({
                                perspectiveOrigin: c.perspectiveOriginX + " " + c.perspectiveOriginY,
                                perspective: c.perspective
                            });
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                transformOrigin: "top left"
                            })
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "cleanAnimatableObjectAfterAnimation", this).call(this, a);
                            a.getDomObject().css({
                                perspectiveOrigin: "",
                                perspective: ""
                            });
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                transformOrigin: "",
                                transform: a.getRotationTransformCss()
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }
                ]),
            b
        }
        (g.a)
    },
    2835: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var e;
                e = Object(a.a)(b);
                if (c) {
                    var f = Object(a.a)(this).constructor;
                    e = Reflect.construct(e, arguments, f)
                } else
                    e = e.apply(this, arguments);
                return Object(d.a)(this, e)
            }
        }
        b.d(c, "a", function () {
            return t
        });
        var l = b(0),
        f = b(1),
        h = b(3),
        d = b(4),
        a = b(2),
        e = b(2317),
        m = b(2672),
        q = b(345),
        r = b(2396),
        t = function (a) {
            function b() {
                return Object(l.a)(this, b),
                c.apply(this, arguments)
            }
            Object(h.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "_getOverflowValueForSpecificHoverAnimationType",
                        value: function () {
                            switch (this.getAnimationData().getType()) {
                            case e.a.SLIDE:
                                return m.a.HIDDEN;
                            default:
                                return m.a.VISIBLE
                            }
                        }
                    }, {
                        key: "_renderAnimationScene",
                        value: function () {
                            var a = this.getWObject().getContent(),
                            c = a[0],
                            e = b.getFinalStyle(c, ["width", "height", "top", "left", "transformOrigin"]),
                            a = a.hasClass("animation-in-progress") ? "opacity: ".concat(c.style.opacity, ";") : "";
                            return $('\n            <div class="hoverAnimationScene" style="\n                display: block;\n                position: absolute;\n                left: '.concat(e.left, ";\n                top: ").concat(e.top, ";\n                width : ").concat(e.width,
                                    ";\n                height: ").concat(e.height, ";\n                overflow: ").concat(this._getOverflowValueForSpecificHoverAnimationType(), ";\n                pointer-events: none;\n                transform: ").concat(c.style.transform, ";\n                transform-origin: ").concat(e.transformOrigin, ";\n                ").concat(a, "\n                clip: ").concat(c.style.clip, ';\n                border-width: 0px;\n                border-style: none;\n                padding : 0px;\n                box-sizing: border-box;\n            ">\n        '))
                        }
                    }, {
                        key: "_renderButtonContent",
                        value: function (a, b) {
                            var c = this.getWObject().getState().getName();
                            this.getWObject().setStyleVersion(a);
                            a = this.getWObject().getContent().clone();
                            var e = this.getWObject().getBackgroundOverlayDom().clone();
                            return a.removeClass("content").removeAttr("id"),
                            a.css({
                                position: "absolute",
                                boxSizing: "border-box",
                                top: "0",
                                left: "0",
                                width: b.getWidth(),
                                height: b.getHeight(),
                                transform: "",
                                transformOrigin: "",
                                overflow: "hidden",
                                clip: ""
                            }),
                            e.css({
                                position: "absolute",
                                boxSizing: "border-box",
                                width: b.getWidth(),
                                height: b.getHeight()
                            }),
                            this.getWObject().setStyleVersion(c),
                            $("<div/>").append(a, e)
                        }
                    }, {
                        key: "renderPanel",
                        value: function (a) {
                            return this._renderButtonContent(q.a.NORMAL, a)
                        }
                    }, {
                        key: "renderNextPanel",
                        value: function (a) {
                            return this._renderButtonContent(q.a.HOVER, a)
                        }
                    }, {
                        key: "_addAnimationSceneToHtml",
                        value: function (a) {
                            this.getWObject().getDomObject().prepend(a)
                        }
                    }, {
                        key: "beforeAnimation",
                        value: function () {
                            this.getWObject().getDomObject().addClass(r.a.TRANSITION_ANIMATION_RUNNING_CLASS)
                        }
                    }, {
                        key: "afterAnimation",
                        value: function () {
                            this.getWObject().getDomObject().removeClass(r.a.TRANSITION_ANIMATION_RUNNING_CLASS)
                        }
                    }, {
                        key: "onMouseEnter",
                        value: function () {
                            this.animateForward()
                        }
                    }, {
                        key: "onMouseLeave",
                        value: function () {
                            this.animateBackward()
                        }
                    }
                ], [{
                        key: "getFinalStyle",
                        value: function (a, b) {
                            b instanceof Array || (b = [b]);
                            var c = a.parentNode;
                            if (c && c.style) {
                                var e = c.style.display;
                                c.style.display = "none"
                            }
                            a = getComputedStyle(a);
                            for (var d = {}, f = 0; f < b.length; f++)
                                "width" !== b[f] || "auto" !== a[b[f]] ? d[b[f]] = a[b[f]] : d[b[f]] = "100%";
                            return c &&
                            c.style && (c.style.display = e),
                            d
                        }
                    }
                ]),
            b
        }
        (r.a)
    },
    2853: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var e;
                e = Object(a.a)(b);
                if (c) {
                    var f = Object(a.a)(this).constructor;
                    e = Reflect.construct(e, arguments, f)
                } else
                    e = e.apply(this, arguments);
                return Object(d.a)(this,
                    e)
            }
        }
        b.d(c, "a", function () {
            return r
        });
        var l = b(0),
        f = b(1),
        h = b(3),
        d = b(4),
        a = b(2),
        e = b(1230),
        m = b(1884),
        q = b(2396),
        r = function (a) {
            function b(a, e) {
                return Object(l.a)(this, b),
                c.call(this, a, e)
            }
            Object(h.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "modifyAnimationSceneSize",
                        value: function (a) {
                            var b = this._calculateDefaultSceneSize();
                            a[0].style.height = b.height;
                            a[0].style.width = b.width
                        }
                    }, {
                        key: "_renderAnimationScene",
                        value: function () {
                            var a = $('\n            <div class="'.concat(b.MENU_ICON_ANIMATION_SCENE_CLASS, '" style="\n                display: block;\n                position: absolute;\n            ">\n        '));
                            return this.modifyAnimationSceneSize(a),
                            a
                        }
                    }, {
                        key: "renderPanel",
                        value: function () {
                            return this._renderMobileMenuIcon(!1)
                        }
                    }, {
                        key: "renderNextPanel",
                        value: function () {
                            return this._renderMobileMenuIcon(!0)
                        }
                    }, {
                        key: "_renderMobileMenuIcon",
                        value: function (a) {
                            var b = this.getWObject().getMobileMenuIcon().clone();
                            a = this.getWObject().getIconImageUrl(a);
                            return m.a.changeMobileMenuImageSrc(b, a),
                            this._addAdditionalCssValues(b),
                            b
                        }
                    }, {
                        key: "_addAdditionalCssValues",
                        value: function (a) {
                            var b = this.getWObject().getMobileMenuIconAlign(),
                            c = {
                                position: "absolute",
                                margin: "auto auto",
                                top: 0,
                                bottom: 0
                            };
                            switch (a.css(c), b) {
                            case e.a.CENTER:
                                Object.assign(c, {
                                    left: "0",
                                    right: "0"
                                });
                                break;
                            case e.a.LEFT:
                                Object.assign(c, {
                                    left: "0",
                                    right: "auto"
                                });
                                break;
                            case e.a.RIGHT:
                                Object.assign(c, {
                                    left: "auto",
                                    right: "0"
                                })
                            }
                            a.css(c)
                        }
                    }, {
                        key: "_addAnimationSceneToHtml",
                        value: function (a) {
                            this.getWObject().getContent().prepend(a)
                        }
                    }, {
                        key: "_calculateDefaultSceneSize",
                        value: function () {
                            var a = getComputedStyle(this.getWObject().getContent()[0]),
                            b = "".concat(parseInt(a.paddingTop,
                                        10) + parseInt(a.paddingBottom, 10), "px"),
                            a = "".concat(parseInt(a.paddingLeft, 10) + parseInt(a.paddingRight, 10), "px"),
                            c = {};
                            return c.height = "calc(100% - ".concat(b, ")"),
                            c.width = "calc(100% - ".concat(a, ")"),
                            c
                        }
                    }, {
                        key: "beforeAnimation",
                        value: function () {
                            this.getWObject().getMobileMenuIcon().addClass(q.a.TRANSITION_ANIMATION_RUNNING_CLASS)
                        }
                    }, {
                        key: "afterAnimation",
                        value: function () {
                            this.getWObject().getMobileMenuIcon().removeClass(q.a.TRANSITION_ANIMATION_RUNNING_CLASS);
                            this.getWObject().updateIconInMobileMenu()
                        }
                    }
                ]),
            b
        }
        (q.a);
        r.MENU_ICON_ANIMATION_SCENE_CLASS = "menuIconAnimationScene"
    },
    2884: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var e;
                e = Object(a.a)(b);
                if (c) {
                    var f = Object(a.a)(this).constructor;
                    e = Reflect.construct(e, arguments, f)
                } else
                    e = e.apply(this, arguments);
                return Object(d.a)(this, e)
            }
        }
        var l = b(0),
        f = b(1),
        h = b(3),
        d = b(4),
        a = b(2),
        e = b(1997),
        m = b(3592);
        b(1969);
        c.a = function (a) {
            return function (a) {
                function b() {
                    var a;
                    return Object(l.a)(this, b),
                    (a = c.call(this))._currentAnimationsArray = [],
                    a._showAnimations = [],
                    a._counterAnimatinos = [],
                    a
                }
                Object(h.a)(b, a);
                var c = k(b);
                return Object(f.a)(b, [{
                            key: "_updateCurrentAnimationsArray",
                            value: function () {
                                this._currentAnimationsArray = this._counterAnimatinos.slice();
                                !0 === this._objectAnimationsEnabled && (this._currentAnimationsArray = this._currentAnimationsArray.concat(this._showAnimations))
                            }
                        }, {
                            key: "performAnimations",
                            value: function () {
                                throw "Not implemented";
                            }
                        }, {
                            key: "updateCurrentObjectAnimationsArray",
                            value: function () {
                                throw "Not implemented";
                            }
                        }, {
                            key: "_disposeCurrentAnimationsArray",
                            value: function () {
                                for (var a = 0; a < this._showAnimations.length; a++)
                                    this._currentAnimationsArray[a].dispose();
                                this._currentAnimationsArray = []
                            }
                        }, {
                            key: "_disposeShowAnimations",
                            value: function () {
                                for (var a = 0; a < this._showAnimations.length; a++)
                                    this._showAnimations[a].dispose();
                                this._showAnimations = []
                            }
                        }, {
                            key: "_disposeCounterAnimations",
                            value: function () {
                                for (var a = 0; a < this._counterAnimatinos.length; a++)
                                    this._counterAnimatinos[a].dispose();
                                this._counterAnimatinos = []
                            }
                        }, {
                            key: "finishAllAnimations",
                            value: function () {
                                this._disposeShowAnimations()
                            }
                        }, {
                            key: "containsCounterInInCounterAnimationsQueue",
                            value: function (a) {
                                return this._counterAnimatinos.some(function (b) {
                                    return b.wObject === a
                                })
                            }
                        }, {
                            key: "addCounterToQueue",
                            value: function (a) {
                                this.containsCounterInInCounterAnimationsQueue(a) || (this._counterAnimatinos.push(new m.a({
                                            wObject: a
                                        })), this._updateCurrentAnimationsArray())
                            }
                        }, {
                            key: "removeCounterFromQueue",
                            value: function (a) {
                                for (var b = 0; b < this._counterAnimatinos.length; b++) {
                                    var c = this._counterAnimatinos[b];
                                    if (c.wObject === a) {
                                        this._counterAnimatinos.splice(b, 1);
                                        c.dispose();
                                        break
                                    }
                                }
                            }
                        }, {
                            key: "containsWObjectInShowAnimation",
                            value: function (a) {
                                return this._showAnimations.some(function (b) {
                                    return b.wObject === a
                                })
                            }
                        }, {
                            key: "addShowAnimationToQueue",
                            value: function (a) {
                                this.containsWObjectInShowAnimation(a) || this._showAnimations.push(new e.a({
                                        wObject: a,
                                        hideWObject: !0 === this._objectAnimationsEnabled,
                                        interactionsService: this.interactionsService
                                    }))
                            }
                        }, {
                            key: "removeFromShowAnimation",
                            value: function (a) {
                                for (var b = 0; b < this._showAnimations.length; b++) {
                                    var c = this._showAnimations[b];
                                    if (c.wObject === a) {
                                        this._showAnimations.splice(b, 1);
                                        c.dispose();
                                        break
                                    }
                                }
                            }
                        }, {
                            key: "collectCounterWObjects",
                            value: function () {
                                for (var a = [], b = 0; b < this._counterAnimatinos.length; b++)
                                    a.push(this._counterAnimatinos[b].wObject);
                                return a
                            }
                        }, {
                            key: "collectShowAnimationWObjects",
                            value: function () {
                                for (var a = [], b = 0; b < this._showAnimations.length; b++)
                                    a.push(this._showAnimations[b].wObject);
                                return a
                            }
                        }
                    ]),
                b
            }
            (a)
        }
    },
    2990: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var f = Object(e.a)(this).constructor;
                    d = Reflect.construct(d, arguments, f)
                } else
                    d = d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return p
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m = b(1236),
        q = b(1224),
        r = b(1318),
        t = b(1300),
        n = b(107),
        p = function (a) {
            function b(a) {
                var e;
                return Object(l.a)(this, b),
                e = c.call(this, a),
                webwave.isNotDef(a) && (a = {}),
                e._direction = webwave.isDef(a.direction) ? a.direction : t.a.DEFAULT_DIRECTION,
                e
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "serialize",
                        value: function () {
                            var a = Object(h.a)(Object(e.a)(b.prototype), "serialize", this).call(this);
                            return a.class = "webwave.gui.animation.FlyOutAnimation",
                            a.direction =
                                this._direction,
                            a
                        }
                    }, {
                        key: "setDirection",
                        value: function (a) {
                            webwave.isValidEnumValue(a, n.a) && (this._direction = a)
                        }
                    }, {
                        key: "getDirection",
                        value: function () {
                            return this._direction
                        }
                    }, {
                        key: "getFinalCss",
                        value: function () {
                            var a = 0,
                            b = 0;
                            switch (this._direction) {
                            case n.a.TOP:
                                b = -this._distance;
                                break;
                            case n.a.TOP_RIGHT:
                                a = this._distance;
                                b = -this._distance;
                                break;
                            case n.a.RIGHT:
                                a = this._distance;
                                break;
                            case n.a.BOTTOM_RIGHT:
                                b = a = this._distance;
                                break;
                            case n.a.BOTTOM:
                                b = this._distance;
                                break;
                            case n.a.BOTTOM_LEFT:
                                a = -this._distance;
                                b = this._distance;
                                break;
                            case n.a.LEFT:
                                a = -this._distance;
                                break;
                            case n.a.TOP_LEFT:
                                a = -this._distance,
                                b = -this._distance
                            }
                            return {
                                translateX: a,
                                translateY: b,
                                opacity: 0
                            }
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            var b = this.getFinalCss(),
                            c = "translateX(${0}px) translateY(${1}px)";
                            return a.isRotated() && (c += " rotateZ(".concat(a.getRotation(), "deg)")),
                            [new q.a({
                                    propertyName: "transform",
                                    startValues: [0, 0],
                                    finalValues: [b.translateX, b.translateY],
                                    template: c,
                                    noClear: !0
                                }), new q.a({
                                    propertyName: "opacity",
                                    startValues: [a.getComputedOpacity() /
                                        100],
                                    finalValues: [0],
                                    template: "${0}",
                                    noClear: !0
                                })]
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "cleanAnimatableObjectAfterAnimation", this).call(this, a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                transform: a.getRotationTransformCss(),
                                opacity: a.getComputedOpacity() / 100
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.FLY_OUT
                        }
                    }
                ]),
            b
        }
        (b(1301).a)
    },
    2991: function (g, c, b) {
        function k(b) {
            var c =
            function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var f = Object(e.a)(this).constructor;
                    d = Reflect.construct(d, arguments, f)
                } else
                    d = d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return t
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m =
            b(1236),
        q = b(1224),
        r = b(1318),
        t = function (a) {
            function b(a) {
                return Object(l.a)(this, b),
                c.call(this, a)
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "serialize",
                        value: function () {
                            var a = Object(h.a)(Object(e.a)(b.prototype), "serialize", this).call(this);
                            return a.class = "webwave.gui.animation.FadeOutAnimation",
                            a
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            return [new q.a({
                                    propertyName: "opacity",
                                    startValues: [a.getComputedOpacity() / 100],
                                    finalValues: [0],
                                    template: "${0}",
                                    noClear: !0
                                })]
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "cleanAnimatableObjectAfterAnimation", this).call(this, a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                opacity: a.getComputedOpacity() / 100
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.FADE_OUT
                        }
                    }
                ]),
            b
        }
        (b(1301).a)
    },
    2992: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var f = Object(e.a)(this).constructor;
                    d = Reflect.construct(d, arguments, f)
                } else
                    d = d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return t
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m = b(1236),
        q = b(1224),
        r = b(1318),
        t = function (a) {
            function b(a) {
                return Object(l.a)(this, b),
                c.call(this, a)
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b,
                [{
                        key: "serialize",
                        value: function () {
                            var a = Object(h.a)(Object(e.a)(b.prototype), "serialize", this).call(this);
                            return a.class = "webwave.gui.animation.ExpandOutAnimation",
                            a
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            var b = a.getContentSize(),
                            c = "translate(".concat(-b.width / 2, "px, ").concat(-b.height / 2, "px)"),
                            b = "translate(".concat(b.width / 2, "px, ").concat(b.height / 2, "px)"),
                            c = "".concat(b, " scale(${0}) ").concat(c);
                            return a.isRotated() && (c = "rotateZ(".concat(a.getRotation(), "deg) ").concat(c)),
                            [new q.a({
                                    propertyName: "transform",
                                    startValues: [1],
                                    finalValues: [0],
                                    template: c,
                                    noClear: !0
                                }), new q.a({
                                    propertyName: "opacity",
                                    startValues: [a.getComputedOpacity() / 100],
                                    finalValues: [0],
                                    template: "${0}",
                                    noClear: !0
                                })]
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "cleanAnimatableObjectAfterAnimation", this).call(this, a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                transform: a.getRotationTransformCss(),
                                opacity: a.getComputedOpacity() / 100,
                                transformOrigin: ""
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.EXPAND_OUT
                        }
                    }
                ]),
            b
        }
        (b(1301).a)
    },
    2993: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var f = Object(e.a)(this).constructor;
                    d = Reflect.construct(d,
                            arguments, f)
                } else
                    d = d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return p
        });
        var l = b(0),
        f = b(1),
        h = b(17),
        d = b(3),
        a = b(4),
        e = b(2),
        m = b(1236),
        q = b(1224),
        r = b(1318),
        t = b(1300);
        g = b(1301);
        var n = b(178);
        b(2172);
        var p = function (a) {
            function b(a) {
                var e;
                return Object(l.a)(this, b),
                webwave.isNotDef(a) && (a = {}),
                (e = c.call(this, a))._direction = webwave.isValidEnumValue(a.direction, n.a) ? a.direction : t.a.DEFAULT_DIRECTION,
                e
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "serialize",
                        value: function () {
                            var a =
                                Object(h.a)(Object(e.a)(b.prototype), "serialize", this).call(this);
                            return a.class = "webwave.gui.animation.HideAnimation",
                            a.direction = this._direction,
                            a
                        }
                    }, {
                        key: "getDirection",
                        value: function () {
                            return this._direction
                        }
                    }, {
                        key: "setDirection",
                        value: function (a) {
                            webwave.isValidEnumValue(a, n.a) && (this._direction = a)
                        }
                    }, {
                        key: "_createAnimationPropsMap",
                        value: function (a) {
                            var b = a.top,
                            c = a.right,
                            e = a.bottom,
                            d = a.left,
                            f = a.top,
                            m = a.right,
                            h = a.bottom;
                            a = a.left;
                            switch (this._direction) {
                            case n.a.TOP:
                                e = b;
                                break;
                            case n.a.RIGHT:
                                d = c;
                                break;
                            case n.a.BOTTOM:
                                b = e;
                                break;
                            case n.a.LEFT:
                                c = d
                            }
                            return [new q.a({
                                    propertyName: "clip",
                                    startValues: [f, m, h, a],
                                    finalValues: [b, c, e, d],
                                    template: "rect(${0}px ${1}px ${2}px ${3}px)",
                                    noClear: !0
                                })]
                        }
                    }, {
                        key: "getAnimationPropsData",
                        value: function (a) {
                            var b = a.getShadowSizeCorrection();
                            a = a.getContentSize();
                            return this._createAnimationPropsMap({
                                top: -b.top,
                                right: a.getWidth() + b.right,
                                bottom: a.getHeight() + b.bottom,
                                left: -b.left
                            })
                        }
                    }, {
                        key: "prepareAnimatableObjectForAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype),
                                "prepareAnimatableObjectForAnimation", this).call(this, a);
                            this.previousLeft = a.getContent().css("left");
                            var c = webwave.isStringAndNotEmpty(this.previousLeft) ? this.previousLeft : "0px";
                            "auto" === c && (c = "0px");
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                position: "absolute",
                                left: c,
                                right: 0
                            })
                        }
                    }, {
                        key: "cleanAnimatableObjectAfterAnimation",
                        value: function (a) {
                            Object(h.a)(Object(e.a)(b.prototype), "cleanAnimatableObjectAfterAnimation", this).call(this, a);
                            r.a.setCssPropertiesForElements(a.getElementsForAnimation(), {
                                position: "",
                                left: webwave.isStringAndNotEmpty(this.previousLeft) ? this.previousLeft : 0,
                                right: 0,
                                clip: ""
                            })
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this.serialize())
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return m.a.HIDE
                        }
                    }
                ]),
            b
        }
        (g.a)
    },
    2994: function (g, c, b) {
        b.d(c, "a", function () {
            return f
        });
        var k = b(0),
        l = b(1),
        f = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "toggleClassToListOfElements",
                        value: function (c, a, e) {
                            for (var f = 0; f < c.length; f++)
                                b.toggleClass(c[f], a, e)
                        }
                    }, {
                        key: "toggleClass",
                        value: function (b, a, c) {
                            b.classList.toggle(a, c)
                        }
                    }, {
                        key: "addClass",
                        value: function (c, a) {
                            b.toggleClass(c, a, !0)
                        }
                    }, {
                        key: "removeClass",
                        value: function (c, a) {
                            b.toggleClass(c, a, !1)
                        }
                    }
                ]),
            b
        }
        ()
    },
    2995: function (g, c, b) {
        c.a = {
            swing: "swing",
            linear: "linear",
            "ease-in": "easeInCubic",
            "ease-out": "easeOutCubic",
            "ease-in-out": "easeInOutCubic",
            "bounce-in": "easeInBack",
            "bounce-out": "easeOutBack",
            "bounce-in-out": "easeInOutBack"
        }
    },
    3: function (g, c, b) {
        c.a = function (b, c) {
            if ("function" != typeof c && null !== c)
                throw new TypeError("Super expression must either be null or a function");
            b.prototype = Object.create(c && c.prototype, {
                constructor: {
                    value: b,
                    writable: !0,
                    configurable: !0
                }
            });
            Object.defineProperty(b, "prototype", {
                writable: !1
            });
            c && Object(k.a)(b, c)
        };
        var k = b(334)
    },
    3020: function (g, c, b) {
        b.d(c, "a", function () {
            return a
        });
        var k = b(0),
        l = b(1),
        f = b(1224),
        h = b(2395),
        d = b(1609),
        a = function () {
            function a(b) {
                Object(k.a)(this, a);
                this.type = b.type;
                this.$targetElement = b.targetElement;
                this.currentCornerIndex = null;
                this.animationIndex = 1;
                this.duration = this.alternativeZoom = this.zoom = null;
                this.effectPlaying =
                    !1;
                this._currentAnimation = null
            }
            return Object(l.a)(a, [{
                        key: "_loadOptions",
                        value: function () {
                            this.isNotDisabled() && (this.setZoom(a.options[this.type].zoom), this.setAlternativeZoom(a.options[this.type].alternativeZoom), this.setDuration(a.options[this.type].duration))
                        }
                    }, {
                        key: "initEffect",
                        value: function () {
                            this.isNotDisabled() && (this._loadOptions(), this._start())
                        }
                    }, {
                        key: "setType",
                        value: function (a) {
                            webwave.isValidEnumValue(a, d.a) && (this.type = a, a === d.a.DISABLED ? this.stop() : this.initEffect())
                        }
                    }, {
                        key: "getDuration",
                        value: function () {
                            return this.duration
                        }
                    }, {
                        key: "setDuration",
                        value: function (a) {
                            this.duration = a
                        }
                    }, {
                        key: "getZoom",
                        value: function () {
                            return this.zoom
                        }
                    }, {
                        key: "setZoom",
                        value: function (a) {
                            this.zoom = a
                        }
                    }, {
                        key: "getAlternativeZoom",
                        value: function () {
                            return this.alternativeZoom
                        }
                    }, {
                        key: "setAlternativeZoom",
                        value: function (a) {
                            this.alternativeZoom = a
                        }
                    }, {
                        key: "getTargetElement",
                        value: function () {
                            return webwave.isDef(this.$targetElement) ? this.$targetElement : $()
                        }
                    }, {
                        key: "_start",
                        value: function () {
                            this._startAnimation(this.getFirstAnimationPhaseAnimationOptions())
                        }
                    }, {
                        key: "update",
                        value: function () {
                            this.isNotDisabled() && this.initEffect()
                        }
                    }, {
                        key: "_startAnimation",
                        value: function (a) {
                            var b = this;
                            this._currentAnimation = new h.a({
                                elements: [this.getTargetElement()[0]],
                                duration: 1E3 * this.getDuration(),
                                easing: "easeInOutCubic",
                                onComplete: function () {
                                    b.animationIndex++;
                                    b._startNextAnimationPhase()
                                },
                                props: a
                            });
                            com.webwave.animator.animator.registerAnimation(this._currentAnimation);
                            this.setEffectPlaying(!0)
                        }
                    }, {
                        key: "setEffectPlaying",
                        value: function (a) {
                            this.effectPlaying = a
                        }
                    }, {
                        key: "isEffectPlaying",
                        value: function () {
                            return this.effectPlaying
                        }
                    }, {
                        key: "_startNextAnimationPhase",
                        value: function () {
                            this._startAnimation(this.getNextCornerAnimationProperties())
                        }
                    }, {
                        key: "restart",
                        value: function () {}
                    }, {
                        key: "getType",
                        value: function () {
                            return this.type
                        }
                    }, {
                        key: "isNotDisabled",
                        value: function () {
                            return this.getType() !== d.a.DISABLED
                        }
                    }, {
                        key: "isDisabled",
                        value: function () {
                            return this.getType() === d.a.DISABLED
                        }
                    }, {
                        key: "stop",
                        value: function () {
                            this.setZoom(null);
                            this.setAlternativeZoom(null);
                            this.setDuration(null);
                            null !==
                            this._currentAnimation && (this._currentAnimation.stop(), this._currentAnimation = null);
                            this.deleteAddedCssPropertiesFromTargetElement();
                            this.setEffectPlaying(!1)
                        }
                    }, {
                        key: "deleteAddedCssPropertiesFromTargetElement",
                        value: function () {
                            this.getTargetElement().css({
                                "transform-origin": "",
                                transform: ""
                            })
                        }
                    }, {
                        key: "getFirstAnimationPhaseAnimationOptions",
                        value: function () {
                            var a = this.generateAndGetRandomCornerTransformProperties();
                            return [new f.a({
                                    propertyName: "transform",
                                    startValues: [1],
                                    finalValues: [this.getZoom()],
                                    template: "scale(${0})",
                                    noClear: !0
                                }), new f.a({
                                    propertyName: "transformOrigin",
                                    startValues: [50, 50],
                                    finalValues: a,
                                    template: "${0}% ${1}%",
                                    noClear: !0
                                })]
                        }
                    }, {
                        key: "getRandomCornerIndex",
                        value: function () {
                            var b;
                            do
                                b = Math.floor(Math.random() * a.cornersArray.length);
                            while (b === this.currentCornerIndex);
                            return b
                        }
                    }, {
                        key: "getOppositeCornerIndex",
                        value: function () {
                            return (this.currentCornerIndex + 2) % 4
                        }
                    }, {
                        key: "getZoomProperty",
                        value: function () {
                            return 0 == this.animationIndex % 2 ? this.getZoom() : this.getAlternativeZoom()
                        }
                    }, {
                        key: "getNextZoomProperty",
                        value: function () {
                            return 0 == this.animationIndex % 2 ? this.getAlternativeZoom() : this.getZoom()
                        }
                    }, {
                        key: "getNextCornerAnimationProperties",
                        value: function () {
                            var a = this.getCurrentCornerTransformProperties(),
                            b = this.generateAndGetOppositeCornerTransformProperties();
                            return [new f.a({
                                    propertyName: "transform",
                                    startValues: [this.getZoomProperty()],
                                    finalValues: [this.getNextZoomProperty()],
                                    template: "scale(${0})",
                                    noClear: !0
                                }), new f.a({
                                    propertyName: "transformOrigin",
                                    startValues: a,
                                    finalValues: b,
                                    template: "${0}% ${1}%",
                                    noClear: !0
                                })]
                        }
                    }, {
                        key: "getCurrentCornerTransformProperties",
                        value: function () {
                            return a.cornersArray[this.currentCornerIndex]
                        }
                    }, {
                        key: "generateAndGetRandomCornerTransformProperties",
                        value: function () {
                            return this.currentCornerIndex = this.getRandomCornerIndex(),
                            this.getCurrentCornerTransformProperties()
                        }
                    }, {
                        key: "generateAndGetOppositeCornerTransformProperties",
                        value: function () {
                            return this.currentCornerIndex = this.getOppositeCornerIndex(),
                            this.getCurrentCornerTransformProperties()
                        }
                    }
                ], [{
                        key: "getDefaultType",
                        value: function () {
                            return d.a.DISABLED
                        }
                    }
                ]),
            a
        }
        ();
        a.options = {
            basicKenBurns: {
                zoom: 1.3,
                alternativeZoom: 1.2,
                duration: 15
            }
        };
        a.corners = {
            topLeft: [0, 0],
            topRight: [100, 0],
            bottomRight: [100, 100],
            bottomLeft: [0, 100]
        };
        a.cornersArray = [a.corners.topLeft, a.corners.topRight, a.corners.bottomRight, a.corners.bottomLeft]
    },
    32: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(42),
        h = function () {
            function b(a) {
                Object(k.a)(this, b);
                webwave.isNotDef(a) && (a = {});
                this.width = webwave.isNumberAndNotNaN(a.width) ? a.width :
                    0;
                this.height = webwave.isNumberAndNotNaN(a.height) ? a.height : 0
            }
            return Object(l.a)(b, [{
                        key: "getWidth",
                        value: function () {
                            return this.width
                        }
                    }, {
                        key: "setWidth",
                        value: function (a) {
                            this.width = a
                        }
                    }, {
                        key: "getHeight",
                        value: function () {
                            return this.height
                        }
                    }, {
                        key: "setHeight",
                        value: function (a) {
                            this.height = a
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b({
                                width: this.width,
                                height: this.height
                            })
                        }
                    }, {
                        key: "serialize",
                        value: function () {
                            return {
                                width: this.width,
                                height: this.height
                            }
                        }
                    }, {
                        key: "equals",
                        value: function (a) {
                            return this.width ===
                            a.width && this.height === a.height
                        }
                    }, {
                        key: "add",
                        value: function (a) {
                            return this.width += a.getWidth(),
                            this.height += a.getHeight(),
                            this
                        }
                    }, {
                        key: "subtract",
                        value: function (a) {
                            return this.width -= a.getWidth(),
                            this.height -= a.getHeight(),
                            this
                        }
                    }, {
                        key: "multiply",
                        value: function (a) {
                            return this.width *= a,
                            this.height *= a,
                            this
                        }
                    }, {
                        key: "applyLimits",
                        value: function () {
                            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            webwave.isDef(a.width) && (webwave.isNumber(a.width.min) && (this.width = Math.max(this.width, a.width.min)),
                                webwave.isNumber(a.width.max) && (this.width = Math.min(this.width, a.width.max)));
                            webwave.isDef(a.height) && (webwave.isNumber(a.height.min) && (this.height = Math.max(this.height, a.height.min)), webwave.isNumber(a.height.max) && (this.height = Math.min(this.height, a.height.max)))
                        }
                    }, {
                        key: "toString",
                        value: function () {
                            return "{".concat(this.width, ",").concat(this.height, "}}")
                        }
                    }, {
                        key: "toVector",
                        value: function () {
                            return new f.a({
                                x: this.getWidth(),
                                y: this.getHeight()
                            })
                        }
                    }, {
                        key: "addHeight",
                        value: function (a) {
                            this.height += a
                        }
                    }, {
                        key: "subtractHeight",
                        value: function (a) {
                            this.height -= a
                        }
                    }, {
                        key: "addWidth",
                        value: function (a) {
                            this.width += a
                        }
                    }, {
                        key: "subtractWidth",
                        value: function (a) {
                            this.width -= a
                        }
                    }, {
                        key: "ceil",
                        value: function () {
                            this.width = Math.ceil(this.width);
                            this.height = Math.ceil(this.height)
                        }
                    }
                ]),
            b
        }
        ();
        h.deserialize = function (b) {
            return webwave.isNotDef(b) ? new h({
                width: 0,
                height: 0
            }) : new h(b)
        }
    },
    334: function (g, c, b) {
        function k(b, c) {
            return (k = Object.setPrototypeOf || function (b, c) {
                return b.__proto__ = c,
                b
            })(b, c)
        }
        c.a = k
    },
    34: function (g, c, b) {
        g.exports =
            b(473)
    },
    345: function (g, c, b) {
        c.a = {
            NORMAL: "normal",
            HOVER: "hover",
            DISABLED: "disabled"
        }
    },
    35: function (g, c, b) {
        function k(b, c, h, d, a, e, m) {
            try {
                var k = b[e](m),
                g = k.value
            } catch (t) {
                return void h(t)
            }
            k.done ? c(g) : Promise.resolve(g).then(d, a)
        }
        c.a = function (b) {
            return function () {
                var c = this,
                h = arguments;
                return new Promise(function (d, a) {
                    function e(b) {
                        k(q, d, a, e, m, "next", b)
                    }
                    function m(b) {
                        k(q, d, a, e, m, "throw", b)
                    }
                    var q = b.apply(c, h);
                    e(void 0)
                })
            }
        }
    },
    3592: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect ||
                    !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var e;
                e = Object(a.a)(b);
                if (c) {
                    var f = Object(a.a)(this).constructor;
                    e = Reflect.construct(e, arguments, f)
                } else
                    e = e.apply(this, arguments);
                return Object(d.a)(this, e)
            }
        }
        b.d(c, "a", function () {
            return q
        });
        var l = b(0),
        f = b(1),
        h = b(3),
        d = b(4),
        a = b(2);
        g = b(1997);
        var e = b(2443),
        m = b(2346),
        q = function (a) {
            function b(a) {
                var e;
                return Object(l.a)(this, b),
                (e = c.call(this, a)).mode = m.a.BOTH_DIRECTIONS,
                e
            }
            Object(h.a)(b, a);
            var c = k(b);
            return Object(f.a)(b, [{
                        key: "addSpecificData",
                        value: function (a) {
                            this.wObject.getCounterAnimationManager().setAnimationQueueItem(this)
                        }
                    }, {
                        key: "_getAnimationToCalculateStartPoint",
                        value: function () {
                            return this.wObject.getCounterAnimationData()
                        }
                    }, {
                        key: "_animateWObject",
                        value: function () {
                            this.wObject.getCounterAnimationManager().animate()
                        }
                    }, {
                        key: "setCounterAnimationFinished",
                        value: function () {
                            this.animationStatus =
                                !0 === this.wObject.getCounterAnimationData().getOnlyOnce() ? e.a.DISABLED : e.a.FINISHED
                        }
                    }, {
                        key: "undoAnimation",
                        value: function () {
                            this.animationStatus = e.a.INITIAL
                        }
                    }, {
                        key: "dispose",
                        value: function () {
                            this.wObject.getCounterAnimationManager().setAnimationQueueItem(null)
                        }
                    }
                ]),
            b
        }
        (g.a)
    },
    36: function (g, c, b) {
        c.a = function (b) {
            return Object(k.a)(b) || Object(l.a)(b) || Object(f.a)(b) || Object(h.a)()
        };
        var k = b(387),
        l = b(388),
        f = b(161),
        h = b(389)
    },
    377: function (g, c, b) {
        c.a = {
            INNER_TEXT: "innerText"
        }
    },
    387: function (g, c, b) {
        c.a = function (b) {
            if (Array.isArray(b))
                return Object(k.a)(b)
        };
        var k = b(141)
    },
    388: function (g, c, b) {
        c.a = function (b) {
            $jscomp.initSymbol();
            $jscomp.initSymbol();
            $jscomp.initSymbolIterator();
            if ("undefined" != typeof Symbol && null != b[Symbol.iterator] || null != b["@@iterator"])
                return Array.from(b)
        }
    },
    389: function (g, c, b) {
        c.a = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
    },
    4: function (g, c, b) {
        c.a = function (b, c) {
            if (c && ("object" === Object(k.a)(c) || "function" == typeof c))
                return c;
            if (void 0 !== c)
                throw new TypeError("Derived constructors may only return object or undefined");
            return Object(l.a)(b)
        };
        var k = b(43),
        l = b(11)
    },
    403: function (g, c, b) {
        var k = b(408),
        l = b(409);
        g.exports = function (b, c, d) {
            d = c && d || 0;
            "string" == typeof b && (c = "binary" === b ? Array(16) : null, b = null);
            var a = (b = b || {}).random || (b.rng || k)();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, c)
                for (b = 0; 16 > b; ++b)
                    c[d + b] = a[b];
            return c || l(a)
        }
    },
    407: function (g, c, b) {
        c.a = function (b, c) {
            for (; !Object.prototype.hasOwnProperty.call(b, c) && null !== (b = Object(k.a)(b)); );
            return b
        };
        var k = b(2)
    },
    408: function (g, c) {
        var b = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (b) {
            var k = new Uint8Array(16);
            g.exports = function () {
                return b(k),
                k
            }
        } else {
            var l = Array(16);
            g.exports = function () {
                for (var b, c = 0; 16 > c; c++)
                    0 == (3 & c) && (b = 4294967296 * Math.random()), l[c] = b >>> ((3 & c) << 3) & 255;
                return l
            }
        }
    },
    409: function (g, c) {
        var b = [];
        for (c = 0; 256 >
            c; ++c)
            b[c] = (c + 256).toString(16).substr(1);
        g.exports = function (c, g) {
            g = g || 0;
            return [b[c[g++]], b[c[g++]], b[c[g++]], b[c[g++]], "-", b[c[g++]], b[c[g++]], "-", b[c[g++]], b[c[g++]], "-", b[c[g++]], b[c[g++]], "-", b[c[g++]], b[c[g++]], b[c[g++]], b[c[g++]], b[c[g++]], b[c[g++]]].join("")
        }
    },
    42: function (g, c, b) {
        b.d(c, "a", function () {
            return f
        });
        var k = b(0),
        l = b(1),
        f = function () {
            function b(c, a) {
                Object(k.a)(this, b);
                this.x = this.y = 0;
                webwave.isNumberAndNotNaN(c) ? (this.x = c, webwave.isNumberAndNotNaN(a) && (this.y = a)) : webwave.isDef(c) &&
                (webwave.isNumberAndNotNaN(c.x) && (this.x = c.x), webwave.isNumberAndNotNaN(c.y) && (this.y = c.y))
            }
            return Object(l.a)(b, [{
                        key: "getX",
                        value: function () {
                            return this.x
                        }
                    }, {
                        key: "setX",
                        value: function (b) {
                            this.x = b
                        }
                    }, {
                        key: "getY",
                        value: function () {
                            return this.y
                        }
                    }, {
                        key: "setY",
                        value: function (b) {
                            this.y = b
                        }
                    }, {
                        key: "subtract",
                        value: function (b) {
                            return this.x -= b.x,
                            this.y -= b.y,
                            this
                        }
                    }, {
                        key: "add",
                        value: function (b) {
                            return this.x += b.x,
                            this.y += b.y,
                            this
                        }
                    }, {
                        key: "multiply",
                        value: function (b) {
                            return this.x *= b,
                            this.y *= b,
                            this
                        }
                    }, {
                        key: "serialize",
                        value: function () {
                            return {
                                x: this.x,
                                y: this.y
                            }
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b({
                                x: this.x,
                                y: this.y
                            })
                        }
                    }, {
                        key: "equals",
                        value: function (b) {
                            return this.x === b.x && this.y === b.y
                        }
                    }, {
                        key: "lt",
                        value: function (b) {
                            return this.x < b.x && this.y < b.y
                        }
                    }, {
                        key: "lte",
                        value: function (b) {
                            return this.x <= b.x && this.y <= b.y
                        }
                    }, {
                        key: "gt",
                        value: function (b) {
                            return this.x > b.x && this.y > b.y
                        }
                    }, {
                        key: "gte",
                        value: function (b) {
                            return this.x >= b.x && this.y >= b.y
                        }
                    }, {
                        key: "toString",
                        value: function () {
                            return "{".concat(this.x, ",").concat(this.y,
                                "}}")
                        }
                    }
                ], [{
                        key: "deserialize",
                        value: function (c) {
                            return webwave.isNotDef(c) ? new b(0, 0) : new b(c.x, c.y)
                        }
                    }, {
                        key: "countDistance",
                        value: function (b, a) {
                            return Math.sqrt(Math.abs(b.getX() - a.getX()) * Math.abs(b.getY() - a.getY()))
                        }
                    }
                ]),
            b
        }
        ()
    },
    43: function (g, c, b) {
        function k(b) {
            "@babel/helpers - typeof";
            $jscomp.initSymbol();
            $jscomp.initSymbol();
            $jscomp.initSymbolIterator();
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (b) {
                return typeof b
            }
                 : function (b) {
                $jscomp.initSymbol();
                $jscomp.initSymbol();
                $jscomp.initSymbol();
                return b && "function" == typeof Symbol && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b
            })(b)
        }
        c.a = k
    },
    473: function (g, c, b) {
        g = function (b) {
            function c(a, b, e) {
                return Object.defineProperty(a, b, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                a[b]
            }
            function f(a, b, c, e) {
                b = Object.create((b && b.prototype instanceof d ? b : d).prototype);
                e = new p(e || []);
                return b._invoke = function (a, b, c) {
                    var e = K;
                    return function (d, f) {
                        if (e === L)
                            throw Error("Generator is already running");
                        if (e === H) {
                            if ("throw" ===
                                d)
                                throw f;
                            return w()
                        }
                        c.method = d;
                        for (c.arg = f; ; ) {
                            if (d = c.delegate)
                                if (d = r(d, c)) {
                                    if (d === z)
                                        continue;
                                    return d
                                }
                            if ("next" === c.method)
                                c.sent = c._sent = c.arg;
                            else if ("throw" === c.method) {
                                if (e === K)
                                    throw e = H, c.arg;
                                c.dispatchException(c.arg)
                            } else
                                "return" === c.method && c.abrupt("return", c.arg);
                            e = L;
                            d = h(a, b, c);
                            if ("normal" === d.type) {
                                if (e = c.done ? H : C, d.arg === z)
                                    continue;
                                return {
                                    value: d.arg,
                                    done: c.done
                                }
                            }
                            "throw" === d.type && (e = H, c.method = "throw", c.arg = d.arg)
                        }
                    }
                }
                (a, c, e),
                b
            }
            function h(a, b, c) {
                try {
                    return {
                        type: "normal",
                        arg: a.call(b, c)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            function d() {}
            function a() {}
            function e() {}
            function m(a) {
                ["next", "throw", "return"].forEach(function (b) {
                    c(a, b, function (a) {
                        return this._invoke(b, a)
                    })
                })
            }
            function g(a, b) {
                var c;
                this._invoke = function (e, d) {
                    function f() {
                        return new b(function (c, f) {
                            !function J(c, e, d, f) {
                                c = h(a[c], a, e);
                                if ("throw" !== c.type) {
                                    var m = c.arg;
                                    return (c = m.value) && "object" == typeof c && x.call(c, "__await") ? b.resolve(c.__await).then(function (a) {
                                        J("next", a, d, f)
                                    }, function (a) {
                                        J("throw", a, d, f)
                                    }) : b.resolve(c).then(function (a) {
                                        m.value = a;
                                        d(m)
                                    },
                                        function (a) {
                                        return J("throw", a, d, f)
                                    })
                                }
                                f(c.arg)
                            }
                            (e, d, c, f)
                        })
                    }
                    return c = c ? c.then(f, f) : f()
                }
            }
            function r(a, b) {
                var c = a.iterator[b.method];
                if (c === v) {
                    if (b.delegate = null, "throw" === b.method) {
                        if (a.iterator.return && (b.method = "return", b.arg = v, r(a, b), "throw" === b.method))
                            return z;
                        b.method = "throw";
                        b.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return z
                }
                c = h(c, a.iterator, b.arg);
                return "throw" === c.type ? (b.method = "throw", b.arg = c.arg, b.delegate = null, z) : (c = c.arg) ? c.done ? (b[a.resultName] = c.value, b.next =
                        a.nextLoc, "return" !== b.method && (b.method = "next", b.arg = v), b.delegate = null, z) : c : (b.method = "throw", b.arg = new TypeError("iterator result is not an object"), b.delegate = null, z)
            }
            function t(a) {
                var b = {
                    tryLoc: a[0]
                };
                1 in a && (b.catchLoc = a[1]);
                2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]);
                this.tryEntries.push(b)
            }
            function n(a) {
                var b = a.completion || {};
                b.type = "normal";
                delete b.arg;
                a.completion = b
            }
            function p(a) {
                this.tryEntries = [{
                        tryLoc: "root"
                    }
                ];
                a.forEach(t, this);
                this.reset(!0)
            }
            function u(a) {
                if (a) {
                    var b = a[F];
                    if (b)
                        return b.call(a);
                    if ("function" == typeof a.next)
                        return a;
                    if (!isNaN(a.length)) {
                        var c = -1,
                        b = function y() {
                            for (; ++c < a.length; )
                                if (x.call(a, c))
                                    return y.value = a[c], y.done = !1, y;
                            return y.value = v,
                            y.done = !0,
                            y
                        };
                        return b.next = b
                    }
                }
                return {
                    next: w
                }
            }
            function w() {
                return {
                    value: v,
                    done: !0
                }
            }
            $jscomp.initSymbol();
            $jscomp.initSymbol();
            var v,
            E = Object.prototype,
            x = E.hasOwnProperty,
            A = "function" == typeof Symbol ? Symbol : {},
            F = A.iterator || "@@iterator",
            I = A.asyncIterator || "@@asyncIterator",
            B = A.toStringTag || "@@toStringTag";
            try {
                c({}, "")
            } catch (M) {
                c = function (a,
                    b, c) {
                    return a[b] = c
                }
            }
            b.wrap = f;
            var K = "suspendedStart",
            C = "suspendedYield",
            L = "executing",
            H = "completed",
            z = {},
            A = {};
            A[F] = function () {
                return this
            };
            var D = Object.getPrototypeOf;
            (D = D && D(D(u([])))) && D !== E && x.call(D, F) && (A = D);
            var G = e.prototype = d.prototype = Object.create(A);
            return a.prototype = G.constructor = e,
            e.constructor = a,
            a.displayName = c(e, B, "GeneratorFunction"),
            b.isGeneratorFunction = function (b) {
                b = "function" == typeof b && b.constructor;
                return !!b && (b === a || "GeneratorFunction" === (b.displayName || b.name))
            },
            b.mark = function (a) {
                return Object.setPrototypeOf ?
                Object.setPrototypeOf(a, e) : (a.__proto__ = e, c(a, B, "GeneratorFunction")),
                a.prototype = Object.create(G),
                a
            },
            b.awrap = function (a) {
                return {
                    __await: a
                }
            },
            m(g.prototype),
            g.prototype[I] = function () {
                return this
            },
            b.AsyncIterator = g,
            b.async = function (a, c, e, d, m) {
                void 0 === m && (m = Promise);
                var h = new g(f(a, c, e, d), m);
                return b.isGeneratorFunction(c) ? h : h.next().then(function (a) {
                    return a.done ? a.value : h.next()
                })
            },
            m(G),
            c(G, B, "Generator"),
            G[F] = function () {
                return this
            },
            G.toString = function () {
                return "[object Generator]"
            },
            b.keys = function (a) {
                var b =
                    [],
                c;
                for (c in a)
                    b.push(c);
                return b.reverse(),
                function y() {
                    for (; b.length; ) {
                        var c = b.pop();
                        if (c in a)
                            return y.value = c, y.done = !1, y
                    }
                    return y.done = !0,
                    y
                }
            },
            b.values = u,
            p.prototype = {
                constructor: p,
                reset: function (a) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, this.method = "next", this.arg = v, this.tryEntries.forEach(n), !a)
                        for (var b in this)
                            "t" === b.charAt(0) && x.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = v)
                },
                stop: function () {
                    this.done = !0;
                    var a = this.tryEntries[0].completion;
                    if ("throw" ===
                        a.type)
                        throw a.arg;
                    return this.rval
                },
                dispatchException: function (a) {
                    function b(e, d) {
                        return f.type = "throw",
                        f.arg = a,
                        c.next = e,
                        d && (c.method = "next", c.arg = v),
                        !!d
                    }
                    if (this.done)
                        throw a;
                    for (var c = this, e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var d = this.tryEntries[e],
                        f = d.completion;
                        if ("root" === d.tryLoc)
                            return b("end");
                        if (d.tryLoc <= this.prev) {
                            var m = x.call(d, "catchLoc"),
                            h = x.call(d, "finallyLoc");
                            if (m && h) {
                                if (this.prev < d.catchLoc)
                                    return b(d.catchLoc, !0);
                                if (this.prev < d.finallyLoc)
                                    return b(d.finallyLoc)
                            } else if (m) {
                                if (this.prev <
                                    d.catchLoc)
                                    return b(d.catchLoc, !0)
                            } else {
                                if (!h)
                                    throw Error("try statement without catch or finally");
                                if (this.prev < d.finallyLoc)
                                    return b(d.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (a, b) {
                    for (var c = this.tryEntries.length - 1; 0 <= c; --c) {
                        var e = this.tryEntries[c];
                        if (e.tryLoc <= this.prev && x.call(e, "finallyLoc") && this.prev < e.finallyLoc) {
                            var d = e;
                            break
                        }
                    }
                    d && ("break" === a || "continue" === a) && d.tryLoc <= b && b <= d.finallyLoc && (d = null);
                    c = d ? d.completion : {};
                    return c.type = a,
                    c.arg = b,
                    d ? (this.method = "next", this.next = d.finallyLoc, z) : this.complete(c)
                },
                complete: function (a, b) {
                    if ("throw" === a.type)
                        throw a.arg;
                    return "break" === a.type || "continue" === a.type ? this.next = a.arg : "return" === a.type ? (this.rval = this.arg = a.arg, this.method = "return", this.next = "end") : "normal" === a.type && b && (this.next = b),
                    z
                },
                finish: function (a) {
                    for (var b = this.tryEntries.length - 1; 0 <= b; --b) {
                        var c = this.tryEntries[b];
                        if (c.finallyLoc === a)
                            return this.complete(c.completion, c.afterLoc), n(c), z
                    }
                },
                catch : function (a) {
                    for (var b = this.tryEntries.length - 1; 0 <= b; --b) {
                        var c = this.tryEntries[b];
                        if (c.tryLoc ===
                            a) {
                            a = c.completion;
                            if ("throw" === a.type) {
                                var e = a.arg;
                                n(c)
                            }
                            return e
                        }
                    }
                    throw Error("illegal catch attempt");
                },
            delegateYield: function (a, b, c) {
                return this.delegate = {
                    iterator: u(a),
                    resultName: b,
                    nextLoc: c
                },
                "next" === this.method && (this.arg = v),
                z
            }
        },
        b
    }
    (g.exports);
    try {
        regeneratorRuntime = g
    } catch (k) {
        Function("r", "regeneratorRuntime = r")(g)
    }
},
5702: function (g, c, b) {
    function k(a, b) {
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbolIterator();
        var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
        if (!c) {
            if (Array.isArray(a) || (c = function (a, b) {
                    if (a) {
                        if ("string" == typeof a)
                            return l(a, b);
                            var c = Object.prototype.toString.call(a).slice(8, -1);
                            "Object" === c && a.constructor && (c = a.constructor.name);
                            if ("Map" === c || "Set" === c)
                                return Array.from(a);
                                if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
                                    return l(a, b)
                            }
                        }
                            (a)) || b && a && "number" == typeof a.length) {
                        c && (a = c);
                        var e = 0;
                        b = function () {};
                        return {
                            s: b,
                            n: function () {
                                return e >= a.length ? {
                                    done: !0
                                }
                                 : {
                                    done: !1,
                                    value: a[e++]
                                }
                            },
                            e: function (a) {
                                throw a;
                            },
                            f: b
                        }
                    }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var d,
            f = !0,
            m = !1;
            return {
                s: function () {
                    c = c.call(a)
                },
                n: function () {
                    var a = c.next();
                    return f = a.done,
                    a
                },
                e: function (a) {
                    m = !0;
                    d = a
                },
                f: function () {
                    try {
                        f || null == c.return || c.return()
                    } finally {
                        if (m)
                            throw d;
                    }
                }
            }
        }
        function l(a, b) {
            (null == b || b > a.length) && (b = a.length);
            for (var c = 0, e = Array(b); c < b; c++)
                e[c] = a[c];
            return e
        }
        function f(a) {
            var b = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,
                            [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var c;
                c = Object(q.a)(a);
                if (b) {
                    var e = Object(q.a)(this).constructor;
                    c = Reflect.construct(c, arguments, e)
                } else
                    c = c.apply(this, arguments);
                return Object(m.a)(this, c)
            }
        }
        b.d(c, "a", function () {
            return x
        });
        var h = b(35),
        d = b(0),
        a = b(1),
        e = b(3),
        m = b(4),
        q = b(2);
        g = b(34);
        var r = b.n(g),
        t = b(2666),
        n = b(1997),
        p = b(5703),
        u = b(1771),
        w = b(2315),
        v = b(1969),
        E = b(1669);
        b = b(2884);
        var x = function (b) {
            function c() {
                var a;
                return Object(d.a)(this, c),
                (a = m.call(this)).pageService = void 0,
                a.objectService =
                    void 0,
                a.rwdService = void 0,
                a.interactionsService = void 0,
                a._objectAnimationsEnabled = !0,
                a._animatedElementsArray = [],
                a
            }
            Object(e.a)(c, b);
            var m = f(c);
            return Object(a.a)(c, [{
                        key: "initObjectsAnimations",
                        value: function () {
                            var a,
                            b = k(this.objectService.findAllWObjects());
                            try {
                                for (b.s(); !(a = b.n()).done; ) {
                                    var c = a.value;
                                    c.setAnimationPlayer(new w.a(c));
                                    !0 === c.getDomObject()[0].classList.contains(p.a.ANIMATED_OBJECT_CLASS) && this.addAnimationToElement(c);
                                    var e,
                                    d = k(c.getInnerElements());
                                    try {
                                        for (d.s(); !(e = d.n()).done; ) {
                                            var f =
                                                e.value;
                                            f.setAnimationPlayer(new w.a(f))
                                        }
                                    } catch (m) {
                                        d.e(m)
                                    } finally {
                                        d.f()
                                    }
                                }
                            } catch (m) {
                                b.e(m)
                            } finally {
                                b.f()
                            }
                        }
                    }, {
                        key: "initWCounters",
                        value: function () {
                            var a = this;
                            this.objectService.findAllWCounters().forEach(function (b) {
                                a.addCounterToQueue(b)
                            })
                        }
                    }, {
                        key: "addAnimationToElement",
                        value: function (a) {
                            -1 === this._animatedElementsArray.indexOf(a) && this._animatedElementsArray.push(a)
                        }
                    }, {
                        key: "performAnimations",
                        value: function () {
                            if (0 < this._currentAnimationsArray.length) {
                                var a,
                                b = this.pageService.getPageCanvas().getViewPort(),
                                c = this.pageService.getAdvertisementHeight();
                                b.getSize().subtractHeight(c);
                                for (c = 0; c < this._currentAnimationsArray.length; c++)
                                    (a = this._currentAnimationsArray[c]).isAnimationInitial() ? a.canDoAnimation(b) && a.doAnimation() : a.isAnimationFinished() && a.canUndoAnimation(b) && a.undoAnimation()
                            }
                        }
                    }, {
                        key: "updateObjectsVisibilityAnimationsArray",
                        value: function () {
                            var a = Object(h.a)(r.a.mark(function C() {
                                        var a,
                                        b,
                                        c,
                                        e,
                                        d = this;
                                        return r.a.wrap(function (f) {
                                            for (; ; )
                                                switch (f.prev = f.next) {
                                                case 0:
                                                    this._disposeShowAnimations();
                                                    0 < (a = (a = this._animatedElementsArray).filter(function (a) {
                                                            return a.isToAnimate()
                                                        })).length && (a = Object(v.b)(a));
                                                    b = new E.a;
                                                    c = function (c) {
                                                        b.addToQueue(function () {
                                                            d._showAnimations.push(new n.a({
                                                                    interactionsService: d.interactionsService,
                                                                    wObject: a[c],
                                                                    hideWObject: !0
                                                                }))
                                                        })
                                                    };
                                                    for (e = 0; e < a.length; e++)
                                                        c(e);
                                                    return b.addToQueue(function () {
                                                        d._updateCurrentAnimationsArray()
                                                    }),
                                                    f.abrupt("return", new Promise(function (a) {
                                                            b.addToQueue(function () {
                                                                a()
                                                            });
                                                            b.dequeue()
                                                        }));
                                                case 9:
                                                case "end":
                                                    return f.stop()
                                                }
                                        }, C, this)
                                    }));
                            return function () {
                                return a.apply(this,
                                    arguments)
                            }
                        }
                        ()
                    }, {
                        key: "updateCurrentObjectAnimationsArray",
                        value: function () {
                            var a = Object(h.a)(r.a.mark(function C() {
                                        return r.a.wrap(function (a) {
                                            for (; ; )
                                                switch (a.prev = a.next) {
                                                case 0:
                                                    return a.next = 2,
                                                    this.updateObjectsVisibilityAnimationsArray();
                                                case 2:
                                                    this.performAnimations();
                                                case 3:
                                                case "end":
                                                    return a.stop()
                                                }
                                        }, C, this)
                                    }));
                            return function () {
                                return a.apply(this, arguments)
                            }
                        }
                        ()
                    }, {
                        key: "updateCurrentObjectAnimationsArrayStartPoints",
                        value: function () {
                            for (var a = 0; a < this._currentAnimationsArray.length; a++)
                                this._currentAnimationsArray[a].updateAnimationStartPoint()
                        }
                    }, {
                        key: "onPageAreaScrollChange",
                        value: function (a, b) {
                            b !== a && this.performAnimations()
                        }
                    }, {
                        key: "onRwdModeChange",
                        value: function () {
                            var a = Object(h.a)(r.a.mark(function C(a) {
                                        return r.a.wrap(function (b) {
                                            for (; ; )
                                                switch (b.prev = b.next) {
                                                case 0:
                                                    return this.loadAnimationsForRwd(a),
                                                    b.next = 3,
                                                    this.updateCurrentObjectAnimationsArray();
                                                case 3:
                                                case "end":
                                                    return b.stop()
                                                }
                                        }, C, this)
                                    }));
                            return function (b) {
                                return a.apply(this, arguments)
                            }
                        }
                        ()
                    }, {
                        key: "setObjectService",
                        value: function (a) {
                            this.objectService = a
                        }
                    }, {
                        key: "setPageService",
                        value: function (a) {
                            this.pageService = a
                        }
                    }, {
                        key: "setRwdService",
                        value: function (a) {
                            this.rwdService = a
                        }
                    }, {
                        key: "setInteractionsService",
                        value: function (a) {
                            this.interactionsService = a
                        }
                    }, {
                        key: "loadAnimationsForRwd",
                        value: function (a) {
                            var b,
                            c = k(this.objectService.findAllWObjects());
                            try {
                                for (c.s(); !(b = c.n()).done; )
                                    this._loadObjectAnimationForRwd(b.value, a)
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        }
                    }, {
                        key: "_loadObjectAnimationForRwd",
                        value: function (a, b) {
                            var c = this.rwdService.searchForClosestObjectByRwdMode(a.getRwdProperties(),
                                    b);
                            webwave.isDefAndNotNull(c) && (a.setAnimation(u.a.createObjectAnimationByMap(c.animation)), a.setHideAnimation(u.a.createObjectAnimationByMap(c.hideAnimation)), a.setAnimationEnabled(webwave.isDef(c.animation)), a.setHideAnimationEnabled(webwave.isDef(c.hideAnimation)), a.setScrollAnimationEnabled(!0 === c.animationOnScrollEnabled), webwave.isDef(c.animationOnScroll) && a.setAnimationOnScroll(t.a.deserialize(c.animationOnScroll)), a.setAnimationsInitliazed(!0));
                            var e;
                            a = k(a.getInnerElements());
                            try {
                                for (a.s(); !(e =
                                            a.n()).done; ) {
                                    var d = e.value,
                                    f = d.getRwdAnimationMaps()[b.getId()];
                                    d.setAnimation(u.a.createObjectAnimationByMap(f))
                                }
                            } catch (m) {
                                a.e(m)
                            } finally {
                                a.f()
                            }
                        }
                    }
                ]),
            c
        }
        (Object(b.a)(Object))
    },
    5703: function (g, c, b) {
        c.a = {
            ANIMATED_OBJECT_CLASS: "ww_animated"
        }
    },
    5709: function (g, c, b) {
        b.d(c, "a", function () {
            return d
        });
        var k = b(0),
        l = b(1),
        f = b(2280),
        h = b(1796),
        d = function () {
            function a() {
                Object(k.a)(this, a);
                this.app = void 0
            }
            return Object(l.a)(a, [{
                        key: "init",
                        value: function () {
                            var a = this,
                            b = new CustomEvent(f.a);
                            b.service = this;
                            document.dispatchEvent(b);
                            document.addEventListener(h.a, function (b) {
                                a.inject(b.context)
                            })
                        }
                    }, {
                        key: "getApp",
                        value: function () {
                            return this.app
                        }
                    }, {
                        key: "globalWebsiteData",
                        value: function () {
                            return this.getApp().getGlobalWebsiteData()
                        }
                    }, {
                        key: "getServiceFromApp",
                        value: function (a) {
                            return this.getApp().getServiceFromContainer(a)
                        }
                    }, {
                        key: "inject",
                        value: function (a) {
                            this.app = a;
                            this.run()
                        }
                    }, {
                        key: "run",
                        value: function () {}
                    }, {
                        key: "injectDependencies",
                        value: function () {}
                    }
                ]),
            a
        }
        ()
    },
    65: function (g, c, b) {
        c.a = {
            HORIZONTAL: "horizontal",
            VERTICAL: "vertical"
        }
    },
    6670: function (g, c, b) {
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        (new(b(6671).a)).init()
    },
    6671: function (g, c, b) {
        function k(b) {
            var c = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                } catch (a) {
                    return !1
                }
            }
            ();
            return function () {
                var d;
                d = Object(e.a)(b);
                if (c) {
                    var f = Object(e.a)(this).constructor;
                    d = Reflect.construct(d, arguments, f)
                } else
                    d =
                        d.apply(this, arguments);
                return Object(a.a)(this, d)
            }
        }
        b.d(c, "a", function () {
            return v
        });
        var l = b(35),
        f = b(0),
        h = b(1),
        d = b(3),
        a = b(4),
        e = b(2);
        g = b(34);
        var m = b.n(g);
        g = b(5709);
        var q = b(6672),
        r = b(5702),
        t = b(6673),
        n = b(6674),
        p = (b(26), b(998)),
        u = b(16),
        w = b(1669),
        v = function (a) {
            function b() {
                var a;
                Object(f.a)(this, b);
                for (var e = arguments.length, d = Array(e), m = 0; m < e; m++)
                    d[m] = arguments[m];
                return (a = c.call.apply(c, [this].concat(d))).animationService = void 0,
                a.kenBurnsService = void 0,
                a.objectService = void 0,
                a.wObjectHoverAnimationService =
                    void 0,
                a.wMenuIconAnimatorService = void 0,
                a
            }
            Object(d.a)(b, a);
            var c = k(b);
            return Object(h.a)(b, [{
                        key: "run",
                        value: function () {
                            var a = this,
                            b = new w.a;
                            b.addToQueue(function () {
                                a.injectDependencies()
                            });
                            b.addToQueue(function () {
                                a._initAnimations()
                            });
                            b.dequeue()
                        }
                    }, {
                        key: "injectDependencies",
                        value: function () {
                            this.objectService = this.getServiceFromApp(p.a.ObjectService);
                            this.animationService = new r.a;
                            this.animationService.setObjectService(this.objectService);
                            this.animationService.setPageService(this.getServiceFromApp(p.a.PageService));
                            this.animationService.setInteractionsService(this.getServiceFromApp(u.a.InteractionsService));
                            this.getServiceFromApp(p.a.PublicatedScrollService).addScrollListener(this.animationService);
                            this.getServiceFromApp(p.a.GroupService).setObjectAnimationService(this.animationService);
                            var a = this.getServiceFromApp(p.a.RwdService);
                            a.addRwdModeChangeListener(this.animationService);
                            this.animationService.setRwdService(a);
                            this.kenBurnsService = new q.a;
                            this.wObjectHoverAnimationService = new n.a;
                            this.wObjectHoverAnimationService.setObjectService(this.objectService);
                            this.wMenuIconAnimatorService = new t.a;
                            this.wMenuIconAnimatorService.setObjectService(this.objectService)
                        }
                    }, {
                        key: "_initAnimations",
                        value: function () {
                            this._initShowHideObjectAnimations();
                            this._initWCounters();
                            this._initKenBurns();
                            this._initObjectHoverAnimations();
                            this._initWMenuIconTransitionAnimations()
                        }
                    }, {
                        key: "_initShowHideObjectAnimations",
                        value: function () {
                            var a = this;
                            this.animationService.initObjectsAnimations();
                            this.animationService.loadAnimationsForRwd(this.getServiceFromApp(p.a.RwdService).getCurrentRwdMode());
                            webwave.addLoadListener(Object(l.a)(m.a.mark(function B() {
                                        return m.a.wrap(function (b) {
                                            for (; ; )
                                                switch (b.prev = b.next) {
                                                case 0:
                                                    return b.next = 2,
                                                    a.animationService.updateCurrentObjectAnimationsArray();
                                                case 2:
                                                case "end":
                                                    return b.stop()
                                                }
                                        }, B)
                                    })))
                        }
                    }, {
                        key: "_initWCounters",
                        value: function () {
                            this.animationService.initWCounters()
                        }
                    }, {
                        key: "_initKenBurns",
                        value: function () {
                            this.kenBurnsService.setObjectService(this.objectService);
                            this.kenBurnsService.initElements()
                        }
                    }, {
                        key: "_initObjectHoverAnimations",
                        value: function () {
                            this.wObjectHoverAnimationService.initAnimationForObjects()
                        }
                    }, {
                        key: "_initWMenuIconTransitionAnimations",
                        value: function () {
                            this.wMenuIconAnimatorService.initAnimationForWMenus()
                        }
                    }, {
                        key: "_getServiceFromApp",
                        value: function (a) {
                            return this.app.getServiceFromContainer(a)
                        }
                    }
                ]),
            b
        }
        (g.a)
    },
    6672: function (g, c, b) {
        function k(a, b) {
            $jscomp.initSymbol();
            $jscomp.initSymbol();
            $jscomp.initSymbolIterator();
            var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
            if (!c) {
                if (Array.isArray(a) || (c = function (a, b) {
                        if (a) {
                            if ("string" == typeof a)
                                return l(a, b);
                                var c = Object.prototype.toString.call(a).slice(8,
                                        -1);
                                "Object" === c && a.constructor && (c = a.constructor.name);
                                if ("Map" === c || "Set" === c)
                                    return Array.from(a);
                                if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
                                    return l(a, b)
                            }
                        }
                            (a)) || b && a && "number" == typeof a.length) {
                        c && (a = c);
                        var d = 0;
                        b = function () {};
                        return {
                            s: b,
                            n: function () {
                                return d >= a.length ? {
                                    done: !0
                                }
                                 : {
                                    done: !1,
                                    value: a[d++]
                                }
                            },
                            e: function (a) {
                                throw a;
                            },
                            f: b
                        }
                    }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var f,
            h = !0,
            g = !1;
            return {
                s: function () {
                    c = c.call(a)
                },
                n: function () {
                    var a = c.next();
                    return h = a.done,
                    a
                },
                e: function (a) {
                    g = !0;
                    f = a
                },
                f: function () {
                    try {
                        h || null == c.return || c.return()
                    } finally {
                        if (g)
                            throw f;
                    }
                }
            }
        }
        function l(a, b) {
            (null == b || b > a.length) && (b = a.length);
            for (var c = 0, d = Array(b); c < b; c++)
                d[c] = a[c];
            return d
        }
        b.d(c, "a", function () {
            return a
        });
        var f = b(0),
        h = b(1),
        d = b(3020),
        a = function () {
            function a() {
                Object(f.a)(this, a);
                this.kenBurnsEffects = []
            }
            return Object(h.a)(a, [{
                        key: "initElements",
                        value: function () {
                            var a,
                            b = k(this.objectService.findAllWElementsSupportedKenBurns());
                            try {
                                for (b.s(); !(a = b.n()).done; ) {
                                    var c = a.value;
                                    c.initKenBurnsType(this);
                                    c.initKenBurns()
                                }
                            } catch (e) {
                                b.e(e)
                            } finally {
                                b.f()
                            }
                        }
                    }, {
                        key: "initKenBurnsEffectOnElement",
                        value: function (a, b) {
                            a = new d.a({
                                type: b,
                                targetElement: a
                            });
                            return a.initEffect(),
                            this.kenBurnsEffects.push(a),
                            a
                        }
                    }, {
                        key: "setObjectService",
                        value: function (a) {
                            this.objectService = a
                        }
                    }
                ]),
            a
        }
        ()
    },
    6673: function (g, c, b) {
        function k(a, b) {
            $jscomp.initSymbol();
            $jscomp.initSymbol();
            $jscomp.initSymbolIterator();
            var c = "undefined" != typeof Symbol && a[Symbol.iterator] ||
                a["@@iterator"];
            if (!c) {
                if (Array.isArray(a) || (c = function (a, b) {
                        if (a) {
                            if ("string" == typeof a)
                                return l(a, b);
                                var c = Object.prototype.toString.call(a).slice(8, -1);
                                "Object" === c && a.constructor && (c = a.constructor.name);
                                if ("Map" === c || "Set" === c)
                                    return Array.from(a);
                                if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
                                    return l(a, b)
                            }
                        }
                            (a)) || b && a && "number" == typeof a.length) {
                        c && (a = c);
                        var e = 0;
                        b = function () {};
                        return {
                            s: b,
                            n: function () {
                                return e >= a.length ? {
                                    done: !0
                                }
                                 : {
                                    done: !1,
                                    value: a[e++]
                                }
                            },
                            e: function (a) {
                                throw a;
                            },
                            f: b
                        }
                    }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var d,
            f = !0,
            h = !1;
            return {
                s: function () {
                    c = c.call(a)
                },
                n: function () {
                    var a = c.next();
                    return f = a.done,
                    a
                },
                e: function (a) {
                    h = !0;
                    d = a
                },
                f: function () {
                    try {
                        f || null == c.return || c.return()
                    } finally {
                        if (h)
                            throw d;
                    }
                }
            }
        }
        function l(a, b) {
            (null == b || b > a.length) && (b = a.length);
            for (var c = 0, e = Array(b); c < b; c++)
                e[c] = a[c];
            return e
        }
        b.d(c, "a", function () {
            return e
        });
        var f = b(0),
        h = b(1),
        d = b(2853),
        a = b(2700),
        e = function () {
            function b() {
                Object(f.a)(this, b)
            }
            return Object(h.a)(b, [{
                        key: "initAnimationForWMenus",
                        value: function () {
                            var b,
                            c = k(this.objectService.findAllWMenus());
                            try {
                                for (c.s(); !(b = c.n()).done; ) {
                                    var e = b.value;
                                    e.setMenuIconTransitionAnimator(new d.a(e, {
                                            animationData: {
                                                type: e.getMobileMenuImageAnimationType(),
                                                duration: a.a.DEFAULT_MOBILE_MENU_ANIMATION_DURATION
                                            }
                                        }))
                                }
                            } catch (f) {
                                c.e(f)
                            } finally {
                                c.f()
                            }
                        }
                    }, {
                        key: "setObjectService",
                        value: function (a) {
                            this.objectService = a
                        }
                    }
                ]),
            b
        }
        ()
    },
    6674: function (g,
        c, b) {
        function k(a, b) {
            $jscomp.initSymbol();
            $jscomp.initSymbol();
            $jscomp.initSymbolIterator();
            var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
            if (!c) {
                if (Array.isArray(a) || (c = function (a, b) {
                        if (a) {
                            if ("string" == typeof a)
                                return l(a, b);
                                var c = Object.prototype.toString.call(a).slice(8, -1);
                                "Object" === c && a.constructor && (c = a.constructor.name);
                                if ("Map" === c || "Set" === c)
                                    return Array.from(a);
                                if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
                                    return l(a, b)
                            }
                        }
                            (a)) || b && a && "number" ==
                        typeof a.length) {
                        c && (a = c);
                        var d = 0;
                        b = function () {};
                        return {
                            s: b,
                            n: function () {
                                return d >= a.length ? {
                                    done: !0
                                }
                                 : {
                                    done: !1,
                                    value: a[d++]
                                }
                            },
                            e: function (a) {
                                throw a;
                            },
                            f: b
                        }
                    }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var f,
            h = !0,
            g = !1;
            return {
                s: function () {
                    c = c.call(a)
                },
                n: function () {
                    var a = c.next();
                    return h = a.done,
                    a
                },
                e: function (a) {
                    g = !0;
                    f = a
                },
                f: function () {
                    try {
                        h || null == c.return || c.return()
                    } finally {
                        if (g)
                            throw f;
                    }
                }
            }
        }
        function l(a, b) {
            (null == b || b > a.length) && (b = a.length);
            for (var c = 0, d = Array(b); c < b; c++)
                d[c] = a[c];
            return d
        }
        b.d(c, "a", function () {
            return a
        });
        var f = b(0),
        h = b(1),
        d = b(2835),
        a = function () {
            function a() {
                Object(f.a)(this, a)
            }
            return Object(h.a)(a, [{
                        key: "initAnimationForObjects",
                        value: function () {
                            var a,
                            b = k(this.objectService.findAllWObjects());
                            try {
                                for (b.s(); !(a = b.n()).done; ) {
                                    var c = a.value;
                                    c.setHoverAnimator(new d.a(c, c.getHoverAnimatorData()))
                                }
                            } catch (e) {
                                b.e(e)
                            } finally {
                                b.f()
                            }
                        }
                    }, {
                        key: "setObjectService",
                        value: function (a) {
                            this.objectService =
                                a
                        }
                    }
                ]),
            a
        }
        ()
    },
    8519: function (g, c, b) {
        var k = b(8538),
        l = b(8522),
        f = b(8540),
        h = b(8541),
        d = b(8542),
        a = b(8523),
        e = b(8543),
        m = b(8524),
        q = b(8544),
        r = b(8545),
        t = b(8546),
        n = b(8547),
        p = b(8548),
        u = b(8549),
        w = (b(8550), b(8526)),
        v = b(8551),
        E = b(8552),
        x = b(8553),
        A = b(8525),
        F = b(8554),
        I = b(8555),
        B = b(8556);
        b.d(c, "a", function () {
            return l.a
        });
        b.d(c, "b", function () {
            return f.a
        });
        b.d(c, "c", function () {
            return h.a
        });
        b.d(c, "d", function () {
            return d.a
        });
        b.d(c, "e", function () {
            return a.a
        });
        b.d(c, "f", function () {
            return e.a
        });
        b.d(c, "g", function () {
            return m.a
        });
        b.d(c, "h", function () {
            return q.a
        });
        b.d(c, "i", function () {
            return r.a
        });
        b.d(c, "j", function () {
            return t.a
        });
        b.d(c, "k", function () {
            return n.a
        });
        b.d(c, "l", function () {
            return p.a
        });
        b.d(c, "m", function () {
            return u.a
        });
        b.d(c, "n", function () {
            return w.a
        });
        b.d(c, "o", function () {
            return v.a
        });
        b.d(c, "p", function () {
            return E.a
        });
        b.d(c, "q", function () {
            return x.a
        });
        b.d(c, "r", function () {
            return A.a
        });
        b.d(c, "s", function () {
            return F.a
        });
        b.d(c, "t", function () {
            return k
        });
        b.d(c, "u", function () {
            return I.a
        });
        b.d(c, "v", function () {
            return B.a
        })
    },
    8522: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(8539),
        h = (b.n(f), function () {
            function b(a) {
                (Object(k.a)(this, b), this.r = 0, this.g = 0, this.b = 0, this.a = 0, webwave.isString(a)) ? (a = Object(f.parseCSSColor)(a), null !== a && (this.r = a[0], this.g = a[1], this.b = a[2], this.a = a[3])) : webwave.isDef(a) && (webwave.isNumberAndNotNaN(a.r) && (this.r = a.r), webwave.isNumberAndNotNaN(a.g) && (this.g = a.g), webwave.isNumberAndNotNaN(a.b) && (this.b = a.b), webwave.isNumberAndNotNaN(a.a) && (this.a = a.a))
            }
            return Object(l.a)(b,
                [{
                        key: "toRgbaString",
                        value: function () {
                            return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")"
                        }
                    }, {
                        key: "toRgbString",
                        value: function () {
                            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
                        }
                    }, {
                        key: "subtract",
                        value: function (a) {
                            return this.r -= a.r,
                            this.g -= a.g,
                            this.b -= a.b,
                            this.a -= a.a,
                            this
                        }
                    }, {
                        key: "add",
                        value: function (a) {
                            return this.r += a.r,
                            this.g += a.g,
                            this.b += a.b,
                            this.a += a.a,
                            this
                        }
                    }, {
                        key: "multiply",
                        value: function (a) {
                            return this.r = Math.round(this.r * a),
                            this.g = Math.round(this.g * a),
                            this.b = Math.round(this.b * a),
                            this.multiplyAlpha(a),
                            this
                        }
                    }, {
                        key: "multiplyAlpha",
                        value: function (a) {
                            this.a *= a
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b(this)
                        }
                    }, {
                        key: "invert",
                        value: function () {
                            this.r = 255 - this.r;
                            this.g = 255 - this.g;
                            this.b = 255 - this.b
                        }
                    }, {
                        key: "randomizeColor",
                        value: function () {
                            this.r = Math.floor(255 * Math.random());
                            this.g = Math.floor(255 * Math.random());
                            this.b = Math.floor(255 * Math.random());
                            this.a = 1
                        }
                    }
                ], [{
                        key: "rgb2hex",
                        value: function (a) {
                            return webwave.isNotString(a) ? "#000000" : -1 != a.indexOf("#") ? a : null != (a = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ?
                            "#" + b._hex(a[1]) + b._hex(a[2]) + b._hex(a[3]) : ""
                        }
                    }, {
                        key: "hex2rgb",
                        value: function (a) {
                            if (webwave.isNotString(a))
                                return "rgb(0, 0, 0)";
                            var b = 0,
                            c = 0,
                            d = 0;
                            return 4 == a.length ? (b = "0x" + a[1] + a[1], c = "0x" + a[2] + a[2], d = "0x" + a[3] + a[3]) : 7 == a.length && (b = "0x" + a[1] + a[2], c = "0x" + a[3] + a[4], d = "0x" + a[5] + a[6]),
                            "rgb(" + +b + ", " + +c + ", " + +d + ")"
                        }
                    }, {
                        key: "hex2Rgba",
                        value: function (a, b) {
                            var c = (a = a.slice(-6)).slice(0, 2),
                            d = a.slice(2, 4);
                            a = a.slice(4);
                            return "rgba(" + parseInt(c, 16) + "," + parseInt(d, 16) + "," + parseInt(a, 16) + "," + b + ")"
                        }
                    }, {
                        key: "hex2RgbObject",
                        value: function (a) {
                            return a = a.slice(-6), {
                                r: parseInt(a.slice(0, 2), 16),
                                g: parseInt(a.slice(2, 4), 16),
                                b: parseInt(a.slice(4), 16)
                            }
                        }
                    }, {
                        key: "isHex",
                        value: function (a) {
                            return /^#[0-9A-F]{3,6}$/i.test(a)
                        }
                    }, {
                        key: "isRgba",
                        value: function (a) {
                            return /^rgba\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/.test(a)
                        }
                    }, {
                        key: "isRgb",
                        value: function (a) {
                            return /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.test(a)
                        }
                    }, {
                        key: "rgb2hsl",
                        value: function (a) {
                            if (webwave.isNotString(a))
                                return {
                                    H: 0,
                                    S: 0,
                                    L: 0
                                };
                            "#" === a[0] && (a = this.hex2rgb(a));
                            var b,
                            c = 0,
                            d = 0;
                            b = 0;
                            c = (b = a.slice(4, -1).split(",").map(function (a) {
                                    return +a
                                }))[0];
                            d = b[1];
                            b = b[2];
                            c /= 255;
                            d /= 255;
                            b /= 255;
                            a = Math.max(c, d, b);
                            var f = a - Math.min(c, d, b),
                            c = f ? a === c ? (d - b) / f : a === d ? 2 + (b - c) / f : 4 + (c - d) / f : 0;
                            return {
                                H: 0 > 60 * c ? 60 * c + 360 : 60 * c,
                                S: 100 * (f ? .5 >= a ? f / (2 * a - f) : f / (2 - (2 * a - f)) : 0),
                                L: 100 * (2 * a - f) / 2
                            }
                        }
                    }, {
                        key: "_hex",
                        value: function (a) {
                            return null !== a ? ("0" + parseInt(a).toString(16)).slice(-2) : "00"
                        }
                    }, {
                        key: "rgba2Rgb",
                        value: function (a) {
                            a = a.replace(/[^\d,]/g, "").split(",");
                            return "rgb(".concat(a[0], ", ").concat(a[1],
                                ", ").concat(a[2], ")")
                        }
                    }, {
                        key: "obtainRgbValue",
                        value: function (a) {
                            return b.isHex(a) ? b.hex2rgb(a) : b.isRgba(a) ? b.rgba2Rgb(a) : a
                        }
                    }, {
                        key: "obtainHexValue",
                        value: function (a) {
                            b.isRgb(a) ? a = b.rgb2hex(a) : b.isRgba(a) && (a = b.rgba2Rgb(a), a = b.rgb2hex(a));
                            return a
                        }
                    }
                ]),
            b
        }
            ())
    },
    8523: function (g, c, b) {
        c.a = {
            TOP: "top",
            TOP_RIGHT: "topRight",
            RIGHT: "right",
            BOTTOM_RIGHT: "bottomRight",
            BOTTOM: "bottom",
            BOTTOM_LEFT: "bottomLeft",
            LEFT: "left",
            TOP_LEFT: "topLeft",
            CENTER: "center"
        }
    },
    8524: function (g, c, b) {
        c.a = {
            TEST: "test",
            DEVELOPMENT: "development",
            PRE_PRODUCTION: "pre_production",
            QUALITY_ASSURANCE: "quality_assurance",
            PRODUCTION: "production"
        }
    },
    8525: function (g, c, b) {
        c.a = {
            FLOAT: "float",
            INT: "int"
        }
    },
    8526: function (g, c, b) {
        c.a = {
            NO_BREAK_SPACE: /\u00a0/g,
            ONLY_LETTERS: /[a-zA-Z]/g
        }
    },
    8538: function (g, c, b) {
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        b.d(c, "TRANSLATION_PREFIX_KEY", function () {
            return k
        });
        b.d(c, "TRANSLATION_SUFFIX_KEY", function () {
            return l
        });
        b.d(c, "addTranslationPrefix", function () {
            return f
        });
        b.d(c, "translateEnumValue", function () {
            return h
        });
        var k = "_translationPrefix",
        l = "_translationSuffix",
        f = function (b, a, c) {
            Object.defineProperty(b, k, {
                value: a,
                enumerable: !1
            });
            webwave.isDefAndNotNull(c) && Object.defineProperty(b, l, {
                value: c,
                enumerable: !1
            })
        },
        h = function (b, a) {
            return i18n.t("".concat(b[k], ".").concat(a))
        }
    },
    8539: function (g, c) {
        !function () {
            function b(a) {
                return 0 > (a = Math.round(a)) ? 0 : 255 < a ? 255 : a
            }
            function g(a) {
                return 0 > a ? 0 : 1 < a ? 1 : a
            }
            function l(a) {
                return "%" === a[a.length - 1] ? b(parseFloat(a) / 100 * 255) : b(parseInt(a))
            }
            function f(a) {
                return "%" === a[a.length - 1] ?
                g(parseFloat(a) / 100) : g(parseFloat(a))
            }
            function h(a, b, c) {
                return 0 > c ? c += 1 : 1 < c && --c,
                1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
            }
            var d = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, 1],
                antiquewhite: [250, 235, 215, 1],
                aqua: [0, 255, 255, 1],
                aquamarine: [127, 255, 212, 1],
                azure: [240, 255, 255, 1],
                beige: [245, 245, 220, 1],
                bisque: [255, 228, 196, 1],
                black: [0, 0, 0, 1],
                blanchedalmond: [255, 235, 205, 1],
                blue: [0, 0, 255, 1],
                blueviolet: [138, 43, 226, 1],
                brown: [165, 42, 42, 1],
                burlywood: [222, 184, 135, 1],
                cadetblue: [95, 158, 160, 1],
                chartreuse: [127,
                    255, 0, 1],
                chocolate: [210, 105, 30, 1],
                coral: [255, 127, 80, 1],
                cornflowerblue: [100, 149, 237, 1],
                cornsilk: [255, 248, 220, 1],
                crimson: [220, 20, 60, 1],
                cyan: [0, 255, 255, 1],
                darkblue: [0, 0, 139, 1],
                darkcyan: [0, 139, 139, 1],
                darkgoldenrod: [184, 134, 11, 1],
                darkgray: [169, 169, 169, 1],
                darkgreen: [0, 100, 0, 1],
                darkgrey: [169, 169, 169, 1],
                darkkhaki: [189, 183, 107, 1],
                darkmagenta: [139, 0, 139, 1],
                darkolivegreen: [85, 107, 47, 1],
                darkorange: [255, 140, 0, 1],
                darkorchid: [153, 50, 204, 1],
                darkred: [139, 0, 0, 1],
                darksalmon: [233, 150, 122, 1],
                darkseagreen: [143, 188, 143,
                    1],
                darkslateblue: [72, 61, 139, 1],
                darkslategray: [47, 79, 79, 1],
                darkslategrey: [47, 79, 79, 1],
                darkturquoise: [0, 206, 209, 1],
                darkviolet: [148, 0, 211, 1],
                deeppink: [255, 20, 147, 1],
                deepskyblue: [0, 191, 255, 1],
                dimgray: [105, 105, 105, 1],
                dimgrey: [105, 105, 105, 1],
                dodgerblue: [30, 144, 255, 1],
                firebrick: [178, 34, 34, 1],
                floralwhite: [255, 250, 240, 1],
                forestgreen: [34, 139, 34, 1],
                fuchsia: [255, 0, 255, 1],
                gainsboro: [220, 220, 220, 1],
                ghostwhite: [248, 248, 255, 1],
                gold: [255, 215, 0, 1],
                goldenrod: [218, 165, 32, 1],
                gray: [128, 128, 128, 1],
                green: [0, 128, 0, 1],
                greenyellow: [173,
                    255, 47, 1],
                grey: [128, 128, 128, 1],
                honeydew: [240, 255, 240, 1],
                hotpink: [255, 105, 180, 1],
                indianred: [205, 92, 92, 1],
                indigo: [75, 0, 130, 1],
                ivory: [255, 255, 240, 1],
                khaki: [240, 230, 140, 1],
                lavender: [230, 230, 250, 1],
                lavenderblush: [255, 240, 245, 1],
                lawngreen: [124, 252, 0, 1],
                lemonchiffon: [255, 250, 205, 1],
                lightblue: [173, 216, 230, 1],
                lightcoral: [240, 128, 128, 1],
                lightcyan: [224, 255, 255, 1],
                lightgoldenrodyellow: [250, 250, 210, 1],
                lightgray: [211, 211, 211, 1],
                lightgreen: [144, 238, 144, 1],
                lightgrey: [211, 211, 211, 1],
                lightpink: [255, 182, 193, 1],
                lightsalmon: [255,
                    160, 122, 1],
                lightseagreen: [32, 178, 170, 1],
                lightskyblue: [135, 206, 250, 1],
                lightslategray: [119, 136, 153, 1],
                lightslategrey: [119, 136, 153, 1],
                lightsteelblue: [176, 196, 222, 1],
                lightyellow: [255, 255, 224, 1],
                lime: [0, 255, 0, 1],
                limegreen: [50, 205, 50, 1],
                linen: [250, 240, 230, 1],
                magenta: [255, 0, 255, 1],
                maroon: [128, 0, 0, 1],
                mediumaquamarine: [102, 205, 170, 1],
                mediumblue: [0, 0, 205, 1],
                mediumorchid: [186, 85, 211, 1],
                mediumpurple: [147, 112, 219, 1],
                mediumseagreen: [60, 179, 113, 1],
                mediumslateblue: [123, 104, 238, 1],
                mediumspringgreen: [0, 250, 154, 1],
                mediumturquoise: [72, 209, 204, 1],
                mediumvioletred: [199, 21, 133, 1],
                midnightblue: [25, 25, 112, 1],
                mintcream: [245, 255, 250, 1],
                mistyrose: [255, 228, 225, 1],
                moccasin: [255, 228, 181, 1],
                navajowhite: [255, 222, 173, 1],
                navy: [0, 0, 128, 1],
                oldlace: [253, 245, 230, 1],
                olive: [128, 128, 0, 1],
                olivedrab: [107, 142, 35, 1],
                orange: [255, 165, 0, 1],
                orangered: [255, 69, 0, 1],
                orchid: [218, 112, 214, 1],
                palegoldenrod: [238, 232, 170, 1],
                palegreen: [152, 251, 152, 1],
                paleturquoise: [175, 238, 238, 1],
                palevioletred: [219, 112, 147, 1],
                papayawhip: [255, 239, 213, 1],
                peachpuff: [255,
                    218, 185, 1],
                peru: [205, 133, 63, 1],
                pink: [255, 192, 203, 1],
                plum: [221, 160, 221, 1],
                powderblue: [176, 224, 230, 1],
                purple: [128, 0, 128, 1],
                rebeccapurple: [102, 51, 153, 1],
                red: [255, 0, 0, 1],
                rosybrown: [188, 143, 143, 1],
                royalblue: [65, 105, 225, 1],
                saddlebrown: [139, 69, 19, 1],
                salmon: [250, 128, 114, 1],
                sandybrown: [244, 164, 96, 1],
                seagreen: [46, 139, 87, 1],
                seashell: [255, 245, 238, 1],
                sienna: [160, 82, 45, 1],
                silver: [192, 192, 192, 1],
                skyblue: [135, 206, 235, 1],
                slateblue: [106, 90, 205, 1],
                slategray: [112, 128, 144, 1],
                slategrey: [112, 128, 144, 1],
                snow: [255, 250, 250,
                    1],
                springgreen: [0, 255, 127, 1],
                steelblue: [70, 130, 180, 1],
                tan: [210, 180, 140, 1],
                teal: [0, 128, 128, 1],
                thistle: [216, 191, 216, 1],
                tomato: [255, 99, 71, 1],
                turquoise: [64, 224, 208, 1],
                violet: [238, 130, 238, 1],
                wheat: [245, 222, 179, 1],
                white: [255, 255, 255, 1],
                whitesmoke: [245, 245, 245, 1],
                yellow: [255, 255, 0, 1],
                yellowgreen: [154, 205, 50, 1]
            };
            parseCSSColor = function (a) {
                var c;
                a = a.replace(/ /g, "").toLowerCase();
                if (a in d)
                    return d[a].slice();
                if ("#" === a[0])
                    return 4 === a.length ? 0 <= (c = parseInt(a.substr(1), 16)) && 4095 >= c ? [(3840 & c) >> 4 | (3840 & c) >>
                        8, 240 & c | (240 & c) >> 4, 15 & c | (15 & c) << 4, 1] : null : 7 === a.length && 0 <= (c = parseInt(a.substr(1), 16)) && 16777215 >= c ? [(16711680 & c) >> 16, (65280 & c) >> 8, 255 & c, 1] : null;
                var g = a.indexOf("("),
                k = a.indexOf(")");
                if (-1 !== g && k + 1 === a.length)
                    switch (c = a.substr(0, g), g = a.substr(g + 1, k - (g + 1)).split(","), a = 1, c) {
                    case "rgba":
                        if (4 !== g.length)
                            break;
                        a = f(g.pop());
                    case "rgb":
                        return 3 !== g.length ? null : [l(g[0]), l(g[1]), l(g[2]), a];
                    case "hsla":
                        if (4 !== g.length)
                            break;
                        a = f(g.pop());
                    case "hsl":
                        if (3 === g.length)
                            return c = (parseFloat(g[0]) % 360 + 360) % 360 / 360,
                            k = f(g[1]), g = f(g[2]), k = .5 >= g ? g * (k + 1) : g + k - g * k, g = 2 * g - k, [b(255 * h(g, k, c + 1 / 3)), b(255 * h(g, k, c)), b(255 * h(g, k, c - 1 / 3)), a]
                    }
                return null
            };
            try {
                c.parseCSSColor = parseCSSColor
            } catch (a) {}
        }
        ()
    },
    8540: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(8522),
        h = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "rgbaOrRgb2hexAndOpacity",
                        value: function (a) {
                            var b,
                            c,
                            d,
                            f = {
                                hex: "#000000",
                                opacity: 1
                            },
                            h = function (a) {
                                a = parseInt(a);
                                return isNaN(a) ? "00" : (a = Math.max(a, 0), 1 === (a = (a = Math.min(a,
                                                    255)).toString(16)).length ? "0" + a : a)
                            };
                            return webwave.isString(a) && ("transparent" === a && (f.opacity = 0), a.startsWith("rgba") ? (b = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d|\d\.\d*)\)/, (c = a.match(b)) && 5 === c.length && (f.hex = "#" + h(c[1]) + h(c[2]) + h(c[3]), d = parseFloat(c[4]), d = Math.max(d, 0), d = Math.min(d, 1), f.opacity = d)) : a.startsWith("rgb") && (b = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/, (c = a.match(b)) && 4 === c.length && (f.hex = "#" + h(c[1]) + h(c[2]) + h(c[3]), f.opacity = 1))),
                            f
                        }
                    }, {
                        key: "isTransparent",
                        value: function (a) {
                            return "transparent" === a || 0 === b.rgbaOrRgb2hexAndOpacity(a).opacity
                        }
                    }, {
                        key: "isTransparentOrSomeLevelOfTransparency",
                        value: function (a) {
                            return "transparent" === a || 1 > b.rgbaOrRgb2hexAndOpacity(a).opacity
                        }
                    }, {
                        key: "rgbObjectAndOpacityToRgbaString",
                        value: function (a, b) {
                            return "rgba(" + a.r + "," + a.g + "," + a.b + "," + b + ")"
                        }
                    }, {
                        key: "rgbAndOpacityToRgba",
                        value: function (a, c) {
                            var f,
                            h,
                            g;
                            return webwave.isNotString(a) && (a = "rgb(0,0,0)"),
                            webwave.isNumberAndNotNaN(c) || (c = 1),
                            f = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/,
                            (h = a.match(f)) && 4 === h.length ? (g = {
                                    r: parseInt(h[1], 10),
                                    g: parseInt(h[2], 10),
                                    b: parseInt(h[3], 10)
                                }, b.rgbObjectAndOpacityToRgbaString(g, c)) : "rgba(0,0,0,1)"
                        }
                    }, {
                        key: "isColorStartWithRgbPhrase",
                        value: function (a) {
                            return b.isColorStartWithAnyOfPhrase(a, ["rgb"])
                        }
                    }, {
                        key: "isColorStartWithVarPhrase",
                        value: function (a) {
                            return b.isColorStartWithAnyOfPhrase(a, ["var"])
                        }
                    }, {
                        key: "isColorStartWithAnyOfPhrase",
                        value: function (a, b) {
                            return b.some(function (b) {
                                return a.startsWith(b)
                            })
                        }
                    }, {
                        key: "isValueContainGradientOrIconPhrase",
                        value: function (a) {
                            return -1 < a.indexOf("gradient") || b.isValueContainsIconPhrase(a)
                        }
                    }, {
                        key: "isValueContainsIconPhrase",
                        value: function (a) {
                            return -1 < a.indexOf("ww_icon")
                        }
                    }, {
                        key: "checkIfColorSame",
                        value: function (a, b) {
                            var c = !1;
                            if (webwave.isDefAndNotNull(a) && webwave.isDefAndNotNull(b)) {
                                var d,
                                h;
                                f.a.isRgba(a) || (a = a.replace(/[^\d,]/g, "").split(","), a = "rgba(".concat(a[0], ", ").concat(a[1], ", ").concat(a[2], ", 1)"));
                                f.a.isRgba(b) || (b = b.replace(/[^\d,]/g, "").split(","), b = "rgba(".concat(b[0], ", ").concat(b[1], ", ").concat(b[2],
                                            ", 1)"));
                                c = (null === (d = a) || void 0 === d ? void 0 : d.replace(/\s/g, "")) === (null === (h = b) || void 0 === h ? void 0 : h.replace(/\s/g, ""))
                            }
                            return c
                        }
                    }, {
                        key: "generateRgbRandomColor",
                        value: function () {
                            var a = "".concat(b.generateRandomColor(0, 255)),
                            c = "".concat(b.generateRandomColor(0, 255)),
                            f = "".concat(b.generateRandomColor(0, 255));
                            return "rgb(".concat(a, ", ").concat(c, ", ").concat(f, ")")
                        }
                    }, {
                        key: "generateRandomColor",
                        value: function (a, b) {
                            return Math.round(Math.random() * (b - a) + a)
                        }
                    }
                ]),
            b
        }
        ()
    },
    8541: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = function (b, a) {
            return "".concat(1E15 + b).slice(-a)
        },
        h = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "getMonthNameByLanguage",
                        value: function (a, b) {
                            void 0 === b && (b = i18n.lng);
                            a = "months.".concat(a);
                            return i18n.exists(a, {
                                lng: b
                            }) ? i18n.t(a, {
                                lng: b
                            }) : i18n.t(a, {
                                lng: "en"
                            })
                        }
                    }, {
                        key: "dateToString",
                        value: function (a, c, h) {
                            var g = a.getDate(),
                            k = a.getMonth() + 1,
                            l = a.getFullYear(),
                            n = f(a.getFullYear(), 2),
                            p = a.getHours(),
                            u = a.getMinutes(),
                            w = a.getSeconds();
                            a = a.getMilliseconds();
                            switch (c) {
                            case "dd/mm/yyyy":
                                c =
                                    "".concat(f(g, 2), "/").concat(f(k, 2), "/").concat(l);
                                break;
                            case "dd.mm.yyyy":
                                c = "".concat(f(g, 2), ".").concat(f(k, 2), ".").concat(l);
                                break;
                            case "dd/mm/yy":
                                c = "".concat(f(g, 2), "/").concat(f(k, 2), "/").concat(n);
                                break;
                            case "yyyy/mm/dd":
                                c = "".concat(l, "/").concat(f(k, 2), "/").concat(f(g, 2));
                                break;
                            case "yy/mm/dd":
                                c = "".concat(n, "/").concat(f(k, 2), "/").concat(f(g, 2));
                                break;
                            case "d mmmm yyyy":
                                c = "".concat(g, " ").concat(b.getMonthNameByLanguage(k, h), " ").concat(l);
                                break;
                            case "dd mmmm yyyy":
                                c = "".concat(f(g, 2), " ").concat(b.getMonthNameByLanguage(k,
                                            h), " ").concat(l);
                                break;
                            case "dd.mm.yyyy hh:mm":
                                c = "".concat(f(g, 2), ".").concat(f(k, 2), ".").concat(l, " ").concat(f(p, 2), ":").concat(f(u, 2));
                                break;
                            case "dd-mm-yyyy":
                                c = "".concat(f(g, 2), "-").concat(f(k, 2), "-").concat(l);
                                break;
                            case b.availableFormats.DATA_RANGE_FILTER_DATE_FORMAT:
                                c = "".concat(l, "-").concat(f(k, 2), "-").concat(f(g, 2));
                                break;
                            case b.availableFormats.DATE_PICKER_DATE_TIME_FORMAT:
                                c = "".concat(f(g, 2), "-").concat(f(k, 2), "-").concat(l, " ").concat(f(p, 2), ":").concat(f(u, 2));
                                break;
                            case b.availableFormats.INPUT_DATE_TIME_FORMAT:
                                c =
                                    "".concat(l, "-").concat(f(k, 2), "-").concat(f(g, 2), "T").concat(f(p, 2), ":").concat(f(u, 2));
                                break;
                            case b.availableFormats.ISO_8601_FORMAT:
                                c = "".concat(l, "-").concat(f(k, 2), "-").concat(f(g, 2), "T").concat(f(p, 2), ":").concat(f(u, 2), ":").concat(f(w, 2), "Z");
                                break;
                            case b.availableFormats.yyyymmdd:
                                c = l + f(k, 2) + f(g, 2);
                                break;
                            case b.availableFormats.WERBWAVE_BACKEND_BINDING:
                                c = "".concat(l, "-").concat(f(k, 2), "-").concat(f(g, 2), " ").concat(f(p, 2), ":").concat(f(u, 2), ":").concat(f(w, 2), ".").concat(f(a, 2));
                                break;
                            case b.availableFormats.FULL_TIME:
                                c =
                                    "".concat(f(p, 2), ":").concat(f(u, 2), ":").concat(f(w, 2));
                                break;
                            case b.availableFormats.STORE_ORDER_DATE:
                                c = "".concat(l, "-").concat(f(k, 2), "-").concat(f(g, 2), " ").concat(f(p, 2), ":").concat(f(u, 2));
                                break;
                            default:
                                console.error("Nieznany format daty! ('".concat(c, "')")),
                                c = "".concat(g, "/").concat(k, "/").concat(l)
                            }
                            return c
                        }
                    }, {
                        key: "isValidDate",
                        value: function (a) {
                            return "[object Date]" === Object.prototype.toString.call(a) && !isNaN(a.getTime())
                        }
                    }, {
                        key: "convertTwoDigitYearToFull",
                        value: function (a) {
                            var c = b.getNowDateYear();
                            a = 100 * Math.floor(c / 100) + a;
                            return a < c && (a += 100),
                            a
                        }
                    }, {
                        key: "convertYearToClosestCentury",
                        value: function (a) {
                            var c = b.getNowDateYear();
                            if (100 > a) {
                                var f = 100 * Math.floor(c / 100),
                                h = f + a,
                                g = f + a - 100;
                                a = f + a + 100;
                                a = Math.abs(c - a) < Math.abs(c - h) ? a : Math.abs(c - h) < Math.abs(c - g) ? h : g
                            } else
                                1E3 > a && (h = 10 * a, a = 1E3 * Math.floor(c / 1E3) + a - 1E3, a = Math.abs(c - h) < Math.abs(c - a) ? h : a);
                            return a
                        }
                    }, {
                        key: "getNowDateYear",
                        value: function () {
                            return (new Date).getFullYear()
                        }
                    }, {
                        key: "daysBetween",
                        value: function (a, b) {
                            return Math.round(Math.abs(a - b) / 864E5)
                        }
                    }, {
                        key: "dateIsGreaterThenNow",
                        value: function (a) {
                            return a > new Date
                        }
                    }, {
                        key: "getBeginOfTheDay",
                        value: function (a) {
                            return a.setHours(0),
                            a.setMinutes(0),
                            a.setSeconds(0),
                            a
                        }
                    }, {
                        key: "getEndOfTheDay",
                        value: function (a) {
                            return a.setHours(23),
                            a.setMinutes(59),
                            a.setSeconds(59),
                            a
                        }
                    }, {
                        key: "stringToDate",
                        value: function (a, c, f) {
                            var h,
                            g,
                            k,
                            l,
                            p,
                            u,
                            w,
                            v;
                            switch (c) {
                            case "dd-mm-yyyy":
                                k = (p = a.split("-"))[0];
                                l = p[1];
                                p = b.convertYearToClosestCentury(parseInt(p[2]));
                                break;
                            case b.availableFormats.DATE_PICKER_DATE_TIME_FORMAT:
                                k = (p = null ===
                                        (h = (a = a.split(" "))[0]) || void 0 === h ? void 0 : h.split("-"))[0],
                                l = p[1],
                                p = b.convertYearToClosestCentury(parseInt(p[2])),
                                (v = null === (g = a[1]) || void 0 === g ? void 0 : g.split(":")) && (u = v[0], w = v[1])
                            }
                            return u && w ? new Date(p, l - 1, k, u, w) : new Date(p, l - 1, k)
                        }
                    }
                ]),
            b
        }
        ();
        h.availableFormats = {
            "dd/mm/yyyy": "dd/mm/yyyy",
            "dd/mm/yy": "dd/mm/yy",
            "yyyy/mm/dd": "yyyy/mm/dd",
            "yy/mm/dd": "yy/mm/dd",
            "d mmmm yyyy": "d mmmm yyyy",
            "dd mmmm yyyy": "dd mmmm yyyy",
            "dd.mm.yyyy hh:mm": "dd.mm.yyyy hh:mm",
            "dd-mm-yyyy": "dd-mm-yyyy",
            DATE_PICKER_DATE_TIME_FORMAT: "dd-mm-yyyy hh:mm",
            WERBWAVE_BACKEND_BINDING: "yyyy-MM-dd HH:mm:ss.S",
            STORE_ORDER_DATE: "yyyy-MM-dd HH:mm",
            yyyymmdd: "yyyymmdd",
            FULL_TIME: "HH:mm:ss",
            INPUT_DATE_TIME_FORMAT: "yyyy-mm-ddTHH:mm",
            ISO_8601_FORMAT: "yyyy-mm-ddTHH:mm:ss",
            DATA_RANGE_FILTER_DATE_FORMAT: "yyyy-mm-dd"
        }
    },
    8542: function (g, c, b) {
        c.a = Object.freeze({
            DEFAULT: "",
            DOT: ".",
            COMMA: ",",
            EMPTY: ""
        })
    },
    8543: function (g, c, b) {
        b.d(c, "a", function () {
            return d
        });
        var k,
        l = b(0),
        f = b(1),
        h = b(8524),
        d = function () {
            function a() {
                Object(l.a)(this, a)
            }
            return Object(f.a)(a, null, [{
                        key: "readEnv",
                        value: function () {
                            if (webwave.isDef(window.config) && webwave.isDef(window.config.environment))
                                for (var a in h.a)
                                    if (h.a.hasOwnProperty(a) && h.a[a] === window.config.environment)
                                        return void(k = h.a[a]);
                            k = h.a.PRODUCTION
                        }
                    }, {
                        key: "getCurrent",
                        value: function () {
                            return k
                        }
                    }, {
                        key: "isDevelopment",
                        value: function () {
                            return k === h.a.DEVELOPMENT
                        }
                    }, {
                        key: "isNotDevelopment",
                        value: function () {
                            return k !== h.a.DEVELOPMENT
                        }
                    }, {
                        key: "isProduction",
                        value: function () {
                            return k === h.a.PRODUCTION
                        }
                    }, {
                        key: "isNotProduction",
                        value: function () {
                            return k !==
                            h.a.PRODUCTION
                        }
                    }, {
                        key: "isTest",
                        value: function () {
                            return k === h.a.TEST
                        }
                    }, {
                        key: "isNotTest",
                        value: function () {
                            return k !== h.a.TEST
                        }
                    }, {
                        key: "isQA",
                        value: function () {
                            return k === h.a.PRE_PRODUCTION
                        }
                    }, {
                        key: "setEnvironment",
                        value: function (a) {
                            webwave.isValidEnumValue(a, h.a) && (k = a)
                        }
                    }
                ]),
            a
        }
        ();
        d.readEnv()
    },
    8544: function (g, c, b) {
        c.a = {
            AddSection: "wsection-icon",
            a: "link-style-text-icon",
            a_hover: "text_format_black_24dp_2",
            addNews: "newPageIcon",
            addSectionAboveIcon: "plus-icon-2",
            addSectionBelowIcon: "plus-icon-2",
            aiIcon: "AI_icon",
            aiText: "ai-icon",
            alignBottom: "align-vertical-bottom-icon",
            alignCenter: "align-horizontal-center-icon",
            alignHorizontal: "horizontal-distribute-icon",
            alignLeft: "align-horizontal-left-icon",
            alignMiddle: "align-vertical-center-icon",
            alignRight: "align-horizontal-right",
            alignTop: "align-vertical-top-icon",
            alignVertical: "vertical-distribute-icon",
            banner_premium: "premium-icon",
            bindwobjects: "bind-icon",
            button: "button-tool-icon",
            carousel: "carousel-tool-icon",
            changeProduct: "refresh-icon",
            changestate: "auto_awesome-icon",
            commentColored: "chat-outline-icon",
            contextboxIconSymbol: "settings-tool-icon",
            copy: "content-copy-icon",
            copystyle: "content-copy-style-icon",
            counter: "counter-tool-icon",
            cut: "content-cut-icon",
            date: "date-tool-icon",
            defaultText: "text-menu-tool-icon",
            delete : "deleteIcon",
            deltaIndicatorNegativeRange: "arrow-downward-icon",
            deltaIndicatorPositiveRange: "arrow-upward-icon",
            duplicate: "content-duplicate",
            edit: "edit-icon",
            editOutline: "edit-icon-outline",
            editProduct: "shop-add-product-icon",
            editlink: "link-icon",
            form: "tollbar-form-icon2",
            gallery: "gallery-icon",
            googleMaps: "map-tool-icon",
            group: "groupIcon",
            h1: "h1-style-text-headline-icon",
            h2: "h2-style-text-headline-icon",
            h3: "h3-style-text-headline-icon",
            h4: "h4-style-text-headline-icon",
            htmltool: "code-tool-icon",
            icon: "icon-tool-icon",
            imageCropping: "fullscreen-change-size",
            img: "image-icon",
            imgMenu: "image-icon-menu",
            languageSelector: "language-tool-icon",
            layerblockIconSymbol: "layers-tool-panel-icon",
            lightbox: "image-grid-tool-icon",
            login: "login-tool-icon",
            menu: "menu-tool-icon",
            moveSectionDownIcon: "expand-more-icon-2",
            moveSectionUpIcon: "expand-less-icon-2",
            moveToFooter: "add-to-footer-icon",
            moveToLayout: "add-to-website-icon2",
            moveToLowerSectionIcon: "expand-more-icon-2",
            moveToUpperSectionIcon: "expand-less-icon-2",
            moveontop: "moveOnTopIcon",
            movetobottom: "moveToBottomIcon",
            newsfeed: "newsfeed-tool-icon",
            objectHelp: "help-outline-icon",
            objectLibraryIconSymbol: "library-icon",
            objectStyle: "edit-icon",
            objectproperties: "element-settings-icon",
            objecttext: "paragraph-tool-icon",
            otherTools: "more-tool-menu-icon",
            overviewModeIcon: "preview-icon",
            p: "title_black_24dp_2",
            pageThumbnail: "thumbnail_tool_icon",
            paste: "content-paste-icon",
            pastestyle: "paste-style-icon",
            paymentStepClientData: "lock-outline-icon",
            paymentStepItem: "cms-icon3",
            paymentStepSummary: "lock-outline-icon",
            price: "tag-outline-icon",
            product: "shop-add-product-icon",
            productfeed: "product-feed-icon",
            rectangle: "rectangle-tool",
            removeFromFooterAction: "delete-from-footer-icon",
            removeFromLayout: "cancel-icon2",
            saveIcon: "save-icon",
            selectSubelement: "more-icon2",
            settings: "settings-icon-outline",
            shop: "shop-menu-tool-icon",
            shopCart: "shop-menu-tool-icon-1",
            showNews: "newsfeed-tool-icon",
            simpleText: "header-tool-icon",
            slider: "toolbar-slider-icon",
            stopCropping: "cancel-icon2",
            text: "paragraph-tool-icon",
            timeLineError: "cancel-icon2",
            timeLineInProgress: "hourglass_empty",
            timelineSuccess: "check-mark-icon",
            toolsmenuwrappericonsymbol: "add-element-tool-icon",
            unbindwobjects: "unbind-icon",
            ungroup: "cancel-icon2",
            viewpageicon: "public-icon",
            wfooter: "add-to-footer-icon",
            wgroup: "groupIcon",
            wlayoutgroup: "add-to-website-icon2",
            wmediaplayer: "video-tool-icon",
            wsection: "wsection-icon"
        }
    },
    8545: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(8525),
        h = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "isReturnTypeNumeric",
                        value: function (a) {
                            return a === f.a.INT || a === f.a.FLOAT
                        }
                    }, {
                        key: "normalizeInputValue",
                        value: function (a, b) {
                            a = a.trim();
                            return 0 === a.length && this.isReturnTypeNumeric(b) ? "0" : a
                        }
                    }, {
                        key: "parseValueToReturnType",
                        value: function (a, b) {
                            switch (b) {
                            case f.a.FLOAT:
                                return parseFloat(a);
                            case f.a.INT:
                                return parseInt(parseFloat(a), 10);
                            default:
                                return NaN
                            }
                        }
                    }
                ]),
            b
        }
        ()
    },
    8546: function (g, c, b) {
        b.d(c, "a", function () {
            return l
        });
        var k = b(0),
        l = function h() {
            var b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            Object(k.a)(this, h);
            this.enabled = !!webwave.isDef(b.enabled) && b.enabled;
            this.max = webwave.isNumberAndNotNaN(b.max) ? b.max : null;
            this.min = webwave.isNumberAndNotNaN(b.min) ? b.min : null;
            this.step = webwave.isNumberAndNotNaN(b.step) ? b.step : null
        }
    },
    8547: function (g, c, b) {
        c.a = {
            DELETE: 46,
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40,
            ESC: 27,
            ENTER: 13,
            BACKSPACE: 8,
            LEFT_SQUARE_BRACKET: 219,
            RIGHT_SQUARE_BRACKET: 221,
            K7: 55,
            K8: 56,
            K9: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            M: 77,
            O: 79,
            P: 80,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            PLUS: 187,
            MINUS: 189,
            NUM_PLUS: 107,
            NUM_MINUS: 109,
            ZERO: 48,
            NUM_ZERO: 96,
            SPACE: 32
        }
    },
    8548: function (g, c, b) {
        b.d(c, "a", function () {
            return f
        });
        var k = b(0),
        l = b(1),
        f = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "emulateClickEventForAppleDevice",
                        value: function (b,
                            a) {
                            b.on("touchstart.iphoneDoubleTap", function (c) {
                                var f = !1;
                                b.one("touchend.iphoneDoubleTap", function () {
                                    !1 === f && a();
                                    b.off("touchmove.iphoneDoubleTap")
                                });
                                b.one("touchmove.iphoneDoubleTap", function () {
                                    f = !0
                                })
                            })
                        }
                    }, {
                        key: "isMobileDevice",
                        value: function () {
                            return this.isMobileAppleDevice() || navigator.userAgent.match(/(Android|BlackBerry|Windows Phone)/i)
                        }
                    }, {
                        key: "isTouchScreenDevice",
                        value: function () {
                            return 0 < navigator.maxTouchPoints
                        }
                    }, {
                        key: "isMobileAppleDevice",
                        value: function () {
                            return null !== navigator.userAgent.match(/(iPhone|iPod|iPad)/i)
                        }
                    }, {
                        key: "isAppleDevice",
                        value: function () {
                            return null !== navigator.userAgent.match(/(iPhone|iPod|iPad|Macintosh)/i)
                        }
                    }, {
                        key: "isAppleDeviceWithTouchScreen",
                        value: function () {
                            return b.isMobileAppleDevice() || null !== navigator.userAgent.match(/(Macintosh)/i) && b.isTouchScreenDevice()
                        }
                    }, {
                        key: "isMobileSafari",
                        value: function () {
                            return b.isAppleDeviceWithTouchScreen() && !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
                        }
                    }, {
                        key: "reloadIfBackForwadCacheInAppleDevice",
                        value: function () {
                            this.isMobileAppleDevice() &&
                            $(window).on("pageshow", function (b) {
                                b.originalEvent.persisted && (b = elementService.findAllWButton(), webwave.isArrayLike(b) && 0 < b.length && location.reload())
                            })
                        }
                    }
                ]),
            b
        }
        ()
    },
    8549: function (g, c, b) {
        c.a = {
            HORIZONTAL: "horizontal",
            VERTICAL: "vertical"
        }
    },
    8550: function (g, c, b) {
        b(0);
        b(1)
    },
    8551: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(8523),
        h = function () {
            function b() {
                Object(k.a)(this, b);
                this.direction = f.a.BOTTOM_RIGHT;
                this.resizing = !1;
                this._onMouseLeaveHandler = this._stopResizeHandler = this._handleResizeHandler =
                    this.handlerNode = this.targetNode = void 0
            }
            return Object(l.a)(b, [{
                        key: "init",
                        value: function (a) {
                            this.direction = a.direction ? a.direction : f.a.BOTTOM_RIGHT;
                            this.targetNode = a.targetNode;
                            this.handlerNode = a.handlerNode
                        }
                    }, {
                        key: "startResize",
                        value: function () {
                            this.resizing = !0;
                            this._handleResizeHandler = this._handleResize.bind(this);
                            this._stopResizeHandler = this._stopResize.bind(this);
                            this._setCursor();
                            document.addEventListener("mousemove", this._handleResizeHandler);
                            document.addEventListener("mouseup", this._stopResizeHandler)
                        }
                    }, {
                        key: "_handleResize",
                        value: function (a) {
                            if (a.preventDefault(), this.resizing && webwave.isDefAndNotNull(this.targetNode))
                                switch (this.direction) {
                                case f.a.BOTTOM_RIGHT:
                                    this._resizeSouthEast(a.clientX, a.clientY);
                                    break;
                                case f.a.BOTTOM:
                                    this._resizeSouth(a.clientY);
                                    break;
                                case f.a.RIGHT:
                                    this._resizeEast(a.clientX)
                                }
                        }
                    }, {
                        key: "_setCursor",
                        value: function () {
                            switch (this.direction) {
                            case f.a.BOTTOM_RIGHT:
                                document.body.style.cursor = "nwse-resize";
                                break;
                            case f.a.BOTTOM:
                                document.body.style.cursor = "ns-resize";
                                break;
                            case f.a.RIGHT:
                                document.body.style.cursor =
                                    "ew-resize"
                            }
                        }
                    }, {
                        key: "_resetCursor",
                        value: function () {
                            document.body.style.cursor = ""
                        }
                    }, {
                        key: "_stopResize",
                        value: function () {
                            this.resizing = !1;
                            this._resetCursor();
                            document.removeEventListener("mousemove", this._handleResizeHandler);
                            document.removeEventListener("mouseup", this._stopResizeHandler)
                        }
                    }, {
                        key: "_resizeEast",
                        value: function (a) {
                            a -= this.targetNode.getBoundingClientRect().left;
                            this.targetNode.style.width = "".concat(a, "px")
                        }
                    }, {
                        key: "_resizeSouth",
                        value: function (a) {
                            a -= this.targetNode.getBoundingClientRect().top;
                            this.targetNode.style.height = "".concat(a, "px")
                        }
                    }, {
                        key: "_resizeSouthEast",
                        value: function (a, b) {
                            this._resizeSouth(b);
                            this._resizeEast(a)
                        }
                    }
                ]),
            b
        }
        ()
    },
    8552: function (g, c, b) {
        b.d(c, "a", function () {
            return f
        });
        var k = b(0),
        l = b(1),
        f = function () {
            function b() {
                var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                Object(k.a)(this, b);
                this.timeoutDelay = webwave.isNumberAndNotNaN(c.timeoutDelay) ? c.timeoutDelay : 1E3;
                this.timerId = null;
                this.jobHandler = webwave.isFunction(c.jobHandler) ? c.jobHandler : null
            }
            return Object(l.a)(b,
                [{
                        key: "run",
                        value: function (b) {
                            var a = this;
                            this.clean();
                            this.timerId = setTimeout(function () {
                                webwave.isFunction(a.jobHandler) && a.jobHandler(b)
                            }, this.timeoutDelay)
                        }
                    }, {
                        key: "clean",
                        value: function () {
                            clearTimeout(this.timerId)
                        }
                    }
                ]),
            b
        }
        ()
    },
    8553: function (g, c, b) {
        b.d(c, "a", function () {
            return h
        });
        var k = b(0),
        l = b(1),
        f = b(42),
        h = function () {
            function b(a) {
                Object(k.a)(this, b);
                webwave.isNotDef(a) && (a = {});
                this.width = webwave.isNumberAndNotNaN(a.width) ? a.width : 0;
                this.height = webwave.isNumberAndNotNaN(a.height) ? a.height : 0
            }
            return Object(l.a)(b,
                [{
                        key: "getWidth",
                        value: function () {
                            return this.width
                        }
                    }, {
                        key: "setWidth",
                        value: function (a) {
                            this.width = a
                        }
                    }, {
                        key: "getHeight",
                        value: function () {
                            return this.height
                        }
                    }, {
                        key: "setHeight",
                        value: function (a) {
                            this.height = a
                        }
                    }, {
                        key: "clone",
                        value: function () {
                            return new b({
                                width: this.width,
                                height: this.height
                            })
                        }
                    }, {
                        key: "serialize",
                        value: function () {
                            return {
                                width: this.width,
                                height: this.height
                            }
                        }
                    }, {
                        key: "equals",
                        value: function (a) {
                            return this.width === a.width && this.height === a.height
                        }
                    }, {
                        key: "add",
                        value: function (a) {
                            return this.width +=
                            a.getWidth(),
                            this.height += a.getHeight(),
                            this
                        }
                    }, {
                        key: "subtract",
                        value: function (a) {
                            return this.width -= a.getWidth(),
                            this.height -= a.getHeight(),
                            this
                        }
                    }, {
                        key: "multiply",
                        value: function (a) {
                            return this.width *= a,
                            this.height *= a,
                            this
                        }
                    }, {
                        key: "applyLimits",
                        value: function () {
                            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            webwave.isDef(a.width) && (webwave.isNumber(a.width.min) && (this.width = Math.max(this.width, a.width.min)), webwave.isNumber(a.width.max) && (this.width = Math.min(this.width, a.width.max)));
                            webwave.isDef(a.height) && (webwave.isNumber(a.height.min) && (this.height = Math.max(this.height, a.height.min)), webwave.isNumber(a.height.max) && (this.height = Math.min(this.height, a.height.max)))
                        }
                    }, {
                        key: "toString",
                        value: function () {
                            return "{".concat(this.width, ",").concat(this.height, "}}")
                        }
                    }, {
                        key: "toVector",
                        value: function () {
                            return new f.a({
                                x: this.getWidth(),
                                y: this.getHeight()
                            })
                        }
                    }, {
                        key: "addHeight",
                        value: function (a) {
                            this.height += a
                        }
                    }, {
                        key: "subtractHeight",
                        value: function (a) {
                            this.height -= a
                        }
                    }, {
                        key: "addWidth",
                        value: function (a) {
                            this.width +=
                            a
                        }
                    }, {
                        key: "subtractWidth",
                        value: function (a) {
                            this.width -= a
                        }
                    }, {
                        key: "ceil",
                        value: function () {
                            this.width = Math.ceil(this.width);
                            this.height = Math.ceil(this.height)
                        }
                    }
                ]),
            b
        }
        ();
        h.deserialize = function (b) {
            return webwave.isNotDef(b) ? new h({
                width: 0,
                height: 0
            }) : new h(b)
        }
    },
    8554: function (g, c, b) {
        b.d(c, "a", function () {
            return v
        });
        var k = b(0),
        l = b(1);
        g = b(403);
        var f = b.n(g),
        h = b(8526),
        d = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*$/i,
        a = /^((?!-)[a-z0-9-]{1,62}[A-Za-z0-9]\.)+[A-Za-z]{2,10}$/i,
        e = /^((?!-)[a-z0-9-]{1,62}[A-Za-z0-9]\.)+((?!-)[a-z0-9-]{1,62}[A-Za-z0-9]\.)+[A-Za-z]{2,10}$/i,
        m = /^[0-9]{8,13}$/,
        q = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        r = /^(?=.*\d)(?=.*[a-zA-Z `\-=[\];'\\,.\/~!@#$%^&*()_+{}:"|<>?])([a-zA-Z0-9 `\-=[\];'\\,.\/~!@#$%^&*()_+{}:"|<>?]{8,})$/,
        t = /^(?=.*?\d)(?=.*?\D).{8,}/,
        n = /^.*$/i,
        p = /[0-9]*[.]*[a-z\u0105\u0119\u015b\u0107\u017c\u017a\u0107\u00f3\u0142\u0144\u0104\u0118\u015a\u017b\u0179\u0106\u00d3\u0141\u0143\. ]{2,150}[.]*[0-9]+[a-z]*|[0-9]+[.]*[a-z\u0105\u0119\u015b\u0107\u017c\u017a\u0107\u00f3\u0142\u0144\u0104\u0118\u015a\u017b\u0179\u0106\u00d3\u0141\u0143\. ]{2,150}[.]*[0-9]/i,
        u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        },
        w = /[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\\ \|]/g,
        v = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "generateRandomPasswordString",
                        value: function () {
                            var a = Math.random().toString(36).slice(-10);
                            return !1 === b.isValidPassword(a, b.passwordTypes.SIMPLE) ? b.generateRandomPasswordString() : a
                        }
                    }, {
                        key: "isValidEmail",
                        value: function (a) {
                            return "string" == typeof a && 0 < a.length && null != a.match(q)
                        }
                    }, {
                        key: "isValidEmailName",
                        value: function (a) {
                            return "string" ==
                            typeof a && 0 < a.length && null !== a.match(d)
                        }
                    }, {
                        key: "checkIsValidUrl",
                        value: function (a) {
                            try {
                                return !!new URL(a)
                            } catch (b) {
                                return !1
                            }
                        }
                    }, {
                        key: "checkIsValidName",
                        value: function (a) {
                            return !!a.includes(" ")
                        }
                    }, {
                        key: "deleteWhiteSpace",
                        value: function (a) {
                            return a.replace(/\s/g, "")
                        }
                    }, {
                        key: "checkIsValidDomain",
                        value: function (b) {
                            var c = !1;
                            return null != b.match(a) && -1 == b.indexOf(config.hostSettings.domain) && (c = !0),
                            c
                        }
                    }, {
                        key: "checkIsValidSubdomain",
                        value: function (a) {
                            var b = !1;
                            return null != a.match(e) && (b = !0),
                            b
                        }
                    }, {
                        key: "checkIsValidPhone",
                        value: function (a) {
                            var b = !1;
                            return null != a.match(m) && (b = !0),
                            b
                        }
                    }, {
                        key: "countWords",
                        value: function (a) {
                            if (!0 === webwave.isNotDefOrNull(a) || 0 === a.length)
                                return 0;
                            a = a.split(/(\s+)/).filter(function (a) {
                                return !/\s+$/.test(a)
                            });
                            return (a = a.filter(function (a) {
                                    return "" != a
                                })).length
                        }
                    }, {
                        key: "textStartsWithTagOpening",
                        value: function (a) {
                            return "<" === a[0]
                        }
                    }, {
                        key: "isValidPassword",
                        value: function (a, c) {
                            if ("string" == typeof a && 4 < a.length)
                                switch (c) {
                                case b.passwordTypes.SIMPLE:
                                    return null !== a.match(r);
                                case b.passwordTypes.SIMPLE_WITHOUT_RESTRICTIONS:
                                    return null !==
                                    a.match(t);
                                default:
                                    return null !== a.match(n)
                                }
                            return !1
                        }
                    }, {
                        key: "escapeStringForRegexp",
                        value: function (a) {
                            return a.replace(w, "\\$&")
                        }
                    }, {
                        key: "isValidPolishStreetAddress",
                        value: function (a) {
                            return "string" == typeof a && p.test(a)
                        }
                    }, {
                        key: "isValidLength",
                        value: function (a, c, d) {
                            return webwave.isDef(d) || (d = b.fieldMinLength.EMPTY),
                            a.length <= c && a.length > d
                        }
                    }, {
                        key: "isValidMaxLength",
                        value: function (a, b) {
                            return a.length <= b
                        }
                    }, {
                        key: "isValidMinLength",
                        value: function (a, b) {
                            return a.length > b
                        }
                    }, {
                        key: "isEqualLength",
                        value: function (a,
                            b) {
                            return a.length === b
                        }
                    }, {
                        key: "escapeHtml",
                        value: function (a) {
                            return String(a).replace(/[&<>"'\/]/g, function (a) {
                                return u[a]
                            })
                        }
                    }, {
                        key: "removeHtml",
                        value: function (a) {
                            return String(a).replace(/<\/?[^>]+(>|$)/g, "")
                        }
                    }, {
                        key: "normalizeTextForUrl",
                        value: function (a) {
                            return webwave.isString(a) && (a = a.toLowerCase(), a = b.removeUnsafeCharactersFromTextForUrl(a), a = (a = b.removeUnwantedCharactersFromTextForUrl(a)).replace(/[ \u00A0]/g, "-")),
                            a
                        }
                    }, {
                        key: "normalizeTextForRefUrl",
                        value: function (a) {
                            return webwave.isString(a) &&
                            (a = (a = a.replace(/\s/g, "")).substring(0, 254), !1 === /([a-zA-Z-])+/g.test(a) && (a = a.replace(/\d/g, "")), a = b.normalizeTextForUrl(a)),
                            a
                        }
                    }, {
                        key: "removeUnwantedCharactersFromTextForUrl",
                        value: function (a) {
                            return webwave.isString(a) && (a = a.replace(/[.,\r\n]/g, "")),
                            a
                        }
                    }, {
                        key: "removeUnsafeCharactersFromTextForUrl",
                        value: function (a) {
                            return webwave.isString(a) && (a = a.replace(/[\[\]`~&\^%@"<>\\\/#|?:;={}$+]/g, "")),
                            a
                        }
                    }, {
                        key: "valueNonNumericChars",
                        value: function (a) {
                            return h.a.ONLY_LETTERS.test(a)
                        }
                    }, {
                        key: "replaceExtensionInSrc",
                        value: function (a, b) {
                            return webwave.isString(a) && webwave.isString(b) && (a = a.replace(/\.[^.]+$/, "." + b)),
                            a
                        }
                    }, {
                        key: "joinArrayUsingCut",
                        value: function (a) {
                            for (var b = a[0], c = 1; c < a.length; c++)
                                b += ", ".concat(a[c]);
                            return b
                        }
                    }, {
                        key: "joinArrayUsingChar",
                        value: function (a, b) {
                            for (var c = a[0], d = 1; d < a.length; d++)
                                c += "".concat(b, " ").concat(a[d]);
                            return c
                        }
                    }, {
                        key: "capitalizeFirstLetter",
                        value: function (a) {
                            return a.charAt(0).toUpperCase() + a.slice(1)
                        }
                    }, {
                        key: "getValidHref",
                        value: function (a) {
                            if (!1 === b.checkIsValidUrl(a)) {
                                var c =
                                    "https://".concat(a);
                                if (b.checkIsValidUrl(c))
                                    return c
                            }
                            return a
                        }
                    }, {
                        key: "updateOrAddParameterToUrl",
                        value: function (a, b, c) {
                            var d = new RegExp("([?&])" + b + "=.*?(&|$)", "i"),
                            e = -1 !== a.indexOf("?") ? "&" : "?";
                            return a.match(d) ? a.replace(d, "$1" + b + "=" + c + "$2") : a + e + b + "=" + c
                        }
                    }, {
                        key: "trimFirstAndLastQuote",
                        value: function (a) {
                            return webwave.isStringAndNotEmpty(a) ? a.replace(/^\"|\"$/g, "") : a
                        }
                    }, {
                        key: "isHeaderOnly",
                        value: function (a) {
                            return /^\*\*(.*)\*\*$/.test(a.trim())
                        }
                    }, {
                        key: "removeBoldFromHeader",
                        value: function (a) {
                            return a.replace(/^\*\*(.*)\*\*$/,
                                "$1").trim()
                        }
                    }, {
                        key: "removeHeader",
                        value: function (a) {
                            return a.replace(/^\*\*.*\*\*\s*/, "").trim()
                        }
                    }, {
                        key: "trimHeaderAndRemoveBold",
                        value: function (a) {
                            return b.isHeaderOnly(a) ? b.removeBoldFromHeader(a) : b.removeHeader(a)
                        }
                    }, {
                        key: "trimMarkdown",
                        value: function (a) {
                            return (a = a.match(/```(\w+)\s*([\s\S]*?)\s*```/)) ? a[2].trim() : ""
                        }
                    }, {
                        key: "trimMarkdownIfExists",
                        value: function (a) {
                            return a.includes("```") ? b.trimMarkdown(a) : a
                        }
                    }, {
                        key: "convertNaturalTextToCamelCase",
                        value: function (a) {
                            a = a.split(" ");
                            var c = a.shift();
                            return (a = a.map(function (a) {
                                    return b.capitalizeFirstLetter(a)
                                })).unshift(c),
                            a.join("")
                        }
                    }, {
                        key: "convertToVerticalText",
                        value: function (a) {
                            return a.toString().split("").join("<br>")
                        }
                    }, {
                        key: "generateUUID",
                        value: function () {
                            return f()()
                        }
                    }, {
                        key: "stringToHash",
                        value: function (a) {
                            var b = 0,
                            c = a.length,
                            d = 0;
                            if (0 < c)
                                for (; d < c; )
                                    b = (b << 5) - b + a.charCodeAt(d++) | 0;
                            return b
                        }
                    }, {
                        key: "isStringEndWithAnyOfPhrases",
                        value: function (a, c) {
                            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                            return c.some(function (c) {
                                return b.isStringEndWithPhrase(a,
                                    c, d)
                            })
                        }
                    }, {
                        key: "isStringEndWithPhrase",
                        value: function (a, b) {
                            return (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipCaseSensitive && (a = a.toLowerCase(), b = b.toLowerCase()),
                            !0 === a.endsWith(b)
                        }
                    }, {
                        key: "extendsStringWithSymbolToReachMinLength",
                        value: function (a, b, c) {
                            var d = a;
                            if (webwave.isString(a) && 0 == d.length >= b && webwave.isDef(c))
                                for (; 0 == d.length >= b; )
                                    d += c;
                            return d
                        }
                    }, {
                        key: "truncateLink",
                        value: function (a) {
                            return a.substring(0, Math.min(a.length, 200 - (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] :
                                        0)))
                        }
                    }, {
                        key: "simplifyNewAddress",
                        value: function (a) {
                            a = (a = (a = b.truncateLink(a)).trim()).split("/");
                            for (var c = 0; c < a.length; c++)
                                a[c] = b.removeUnsafeCharactersFromTextForUrl(a[c]);
                            return a.join("/").replace(/^\/+/g, "")
                        }
                    }, {
                        key: "truncateText",
                        value: function (a, b) {
                            return a.length > b ? a.slice(0, b - 3).trim() + "..." : a
                        }
                    }, {
                        key: "camelCaseToSeparateWords",
                        value: function (a) {
                            return a.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()
                        }
                    }, {
                        key: "cutStringAfterNWord",
                        value: function () {
                            var a = 0 < arguments.length && void 0 !== arguments[0] ?
                                arguments[0] : {};
                            if (webwave.isString(a.text) && webwave.isNumberAndNotNaN(a.wordsNumber)) {
                                for (var b, c = 0, d = a.text, e = 0; e < a.wordsNumber && null != (b = /\s*\S+/.exec(d)); e++)
                                    d = d.substring(b[0].length), c += b[0].length;
                                return a.showDots ? a.text.substr(0, c) + "..." : a.text.substr(0, c)
                            }
                            return a.text
                        }
                    }, {
                        key: "trimAndReplaceSpaces",
                        value: function (a) {
                            return a.trim().replace(/\s+/g, " ")
                        }
                    }
                ]),
            b
        }
        ();
        "function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function (a) {
            return this.slice(0, a.length) == a
        });
        "function" !=
        typeof String.prototype.endsWith && (String.prototype.endsWith = function (a) {
            return this.slice(-a.length) == a
        });
        v.passwordTypes = {
            SIMPLE: "simple",
            SIMPLE_WITHOUT_RESTRICTIONS: "SIMPLE_WITHOUT_RESTRICTIONS",
            NORMAL: "normal"
        };
        v.fieldMaxLength = {
            NORMAL: 255
        };
        v.fieldMinLength = {
            NORMAL: 0,
            EMPTY: -1
        };
        window.stringUtils = v
    },
    8555: function (g, c, b) {
        b.d(c, "a", function () {
            return f
        });
        var k = b(0),
        l = b(1),
        f = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "createVariableById",
                        value: function (b) {
                            return "var(--".concat(b,
                                ")")
                        }
                    }, {
                        key: "findVariablesValuesInString",
                        value: function (b) {
                            return webwave.isDefAndNotNull(b) ? b.match(/--[a-zA-Z_0-9]*/g) : null
                        }
                    }, {
                        key: "isVariableExistInString",
                        value: function (c) {
                            c = b.findVariablesValuesInString(c);
                            return webwave.isArrayLike(c) && 0 < c.length
                        }
                    }
                ]),
            b
        }
        ()
    },
    8556: function (g, c, b) {
        b.d(c, "a", function () {
            return f
        });
        var k = b(0),
        l = b(1),
        f = function () {
            function b() {
                Object(k.a)(this, b)
            }
            return Object(l.a)(b, null, [{
                        key: "generateSelectOptionsFromEnum",
                        value: function (b, a, c) {
                            var f = {};
                            webwave.isString(a) ? f.prefix =
                                a : Object.assign(f, a);
                            webwave.isString(c) && (f.suffix = c);
                            a = [];
                            c = webwave.isStringAndNotEmpty(f.prefix) ? "".concat(f.prefix, ".") : "";
                            var g = webwave.isStringAndNotEmpty(f.tooltipPrefix) ? "".concat(f.tooltipPrefix, ".") : c,
                            h = webwave.isStringAndNotEmpty(f.suffix) ? ".".concat(f.suffix) : "",
                            k = webwave.isStringAndNotEmpty(f.tooltipSuffix) ? ".".concat(f.tooltipSuffix) : ".tooltip";
                            b = webwave.isArrayLike(b) ? b : Object.values(b);
                            for (var l = 0; l < b.length; l++) {
                                var p = b[l],
                                u = !0 === f.withTooltip ? i18n.t("".concat(g).concat(p).concat(k)) :
                                    void 0,
                                w = !0 === f.withId ? p : void 0;
                                a.push({
                                    value: p,
                                    label: i18n.t("".concat(c).concat(p).concat(h)),
                                    id: w,
                                    tooltip: u
                                })
                            }
                            return a
                        }
                    }, {
                        key: "removeRactivity",
                        value: function (b) {
                            return Object.assign({}, b)
                        }
                    }, {
                        key: "addNonReactiveProperty",
                        value: function (b, a, c) {
                            Object.defineProperty(b, a, {
                                value: c,
                                configurable: !1
                            })
                        }
                    }
                ]),
            b
        }
        ()
    },
    998: function (g, c, b) {
        b.d(c, "a", function () {
            return k
        });
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        var k = {
            BackgroundParallaxService: Symbol.for("BackgroundParallaxService"),
            BrowserHistoryService: Symbol.for("BrowserHistoryService"),
            DynamicConfigService: Symbol.for("DynamicConfigService"),
            ElementAttributeService: Symbol.for("ElementAttributeService"),
            ElementRotationService: Symbol.for("ElementRotationService"),
            ElementService: Symbol.for("ElementService"),
            FacebookService: Symbol.for("FacebookService"),
            FeedService: Symbol.for("FeedService"),
            GroupService: Symbol.for("GroupService"),
            LoadCommentService: Symbol.for("LoadCommentService"),
            LocalStorageService: Symbol.for("LocalStorageService"),
            LockService: Symbol.for("LockService"),
            LoadResourceUtils: Symbol.for("LoadResourceUtils"),
            MarketingPartnershipService: Symbol.for("MarketingPartnershipService"),
            MediaPlayerService: Symbol.for("MediaPlayerService"),
            MenutoolService: Symbol.for("MenutoolService"),
            ModularObjectContentService: Symbol.for("ModularObjectContentService"),
            ObjectService: Symbol.for("ObjectService"),
            PageService: Symbol.for("PageService"),
            ProductCounterService: Symbol.for("ProductCounterService"),
            PublicatedScrollService: Symbol.for("PublicatedScrollService"),
            PublishedPageAreaService: Symbol.for("PublishedPageAreaService"),
            RwdService: Symbol.for("RwdService"),
            SimplyPopupManager: Symbol.for("SimplyPopupManager"),
            UserService: Symbol.for("UserService"),
            UtilService: Symbol.for("UtilService")
        }
    }
});
