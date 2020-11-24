var canvasDatagrid = function (e) {
    var t = {};

    function o(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }

    return o.m = e, o.c = t, o.d = function (e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) o.d(r, n, function (t) {
            return e[t]
        }.bind(null, n));
        return r
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 1)
}([function (e, t, o) {
    var r;
    void 0 === (r = function () {
        "use strict";
        return function (e) {
            e.defaults = {
                attributes: [["allowColumnReordering", !0], ["allowColumnResize", !0], ["allowColumnResizeFromCell", !1], ["allowFreezingRows", !1], ["allowFreezingColumns", !1], ["allowMovingSelection", !0], ["allowRowHeaderResize", !0], ["allowRowReordering", !1], ["allowRowResize", !0], ["allowRowResizeFromCell", !1], ["allowSorting", !0], ["autoGenerateSchema", !1], ["autoResizeColumns", !1], ["blanksText", "(Blanks)"], ["borderDragBehavior", "none"], ["borderResizeZone", 10], ["clearSettingsOptionText", "Clear saved settings"], ["columnHeaderClickBehavior", "sort"], ["columnSelectorHiddenText", "&nbsp;&nbsp;&nbsp;"], ["columnSelectorText", "Add/Remove columns"], ["columnSelectorVisibleText", "✓"], ["contextHoverScrollAmount", 2], ["contextHoverScrollRateMs", 5], ["copyHeadersOnSelectAll", !0], ["copyText", "Copy"], ["debug", !1], ["editable", !0], ["ellipsisText", "..."], ["filterOptionText", "Filter %s"], ["filterTextPrefix", "(filtered) "], ["globalRowResize", !1], ["hideColumnText", "Hide %s"], ["maxAutoCompleteItems", 200], ["multiLine", !1], ["name", ""], ["pageUpDownOverlap", 1], ["pasteText", "Paste"], ["persistantSelectionMode", !1], ["removeFilterOptionText", "Remove filter on %s"], ["reorderDeadZone", 3], ["resizeScrollZone", 20], ["rowGrabZoneSize", 5], ["saveAppearance", !0], ["scrollAnimationPPSThreshold", .75], ["scrollPointerLock", !1], ["scrollRepeatRate", 75], ["selectionFollowsActiveCell", !1], ["selectionHandleBehavior", "none"], ["selectionMode", "cell"], ["selectionScrollIncrement", 20], ["selectionScrollZone", 20], ["showClearSettingsOption", !0], ["showColumnHeaders", !0], ["showColumnSelector", !0], ["showCopy", !1], ["showFilter", !0], ["showNewRow", !1], ["showOrderByOption", !0], ["showOrderByOptionTextAsc", "Order by %s ascending"], ["showOrderByOptionTextDesc", "Order by %s descending"], ["showPaste", !1], ["showPerformance", !1], ["showRowHeaders", !0], ["showRowNumbers", !0], ["singleSelectionMode", !1], ["snapToRow", !1], ["touchContextMenuTimeMs", 800], ["touchDeadZone", 3], ["touchEasingMethod", "easeOutQuad"], ["touchReleaseAcceleration", 1e3], ["touchReleaseAnimationDurationMs", 2e3], ["touchScrollZone", 20], ["touchSelectHandleZone", 20], ["touchZoomSensitivity", .005], ["touchZoomMin", .5], ["touchZoomMax", 1.75], ["maxPixelRatio", 2], ["tree", !1], ["treeHorizontalScroll", !1]],
                styles: [["activeCellBackgroundColor", "rgba(255, 255, 255, 1)"], ["activeCellBorderColor", "rgba(110, 168, 255, 1)"], ["activeCellBorderWidth", 1], ["activeCellColor", "rgba(0, 0, 0, 1)"], ["activeCellFont", "16px sans-serif"], ["activeCellHoverBackgroundColor", "rgba(255, 255, 255, 1)"], ["activeCellHorizontalAlignment", "left"], ["activeCellHoverColor", "rgba(0, 0, 0, 1)"], ["activeCellOverlayBorderColor", "rgba(66, 133, 244, 1)"], ["activeCellOverlayBorderWidth", 1], ["activeCellPaddingBottom", 5], ["activeCellPaddingLeft", 5], ["activeCellPaddingRight", 5], ["activeCellPaddingTop", 5], ["activeCellSelectedBackgroundColor", "rgba(236, 243, 255, 1)"], ["activeCellSelectedColor", "rgba(0, 0, 0, 1)"], ["activeCellVerticalAlignment", "center"], ["activeColumnHeaderCellBackgroundColor", "rgba(225, 225, 225, 1)"], ["activeColumnHeaderCellColor", "rgba(0, 0, 0, 1)"], ["activeRowHeaderCellBackgroundColor", "rgba(225, 225, 225, 1)"], ["activeRowHeaderCellColor", "rgba(0, 0, 0, 1)"], ["autocompleteBottomMargin", 60], ["autosizeHeaderCellPadding", 8], ["autosizePadding", 5], ["cellAutoResizePadding", 13], ["cellBackgroundColor", "rgba(255, 255, 255, 1)"], ["cellBorderColor", "rgba(195, 199, 202, 1)"], ["cellBorderWidth", 1], ["cellColor", "rgba(0, 0, 0, 1)"], ["cellFont", "16px sans-serif"], ["cellGridHeight", 250], ["cellHeight", 24], ["cellHeightWithChildGrid", 150], ["cellHorizontalAlignment", "left"], ["cellHoverBackgroundColor", "rgba(255, 255, 255, 1)"], ["cellHoverColor", "rgba(0, 0, 0, 1)"], ["cellPaddingBottom", 5], ["cellPaddingLeft", 5], ["cellPaddingRight", 5], ["cellPaddingTop", 5], ["cellSelectedBackgroundColor", "rgba(236, 243, 255, 1)"], ["cellSelectedColor", "rgba(0, 0, 0, 1)"], ["cellVerticalAlignment", "center"], ["cellWidth", 250], ["cellWidthWithChildGrid", 250], ["cellWhiteSpace", "nowrap"], ["cellLineHeight", 1], ["cellLineSpacing", 3], ["childContextMenuArrowColor", "rgba(43, 48, 43, 1)"], ["childContextMenuArrowHTML", "&#x25BA;"], ["childContextMenuMarginLeft", -11], ["childContextMenuMarginTop", -6], ["columnHeaderCellBackgroundColor", "rgba(240, 240, 240, 1)"], ["columnHeaderCellBorderColor", "rgba(172, 172, 172, 1)"], ["columnHeaderCellBorderWidth", 1], ["columnHeaderCellCapBackgroundColor", "rgba(240, 240, 240, 1)"], ["columnHeaderCellCapBorderColor", "rgba(172, 172, 172, 1)"], ["columnHeaderCellCapBorderWidth", 1], ["columnHeaderCellColor", "rgba(50, 50, 50, 1)"], ["columnHeaderCellFont", "16px sans-serif"], ["columnHeaderCellHeight", 25], ["columnHeaderCellHorizontalAlignment", "left"], ["columnHeaderCellHoverBackgroundColor", "rgba(235, 235, 235, 1)"], ["columnHeaderCellHoverColor", "rgba(0, 0, 0, 1)"], ["columnHeaderCellPaddingBottom", 5], ["columnHeaderCellPaddingLeft", 5], ["columnHeaderCellPaddingRight", 5], ["columnHeaderCellPaddingTop", 5], ["columnHeaderCellVerticalAlignment", "center"], ["columnHeaderOrderByArrowBorderColor", "rgba(195, 199, 202, 1)"], ["columnHeaderOrderByArrowBorderWidth", 1], ["columnHeaderOrderByArrowColor", "rgba(155, 155, 155, 1)"], ["columnHeaderOrderByArrowHeight", 8], ["columnHeaderOrderByArrowMarginLeft", 0], ["columnHeaderOrderByArrowMarginRight", 5], ["columnHeaderOrderByArrowMarginTop", 6], ["columnHeaderOrderByArrowWidth", 13], ["contextFilterButtonBorder", "solid 1px rgba(158, 163, 169, 1)"], ["contextFilterButtonBorderRadius", "3px"], ["contextFilterButtonHTML", "&#x25BC;"], ["contextFilterInputBackground", "rgba(255,255,255,1)"], ["contextFilterInputBorder", "solid 1px rgba(158, 163, 169, 1)"], ["contextFilterInputBorderRadius", "0"], ["contextFilterInputColor", "rgba(0,0,0,1)"], ["contextFilterInputFontFamily", "sans-serif"], ["contextFilterInputFontSize", "14px"], ["contextFilterInvalidRegExpBackground", "rgba(180, 6, 1, 1)"], ["contextFilterInvalidRegExpColor", "rgba(255, 255, 255, 1)"], ["contextMenuArrowColor", "rgba(43, 48, 43, 1)"], ["contextMenuArrowDownHTML", "&#x25BC;"], ["contextMenuArrowUpHTML", "&#x25B2;"], ["contextMenuBackground", "rgba(240, 240, 240, 1)"], ["contextMenuBorder", "solid 1px rgba(158, 163, 169, 1)"], ["contextMenuBorderRadius", "3px"], ["contextMenuChildArrowFontSize", "12px"], ["contextMenuColor", "rgba(43, 48, 43, 1)"], ["contextMenuCursor", "default"], ["contextMenuFilterButtonFontFamily", "sans-serif"], ["contextMenuFilterButtonFontSize", "10px"], ["contextMenuFilterInvalidExpresion", "rgba(237, 155, 156, 1)"], ["contextMenuFontFamily", "sans-serif"], ["contextMenuFontSize", "16px"], ["contextMenuHoverBackground", "rgba(182, 205, 250, 1)"], ["contextMenuHoverColor", "rgba(43, 48, 153, 1)"], ["contextMenuItemBorderRadius", "3px"], ["contextMenuItemMargin", "2px"], ["contextMenuLabelDisplay", "inline-block"], ["contextMenuLabelMargin", "0 3px 0 0"], ["contextMenuLabelMaxWidth", "700px"], ["contextMenuLabelMinWidth", "75px"], ["contextMenuMarginLeft", 3], ["contextMenuMarginTop", -3], ["contextMenuOpacity", "0.98"], ["contextMenuPadding", "2px"], ["contextMenuWindowMargin", 30], ["contextMenuZIndex", 1e4], ["cornerCellBackgroundColor", "rgba(240, 240, 240, 1)"], ["cornerCellBorderColor", "rgba(202, 202, 202, 1)"], ["debugBackgroundColor", "rgba(0, 0, 0, .0)"], ["debugColor", "rgba(255, 15, 24, 1)"], ["debugEntitiesColor", "rgba(76, 231, 239, 1.00)"], ["debugFont", "11px sans-serif"], ["debugPerfChartBackground", "rgba(29, 25, 26, 1.00)"], ["debugPerfChartTextColor", "rgba(255, 255, 255, 0.8)"], ["debugPerformanceColor", "rgba(252, 255, 37, 1.00)"], ["debugScrollHeightColor", "rgba(248, 33, 103, 1.00)"], ["debugScrollWidthColor", "rgba(66, 255, 27, 1.00)"], ["debugTouchPPSXColor", "rgba(246, 102, 24, 1.00)"], ["debugTouchPPSYColor", "rgba(186, 0, 255, 1.00)"], ["display", "inline-block"], ["editCellBackgroundColor", "white"], ["editCellBorder", "solid 1px rgba(110, 168, 255, 1)"], ["editCellBoxShadow", "0 2px 5px rgba(0,0,0,0.4)"], ["editCellColor", "black"], ["editCellFontFamily", "sans-serif"], ["editCellFontSize", "16px"], ["editCellPaddingLeft", 4], ["editCellZIndex", 1e4], ["frozenMarkerHoverColor", "rgba(236, 243, 255, 1)"], ["frozenMarkerHoverBorderColor", "rgba(110, 168, 255, 1)"], ["frozenMarkerActiveColor", "rgba(236, 243, 255, 1)"], ["frozenMarkerActiveBorderColor", "rgba(110, 168, 255, 1)"], ["frozenMarkerColor", "rgba(222, 222, 222, 1)"], ["frozenMarkerBorderColor", "rgba(168, 168, 168, 1)"], ["frozenMarkerBorderWidth", 1], ["frozenMarkerWidth", 2], ["gridBackgroundColor", "rgba(240, 240, 240, 1)"], ["gridBorderCollapse", "collapse"], ["gridBorderColor", "rgba(202, 202, 202, 1)"], ["gridBorderWidth", 1], ["height", "auto"], ["maxHeight", "inherit"], ["maxWidth", "inherit"], ["minColumnWidth", 45], ["minHeight", "inherit"], ["minRowHeight", 24], ["minWidth", "inherit"], ["mobileContextMenuMargin", 10], ["mobileEditInputHeight", 30], ["mobileEditFontFamily", "sans-serif"], ["mobileEditFontSize", "16px"], ["moveOverlayBorderWidth", 1], ["moveOverlayBorderColor", "rgba(66, 133, 244, 1)"], ["moveOverlayBorderSegments", "12, 7"], ["name", "default"], ["overflowY", "auto"], ["overflowX", "auto"], ["reorderMarkerBackgroundColor", "rgba(0, 0, 0, 0.1)"], ["reorderMarkerBorderColor", "rgba(0, 0, 0, 0.2)"], ["reorderMarkerBorderWidth", 1.25], ["reorderMarkerIndexBorderColor", "rgba(66, 133, 244, 1)"], ["reorderMarkerIndexBorderWidth", 2.75], ["rowHeaderCellBackgroundColor", "rgba(240, 240, 240, 1)"], ["rowHeaderCellBorderColor", "rgba(200, 200, 200, 1)"], ["rowHeaderCellBorderWidth", 1], ["rowHeaderCellColor", "rgba(50, 50, 50, 1)"], ["rowHeaderCellFont", "16px sans-serif"], ["rowHeaderCellHeight", 25], ["rowHeaderCellHorizontalAlignment", "left"], ["rowHeaderCellHoverBackgroundColor", "rgba(235, 235, 235, 1)"], ["rowHeaderCellHoverColor", "rgba(0, 0, 0, 1)"], ["rowHeaderCellPaddingBottom", 5], ["rowHeaderCellPaddingLeft", 5], ["rowHeaderCellPaddingRight", 5], ["rowHeaderCellPaddingTop", 5], ["rowHeaderCellSelectedBackgroundColor", "rgba(217, 217, 217, 1)"], ["rowHeaderCellSelectedColor", "rgba(50, 50, 50, 1)"], ["rowHeaderCellVerticalAlignment", "center"], ["rowHeaderCellWidth", 57], ["scrollBarActiveColor", "rgba(125, 125, 125, 1)"], ["scrollBarBackgroundColor", "rgba(240, 240, 240, 1)"], ["scrollBarBorderColor", "rgba(202, 202, 202, 1)"], ["scrollBarBorderWidth", .5], ["scrollBarBoxBorderRadius", 4.125], ["scrollBarBoxColor", "rgba(192, 192, 192, 1)"], ["scrollBarBoxMargin", 2], ["scrollBarBoxMinSize", 15], ["scrollBarBoxWidth", 8], ["scrollBarCornerBackgroundColor", "rgba(240, 240, 240, 1)"], ["scrollBarCornerBorderColor", "rgba(202, 202, 202, 1)"], ["scrollBarWidth", 11], ["selectionHandleBorderColor", "rgba(255, 255, 255, 1)"], ["selectionHandleBorderWidth", 1.5], ["selectionHandleColor", "rgba(66, 133, 244, 1)"], ["selectionHandleSize", 8], ["selectionHandleType", "square"], ["selectionOverlayBorderColor", "rgba(66, 133, 244, 1)"], ["selectionOverlayBorderWidth", 1], ["treeArrowBorderColor", "rgba(195, 199, 202, 1)"], ["treeArrowBorderWidth", 1], ["treeArrowClickRadius", 5], ["treeArrowColor", "rgba(155, 155, 155, 1)"], ["treeArrowHeight", 8], ["treeArrowMarginLeft", 0], ["treeArrowMarginRight", 5], ["treeArrowMarginTop", 6], ["treeArrowWidth", 13], ["treeGridHeight", 250], ["width", "auto"]]
            }
        }
    }.apply(t, [])) || (e.exports = r)
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(6), __webpack_require__(7), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function context(component) {
        "use strict";
        component = component();
        var modules = Array.prototype.slice.call(arguments);

        function Grid(args) {
            args = args || {};
            var self = {};
            return self.isComponent = void 0 === args.component, self.isChildGrid = args.parentNode && /canvas-datagrid-(cell|tree)/.test(args.parentNode.nodeType), self.isChildGrid ? self.intf = {} : self.intf = self.isComponent ? eval("Reflect.construct(HTMLElement, [], new.target)") : document.createElement("canvas"), self.args = args, self.intf.args = args, self.applyComponentStyle = component.applyComponentStyle, self.hyphenateProperty = component.hyphenateProperty, self.dehyphenateProperty = component.dehyphenateProperty, self.createGrid = function (e) {
                return e.component = !1, new Grid(e)
            }, modules.forEach((function (e) {
                e(self)
            })), self.isChildGrid ? (self.shadowRoot = args.parentNode.shadowRoot, self.parentNode = args.parentNode) : (self.shadowRoot = self.intf.attachShadow({mode: "open"}), self.parentNode = self.shadowRoot), self.init(), self.intf
        }

        return window.HTMLElement && (Grid.prototype = Object.create(window.HTMLElement.prototype)), window.customElements && (Grid.observedAttributes = component.getObservableAttributes(), Grid.prototype.disconnectedCallback = component.disconnectedCallback, Grid.prototype.attributeChangedCallback = component.attributeChangedCallback, Grid.prototype.connectedCallback = component.connectedCallback, Grid.prototype.adoptedCallback = component.adoptedCallback, window.customElements.define("canvas-datagrid", Grid)), !window || window.canvasDatagrid || window.require || (window.canvasDatagrid = function (e) {
            return new Grid(e)
        }), module.exports = function (e) {
            e = e || {};
            var t,
                o = ["style", "formatters", "sorters", "filters", "treeGridAttributes", "cellGridAttributes", "data", "schema"];
            return window.customElements ? (t = document.createElement("canvas-datagrid"), Object.keys(e).forEach((function (r) {
                "data" !== r && "parentNode" !== r && (-1 === o.indexOf(r) ? t.attributes[r] = e[r] : o.forEach((function (o) {
                    void 0 !== e[o] && o === r && (-1 !== ["formatters", "sorters", "filters"].indexOf(r) ? "object" === _typeof(e[o]) && null !== e[o] && Object.keys(e[o]).forEach((function (r) {
                        t[o][r] = e[o][r]
                    })) : t[o] = e[o])
                })))
            })), e.data && (t.data = e.data), e.parentNode && e.parentNode.appendChild(t), t) : (e.component = !1, t = new Grid(e), e.parentNode && e.parentNode.appendChild && e.parentNode.appendChild(t), t)
        }, module.exports
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (defaults) {
        "use strict";
        return function () {
            var typeMap, component = {};

            function getDefaultItem(e, t) {
                var o = {};
                return defaults(o), o.defaults[e].filter((function (e) {
                    return e[0].toLowerCase() === t.toLowerCase() || component.hyphenateProperty(e[0]) === t.toLowerCase() || component.hyphenateProperty(e[0], !0) === t.toLowerCase()
                }))[0]
            }

            return component.dehyphenateProperty = function (e) {
                e = e.replace("--cdg-", "");
                var t, o = "";
                return Array.prototype.forEach.call(e, (function (e) {
                    if (t) return t = !1, void (o += e.toUpperCase());
                    "-" !== e ? o += e : t = !0
                })), o
            }, component.hyphenateProperty = function (e, t) {
                var o = "";
                return Array.prototype.forEach.call(e, (function (e) {
                    e !== e.toUpperCase() ? o += e : o += "-" + e.toLowerCase()
                })), (t ? "--cdg-" : "") + o
            }, component.applyComponentStyle = function (e, t) {
                if (t.isComponent) {
                    var o = window.getComputedStyle("CANVAS-DATAGRID" === t.tagName ? t : t.canvas, null), r = {};
                    t.computedStyle = o, defaults(r), (r = r.defaults.styles).forEach((function (e) {
                        var r;
                        "" === (r = o.getPropertyValue(component.hyphenateProperty(e[0], !0))) && (r = o.getPropertyValue(component.hyphenateProperty(e[0], !1))), "" !== r && "string" == typeof r && t.setStyleProperty(e[0], typeMap[_typeof(e[1])](r.replace(/^\s+/, "").replace(/\s+$/, ""), e[1]), !0)
                    })), !e && t.dispatchEvent && (requestAnimationFrame((function () {
                        t.resize(!0)
                    })), t.dispatchEvent("stylechanged", t.style))
                }
            }, typeMap = {
                data: function (e) {
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        throw new Error("Cannot read JSON data in canvas-datagrid data.")
                    }
                }, schema: function (e) {
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        throw new Error("Cannot read JSON data in canvas-datagrid schema attribute.")
                    }
                }, number: function (e, t) {
                    var o = parseInt(e, 10);
                    return isNaN(o) ? t : o
                }, boolean: function (e) {
                    return /true/i.test(e)
                }, string: function (e) {
                    return e
                }
            }, component.getObservableAttributes = function () {
                var e = {}, t = ["data", "schema", "style", "className", "name"];
                return defaults(e), e.defaults.attributes.forEach((function (e) {
                    t.push(e[0].toLowerCase())
                })), t
            }, component.disconnectedCallback = function () {
                this.connected = !1
            }, component.connectedCallback = function () {
                this.parentDOMNode.innerHTML = "", this.parentDOMNode.appendChild(this.canvas), this.connected = !0, component.observe(this), component.applyComponentStyle(!0, this), this.resize(!0)
            }, component.adoptedCallback = function () {
                this.resize()
            }, component.attributeChangedCallback = function (attrName, oldVal, newVal) {
                var tfn, intf = this, def;
                if ("style" !== attrName) {
                    if ("data" === attrName) return "application/x-canvas-datagrid" === intf.dataType && (intf.dataType = "application/json+x-canvas-datagrid"), void (intf.args.data = newVal);
                    if ("schema" !== attrName) if ("name" !== attrName) {
                        if ("class" !== attrName && "className" !== attrName) {
                            if (def = getDefaultItem("attributes", attrName), def) return tfn = typeMap[_typeof(def[1])], void (intf.attributes[def[0]] = tfn(newVal));
                            /^on/.test(attrName) && intf.addEventListener("on" + attrName, (function (e) {
                                eval(newVal)
                            }))
                        }
                    } else intf.name = newVal; else intf.args.schema = typeMap.schema(newVal)
                } else component.applyComponentStyle(!1, intf)
            }, component.observe = function (e) {
                var t;
                window.MutationObserver && (e.applyComponentStyle = function () {
                    component.applyComponentStyle(!1, e), e.resize()
                }, (t = new window.MutationObserver((function (t) {
                    var o, r;
                    Array.prototype.forEach.call(t, (function (t) {
                        "class" !== t.attributeName && "style" !== t.attributeName && "STYLE" !== t.target.nodeName ? t.target.parentNode && "STYLE" === t.target.parentNode.nodeName ? r = !0 : t.target === e && (t.addedNodes.length > 0 || "characterData" === t.type) && (o = !0) : r = !0
                    })), r && e.applyComponentStyle(!1, e), o && ("application/x-canvas-datagrid" === e.dataType && (e.dataType = "application/json+x-canvas-datagrid"), e.data = e.innerHTML)
                }))).observe(e, {
                    characterData: !0,
                    childList: !0,
                    attributes: !0,
                    subtree: !0
                }), Array.prototype.forEach.call(document.querySelectorAll("style"), (function (e) {
                    t.observe(e, {characterData: !0, childList: !0, attributes: !0, subtree: !0})
                })))
            }, component
        }
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
}, function (e, t, o) {
    var r;
    void 0 === (r = function () {
        "use strict";
        return function (e) {
            var t = [], o = !1, r = 0, n = [], l = [], i = [];

            function a(e, t, o, r) {
                o = o || 1;
                var n, l = [];
                for (n = e; n <= t; n += o) l[n] = void 0 === r ? n : "function" == typeof r ? r(n) : r;
                return l
            }

            function s(t) {
                var r, n = t.innerHTML || t.formattedValue,
                    l = n.toString() + t.rowIndex.toString() + t.columnIndex.toString(), i = t.x + e.canvasOffsetLeft,
                    a = t.y + e.canvasOffsetTop;
                if (e.htmlImageCache[l]) {
                    if (r = e.htmlImageCache[l].img, e.htmlImageCache[l].height === t.height && e.htmlImageCache[l].width === t.width) {
                        if (!r.complete) return;
                        return e.ctx.drawImage(r, i, a)
                    }
                    e.htmlImageCache[l] = void 0
                } else o = !1;
                r = new Image(t.width, t.height), e.htmlImageCache[l] = {
                    img: r,
                    width: t.width,
                    height: t.height
                }, r.onload = function () {
                    var t;
                    e.ctx.drawImage(r, i, a), t = !0, Object.keys(e.htmlImageCache).forEach((function (o) {
                        e.htmlImageCache[o].img.complete || (t = !1)
                    })), t && !o && (o = !0, e.draw())
                }, r.src = "data:image/svg+xml;base64," + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="' + t.width + '" height="' + t.height + '">\n<foreignObject class="node" x="0" y="0" width="100%" height="100%">\n<body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0;">\n' + n + "\n</body></foreignObject>\n</svg>\n")
            }

            function c(t, o, r, n, l) {
                var i = (t += e.canvasOffsetLeft) + r, a = (o += e.canvasOffsetTop) + n;
                e.ctx.beginPath(), e.ctx.moveTo(t + l, o), e.ctx.lineTo(i - l, o), e.ctx.quadraticCurveTo(i, o, i, o + l), e.ctx.lineTo(i, o + n - l), e.ctx.quadraticCurveTo(i, a, i - l, a), e.ctx.lineTo(t + l, a), e.ctx.quadraticCurveTo(t, a, t, a - l), e.ctx.lineTo(t, o + l), e.ctx.quadraticCurveTo(t, o, t + l, o)
            }

            function d(t, o, r, n) {
                t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.fillRect(t, o, r, n)
            }

            function u(t, o, r, n) {
                t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.strokeRect(t, o, r, n)
            }

            function h(t, o, r) {
                o += e.canvasOffsetLeft, r += e.canvasOffsetTop, e.ctx.fillText(t, o, r)
            }

            function f(t) {
                e.ctx.beginPath(), 0 === t && (e.ctx.moveTo(e.lastFrozenColumnPixel, e.lastFrozenRowPixel), e.ctx.lineTo(e.lastFrozenColumnPixel, e.height), e.ctx.lineTo(e.width, e.height), e.ctx.lineTo(e.width, e.lastFrozenRowPixel)), 1 === t && (e.ctx.moveTo(0, e.lastFrozenRowPixel), e.ctx.lineTo(0, e.height), e.ctx.lineTo(e.width, e.height), e.ctx.lineTo(e.width, e.lastFrozenRowPixel)), 2 === t && (e.ctx.moveTo(e.lastFrozenColumnPixel, 0), e.ctx.lineTo(e.width, 0), e.ctx.lineTo(e.width, e.height), e.ctx.lineTo(e.lastFrozenColumnPixel, e.height)), e.ctx.clip()
            }

            function g(t, o, r) {
                if ("circle" === e.style.selectionHandleType) return function (t, o, r) {
                    t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.beginPath(), e.ctx.arc(t, o, r, 0, 2 * Math.PI), e.ctx.fill()
                }(t, o, .5 * r);
                d(t - .5 * r, o - .5 * r, r, r)
            }

            function p(t, o, r) {
                if ("circle" === e.style.selectionHandleType) return function (t, o, r) {
                    t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.beginPath(), e.ctx.arc(t, o, r, 0, 2 * Math.PI), e.ctx.stroke()
                }(t, o, .5 * r);
                u(t - .5 * r, o - .5 * r, r, r)
            }

            function m(t, o) {
                e.ctx.beginPath(), {
                    t: function () {
                        e.ctx.moveTo(t.x + e.canvasOffsetLeft, t.y + e.canvasOffsetTop), e.ctx.lineTo(t.x + e.canvasOffsetLeft + t.width, t.y + e.canvasOffsetTop)
                    }, r: function () {
                        e.ctx.moveTo(t.x + e.canvasOffsetLeft + t.width, t.y + e.canvasOffsetTop), e.ctx.lineTo(t.x + e.canvasOffsetLeft + t.width, t.y + e.canvasOffsetTop + t.height)
                    }, b: function () {
                        e.ctx.moveTo(t.x + e.canvasOffsetLeft, t.y + e.canvasOffsetTop + t.height), e.ctx.lineTo(t.x + e.canvasOffsetLeft + t.width, t.y + e.canvasOffsetTop + t.height)
                    }, l: function () {
                        e.ctx.moveTo(t.x + e.canvasOffsetLeft, t.y + e.canvasOffsetTop), e.ctx.lineTo(t.x + e.canvasOffsetLeft, t.y + e.canvasOffsetTop + t.height)
                    }
                }[o](), e.ctx.stroke()
            }

            e.htmlImageCache = {}, e.draw = function (o) {
                if (!e.dispatchEvent("beforedraw", {}) && (e.isChildGrid || e.height && e.width)) if (e.isChildGrid && o) requestAnimationFrame(e.parentGrid.draw); else if (!1 !== e.intf.visible) {
                    var x, y, v, w, b, C, B, S, M, I, T, E, P, z, k, O, H, L, A, R, F, D, W, N, j, _, G = e.data || [],
                        V = "collapse" === e.style.gridBorderCollapse, Z = [], K = [], U = [], q = [], Y = G.length,
                        J = e.currentCell || {}, X = e.getColumnHeaderCellHeight(), Q = e.getRowHeaderCellWidth(),
                        $ = e.style.cellHeight;
                    r += 1, v = performance.now(), e.visibleRowHeights = [], G.length > e.orders.rows.length && e.createRowOrders(), e.ctx.save(), e.visibleRows = [], k = e.getSchema(), e.visibleCells = [], e.canvasOffsetTop = e.isChildGrid ? e.parentNode.offsetTop : 0, e.canvasOffsetLeft = e.isChildGrid ? e.parentNode.offsetLeft : 0, P = e.height, c(0, 0, z = e.width, P, 0), e.ctx.clip(), e.ctx.fillStyle = e.style.gridBackgroundColor, d(0, 0, z, P), function () {
                        var t = Math.min(G.length, e.frozenRow);
                        for (T = -e.scrollBox.scrollLeft + e.scrollPixelLeft + e.style.cellBorderWidth, I = X, O = 0; O < t && oe(e.orders.rows[O], O); O += 1) ;
                        e.attributes.allowFreezingRows && (I += e.style.frozenMarkerBorderWidth + e.style.frozenMarkerWidth - .4999999999), e.lastFrozenRowPixel = I
                    }(), function () {
                        e.ctx.save(), e.frozenRow > 0 && (c(0, e.lastFrozenRowPixel, e.width, e.height - e.lastFrozenRowPixel, 0), e.ctx.clip());
                        var t, o, r, n = k.length;
                        for (T = -e.scrollBox.scrollLeft + e.scrollPixelLeft + e.style.cellBorderWidth, e.attributes.snapToRow || (I += -e.scrollBox.scrollTop + e.scrollPixelTop + e.style.cellBorderWidth), O = e.frozenRow + e.scrollIndexTop; O < Y && (o = e.orders.rows[O], e.scrollIndexBottom = O, e.scrollPixelBottom = I, oe(o, O)); O += 1) ;
                        if (e.attributes.showNewRow) {
                            for (e.attributes.showRowHeaders && (T += Q), S = $ = e.style.cellHeight, B = !1, t = e.scrollIndexLeft; t < n && (r = e.orders.columns[t], !((T += te(e.newRow, G.length, G.length)(k[r], r, t)) > e.width + e.scrollBox.scrollLeft)); t += 1) ;
                            q.push([e.newRow, G.length, G.length, I, S])
                        }
                        e.ctx.restore()
                    }(), function () {
                        if (L) {
                            e.ctx.save();
                            var t = e.activeCell.columnIndex + 1 > e.frozenColumn || e.activeCell.rowIndex + 1 > e.frozenRow;
                            c(t ? e.lastFrozenColumnPixel : 0, t ? e.lastFrozenRowPixel : 0, t ? e.width - e.lastFrozenColumnPixel : e.width, t ? e.height - e.lastFrozenRowPixel : e.height, 0), e.ctx.clip(), "row" === e.attributes.selectionMode ? e.activeCell && e.activeCell.rowIndex === L.rowIndex && (e.ctx.lineWidth = e.style.activeCellOverlayBorderWidth, e.ctx.strokeStyle = e.style.activeCellOverlayBorderColor, u(0, L.y, e.getHeaderWidth() + Q, e.visibleRowHeights[L.rowIndex])) : (e.ctx.lineWidth = e.style.activeCellOverlayBorderWidth, e.ctx.strokeStyle = e.style.activeCellOverlayBorderColor, u(L.x, L.y, L.width, L.height)), e.ctx.restore()
                        }
                    }(), function () {
                        var t, o, r, n, l, i, a = k.length;

                        function s(i, s) {
                            for (s = Math.min(s, a), r = i; r < s && (o = e.orders.columns[r], (l = k[o]).hidden || (t = {
                                title: l.title,
                                name: l.name,
                                width: l.width || e.style.cellWidth,
                                style: "columnHeaderCell",
                                type: "string",
                                index: r,
                                order: o
                            }, n = {columnHeaderCell: l.title || l.name}, !((T += te(n, -1, -1)(t, o, r)) > e.width + e.scrollBox.scrollLeft))); r += 1) ;
                        }

                        q.forEach((function (t, o) {
                            I = t[3], $ = t[4], o === e.frozenRow && (e.ctx.save(), c(0, e.lastFrozenRowPixel, e.width, e.height - e.lastFrozenRowPixel, 0), e.ctx.clip()), function (t, o, r) {
                                var n, l;
                                e.attributes.showRowHeaders && (T = 0, y = {rowHeaderCell: l = o + 1}, n = {
                                    name: "rowHeaderCell",
                                    width: e.sizes.columns[-1] || e.style.rowHeaderCellWidth,
                                    style: "rowHeaderCell",
                                    type: "string",
                                    data: l,
                                    index: -1
                                }, B = e.openChildren[o], te(y, o, r)(n, -1, -1))
                            }(t[0], t[1], t[2])
                        })), e.ctx.restore(), e.attributes.showColumnHeaders && (T = -e.scrollBox.scrollLeft + e.scrollPixelLeft + e.style.columnHeaderCellBorderWidth, e.attributes.showRowHeaders && (T += Q), I = 0, $ = e.getColumnHeaderCellHeight(), s(e.scrollIndexLeft, a), i = T, T = e.style.columnHeaderCellBorderWidth, e.attributes.showRowHeaders && (T += Q), s(0, e.frozenColumn), (T = i) < z && (E = {
                            name: "",
                            width: e.style.scrollBarWidth,
                            style: "columnHeaderCellCap",
                            isColumnHeaderCell: !0,
                            isColumnHeaderCellCap: !0,
                            type: "string",
                            index: k.length
                        }, te({endCap: ""}, -1, -1)(E, -1, -1)), e.attributes.showRowHeaders && (M = {cornerCell: ""}, T = 0, E = {
                            name: "cornerCell",
                            width: e.style.rowHeaderCellWidth,
                            style: "cornerCell",
                            type: "string",
                            index: -1
                        }, te(M, -1, -1)(E, -1, -1)))
                    }(), A = e.lastFrozenRowPixel - e.style.frozenMarkerWidth, R = e.lastFrozenColumnPixel - e.style.frozenMarkerBorderWidth, F = e.currentCell && "frozen-row-marker" === e.currentCell.style, D = e.currentCell && "frozen-column-marker" === e.currentCell.style, e.ctx.lineWidth = e.style.frozenMarkerBorderWidth, e.attributes.allowFreezingColumns && (e.ctx.fillStyle = D ? e.style.frozenMarkerHoverColor : e.style.frozenMarkerColor, e.ctx.strokeStyle = D ? e.style.frozenMarkerHoverBorderColor : e.style.frozenMarkerBorderColor, d(R, 0, e.style.frozenMarkerWidth, e.height), u(R, 0, e.style.frozenMarkerWidth, e.height), e.visibleCells.unshift({
                        x: R,
                        y: 0,
                        height: e.height,
                        width: e.style.frozenMarkerWidth + e.style.frozenMarkerBorderWidth,
                        style: "frozen-column-marker"
                    })), e.attributes.allowFreezingRows && (e.ctx.fillStyle = F ? e.style.frozenMarkerHoverColor : e.style.frozenMarkerColor, e.ctx.strokeStyle = F ? e.style.frozenMarkerHoverBorderColor : e.style.frozenMarkerBorderColor, d(0, A, e.width, e.style.frozenMarkerWidth), u(0, A, e.width, e.style.frozenMarkerWidth), e.visibleCells.unshift({
                        x: 0,
                        y: A,
                        height: e.style.frozenMarkerWidth + e.style.frozenMarkerBorderWidth,
                        width: e.width,
                        style: "frozen-row-marker"
                    })), e.freezeMarkerPosition && (e.ctx.fillStyle = e.style.frozenMarkerActiveColor, e.ctx.strokeStyle = e.style.frozenMarkerActiveBorderColor, "frozen-column-marker" === e.dragMode ? (d(e.freezeMarkerPosition.x, 0, e.style.frozenMarkerWidth, e.height), u(e.freezeMarkerPosition.x, 0, e.style.frozenMarkerWidth, e.height)) : (d(0, e.freezeMarkerPosition.y, e.width, e.style.frozenMarkerWidth), u(0, e.freezeMarkerPosition.y, e.width, e.style.frozenMarkerWidth))), (e.mobile || e.attributes.allowMovingSelection) && (e.ctx.lineWidth = e.style.selectionHandleBorderWidth, e.ctx.strokeStyle = e.style.selectionHandleBorderColor, e.ctx.fillStyle = e.style.selectionHandleColor, U.forEach((function (t) {
                        !function (t, o) {
                            var r = e.style.selectionHandleSize;
                            ({
                                tr: function () {
                                    g(t.x + t.width, t.y, r), p(t.x + t.width, t.y, r)
                                }, br: function () {
                                    g(t.x + t.width, t.y + t.height, r), p(t.x + t.width, t.y + t.height, r)
                                }, tl: function () {
                                    g(t.x, t.y, r), p(t.x, t.y, r)
                                }, bl: function () {
                                    g(t.x, t.y + t.height, r), p(t.x, t.y + t.height, r)
                                }
                            })[o]()
                        }(t[0], t[1]);
                        var o = e.attributes.touchSelectHandleZone / 2,
                            r = t[0].x + ("tl" === t[1] || "bl" === t[1] ? 0 : t[0].width) - o,
                            n = t[0].y + ("bl" === t[1] || "br" === t[1] ? t[0].height : 0) - o;
                        e.visibleCells.unshift({
                            x: r,
                            y: n,
                            height: e.style.selectionHandleSize + o,
                            width: e.style.selectionHandleSize + o,
                            style: "selection-handle-" + t[1]
                        })
                    }))), function () {
                        if (e.reorderObject) {
                            var t = {
                                height: e.reorderObject.height,
                                width: e.reorderObject.width,
                                x: e.reorderObject.x + e.reorderObject.dragOffset.x,
                                y: e.reorderObject.y + e.reorderObject.dragOffset.y
                            }, o = {width: z, height: P, x: 0, y: 0};
                            e.ctx.fillStyle = e.style.reorderMarkerBackgroundColor, e.ctx.lineWidth = e.style.reorderMarkerBorderWidth, e.ctx.strokeStyle = e.style.reorderMarkerBorderColor, "row-reorder" === e.dragMode ? (t.width = z, t.x = 0, o.width = z, o.height = e.currentCell.height, o.y = e.currentCell.y, d(t.x, t.y, t.width, t.height), u(t.x, t.y, t.width, t.height), e.ctx.lineWidth = e.style.reorderMarkerIndexBorderWidth, e.ctx.strokeStyle = e.style.reorderMarkerIndexBorderColor, e.currentCell.rowIndex !== e.reorderObject.rowIndex && e.currentCell.rowIndex > -1 && e.currentCell.rowIndex < Y && m(o, e.reorderTarget.sortRowIndex > e.reorderObject.sortRowIndex ? "b" : "t")) : "column-reorder" === e.dragMode && e.reorderObject && (t.height = P, t.y = 0, o.height = P, o.width = e.currentCell.width, o.y = 0, o.x = e.currentCell.x, d(t.x, t.y, t.width, t.height), u(t.x, t.y, t.width, t.height), e.ctx.lineWidth = e.style.reorderMarkerIndexBorderWidth, e.ctx.strokeStyle = e.style.reorderMarkerIndexBorderColor, e.currentCell.sortColumnIndex !== e.reorderObject.sortColumnIndex && e.currentCell.sortColumnIndex > -1 && e.currentCell.sortColumnIndex < k.length && m(o, e.reorderTarget.columnIndex > e.reorderObject.columnIndex ? "r" : "l"))
                        }
                    }(), e.movingSelection && (e.ctx.lineWidth = e.style.moveOverlayBorderWidth, e.ctx.strokeStyle = e.style.moveOverlayBorderColor, e.ctx.setLineDash(e.style.moveOverlayBorderSegments), K.forEach((function (e) {
                        m(e[0], e[1])
                    })), e.ctx.setLineDash([])), e.ctx.lineWidth = e.style.gridBorderWidth, e.ctx.strokeStyle = e.style.gridBorderColor, u(0, 0, e.width, e.height), function () {
                        function t(e) {
                            m(e[0], e[1])
                        }

                        e.ctx.lineWidth = e.style.selectionOverlayBorderWidth, e.ctx.strokeStyle = e.style.selectionOverlayBorderColor, Z.filter((function (t) {
                            return t[0].rowIndex < e.frozenRow && t[0].columnIndex < e.frozenColumn
                        })).forEach(t), e.ctx.save(), f(0), Z.filter((function (t) {
                            return t[0].rowIndex >= e.frozenRow && t[0].columnIndex >= e.frozenColumn
                        })).forEach(t), e.ctx.restore(), e.ctx.save(), f(1), Z.filter((function (t) {
                            return t[0].rowIndex >= e.frozenRow && t[0].columnIndex < e.frozenColumn
                        })).forEach(t), e.ctx.restore(), e.ctx.save(), f(2), Z.filter((function (t) {
                            return t[0].rowIndex < e.frozenRow && t[0].columnIndex >= e.frozenColumn
                        })).forEach(t), e.ctx.restore()
                    }(), N = e.scrollBox.entities, j = 2 * e.style.scrollBarBoxMargin, e.ctx.strokeStyle = e.style.scrollBarBorderColor, e.ctx.lineWidth = e.style.scrollBarBorderWidth, N.horizontalBox.x = Q + e.style.scrollBarBoxMargin + (N.horizontalBar.width - e.scrollBox.scrollBoxWidth) * (e.scrollBox.scrollLeft / e.scrollBox.scrollWidth), N.verticalBox.y = X + e.style.scrollBarBoxMargin + (N.verticalBar.height - e.scrollBox.scrollBoxHeight) * (e.scrollBox.scrollTop / e.scrollBox.scrollHeight), e.scrollBox.horizontalBarVisible && (e.ctx.fillStyle = e.style.scrollBarBackgroundColor, d(N.horizontalBar.x, N.horizontalBar.y, N.horizontalBar.width + j, N.horizontalBar.height), u(N.horizontalBar.x, N.horizontalBar.y, N.horizontalBar.width + j, N.horizontalBar.height), e.ctx.fillStyle = e.style.scrollBarBoxColor, e.scrollBox.horizontalBoxVisible && (/horizontal/.test(J.context) && (e.ctx.fillStyle = e.style.scrollBarActiveColor), c(N.horizontalBox.x, N.horizontalBox.y, N.horizontalBox.width, N.horizontalBox.height, e.style.scrollBarBoxBorderRadius), e.ctx.stroke(), e.ctx.fill()), W = !0, e.visibleCells.unshift(N.horizontalBar), e.visibleCells.unshift(N.horizontalBox)), e.scrollBox.verticalBarVisible && (e.ctx.fillStyle = e.style.scrollBarBackgroundColor, d(N.verticalBar.x, N.verticalBar.y, N.verticalBar.width, N.verticalBar.height + j), u(N.verticalBar.x, N.verticalBar.y, N.verticalBar.width, N.verticalBar.height + j), e.scrollBox.verticalBoxVisible && (e.ctx.fillStyle = e.style.scrollBarBoxColor, /vertical/.test(J.context) && (e.ctx.fillStyle = e.style.scrollBarActiveColor), c(N.verticalBox.x, N.verticalBox.y, N.verticalBox.width, N.verticalBox.height, e.style.scrollBarBoxBorderRadius), e.ctx.stroke(), e.ctx.fill()), W = !0, e.visibleCells.unshift(N.verticalBar), e.visibleCells.unshift(N.verticalBox)), W && (e.ctx.strokeStyle = e.style.scrollBarCornerBorderColor, e.ctx.fillStyle = e.style.scrollBarCornerBackgroundColor, c(N.corner.x, N.corner.y, N.corner.width, N.corner.height, 0), e.ctx.stroke(), e.ctx.fill(), e.visibleCells.unshift(N.corner)), x && e.resize(!0), e.ctx.save(), (e.attributes.showPerformance || e.attributes.debug) && (0 === t.length && (t = a(0, 300, 1, 0)), t.pop(), t.unshift(performance.now() - v)), e.attributes.debug ? (e.ctx.font = e.style.debugFont, (_ = {}).perf = (t.reduce((function (e, t) {
                        return e + t
                    }), 0) / Math.min(r, t.length)).toFixed(1), _.perfDelta = t[0].toFixed(1), _.frozenColumnsWidth = function () {
                        var t = 0, o = e.getSchema(), r = 0, n = Math.min(e.frozenColumn, o.length);
                        for (0; r < n;) o[r].hidden ? 1 : t += e.getColummnWidth(r), r += 1;
                        return t
                    }(), _.htmlImages = Object.keys(e.htmlImageCache).length, _.reorderObject = "x: " + (e.reorderObject || {columnIndex: 0}).columnIndex + ", y: " + (e.reorderObject || {rowIndex: 0}).rowIndex, _.reorderTarget = "x: " + (e.reorderTarget || {columnIndex: 0}).columnIndex + ", y: " + (e.reorderTarget || {rowIndex: 0}).rowIndex, _.scale = e.scale, _.startScale = e.startScale, _.scaleDelta = e.scaleDelta, _.zoomDeltaStart = e.zoomDeltaStart, _.touchLength = e.touchLength, _.touches = "y0: " + (e.touchPosition || {y: 0}).y + " y1: " + (e.touchPosition1 || {y: 0}).y, _.scrollBox = e.scrollBox.toString(), _.scrollIndex = "x: " + e.scrollIndexLeft + ", y: " + e.scrollIndexTop, _.scrollPixel = "x: " + e.scrollPixelLeft + ", y: " + e.scrollPixelTop, _.canvasOffset = "x: " + e.canvasOffsetLeft + ", y: " + e.canvasOffsetTop, _.touchDelta = "x: " + e.touchDelta.x + ", y: " + e.touchDelta.y, _.touchAnimateTo = "x: " + e.touchAnimateTo.x + ", y: " + e.touchAnimateTo.y, _.scrollAnimation = "x: " + e.scrollAnimation.x + ", y: " + e.scrollAnimation.y, _.touchPPS = "x: " + e.xPPS + ", y: " + e.yPPS, _.touchPPST = "x: " + e.xPPST + ", y: " + e.yPPST, _.touchDuration = e.touchDuration, _.pointerLockPosition = e.pointerLockPosition ? e.pointerLockPosition.x + ", " + e.pointerLockPosition.y : "", _.size = "w: " + e.width + ", h: " + e.height, _.mouse = "x: " + e.mouse.x + ", y: " + e.mouse.y, _.touch = e.touchStart ? "x: " + e.touchStart.x + ", y: " + e.touchStart.y : "", _.entities = e.visibleCells.length, _.hasFocus = e.hasFocus, _.dragMode = e.dragMode, e.currentCell && (_.columnIndex = e.currentCell.columnIndex, _.rowIndex = e.currentCell.rowIndex, _.sortColumnIndex = e.currentCell.sortColumnIndex, _.sortRowIndex = e.currentCell.sortRowIndex, _.context = e.currentCell.context, _.dragContext = e.currentCell.dragContext, _.style = e.currentCell.style, _.type = e.currentCell.type), e.ctx.textAlign = "right", e.ctx.fillStyle = e.style.debugBackgroundColor, d(0, 0, e.width, e.height), Object.keys(_).forEach((function (t, o) {
                        var r = t + ": " + _[t];
                        e.ctx.fillStyle = e.style.debugColor, h(r, z - 20, (e.attributes.showPerformance ? 140 : 24) + 14 * o)
                    })), e.ctx.restore()) : e.ctx.restore(), function () {
                        if (e.attributes.showPerformance) {
                            var o = e.width - 250 - e.style.scrollBarWidth - 2 * e.style.scrollBarBorderWidth, r = X;
                            0 === l.length && (l = a(0, 300, 1, (function () {
                                return [0, 0]
                            }))), 0 === i.length && (i = a(0, 300, 1, (function () {
                                return [0, 0]
                            }))), 0 === n.length && (n = a(0, 300, 1, 0)), e.ctx.lineWidth = .5, e.ctx.textAlign = "left", e.ctx.font = e.style.debugFont, e.ctx.fillStyle = e.style.debugPerfChartBackground, d(o, r, 250, 100), [["Scroll Height", l, 0, e.scrollBox.scrollHeight, e.style.debugScrollHeightColor, !1], ["Scroll Width", l, 1, e.scrollBox.scrollWidth, e.style.debugScrollWidthColor, !1], ["Performance", t, void 0, 200, e.style.debugPerformanceColor, !1], ["Entities", n, void 0, 1500, e.style.debugEntitiesColor, !1], ["TouchPPSX", i, 0, 1e3, e.style.debugTouchPPSXColor, !0], ["TouchPPSY", i, 1, 1e3, e.style.debugTouchPPSYColor, !0]].forEach((function (e, t) {
                                e.push(t), s.apply(null, e)
                            })), e.ctx.fillStyle = e.style.debugPerfChartBackground, n.pop(), n.unshift(e.visibleCells.length), l.pop(), l.unshift([e.scrollBox.scrollTop, e.scrollBox.scrollLeft]), i.pop(), i.unshift([e.yPPS, e.xPPS])
                        }

                        function s(t, n, l, i, a, s, c) {
                            var u;
                            !function (t, o, r, n, l, i, a, s, c) {
                                var d = t / l.length, u = o / a;
                                r += e.canvasOffsetLeft, n += e.canvasOffsetTop, e.ctx.beginPath(), e.ctx.moveTo(r, n + o), l.forEach((function (t) {
                                    var l, a, s = void 0 === i ? t : t[i];
                                    c && (s = Math.abs(s)), l = r + d, a = n + o - s * u, e.ctx.lineTo(l, a), r += d
                                })), e.ctx.moveTo(r + t, n + o), e.ctx.strokeStyle = s, e.ctx.stroke()
                            }(250, 100, o, r, n, l, i, a, s), e.ctx.fillStyle = a, d(3 + o, r + 9 + 11 * c, 8, 8), e.ctx.fillStyle = e.style.debugPerfChartTextColor, u = void 0 !== l ? n[0][l] : n[0], h(t + " " + (isNaN(u) ? 0 : u).toFixed(3), 14 + o, r + 16 + 11 * c)
                        }
                    }(), e.dispatchEvent("afterdraw", {}) || e.ctx.restore()
                }

                function ee(t, o, r, n) {
                    n = n || {
                        x: 0,
                        y: 0
                    }, t.selectionBorder = "", !t.isRowHeader && e.selections[t.rowIndex + -n.y] && -1 !== e.selections[t.rowIndex + -n.y].indexOf(t.columnIndex + -n.x) && (e.selections[t.rowIndex - 1 - n.y] && -1 !== e.selections[t.rowIndex - 1 - n.y].indexOf(t.columnIndex + -n.x) && 0 !== t.rowIndex || t.isHeader || (o.push([t, "t"]), t[r + "BorderTop"] = !0, t[r + "Border"] += "t"), e.selections[t.rowIndex + 1 + -n.y] && -1 !== e.selections[t.rowIndex + 1 + -n.y].indexOf(t.columnIndex + -n.x) || (o.push([t, "b"]), t[r + "BorderBottom"] = !0, t[r + "Border"] += "b"), e.selections[t.rowIndex + -n.y] && 0 !== t.columnIndex && -1 !== e.selections[t.rowIndex + -n.y].indexOf(t.columnIndex - 1 - n.x) || (o.push([t, "l"]), t[r + "BorderLeft"] = !0, t[r + "Border"] += "l"), e.selections[t.rowIndex + -n.y] && t.columnIndex !== k.length && -1 !== e.selections[t.rowIndex + -n.y].indexOf(t.columnIndex + 1 + -n.x) || (o.push([t, "r"]), t[r + "BorderRight"] = !0, t[r + "Border"] += "r"))
                }

                function te(t, o, r) {
                    return function (n, l, i) {
                        if (n.hidden) return 0;
                        var a, f, g, p = n.style || "cell", m = /HeaderCell/.test(p), y = /cornerCell/.test(p),
                            v = "rowHeaderCell" === p, C = "columnHeaderCell" === p,
                            M = e.selections[o] && -1 !== e.selections[o].indexOf(i),
                            E = e.hovers.rowIndex === o && e.hovers.columnIndex === i,
                            P = e.activeCell.rowIndex === o && e.activeCell.columnIndex === i,
                            k = "columnHeaderCellCap" === p, O = t ? t[n.name] : void 0,
                            H = "canvas-datagrid" === n.type,
                            A = !(e.orders.rows[e.activeCell.rowIndex] !== o && e.orders.columns[e.activeCell.columnIndex] !== l || -1 !== i && -1 !== o) && (v ? "activeRowHeaderCell" : "activeColumnHeaderCell"),
                            R = e.formatters[n.type || "string"], F = 0, D = 0, W = e.sizes.columns[l] || n.width,
                            N = {value: O, row: t, header: n};
                        if (k && (W = z - T), void 0 === W && (W = e.style.cellWidth), W *= e.scale, T + W + e.style.cellBorderWidth < 0 && (T += W + e.style.cellBorderWidth), P && "cornerCell" !== p && (p = "activeCell"), -1 !== e.visibleRows.indexOf(r) || m || e.visibleRows.push(r), g = e.dispatchEvent("formatcellvalue", N), w = T, b = I, "cornerCell" === p ? (w = 0, b = 0) : v ? w = 0 : m && (b = 0), (f = {
                            type: H ? "canvas-datagrid-cell" : n.type,
                            style: p,
                            nodeType: "canvas-datagrid-cell",
                            x: w,
                            y: b,
                            fontHeight: (e.style[p + "FontHeight"] || 0) * e.scale,
                            horizontalAlignment: e.style[p + "HorizontalAlignment"],
                            verticalAlignment: e.style[p + "VerticalAlignment"],
                            paddingLeft: (e.style[p + "PaddingLeft"] || 0) * e.scale,
                            paddingTop: (e.style[p + "PaddingTop"] || 0) * e.scale,
                            paddingRight: (e.style[p + "PaddingRight"] || 0) * e.scale,
                            paddingBottom: (e.style[p + "PaddingBottom"] || 0) * e.scale,
                            whiteSpace: e.style.cellWhiteSpace,
                            lineHeight: e.style.cellLineHeight,
                            lineSpacing: e.style.cellLineSpacing,
                            offsetTop: e.canvasOffsetTop + b,
                            offsetLeft: e.canvasOffsetLeft + w,
                            scrollTop: e.scrollBox.scrollTop,
                            scrollLeft: e.scrollBox.scrollLeft,
                            active: P || A,
                            hovered: E,
                            selected: M,
                            width: W,
                            height: $,
                            offsetWidth: W,
                            offsetHeight: $,
                            parentNode: e.intf.parentNode,
                            offsetParent: e.intf.parentNode,
                            data: t,
                            isCorner: y,
                            isHeader: m,
                            isColumnHeader: C,
                            isColumnHeaderCellCap: k,
                            isRowHeader: v,
                            rowOpen: B,
                            header: n,
                            columnIndex: i,
                            rowIndex: o,
                            sortColumnIndex: l,
                            sortRowIndex: r,
                            isGrid: H,
                            isNormal: !H && !y && !m,
                            gridId: (e.attributes.name || "") + r + ":" + l,
                            parentGrid: e.intf,
                            innerHTML: "",
                            activeHeader: A,
                            value: m && !v ? n.title || n.name : O
                        }).calculatedLineHeight = f.fontHeight * f.lineHeight + f.lineSpacing, f.paddedWidth = f.width - f.paddingRight - f.paddingLeft, f.paddedHeight = f.height - f.paddingTop - f.paddingBottom, N.cell = f, f.userHeight = f.isHeader ? e.sizes.rows[-1] : S, f.userWidth = f.isHeader ? e.sizes.columns.cornerCell : e.sizes.columns[l], e.visibleCells.unshift(f), !e.dispatchEvent("beforerendercell", N)) {
                            if (e.ctx.fillStyle = e.style[p + "BackgroundColor"], e.ctx.strokeStyle = e.style[p + "BorderColor"], e.ctx.lineWidth = e.style[p + "BorderWidth"], E && (e.ctx.fillStyle = e.style[p + "HoverBackgroundColor"], e.ctx.strokeStyle = e.style[p + "HoverBorderColor"]), M && (e.ctx.fillStyle = e.style[p + "SelectedBackgroundColor"], e.ctx.strokeStyle = e.style[p + "SelectedBorderColor"]), A && (e.ctx.fillStyle = e.style[A + "BackgroundColor"]), e.dispatchEvent("rendercell", N), f.isGrid && (f.height !== S && (f.height = S || e.style.cellHeightWithChildGrid, x = !0), f.width = e.sizes.columns[l] || e.style.cellWidthWithChildGrid), B && !f.isRowHeader && (f.height = e.sizes.rows[r] || e.style.cellHeight), f.isGrid || (d(w, b, f.width, f.height), u(w, b, f.width, f.height)), e.ctx.save(), c(f.x, f.y, f.width, f.height, 0), e.ctx.clip(), e.dispatchEvent("afterrendercell", N), f.height === $ || B && !f.isRowHeader || (e.sizes.rows[m ? -1 : r] = f.height, x = !0), f.width !== W && (e.sizes.columns[l] = f.width, x = !0), v && e.attributes.tree && (e.dispatchEvent("rendertreearrow", N) || (D = function (t, o, r) {
                                var n = e.style.treeArrowMarginTop * e.scale,
                                    l = e.style.treeArrowMarginRight * e.scale,
                                    i = e.style.treeArrowMarginLeft * e.scale, a = e.style.treeArrowWidth * e.scale,
                                    s = e.style.treeArrowHeight * e.scale;
                                return o += e.canvasOffsetLeft, r += e.canvasOffsetTop, e.ctx.fillStyle = e.style.treeArrowColor, e.ctx.strokeStyle = e.style.treeArrowBorderColor, e.ctx.beginPath(), o += i, r += n, e.openChildren[t.rowIndex] ? (e.ctx.moveTo(o, r), e.ctx.lineTo(o + a, r), e.ctx.lineTo(o + .5 * a, r + s), e.ctx.moveTo(o, r)) : (e.ctx.lineTo(o, r), e.ctx.lineTo(o + s, r + .5 * a), e.ctx.lineTo(o, r + a), e.ctx.lineTo(o, r)), e.ctx.stroke(), e.ctx.fill(), i + a + l
                            }(f, e.style[p + "PaddingLeft"], b))), e.attributes.showRowNumbers && v || !v) if (f.isGrid && !e.dispatchEvent("beforerendercellgrid", N)) {
                                if (!e.childGrids[f.gridId]) {
                                    if ((a = e.cellGridAttributes).name = e.attributes.saveAppearance ? f.gridId : void 0, a.component = !1, a.parentNode = f, a.data = O, N.cellGridAttributes = a, e.dispatchEvent("beforecreatecellgrid", N)) return;
                                    e.childGrids[f.gridId] = e.createGrid(a), e.sizes.rows[r] = e.sizes.rows[r] || e.style.cellGridHeight, x = !0
                                }
                                f.grid = e.childGrids[f.gridId], f.grid.parentNode = f, f.grid.visible = !0, f.grid.draw(), e.dispatchEvent("rendercellgrid", N)
                            } else f.isGrid || (e.childGrids[f.gridId] && (e.childGrids[f.gridId].parentNode.offsetHeight = 0), m && e.orderBy === n.name && (e.dispatchEvent("renderorderbyarrow", N) || (F = function (t, o) {
                                var r = e.style.columnHeaderOrderByArrowMarginTop * e.scale,
                                    n = e.style.columnHeaderOrderByArrowMarginLeft * e.scale,
                                    l = e.style.columnHeaderOrderByArrowMarginRight * e.scale,
                                    i = e.style.columnHeaderOrderByArrowWidth * e.scale,
                                    a = e.style.columnHeaderOrderByArrowHeight * e.scale;
                                return t += e.canvasOffsetLeft, o += e.canvasOffsetTop, e.ctx.fillStyle = e.style.columnHeaderOrderByArrowColor, e.ctx.strokeStyle = e.style.columnHeaderOrderByArrowBorderColor, e.ctx.beginPath(), t += n, o += r, "asc" === e.orderDirection ? (e.ctx.moveTo(t, o), e.ctx.lineTo(t + i, o), e.ctx.lineTo(t + .5 * i, o + a), e.ctx.moveTo(t, o)) : (e.ctx.lineTo(t, o + a), e.ctx.lineTo(t + i, o + a), e.ctx.lineTo(t + .5 * i, o), e.ctx.lineTo(t, o + a)), e.ctx.stroke(), e.ctx.fill(), n + i + l
                            }(w + e.style[p + "PaddingLeft"], 0))), e.ctx.fillStyle = e.style[p + "Color"], E && (e.ctx.fillStyle = e.style[p + "HoverColor"]), M && (e.ctx.fillStyle = e.style[p + "SelectedColor"]), A && (e.ctx.fillStyle = e.style[A + "Color"]), f.treeArrowWidth = D, f.orderByArrowWidth = F, void 0 !== (g = void 0 !== g ? g : R ? R(N) : "") || R || (g = "", console.warn("canvas-datagrid: Unknown format " + n.type + " add a cellFormater")), f.formattedValue = (null != g ? g : "").toString(), e.columnFilters && void 0 !== e.columnFilters[g] && m && (f.formattedValue = e.attributes.filterTextPrefix + g), e.ctx.font = e.style[p + "FontHeight"] * e.scale + "px " + e.style[p + "FontName"], e.dispatchEvent("formattext", N) || (f.text = function (t, o) {
                                if (!t.formattedValue) return {
                                    lines: [{width: 0, value: ""}],
                                    width: 0,
                                    height: t.calculatedLineHeight
                                };
                                var r, n, l, i, a, s, c = t.formattedValue.split(o), d = t.calculatedLineHeight, u = [],
                                    h = "nowrap" !== e.style.cellWhiteSpace, f = e.attributes.ellipsisText,
                                    g = {width: 0, value: ""}, p = h ? t.paddedHeight : t.calculatedLineHeight;
                                for (u.push(g), l = e.ctx.measureText(" " + f).width, r = 0; r < c.length; r += 1) {
                                    n = c[r];
                                    var m = e.ctx.measureText(n + o);
                                    if (g.width + m.width + l < t.paddedWidth) g.value += n + o, g.width += m.width; else if (/\w-\w/.test(n) && t.paddedWidth < m.width) c.splice(r, 1, n.split("-")[0] + "-", n.split("-")[1]), r -= 1; else {
                                        if (g = {
                                            width: m.width,
                                            value: n + o
                                        }, 0 === r && (u = []).push(g), (d += t.calculatedLineHeight) > p) {
                                            if (0 === u.length) break;
                                            if (1, (s = u[u.length - 1]).width < t.paddedWidth && 1 === c.length) break;
                                            var x = a = s.value + n;
                                            if ((i = e.ctx.measureText(a + f).width) > t.paddedWidth) for (var y = parseInt(a.length / 2), v = -1; y > 0;) a = x.substr(0, y * v + a.length), v = (i = e.ctx.measureText(a + f).width) > t.paddedWidth ? -1 : 1, y = parseInt(y / 2);
                                            a += x.length != a.length ? f : "", s.value = a, s.width = i;
                                            break
                                        }
                                        r > 0 && u.push(g)
                                    }
                                }
                                return {lines: u, width: 0, height: t.calculatedLineHeight * u.length}
                            }(f, " ")), e.dispatchEvent("rendertext", N) || (f.innerHTML || "html" === n.type ? s(f) : function (t) {
                                t.text.lines.length;
                                var o, r, n = t.fontHeight * t.lineHeight, l = "nowrap" !== e.style.cellWhiteSpace,
                                    i = 0;
                                for (o = 0; o < t.text.lines.length; o += 1) {
                                    r = t.text.lines[o];
                                    var a = Math.max(.5 * (t.height - (l ? t.text.height : t.calculatedLineHeight)), 0) + n,
                                        s = t.paddingLeft + t.treeArrowWidth + t.orderByArrowWidth;
                                    "right" === t.horizontalAlignment ? s = t.paddingLeft + t.paddedWidth - r.width : "center" === t.horizontalAlignment && (s = t.paddingLeft + (t.paddedWidth + t.paddingRight) / 2 - r.width / 2), "top" === t.verticalAlignment ? a = t.calculatedLineHeight : "bottom" === t.verticalAlignment && (a = t.height - t.paddingBottom - t.text.height), r.height = n + t.lineSpacing, r.offsetLeft = s, r.offsetTop = a, r.x = t.x + s, r.y = t.y + i + a, i += r.height, h(r.value, r.x, r.y)
                                }
                                e.attributes.debug && t.active && requestAnimationFrame((function () {
                                    e.ctx.font = e.style.debugFont, e.ctx.fillStyle = e.style.debugColor, h(JSON.stringify({
                                        x: t.x,
                                        y: t.y,
                                        h: t.height,
                                        w: t.width,
                                        pw: t.paddedWidth,
                                        idx: t.columnIndex,
                                        idx_ord: t.sortColumnIndex
                                    }, null, "\t"), t.x + 14, t.y + 14), h(JSON.stringify(t.text.lines.map((function (e) {
                                        return {w: e.width, v: e.value.length}
                                    })), null, "\t"), t.x + 14, t.y + 30)
                                }))
                            }(f)));
                            return P && (L = f), ee(f, Z, "selection"), function (t) {
                                (e.attributes.allowMovingSelection || e.mobile) && (t.selectionBorderTop && t.selectionBorderRight && e.mobile && (U.push([t, "tr"]), t.selectionHandle = "tr"), t.selectionBorderTop && t.selectionBorderLeft && e.mobile && (U.push([t, "tl"]), t.selectionHandle = "tl"), t.selectionBorderBottom && t.selectionBorderLeft && e.mobile && (U.push([t, "bl"]), t.selectionHandle = "bl"), t.selectionBorderBottom && t.selectionBorderRight && ("none" !== e.attributes.selectionHandleBehavior || e.mobile) && (U.push([t, "br"]), t.selectionHandle = "br"))
                            }(f), e.movingSelection && ee(f, K, "move", e.moveOffset), e.ctx.restore(), T += f.width + (V ? 0 : e.style.cellBorderWidth), f.width
                        }
                    }
                }

                function oe(t, o) {
                    var r, n, l, i, a = k.length;
                    if (I - 2 * $ > P) return !1;
                    if (H = G[t], B = e.openChildren[t], l = (e.sizes.rows[t] || e.style.cellHeight) * e.scale, n = (B ? e.sizes.trees[t] : 0) * e.scale, I < -(S = l + n)) return !1;
                    for (e.attributes.showRowHeaders && (T += Q), $ = S, i = e.scrollIndexLeft; i < a; i += 1) if (r = e.orders.columns[i], (T += te(H, t, o)(k[r], r, i)) > e.width) {
                        e.scrollIndexRight = i, e.scrollPixelRight = T;
                        break
                    }
                    for (T = 0, e.attributes.showRowHeaders && (T += Q), i = 0; i < e.frozenColumn && (r = e.orders.columns[i], !((T += te(H, t, o)(k[r], r, i)) > e.width)); i += 1) ;
                    return e.lastFrozenColumnPixel = T, $ = S, T = -e.scrollBox.scrollLeft + e.scrollPixelLeft + e.style.cellBorderWidth, C = e.childGrids[t], t !== G.length && B ? (C.visible = !0, C.parentNode = {
                        offsetTop: I + l + e.canvasOffsetTop,
                        offsetLeft: Q - 1 + e.canvasOffsetLeft,
                        offsetHeight: n,
                        offsetWidth: e.width - Q - e.style.scrollBarWidth - 1,
                        offsetParent: e.intf.parentNode,
                        parentNode: e.intf.parentNode,
                        style: e.style,
                        nodeType: "canvas-datagrid-tree",
                        scrollTop: e.scrollBox.scrollTop,
                        scrollLeft: e.scrollBox.scrollLeft,
                        rowIndex: t
                    }, e.visibleCells.unshift({
                        rowIndex: t,
                        columnIndex: 0,
                        y: C.parentNode.offsetTop,
                        x: C.parentNode.offsetLeft,
                        height: C.height,
                        width: C.width,
                        style: "tree-grid",
                        type: C.parentNode.nodeType
                    }), C.draw()) : C && (C.parentNode.offsetHeight = 0, delete e.sizes.trees[t]), q.push([H, t, o, I, S]), e.visibleRowHeights[t] = S, I += $ + (V ? 0 : e.style.cellBorderWidth), !0
                }
            }
        }
    }.apply(t, [])) || (e.exports = r)
}, function (e, t, o) {
    var r, n = o(5);
    void 0 === (r = function () {
        "use strict";
        return function (e) {
            var t;
            e.stopPropagation = function (e) {
                e.stopPropagation()
            }, e.addEventListener = function (t, o) {
                e.events[t] = e.events[t] || [], e.events[t].unshift(o)
            }, e.removeEventListener = function (t, o) {
                (e.events[t] || []).forEach((function (r, n) {
                    o === r && e.events[t].splice(n, 1)
                }))
            }, e.dispatchEvent = function (t, o) {
                var r;

                function n() {
                    r = !0
                }

                if (o = t.type ? t : o || {}, t = t.type || t, e.events[t]) return e.events[t].forEach((function (t) {
                    o.ctx = e.ctx, o.preventDefault = n, t.apply(e.intf, [o])
                })), r
            }, e.getRatio = function () {
                return Math.min(e.attributes.maxPixelRatio, (window.devicePixelRatio || 1) / (e.ctx.webkitBackingStorePixelRatio || e.ctx.mozBackingStorePixelRatio || e.ctx.msBackingStorePixelRatio || e.ctx.oBackingStorePixelRatio || e.ctx.backingStorePixelRatio || 1))
            }, e.resize = function (t) {
                if (e.canvas) {
                    var o, r, n = {x: 0, y: 0, height: 0, width: 0, style: "vertical-scroll-bar"},
                        l = {x: 0, y: 0, height: 0, width: 0, style: "horizontal-scroll-bar"},
                        i = {x: 0, y: 0, height: 0, width: 0, style: "vertical-scroll-box"},
                        a = {x: 0, y: 0, height: 0, width: 0, style: "horizontal-scroll-box"}, s = {
                            x: 0,
                            y: 0,
                            height: 0,
                            width: 0,
                            isCorner: !0,
                            isScrollBoxCorner: !0,
                            style: "scroll-box-corner"
                        }, c = 2 * e.style.scrollBarBoxMargin, d = 2 * e.style.scrollBarBorderWidth,
                        u = .5 * e.style.scrollBarBoxMargin,
                        h = e.style.scrollBarWidth + 2 * e.style.scrollBarBorderWidth, f = e.getRatio(),
                        g = "collapse" === e.style.gridBorderCollapse ? 1 : 2, p = e.style.cellBorderWidth * g,
                        m = e.style.columnHeaderCellBorderWidth * g, x = 0, y = 0, v = (e.data || []).length,
                        w = e.getColumnHeaderCellHeight(), b = e.getRowHeaderCellWidth(), C = e.style.cellHeight,
                        B = e.getSchema();
                    for (e.scrollCache.x = [], e.scrollCache.y = [], o = 0; o < v; o += 1) e.scrollCache.y[o] = x, x += ((e.sizes.rows[o] || C) + (e.sizes.trees[o] || 0)) * e.scale + (e.frozenRow > o && e.sizes.trees[o] || 0);
                    return v > 1 && (e.scrollCache.y[o] = x), y = B.reduce((function (t, o, r) {
                        if (B[e.orders.columns[r]].hidden) return e.scrollCache.x[r] = t, t;
                        var n = t + e.getColummnWidth(e.orders.columns[r]);
                        return e.scrollCache.x[r] = n, n
                    }), 0) || 0, e.attributes.showNewRow && (x += C), e.attributes.snapToRow && (x += e.style.cellHeight), I(), e.isChildGrid ? (e.width = e.parentNode.offsetWidth, e.height = e.parentNode.offsetHeight) : e.height === e.canvas.offsetHeight && e.width === e.canvas.offsetWidth || (e.height = e.canvas.offsetHeight, e.width = e.canvas.offsetWidth, e.canvasOffsetLeft = e.args.canvasOffsetLeft || 0, e.canvasOffsetTop = e.args.canvasOffsetTop || 0), e.scrollBox.top = w + m, e.scrollBox.left = b, M(), S(), e.scrollBox.horizontalBarVisible && ("auto" !== e.style.height || e.isChildGrid || (e.height += h), x += h, I(), M(), S()), e.scrollBox.verticalBarVisible && ("auto" !== e.style.width || e.isChildGrid || (e.width += h), y += h, I(), M(), S()), M(), e.scrollBox.scrollWidth = y - e.scrollBox.width, e.scrollBox.scrollHeight = x - e.scrollBox.height, e.scrollBox.widthBoxRatio = e.scrollBox.width / y, e.scrollBox.scrollBoxWidth = e.scrollBox.width * e.scrollBox.widthBoxRatio - e.style.scrollBarWidth - d - u, e.scrollBox.heightBoxRatio = (e.scrollBox.height - w) / x, e.scrollBox.scrollBoxHeight = e.scrollBox.height * e.scrollBox.heightBoxRatio - e.style.scrollBarWidth - d - u, e.scrollBox.scrollBoxWidth = Math.max(e.scrollBox.scrollBoxWidth, e.style.scrollBarBoxMinSize), e.scrollBox.scrollBoxHeight = Math.max(e.scrollBox.scrollBoxHeight, e.style.scrollBarBoxMinSize), l.x += b, l.y += e.height - e.style.scrollBarWidth - u, l.width = e.width - e.style.scrollBarWidth - b - u - c, l.height = e.style.scrollBarWidth + e.style.scrollBarBorderWidth + u, a.y = l.y + e.style.scrollBarBoxMargin, a.width = e.scrollBox.scrollBoxWidth, a.height = e.style.scrollBarBoxWidth, n.x += e.width - e.style.scrollBarWidth - e.style.scrollBarBorderWidth - u, n.y += w, n.width = e.style.scrollBarWidth + e.style.scrollBarBorderWidth + u, n.height = e.height - w - e.style.scrollBarWidth - u - c, i.x = n.x + e.style.scrollBarBoxMargin, i.width = e.style.scrollBarBoxWidth, i.height = e.scrollBox.scrollBoxHeight, s.x = l.x + l.width + c, s.y = n.y + n.height + c, s.width = e.style.scrollBarWidth + e.style.scrollBarBorderWidth, s.height = e.style.scrollBarWidth + e.style.scrollBarBorderWidth, e.scrollBox.entities = {
                        horizontalBar: l,
                        horizontalBox: a,
                        verticalBar: n,
                        verticalBox: i,
                        corner: s
                    }, e.scrollBox.bar = {v: n, h: l}, e.scrollBox.box = {
                        v: i,
                        h: a
                    }, e.page = Math.max(1, e.visibleRows.length - 3 - e.attributes.pageUpDownOverlap), e.isChildGrid || (e.canvas.width = e.width * f, e.canvas.height = e.height * f, e.ctx.scale(f, f)), e.resizeEditInput(), e.scroll(!0), t && e.draw(!0), e.dispatchEvent("resize", {}), !0
                }

                function S() {
                    e.scrollBox.horizontalBarVisible = "auto" !== e.style.width && y > e.scrollBox.width && "hidden" !== e.style.overflowX || "scroll" === e.style.overflowX, e.scrollBox.horizontalBoxVisible = y > e.scrollBox.width, e.scrollBox.verticalBarVisible = "auto" !== e.style.height && x > e.scrollBox.height && "hidden" !== e.style.overflowY || "scroll" === e.style.overflowY, e.scrollBox.verticalBoxVisible = x > e.scrollBox.height
                }

                function M() {
                    e.scrollBox.width = e.width - b, e.scrollBox.height = e.height - w
                }

                function I() {
                    e.isChildGrid || (r = {
                        height: w + x + p + 1,
                        width: y + b + p
                    }, ["width", "height"].forEach((function (t) {
                        -1 !== ["auto", void 0].indexOf(e.style[t]) && -1 !== ["auto", void 0].indexOf(e.appliedInlineStyles[t]) ? e.parentNodeStyle[t] = r[t] + "px" : -1 == ["auto", void 0].indexOf(e.style[t]) && -1 == ["auto", void 0].indexOf(e.appliedInlineStyles[t]) && (e.parentNodeStyle[t] = e.style[t], e.isComponet && (e.canvas.style[t] = e.style[t]))
                    })))
                }
            }, e.scroll = function (t) {
                var o = e.getSchema(), r = (e.data || []).length, n = e.style.cellHeight;
                for (e.scrollIndexTop = Math.floor(r * (e.scrollBox.scrollTop / e.scrollBox.scrollHeight) - 100), e.scrollIndexTop = Math.max(e.scrollIndexTop, 0), e.scrollPixelTop = e.scrollCache.y[e.scrollIndexTop], 0 === e.scrollBox.scrollHeight && (e.scrollIndexTop = 0), e.scrollPixelTop = 0, e.scrollIndexLeft = e.frozenColumn, e.scrollPixelLeft = 0; e.scrollPixelTop < e.scrollBox.scrollTop && e.scrollIndexTop < e.data.length;) e.scrollIndexTop += 1, e.scrollPixelTop = e.scrollCache.y[e.scrollIndexTop];
                for (; e.scrollPixelLeft < e.scrollBox.scrollLeft + 1 && e.scrollIndexLeft < o.length;) e.scrollPixelLeft = e.scrollCache.x[e.scrollIndexLeft], e.scrollIndexLeft += 1;
                o.length > 0 && (e.scrollIndexLeft = Math.max(e.scrollIndexLeft - 1, 0), e.scrollPixelLeft -= e.getColummnWidth(e.orders.columns[e.scrollIndexLeft])), (e.data || []).length > 0 && (e.scrollIndexTop = Math.max(e.scrollIndexTop - 1, 0), e.scrollPixelTop = Math.max(e.scrollPixelTop - (e.data[e.scrollIndexTop] ? (e.sizes.rows[e.scrollIndexTop] || n) + (e.sizes.trees[e.scrollIndexTop] || 0) : n) * e.scale, 0)), e.ellipsisCache = {}, t || e.draw(!0), requestAnimationFrame(e.resizeEditInput), e.dispatchEvent("scroll", {
                    top: e.scrollBox.scrollTop,
                    left: e.scrollBox.scrollLeft
                })
            }, e.mousemove = function (t, o) {
                if (!e.contextMenu && !e.input) {
                    e.mouse = o || e.getLayerPos(t);
                    var r, n, l, i,
                        a = (t.ctrlKey || t.metaKey || e.attributes.persistantSelectionMode) && !e.attributes.singleSelectionMode,
                        s = e.getSchema(), c = e.mouse.x, d = e.mouse.y, u = e.getCellAt(c, d),
                        h = {NativeEvent: t, cell: u, x: c, y: d}, f = e.currentCell;
                    if (clearTimeout(e.scrollTimer), e.isInGrid({
                        x: c,
                        y: d
                    }) || (e.hasFocus = !1), !e.dispatchEvent("mousemove", h) && (u && e.currentCell && (e.rowBoundaryCrossed = e.currentCell.rowIndex !== u.rowIndex, e.columnBoundaryCrossed = e.currentCell.columnIndex !== u.columnIndex, e.cellBoundaryCrossed = e.rowBoundaryCrossed || e.columnBoundaryCrossed, ["row", "column", "cell"].forEach((function (t) {
                        e[t + "BoundaryCrossed"] && (h.cell = f, e.dispatchEvent(t + "mouseout", h), h.cell = u, e.dispatchEvent(t + "mouseover", h))
                    }))), e.currentCell = u, e.hasFocus)) {
                        if (e.hovers = {}, !e.draggingItem && u && -1 === e.scrollModes.indexOf(u.context) && (e.dragItem = u, e.dragMode = u.dragContext, e.cursor = u.context, "cell" === u.context && (e.cursor = "default", e.hovers = {
                            rowIndex: u.rowIndex,
                            columnIndex: u.columnIndex
                        }), (e.selecting || e.reorderObject) && "cell" === u.context)) {
                            if (i = {
                                x: Math.abs(e.dragStart.x - c),
                                y: Math.abs(e.dragStart.y - d)
                            }, -1 !== e.dragStartObject.columnIndex && t.shiftKey && (e.dragStartObject = {
                                rowIndex: e.activeCell.rowIndex,
                                columnIndex: e.activeCell.columnIndex
                            }), n = {
                                top: Math.min(e.dragStartObject.rowIndex, u.rowIndex),
                                left: Math.min(e.dragStartObject.columnIndex, u.columnIndex),
                                bottom: Math.max(e.dragStartObject.rowIndex, u.rowIndex),
                                right: Math.max(e.dragStartObject.columnIndex, u.columnIndex)
                            }, -1 === e.dragStartObject.columnIndex && (l = e.getSelectionBounds(), n.left = -1, n.right = s.length - 1, n.top = Math.min(l.top, u.rowIndex), n.bottom = Math.max(l.bottom, u.rowIndex)), e.dragStartObject.rowIndex === u.rowIndex && e.dragStartObject.columnIndex === u.columnIndex || (e.ignoreNextClick = !0), (e.cellBoundaryCrossed || 0 === i.x && 0 === i.y || "row" === e.attributes.selectionMode) && ("row" !== e.attributes.selectionMode && -1 !== e.dragStartObject.columnIndex || !e.rowBoundaryCrossed ? "row" !== e.attributes.selectionMode && (e.dragAddToSelection || void 0 === u.rowIndex ? (e.selections[u.rowIndex] = e.selections[u.rowIndex] || [], -1 === e.selections[u.rowIndex].indexOf(u.columnIndex) && e.selections[u.rowIndex].push(u.columnIndex)) : e.selections[u.rowIndex] && -1 !== e.selections[u.rowIndex].indexOf(u.columnIndex) && e.selections[u.rowIndex].splice(e.selections[u.rowIndex].indexOf(u.columnIndex), 1)) : e.selectRow(u.rowIndex, a, null, !0)), !(e.selectionBounds && n.top === e.selectionBounds.top && n.left === e.selectionBounds.left && n.bottom === e.selectionBounds.bottom && n.right === e.selectionBounds.right || a)) if (e.selections = [], l = n, "row" === e.attributes.selectionMode) for (r = l.top; r <= l.bottom; r += 1) e.selectRow(r, !0, null, !0); else -1 !== n.top && e.selectArea(l, !0);
                            e.autoScrollZone(t, c, d, a)
                        }
                        e.cellBoundaryCrossed = !1, e.rowBoundaryCrossed = !1, e.columnBoundaryCrossed = !1, e.draw(!0)
                    }
                }
            }, e.click = function (t, o) {
                var r, n = JSON.stringify(e.getSelectionBounds()),
                    l = (t.ctrlKey || t.metaKey || e.attributes.persistantSelectionMode) && !e.attributes.singleSelectionMode,
                    i = o || e.getLayerPos(t);
                if (e.currentCell = e.getCellAt(i.x, i.y), void 0 === e.currentCell.grid) if (e.input && e.endEdit(), e.ignoreNextClick) e.ignoreNextClick = !1; else if (r = e.currentCell, !e.dispatchEvent("click", {
                    NativeEvent: t,
                    cell: e.currentCell
                }) && e.hasFocus) {
                    if (-1 !== ["rowHeaderCell", "columnHeaderCell"].indexOf(e.currentCell.style) || l || e.setActiveCell(r.columnIndex, r.rowIndex), "cell" === e.currentCell.context) {
                        if ("cornerCell" === e.currentCell.style) return e.selectAll(), e.draw(), void a();
                        if ("columnHeaderCell" === e.currentCell.style) {
                            if ("sort" === e.attributes.columnHeaderClickBehavior) return e.orderBy === r.header.name ? e.orderDirection = "asc" === e.orderDirection ? "desc" : "asc" : e.orderDirection = "asc", e.order(r.header.name, e.orderDirection), void a();
                            if ("select" === e.attributes.columnHeaderClickBehavior) return e.selectColumn(r.header.index, l, t.shiftKey), void e.draw()
                        }
                        if (e.selections[r.rowIndex] = e.selections[r.rowIndex] || [], ("row" === e.attributes.selectionMode || "rowHeaderCell" === e.currentCell.style) && "rowHeaderCell" === e.currentCell.style && e.attributes.tree && i.x > 0 && i.x - e.currentCell.x < e.style.treeArrowWidth + e.style.treeArrowMarginLeft + e.style.treeArrowMarginRight + e.style.treeArrowClickRadius && i.y - e.currentCell.y < e.style.treeArrowHeight + e.style.treeArrowMarginTop + e.style.treeArrowClickRadius && i.y > 0) return void e.toggleTree(r.rowIndex);
                        t.shiftKey && !l && (e.selectionBounds = e.getSelectionBounds(), e.selectArea(void 0, !1))
                    }
                    a(), e.draw(!0)
                }

                function a() {
                    var t, o = e.getSelectionBounds();
                    n !== JSON.stringify(o) && (t = {
                        selections: e.selections,
                        selectionBounds: e.getSelectionBounds()
                    }, Object.defineProperty(t, "selectedData", {
                        get: function () {
                            return e.getSelectedData()
                        }
                    }), e.dispatchEvent("selectionchanged", t))
                }
            }, e.dragResizeColumn = function (t) {
                var o, r, n;
                return o = e.getLayerPos(t), r = e.resizingStartingWidth + o.x - e.dragStart.x, n = e.resizingStartingHeight + o.y - e.dragStart.y, r < e.style.minColumnWidth && (r = e.style.minColumnWidth), n < e.style.minRowHeight && (n = e.style.minRowHeight), !e.dispatchEvent("resizecolumn", {
                    x: r,
                    y: n,
                    draggingItem: e.draggingItem
                }) && (e.scrollBox.scrollLeft > e.scrollBox.scrollWidth - e.attributes.resizeScrollZone && "ew-resize" === e.dragMode && (e.resize(!0), e.scrollBox.scrollLeft += r), "ew-resize" === e.dragMode ? (e.sizes.columns["rowHeaderCell" === e.draggingItem.header.style ? "cornerCell" : e.draggingItem.sortColumnIndex] = r, -1 !== ["rowHeaderCell", "cornerCell"].indexOf(e.draggingItem.header.style) && e.resize(!0), void e.resizeChildGrids()) : "ns-resize" === e.dragMode ? (e.draggingItem.rowOpen ? e.sizes.trees[e.draggingItem.rowIndex] = n : e.attributes.globalRowResize ? e.style.cellHeight = n : e.sizes.rows[e.draggingItem.rowIndex] = n, e.dispatchEvent("resizerow", {row: n}), void e.resizeChildGrids()) : void (e.ellipsisCache = {}))
            }, e.stopDragResize = function () {
                e.resize(), document.body.removeEventListener("mousemove", e.dragResizeColumn, !1), document.body.removeEventListener("mouseup", e.stopDragResize, !1), e.setStorageData(), e.draw(!0), e.ignoreNextClick = !0
            }, e.scrollGrid = function (t) {
                var o = e.getLayerPos(t);
                return e.attributes.scrollPointerLock && e.pointerLockPosition && -1 !== ["horizontal-scroll-box", "vertical-scroll-box"].indexOf(e.scrollStartMode) && (e.pointerLockPosition.x += t.movementX, e.pointerLockPosition.y += t.movementY, e.pointerLockPosition.x = Math.min(e.width - e.style.scrollBarWidth, Math.max(0, e.pointerLockPosition.x)), e.pointerLockPosition.y = Math.min(e.height - e.style.scrollBarWidth, Math.max(0, e.pointerLockPosition.y)), o = e.pointerLockPosition), e.scrollMode = e.getCellAt(o.x, o.y).context, "horizontal-scroll-box" === e.scrollMode && "horizontal-scroll-box" !== e.scrollStartMode ? (e.scrollStartMode = "horizontal-scroll-box", e.dragStart = o, e.scrollStart.left = e.scrollBox.scrollLeft, void clearTimeout(e.scrollTimer)) : "vertical-scroll-box" === e.scrollMode && "vertical-scroll-box" !== e.scrollStartMode ? (e.scrollStartMode = "vertical-scroll-box", e.dragStart = o, e.scrollStart.top = e.scrollBox.scrollTop, void clearTimeout(e.scrollTimer)) : ("vertical-scroll-box" === e.scrollStartMode && "vertical-scroll-box" !== e.scrollMode && (e.scrollMode = "vertical-scroll-box"), "horizontal-scroll-box" === e.scrollStartMode && "horizontal-scroll-box" !== e.scrollMode && (e.scrollMode = "horizontal-scroll-box"), clearTimeout(e.scrollTimer), void (-1 !== e.scrollModes.indexOf(e.scrollMode) && ("vertical-scroll-box" === e.scrollMode ? e.scrollBox.scrollTop = e.scrollStart.top + (o.y - e.dragStart.y) / e.scrollBox.heightBoxRatio : "vertical-scroll-top" === e.scrollMode ? (e.scrollBox.scrollTop -= e.page * e.style.cellHeight, e.scrollTimer = setTimeout(e.scrollGrid, e.attributes.scrollRepeatRate, t)) : "vertical-scroll-bottom" === e.scrollMode && (e.scrollBox.scrollTop += e.page * e.style.cellHeight, e.scrollTimer = setTimeout(e.scrollGrid, e.attributes.scrollRepeatRate, t)), "horizontal-scroll-box" === e.scrollMode ? e.scrollBox.scrollLeft = e.scrollStart.left + (o.x - e.dragStart.x) / e.scrollBox.widthBoxRatio : "horizontal-scroll-right" === e.scrollMode ? (e.scrollBox.scrollLeft += e.attributes.selectionScrollIncrement, e.scrollTimer = setTimeout(e.scrollGrid, e.attributes.scrollRepeatRate, t)) : "horizontal-scroll-left" === e.scrollMode && (e.scrollBox.scrollLeft -= e.attributes.selectionScrollIncrement, e.scrollTimer = setTimeout(e.scrollGrid, e.attributes.scrollRepeatRate, t)))))
            }, e.stopScrollGrid = function () {
                clearTimeout(e.scrollTimer), document.exitPointerLock && document.exitPointerLock(), document.removeEventListener("mousemove", e.scrollGrid, !1)
            }, e.dragReorder = function (t) {
                var o, r, n, l = "column-reorder" === e.dragMode, i = "row-reorder" === e.dragMode;
                r = (o = e.getLayerPos(t)).x - e.dragStart.x, n = o.y - e.dragStart.y, !e.attributes.allowColumnReordering && l || !e.attributes.allowRowReordering && i || e.dispatchEvent("reordering", {
                    NativeEvent: t,
                    source: e.dragStartObject,
                    target: e.currentCell,
                    dragMode: e.dragMode
                }) || (Math.abs(r) > e.attributes.reorderDeadZone || Math.abs(n) > e.attributes.reorderDeadZone) && (e.reorderObject = e.draggingItem, e.reorderTarget = e.currentCell, e.reorderObject.dragOffset = {
                    x: r,
                    y: n
                }, e.autoScrollZone(t, l ? o.x : -1, i ? o.y : -1, !1))
            }, e.stopDragReorder = function (t) {
                var o, r, n = {"row-reorder": e.orders.rows, "column-reorder": e.orders.columns},
                    l = {"row-reorder": "rowIndex", "column-reorder": "sortColumnIndex"}[e.dragMode];
                document.body.removeEventListener("mousemove", e.dragReorder, !1), document.body.removeEventListener("mouseup", e.stopDragReorder, !1), e.reorderObject && e.reorderTarget && ("column-reorder" === e.dragMode && e.reorderTarget.sortColumnIndex > -1 && e.reorderTarget.sortColumnIndex < e.getSchema().length || "row-reorder" === e.dragMode && e.reorderTarget.rowIndex > -1 && e.reorderTarget.rowIndex < e.data.length) && e.reorderObject[l] !== e.reorderTarget[l] && !e.dispatchEvent("reorder", {
                    NativeEvent: t,
                    source: e.reorderObject,
                    target: e.reorderTarget,
                    dragMode: e.dragMode
                }) && (e.ignoreNextClick = !0, o = n[e.dragMode].indexOf(e.reorderObject[l]), r = n[e.dragMode].indexOf(e.reorderTarget[l]), n[e.dragMode].splice(o, 1), n[e.dragMode].splice(r, 0, e.reorderObject[l]), "column-reorder" === e.dragMode ? e.orders.columns = n[e.dragMode] : e.orders.rows = n[e.dragMode], e.resize(), e.setStorageData()), e.reorderObject = void 0, e.reorderTarget = void 0, e.draw(!0)
            }, e.dragMove = function (t) {
                if (!e.dispatchEvent("moving", {NativeEvent: t, cell: e.currentCell})) {
                    var o = e.getLayerPos(t);
                    e.moveOffset = {
                        x: e.currentCell.columnIndex - e.dragStartObject.columnIndex,
                        y: e.currentCell.rowIndex - e.dragStartObject.rowIndex
                    }, (Math.abs(o.x) > e.attributes.reorderDeadZone || Math.abs(o.y) > e.attributes.reorderDeadZone) && setTimeout((function () {
                        e.autoScrollZone(t, o.x, o.y, !1)
                    }), 1)
                }
            }, e.stopDragMove = function (t) {
                document.body.removeEventListener("mousemove", e.dragMove, !1), document.body.removeEventListener("mouseup", e.stopDragMove, !1);
                var o = e.getSelectionBounds();
                if (e.dispatchEvent("endmove", {
                    NativeEvent: t,
                    cell: e.currentCell
                })) return e.movingSelection = void 0, e.moveOffset = void 0, void e.draw(!0);
                e.moveOffset && (e.moveTo(e.movingSelection, o.left + e.moveOffset.x, o.top + e.moveOffset.y), e.moveSelection(e.moveOffset.x, e.moveOffset.y)), e.movingSelection = void 0, e.moveOffset = void 0, e.draw(!0)
            }, e.freezeMove = function (t) {
                if (!e.dispatchEvent("freezemoving", {NativeEvent: t, cell: e.currentCell})) {
                    var o = e.getLayerPos(t);
                    e.ignoreNextClick = !0, e.freezeMarkerPosition = o, e.currentCell && void 0 !== e.currentCell.rowIndex && "frozen-row-marker" === e.dragMode && (e.scrollBox.scrollTop = 0, e.frozenRow = e.currentCell.rowIndex + 1), e.currentCell && void 0 !== e.currentCell.columnIndex && "frozen-column-marker" === e.dragMode && (e.scrollBox.scrollLeft = 0, e.frozenColumn = e.currentCell.columnIndex + 1), (Math.abs(o.x) > e.attributes.reorderDeadZone || Math.abs(o.y) > e.attributes.reorderDeadZone) && setTimeout((function () {
                        e.autoScrollZone(t, o.x, o.y, !1)
                    }), 1)
                }
            }, e.stopFreezeMove = function (t) {
                if (document.body.removeEventListener("mousemove", e.freezeMove, !1), document.body.removeEventListener("mouseup", e.stopFreezeMove, !1), e.freezeMarkerPosition = void 0, e.dispatchEvent("endfreezemove", {
                    NativeEvent: t,
                    cell: e.currentCell
                })) return e.frozenRow = e.startFreezeMove.x, e.frozenColumn = e.startFreezeMove.y, void e.draw(!0);
                e.draw(!0)
            }, e.mousedown = function (t, o) {
                if (e.lastMouseDownTarget = t.target, !e.dispatchEvent("mousedown", {
                    NativeEvent: t,
                    cell: e.currentCell
                }) && e.hasFocus && 2 !== t.button && !e.input) {
                    var r = t.ctrlKey || t.metaKey, n = /-move/.test(e.dragMode),
                        l = /frozen-row-marker|frozen-column-marker/.test(e.dragMode), i = /-resize/.test(e.dragMode);
                    if (e.dragStart = o || e.getLayerPos(t), e.scrollStart = {
                        left: e.scrollBox.scrollLeft,
                        top: e.scrollBox.scrollTop
                    }, e.dragStartObject = e.getCellAt(e.dragStart.x, e.dragStart.y), e.dragAddToSelection = !e.dragStartObject.selected, r || t.shiftKey || /(vertical|horizontal)-scroll-(bar|box)/.test(e.dragStartObject.context) || !e.currentCell || e.currentCell.isColumnHeader || n || l || i || (e.selections = []), !e.dragStartObject.isGrid) {
                        if (-1 !== e.scrollModes.indexOf(e.dragStartObject.context)) return e.scrollMode = e.dragStartObject.context, e.scrollStartMode = e.dragStartObject.context, e.scrollGrid(t), e.attributes.scrollPointerLock && -1 !== ["horizontal-scroll-box", "vertical-scroll-box"].indexOf(e.scrollStartMode) && (e.pointerLockPosition = {
                            x: e.dragStart.x,
                            y: e.dragStart.y
                        }, e.canvas.requestPointerLock()), document.addEventListener("mousemove", e.scrollGrid, !1), document.addEventListener("mouseup", e.stopScrollGrid, !1), void (e.ignoreNextClick = !0);
                        if ("cell" === e.dragMode) return e.selecting = !0, void (("row" === e.attributes.selectionMode || -1 === e.dragStartObject.columnIndex) && e.dragStartObject.rowIndex > -1 ? e.selectRow(e.dragStartObject.rowIndex, r, null) : "row" !== e.attributes.selectionMode && e.mousemove(t));
                        if (n) {
                            if (e.draggingItem = e.dragItem, e.movingSelection = e.selections.concat([]), e.dragging = e.dragStartObject, e.dispatchEvent("beginmove", {
                                NativeEvent: t,
                                cell: e.currentCell
                            })) return;
                            return document.body.addEventListener("mousemove", e.dragMove, !1), document.body.addEventListener("mouseup", e.stopDragMove, !1), e.mousemove(t)
                        }
                        if (l) {
                            if (e.draggingItem = e.dragItem, e.startFreezeMove = {
                                x: e.frozenRow,
                                y: e.frozenColumn
                            }, e.dispatchEvent("beginfreezemove", {NativeEvent: t})) return;
                            return document.body.addEventListener("mousemove", e.freezeMove, !1), document.body.addEventListener("mouseup", e.stopFreezeMove, !1), e.mousemove(t)
                        }
                        return i ? (e.draggingItem = e.dragItem, e.draggingItem.rowOpen ? e.resizingStartingHeight = e.sizes.trees[e.draggingItem.rowIndex] : e.resizingStartingHeight = e.sizes.rows[e.draggingItem.rowIndex] || e.style.cellHeight, e.resizingStartingWidth = e.sizes.columns["rowHeaderCell" === e.draggingItem.header.style ? "cornerCell" : e.draggingItem.sortColumnIndex] || e.draggingItem.width, document.body.addEventListener("mousemove", e.dragResizeColumn, !1), void document.body.addEventListener("mouseup", e.stopDragResize, !1)) : -1 !== ["row-reorder", "column-reorder"].indexOf(e.dragMode) ? (e.draggingItem = e.dragStartObject, document.body.addEventListener("mousemove", e.dragReorder, !1), void document.body.addEventListener("mouseup", e.stopDragReorder, !1)) : void 0
                    }
                }
            }, e.mouseup = function (t) {
                clearTimeout(e.scrollTimer), e.cellBoundaryCrossed = !0, e.rowBoundaryCrossed = !0, e.columnBoundaryCrossed = !0, e.selecting = void 0, e.draggingItem = void 0, e.dragStartObject = void 0, e.dispatchEvent("mouseup", {
                    NativeEvent: t,
                    cell: e.currentCell
                }) || (e.hasFocus || t.target === e.canvas) && (e.currentCell && void 0 !== e.currentCell.grid || e.contextMenu || e.input || (e.dragStart && e.isInGrid(e.dragStart) && e.controlInput.focus(), t.preventDefault()))
            }, e.getAdjacentCells = function () {
                var t, o = e.getSchema(), r = {};
                for (t = 0; t < o.length; t += 1) o[e.orders.columns[t]].hidden || (void 0 === r.first && (r.first = t, r.left = t), r.last = t, t > e.activeCell.columnIndex && void 0 === r.right && (r.right = t), t < e.activeCell.columnIndex && (r.left = t));
                return void 0 === r.right && (r.right = r.last), r
            }, e.keydown = function (t) {
                var o, r = e.getAdjacentCells(), l = e.activeCell.columnIndex, i = e.activeCell.rowIndex,
                    a = t.ctrlKey || t.metaKey, s = e.data.length - 1, c = e.getSchema().length - 1;
                if (!e.dispatchEvent("keydown", {NativeEvent: t, cell: e.currentCell}) && e.hasFocus) {
                    if (n(t) && !a) return e.beginEditAt(l, i, t);
                    if (e.attributes.showNewRow && (s += 1), "Tab" === t.key && t.preventDefault(), "Escape" === t.key ? (e.selections = [], e.draw(!0)) : a && "a" === t.key ? e.selectAll() : "ArrowDown" === t.key ? i += 1 : "ArrowUp" === t.key ? i -= 1 : "ArrowLeft" === t.key || t.shiftKey && "Tab" === t.key ? l = r.left : "ArrowRight" === t.key || !t.shiftKey && "Tab" === t.key ? l = r.right : "PageUp" === t.key ? (i -= e.page, t.preventDefault()) : "PageDown" === t.key ? (i += e.page, t.preventDefault()) : "Home" === t.key || a && "ArrowUp" === t.key ? i = 0 : "End" === t.key || a && "ArrowDown" === t.key ? i = e.data.length - 1 : a && "ArrowRight" === t.key ? l = r.last : a && "ArrowLeft" === t.key && (l = r.first), "Enter" === t.key) return e.beginEditAt(l, i, t);
                    (l < 0 || Number.isNaN(l)) && (l = r.first), i > s && (i = s), (i < 0 || Number.isNaN(i)) && (i = 0), l > c && (l = r.last);
                    var d = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(t.key);
                    t.shiftKey && d && (e.selections[Math.max(i, 0)] = e.selections[Math.max(i, 0)] || [], e.selections[Math.max(i, 0)].push(l), e.selectionBounds = e.getSelectionBounds(), e.selectArea(void 0, a), e.draw(!0)), l === e.activeCell.columnIndex && i === e.activeCell.rowIndex || (e.scrollIntoView(l !== e.activeCell.columnIndex ? l : void 0, i === e.activeCell.rowIndex || Number.isNaN(i) ? void 0 : i), e.setActiveCell(l, i), !t.shiftKey && e.attributes.selectionFollowsActiveCell && (a || (e.selections = []), e.selections[i] = e.selections[i] || [], e.selections[i].push(l), o = {
                        selectedData: e.getSelectedData(),
                        selections: e.selections,
                        selectionBounds: e.getSelectionBounds()
                    }, Object.defineProperty(o, "selectedData", {
                        get: function () {
                            return e.getSelectedData()
                        }
                    }), e.dispatchEvent("selectionchanged", o)), e.draw(!0))
                }
            }, e.keyup = function (t) {
                e.dispatchEvent("keyup", {NativeEvent: t, cell: e.currentCell}) || e.hasFocus
            }, e.keypress = function (t) {
                e.hasFocus && e.dispatchEvent("keypress", {NativeEvent: t, cell: e.currentCell})
            }, e.dblclick = function (t) {
                e.dispatchEvent("dblclick", {
                    NativeEvent: t,
                    cell: e.currentCell
                }) || e.hasFocus && ("ew-resize" === e.currentCell.context && "columnHeaderCell" === e.currentCell.style ? e.fitColumnToValues(e.currentCell.header.name) : "ew-resize" === e.currentCell.context && "cornerCell" === e.currentCell.style ? e.autosize() : -1 !== ["cell", "activeCell"].indexOf(e.currentCell.style) && e.beginEditAt(e.currentCell.columnIndex, e.currentCell.rowIndex))
            }, e.scrollWheel = function (o) {
                var r, n, l = o, i = void 0 === o.deltaX ? o.NativeEvent.deltaX : o.deltaX,
                    a = void 0 === o.deltaY ? o.NativeEvent.deltaY : o.deltaY,
                    s = void 0 === o.deltaMode ? o.NativeEvent.deltaMode : o.deltaMode;
                o = o.NativeEvent || o;
                t ? l.preventDefault(o) : e.dispatchEvent("wheel", {NativeEvent: o}) || (e.touchHaltAnimation = !0, r = e.scrollBox.scrollLeft, n = e.scrollBox.scrollTop, e.hasFocus && (1 === s && (a *= 17), (e.scrollBox.scrollTop < e.scrollBox.scrollHeight && a > 0 || e.scrollBox.scrollLeft < e.scrollBox.scrollWidth && i > 0 || e.scrollBox.scrollTop > 0 && a < 0 || e.scrollBox.scrollLeft > 0 && i < 0) && l.preventDefault(o), t = setTimeout((function () {
                    t = void 0, e.scrollBox.scrollTo(i + r, a + n)
                }), 1)))
            }, e.pasteData = function (t, o, r, n) {
                var l = e.getVisibleSchema();
                if ("text/html" === o && !1 === /(?:^(<meta[^>]+>)?<table>)|(?:<!--StartFragment-->\s*<table>)/.test(t)) return console.warn("Unrecognized HTML format. HTML must be a simple table, e.g.: <table><tr><td>data</td></tr></table>."), void console.warn("Data with the mime type text/html not in this format will not be imported as row data.");
                var i = function (e, t) {
                    return "text/html" === t ? e.substring(e.indexOf("<table><tr>") + 11, e.indexOf("</tr></table>")).split("</tr><tr>").filter((function (e) {
                        return !/^<th>|^<thead>/.test(e)
                    })).map((function (e) {
                        return e.match(/<td>[^<]+/g).map((function (e) {
                            return e.replace(/^<td>/, "")
                        }))
                    })) : e.split("\n").map((function (e) {
                        return [e]
                    }))
                }(t, o), a = [];
                if (1 === i.length) {
                    var s = i[0][0];
                    e.forEachSelectedCell((function (e, t, o) {
                        e[t][o] = s
                    }))
                } else for (var c = 0; c < i.length; c++) {
                    var d = e.orders.rows[r + c], u = i[c], h = e.data[d], f = Object.assign({}, h);
                    a[d] = [];
                    for (var g = 0; g < u.length; g++) {
                        var p = l[n + g];
                        if (p) {
                            var m = p.name;
                            null != (s = u[g]) ? (a[d].push(n + g), f[m] = s) : f[m] = h[m]
                        } else console.warn("Paste data exceeded grid bounds. Skipping.")
                    }
                    e.data[d] = f
                }
                e.selections = a;
                var x = [];
                return a.forEach((function (e, t) {
                    void 0 !== t && e.forEach((function (e) {
                        x.push([t, e])
                    }))
                })), e.dispatchEvent("afterpaste", {cells: x}), i.length
            }, e.getNextVisibleColumnIndex = function (t) {
                var o, r = e.getVisibleSchema();
                for (o = 0; o < r.length; o += 1) if (r[o].columnIndex === t) return r[o + 1].columnIndex;
                return -1
            }, e.getVisibleColumnIndexOf = function (t) {
                var o, r = e.getVisibleSchema();
                for (o = 0; o < r.length; o += 1) if (r[o].columnIndex === t) return o;
                return -1
            }, e.paste = function (t) {
                if (!e.dispatchEvent("beforepaste", {NativeEvent: t})) {
                    var o = new Map(Array.from(t.clipboardData.items).map((function (e) {
                        return [e.type, e]
                    }))), r = ["text/html", "text/csv", "text/plain"], n = r.map((function (e) {
                        return o.get(e)
                    })).filter((function (e) {
                        return !!e
                    }));
                    if (0 !== n.length) {
                        var l = n[0], i = l.type;
                        l.getAsString((function (t) {
                            e.pasteData(t, i, e.activeCell.rowIndex, e.getVisibleColumnIndexOf(e.activeCell.columnIndex)), e.draw()
                        }))
                    } else console.warn("Cannot find supported clipboard data type. Supported types are:", r.join(", "))
                }
            }, e.cut = function (t) {
                e.copy(t), e.forEachSelectedCell((function (e, t, o) {
                    e[t][o] = ""
                }))
            }, e.copy = function (t) {
                if (!e.dispatchEvent("copy", {NativeEvent: t}) && e.hasFocus && t.clipboardData) {
                    e.data;
                    var o, r, n, l = [], i = [], a = {}, s = e.getSelectedData(), c = e.getSchema();
                    s.length > 0 && (s.forEach((function (t) {
                        var o = Object.keys(t);
                        if (t) {
                            var r = [], n = [], s = [];
                            c.forEach((function (t, o) {
                                s.push(c[e.orders.columns[o]])
                            })), s.forEach((function (e, l) {
                                -1 !== o.indexOf(e.name) && (a[e.name] = !0, function (e, t, o, r) {
                                    null !== e && !1 !== e && void 0 !== e && e.replace ? (t.push(u(e)), o.push('"' + e.replace(/"/g, '""') + '"')) : void 0 !== e ? (o.push(e), t.push(u(e))) : (o.push(""), t.push("<td>&nbsp;</td>"))
                                }(t[e.name], r, n))
                            })), l.push(r.join("")), i.push(n.join(","))
                        }
                    })), o = h(n = Object.keys(a)) + i.join("\n"), r = "<table>" + h(n, !0) + "<tr>" + l.join("</tr><tr>") + "</tr></table>", 1 === n.length && (o = o.substring(1, o.length - 1)), t.clipboardData.setData("text/html", r), t.clipboardData.setData("text/plain", o), t.clipboardData.setData("text/csv", o), t.clipboardData.setData("application/json", JSON.stringify(s)), t.preventDefault())
                }

                function d(e) {
                    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function u(e) {
                    return "<td>" + ("string" == typeof (e = null == e ? "" : e) ? d(e) : e) + "</td>"
                }

                function h(o, r) {
                    if (!c.length || o.length < 2) return "";
                    var n = [];
                    return r && n.push("<tr>"), c.forEach((function (l, i) {
                        if (!(l = c[e.orders.columns[i]]).hidden && -1 !== o.indexOf(l.name)) {
                            var a = {NativeEvent: t, column: l};
                            e.dispatchEvent("copyonschema", a) && (l = a.column);
                            var s = l.name || l.title || "";
                            r ? n.push("<th>" + d(s) + "</th>") : n.push('"' + s.replace(/"/g, '""') + '"')
                        }
                    })), n.push(r ? "</tr>" : "\n"), n.join(r ? "" : ",")
                }
            }
        }
    }.apply(t, [])) || (e.exports = r)
}, function (e, t) {
    e.exports = function (e) {
        var t = {};

        function o(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
        }

        return o.m = e, o.c = t, o.d = function (e, t, r) {
            o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, o.t = function (e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (o.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var n in e) o.d(r, n, function (t) {
                return e[t]
            }.bind(null, n));
            return r
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 0)
    }([function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = o(1), n = Object.keys(r.default).reduce((function (e, t) {
            return e.concat(r.default[t])
        }), []);
        t.default = function (e) {
            return -1 === n.indexOf(e.key)
        }
    }, function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            modifier: ["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Meta", "NumLock", "ScrollLock", "Shift", "Symbol", "SymbolLock"],
            legacyModifier: ["Hyper", "Super"],
            whiteSpace: ["Enter", "Tab"],
            navigation: ["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp"],
            editing: ["Backspace", "Clear", "Copy", "CrSel", "Cut", "Delete", "EraseEof", "ExSel", "Insert", "Paste", "Redo", "Undo"],
            ui: ["Accept", "Again", "Attn", "Cancel", "ContextMenu", "Escape", "Execute", "Find", "Help", "Pause", "Play", "Props", "Select", "ZoomIn", "ZoomOut"],
            device: ["BrightnessDown", "BrightnessUp", "Eject", "LogOff", "Power", "PowerOff", "PrintScreen", "Hibernate", "Standby", "WakeUp"],
            imeCompositionKeys: ["AllCandidates", "Alphanumeric", "CodeInput", "Compose", "Convert", "Dead", "FinalMode", "GroupFirst", "GroupLast", "GroupNext", "GroupPrevious", "ModeChange", "NextCandidate", "NonConvert", "PreviousCandidate", "Process", "SingleCandidate"],
            koreanSpecific: ["HangulMode", "HanjaMode", "JunjaMode"],
            japaneseSpecific: ["Eisu", "Hankaku", "Hiragana", "HiraganaKatakana", "KanaMode", "KanjiMode", "Katakana", "Romaji", "Zenkaku", "ZenkakuHankaku"],
            commonFunction: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Soft1", "Soft2", "Soft3", "Soft4"],
            multimedia: ["ChannelDown", "ChannelUp", "Close", "MailForward", "MailReply", "MailSend", "MediaClose", "MediaFastForward", "MediaPause", "MediaPlay", "MediaPlayPause", "MediaRecord", "MediaRewind", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "New", "Open", "Print", "Save", "SpellCheck"],
            multimediaNumpad: ["Key11", "Key12"],
            audio: ["AudioBalanceLeft", "AudioBalanceRight", "AudioBassBoostDown", "AudioBassBoostToggle", "AudioBassBoostUp", "AudioFaderFront", "AudioFaderRear", "AudioSurroundModeNext", "AudioTrebleDown", "AudioTrebleUp", "AudioVolumeDown", "AudioVolumeUp", "AudioVolumeMute", "MicrophoneToggle", "MicrophoneVolumeDown", "MicrophoneVolumeUp", "MicrophoneVolumeMute"],
            speech: ["SpeechCorrectionList", "SpeechInputToggle"],
            application: ["LaunchApplication1", "LaunchApplication2", "LaunchCalendar", "LaunchContacts", "LaunchMail", "LaunchMediaPlayer", "LaunchMusicPlayer", "LaunchPhone", "LaunchScreenSaver", "LaunchSpreadsheet", "LaunchWebBrowser", "LaunchWebCam", "LaunchWordProcessor"],
            browser: ["BrowserBack", "BrowserFavorites", "BrowserForward", "BrowserHome", "BrowserRefresh", "BrowserSearch", "BrowserStop"],
            mobilePhone: ["AppSwitch", "Call", "Camera", "CameraFocus", "EndCall", "GoBack", "GoHome", "HeadsetHook", "LastNumberRedial", "Notification", "MannerMode", "VoiceDial"],
            tv: ["TV", "TV3DMode", "TVAntennaCable", "TVAudioDescription", "TVAudioDescriptionMixDown", "TVAudioDescriptionMixUp", "TVContentsMenu", "TVDataService", "TVInput", "TVInputComponent1", "TVInputComponent2", "TVInputComposite1", "TVInputComposite2", "TVInputHDMI1", "TVInputHDMI2", "TVInputHDMI3", "TVInputHDMI4", "TVInputVGA1", "TVMediaContext", "TVNetwork", "TVNumberEntry", "TVPower", "TVRadioService", "TVSatellite", "TVSatelliteBS", "TVSatelliteCS", "TVSatelliteToggle", "TVTerrestrialAnalog", "TVTerrestrialDigital", "TVTimer"],
            mediaControls: ["AVRInput", "AVRPower", "ColorF0Red", "ColorF1Green", "ColorF2Yellow", "ColorF3Blue", "ColorF4Grey", "ColorF5Brown", "ClosedCaptionToggle", "Dimmer", "DisplaySwap", "DVR", "Exit", "FavoriteClear0", "FavoriteClear1", "FavoriteClear2", "FavoriteClear3", "FavoriteRecall0", "FavoriteRecall1", "FavoriteRecall2", "FavoriteRecall3", "FavoriteStore0", "FavoriteStore1", "FavoriteStore2", "FavoriteStore3", "Guide", "GuideNextDay", "GuidePreviousDay", "Info", "InstantReplay", "Link", "ListProgram", "LiveContent", "Lock", "MediaApps", "MediaAudioTrack", "MediaLast", "MediaSkipBackward", "MediaSkipForward", "MediaStepBackward", "MediaStepForward", "MediaTopMenu", "NavigateIn", "NavigateNext", "NavigateOut", "NavigatePrevious", "NextFavoriteChannel", "NextUserProfile", "OnDemand", "Pairing", "PinPDown", "PinPMove", "PinPToggle", "PinPUp", "PlaySpeedDown", "PlaySpeedReset", "PlaySpeedUp", "RandomToggle", "RcLowBattery", "RecordSpeedNext", "RfBypass", "ScanChannelsToggle", "ScreenModeNext", "Settings", "SplitScreenToggle", "STBInput", "STBPower", "Subtitle", "Teletext", "VideoModeNext", "Wink", "ZoomToggle"]
        }
    }]).default
}, function (e, t, o) {
    var r;
    void 0 === (r = function () {
        "use strict";
        return function (e) {
            var t, o;
            e.scrollAnimation = {}, e.touchDelta = {}, e.touchAnimateTo = {}, e.animationFrames = 0, e.getTouchPos = function (t, o) {
                var r, n = o ? t.touches[o] : t.touches[0], l = e.canvas.getBoundingClientRect();
                if (n) return r = {
                    x: n.clientX - l.left,
                    y: n.clientY - l.top
                }, e.isChildGrid && (r.x -= e.canvasOffsetLeft, r.y -= e.canvasOffsetTop), {x: r.x, y: r.y, rect: l}
            }, e.easingFunctions = {
                linear: function (e) {
                    return e
                }, easeInQuad: function (e) {
                    return e * e
                }, easeOutQuad: function (e) {
                    return e * (2 - e)
                }, easeInOutQuad: function (e) {
                    return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                }, easeInCubic: function (e) {
                    return e * e * e
                }, easeOutCubic: function (e) {
                    return --e * e * e + 1
                }, easeInOutCubic: function (e) {
                    return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                }, easeInQuart: function (e) {
                    return e * e * e * e
                }, easeOutQuart: function (e) {
                    return 1 - --e * e * e * e
                }, easeInOutQuart: function (e) {
                    return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                }, easeInQuint: function (e) {
                    return e * e * e * e * e
                }, easeOutQuint: function (e) {
                    return 1 + --e * e * e * e * e
                }, easeInOutQuint: function (e) {
                    return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                }
            }, e.easing = function (t, o, r, n) {
                return r * e.easingFunctions[e.attributes.touchEasingMethod](t / n) + o
            }, e.calculatePPSTimed = function () {
                e.xPPST = -(e.touchDelta.x - e.touchSigmaTimed.x) / (e.touchDelta.t - e.touchSigmaTimed.t), e.yPPST = -(e.touchDelta.y - e.touchSigmaTimed.y) / (e.touchDelta.t - e.touchSigmaTimed.t), e.touchSigmaTimed = {
                    x: e.touchDelta.x,
                    y: e.touchDelta.y,
                    t: performance.now()
                }
            }, e.calculatePPS = function () {
                e.xPPS = -(e.touchDelta.x - e.touchSigma.x) / (e.touchDelta.t - e.touchSigma.t), e.yPPS = -(e.touchDelta.y - e.touchSigma.y) / (e.touchDelta.t - e.touchSigma.t), e.touchSigma = {
                    x: e.touchDelta.x,
                    y: e.touchDelta.y,
                    t: performance.now()
                }
            }, e.touchEndAnimation = function () {
                if (!e.canvas || !e.scrollBox.scrollTo) return requestAnimationFrame(e.touchEndAnimation);
                var t, o = performance.now(), r = e.attributes.touchReleaseAnimationDurationMs;
                t = o - e.touchDelta.t, e.animationFrames += 1, e.scrollAnimation.x = e.easing(t, e.touchDelta.scrollLeft, e.touchAnimateTo.x, r), e.scrollAnimation.y = e.easing(t, e.touchDelta.scrollTop, e.touchAnimateTo.y, r), t > r || e.scrollAnimation.y === e.scrollBox.scrollTop && e.scrollAnimation.x === e.scrollBox.scrollLeft || e.stopAnimation || (e.scrollBox.scrollTo(e.scrollAnimation.x, e.scrollAnimation.y), requestAnimationFrame(e.touchEndAnimation))
            }, e.touchEditCell = function (t) {
                e.beginEditAt(t.columnIndex, t.rowIndex)
            }, e.touchCell = function (t) {
                return function () {
                    clearInterval(e.calculatePPSTimer);
                    var o, r = e.getTouchPos(t);
                    if (Math.abs(e.touchDelta.x) + Math.abs(e.touchDelta.y) < e.attributes.touchDeadZone) {
                        if (!(o = e.getCellAt(r.x, r.y))) return;
                        if (e.touchingCell && e.touchingCell.rowIndex === o.rowIndex && e.touchingCell.columnIndex === o.columnIndex) return void e.touchEditCell(o);
                        e.input && e.input.editCell && e.endEdit(), e.touchingCell = o, e.selectArea({
                            top: o.rowIndex,
                            bottom: o.rowIndex,
                            left: o.columnIndex,
                            right: o.columnIndex
                        }), e.draw(!0)
                    }
                }
            }, e.touchstart = function (t) {
                if (t.changedTouches[0] && (e.touchStart = e.getTouchPos(t), e.startingCell = e.getCellAt(e.touchStart.x, e.touchStart.y, !0)), !e.dispatchEvent("touchstart", {
                    NativeEvent: t,
                    cell: e.startingCell
                })) {
                    if (e.disposeContextMenu(), clearInterval(e.calculatePPSTimer), clearTimeout(e.touchContextTimeout), e.touchStartEvent = t, e.stopAnimation = !0, e.animationFrames = 0, e.stopPropagation(t), t.preventDefault(), 1 === t.touches.length && t.changedTouches[0] && !e.zoomAltered) {
                        if (e.touchLength = 1, e.touchStart = e.touchStart || e.touchStart1, e.touchScrollStart = {
                            x: e.scrollBox.scrollLeft,
                            y: e.scrollBox.scrollTop,
                            t: performance.now()
                        }, e.touchDelta = {
                            x: 0,
                            y: 0,
                            scrollLeft: e.scrollBox.scrollLeft,
                            scrollTop: e.scrollBox.scrollTop,
                            t: e.touchScrollStart.t
                        }, e.touchSigma = {
                            x: e.touchDelta.x,
                            y: e.touchDelta.y,
                            t: e.touchDelta.t
                        }, e.touchSigmaTimed = {
                            x: e.touchDelta.x,
                            y: e.touchDelta.y,
                            t: e.touchDelta.t
                        }, e.touchContextTimeout = setTimeout((function () {
                            e.contextmenuEvent(t, e.touchStart)
                        }), e.attributes.touchContextMenuTimeMs), e.calculatePPSTimer = setInterval(e.calculatePPSTimed, 50), e.startingCell && (e.startingCell.isGrid || -1 !== ["tree", "inherit"].indexOf(e.startingCell.context))) return void (e.hasFocus = !1);
                        if (e.hasFocus = !0, e.startingCell.isHeader) return e.startingCell.isRowHeader ? (e.selectArea({
                            top: e.startingCell.rowIndex,
                            bottom: e.startingCell.rowIndex,
                            left: 0,
                            right: e.getVisibleSchema().length - 1
                        }), e.draw(!0)) : e.startingCell.isColumnHeader && ("sort" === e.attributes.columnHeaderClickBehavior && (e.orderBy === e.startingCell.header.name ? e.orderDirection = "asc" === e.orderDirection ? "desc" : "asc" : e.orderDirection = "asc", e.order(e.startingCell.header.name, e.orderDirection)), "select" === e.attributes.columnHeaderClickBehavior && (e.selectArea({
                            top: 0,
                            bottom: e.data.length - 1,
                            left: e.startingCell.columnIndex,
                            right: e.startingCell.columnIndex
                        }), e.draw(!0))), void e.touchEndEvents(t)
                    }
                    e.zoomAltered || (document.body.addEventListener("touchmove", e.touchmove, {passive: !1}), document.body.addEventListener("touchend", e.touchend, !1), document.body.addEventListener("touchcancel", e.touchcancel, !1), e.draw(!0))
                }
            }, e.touchSelect = function (t, o) {
                if (void 0 !== t.rowIndex && void 0 !== t.columnIndex) {
                    e.touchSelecting = !0;
                    var r = e.getSelectionBounds();
                    "selection-handle-bl" === o && t.rowIndex >= r.top && t.columnIndex <= r.right ? (r.bottom = t.rowIndex, r.left = t.columnIndex) : "selection-handle-tl" === o && t.rowIndex <= r.bottom && t.columnIndex <= r.right ? (r.top = t.rowIndex, r.left = t.columnIndex) : "selection-handle-tr" === o && t.rowIndex <= r.bottom && t.columnIndex >= r.left ? (r.top = t.rowIndex, r.right = t.columnIndex) : "selection-handle-br" === o && t.rowIndex >= r.top && t.columnIndex >= r.left && (r.bottom = t.rowIndex, r.right = t.columnIndex), "row" === e.attributes.selectionMode || -1 === t.rowIndex ? (r.left = 0, r.right = e.getSchema().length - 1) : r.left = Math.max(0, r.left), e.selectArea(r), e.draw(!0)
                }
            }, e.touchmove = function (r) {
                t || requestAnimationFrame((function () {
                    t = !0, function (t) {
                        var r, n, l, i, a, s, c, d, u;
                        if (!e.dispatchEvent("beforetouchmove", {NativeEvent: t})) {
                            if (clearTimeout(o), t.changedTouches[0] && (e.touchPosition = e.getTouchPos(t)), t.changedTouches[1] && (e.touchPosition1 = e.getTouchPos(t, 1)), Math.abs(e.touchDelta.x) + Math.abs(e.touchDelta.y) > e.attributes.touchDeadZone && clearTimeout(e.touchContextTimeout), 2 === t.touches.length && e.touchPosition && e.touchPosition1) return d = e.touchPosition.y, u = e.touchPosition1.y, e.zoomDeltaStart || (e.zoomDeltaStart = Math.abs(d - u), e.startScale = e.scale), e.touchLength = 2, e.scaleDelta = e.zoomDeltaStart - Math.abs(d - u), e.scale = e.startScale - e.scaleDelta * e.attributes.touchZoomSensitivity, e.scale = Math.min(Math.max(e.scale, e.attributes.touchZoomMin), e.attributes.touchZoomMax), e.zoomAltered = !0, e.resize(!0), void e.resizeChildGrids();
                            e.zoomAltered || (e.touchLength = 1, e.touchPosition = e.touchPosition || e.touchPosition1, r = e.getColumnHeaderCellHeight(), n = e.getRowHeaderCellWidth(), l = e.width - e.style.scrollBarWidth - e.touchPosition.x < e.attributes.selectionScrollZone, i = e.touchPosition.x - n < e.attributes.selectionScrollZone, a = e.height - e.style.scrollBarWidth - e.touchPosition.y < e.attributes.selectionScrollZone, s = e.touchPosition.y - r < e.attributes.selectionScrollZone, c = e.style.scrollBarWidth, t.stopPropagation(), e.touchDelta = {
                                x: e.touchPosition.x - e.touchStart.x,
                                y: e.touchPosition.y - e.touchStart.y,
                                scrollLeft: e.scrollBox.scrollLeft,
                                scrollTop: e.scrollBox.scrollTop,
                                t: performance.now()
                            }, e.currentCell = e.getCellAt(e.touchPosition.x, e.touchPosition.y), e.dispatchEvent("touchmove", {
                                NativeEvent: t,
                                cell: e.currentCell
                            }), e.calculatePPS(), e.touchDuration = performance.now() - e.touchScrollStart.t, e.stopAnimation = !0, e.animationFrames = 0, e.touchSelecting && (l || i || s || a) && function t() {
                                var r = e.scrollBox.scrollLeft, n = e.scrollBox.scrollTop;
                                r += l ? e.attributes.selectionScrollIncrement : 0, n += a ? e.attributes.selectionScrollIncrement : 0, n -= s ? e.attributes.selectionScrollIncrement : 0, r -= i ? e.attributes.selectionScrollIncrement : 0, e.scrollBox.scrollTo(r, n), o = setTimeout(t, e.attributes.scrollRepeatRate)
                            }(), /vertical-scroll-/.test(e.startingCell.style) ? e.scrollBox.scrollTop = e.scrollBox.scrollHeight * ((e.touchPosition.y - r - c) / (e.scrollBox.height - c - r)) : /horizontal-scroll-/.test(e.startingCell.style) ? e.scrollBox.scrollLeft = e.scrollBox.scrollWidth * ((e.touchPosition.x - n - c) / (e.scrollBox.width - c - n)) : /selection-handle-/.test(e.startingCell.style) ? e.touchSelect(e.currentCell, e.startingCell.style) : e.scrollBox.scrollTo(e.touchScrollStart.x - e.touchDelta.x, e.touchScrollStart.y - e.touchDelta.y))
                        }
                    }(r), t = !1
                }))
            }, e.touchEndEvents = function (t) {
                e.zoomDeltaStart = void 0, e.touchSelecting = !1, clearInterval(e.touchScrollTimeout), clearInterval(e.touchContextTimeout), clearInterval(e.calculatePPSTimer), t.stopPropagation(), document.body.removeEventListener("touchmove", e.touchmove, {passive: !1}), document.body.removeEventListener("touchend", e.touchend, !1), document.body.removeEventListener("touchcancel", e.touchcancel, !1)
            }, e.touchend = function (t) {
                if (!e.dispatchEvent("touchend", {
                    NativeEvent: t,
                    cell: e.currentCell
                })) if (e.zoomDeltaStart = void 0, t.changedTouches[0] && (e.touchPosition = void 0), t.changedTouches[1] && (e.touchPosition1 = void 0), e.zoomAltered) 0 === t.touches.length && (e.zoomAltered = !1); else {
                    var o = Math.abs(e.touchDelta.x) + Math.abs(e.touchDelta.y) < e.attributes.touchDeadZone;
                    isNaN(e.xPPS) && (e.xPPS = 0), isNaN(e.yPPS) && (e.yPPS = 0), isNaN(e.xPPST) && (e.xPPST = 0), isNaN(e.yPPST) && (e.yPPST = 0), e.touchAnimateTo.x = e.xPPS * e.attributes.touchReleaseAcceleration, e.touchAnimateTo.y = e.yPPS * e.attributes.touchReleaseAcceleration, e.calculatePPSTimed(), o && !e.contextMenu ? e.touchCell(e.touchStartEvent)() : 0 !== e.animationFrames || !(Math.abs(e.xPPST) > e.attributes.scrollAnimationPPSThreshold || Math.abs(e.yPPST) > e.attributes.scrollAnimationPPSThreshold) || /-scroll-/.test(e.startingCell.style) || o || (e.stopAnimation = !1, e.touchEndAnimation()), e.touchEndEvents(t)
                }
            }, e.touchcancel = function (t) {
                e.dispatchEvent("touchcancel", {NativeEvent: t, cell: e.currentCell}) || e.touchEndEvents(t)
            }
        }
    }.apply(t, [])) || (e.exports = r)
}, function (e, t, o) {
    var r;

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    void 0 === (r = function () {
        "use strict";
        return function (e, t) {
            function o(e, t) {
                var o, r = [];
                for (o = e; o <= t; o += 1) r[o] = o;
                return r
            }

            e.scale = 1, e.orders = {
                rows: [],
                columns: []
            }, e.appliedInlineStyles = {}, e.cellGridAttributes = {}, e.treeGridAttributes = {}, e.visibleRowHeights = [], e.hasFocus = !1, e.activeCell = {
                columnIndex: 0,
                rowIndex: 0
            }, e.innerHTML = "", e.storageName = "canvasDataGrid", e.invalidSearchExpClass = "canvas-datagrid-invalid-search-regExp", e.localStyleLibraryStorageKey = "canvas-datagrid-user-style-library", e.dataType = "application/x-canvas-datagrid", e.orderBy = null, e.orderDirection = "asc", e.orderings = {
                columns: [],
                add: function (t, o, r) {
                    e.orderings.columns = e.orderings.columns.filter((function (e) {
                        return e.orderBy !== t
                    })), e.orderings.columns.push({orderBy: t, orderDirection: o, sortFunction: r})
                },
                sort: function () {
                    e.orderings.columns.forEach((function (t) {
                        e.data.sort(t.sortFunction(t.orderBy, t.orderDirection))
                    }))
                }
            }, e.columnFilters = {}, e.filters = {}, e.frozenRow = 0, e.frozenColumn = 0, e.ellipsisCache = {}, e.scrollCache = {
                x: [],
                y: []
            }, e.scrollBox = {}, e.visibleRows = [], e.visibleCells = [], e.sizes = {
                rows: {},
                columns: {},
                trees: {}
            }, e.currentFilter = function () {
                return !0
            }, e.selections = [], e.hovers = {}, e.attributes = {}, e.style = {}, e.formatters = {}, e.sorters = {}, e.parsers = {}, e.schemaHashes = {}, e.events = {}, e.changes = [], e.scrollIndexTop = 0, e.scrollPixelTop = 0, e.scrollIndexLeft = 0, e.scrollPixelLeft = 0, e.childGrids = {}, e.openChildren = {}, e.scrollModes = ["vertical-scroll-box", "vertical-scroll-top", "vertical-scroll-bottom", "horizontal-scroll-box", "horizontal-scroll-right", "horizontal-scroll-left"], e.componentL1Events = {}, e.eventNames = ["afterdraw", "afterrendercell", "attributechanged", "beforebeginedit", "beforecreatecellgrid", "beforedraw", "beforeendedit", "beforerendercell", "beforerendercellgrid", "beginedit", "cellmouseout", "cellmouseover", "click", "collapsetree", "contextmenu", "copy", "datachanged", "dblclick", "endedit", "expandtree", "formatcellvalue", "keydown", "keypress", "keyup", "mousedown", "mousemove", "mouseup", "newrow", "ordercolumn", "rendercell", "rendercellgrid", "renderorderbyarrow", "rendertext", "rendertreearrow", "reorder", "reordering", "resize", "resizecolumn", "resizerow", "schemachanged", "scroll", "selectionchanged", "stylechanged", "touchcancel", "touchend", "touchmove", "touchstart", "wheel"], e.mouse = {
                x: 0,
                y: 0
            }, e.getSelectedData = function (t) {
                var o = [], r = e.getSchema(), n = e.data.length;
                return 0 === n ? [] : (e.selections.forEach((function (l, i) {
                    l && i !== n && (0 !== l.length ? (o[i] = {}, l.forEach((function (n) {
                        var l;
                        -1 !== n && r[n] && (l = e.orders.columns[n], !t && r[l].hidden || e.data[i] && (o[i][r[l].name] = e.data[i][r[l].name]))
                    }))) : o[i] = null)
                })), o)
            }, e.getColumnHeaderCellHeight = function () {
                return e.attributes.showColumnHeaders ? (e.sizes.rows[-1] || e.style.columnHeaderCellHeight) * e.scale : 0
            }, e.getRowHeaderCellWidth = function () {
                return e.attributes.showRowHeaders ? (e.sizes.columns[-1] || e.style.rowHeaderCellWidth) * e.scale : 0
            }, e.setStorageData = function () {
                if (e.attributes.saveAppearance && e.attributes.name) {
                    var t = {};
                    e.getSchema().forEach((function (e) {
                        t[e.name] = !e.hidden
                    })), localStorage.setItem(e.storageName + "-" + e.attributes.name, JSON.stringify({
                        sizes: {
                            rows: e.sizes.rows,
                            columns: e.sizes.columns
                        },
                        orders: {rows: e.orders.rows, columns: e.orders.columns},
                        orderBy: e.orderBy,
                        orderDirection: e.orderDirection,
                        visibility: t
                    }))
                }
            }, e.getSchema = function () {
                return e.schema || e.tempSchema || []
            }, e.createColumnOrders = function () {
                var t = e.getSchema();
                e.orders.columns = o(0, t.length - 1)
            }, e.createRowOrders = function () {
                e.orders.rows = o(0, e.data.length - 1)
            }, e.getVisibleSchema = function () {
                return e.getSchema().filter((function (e) {
                    return !e.hidden
                }))
            }, e.applyDefaultValue = function (t, o) {
                var r = o.defaultValue || "";
                "function" == typeof r && (r = r.apply(e.intf, [o])), t[o.name] = r
            }, e.createNewRowData = function () {
                e.newRow = {}, e.getSchema().forEach((function (t) {
                    e.applyDefaultValue(e.newRow, t)
                }))
            }, e.getSchemaNameHash = function (t) {
                for (var o = 0; e.schemaHashes[t];) t += o += 1;
                return t
            }, e.filter = function (t) {
                var o = e.filters[t];
                return o || void 0 === t || (console.warn("Cannot find filter for type %s, falling back to substring match.", t), o = e.filters.string), o
            }, e.applyFilter = function () {
                e.refreshFromOrigialData(), Object.keys(e.columnFilters).forEach((function (t) {
                    var o = e.getHeaderByName(t);
                    o && (e.currentFilter = o.filter || e.filter(o.type || "string"), e.data = e.data.filter((function (o) {
                        return e.currentFilter(o[t], e.columnFilters[t])
                    })))
                })), e.resize(), e.draw(!0)
            }, e.applyDataTransforms = function () {
                e.applyFilter(), e.orderings.sort()
            }, e.getBestGuessDataType = function (e, t) {
                var o, r, l = t.length;
                for (r = 0; r < l; r += 1) if (void 0 !== t[r] && null !== t[r] && -1 !== [null, void 0].indexOf(t[r][e])) return "object" === (o = n(t[r])) ? "string" : o;
                return "string"
            }, e.drawChildGrids = function () {
                Object.keys(e.childGrids).forEach((function (t) {
                    e.childGrids[t].draw()
                }))
            }, e.resizeChildGrids = function () {
                Object.keys(e.childGrids).forEach((function (t) {
                    e.childGrids[t].resize()
                }))
            }, e.autoScrollZone = function (t, o, r, n) {
                var l, i = e.getRowHeaderCellWidth(), a = e.getColumnHeaderCellHeight();
                -1 !== r && (o > e.width - e.attributes.selectionScrollZone && o < e.width && (e.scrollBox.scrollLeft += e.attributes.selectionScrollIncrement, l = !0), o - e.attributes.selectionScrollZone - i < 0 && (e.scrollBox.scrollLeft -= e.attributes.selectionScrollIncrement, l = !0)), -1 !== r && (r > e.height - e.attributes.selectionScrollZone && r < e.height && (e.scrollBox.scrollTop += e.attributes.selectionScrollIncrement, l = !0), r - e.attributes.selectionScrollZone - a < 0 && (e.scrollBox.scrollTop -= e.attributes.selectionScrollIncrement, l = !0)), l && !n && e.currentCell && -1 !== e.currentCell.columnIndex && (e.scrollTimer = setTimeout(e.mousemove, e.attributes.scrollRepeatRate, t))
            }, e.refreshFromOrigialData = function () {
                e.data = e.originalData.filter((function (e) {
                    return !0
                }))
            }, e.validateColumn = function (e, t) {
                if (!e.name) throw new Error("A column must contain at least a name.");
                if (t.filter((function (t) {
                    return t.name === e.name
                })).length > 0) throw new Error("A column with the name " + e.name + " already exists and cannot be added again.");
                return !0
            }, e.setDefaults = function (e, t, o, r) {
                e[o] = void 0 === t[o] ? r : t[o]
            }, e.setAttributes = function () {
                e.defaults.attributes.forEach((function (t) {
                    e.setDefaults(e.attributes, e.args, t[0], t[1])
                }))
            }, e.setStyle = function () {
                e.defaults.styles.forEach((function (t) {
                    e.setDefaults(e.style, e.args.style || {}, t[0], t[1])
                }))
            }, e.autosize = function (t) {
                e.getVisibleSchema().forEach((function (o, r) {
                    o.name !== t && void 0 !== t || (e.sizes.columns[r] = Math.max(e.findColumnMaxTextLength(o.name), e.style.minColumnWidth))
                })), e.sizes.columns[-1] = e.findColumnMaxTextLength("cornerCell")
            }, e.dispose = function () {
                !e.isChildGrid && e.canvas && e.canvas.parentNode && e.canvas.parentNode.removeChild(e.canvas), e.isChildGrid || document.body.removeChild(e.controlInput), e.eventParent.removeEventListener("mouseup", e.mouseup, !1), e.eventParent.removeEventListener("mousedown", e.mousedown, !1), e.eventParent.removeEventListener("dblclick", e.dblclick, !1), e.eventParent.removeEventListener("click", e.click, !1), e.eventParent.removeEventListener("mousemove", e.mousemove), e.eventParent.removeEventListener("wheel", e.scrollWheel, !1), e.canvas.removeEventListener("contextmenu", e.contextmenu, !1), e.canvas.removeEventListener("copy", e.copy), e.controlInput.removeEventListener("copy", e.copy), e.controlInput.removeEventListener("cut", e.cut), e.controlInput.removeEventListener("paste", e.paste), e.controlInput.removeEventListener("keypress", e.keypress, !1), e.controlInput.removeEventListener("keyup", e.keyup, !1), e.controlInput.removeEventListener("keydown", e.keydown, !1), window.removeEventListener("resize", e.resize), e.observer && e.observer.disconnect && e.observer.disconnect()
            }, e.tryLoadStoredSettings = function () {
                var t;
                e.reloadStoredValues(), e.storedSettings && "object" === n(e.storedSettings.orders) && null !== e.storedSettings.orders && (e.storedSettings.orders.rows.length >= (e.data || []).length && (e.orders.rows = e.storedSettings.orders.rows), t = e.getSchema(), e.storedSettings.orders.columns.length === t.length && (e.orders.columns = e.storedSettings.orders.columns), e.orderBy = void 0 === e.storedSettings.orderBy ? t[0].name : e.storedSettings.orderBy, e.orderDirection = void 0 === e.storedSettings.orderDirection ? "asc" : e.storedSettings.orderDirection, void 0 !== e.storedSettings.orderBy && e.getHeaderByName(e.orderBy) && e.orderDirection && e.order(e.orderBy, e.orderDirection))
            }, e.getDomRoot = function () {
                return e.shadowRoot ? e.shadowRoot.host : e.parentNode
            }, e.getFontName = function (e) {
                return e.replace(/\d+\.?\d*px/, "")
            }, e.getFontHeight = function (e) {
                return parseFloat(e, 10)
            }, e.parseStyleValue = function (t) {
                if (/Font/.test(t)) return e.style[t + "Height"] = e.getFontHeight(e.style[t]), void (e.style[t + "Name"] = e.getFontName(e.style[t]));
                "moveOverlayBorderSegments" === t && "string" == typeof e.style[t] && (e.style[t] = e.style[t].split(",").map((function (e) {
                    return parseInt(e, 10)
                })))
            }, e.initProp = function (t) {
                e.args[t] && Object.keys(e.args[t]).forEach((function (o) {
                    e[t][o] = e.args[t][o]
                }))
            }, e.getStyleProperty = function (t) {
                return -1 === e.styleKeys.indexOf(t) ? e.parentNodeStyle[t] : e.style[t]
            }, e.setStyleProperty = function (t, o, r) {
                var n = -1 !== ["height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth"].indexOf(t);
                -1 === e.styleKeys.indexOf(t) ? e.parentNodeStyle[t] = o : (/-/.test(t) && (t = e.dehyphenateProperty(t)), e.style[t] = o, e.parseStyleValue(t)), n && e.resize(), r || (e.draw(!0), e.dispatchEvent("stylechanged", {
                    name: "style",
                    value: o
                }))
            }, e.reloadStoredValues = function () {
                if (e.attributes.name && e.attributes.saveAppearance) {
                    try {
                        e.storedSettings = localStorage.getItem(e.storageName + "-" + e.attributes.name)
                    } catch (t) {
                        console.warn("Error loading stored values. " + t.message), e.storedSettings = void 0
                    }
                    if (e.storedSettings) try {
                        e.storedSettings = JSON.parse(e.storedSettings)
                    } catch (t) {
                        console.warn("could not read settings from localStore", t), e.storedSettings = void 0
                    }
                    e.storedSettings && ("object" === n(e.storedSettings.sizes) && null !== e.storedSettings.sizes && (e.sizes.rows = e.storedSettings.sizes.rows, e.sizes.columns = e.storedSettings.sizes.columns, ["trees", "columns", "rows"].forEach((function (t) {
                        e.sizes[t] || (e.sizes[t] = {})
                    }))), "object" === n(e.storedSettings.visibility) && e.getSchema().forEach((function (t) {
                        e.storedSettings.visibility && void 0 !== e.storedSettings.visibility[t.name] && (t.hidden = !e.storedSettings.visibility[t.name])
                    })))
                }
            }, e.init = function () {
                if (!e.initialized) {
                    var t = {};
                    return e.setAttributes(), e.setStyle(), e.initScrollBox(), e.setDom(), e.nodeType = "canvas-datagrid", e.ie = /Trident/.test(window.navigator.userAgent), e.edge = /Edge/.test(window.navigator.userAgent), e.webKit = /WebKit/.test(window.navigator.userAgent), e.moz = /Gecko/.test(window.navigator.userAgent), e.mobile = /Mobile/i.test(window.navigator.userAgent), e.blankValues = [void 0, null, ""], e.cursorGrab = "grab", e.cursorGrabing = "grabbing", e.cursorGrab = e.webKit ? "-webkit-grab" : e.cursorGrab, e.cursorGrabing = e.moz ? "-webkit-grabbing" : e.cursorGrabbing, e.pointerLockPosition = {
                        x: 0,
                        y: 0
                    }, Object.keys(e.style).forEach(e.parseStyleValue), e.intf.moveSelection = e.moveSelection, e.intf.moveTo = e.moveTo, e.intf.addEventListener = e.addEventListener, e.intf.removeEventListener = e.removeEventListener, e.intf.dispatchEvent = e.dispatchEvent, e.intf.dispose = e.dispose, e.intf.appendTo = e.appendTo, e.intf.getVisibleCellByIndex = e.getVisibleCellByIndex, e.intf.filters = e.filters, e.intf.sorters = e.sorters, e.intf.autosize = e.autosize, e.intf.beginEditAt = e.beginEditAt, e.intf.endEdit = e.endEdit, e.intf.setActiveCell = e.setActiveCell, e.intf.forEachSelectedCell = e.forEachSelectedCell, e.intf.scrollIntoView = e.scrollIntoView, e.intf.clearChangeLog = e.clearChangeLog, e.intf.gotoCell = e.gotoCell, e.intf.gotoRow = e.gotoRow, e.intf.getHeaderByName = e.getHeaderByName, e.intf.findColumnScrollLeft = e.findColumnScrollLeft, e.intf.findRowScrollTop = e.findRowScrollTop, e.intf.fitColumnToValues = e.fitColumnToValues, e.intf.findColumnMaxTextLength = e.findColumnMaxTextLength, e.intf.disposeContextMenu = e.disposeContextMenu, e.intf.getCellAt = e.getCellAt, e.intf.isCellVisible = e.isCellVisible, e.intf.isRowVisible = e.isRowVisible, e.intf.isColumnVisible = e.isColumnVisible, e.intf.order = e.order, e.intf.draw = e.draw, e.intf.isComponent = e.isComponent, e.intf.selectArea = e.selectArea, e.intf.clipElement = e.clipElement, e.intf.getSchemaFromData = e.getSchemaFromData, e.intf.setFilter = e.setFilter, e.intf.selectRow = e.selectRow, e.intf.parentGrid = e.parentGrid, e.intf.toggleTree = e.toggleTree, e.intf.expandTree = e.expandTree, e.intf.collapseTree = e.collapseTree, e.intf.canvas = e.canvas, e.intf.context = e.ctx, e.intf.insertRow = e.insertRow, e.intf.deleteRow = e.deleteRow, e.intf.addRow = e.addRow, e.intf.insertColumn = e.insertColumn, e.intf.deleteColumn = e.deleteColumn, e.intf.addColumn = e.addColumn, e.intf.getClippingRect = e.getClippingRect, e.intf.setRowHeight = e.setRowHeight, e.intf.setColumnWidth = e.setColumnWidth, e.intf.resetColumnWidths = e.resetColumnWidths, e.intf.resetRowHeights = e.resetRowHeights, e.intf.resize = e.resize, e.intf.selectColumn = e.selectColumn, e.intf.selectRow = e.selectRow, e.intf.selectAll = e.selectAll, e.intf.selectNone = e.selectNone, e.intf.drawChildGrids = e.drawChildGrids, e.intf.assertPxColor = e.assertPxColor, e.intf.clearPxColorAssertions = e.clearPxColorAssertions, e.intf.integerToAlpha = e.integerToAlpha, e.intf.copy = e.copy, e.intf.paste = e.paste, e.intf.setStyleProperty = e.setStyleProperty, Object.defineProperty(e.intf, "defaults", {
                        get: function () {
                            return {
                                styles: e.defaults.styles.reduce((function (e, t) {
                                    return e[t[0]] = t[1], e
                                }), {}), attributes: e.defaults.attributes.reduce((function (e, t) {
                                    return e[t[0]] = t[1], e
                                }), {})
                            }
                        }
                    }), e.styleKeys = Object.keys(e.intf.defaults.styles), e.styleKeys.map((function (t) {
                        return e.hyphenateProperty(t, !1)
                    })).forEach(o), e.styleKeys.map((function (t) {
                        return e.hyphenateProperty(t, !0)
                    })).forEach(o), e.DOMStyles = window.getComputedStyle(document.body, null), e.styleKeys.concat(Object.keys(e.DOMStyles)).forEach((function (o) {
                        t[o] = void 0, Object.defineProperty(t, o, {
                            get: function () {
                                return e.getStyleProperty(o)
                            }, set: function (t) {
                                e.initialized && (e.appliedInlineStyles[o] = t), e.setStyleProperty(o, t)
                            }
                        })
                    })), Object.defineProperty(e.intf, "shadowRoot", {
                        get: function () {
                            return e.shadowRoot
                        }
                    }), Object.defineProperty(e.intf, "activeCell", {
                        get: function () {
                            return e.activeCell
                        }
                    }), Object.defineProperty(e.intf, "hasFocus", {
                        get: function () {
                            return e.hasFocus
                        }
                    }), Object.defineProperty(e.intf, "style", {
                        get: function () {
                            return t
                        }, set: function (t) {
                            Object.keys(t).forEach((function (o) {
                                e.setStyleProperty(o, t[o], !0)
                            })), e.draw(!0), e.dispatchEvent("stylechanged", {name: "style", value: t})
                        }
                    }), Object.defineProperty(e.intf, "attributes", {value: {}}), Object.keys(e.attributes).forEach((function (t) {
                        Object.defineProperty(e.intf.attributes, t, {
                            get: function () {
                                return e.attributes[t]
                            }, set: function (o) {
                                e.attributes[t] = o, "name" === t && e.tryLoadStoredSettings(), e.draw(!0), e.dispatchEvent("attributechanged", {
                                    name: t,
                                    value: o[t]
                                })
                            }
                        })
                    })), e.filters.string = function (t, o) {
                        if (o === e.attributes.blanksText) return e.blankValues.includes(null == t ? t : String(t).trim());
                        t = String(t);
                        var r, n = /\/(i|g|m)*$/.exec(o), l = n ? n[0].substring(1) : "", i = l.length;
                        if (e.invalidFilterRegEx = void 0, "/" === o.substring(0, 1) && n) {
                            try {
                                r = new RegExp(o.substring(1, o.length - (i + 1)), l)
                            } catch (t) {
                                return void (e.invalidFilterRegEx = t)
                            }
                            return r.test(t)
                        }
                        return !!t.toString && -1 !== t.toString().toLocaleUpperCase().indexOf(o.toLocaleUpperCase())
                    }, e.filters.number = function (t, o) {
                        return o === e.attributes.blanksText ? e.blankValues.includes(null == t ? t : String(t).trim()) : !o || t === o
                    }, ["formatters", "filters", "sorters"].forEach(e.initProp), e.applyComponentStyle(!1, e.intf), e.reloadStoredValues(), e.args.data && (e.intf.data = e.args.data),(e.intf.innerText || e.intf.textContent) && ("application/x-canvas-datagrid" === e.intf.dataType && (e.intf.dataType = "application/json+x-canvas-datagrid"), e.intf.data = e.intf.innerText || e.intf.textContent),e.args.schema && (e.intf.schema = e.args.schema),e.isChildGrid || !e.isComponent ? requestAnimationFrame((function () {
                        e.resize(!0)
                    })) : e.resize(!0),e.initialized = !0,e
                }

                function o(t) {
                    -1 === e.styleKeys.indexOf(t) && e.styleKeys.push(t)
                }
            }, e.intf.blur = function (t) {
                e.hasFocus = !1
            }, e.intf.focus = function () {
                e.hasFocus = !0, e.controlInput.focus()
            }, (e.shadowRoot || e.isChildGrid) && (Object.defineProperty(e.intf, "height", {
                get: function () {
                    return e.shadowRoot ? e.shadowRoot.height : e.parentNode.height
                }, set: function (t) {
                    e.shadowRoot ? e.shadowRoot.height = t : e.parentNode.height = t, e.resize(!0)
                }
            }), Object.defineProperty(e.intf, "width", {
                get: function () {
                    return e.shadowRoot ? e.shadowRoot.width : e.parentNode.width
                }, set: function (t) {
                    e.shadowRoot ? e.shadowRoot.width = t : e.parentNode.width = t, e.resize(!0)
                }
            }), Object.defineProperty(e.intf, "parentNode", {
                get: function () {
                    return e.parentNode
                }, set: function (t) {
                    if (!e.isChildGrid) throw new TypeError("Cannot set property parentNode which has only a getter");
                    e.parentNode = t
                }
            })), Object.defineProperty(e.intf, "visibleRowHeights", {
                get: function () {
                    return e.visibleRowHeights
                }
            }), Object.defineProperty(e.intf, "openChildren", {
                get: function () {
                    return e.openChildren
                }
            }), Object.defineProperty(e.intf, "childGrids", {
                get: function () {
                    return Object.keys(e.childGrids).map((function (t) {
                        return e.childGrids[t]
                    }))
                }
            }), Object.defineProperty(e.intf, "isChildGrid", {
                get: function () {
                    return e.isChildGrid
                }
            }), Object.defineProperty(e, "cursor", {
                get: function () {
                    return e.parentNodeStyle.cursor
                }, set: function (t) {
                    "cell" === t && (t = "default"), e.currentCursor !== t && (e.parentNodeStyle.cursor = t, e.currentCursor = t)
                }
            }), Object.defineProperty(e.intf, "orderDirection", {
                get: function () {
                    return e.orderDirection
                }, set: function (t) {
                    "desc" !== t && (t = "asc"), e.orderDirection = t, e.order(e.orderBy, e.orderDirection)
                }
            }), Object.defineProperty(e.intf, "orderBy", {
                get: function () {
                    return e.orderBy
                }, set: function (t) {
                    if (void 0 === e.getSchema().find((function (e) {
                        return e.name === t
                    }))) throw new Error("Cannot sort by unknown column name.");
                    e.orderBy = t, e.order(e.orderBy, e.orderDirection)
                }
            }), e.isComponent && (Object.defineProperty(e.intf, "offsetHeight", {
                get: function () {
                    return e.canvas.offsetHeight
                }
            }), Object.defineProperty(e.intf, "offsetWidth", {
                get: function () {
                    return e.canvas.offsetWidth
                }
            })), Object.defineProperty(e.intf, "scrollHeight", {
                get: function () {
                    return e.scrollBox.scrollHeight
                }
            }), Object.defineProperty(e.intf, "scrollWidth", {
                get: function () {
                    return e.scrollBox.scrollWidth
                }
            }), Object.defineProperty(e.intf, "scrollTop", {
                get: function () {
                    return e.scrollBox.scrollTop
                }, set: function (t) {
                    e.scrollBox.scrollTop = t
                }
            }), Object.defineProperty(e.intf, "scrollLeft", {
                get: function () {
                    return e.scrollBox.scrollLeft
                }, set: function (t) {
                    e.scrollBox.scrollLeft = t
                }
            }), Object.defineProperty(e.intf, "sizes", {
                get: function () {
                    return e.sizes
                }
            }), Object.defineProperty(e.intf, "parentDOMNode", {
                get: function () {
                    return e.parentDOMNode
                }
            }), Object.defineProperty(e.intf, "input", {
                get: function () {
                    return e.input
                }
            }), Object.defineProperty(e.intf, "controlInput", {
                get: function () {
                    return e.controlInput
                }
            }),Object.defineProperty(e.intf, "currentCell", {
                get: function () {
                    return e.currentCell
                }
            }),Object.defineProperty(e.intf, "visibleCells", {
                get: function () {
                    return e.visibleCells
                }
            }),Object.defineProperty(e.intf, "visibleRows", {
                get: function () {
                    return e.visibleRows
                }
            }),Object.defineProperty(e.intf, "selections", {
                get: function () {
                    return e.selections
                }
            }),Object.defineProperty(e.intf, "dragMode", {
                get: function () {
                    return e.dragMode
                }
            }),Object.defineProperty(e.intf, "changes", {
                get: function () {
                    return e.changes
                }
            }),e.intf.formatters = e.formatters,Object.defineProperty(e.intf, "dataType", {
                get: function () {
                    return e.dataType
                }, set: function (t) {
                    if (!e.parsers[t]) throw new Error("No parser for MIME type " + t);
                    e.dataType = t
                }
            }),e.eventNames.forEach((function (t) {
                Object.defineProperty(e.intf, "on" + t, {
                    get: function () {
                        return e.componentL1Events[t]
                    }, set: function (o) {
                        e.events[t] = [], e.componentL1Events[t] = o, o && e.addEventListener(t, o)
                    }
                })
            })),Object.defineProperty(e.intf, "frozenRow", {
                get: function () {
                    return e.frozenRow
                }, set: function (t) {
                    if (isNaN(t)) throw new TypeError("Expected value for frozenRow to be a number.");
                    if (e.visibleRows.length < t) throw new RangeError("Cannot set a value larger than the number of visible rows.");
                    e.frozenRow = t
                }
            }),Object.defineProperty(e.intf, "frozenColumn", {
                get: function () {
                    return e.frozenColumn
                }, set: function (t) {
                    if (isNaN(t)) throw new TypeError("Expected value for frozenRow to be a number.");
                    if (e.getVisibleSchema().length < t) throw new RangeError("Cannot set a value larger than the number of visible columns.");
                    e.frozenColumn = t
                }
            }),Object.defineProperty(e.intf, "scrollIndexRect", {
                get: function () {
                    return {
                        top: e.scrollIndexTop,
                        right: e.scrollIndexRight,
                        bottom: e.scrollIndexBottom,
                        left: e.scrollIndexLeft
                    }
                }
            }),Object.defineProperty(e.intf, "scrollPixelRect", {
                get: function () {
                    return {
                        top: e.scrollPixelTop,
                        right: e.scrollPixelRight,
                        bottom: e.scrollPixelBottom,
                        left: e.scrollPixelLeft
                    }
                }
            }),Object.defineProperty(e.intf, "rowOrder", {
                get: function () {
                    return e.orders.rows
                }, set: function (t) {
                    if (!Array.isArray(t)) throw new TypeError("Value must be an array.");
                    if (!e.data || t.length < e.data.length) throw new RangeError("Array length must be equal to or greater than number of rows.");
                    e.orders.rows = t
                }
            }),Object.defineProperty(e.intf, "columnOrder", {
                get: function () {
                    return e.orders.columns
                }, set: function (t) {
                    if (!Array.isArray(t)) throw new TypeError("Value must be an array.");
                    if (t.length < e.getSchema().length) throw new RangeError("Array length must be equal to or greater than number of columns.");
                    e.orders.columns = t
                }
            }),Object.defineProperty(e.intf, "selectionBounds", {
                get: function () {
                    return e.getSelectionBounds()
                }
            }),Object.defineProperty(e.intf, "selectedRows", {
                get: function () {
                    return e.getSelectedData(!0)
                }
            }),Object.defineProperty(e.intf, "selectedCells", {
                get: function () {
                    return e.getSelectedData()
                }
            }),Object.defineProperty(e.intf, "visibleSchema", {
                get: function () {
                    return e.getVisibleSchema().map((function (e) {
                        return e
                    }))
                }
            }),Object.defineProperty(e.intf, "treeGridAttributes", {
                get: function () {
                    return e.treeGridAttributes
                }, set: function (t) {
                    e.treeGridAttributes = t
                }
            }),Object.defineProperty(e.intf, "cellGridAttributes", {
                get: function () {
                    return e.cellGridAttributes
                }, set: function (t) {
                    e.cellGridAttributes = t
                }
            }),Object.defineProperty(e.intf, "ctx", {
                get: function () {
                    return e.ctx
                }
            }),Object.defineProperty(e.intf, "schema", {
                get: function () {
                    return e.getSchema()
                }, set: function (t) {
                    if (void 0 === t) return e.schema = void 0, e.tempSchema = void 0, void e.dispatchEvent("schemachanged", {schema: void 0});
                    if (!Array.isArray(t) || "object" !== n(t[0])) throw new Error("Schema must be an array of objects.");
                    if (void 0 === t[0].name) throw new Error("Expected schema to contain an object with at least a name property.");
                    e.schema = t.map((function (t, o) {
                        return t.width = t.width || e.style.cellWidth, t.filter = t.filter || e.filter(t.type), t.type = t.type || "string", t.index = o, t.columnIndex = o, t.rowIndex = -1, t
                    })), e.tempSchema = void 0, e.createNewRowData(), e.createColumnOrders(), e.tryLoadStoredSettings(), e.storedSettings && "object" === n(e.storedSettings.visibility) && e.schema.forEach((function (t, o) {
                        e.storedSettings && void 0 !== e.storedSettings.visibility[t.name] && (t.hidden = !e.storedSettings.visibility[t.name])
                    })), e.resize(!0), e.dispatchEvent("schemachanged", {schema: e.schema})
                }
            }),e.intf.getTypes = function () {
                return Object.keys(e.parsers)
            },e.parseInnerHtml = function (e) {
                if (!e || /^ +$/.test(e)) return [];
                try {
                    e = JSON.parse(e)
                } catch (e) {
                    console.warn(Error("Cannot parse application/json+x-canvas-datagrid formated data. " + e.message + "  \nNote: canvas-datagrid.innerHTML is for string data only.  Use the canvas-datagrid.data property to set object data."))
                }
                return e
            },e.parsers["application/json+x-canvas-datagrid"] = function (t, o) {
                e.parsers["application/x-canvas-datagrid"](e.parseInnerHtml(t), (function (e, t) {
                    return o(e, t)
                }))
            },e.parsers["application/x-canvas-datagrid"] = function (e, t) {
                return t(e)
            },e.intf.parsers = e.parsers,e.etl = function (t, o) {
                if (!e.intf.parsers[e.dataType]) throw new Error("Unsupported data type.");
                e.intf.parsers[e.dataType](t, (function (t, r) {
                    Array.isArray(r) && (e.schema = r), e.attributes.autoGenerateSchema && (e.schema = e.getSchemaFromData(t)), e.schema || (e.tempSchema = e.getSchemaFromData(t)), e.getSchema() && e.createColumnOrders(), e.originalData = t, e.applyDataTransforms(), e.schema || 0 !== (e.data || []).length || (e.tempSchema = [{name: ""}]), e.fitColumnToValues("cornerCell", !0), (e.tempSchema && !e.schema || e.attributes.autoGenerateSchema) && (e.createColumnOrders(), e.dispatchEvent("schemachanged", {schema: e.tempSchema})), o()
                }))
            },Object.defineProperty(e.intf, "data", {
                get: function () {
                    return e.data
                }, set: function (t) {
                    e.etl(t, (function () {
                        e.changes = [], e.createNewRowData(), e.attributes.autoResizeColumns && e.data.length > 0 && void 0 === e.storedSettings && e.autosize(), e.fitColumnToValues("cornerCell", !0), e.createRowOrders(), e.tryLoadStoredSettings(), e.dispatchEvent("datachanged", {data: e.data}), e.resize(!0)
                    }))
                }
            }),e.initScrollBox = function () {
                var t = 0, o = 0, r = 0, n = 0, l = 0, i = 0, a = 20, s = 20;

                function c(t, o) {
                    if (isNaN(t)) throw new Error("ScrollTop value must be a number");
                    t < 0 && (t = 0), t > l && (t = l), l < 0 && (t = 0), r = t, o || e.scroll()
                }

                function d(t, o) {
                    if (isNaN(t)) throw new Error("ScrollLeft value must be a number");
                    t < 0 && (t = 0), t > i && (t = i), i < 0 && (t = 0), n = t, o || e.scroll()
                }

                e.scrollBox.toString = function () {
                    return '{"width": ' + i.toFixed(2) + ', "height": ' + l.toFixed(2) + ', "left": ' + n.toFixed(2) + ', "top": ' + r.toFixed(2) + ', "widthRatio": ' + e.scrollBox.widthBoxRatio.toFixed(5) + ', "heightRatio": ' + e.scrollBox.heightBoxRatio.toFixed(5) + "}"
                }, e.scrollBox.scrollTo = function (e, t, o) {
                    d(e, !0), c(t, o)
                }, Object.defineProperty(e.scrollBox, "scrollBoxHeight", {
                    get: function () {
                        return a
                    }, set: function (e) {
                        a = e
                    }
                }), Object.defineProperty(e.scrollBox, "scrollBoxWidth", {
                    get: function () {
                        return s
                    }, set: function (e) {
                        s = e
                    }
                }), Object.defineProperty(e.scrollBox, "height", {
                    get: function () {
                        return t
                    }, set: function (e) {
                        t = e
                    }
                }), Object.defineProperty(e.scrollBox, "width", {
                    get: function () {
                        return o
                    }, set: function (e) {
                        o = e
                    }
                }), Object.defineProperty(e.scrollBox, "scrollTop", {
                    get: function () {
                        return r
                    }, set: c
                }), Object.defineProperty(e.scrollBox, "scrollLeft", {
                    get: function () {
                        return n
                    }, set: d
                }), Object.defineProperty(e.scrollBox, "scrollHeight", {
                    get: function () {
                        return l
                    }, set: function (e) {
                        r > e && (r = Math.max(e, 0)), l = e
                    }
                }), Object.defineProperty(e.scrollBox, "scrollWidth", {
                    get: function () {
                        return i
                    }, set: function (e) {
                        n > e && (n = Math.max(e, 0)), i = e
                    }
                })
            }
        }
    }.apply(t, [])) || (e.exports = r)
}, function (e, t, o) {
    var r;

    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    void 0 === (r = function () {
        "use strict";
        return function (e) {
            var t, o, r;

            function l(t) {
                e.createInlineStyle(t, "canvas-datagrid-context-menu-item" + (e.mobile ? "-mobile" : "")), t.addEventListener("mouseover", (function () {
                    e.createInlineStyle(t, "canvas-datagrid-context-menu-item:hover")
                })), t.addEventListener("mouseout", (function () {
                    e.createInlineStyle(t, "canvas-datagrid-context-menu-item")
                }))
            }

            function i(r, a, s, c) {
                var d, u, h, f = document.createElement("div"), g = document.createElement("div"),
                    p = document.createElement("div"), m = [], x = -1, y = {};
                if (!Array.isArray(s)) throw new Error("createContextMenu expects an array.");

                function v() {
                    f.scrollTop > 0 ? e.parentDOMNode.appendChild(g) : g.parentNode && g.parentNode.removeChild(g), f.scrollTop >= f.scrollHeight - f.offsetHeight && p.parentNode ? p.parentNode.removeChild(p) : f.scrollHeight - f.offsetHeight > 0 && !(f.scrollTop >= f.scrollHeight - f.offsetHeight) && e.parentDOMNode.appendChild(p)
                }

                function w(t) {
                    return function r() {
                        var n = e.attributes.contextHoverScrollAmount;
                        "up" === t && 0 === f.scrollTop || "down" === t && f.scrollTop === f.scrollHeight || (f.scrollTop += "up" === t ? -n : n, o = setTimeout(r, e.attributes.contextHoverScrollRateMs, t))
                    }
                }

                function b(e) {
                    return function () {
                        clearTimeout(o)
                    }
                }

                return y.parentGrid = e.intf, y.parentContextMenu = c, y.container = f, u = {}, h = e.scrollOffset(e.canvas), void 0 === t && (t = e.style.contextMenuZIndex), s.forEach((function (t) {
                    var o, a = document.createElement("div");

                    function s(e) {
                        e.relatedTarget === f || t.contextMenu.container === e.relatedTarget || o === e.relatedTarget || a === e.relatedTarget || t.contextMenu.container.contains(e.relatedTarget) || (t.contextMenu.dispose(), m.splice(m.indexOf(t.contextMenu), 1), t.contextMenu = void 0, a.removeEventListener("mouseout", s), f.removeEventListener("mouseout", s), a.setAttribute("contextOpen", "0"), a.setAttribute("opening", "0"))
                    }

                    function c(o) {
                        if ("1" === a.getAttribute("opening") && "1" !== a.getAttribute("contextOpen")) {
                            var n = a.getBoundingClientRect();
                            n = {
                                left: n.left + e.style.childContextMenuMarginLeft + f.offsetWidth,
                                top: n.top + e.style.childContextMenuMarginTop,
                                bottom: n.bottom,
                                right: n.right
                            }, t.contextMenu = i(r, n, o, y), a.setAttribute("contextOpen", "1"), a.addEventListener("mouseout", s), f.addEventListener("mouseout", s), m.push(t.contextMenu)
                        }
                    }

                    function d() {
                        var e;
                        "1" !== a.getAttribute("contextOpen") && (a.setAttribute("opening", "1"), "function" != typeof t.items ? c(t.items) : void 0 !== (e = t.items.apply(y, [function (e) {
                            c(e)
                        }])) && Array.isArray(e) && c(e))
                    }

                    !function (t) {
                        !function e(t) {
                            if (null !== t) return "function" == typeof t ? e(t(r)) : void ("object" !== n(t) ? (l(a), a.innerHTML = t) : a.appendChild(t))
                        }(t.title), t.contextItemContainer = a, (t.items && t.items.length > 0 || "function" == typeof t.items) && (o = document.createElement("div"), e.createInlineStyle(o, "canvas-datagrid-context-child-arrow"), o.innerHTML = e.style.childContextMenuArrowHTML, a.appendChild(o), a.addEventListener("mouseover", d), a.addEventListener("mouseout", (function () {
                            a.setAttribute("opening", "0")
                        }))), t.click && a.addEventListener("click", (function (o) {
                            t.click.apply(e, [o])
                        }))
                    }(t), f.appendChild(a)
                })), e.createInlineStyle(f, "canvas-datagrid-context-menu" + (e.mobile ? "-mobile" : "")), u.x = a.left - h.left, u.y = a.top - h.top, u.height = 0, t += 1, f.style.position = "absolute", g.style.color = e.style.contextMenuArrowColor, p.style.color = e.style.contextMenuArrowColor, [g, p].forEach((function (e) {
                    e.style.textAlign = "center", e.style.position = "absolute", e.style.zIndex = t + 1
                })), f.style.zIndex = t, c && c.inputDropdown && (f.style.maxHeight = window.innerHeight - u.y - e.style.autocompleteBottomMargin + "px", f.style.minWidth = a.width + "px", u.y += a.height), e.mobile && (f.style.width = a.width + "px"), f.style.left = u.x + "px", f.style.top = u.y + "px", f.addEventListener("scroll", v), f.addEventListener("wheel", (function (t) {
                    e.hasFocus && (f.scrollTop += t.deltaY, f.scrollLeft += t.deltaX), v()
                })), g.innerHTML = e.style.contextMenuArrowUpHTML, p.innerHTML = e.style.contextMenuArrowDownHTML, f.appendChild(g), document.body.appendChild(p), document.body.appendChild(f), (d = f.getBoundingClientRect()).bottom > window.innerHeight && (c && c.inputDropdown || (u.y -= d.bottom + e.style.contextMenuWindowMargin - window.innerHeight), u.y < 0 && (u.y = e.style.contextMenuWindowMargin), f.offsetHeight > window.innerHeight - e.style.contextMenuWindowMargin && (f.style.height = window.innerHeight - 2 * e.style.contextMenuWindowMargin + "px")), d.right > window.innerWidth && (u.x -= d.right - window.innerWidth + e.style.contextMenuWindowMargin), u.x < 0 && (u.x = e.style.contextMenuWindowMargin), u.y < 0 && (u.y = e.style.contextMenuWindowMargin), f.style.left = u.x + "px", f.style.top = u.y + "px", d = f.getBoundingClientRect(), g.style.top = d.top + "px", p.style.top = d.top + d.height - p.offsetHeight + "px", g.style.left = d.left + "px", p.style.left = d.left + "px", p.style.width = f.offsetWidth + "px", g.style.width = f.offsetWidth + "px", p.addEventListener("mouseover", w("down")), p.addEventListener("mouseout", b()), g.addEventListener("mouseover", w("up")), g.addEventListener("mouseout", b()), v(), y.clickIndex = function (e) {
                    s[e].contextItemContainer.dispatchEvent(new Event("click"))
                }, y.rect = d, y.items = s, y.upArrow = g, y.downArrow = p, y.dispose = function () {
                    clearTimeout(o), m.forEach((function (e) {
                        e.dispose()
                    })), [p, g, f].forEach((function (e) {
                        e.parentNode && e.parentNode.removeChild(e)
                    }))
                }, Object.defineProperty(y, "selectedIndex", {
                    get: function () {
                        return x
                    }, set: function (t) {
                        if ("number" != typeof t || isNaN(t || !isFinite(t))) throw new Error("Context menu selected index must be a sane number.");
                        (x = t) > s.length - 1 && (x = s.length - 1), x < 0 && (x = 0), s.forEach((function (t, o) {
                            if (o === x) return e.createInlineStyle(t.contextItemContainer, "canvas-datagrid-context-menu-item:hover");
                            e.createInlineStyle(t.contextItemContainer, "canvas-datagrid-context-menu-item")
                        }))
                    }
                }), y
            }

            function a(t) {
                var o, n = document.createElement("div"), l = document.createElement("div"),
                    a = document.createElement("button"), s = document.createElement("input"),
                    c = t.cell && t.cell.header ? t.cell.header.title || t.cell.header.name : "";

                function d() {
                    s.style.background = e.style.contextFilterInputBackground, s.style.color = e.style.contextFilterInputColor, e.invalidFilterRegEx && (s.style.background = e.style.contextFilterInvalidRegExpBackground, s.style.color = e.style.contextFilterInvalidRegExpColor)
                }

                function u(n) {
                    if (!n || !["ArrowDown", "ArrowUp", "Enter", "Tab"].includes(n.key)) {
                        var l, a, c, d = (l = 0, a = {}, c = [], e.data.forEach((function (o) {
                            var r = null == o[t.cell.header.name] ? o[t.cell.header.name] : String(o[t.cell.header.name]).trim(),
                                n = e.blankValues.includes(r) ? e.attributes.blanksText : r;
                            a[n] || l > e.attributes.maxAutoCompleteItems || (l += 1, a[n] = {
                                title: e.formatters[t.cell.header.type || "string"]({cell: {value: n}}),
                                click: function (t) {
                                    s.value = n, t.stopPropagation(), s.dispatchEvent(new Event("keyup")), e.disposeAutocomplete()
                                }
                            })
                        })), -1 !== Object.keys(a).indexOf(e.attributes.blanksText) && (c.push(a[e.attributes.blanksText]), delete a[e.attributes.blanksText]), c.concat(Object.keys(a).map((function (e) {
                            return a[e]
                        }))));
                        o = s.getBoundingClientRect(), r && (r.dispose(), r = void 0), (r = i(t, {
                            left: o.left,
                            top: o.top,
                            right: o.right,
                            bottom: o.bottom,
                            height: o.height,
                            width: o.width
                        }, d, {inputDropdown: !0})).selectedIndex = 0
                    }
                }

                e.createInlineStyle(l, "canvas-datagrid-context-menu-label"), e.createInlineStyle(a, "canvas-datagrid-context-menu-filter-button"), e.createInlineStyle(s, "canvas-datagrid-context-menu-filter-input"), d(), s.onclick = e.disposeAutocomplete, s.addEventListener("keydown", (function (t) {
                    "ArrowDown" === t.key && (r.selectedIndex += 1), "ArrowUp" === t.key && (r.selectedIndex -= 1), "Enter" === t.key && (r.clickIndex(r.selectedIndex), e.disposeContextMenu()), "Tab" === t.key && (r.clickIndex(r.selectedIndex), t.preventDefault()), "Escape" === t.key && e.disposeContextMenu()
                })), s.addEventListener("keyup", (function () {
                    e.setFilter(t.cell.header.name, s.value)
                })), s.addEventListener("keyup", u), ["focus", "blur", "keydown", "keyup", "change"].forEach((function (e) {
                    s.addEventListener(e, d)
                })), s.value = t.cell.header && e.columnFilters[t.cell.header.name] || "", l.innerHTML = e.attributes.filterOptionText.replace(/%s/g, c), a.onclick = function () {
                    if (r) return e.disposeAutocomplete();
                    u()
                }, a.innerHTML = e.style.contextFilterButtonHTML, n.addEventListener("click", (function (e) {
                    return e.stopPropagation()
                })), n.appendChild(l), n.appendChild(s), n.appendChild(a), t.items.push({title: n}), Object.keys(e.columnFilters).length && Object.keys(e.columnFilters).forEach((function (o) {
                    var r = e.getHeaderByName(o);
                    t.items.push({
                        title: e.attributes.removeFilterOptionText.replace(/%s/g, r.title || r.name),
                        click: function (t) {
                            t.preventDefault(), e.setFilter(o, ""), e.controlInput.focus()
                        }
                    })
                }))
            }

            e.disposeAutocomplete = function () {
                r && (r.dispose(), r = void 0)
            }, e.disposeContextMenu = function () {
                document.removeEventListener("click", e.disposeContextMenu), t = e.style.contextMenuZIndex, e.disposeAutocomplete(), e.contextMenu && e.contextMenu.dispose(), e.contextMenu = void 0
            }, e.contextmenuEvent = function (t, o) {
                if (e.hasFocus || t.target === e.canvas) {
                    var r, n = [], s = o || e.getLayerPos(t),
                        c = {NativeEvent: t, cell: e.getCellAt(s.x, s.y), items: n};
                    c.cell.isGrid || function (t) {
                        var o = !(t.cell.isBackground || t.cell.isColumnHeaderCellCap || t.cell.isScrollBar || t.cell.isCorner || t.cell.isRowHeader) && t.cell.header;
                        e.attributes.showFilter && o && a(t), e.attributes.showCopy && e.selections.reduce((function (e, t) {
                            return e + t.length
                        }), 0) > 0 && t.items.push({
                            title: e.attributes.copyText, click: function () {
                                document.execCommand("copy"), e.disposeContextMenu(), e.controlInput.focus()
                            }
                        }), e.attributes.showPaste && e.clipBoardData && t.items.push({
                            title: e.attributes.pasteText,
                            click: function () {
                                e.paste(e.clipBoardData, t.cell.columnIndex, t.cell.rowIndex), e.draw()
                            }
                        }), e.attributes.showColumnSelector && (t.items.push({
                            title: e.attributes.columnSelectorText,
                            items: function () {
                                var t = [];
                                return e.getSchema().forEach((function (o) {
                                    function r(t) {
                                        o.hidden = !o.hidden, e.dispatchEvent("togglecolumn", {
                                            column: o,
                                            hidden: o.hidden
                                        }), t.preventDefault(), e.stopPropagation(t), e.disposeContextMenu(), e.resize(!0), e.setStorageData()
                                    }

                                    var n = document.createElement("div");
                                    l(n), n.addEventListener("touchstart", r), n.addEventListener("click", r), n.innerHTML = (o.hidden ? e.attributes.columnSelectorHiddenText : e.attributes.columnSelectorVisibleText) + (o.title || o.name), t.push({title: n})
                                })), t
                            }
                        }), t.cell && t.cell.header && t.cell.columnIndex > -1 && t.items.push({
                            title: e.attributes.hideColumnText.replace(/%s/gi, t.cell.header.title || t.cell.header.name),
                            click: function (o) {
                                e.getSchema()[t.cell.columnIndex].hidden = !0, o.preventDefault(), e.stopPropagation(o), e.disposeContextMenu(), e.setStorageData(), setTimeout((function () {
                                    e.resize(!0)
                                }), 10)
                            }
                        })), e.attributes.saveAppearance && e.attributes.showClearSettingsOption && (Object.keys(e.sizes.rows).length > 0 || Object.keys(e.sizes.columns).length > 0) && t.items.push({
                            title: e.attributes.clearSettingsOptionText,
                            click: function (t) {
                                t.preventDefault(), e.sizes.rows = {}, e.sizes.columns = {}, e.createRowOrders(), e.createColumnOrders(), e.storedSettings = void 0, e.dispatchEvent("resizecolumn", {columnWidth: e.style.cellWidth}), e.dispatchEvent("resizerow", {cellHeight: e.style.cellHeight}), e.setStorageData(), e.resize(!0), e.disposeContextMenu(), e.controlInput.focus()
                            }
                        }), e.attributes.allowSorting && e.attributes.showOrderByOption && o && (t.items.push({
                            title: e.attributes.showOrderByOptionTextAsc.replace("%s", t.cell.header.title || t.cell.header.name),
                            click: function (o) {
                                o.preventDefault(), e.order(t.cell.header.name, "asc"), e.controlInput.focus()
                            }
                        }), t.items.push({
                            title: e.attributes.showOrderByOptionTextDesc.replace("%s", t.cell.header.title || t.cell.header.name),
                            click: function (o) {
                                o.preventDefault(), e.order(t.cell.header.name, "desc"), e.disposeContextMenu(), e.controlInput.focus()
                            }
                        }))
                    }(c), e.dispatchEvent("contextmenu", c) || c.cell.isGrid || (e.contextMenu && e.disposeContextMenu(), r = {
                        left: s.x + s.rect.left + e.style.contextMenuMarginLeft + e.canvasOffsetLeft,
                        top: s.y + s.rect.top + e.style.contextMenuMarginTop + e.canvasOffsetTop,
                        right: c.cell.width + c.cell.x + s.rect.left,
                        bottom: c.cell.height + c.cell.y + s.rect.top,
                        height: c.cell.height,
                        width: c.cell.width
                    }, e.mobile && (r.left = e.style.mobileContextMenuMargin + "px", r.width = e.width - 2 * e.style.mobileContextMenuMargin + "px"), e.contextMenu = i(c, r, n), document.addEventListener("mouseup", (function t() {
                        requestAnimationFrame((function () {
                            document.addEventListener("click", e.disposeContextMenu), document.removeEventListener("mouseup", t)
                        }))
                    })), t.preventDefault())
                }
            }
        }
    }.apply(t, [])) || (e.exports = r)
}, function (e, t, o) {
    var r;
    void 0 === (r = function () {
        "use strict";
        return function (e) {
            e.getClippingRect = function (t) {
                var o = e.position(e.parentNode), r = e.position(t), n = e.scrollOffset(e.canvas),
                    l = {x: 0, y: 0, h: 0, w: 0}, i = {x: -1 / 0, y: -1 / 0, h: 1 / 0, w: 1 / 0},
                    a = e.getColumnHeaderCellHeight(), s = e.getRowHeaderCellWidth();
                return o.top -= n.top, o.left -= n.left, r.top -= n.top, r.left -= n.left, l.h = o.top + o.height - t.offsetTop - e.style.scrollBarWidth, l.w = o.left + o.width - t.offsetLeft - e.style.scrollBarWidth, l.x = o.left + -1 * r.left + s, l.y = o.top + -1 * r.top + a, {
                    x: l.x > i.x ? l.x : i.x,
                    y: l.y > i.y ? l.y : i.y,
                    h: l.h < i.h ? l.h : i.h,
                    w: l.w < i.w ? l.w : i.w
                }
            }, e.clipElement = function (t) {
                var o = e.getClippingRect(t);
                o.w < 0 && (o.w = 0), o.h < 0 && (o.h = 0), t.style.clip = "rect(" + o.y + "px," + o.w + "px," + o.h + "px," + o.x + "px)"
            }, e.scrollOffset = function (t) {
                for (var o = 0, r = 0, n = document.scrollingElement || {
                    scrollLeft: 0,
                    scrollTop: 0
                }; t.parentNode && "CANVAS-DATAGRID" !== t.nodeName && t !== e.intf;) "canvas-datagrid-tree" !== t.nodeType && "canvas-datagrid-cell" !== t.nodeType && (o -= t.scrollLeft, r -= t.scrollTop), t = t.parentNode;
                return {left: o - n.scrollLeft, top: r - n.scrollTop}
            }, e.resizeEditInput = function () {
                if (e.input && e.input.editCell) {
                    var t = e.canvas.getBoundingClientRect(), o = e.scrollOffset(e.intf),
                        r = "collapse" === e.style.gridBorderCollapse ? 1 : 2, n = e.style.cellBorderWidth * r,
                        l = e.getVisibleCellByIndex(e.input.editCell.columnIndex, e.input.editCell.rowIndex) || {
                            x: -100,
                            y: -100,
                            height: 0,
                            width: 0
                        };
                    if (e.mobile) return e.input.style.left = "0", e.input.style.top = e.height - e.style.mobileEditInputHeight - n - 1 + "px", e.input.style.height = e.style.mobileEditInputHeight + "px", void (e.input.style.width = e.width - n - 1 + "px");
                    e.input.style.left = t.left + l.x + e.canvasOffsetLeft - o.left + "px", e.input.style.top = t.top + l.y - e.style.cellBorderWidth + e.canvasOffsetTop - o.top + "px", e.input.style.height = l.height - n + "px", e.input.style.width = l.width - e.style.cellPaddingLeft + "px", e.clipElement(e.input)
                }
            }, e.position = function (t, o) {
                for (var r, n, l = 0, i = 0, a = t; t.offsetParent && "CANVAS-DATAGRID" !== t.nodeName;) l += t.offsetLeft, i += t.offsetTop, r = t.offsetHeight, n = t.offsetWidth, t = t.offsetParent;
                return o ? {left: l, top: i, height: r, width: n} : (t = a, {
                    left: l + (a = e.scrollOffset(t)).left,
                    top: i + a.top,
                    height: r,
                    width: n
                })
            }, e.getLayerPos = function (t) {
                var o = e.canvas.getBoundingClientRect(), r = {x: t.clientX - o.left, y: t.clientY - o.top};
                return e.isChildGrid && (r.x -= e.canvasOffsetLeft, r.y -= e.canvasOffsetTop), {x: r.x, y: r.y, rect: o}
            }, e.endEdit = function (t) {
                var o = e.input.editCell, r = o.rowIndex;
                if (e.dispatchEvent("beforeendedit", {
                    cell: o,
                    newValue: e.input.value,
                    oldValue: o.value,
                    abort: function () {
                        t = !0
                    },
                    input: e.input
                })) return !1;
                if (e.input.value !== o.value && !t) {
                    if (e.changes[r] = e.changes[r] || {}, e.changes[r][o.header.name] = e.input.value, o.data || (e.data[o.rowIndex] = {}, o.data = e.data[o.rowIndex]), o.data[o.header.name] = e.input.value, r === e.data.length) {
                        if (e.dispatchEvent("newrow", {
                            value: e.input.value,
                            defaultValue: o.value,
                            aborted: t,
                            cell: o,
                            input: e.input
                        })) return !1;
                        e.addRow(o.data), e.createNewRowData()
                    }
                    e.draw(!0)
                }
                return e.input.parentNode && e.input.parentNode.removeChild(e.input), e.intf.focus(), e.dispatchEvent("endedit", {
                    cell: o,
                    value: e.input.value,
                    aborted: t,
                    input: e.input
                }), e.input = void 0, !0
            }, e.beginEditAt = function (t, o, r) {
                if (e.attributes.editable) {
                    e.input && e.endEdit();
                    var n, l, i, a, s, c = e.getVisibleCellByIndex(t, o);
                    e.getSchema();
                    if (c && c.header) {
                        if (i = c.header.enum, e.dispatchEvent("beforebeginedit", {cell: c, NativeEvent: r})) return !1;
                        e.scrollIntoView(t, o), e.setActiveCell(t, o), n = e.getAdjacentCells(), e.input = i ? document.createElement("select") : document.createElement(e.attributes.multiLine ? "textarea" : "input"), (c = e.getVisibleCellByIndex(t, o)) && (i && ("function" == typeof i ? l = i.apply(e.intf, [{cell: c}]) : Array.isArray(i) && (l = i), l.forEach((function (t) {
                            var o, r, n = document.createElement("option");
                            Array.isArray(t) ? (o = t[0], r = t[1]) : (o = t, r = t), o === c.value && (s = !0), n.value = o, n.innerHTML = r, e.input.appendChild(n)
                        })), s || ((a = document.createElement("option")).value = c.value, a.innerHTML = c.value, e.input.appendChild(a)), e.input.addEventListener("change", (function () {
                            e.endEdit(), e.draw(!0)
                        }))), e.dispatchEvent("appendeditinput", {
                            cell: c,
                            input: e.input
                        }) || document.body.appendChild(e.input), e.createInlineStyle(e.input, e.mobile ? "canvas-datagrid-edit-mobile-input" : "canvas-datagrid-edit-input"), e.input.style.position = "absolute", e.input.editCell = c, e.resizeEditInput(), e.input.style.zIndex = e.style.editCellZIndex, e.input.style.fontSize = parseInt(e.style.editCellFontSize, 10) * e.scale + "px", e.input.value = -1 !== [null, void 0].indexOf(c.value) ? "" : c.value, e.input.focus(), e.input.addEventListener("click", e.stopPropagation), e.input.addEventListener("dblclick", e.stopPropagation), e.input.addEventListener("mouseup", e.stopPropagation), e.input.addEventListener("mousedown", e.stopPropagation), e.input.addEventListener("keydown", (function (o) {
                            var r = c.columnIndex, l = c.rowIndex;
                            if ("Escape" === o.key) e.endEdit(!0), e.draw(!0); else if ("Enter" === o.key && (!e.attributes.multiLine || e.attributes.multiLine && o.shiftKey)) {
                                e.endEdit();
                                var i = Math.min(l + 1, e.data.length - 1);
                                i !== l && (e.scrollIntoView(r, i), e.setActiveCell(r, i)), e.draw(!0)
                            } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(o.key)) {
                                switch (o.key) {
                                    case"ArrowUp":
                                        l = Math.max(0, l - 1);
                                        break;
                                    case"ArrowDown":
                                        l = Math.min(l + 1, e.data.length - 1);
                                        break;
                                    case"ArrowLeft":
                                        r = Math.max(r - 1, 0);
                                        break;
                                    case"ArrowRight":
                                        r = n.right
                                }
                                e.endEdit(), e.scrollIntoView(r, l), e.setActiveCell(r, l), e.draw(!0)
                            } else if ("Tab" === o.key) {
                                if (o.preventDefault(), !e.endEdit()) return;
                                r = o.shiftKey ? n.left : n.right, n.left === t && o.shiftKey && (r = n.last, l -= 1), n.right !== t || o.shiftKey || (r = n.first, l += 1), l < 0 && (l = e.data.length - 1), l > e.data.length - 1 && (l = 0), e.scrollIntoView(r, l), e.beginEditAt(r, l, o)
                            }
                        })), e.dispatchEvent("beginedit", {cell: c, input: e.input}))
                    }
                }
            }, e.createInlineStyle = function (t, o) {
                var r = {
                    "canvas-datagrid-context-menu-filter-input": {
                        height: "19px",
                        verticalAlign: "bottom",
                        marginLeft: "2px",
                        padding: "0",
                        background: e.style.contextFilterInputBackground,
                        color: e.style.contextFilterInputColor,
                        border: e.style.contextFilterInputBorder,
                        borderRadius: e.style.contextFilterInputBorderRadius,
                        lineHeight: "normal",
                        fontWeight: "normal",
                        fontFamily: e.style.contextFilterInputFontFamily,
                        fontSize: e.style.contextFilterInputFontSize
                    },
                    "canvas-datagrid-context-menu-filter-button": {
                        height: "19px",
                        verticalAlign: "bottom",
                        marginLeft: "2px",
                        padding: "0",
                        background: e.style.contextMenuBackground,
                        color: e.style.contextMenuColor,
                        border: e.style.contextFilterButtonBorder,
                        borderRadius: e.style.contextFilterButtonBorderRadius,
                        lineHeight: "normal",
                        fontWeight: "normal",
                        fontFamily: e.style.contextMenuFilterButtonFontFamily,
                        fontSize: e.style.contextMenuFilterButtonFontSize
                    },
                    "canvas-datagrid-context-child-arrow": {
                        cssFloat: "right",
                        color: e.style.childContextMenuArrowColor,
                        fontSize: e.style.contextMenuChildArrowFontSize,
                        fontFamily: e.style.contextMenuFontFamily,
                        verticalAlign: "middle"
                    },
                    "canvas-datagrid-autocomplete": {
                        fontFamily: e.style.contextMenuFontFamily,
                        fontSize: e.style.contextMenuFontSize,
                        background: e.style.contextMenuBackground,
                        color: e.style.contextMenuColor,
                        border: e.style.contextMenuBorder,
                        padding: e.style.contextMenuPadding,
                        borderRadius: e.style.contextMenuBorderRadius,
                        opacity: e.style.contextMenuOpacity,
                        position: "absolute",
                        zIndex: 9999,
                        overflow: "hidden"
                    },
                    "canvas-datagrid-autocomplete-item": {
                        background: e.style.contextMenuBackground,
                        color: e.style.contextMenuColor
                    },
                    "canvas-datagrid-autocomplete-item:hover": {
                        background: e.style.contextMenuHoverBackground,
                        color: e.style.contextMenuHoverColor
                    },
                    "canvas-datagrid-canvas": {position: "absolute", zIndex: "-1"},
                    "canvas-datagrid": {display: "block"},
                    "canvas-datagrid-control-input": {
                        position: "fixed",
                        top: "-5px",
                        left: "-5px",
                        border: "none",
                        opacity: "0",
                        cursor: "pointer",
                        width: "1px",
                        height: "1px",
                        lineHeight: "normal",
                        fontWeight: "normal",
                        fontFamily: e.style.contextMenuFontFamily,
                        fontSize: e.style.contextMenuFontSize
                    },
                    "canvas-datagrid-edit-mobile-input": {
                        boxSizing: "content-box",
                        outline: "none",
                        margin: "0",
                        padding: "0 0 0 0",
                        lineHeight: "normal",
                        fontWeight: "normal",
                        fontFamily: e.style.mobileEditFontFamily,
                        fontSize: e.style.mobileEditFontSize,
                        border: e.style.editCellBorder,
                        color: e.style.editCellColor,
                        background: e.style.editCellBackgroundColor,
                        appearance: "none",
                        webkitAppearance: "none",
                        mozAppearance: "none",
                        borderRadius: "0"
                    },
                    "canvas-datagrid-edit-input": {
                        boxSizing: "content-box",
                        outline: "none",
                        margin: "0",
                        padding: "0 0 0 " + e.style.editCellPaddingLeft + "px",
                        lineHeight: "normal",
                        fontWeight: "normal",
                        fontFamily: e.style.editCellFontFamily,
                        fontSize: e.style.editCellFontSize,
                        boxShadow: e.style.editCellBoxShadow,
                        border: e.style.editCellBorder,
                        color: e.style.editCellColor,
                        background: e.style.editCellBackgroundColor,
                        appearance: "none",
                        webkitAppearance: "none",
                        mozAppearance: "none",
                        borderRadius: "0"
                    },
                    "canvas-datagrid-context-menu-item-mobile": {
                        lineHeight: "normal",
                        fontWeight: "normal",
                        fontFamily: e.style.contextMenuFontFamily,
                        fontSize: e.style.contextMenuFontSize,
                        color: "inherit",
                        background: "inherit",
                        margin: e.style.contextMenuItemMargin,
                        borderRadius: e.style.contextMenuItemBorderRadius,
                        verticalAlign: "middle"
                    },
                    "canvas-datagrid-context-menu-item": {
                        lineHeight: "normal",
                        fontWeight: "normal",
                        fontFamily: e.style.contextMenuFontFamily,
                        fontSize: e.style.contextMenuFontSize,
                        color: "inherit",
                        background: "inherit",
                        margin: e.style.contextMenuItemMargin,
                        borderRadius: e.style.contextMenuItemBorderRadius,
                        verticalAlign: "middle"
                    },
                    "canvas-datagrid-context-menu-item:hover": {
                        background: e.style.contextMenuHoverBackground,
                        color: e.style.contextMenuHoverColor
                    },
                    "canvas-datagrid-context-menu-label": {
                        margin: e.style.contextMenuLabelMargin,
                        display: e.style.contextMenuLabelDisplay,
                        minWidth: e.style.contextMenuLabelMinWidth,
                        maxWidth: e.style.contextMenuLabelMaxWidth
                    },
                    "canvas-datagrid-context-menu-mobile": {
                        lineHeight: "normal",
                        fontWeight: "normal",
                        fontFamily: e.style.contextMenuFontFamily,
                        fontSize: e.style.contextMenuFontSize,
                        background: e.style.contextMenuBackground,
                        color: e.style.contextMenuColor,
                        border: e.style.contextMenuBorder,
                        padding: e.style.contextMenuPadding,
                        borderRadius: e.style.contextMenuBorderRadius,
                        opacity: e.style.contextMenuOpacity,
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    },
                    "canvas-datagrid-context-menu": {
                        lineHeight: "normal",
                        fontWeight: "normal",
                        fontFamily: e.style.contextMenuFontFamily,
                        fontSize: e.style.contextMenuFontSize,
                        background: e.style.contextMenuBackground,
                        color: e.style.contextMenuColor,
                        border: e.style.contextMenuBorder,
                        padding: e.style.contextMenuPadding,
                        borderRadius: e.style.contextMenuBorderRadius,
                        opacity: e.style.contextMenuOpacity,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        cursor: e.style.contextMenuCursor
                    },
                    "canvas-datagrid-invalid-search-regExp": {background: e.style.contextMenuFilterInvalidExpresion}
                };
                r[o] && Object.keys(r[o]).map((function (e) {
                    t.style[e] = r[o][e]
                }))
            }, e.appendTo = function (t) {
                e.parentNode = t, e.setDom()
            }, e.setDom = function () {
                e.isChildGrid ? (e.parentGrid = e.parentNode.parentGrid, e.ctx = e.parentGrid.context, e.canvas = e.parentGrid.canvas, e.controlInput = e.parentGrid.controlInput, e.eventParent = e.canvas) : (e.controlInput = e.controlInput || document.createElement("input"), e.controlInput.onblur = e.intf.blur, e.createInlineStyle(e.controlInput, "canvas-datagrid-control-input"), e.isChildGrid = !1, e.parentDOMNode = e.parentNode, e.parentIsCanvas = /^canvas$/i.test(e.parentDOMNode.tagName), e.parentIsCanvas ? e.canvas = e.parentDOMNode : (e.canvas = document.createElement("canvas"), e.parentDOMNode.appendChild(e.canvas)), document.body.appendChild(e.controlInput), e.createInlineStyle(e.canvas, "canvas-datagrid"), e.ctx = e.canvas.getContext("2d"), e.ctx.textBaseline = "alphabetic", e.eventParent = e.canvas), e.parentNodeStyle = e.canvas.style, e.controlInput.setAttribute("readonly", !0), e.controlInput.addEventListener("blur", (function (t) {
                    t.target !== e.canvas && (e.hasFocus = !1)
                })), e.eventParent.addEventListener("scroll", e.resize, !1), e.eventParent.addEventListener("touchstart", e.touchstart, !1), e.eventParent.addEventListener("mouseup", e.mouseup, !1), e.eventParent.addEventListener("mousedown", e.mousedown, !1), e.eventParent.addEventListener("dblclick", e.dblclick, !1), e.eventParent.addEventListener("click", e.click, !1), e.eventParent.addEventListener("mousemove", e.mousemove), e[e.isChildGrid ? "parentGrid" : "eventParent"].addEventListener("wheel", e.scrollWheel, !1), e.canvas.addEventListener("contextmenu", e.contextmenuEvent, !1), e.controlInput.addEventListener("copy", e.copy), e.controlInput.addEventListener("cut", e.cut), e.controlInput.addEventListener("paste", e.paste), e.controlInput.addEventListener("keypress", e.keypress, !1), e.controlInput.addEventListener("keyup", e.keyup, !1), e.controlInput.addEventListener("keydown", e.keydown, !1), window.addEventListener("resize", e.resize)
            }
        }
    }.apply(t, [])) || (e.exports = r)
}, function (e, t, o) {
    var r;
    void 0 === (r = function () {
        "use strict";
        return function (e) {
            e.integerToAlpha = function (e) {
                for (var t = "a".charCodeAt(0), o = "z".charCodeAt(0) - t + 1, r = ""; e >= 0;) r = String.fromCharCode(e % o + t) + r, e = Math.floor(e / o) - 1;
                return r
            }, e.insertColumn = function (t, o) {
                var r = e.getSchema();
                if (r.length < o) throw new Error("Index is beyond the length of the schema.");
                e.validateColumn(t, r), r.splice(o, 0, t), e.data.forEach((function (o) {
                    e.applyDefaultValue(o, t)
                })), e.intf.schema = r
            }, e.deleteColumn = function (t) {
                var o = e.getSchema();
                e.data.forEach((function (e) {
                    delete e[o[t].name]
                })), o.splice(t, 1), e.intf.schema = o
            }, e.addColumn = function (t) {
                var o = e.getSchema();
                e.validateColumn(t, o), o.push(t), e.data.forEach((function (o) {
                    e.applyDefaultValue(o, t)
                })), e.intf.schema = o
            }, e.deleteRow = function (t) {
                e.originalData.splice(t, 1), e.setFilter(), e.resize(!0)
            }, e.insertRow = function (t, o) {
                if (e.originalData.length < o) throw new Error("Index is beyond the length of the dataset.");
                e.originalData.splice(o, 0, t), e.getSchema().forEach((function (r) {
                    void 0 === t[r.name] && e.applyDefaultValue(e.originalData[o], r)
                })), e.setFilter(), e.resize(!0)
            }, e.addRow = function (t) {
                e.originalData.push(t), e.getSchema().forEach((function (o) {
                    void 0 === t[o.name] && e.applyDefaultValue(e.originalData[e.originalData.length - 1], o)
                })), e.setFilter(), e.resize(!0)
            }, e.setRowHeight = function (t, o) {
                e.sizes.rows[t] = o, e.draw(!0)
            }, e.setColumnWidth = function (t, o) {
                e.sizes.columns[t] = o, e.draw(!0)
            }, e.resetColumnWidths = function () {
                e.sizes.columns = {}, e.draw(!0)
            }, e.resetRowHeights = function () {
                e.sizes.rows = {}, e.draw(!0)
            }, e.setFilter = function (t, o) {
                void 0 === t && void 0 === o ? e.columnFilters = {} : !t || "" !== o && void 0 !== o ? e.columnFilters[t] = o : delete e.columnFilters[t], e.applyDataTransforms()
            }, e.findRowScrollTop = function (t) {
                if (void 0 === e.scrollCache.y[t]) throw new RangeError("Row index out of range.");
                return e.scrollCache.y[t]
            }, e.findColumnScrollLeft = function (t) {
                var o = Math.max(t - 1, 0);
                if (void 0 === e.scrollCache.x[o]) throw new Error("Column index out of range.");
                return e.scrollCache.x[o] - e.getColummnWidth(e.orders.columns[t])
            }, e.gotoCell = function (t, o, r, n) {
                var l, i = void 0 === t ? void 0 : e.findColumnScrollLeft(t),
                    a = void 0 === o ? void 0 : e.findRowScrollTop(o),
                    s = e.scrollBox.width - (e.scrollBox.verticalBarVisible ? e.style.scrollBarWidth : 0),
                    c = e.scrollBox.height - (e.scrollBox.horizontalBarVisible ? e.style.scrollBarWidth : 0);
                i -= s * (r = void 0 === r ? 0 : r), a -= c * (n = void 0 === n ? 0 : n), void 0 !== t && void 0 !== o ? (e.scrollBox.scrollTo(i, a), requestAnimationFrame((function () {
                    (l = e.getVisibleCellByIndex(t, o)) && (i += l.width * r, a += l.height * n, e.scrollBox.scrollTo(i, a))
                }))) : void 0 !== t ? e.scrollBox.scrollLeft = i : void 0 !== o && (e.scrollBox.scrollTop = a)
            }, e.gotoRow = function (t) {
                e.gotoCell(0, t)
            }, e.scrollIntoView = function (t, o, r, n) {
                0 === e.visibleCells.filter((function (r) {
                    return (r.rowIndex === o || void 0 === o) && (r.columnIndex === t || void 0 === t) && r.x > 0 && r.y > 0 && r.x + r.width < e.width && r.y + r.height < e.height
                })).length && e.gotoCell(t, o, r, n)
            }, e.setActiveCell = function (t, o) {
                t < 0 && (t = 0), o < 0 && (o = 0), e.activeCell = {rowIndex: o, columnIndex: t}
            }, e.selectNone = function (t) {
                e.selections = [], e.dispatchEvent("selectionchanged", {
                    selectedData: e.getSelectedData(),
                    selections: e.selections,
                    selectionBounds: e.selectionBounds
                }), t || e.draw()
            }, e.selectAll = function (t) {
                e.selectArea({
                    top: 0,
                    left: -1,
                    right: e.getSchema().length - 1,
                    bottom: e.data.length - 1
                }), t || e.draw()
            }, e.isColumnSelected = function (t) {
                var o = !0;
                return e.data.forEach((function (r, n) {
                    e.selections[n] && -1 !== e.selections[n].indexOf(e.orders.columns[t]) || (o = !1)
                })), o
            }, e.forEachSelectedCell = function (t, o) {
                var r = [], n = o ? e.getSchema() : e.getVisibleSchema(), l = e.data.length;
                e.selections.forEach((function (o, i) {
                    i !== l && (0 !== o.length ? (r[i] = {}, o.forEach((function (o) {
                        -1 !== o && n[o] && t(e.data, i, n[o].name)
                    }))) : r[i] = null)
                }))
            }, e.selectColumn = function (t, o, r, n) {
                var l, i, a, s;

                function c(t) {
                    e.data.forEach((function (o, r) {
                        e.selections[r] = e.selections[r] || [], -1 === e.selections[r].indexOf(t) && e.selections[r].push(t)
                    }))
                }

                if (r) {
                    if (!e.activeCell) return;
                    for (l = Math.min(e.activeCell.columnIndex, t), i = Math.max(e.activeCell.columnIndex, t), a = l; i > a; a += 1) c(a)
                }
                o || r || (e.selections = [], e.activeCell.columnIndex = t, e.activeCell.rowIndex = e.scrollIndexTop), o && e.isColumnSelected(t) ? (s = t, e.data.forEach((function (t, o) {
                    e.selections[o] = e.selections[o] || [], -1 !== e.selections[o].indexOf(s) && e.selections[o].splice(e.selections[o].indexOf(s), 1)
                }))) : c(t), n || e.dispatchEvent("selectionchanged", {
                    selectedData: e.getSelectedData(),
                    selections: e.selections,
                    selectionBounds: e.getSelectionBounds()
                })
            }, e.selectRow = function (t, o, r, n) {
                var l, i, a, s = e.getVisibleSchema();

                function c() {
                    n || e.dispatchEvent("selectionchanged", {
                        selectedData: e.getSelectedData(),
                        selections: e.selections,
                        selectionBounds: e.selectionBounds
                    })
                }

                function d(t) {
                    e.selections[t] = [], e.selections[t].push(-1), s.forEach((function (o, r) {
                        e.selections[t].push(e.orders.columns.indexOf(o.index))
                    }))
                }

                if ((!1 === e.dragAddToSelection || void 0 === e.dragObject) && e.selections[t] && e.selections[t].length - 1 === s.length && o) return e.selections[t] = [], void c();
                if (!0 === e.dragAddToSelection || void 0 === e.dragObject) if (r && void 0 === e.dragObject) {
                    if (!e.activeCell) return;
                    for (i = Math.min(e.activeCell.rowIndex, t), a = Math.max(e.activeCell.rowIndex, t), l = i; a >= l; l += 1) d(l)
                } else d(t);
                c()
            }, e.collapseTree = function (t) {
                e.dispatchEvent("collapsetree", {
                    childGrid: e.childGrids[t],
                    data: e.data[t],
                    rowIndex: t
                }), e.openChildren[t].blur(), e.openChildren[t].dispose(), delete e.openChildren[t], delete e.sizes.trees[t], delete e.childGrids[t], e.dispatchEvent("resizerow", {cellHeight: e.style.cellHeight}), e.resize(!0), e.draw(!0)
            }, e.expandTree = function (t) {
                var o, r = e.args.treeGridAttributes || {}, n = e.getColumnHeaderCellHeight(),
                    l = e.sizes.columns.cornerCell || e.style.rowHeaderCellWidth,
                    i = e.sizes.trees[t] || e.style.treeGridHeight;
                e.childGrids[t] || (r.debug = e.attributes.debug, r.name = e.attributes.saveAppearance ? e.attributes.name + "tree" + t : void 0, r.style = r.style || e.style, r.parentNode = {
                    parentGrid: e.intf,
                    nodeType: "canvas-datagrid-tree",
                    offsetHeight: i,
                    offsetWidth: e.width - l,
                    header: {width: e.width - l},
                    offsetLeft: l,
                    offsetTop: n,
                    offsetParent: e.intf.parentNode,
                    parentNode: e.intf.parentNode,
                    style: "tree",
                    data: e.data[t]
                }, o = e.createGrid(r), e.childGrids[t] = o), (o = e.childGrids[t]).visible = !0, e.dispatchEvent("expandtree", {
                    treeGrid: o,
                    data: e.data[t],
                    rowIndex: t
                }), e.openChildren[t] = o, e.sizes.trees[t] = i, e.dispatchEvent("resizerow", {height: e.style.cellHeight}), e.resize(!0)
            }, e.toggleTree = function (t) {
                if (e.openChildren[t]) return e.collapseTree(t);
                e.expandTree(t)
            }, e.getHeaderByName = function (t) {
                var o, r = e.getSchema();
                for (o = 0; o < r.length; o += 1) if (r[o].name === t) return r[o]
            }, e.fitColumnToValues = function (t, o) {
                e.canvas && (e.sizes.columns["cornerCell" === t ? -1 : e.getHeaderByName(t).index] = Math.max(e.findColumnMaxTextLength(t), e.style.minColumnWidth), o || (e.resize(), e.draw(!0)))
            }, e.isCellVisible = function (t, o) {
                if (void 0 !== o) return e.visibleCells.filter((function (e) {
                    return e.columnIndex === t && e.rowIndex === o
                })).length > 0;
                var r, n = e.visibleCells.length;
                for (r = 0; r < n; r += 1) if (t.x === e.visibleCells[r].x && t.y === e.visibleCells[r].y) return !0;
                return !1
            }, e.order = function (t, o, r, n) {
                var l, i = e.getSchema().filter((function (e) {
                    return e.name === t
                }));
                if (!e.dispatchEvent("beforesortcolumn", {
                    name: t,
                    direction: o
                }) && (e.orderBy = t, e.orderDirection = o, e.data && 0 !== e.data.length)) {
                    if (0 === i.length) throw new Error("Cannot sort.  No such column name");
                    (l = r || i[0].sorter || e.sorters[i[0].type]) || void 0 === i[0].type || console.warn('Cannot sort type "%s" falling back to string sort.', i[0].type), e.orderings.add(t, o, "function" == typeof l ? l : e.sorters.string), e.orderings.sort(), e.dispatchEvent("sortcolumn", {
                        name: t,
                        direction: o
                    }), e.draw(!0), n || e.setStorageData()
                }
            }, e.isInGrid = function (t) {
                return !(t.x < 0 || t.x > e.width || t.y < 0 || t.y > e.height)
            }, e.moveSelection = function (t, o) {
                var r = [];
                e.selections.forEach((function (e, n) {
                    r[n + o] = [], e.forEach((function (e) {
                        r[n + o].push(e + t)
                    }))
                })), e.selections = r
            }, e.moveTo = function (t, o, r) {
                var n, l = e.getSelectedData(), i = e.getVisibleSchema(), a = t.length, s = -1 / 0, c = 1 / 0,
                    d = r - 1;
                t.forEach((function (t, r) {
                    r !== a && 0 !== t.length && (c = Math.min(e.getVisibleColumnIndexOf(o), c), s = Math.max(s, t.length), t.forEach((function (t) {
                        t = e.getVisibleColumnIndexOf(t), i[t] && (e.data[r] || (e.data[r] = {}), e.data[r][i[t].name] = null)
                    })))
                })), t.forEach((function (t, r) {
                    var a;
                    d += 1, n = e.getVisibleColumnIndexOf(o), t.forEach((function (t, o) {
                        t = e.getVisibleColumnIndexOf(t), o > 0 && (n += t - a), a = t, -1 === t || !i[n] || !i[t] || e.data.length - 1 < d || d < 0 || (e.data[d] || (e.data[d] = {}), e.data[d][i[n].name] = l[r][i[t].name])
                    }))
                }))
            }, e.isColumnVisible = function (t) {
                return e.visibleCells.filter((function (e) {
                    return e.columnIndex === t
                })).length > 0
            }, e.isRowVisible = function (t) {
                return e.visibleCells.filter((function (e) {
                    return e.rowIndex === t
                })).length > 0
            }, e.getVisibleCellByIndex = function (t, o) {
                return e.visibleCells.filter((function (e) {
                    return e.columnIndex === t && e.rowIndex === o
                }))[0]
            }, e.getCellAt = function (t, o, r) {
                function n(r) {
                    return r.x + r.width - .4 * e.attributes.borderResizeZone < t && r.x + r.width + .6 * e.attributes.borderResizeZone > t ? "r" : r.x - .4 * e.attributes.borderResizeZone < t && r.x + .6 * e.attributes.borderResizeZone > t ? "l" : r.y + r.height - .4 * e.attributes.borderResizeZone < o && r.y + r.height + .6 * e.attributes.borderResizeZone > o ? "b" : r.y - .4 * e.attributes.borderResizeZone < o && r.y + .6 * e.attributes.borderResizeZone > o ? "t" : void 0
                }

                if (e.visibleCells) {
                    var l, i, a, s, c, d = r ? e.attributes.touchScrollZone : 0,
                        u = "move" === e.attributes.borderDragBehavior, h = e.visibleCells.length,
                        f = u ? e.cursorGrab : "ew-resize", g = u ? e.cursorGrab : "ns-resize";
                    if (e.visibleCells && e.visibleCells.length) {
                        if (e.hasFocus = !0, !(o < e.height && o > 0 && t < e.width && t > 0)) return e.hasFocus = !1, {
                            dragContext: "inherit",
                            context: "inherit"
                        };
                        for (i = 0; i < h; i += 1) if (c = {
                            x: (s = e.visibleCells[i]).x,
                            y: s.y,
                            height: s.height,
                            width: s.width
                        }, r && /(vertical|horizontal)-scroll-/.test(s.style) && (c.x -= d, c.y -= d, c.height += d, c.width += d), c.x - e.style.cellBorderWidth < t && c.x + c.width + e.style.cellBorderWidth > t && c.y - e.style.cellBorderWidth < o && c.y + c.height + e.style.cellBorderWidth > o) {
                            if (/frozen-row-marker/.test(s.style)) return s.dragContext = s.style, s.context = "row-resize", s;
                            if (/frozen-column-marker/.test(s.style)) return s.dragContext = s.style, s.context = "col-resize", s;
                            if (/selection-handle-/.test(s.style)) return s.dragContext = s.style, s.context = "crosshair", s;
                            if (/vertical-scroll-(bar|box)/.test(s.style)) return s.dragContext = "vertical-scroll-box", s.context = "vertical-scroll-box", s.isScrollBar = !0, s.isVerticalScrollBar = !0, o > e.scrollBox.box.v.y + e.scrollBox.scrollBoxHeight ? (s.dragContext = "vertical-scroll-bottom", s.context = "vertical-scroll-bottom") : o < e.scrollBox.box.v.y && (s.dragContext = "vertical-scroll-top", s.context = "vertical-scroll-top"), e.cursor = "default", s;
                            if (/horizontal-scroll-(bar|box)/.test(s.style)) return s.dragContext = "horizontal-scroll-box", s.context = "horizontal-scroll-box", s.isScrollBar = !0, s.isHorizontalScrollBar = !0, t > e.scrollBox.box.h.x + e.scrollBox.scrollBoxWidth ? (s.dragContext = "horizontal-scroll-right", s.context = "horizontal-scroll-right") : t < e.scrollBox.box.h.x && (s.dragContext = "horizontal-scroll-left", s.context = "horizontal-scroll-left"), e.cursor = "default", s;
                            if (l = n(c), a = u && s.selectionBorder && -1 !== s.selectionBorder.indexOf(l), -1 !== ["l", "r"].indexOf(l) && (e.attributes.allowColumnResize || a) && (e.attributes.allowColumnResizeFromCell && s.isNormal || !s.isNormal || a) && (e.attributes.allowRowHeaderResize && (s.isRowHeader || s.isCorner) || !s.isRowHeader || !s.isCorner)) {
                                if ((s.isColumnHeader || s.isCorner || e.attributes.allowColumnResizeFromCell && s.isNormal) && "r" === l) return s.context = "ew-resize", s.dragContext = "ew-resize", s;
                                if (!s.isColumnHeader && !s.isCorner && a) return s.context = f, s.dragContext = l + "-move", s
                            }
                            if (-1 !== ["t", "b"].indexOf(l) && s.rowIndex > -1 && (e.attributes.allowRowResize || a) && (e.attributes.allowRowResizeFromCell && s.isNormal || !s.isNormal || a) && !s.isColumnHeader) {
                                if ((s.isRowHeader || s.isCorner || e.attributes.allowRowResizeFromCell && s.isNormal) && "b" === l) return s.context = "ns-resize", s.dragContext = "ns-resize", s;
                                if (!s.isRowHeader && !s.isCorner && a) return s.context = g, s.dragContext = l + "-move", s
                            }
                            return "columnHeaderCell" === s.style ? (s.context = "cell", s.dragContext = "column-reorder", s) : "rowHeaderCell" === s.style ? (e.attributes.rowGrabZoneSize + (s.y - e.style.cellBorderWidth) < o || !e.attributes.allowRowReordering ? (s.dragContext = "cell", s.context = "cell") : (s.context = e.cursorGrab, s.dragContext = "row-reorder"), s) : s.isGrid ? (e.hasFocus = !1, s.dragContext = "cell-grid", s.context = "cell-grid", s) : "tree-grid" === s.style ? (e.hasFocus = !1, s.dragContext = "tree", s.context = "tree", s) : (s.dragContext = "cell", s.context = "cell", s)
                        }
                        return e.hasFocus = !0, e.cursor = "default", {
                            dragContext: "background",
                            context: "background",
                            style: "background",
                            isBackground: !0
                        }
                    }
                }
            }, e.getSelectionBounds = function () {
                var t = {x: 1 / 0, y: 1 / 0}, o = {x: -1 / 0, y: -1 / 0};
                return e.selections.forEach((function (e, r) {
                    var n, l;
                    t.y = r < t.y ? r : t.y, o.y = r > o.y ? r : o.y, n = Math.max.apply(null, e), l = Math.min.apply(null, e), t.x = l < t.x ? l : t.x, o.x = n > o.x ? n : o.x
                })), {top: t.y, left: t.x, bottom: o.y, right: o.x}
            }, e.getSchemaFromData = function (t) {
                return t = t || e.data, Object.keys(t[0] || {" ": ""}).map((function (o, r) {
                    var n = e.getBestGuessDataType(o, t), l = {
                        name: o,
                        title: isNaN(parseInt(o, 10)) ? o : e.integerToAlpha(o).toUpperCase(),
                        index: r,
                        columnIndex: r,
                        type: n,
                        filter: e.filter(n)
                    };
                    return e.storedSettings && e.storedSettings.visibility && void 0 !== e.storedSettings.visibility[l.name] && (l.hidden = !e.storedSettings.visibility[l.name]), l
                }))
            }, e.clearChangeLog = function () {
                e.changes = []
            }, e.selectArea = function (t, o) {
                e.selectionBounds = t || e.selectionBounds;
                var r, n, l, i = e.getSchema();
                if (o || (e.selections = []), e.selectionBounds.top < -1 || e.selectionBounds.bottom > e.data.length || e.selectionBounds.left < -1 || e.selectionBounds.right > i.length) throw new Error("Impossible selection area");
                for (n = e.selectionBounds.top; n <= e.selectionBounds.bottom; n += 1) for (e.selections[n] = [], l = e.selectionBounds.left; l <= e.selectionBounds.right; l += 1) -1 === e.selections[n].indexOf(l) && e.selections[n].push(l);
                r = {
                    selections: e.selections,
                    selectionBounds: e.selectionBounds
                }, Object.defineProperty(r, "selectedData", {
                    get: function () {
                        return e.getSelectedData()
                    }
                }), e.dispatchEvent("selectionchanged", r)
            }, e.findColumnMaxTextLength = function (t) {
                var o = -1 / 0;
                if ("cornerCell" === t) return e.ctx.font = e.style.rowHeaderCellFont, e.ctx.measureText((e.data.length + (e.attributes.showNewRow ? 1 : 0)).toString()).width + e.style.autosizePadding + e.style.autosizeHeaderCellPadding + e.style.rowHeaderCellPaddingRight + e.style.rowHeaderCellPaddingLeft + (e.attributes.tree ? e.style.treeArrowWidth + e.style.treeArrowMarginLeft + e.style.treeArrowMarginRight : 0);
                var r = null;
                return e.getSchema().forEach((function (n) {
                    if (n.name === t) {
                        e.ctx.font = e.style.columnHeaderCellFont;
                        var l = e.ctx.measureText(n.title || n.name).width + e.style.headerCellPaddingRight + e.style.headerCellPaddingLeft;
                        o = l > o ? l : o, r = e.formatters[n.type]
                    }
                })), e.data.forEach((function (n) {
                    var l = n[t];
                    r && (l = r({cell: {value: l}})), e.ctx.font = e.style.cellFont;
                    var i = e.ctx.measureText(l).width + e.style.cellPaddingRight + e.style.cellPaddingLeft + e.style.cellAutoResizePadding;
                    o = i > o ? i : o
                })), o
            }, e.getHeaderWidth = function () {
                return e.getVisibleSchema().reduce((function (t, o) {
                    return t + (o.width || e.style.cellWidth)
                }), 0)
            }, e.getRowHeight = function (t) {
                return (e.sizes.rows[t] || e.style.cellHeight) * e.scale
            }, e.getColummnWidth = function (t) {
                return (e.sizes.columns[t] || e.getSchema()[t].width || e.style.cellWidth) * e.scale
            }, e.formatters.string = function (e) {
                return void 0 !== e.cell.value ? e.cell.value : ""
            }, e.formatters.rowHeaderCell = e.formatters.string, e.formatters.headerCell = e.formatters.string, e.formatters.number = e.formatters.string, e.formatters.int = e.formatters.string, e.formatters.html = e.formatters.string, e.sorters.string = function (e, t) {
                var o = "asc" === t;
                return function (t, r) {
                    return void 0 === t[e] || null === t[e] ? 1 : void 0 === r[e] || null === r[e] ? 0 : o ? t[e].localeCompare ? t[e].localeCompare(r[e]) : 1 : r[e].localeCompare ? r[e].localeCompare(t[e]) : 1
                }
            }, e.sorters.number = function (e, t) {
                var o = "asc" === t;
                return function (t, r) {
                    return o ? t[e] - r[e] : r[e] - t[e]
                }
            }, e.sorters.date = function (e, t) {
                var o = "asc" === t;
                return function (t, r) {
                    return o ? new Date(t[e]).getTime() - new Date(r[e]).getTime() : new Date(r[e]).getTime() - new Date(t[e]).getTime()
                }
            }
        }
    }.apply(t, [])) || (e.exports = r)
}]);