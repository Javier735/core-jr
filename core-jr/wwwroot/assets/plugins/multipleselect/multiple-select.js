/**
 * multiple-select - Multiple select is a jQuery plugin to select multiple elements with checkboxes :).
 *
 * @version v1.5.2
 * @homepage http://multiple-select.wenzhixin.net.cn
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */
 ! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e((t = t || self).jQuery)
}(this, (function(t) {
	"use strict";

	function e(t) {
		return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function i(t, e) {
		for (var n = 0; n < e.length; n++) {
			var i = e[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function r(t, e, n) {
		return e && i(t.prototype, e), n && i(t, n), t
	}

	function u(t, e) {
		return function(t) {
			if (Array.isArray(t)) return t
		}(t) || function(t, e) {
			if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
			var n = [],
				i = !0,
				r = !1,
				u = void 0;
			try {
				for (var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0);
			} catch (t) {
				r = !0, u = t
			} finally {
				try {
					i || null == s.return || s.return()
				} finally {
					if (r) throw u
				}
			}
			return n
		}(t, e) || function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}

	function o(t) {
		return function(t) {
			if (Array.isArray(t)) {
				for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
				return n
			}
		}(t) || function(t) {
			if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
		}(t) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}
	t = t && t.hasOwnProperty("default") ? t.default : t;
	var s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function l(t, e) {
		return t(e = {
			exports: {}
		}, e.exports), e.exports
	}
	var a, c, h, f = "object",
		p = function(t) {
			return t && t.Math == Math && t
		},
		d = p(typeof globalThis == f && globalThis) || p(typeof window == f && window) || p(typeof self == f && self) || p(typeof s == f && s) || Function("return this")(),
		v = function(t) {
			try {
				return !!t()
			} catch (t) {
				return !0
			}
		},
		g = !v((function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})),
		y = {}.propertyIsEnumerable,
		E = Object.getOwnPropertyDescriptor,
		b = {
			f: E && !y.call({
				1: 2
			}, 1) ? function(t) {
				var e = E(this, t);
				return !!e && e.enumerable
			} : y
		},
		m = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		},
		A = {}.toString,
		F = function(t) {
			return A.call(t).slice(8, -1)
		},
		S = "".split,
		C = v((function() {
			return !Object("z").propertyIsEnumerable(0)
		})) ? function(t) {
			return "String" == F(t) ? S.call(t, "") : Object(t)
		} : Object,
		k = function(t) {
			if (null == t) throw TypeError("Can't call method on " + t);
			return t
		},
		D = function(t) {
			return C(k(t))
		},
		O = function(t) {
			return "object" == typeof t ? null !== t : "function" == typeof t
		},
		w = function(t, e) {
			if (!O(t)) return t;
			var n, i;
			if (e && "function" == typeof(n = t.toString) && !O(i = n.call(t))) return i;
			if ("function" == typeof(n = t.valueOf) && !O(i = n.call(t))) return i;
			if (!e && "function" == typeof(n = t.toString) && !O(i = n.call(t))) return i;
			throw TypeError("Can't convert object to primitive value")
		},
		x = {}.hasOwnProperty,
		$ = function(t, e) {
			return x.call(t, e)
		},
		B = d.document,
		j = O(B) && O(B.createElement),
		T = function(t) {
			return j ? B.createElement(t) : {}
		},
		L = !g && !v((function() {
			return 7 != Object.defineProperty(T("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})),
		_ = Object.getOwnPropertyDescriptor,
		I = {
			f: g ? _ : function(t, e) {
				if (t = D(t), e = w(e, !0), L) try {
					return _(t, e)
				} catch (t) {}
				if ($(t, e)) return m(!b.f.call(t, e), t[e])
			}
		},
		R = function(t) {
			if (!O(t)) throw TypeError(String(t) + " is not an object");
			return t
		},
		M = Object.defineProperty,
		P = {
			f: g ? M : function(t, e, n) {
				if (R(t), e = w(e, !0), R(n), L) try {
					return M(t, e, n)
				} catch (t) {}
				if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
				return "value" in n && (t[e] = n.value), t
			}
		},
		N = g ? function(t, e, n) {
			return P.f(t, e, m(1, n))
		} : function(t, e, n) {
			return t[e] = n, t
		},
		H = function(t, e) {
			try {
				N(d, t, e)
			} catch (n) {
				d[t] = e
			}
			return e
		},
		G = l((function(t) {
			var e = d["__core-js_shared__"] || H("__core-js_shared__", {});
			(t.exports = function(t, n) {
				return e[t] || (e[t] = void 0 !== n ? n : {})
			})("versions", []).push({
				version: "3.2.1",
				mode: "global",
				copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
			})
		})),
		U = G("native-function-to-string", Function.toString),
		W = d.WeakMap,
		V = "function" == typeof W && /native code/.test(U.call(W)),
		K = 0,
		z = Math.random(),
		q = function(t) {
			return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++K + z).toString(36)
		},
		Y = G("keys"),
		J = function(t) {
			return Y[t] || (Y[t] = q(t))
		},
		Q = {},
		Z = d.WeakMap;
	if (V) {
		var X = new Z,
			tt = X.get,
			et = X.has,
			nt = X.set;
		a = function(t, e) {
			return nt.call(X, t, e), e
		}, c = function(t) {
			return tt.call(X, t) || {}
		}, h = function(t) {
			return et.call(X, t)
		}
	} else {
		var it = J("state");
		Q[it] = !0, a = function(t, e) {
			return N(t, it, e), e
		}, c = function(t) {
			return $(t, it) ? t[it] : {}
		}, h = function(t) {
			return $(t, it)
		}
	}
	var rt = {
			set: a,
			get: c,
			has: h,
			enforce: function(t) {
				return h(t) ? c(t) : a(t, {})
			},
			getterFor: function(t) {
				return function(e) {
					var n;
					if (!O(e) || (n = c(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
					return n
				}
			}
		},
		ut = l((function(t) {
			var e = rt.get,
				n = rt.enforce,
				i = String(U).split("toString");
			G("inspectSource", (function(t) {
				return U.call(t)
			})), (t.exports = function(t, e, r, u) {
				var o = !!u && !!u.unsafe,
					s = !!u && !!u.enumerable,
					l = !!u && !!u.noTargetGet;
				"function" == typeof r && ("string" != typeof e || $(r, "name") || N(r, "name", e), n(r).source = i.join("string" == typeof e ? e : "")), t !== d ? (o ? !l && t[e] && (s = !0) : delete t[e], s ? t[e] = r : N(t, e, r)) : s ? t[e] = r : H(e, r)
			})(Function.prototype, "toString", (function() {
				return "function" == typeof this && e(this).source || U.call(this)
			}))
		})),
		ot = d,
		st = function(t) {
			return "function" == typeof t ? t : void 0
		},
		lt = function(t, e) {
			return arguments.length < 2 ? st(ot[t]) || st(d[t]) : ot[t] && ot[t][e] || d[t] && d[t][e]
		},
		at = Math.ceil,
		ct = Math.floor,
		ht = function(t) {
			return isNaN(t = +t) ? 0 : (t > 0 ? ct : at)(t)
		},
		ft = Math.min,
		pt = function(t) {
			return t > 0 ? ft(ht(t), 9007199254740991) : 0
		},
		dt = Math.max,
		vt = Math.min,
		gt = function(t, e) {
			var n = ht(t);
			return n < 0 ? dt(n + e, 0) : vt(n, e)
		},
		yt = function(t) {
			return function(e, n, i) {
				var r, u = D(e),
					o = pt(u.length),
					s = gt(i, o);
				if (t && n != n) {
					for (; o > s;)
						if ((r = u[s++]) != r) return !0
				} else
					for (; o > s; s++)
						if ((t || s in u) && u[s] === n) return t || s || 0;
				return !t && -1
			}
		},
		Et = {
			includes: yt(!0),
			indexOf: yt(!1)
		},
		bt = Et.indexOf,
		mt = function(t, e) {
			var n, i = D(t),
				r = 0,
				u = [];
			for (n in i) !$(Q, n) && $(i, n) && u.push(n);
			for (; e.length > r;) $(i, n = e[r++]) && (~bt(u, n) || u.push(n));
			return u
		},
		At = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
		Ft = At.concat("length", "prototype"),
		St = {
			f: Object.getOwnPropertyNames || function(t) {
				return mt(t, Ft)
			}
		},
		Ct = {
			f: Object.getOwnPropertySymbols
		},
		kt = lt("Reflect", "ownKeys") || function(t) {
			var e = St.f(R(t)),
				n = Ct.f;
			return n ? e.concat(n(t)) : e
		},
		Dt = function(t, e) {
			for (var n = kt(e), i = P.f, r = I.f, u = 0; u < n.length; u++) {
				var o = n[u];
				$(t, o) || i(t, o, r(e, o))
			}
		},
		Ot = /#|\.prototype\./,
		wt = function(t, e) {
			var n = $t[xt(t)];
			return n == jt || n != Bt && ("function" == typeof e ? v(e) : !!e)
		},
		xt = wt.normalize = function(t) {
			return String(t).replace(Ot, ".").toLowerCase()
		},
		$t = wt.data = {},
		Bt = wt.NATIVE = "N",
		jt = wt.POLYFILL = "P",
		Tt = wt,
		Lt = I.f,
		_t = function(t, e) {
			var n, i, r, u, o, s = t.target,
				l = t.global,
				a = t.stat;
			if (n = l ? d : a ? d[s] || H(s, {}) : (d[s] || {}).prototype)
				for (i in e) {
					if (u = e[i], r = t.noTargetGet ? (o = Lt(n, i)) && o.value : n[i], !Tt(l ? i : s + (a ? "." : "#") + i, t.forced) && void 0 !== r) {
						if (typeof u == typeof r) continue;
						Dt(u, r)
					}(t.sham || r && r.sham) && N(u, "sham", !0), ut(n, i, u, t)
				}
		},
		It = !!Object.getOwnPropertySymbols && !v((function() {
			return !String(Symbol())
		})),
		Rt = d.Symbol,
		Mt = G("wks"),
		Pt = function(t) {
			return Mt[t] || (Mt[t] = It && Rt[t] || (It ? Rt : q)("Symbol." + t))
		},
		Nt = Object.keys || function(t) {
			return mt(t, At)
		},
		Ht = g ? Object.defineProperties : function(t, e) {
			R(t);
			for (var n, i = Nt(e), r = i.length, u = 0; r > u;) P.f(t, n = i[u++], e[n]);
			return t
		},
		Gt = lt("document", "documentElement"),
		Ut = J("IE_PROTO"),
		Wt = function() {},
		Vt = function() {
			var t, e = T("iframe"),
				n = At.length;
			for (e.style.display = "none", Gt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Vt = t.F; n--;) delete Vt.prototype[At[n]];
			return Vt()
		},
		Kt = Object.create || function(t, e) {
			var n;
			return null !== t ? (Wt.prototype = R(t), n = new Wt, Wt.prototype = null, n[Ut] = t) : n = Vt(), void 0 === e ? n : Ht(n, e)
		};
	Q[Ut] = !0;
	var zt = Pt("unscopables"),
		qt = Array.prototype;
	null == qt[zt] && N(qt, zt, Kt(null));
	var Yt = function(t) {
			qt[zt][t] = !0
		},
		Jt = Et.includes;
	_t({
		target: "Array",
		proto: !0
	}, {
		includes: function(t) {
			return Jt(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), Yt("includes");
	var Qt = function(t) {
			return Object(k(t))
		},
		Zt = Object.assign,
		Xt = !Zt || v((function() {
			var t = {},
				e = {},
				n = Symbol();
			return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
				e[t] = t
			})), 7 != Zt({}, t)[n] || "abcdefghijklmnopqrst" != Nt(Zt({}, e)).join("")
		})) ? function(t, e) {
			for (var n = Qt(t), i = arguments.length, r = 1, u = Ct.f, o = b.f; i > r;)
				for (var s, l = C(arguments[r++]), a = u ? Nt(l).concat(u(l)) : Nt(l), c = a.length, h = 0; c > h;) s = a[h++], g && !o.call(l, s) || (n[s] = l[s]);
			return n
		} : Zt;
	_t({
		target: "Object",
		stat: !0,
		forced: Object.assign !== Xt
	}, {
		assign: Xt
	});
	var te = Pt("match"),
		ee = function(t) {
			var e;
			return O(t) && (void 0 !== (e = t[te]) ? !!e : "RegExp" == F(t))
		},
		ne = function(t) {
			if (ee(t)) throw TypeError("The method doesn't accept regular expressions");
			return t
		},
		ie = Pt("match");
	_t({
		target: "String",
		proto: !0,
		forced: ! function(t) {
			var e = /./;
			try {
				"/./" [t](e)
			} catch (n) {
				try {
					return e[ie] = !1, "/./" [t](e)
				} catch (t) {}
			}
			return !1
		}("includes")
	}, {
		includes: function(t) {
			return !!~String(k(this)).indexOf(ne(t), arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var re = "\t\n\v\f\r                　\u2028\u2029\ufeff",
		ue = "[" + re + "]",
		oe = RegExp("^" + ue + ue + "*"),
		se = RegExp(ue + ue + "*$"),
		le = function(t) {
			return function(e) {
				var n = String(k(e));
				return 1 & t && (n = n.replace(oe, "")), 2 & t && (n = n.replace(se, "")), n
			}
		},
		ae = {
			start: le(1),
			end: le(2),
			trim: le(3)
		},
		ce = ae.trim;
	_t({
		target: "String",
		proto: !0,
		forced: function(t) {
			return v((function() {
				return !!re[t]() || "​᠎" != "​᠎" [t]() || re[t].name !== t
			}))
		}("trim")
	}, {
		trim: function() {
			return ce(this)
		}
	});
	var he = {
			name: "",
			placeholder: "",
			data: void 0,
			locale: void 0,
			selectAll: !0,
			single: void 0,
			singleRadio: !1,
			multiple: !1,
			hideOptgroupCheckboxes: !1,
			multipleWidth: 80,
			width: void 0,
			dropWidth: void 0,
			maxHeight: 250,
			maxHeightUnit: "px",
			position: "bottom",
			displayValues: !1,
			displayTitle: !1,
			displayDelimiter: ", ",
			minimumCountSelected: 3,
			ellipsis: !1,
			isOpen: !1,
			keepOpen: !1,
			openOnHover: !1,
			container: null,
			filter: !1,
			filterGroup: !1,
			filterPlaceholder: "",
			filterAcceptOnEnter: !1,
			filterByDataLength: void 0,
			customFilter: function(t, e) {
				return t.includes(e)
			},
			showClear: !1,
			animate: void 0,
			styler: function() {
				return !1
			},
			textTemplate: function(t) {
				return t[0].innerHTML.trim()
			},
			labelTemplate: function(t) {
				return t[0].getAttribute("label")
			},
			onOpen: function() {
				return !1
			},
			onClose: function() {
				return !1
			},
			onCheckAll: function() {
				return !1
			},
			onUncheckAll: function() {
				return !1
			},
			onFocus: function() {
				return !1
			},
			onBlur: function() {
				return !1
			},
			onOptgroupClick: function() {
				return !1
			},
			onClick: function() {
				return !1
			},
			onFilter: function() {
				return !1
			},
			onClear: function() {
				return !1
			},
			onAfterCreate: function() {
				return !1
			}
		},
		fe = {
			formatSelectAll: function() {
				return "[Select all]"
			},
			formatAllSelected: function() {
				return "All selected"
			},
			formatCountSelected: function(t, e) {
				return t + " of " + e + " selected"
			},
			formatNoMatchesFound: function() {
				return "No matches found"
			}
		};
	Object.assign(he, fe);
	var pe = {
			VERSION: "1.5.2",
			BLOCK_ROWS: 50,
			CLUSTER_BLOCKS: 4,
			DEFAULTS: he,
			METHODS: ["getOptions", "refreshOptions", "getSelects", "setSelects", "enable", "disable", "open", "close", "check", "uncheck", "checkAll", "uncheckAll", "checkInvert", "focus", "blur", "refresh", "destroy"],
			LOCALES: {
				en: fe,
				"en-US": fe
			}
		},
		de = Array.isArray || function(t) {
			return "Array" == F(t)
		},
		ve = St.f,
		ge = {}.toString,
		ye = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
		Ee = {
			f: function(t) {
				return ye && "[object Window]" == ge.call(t) ? function(t) {
					try {
						return ve(t)
					} catch (t) {
						return ye.slice()
					}
				}(t) : ve(D(t))
			}
		},
		be = {
			f: Pt
		},
		me = P.f,
		Ae = function(t) {
			var e = ot.Symbol || (ot.Symbol = {});
			$(e, t) || me(e, t, {
				value: be.f(t)
			})
		},
		Fe = P.f,
		Se = Pt("toStringTag"),
		Ce = function(t, e, n) {
			t && !$(t = n ? t : t.prototype, Se) && Fe(t, Se, {
				configurable: !0,
				value: e
			})
		},
		ke = function(t) {
			if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
			return t
		},
		De = Pt("species"),
		Oe = function(t, e) {
			var n;
			return de(t) && ("function" != typeof(n = t.constructor) || n !== Array && !de(n.prototype) ? O(n) && null === (n = n[De]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
		},
		we = [].push,
		xe = function(t) {
			var e = 1 == t,
				n = 2 == t,
				i = 3 == t,
				r = 4 == t,
				u = 6 == t,
				o = 5 == t || u;
			return function(s, l, a, c) {
				for (var h, f, p = Qt(s), d = C(p), v = function(t, e, n) {
						if (ke(t), void 0 === e) return t;
						switch (n) {
							case 0:
								return function() {
									return t.call(e)
								};
							case 1:
								return function(n) {
									return t.call(e, n)
								};
							case 2:
								return function(n, i) {
									return t.call(e, n, i)
								};
							case 3:
								return function(n, i, r) {
									return t.call(e, n, i, r)
								}
						}
						return function() {
							return t.apply(e, arguments)
						}
					}(l, a, 3), g = pt(d.length), y = 0, E = c || Oe, b = e ? E(s, g) : n ? E(s, 0) : void 0; g > y; y++)
					if ((o || y in d) && (f = v(h = d[y], y, p), t))
						if (e) b[y] = f;
						else if (f) switch (t) {
					case 3:
						return !0;
					case 5:
						return h;
					case 6:
						return y;
					case 2:
						we.call(b, h)
				} else if (r) return !1;
				return u ? -1 : i || r ? r : b
			}
		},
		$e = {
			forEach: xe(0),
			map: xe(1),
			filter: xe(2),
			some: xe(3),
			every: xe(4),
			find: xe(5),
			findIndex: xe(6)
		},
		Be = $e.forEach,
		je = J("hidden"),
		Te = Pt("toPrimitive"),
		Le = rt.set,
		_e = rt.getterFor("Symbol"),
		Ie = Object.prototype,
		Re = d.Symbol,
		Me = d.JSON,
		Pe = Me && Me.stringify,
		Ne = I.f,
		He = P.f,
		Ge = Ee.f,
		Ue = b.f,
		We = G("symbols"),
		Ve = G("op-symbols"),
		Ke = G("string-to-symbol-registry"),
		ze = G("symbol-to-string-registry"),
		qe = G("wks"),
		Ye = d.QObject,
		Je = !Ye || !Ye.prototype || !Ye.prototype.findChild,
		Qe = g && v((function() {
			return 7 != Kt(He({}, "a", {
				get: function() {
					return He(this, "a", {
						value: 7
					}).a
				}
			})).a
		})) ? function(t, e, n) {
			var i = Ne(Ie, e);
			i && delete Ie[e], He(t, e, n), i && t !== Ie && He(Ie, e, i)
		} : He,
		Ze = function(t, e) {
			var n = We[t] = Kt(Re.prototype);
			return Le(n, {
				type: "Symbol",
				tag: t,
				description: e
			}), g || (n.description = e), n
		},
		Xe = It && "symbol" == typeof Re.iterator ? function(t) {
			return "symbol" == typeof t
		} : function(t) {
			return Object(t) instanceof Re
		},
		tn = function(t, e, n) {
			t === Ie && tn(Ve, e, n), R(t);
			var i = w(e, !0);
			return R(n), $(We, i) ? (n.enumerable ? ($(t, je) && t[je][i] && (t[je][i] = !1), n = Kt(n, {
				enumerable: m(0, !1)
			})) : ($(t, je) || He(t, je, m(1, {})), t[je][i] = !0), Qe(t, i, n)) : He(t, i, n)
		},
		en = function(t, e) {
			R(t);
			var n = D(e),
				i = Nt(n).concat(on(n));
			return Be(i, (function(e) {
				g && !nn.call(n, e) || tn(t, e, n[e])
			})), t
		},
		nn = function(t) {
			var e = w(t, !0),
				n = Ue.call(this, e);
			return !(this === Ie && $(We, e) && !$(Ve, e)) && (!(n || !$(this, e) || !$(We, e) || $(this, je) && this[je][e]) || n)
		},
		rn = function(t, e) {
			var n = D(t),
				i = w(e, !0);
			if (n !== Ie || !$(We, i) || $(Ve, i)) {
				var r = Ne(n, i);
				return !r || !$(We, i) || $(n, je) && n[je][i] || (r.enumerable = !0), r
			}
		},
		un = function(t) {
			var e = Ge(D(t)),
				n = [];
			return Be(e, (function(t) {
				$(We, t) || $(Q, t) || n.push(t)
			})), n
		},
		on = function(t) {
			var e = t === Ie,
				n = Ge(e ? Ve : D(t)),
				i = [];
			return Be(n, (function(t) {
				!$(We, t) || e && !$(Ie, t) || i.push(We[t])
			})), i
		};
	It || (ut((Re = function() {
		if (this instanceof Re) throw TypeError("Symbol is not a constructor");
		var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
			e = q(t),
			n = function(t) {
				this === Ie && n.call(Ve, t), $(this, je) && $(this[je], e) && (this[je][e] = !1), Qe(this, e, m(1, t))
			};
		return g && Je && Qe(Ie, e, {
			configurable: !0,
			set: n
		}), Ze(e, t)
	}).prototype, "toString", (function() {
		return _e(this).tag
	})), b.f = nn, P.f = tn, I.f = rn, St.f = Ee.f = un, Ct.f = on, g && (He(Re.prototype, "description", {
		configurable: !0,
		get: function() {
			return _e(this).description
		}
	}), ut(Ie, "propertyIsEnumerable", nn, {
		unsafe: !0
	})), be.f = function(t) {
		return Ze(Pt(t), t)
	}), _t({
		global: !0,
		wrap: !0,
		forced: !It,
		sham: !It
	}, {
		Symbol: Re
	}), Be(Nt(qe), (function(t) {
		Ae(t)
	})), _t({
		target: "Symbol",
		stat: !0,
		forced: !It
	}, {
		for: function(t) {
			var e = String(t);
			if ($(Ke, e)) return Ke[e];
			var n = Re(e);
			return Ke[e] = n, ze[n] = e, n
		},
		keyFor: function(t) {
			if (!Xe(t)) throw TypeError(t + " is not a symbol");
			if ($(ze, t)) return ze[t]
		},
		useSetter: function() {
			Je = !0
		},
		useSimple: function() {
			Je = !1
		}
	}), _t({
		target: "Object",
		stat: !0,
		forced: !It,
		sham: !g
	}, {
		create: function(t, e) {
			return void 0 === e ? Kt(t) : en(Kt(t), e)
		},
		defineProperty: tn,
		defineProperties: en,
		getOwnPropertyDescriptor: rn
	}), _t({
		target: "Object",
		stat: !0,
		forced: !It
	}, {
		getOwnPropertyNames: un,
		getOwnPropertySymbols: on
	}), _t({
		target: "Object",
		stat: !0,
		forced: v((function() {
			Ct.f(1)
		}))
	}, {
		getOwnPropertySymbols: function(t) {
			return Ct.f(Qt(t))
		}
	}), Me && _t({
		target: "JSON",
		stat: !0,
		forced: !It || v((function() {
			var t = Re();
			return "[null]" != Pe([t]) || "{}" != Pe({
				a: t
			}) || "{}" != Pe(Object(t))
		}))
	}, {
		stringify: function(t) {
			for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
			if (n = e = i[1], (O(e) || void 0 !== t) && !Xe(t)) return de(e) || (e = function(t, e) {
				if ("function" == typeof n && (e = n.call(this, t, e)), !Xe(e)) return e
			}), i[1] = e, Pe.apply(Me, i)
		}
	}), Re.prototype[Te] || N(Re.prototype, Te, Re.prototype.valueOf), Ce(Re, "Symbol"), Q[je] = !0;
	var sn = P.f,
		ln = d.Symbol;
	if (g && "function" == typeof ln && (!("description" in ln.prototype) || void 0 !== ln().description)) {
		var an = {},
			cn = function() {
				var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
					e = this instanceof cn ? new ln(t) : void 0 === t ? ln() : ln(t);
				return "" === t && (an[e] = !0), e
			};
		Dt(cn, ln);
		var hn = cn.prototype = ln.prototype;
		hn.constructor = cn;
		var fn = hn.toString,
			pn = "Symbol(test)" == String(ln("test")),
			dn = /^Symbol\((.*)\)[^)]+$/;
		sn(hn, "description", {
			configurable: !0,
			get: function() {
				var t = O(this) ? this.valueOf() : this,
					e = fn.call(t);
				if ($(an, t)) return "";
				var n = pn ? e.slice(7, -1) : e.replace(dn, "$1");
				return "" === n ? void 0 : n
			}
		}), _t({
			global: !0,
			forced: !0
		}, {
			Symbol: cn
		})
	}
	Ae("iterator");
	var vn = function(t, e, n) {
			var i = w(e);
			i in t ? P.f(t, i, m(0, n)) : t[i] = n
		},
		gn = Pt("species"),
		yn = function(t) {
			return !v((function() {
				var e = [];
				return (e.constructor = {})[gn] = function() {
					return {
						foo: 1
					}
				}, 1 !== e[t](Boolean).foo
			}))
		},
		En = Pt("isConcatSpreadable"),
		bn = !v((function() {
			var t = [];
			return t[En] = !1, t.concat()[0] !== t
		})),
		mn = yn("concat"),
		An = function(t) {
			if (!O(t)) return !1;
			var e = t[En];
			return void 0 !== e ? !!e : de(t)
		};
	_t({
		target: "Array",
		proto: !0,
		forced: !bn || !mn
	}, {
		concat: function(t) {
			var e, n, i, r, u, o = Qt(this),
				s = Oe(o, 0),
				l = 0;
			for (e = -1, i = arguments.length; e < i; e++)
				if (u = -1 === e ? o : arguments[e], An(u)) {
					if (l + (r = pt(u.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
					for (n = 0; n < r; n++, l++) n in u && vn(s, l, u[n])
				} else {
					if (l >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
					vn(s, l++, u)
				}
			return s.length = l, s
		}
	});
	var Fn = $e.filter;
	_t({
		target: "Array",
		proto: !0,
		forced: !yn("filter")
	}, {
		filter: function(t) {
			return Fn(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Sn = $e.find,
		Cn = !0;
	"find" in [] && Array(1).find((function() {
		Cn = !1
	})), _t({
		target: "Array",
		proto: !0,
		forced: Cn
	}, {
		find: function(t) {
			return Sn(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), Yt("find");
	var kn, Dn, On, wn = !v((function() {
			function t() {}
			return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
		})),
		xn = J("IE_PROTO"),
		$n = Object.prototype,
		Bn = wn ? Object.getPrototypeOf : function(t) {
			return t = Qt(t), $(t, xn) ? t[xn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? $n : null
		},
		jn = Pt("iterator"),
		Tn = !1;
	[].keys && ("next" in (On = [].keys()) ? (Dn = Bn(Bn(On))) !== Object.prototype && (kn = Dn) : Tn = !0), null == kn && (kn = {}), $(kn, jn) || N(kn, jn, (function() {
		return this
	}));
	var Ln = {
			IteratorPrototype: kn,
			BUGGY_SAFARI_ITERATORS: Tn
		},
		_n = Ln.IteratorPrototype,
		In = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var t, e = !1,
				n = {};
			try {
				(t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
			} catch (t) {}
			return function(n, i) {
				return R(n),
					function(t) {
						if (!O(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
					}(i), e ? t.call(n, i) : n.__proto__ = i, n
			}
		}() : void 0),
		Rn = Ln.IteratorPrototype,
		Mn = Ln.BUGGY_SAFARI_ITERATORS,
		Pn = Pt("iterator"),
		Nn = function() {
			return this
		},
		Hn = function(t, e, n, i, r, u, o) {
			! function(t, e, n) {
				var i = e + " Iterator";
				t.prototype = Kt(_n, {
					next: m(1, n)
				}), Ce(t, i, !1)
			}(n, e, i);
			var s, l, a, c = function(t) {
					if (t === r && v) return v;
					if (!Mn && t in p) return p[t];
					switch (t) {
						case "keys":
						case "values":
						case "entries":
							return function() {
								return new n(this, t)
							}
					}
					return function() {
						return new n(this)
					}
				},
				h = e + " Iterator",
				f = !1,
				p = t.prototype,
				d = p[Pn] || p["@@iterator"] || r && p[r],
				v = !Mn && d || c(r),
				g = "Array" == e && p.entries || d;
			if (g && (s = Bn(g.call(new t)), Rn !== Object.prototype && s.next && (Bn(s) !== Rn && (In ? In(s, Rn) : "function" != typeof s[Pn] && N(s, Pn, Nn)), Ce(s, h, !0))), "values" == r && d && "values" !== d.name && (f = !0, v = function() {
					return d.call(this)
				}), p[Pn] !== v && N(p, Pn, v), r)
				if (l = {
						values: c("values"),
						keys: u ? v : c("keys"),
						entries: c("entries")
					}, o)
					for (a in l) !Mn && !f && a in p || ut(p, a, l[a]);
				else _t({
					target: e,
					proto: !0,
					forced: Mn || f
				}, l);
			return l
		},
		Gn = rt.set,
		Un = rt.getterFor("Array Iterator"),
		Wn = Hn(Array, "Array", (function(t, e) {
			Gn(this, {
				type: "Array Iterator",
				target: D(t),
				index: 0,
				kind: e
			})
		}), (function() {
			var t = Un(this),
				e = t.target,
				n = t.kind,
				i = t.index++;
			return !e || i >= e.length ? (t.target = void 0, {
				value: void 0,
				done: !0
			}) : "keys" == n ? {
				value: i,
				done: !1
			} : "values" == n ? {
				value: e[i],
				done: !1
			} : {
				value: [i, e[i]],
				done: !1
			}
		}), "values");
	Yt("keys"), Yt("values"), Yt("entries");
	var Vn = function(t, e) {
			var n = [][t];
			return !n || !v((function() {
				n.call(null, e || function() {
					throw 1
				}, 1)
			}))
		},
		Kn = [].join,
		zn = C != Object,
		qn = Vn("join", ",");
	_t({
		target: "Array",
		proto: !0,
		forced: zn || qn
	}, {
		join: function(t) {
			return Kn.call(D(this), void 0 === t ? "," : t)
		}
	});
	var Yn = $e.map;
	_t({
		target: "Array",
		proto: !0,
		forced: !yn("map")
	}, {
		map: function(t) {
			return Yn(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var Jn = Pt("species"),
		Qn = [].slice,
		Zn = Math.max;
	_t({
		target: "Array",
		proto: !0,
		forced: !yn("slice")
	}, {
		slice: function(t, e) {
			var n, i, r, u = D(this),
				o = pt(u.length),
				s = gt(t, o),
				l = gt(void 0 === e ? o : e, o);
			if (de(u) && ("function" != typeof(n = u.constructor) || n !== Array && !de(n.prototype) ? O(n) && null === (n = n[Jn]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return Qn.call(u, s, l);
			for (i = new(void 0 === n ? Array : n)(Zn(l - s, 0)), r = 0; s < l; s++, r++) s in u && vn(i, r, u[s]);
			return i.length = r, i
		}
	});
	var Xn = P.f,
		ti = Function.prototype,
		ei = ti.toString,
		ni = /^\s*function ([^ (]*)/;
	!g || "name" in ti || Xn(ti, "name", {
		configurable: !0,
		get: function() {
			try {
				return ei.call(this).match(ni)[1]
			} catch (t) {
				return ""
			}
		}
	});
	var ii = b.f,
		ri = function(t) {
			return function(e) {
				for (var n, i = D(e), r = Nt(i), u = r.length, o = 0, s = []; u > o;) n = r[o++], g && !ii.call(i, n) || s.push(t ? [n, i[n]] : i[n]);
				return s
			}
		},
		ui = {
			entries: ri(!0),
			values: ri(!1)
		}.entries;
	_t({
		target: "Object",
		stat: !0
	}, {
		entries: function(t) {
			return ui(t)
		}
	});
	var oi = v((function() {
		Nt(1)
	}));
	_t({
		target: "Object",
		stat: !0,
		forced: oi
	}, {
		keys: function(t) {
			return Nt(Qt(t))
		}
	});
	var si = Pt("toStringTag"),
		li = "Arguments" == F(function() {
			return arguments
		}()),
		ai = {};
	ai[Pt("toStringTag")] = "z";
	var ci = "[object z]" !== String(ai) ? function() {
			return "[object " + function(t) {
				var e, n, i;
				return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
					try {
						return t[e]
					} catch (t) {}
				}(e = Object(t), si)) ? n : li ? F(e) : "Object" == (i = F(e)) && "function" == typeof e.callee ? "Arguments" : i
			}(this) + "]"
		} : ai.toString,
		hi = Object.prototype;
	ci !== hi.toString && ut(hi, "toString", ci, {
		unsafe: !0
	});
	var fi = function(t) {
			return function(e, n) {
				var i, r, u = String(k(e)),
					o = ht(n),
					s = u.length;
				return o < 0 || o >= s ? t ? "" : void 0 : (i = u.charCodeAt(o)) < 55296 || i > 56319 || o + 1 === s || (r = u.charCodeAt(o + 1)) < 56320 || r > 57343 ? t ? u.charAt(o) : i : t ? u.slice(o, o + 2) : r - 56320 + (i - 55296 << 10) + 65536
			}
		},
		pi = {
			codeAt: fi(!1),
			charAt: fi(!0)
		},
		di = pi.charAt,
		vi = rt.set,
		gi = rt.getterFor("String Iterator");
	Hn(String, "String", (function(t) {
		vi(this, {
			type: "String Iterator",
			string: String(t),
			index: 0
		})
	}), (function() {
		var t, e = gi(this),
			n = e.string,
			i = e.index;
		return i >= n.length ? {
			value: void 0,
			done: !0
		} : (t = di(n, i), e.index += t.length, {
			value: t,
			done: !1
		})
	}));
	var yi, Ei, bi = function() {
			var t = R(this),
				e = "";
			return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
		},
		mi = RegExp.prototype.exec,
		Ai = String.prototype.replace,
		Fi = mi,
		Si = (yi = /a/, Ei = /b*/g, mi.call(yi, "a"), mi.call(Ei, "a"), 0 !== yi.lastIndex || 0 !== Ei.lastIndex),
		Ci = void 0 !== /()??/.exec("")[1];
	(Si || Ci) && (Fi = function(t) {
		var e, n, i, r, u = this;
		return Ci && (n = new RegExp("^" + u.source + "$(?!\\s)", bi.call(u))), Si && (e = u.lastIndex), i = mi.call(u, t), Si && i && (u.lastIndex = u.global ? i.index + i[0].length : e), Ci && i && i.length > 1 && Ai.call(i[0], n, (function() {
			for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
		})), i
	});
	var ki = Fi,
		Di = Pt("species"),
		Oi = !v((function() {
			var t = /./;
			return t.exec = function() {
				var t = [];
				return t.groups = {
					a: "7"
				}, t
			}, "7" !== "".replace(t, "$<a>")
		})),
		wi = !v((function() {
			var t = /(?:)/,
				e = t.exec;
			t.exec = function() {
				return e.apply(this, arguments)
			};
			var n = "ab".split(t);
			return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
		})),
		xi = function(t, e, n, i) {
			var r = Pt(t),
				u = !v((function() {
					var e = {};
					return e[r] = function() {
						return 7
					}, 7 != "" [t](e)
				})),
				o = u && !v((function() {
					var e = !1,
						n = /a/;
					return n.exec = function() {
						return e = !0, null
					}, "split" === t && (n.constructor = {}, n.constructor[Di] = function() {
						return n
					}), n[r](""), !e
				}));
			if (!u || !o || "replace" === t && !Oi || "split" === t && !wi) {
				var s = /./ [r],
					l = n(r, "" [t], (function(t, e, n, i, r) {
						return e.exec === ki ? u && !r ? {
							done: !0,
							value: s.call(e, n, i)
						} : {
							done: !0,
							value: t.call(n, e, i)
						} : {
							done: !1
						}
					})),
					a = l[0],
					c = l[1];
				ut(String.prototype, t, a), ut(RegExp.prototype, r, 2 == e ? function(t, e) {
					return c.call(t, this, e)
				} : function(t) {
					return c.call(t, this)
				}), i && N(RegExp.prototype[r], "sham", !0)
			}
		},
		$i = Pt("species"),
		Bi = pi.charAt,
		ji = function(t, e, n) {
			return e + (n ? Bi(t, e).length : 1)
		},
		Ti = function(t, e) {
			var n = t.exec;
			if ("function" == typeof n) {
				var i = n.call(t, e);
				if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
				return i
			}
			if ("RegExp" !== F(t)) throw TypeError("RegExp#exec called on incompatible receiver");
			return ki.call(t, e)
		},
		Li = [].push,
		_i = Math.min,
		Ii = !v((function() {
			return !RegExp(4294967295, "y")
		}));
	xi("split", 2, (function(t, e, n) {
		var i;
		return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, n) {
			var i = String(k(this)),
				r = void 0 === n ? 4294967295 : n >>> 0;
			if (0 === r) return [];
			if (void 0 === t) return [i];
			if (!ee(t)) return e.call(i, t, r);
			for (var u, o, s, l = [], a = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), c = 0, h = new RegExp(t.source, a + "g");
				(u = ki.call(h, i)) && !((o = h.lastIndex) > c && (l.push(i.slice(c, u.index)), u.length > 1 && u.index < i.length && Li.apply(l, u.slice(1)), s = u[0].length, c = o, l.length >= r));) h.lastIndex === u.index && h.lastIndex++;
			return c === i.length ? !s && h.test("") || l.push("") : l.push(i.slice(c)), l.length > r ? l.slice(0, r) : l
		} : "0".split(void 0, 0).length ? function(t, n) {
			return void 0 === t && 0 === n ? [] : e.call(this, t, n)
		} : e, [function(e, n) {
			var r = k(this),
				u = null == e ? void 0 : e[t];
			return void 0 !== u ? u.call(e, r, n) : i.call(String(r), e, n)
		}, function(t, r) {
			var u = n(i, t, this, r, i !== e);
			if (u.done) return u.value;
			var o = R(t),
				s = String(this),
				l = function(t, e) {
					var n, i = R(t).constructor;
					return void 0 === i || null == (n = R(i)[$i]) ? e : ke(n)
				}(o, RegExp),
				a = o.unicode,
				c = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (Ii ? "y" : "g"),
				h = new l(Ii ? o : "^(?:" + o.source + ")", c),
				f = void 0 === r ? 4294967295 : r >>> 0;
			if (0 === f) return [];
			if (0 === s.length) return null === Ti(h, s) ? [s] : [];
			for (var p = 0, d = 0, v = []; d < s.length;) {
				h.lastIndex = Ii ? d : 0;
				var g, y = Ti(h, Ii ? s : s.slice(d));
				if (null === y || (g = _i(pt(h.lastIndex + (Ii ? 0 : d)), s.length)) === p) d = ji(s, d, a);
				else {
					if (v.push(s.slice(p, d)), v.length === f) return v;
					for (var E = 1; E <= y.length - 1; E++)
						if (v.push(y[E]), v.length === f) return v;
					d = p = g
				}
			}
			return v.push(s.slice(p)), v
		}]
	}), !Ii);
	var Ri = {
			CSSRuleList: 0,
			CSSStyleDeclaration: 0,
			CSSValueList: 0,
			ClientRectList: 0,
			DOMRectList: 0,
			DOMStringList: 0,
			DOMTokenList: 1,
			DataTransferItemList: 0,
			FileList: 0,
			HTMLAllCollection: 0,
			HTMLCollection: 0,
			HTMLFormElement: 0,
			HTMLSelectElement: 0,
			MediaList: 0,
			MimeTypeArray: 0,
			NamedNodeMap: 0,
			NodeList: 1,
			PaintRequestList: 0,
			Plugin: 0,
			PluginArray: 0,
			SVGLengthList: 0,
			SVGNumberList: 0,
			SVGPathSegList: 0,
			SVGPointList: 0,
			SVGStringList: 0,
			SVGTransformList: 0,
			SourceBufferList: 0,
			StyleSheetList: 0,
			TextTrackCueList: 0,
			TextTrackList: 0,
			TouchList: 0
		},
		Mi = $e.forEach,
		Pi = Vn("forEach") ? function(t) {
			return Mi(this, t, arguments.length > 1 ? arguments[1] : void 0)
		} : [].forEach;
	for (var Ni in Ri) {
		var Hi = d[Ni],
			Gi = Hi && Hi.prototype;
		if (Gi && Gi.forEach !== Pi) try {
			N(Gi, "forEach", Pi)
		} catch (t) {
			Gi.forEach = Pi
		}
	}
	var Ui = Pt("iterator"),
		Wi = Pt("toStringTag"),
		Vi = Wn.values;
	for (var Ki in Ri) {
		var zi = d[Ki],
			qi = zi && zi.prototype;
		if (qi) {
			if (qi[Ui] !== Vi) try {
				N(qi, Ui, Vi)
			} catch (t) {
				qi[Ui] = Vi
			}
			if (qi[Wi] || N(qi, Wi, Ki), Ri[Ki])
				for (var Yi in Wn)
					if (qi[Yi] !== Wn[Yi]) try {
						N(qi, Yi, Wn[Yi])
					} catch (t) {
						qi[Yi] = Wn[Yi]
					}
		}
	}
	var Ji = function() {
			function t(e) {
				var i = this;
				n(this, t), this.rows = e.rows, this.scrollEl = e.scrollEl, this.contentEl = e.contentEl, this.callback = e.callback, this.cache = {}, this.scrollTop = this.scrollEl.scrollTop, this.initDOM(this.rows), this.scrollEl.scrollTop = this.scrollTop, this.lastCluster = 0;
				var r = function() {
					i.lastCluster !== (i.lastCluster = i.getNum()) && (i.initDOM(i.rows), i.callback())
				};
				this.scrollEl.addEventListener("scroll", r, !1), this.destroy = function() {
					i.contentEl.innerHtml = "", i.scrollEl.removeEventListener("scroll", r, !1)
				}
			}
			return r(t, [{
				key: "initDOM",
				value: function(t) {
					void 0 === this.clusterHeight && (this.cache.scrollTop = this.scrollEl.scrollTop, this.cache.data = this.contentEl.innerHTML = t[0] + t[0] + t[0], this.getRowsHeight(t));
					var e = this.initData(t, this.getNum()),
						n = e.rows.join(""),
						i = this.checkChanges("data", n),
						r = this.checkChanges("top", e.topOffset),
						u = this.checkChanges("bottom", e.bottomOffset),
						o = [];
					i && r ? (e.topOffset && o.push(this.getExtra("top", e.topOffset)), o.push(n), e.bottomOffset && o.push(this.getExtra("bottom", e.bottomOffset)), this.contentEl.innerHTML = o.join("")) : u && (this.contentEl.lastChild.style.height = "".concat(e.bottomOffset, "px"))
				}
			}, {
				key: "getRowsHeight",
				value: function() {
					if (void 0 === this.itemHeight) {
						var t = this.contentEl.children,
							e = t[Math.floor(t.length / 2)];
						this.itemHeight = e.offsetHeight
					}
					this.blockHeight = this.itemHeight * pe.BLOCK_ROWS, this.clusterRows = pe.BLOCK_ROWS * pe.CLUSTER_BLOCKS, this.clusterHeight = this.blockHeight * pe.CLUSTER_BLOCKS
				}
			}, {
				key: "getNum",
				value: function() {
					return this.scrollTop = this.scrollEl.scrollTop, Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0
				}
			}, {
				key: "initData",
				value: function(t, e) {
					if (t.length < pe.BLOCK_ROWS) return {
						topOffset: 0,
						bottomOffset: 0,
						rowsAbove: 0,
						rows: t
					};
					var n = Math.max((this.clusterRows - pe.BLOCK_ROWS) * e, 0),
						i = n + this.clusterRows,
						r = Math.max(n * this.itemHeight, 0),
						u = Math.max((t.length - i) * this.itemHeight, 0),
						o = [],
						s = n;
					r < 1 && s++;
					for (var l = n; l < i; l++) t[l] && o.push(t[l]);
					return this.dataStart = n, this.dataEnd = i, {
						topOffset: r,
						bottomOffset: u,
						rowsAbove: s,
						rows: o
					}
				}
			}, {
				key: "checkChanges",
				value: function(t, e) {
					var n = e !== this.cache[t];
					return this.cache[t] = e, n
				}
			}, {
				key: "getExtra",
				value: function(t, e) {
					var n = document.createElement("li");
					return n.className = "virtual-scroll-".concat(t), e && (n.style.height = "".concat(e, "px")), n.outerHTML
				}
			}]), t
		}(),
		Qi = Math.max,
		Zi = Math.min,
		Xi = Math.floor,
		tr = /\$([$&'`]|\d\d?|<[^>]*>)/g,
		er = /\$([$&'`]|\d\d?)/g;
	xi("replace", 2, (function(t, e, n) {
		return [function(n, i) {
			var r = k(this),
				u = null == n ? void 0 : n[t];
			return void 0 !== u ? u.call(n, r, i) : e.call(String(r), n, i)
		}, function(t, r) {
			var u = n(e, t, this, r);
			if (u.done) return u.value;
			var o = R(t),
				s = String(this),
				l = "function" == typeof r;
			l || (r = String(r));
			var a = o.global;
			if (a) {
				var c = o.unicode;
				o.lastIndex = 0
			}
			for (var h = [];;) {
				var f = Ti(o, s);
				if (null === f) break;
				if (h.push(f), !a) break;
				"" === String(f[0]) && (o.lastIndex = ji(s, pt(o.lastIndex), c))
			}
			for (var p, d = "", v = 0, g = 0; g < h.length; g++) {
				f = h[g];
				for (var y = String(f[0]), E = Qi(Zi(ht(f.index), s.length), 0), b = [], m = 1; m < f.length; m++) b.push(void 0 === (p = f[m]) ? p : String(p));
				var A = f.groups;
				if (l) {
					var F = [y].concat(b, E, s);
					void 0 !== A && F.push(A);
					var S = String(r.apply(void 0, F))
				} else S = i(y, s, E, b, A, r);
				E >= v && (d += s.slice(v, E) + S, v = E + y.length)
			}
			return d + s.slice(v)
		}];

		function i(t, n, i, r, u, o) {
			var s = i + t.length,
				l = r.length,
				a = er;
			return void 0 !== u && (u = Qt(u), a = tr), e.call(o, a, (function(e, o) {
				var a;
				switch (o.charAt(0)) {
					case "$":
						return "$";
					case "&":
						return t;
					case "`":
						return n.slice(0, i);
					case "'":
						return n.slice(s);
					case "<":
						a = u[o.slice(1, -1)];
						break;
					default:
						var c = +o;
						if (0 === c) return e;
						if (c > l) {
							var h = Xi(c / 10);
							return 0 === h ? e : h <= l ? void 0 === r[h - 1] ? o.charAt(1) : r[h - 1] + o.charAt(1) : e
						}
						a = r[c - 1]
				}
				return void 0 === a ? "" : a
			}))
		}
	}));
	var nr = function(t) {
			if (t.normalize) return t.normalize("NFD").replace(/[\u0300-\u036F]/g, "");
			return [{
				base: "A",
				letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
			}, {
				base: "AA",
				letters: /[\uA732]/g
			}, {
				base: "AE",
				letters: /[\u00C6\u01FC\u01E2]/g
			}, {
				base: "AO",
				letters: /[\uA734]/g
			}, {
				base: "AU",
				letters: /[\uA736]/g
			}, {
				base: "AV",
				letters: /[\uA738\uA73A]/g
			}, {
				base: "AY",
				letters: /[\uA73C]/g
			}, {
				base: "B",
				letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
			}, {
				base: "C",
				letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
			}, {
				base: "D",
				letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
			}, {
				base: "DZ",
				letters: /[\u01F1\u01C4]/g
			}, {
				base: "Dz",
				letters: /[\u01F2\u01C5]/g
			}, {
				base: "E",
				letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
			}, {
				base: "F",
				letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
			}, {
				base: "G",
				letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
			}, {
				base: "H",
				letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
			}, {
				base: "I",
				letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
			}, {
				base: "J",
				letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
			}, {
				base: "K",
				letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
			}, {
				base: "L",
				letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
			}, {
				base: "LJ",
				letters: /[\u01C7]/g
			}, {
				base: "Lj",
				letters: /[\u01C8]/g
			}, {
				base: "M",
				letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
			}, {
				base: "N",
				letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
			}, {
				base: "NJ",
				letters: /[\u01CA]/g
			}, {
				base: "Nj",
				letters: /[\u01CB]/g
			}, {
				base: "O",
				letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
			}, {
				base: "OI",
				letters: /[\u01A2]/g
			}, {
				base: "OO",
				letters: /[\uA74E]/g
			}, {
				base: "OU",
				letters: /[\u0222]/g
			}, {
				base: "P",
				letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
			}, {
				base: "Q",
				letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
			}, {
				base: "R",
				letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
			}, {
				base: "S",
				letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
			}, {
				base: "T",
				letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
			}, {
				base: "TZ",
				letters: /[\uA728]/g
			}, {
				base: "U",
				letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
			}, {
				base: "V",
				letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
			}, {
				base: "VY",
				letters: /[\uA760]/g
			}, {
				base: "W",
				letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
			}, {
				base: "X",
				letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
			}, {
				base: "Y",
				letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
			}, {
				base: "Z",
				letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
			}, {
				base: "a",
				letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
			}, {
				base: "aa",
				letters: /[\uA733]/g
			}, {
				base: "ae",
				letters: /[\u00E6\u01FD\u01E3]/g
			}, {
				base: "ao",
				letters: /[\uA735]/g
			}, {
				base: "au",
				letters: /[\uA737]/g
			}, {
				base: "av",
				letters: /[\uA739\uA73B]/g
			}, {
				base: "ay",
				letters: /[\uA73D]/g
			}, {
				base: "b",
				letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
			}, {
				base: "c",
				letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
			}, {
				base: "d",
				letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
			}, {
				base: "dz",
				letters: /[\u01F3\u01C6]/g
			}, {
				base: "e",
				letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
			}, {
				base: "f",
				letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
			}, {
				base: "g",
				letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
			}, {
				base: "h",
				letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
			}, {
				base: "hv",
				letters: /[\u0195]/g
			}, {
				base: "i",
				letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
			}, {
				base: "j",
				letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
			}, {
				base: "k",
				letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
			}, {
				base: "l",
				letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
			}, {
				base: "lj",
				letters: /[\u01C9]/g
			}, {
				base: "m",
				letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
			}, {
				base: "n",
				letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
			}, {
				base: "nj",
				letters: /[\u01CC]/g
			}, {
				base: "o",
				letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
			}, {
				base: "oi",
				letters: /[\u01A3]/g
			}, {
				base: "ou",
				letters: /[\u0223]/g
			}, {
				base: "oo",
				letters: /[\uA74F]/g
			}, {
				base: "p",
				letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
			}, {
				base: "q",
				letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
			}, {
				base: "r",
				letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
			}, {
				base: "s",
				letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
			}, {
				base: "t",
				letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
			}, {
				base: "tz",
				letters: /[\uA729]/g
			}, {
				base: "u",
				letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
			}, {
				base: "v",
				letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
			}, {
				base: "vy",
				letters: /[\uA761]/g
			}, {
				base: "w",
				letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
			}, {
				base: "x",
				letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
			}, {
				base: "y",
				letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
			}, {
				base: "z",
				letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
			}].reduce((function(t, e) {
				var n = e.letters,
					i = e.base;
				return t.replace(n, i)
			}), t)
		},
		ir = function(t, e, n) {
			var i = !0,
				r = !1,
				u = void 0;
			try {
				for (var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
					var l = o.value;
					if (l[e] === n || l[e] === +l[e] + "" && +l[e] === n) return l;
					if ("optgroup" === l.type) {
						var a = !0,
							c = !1,
							h = void 0;
						try {
							for (var f, p = l.children[Symbol.iterator](); !(a = (f = p.next()).done); a = !0) {
								var d = f.value;
								if (d[e] === n || d[e] === +d[e] + "" && +d[e] === n) return d
							}
						} catch (t) {
							c = !0, h = t
						} finally {
							try {
								a || null == p.return || p.return()
							} finally {
								if (c) throw h
							}
						}
					}
				}
			} catch (t) {
				r = !0, u = t
			} finally {
				try {
					i || null == s.return || s.return()
				} finally {
					if (r) throw u
				}
			}
		},
		rr = function(t) {
			return Object.keys(t).forEach((function(e) {
				return void 0 === t[e] ? delete t[e] : ""
			})), t
		},
		ur = function() {
			function i(e, r) {
				n(this, i), this.$el = e, this.options = t.extend({}, pe.DEFAULTS, r)
			}
			return r(i, [{
				key: "init",
				value: function() {
					this.initLocale(), this.initContainer(), this.initData(), this.initSelected(!0), this.initFilter(), this.initDrop(), this.initView(), this.options.onAfterCreate()
				}
			}, {
				key: "initLocale",
				value: function() {
					if (this.options.locale) {
						var e = t.fn.multipleSelect.locales,
							n = this.options.locale.split(/-|_/);
						n[0] = n[0].toLowerCase(), n[1] && (n[1] = n[1].toUpperCase()), e[this.options.locale] ? t.extend(this.options, e[this.options.locale]) : e[n.join("-")] ? t.extend(this.options, e[n.join("-")]) : e[n[0]] && t.extend(this.options, e[n[0]])
					}
				}
			}, {
				key: "initContainer",
				value: function() {
					var e = this,
						n = this.$el[0],
						i = n.getAttribute("name") || this.options.name || "";
					this.$el.hide(), this.$label = this.$el.closest("label"), !this.$label.length && this.$el.attr("id") && (this.$label = t('label[for="'.concat(this.$el.attr("id"), '"]'))), this.$label.find(">input").length && (this.$label = null), void 0 === this.options.single && (this.options.single = null === n.getAttribute("multiple")), this.$parent = t('\n      <div class="ms-parent '.concat(n.getAttribute("class") || "", '"\n      title="').concat(n.getAttribute("title") || "", '" />\n    ')), this.options.placeholder = this.options.placeholder || n.getAttribute("placeholder") || "", this.tabIndex = n.getAttribute("tabindex");
					var r = "";
					if (null !== this.tabIndex && (this.$el.attr("tabindex", -1), r = this.tabIndex && 'tabindex="'.concat(this.tabIndex, '"')), this.$choice = t('\n      <button type="button" class="ms-choice"'.concat(r, '>\n      <span class="placeholder">').concat(this.options.placeholder, "</span>\n      ").concat(this.options.showClear ? '<div class="icon-close"></div>' : "", '\n      <div class="icon-caret"></div>\n      </button>\n    ')), this.$drop = t('<div class="ms-drop '.concat(this.options.position, '" />')), this.$close = this.$choice.find(".icon-close"), this.options.dropWidth && this.$drop.css("width", this.options.dropWidth), this.$el.after(this.$parent), this.$parent.append(this.$choice), this.$parent.append(this.$drop), n.disabled && this.$choice.addClass("disabled"), this.selectAllName = 'data-name="selectAll'.concat(i, '"'), this.selectGroupName = 'data-name="selectGroup'.concat(i, '"'), this.selectItemName = 'data-name="selectItem'.concat(i, '"'), !this.options.keepOpen) {
						var u = function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
							return t = t || "".concat(+new Date).concat(~~(1e6 * Math.random())), "click.multiple-select-".concat(t)
						}(this.$el.attr("id"));
						t(document).off(u).on(u, (function(i) {
							t(i.target)[0] !== e.$choice[0] && t(i.target).parents(".ms-choice")[0] !== e.$choice[0] && (t(i.target)[0] === e.$drop[0] || t(i.target).parents(".ms-drop")[0] !== e.$drop[0] && i.target !== n) && e.options.isOpen && e.close()
						}))
					}
				}
			}, {
				key: "initData",
				value: function() {
					var n = this,
						i = [];
					if (this.options.data) {
						if (Array.isArray(this.options.data)) this.data = this.options.data.map((function(t) {
							return "string" == typeof t || "number" == typeof t ? {
								text: t,
								value: t
							} : t
						}));
						else if ("object" === e(this.options.data)) {
							for (var r = 0, o = Object.entries(this.options.data); r < o.length; r++) {
								var s = u(o[r], 2),
									l = s[0],
									a = s[1];
								i.push({
									value: l,
									text: a
								})
							}
							this.data = i
						}
					} else t.each(this.$el.children(), (function(t, e) {
						n.initRow(t, e) && i.push(n.initRow(t, e))
					})), this.options.data = i, this.data = i, this.fromHtml = !0;
					this.dataTotal = function(t) {
						var e = 0;
						return t.forEach((function(t, n) {
							"optgroup" === t.type ? (t._key = "group_".concat(n), t.visible = void 0 === t.visible || t.visible, t.children.forEach((function(t, e) {
								t._key = "option_".concat(n, "_").concat(e), t.visible = void 0 === t.visible || t.visible
							})), e += t.children.length) : (t._key = "option_".concat(n), t.visible = void 0 === t.visible || t.visible, e += 1)
						})), e
					}(this.data)
				}
			}, {
				key: "initRow",
				value: function(e, n, i) {
					var r = this,
						u = {},
						o = t(n);
					return o.is("option") ? (u.type = "option", u.text = this.options.textTemplate(o), u.value = n.value, u.visible = !0, u.selected = !!n.selected, u.disabled = i || n.disabled, u.classes = n.getAttribute("class") || "", u.title = n.getAttribute("title") || "", o.data("value") && (u._value = o.data("value")), Object.keys(o.data()).length && (u._data = o.data()), u) : o.is("optgroup") ? (u.type = "optgroup", u.label = this.options.labelTemplate(o), u.visible = !0, u.selected = !!n.selected, u.disabled = n.disabled, u.children = [], Object.keys(o.data()).length && (u._data = o.data()), t.each(o.children(), (function(t, e) {
						u.children.push(r.initRow(t, e, u.disabled))
					})), u) : null
				}
			}, {
				key: "initSelected",
				value: function(t) {
					var e = 0,
						n = !0,
						i = !1,
						r = void 0;
					try {
						for (var u, o = this.data[Symbol.iterator](); !(n = (u = o.next()).done); n = !0) {
							var s = u.value;
							if ("optgroup" === s.type) {
								var l = s.children.filter((function(t) {
									return t.selected && !t.disabled && t.visible
								})).length;
								s.selected = l && l === s.children.filter((function(t) {
									return !t.disabled && t.visible
								})).length, e += l
							} else e += s.selected && !s.disabled && s.visible ? 1 : 0
						}
					} catch (t) {
						i = !0, r = t
					} finally {
						try {
							n || null == o.return || o.return()
						} finally {
							if (i) throw r
						}
					}
					this.allSelected = this.data.filter((function(t) {
						return t.selected && !t.disabled && t.visible
					})).length === this.data.filter((function(t) {
						return !t.disabled && t.visible
					})).length, t || (this.allSelected ? this.options.onCheckAll() : 0 === e && this.options.onUncheckAll())
				}
			}, {
				key: "initFilter",
				value: function() {
					if (this.filterText = "", !this.options.filter && this.options.filterByDataLength) {
						var t = 0,
							e = !0,
							n = !1,
							i = void 0;
						try {
							for (var r, u = this.data[Symbol.iterator](); !(e = (r = u.next()).done); e = !0) {
								var o = r.value;
								"optgroup" === o.type ? t += o.children.length : t += 1
							}
						} catch (t) {
							n = !0, i = t
						} finally {
							try {
								e || null == u.return || u.return()
							} finally {
								if (n) throw i
							}
						}
						this.options.filter = t > this.options.filterByDataLength
					}
				}
			}, {
				key: "initDrop",
				value: function() {
					var t = this;
					this.initList(), this.update(!0), this.options.isOpen && setTimeout((function() {
						t.open()
					}), 50), this.options.openOnHover && this.$parent.hover((function() {
						t.open()
					}), (function() {
						t.close()
					}))
				}
			}, {
				key: "initList",
				value: function() {
					var t = [];
					this.options.filter && t.push('\n        <div class="ms-search">\n          <input type="text" autocomplete="off" autocorrect="off"\n            autocapitalize="off" spellcheck="false"\n            placeholder="'.concat(this.options.filterPlaceholder, '">\n        </div>\n      ')), t.push("<ul></ul>"), this.$drop.html(t.join("")), this.$ul = this.$drop.find(">ul"), this.initListItems()
				}
			}, {
				key: "initListItems",
				value: function() {
					var t = this,
						e = this.getListRows(),
						n = 0;
					if (this.options.selectAll && !this.options.single && (n = -1), e.length > pe.BLOCK_ROWS * pe.CLUSTER_BLOCKS) {
						this.virtualScroll && this.virtualScroll.destroy();
						var i = this.$drop.is(":visible");
						i || this.$drop.css("left", -1e4).show();
						var r = function() {
							t.updateDataStart = t.virtualScroll.dataStart + n, t.updateDataEnd = t.virtualScroll.dataEnd + n, t.updateDataStart < 0 && (t.updateDataStart = 0), t.updateDataEnd > t.data.length && (t.updateDataEnd = t.data.length)
						};
						this.virtualScroll = new Ji({
							rows: e,
							scrollEl: this.$ul[0],
							contentEl: this.$ul[0],
							callback: function() {
								r(), t.events()
							}
						}), r(), i || this.$drop.css("left", 0).hide()
					} else this.$ul.html(e.join("")), this.updateDataStart = 0, this.updateDataEnd = this.updateData.length, this.virtualScroll = null;
					this.events()
				}
			}, {
				key: "getListRows",
				value: function() {
					var t = this,
						e = [];
					return this.options.selectAll && !this.options.single && e.push('\n        <li class="ms-select-all">\n        <label>\n        <input type="checkbox" '.concat(this.selectAllName).concat(this.allSelected ? ' checked="checked"' : "", " />\n        <span>").concat(this.options.formatSelectAll(), "</span>\n        </label>\n        </li>\n      ")), this.updateData = [], this.data.forEach((function(n) {
						e.push.apply(e, o(t.initListItem(n)))
					})), e.push('<li class="ms-no-results">'.concat(this.options.formatNoMatchesFound(), "</li>")), e
				}
			}, {
				key: "initListItem",
				value: function(t) {
					var e = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
						i = t.title ? 'title="'.concat(t.title, '"') : "",
						r = this.options.multiple ? "multiple" : "",
						u = this.options.single ? "radio" : "checkbox",
						s = "";
					if (!t.visible) return [];
					if (this.updateData.push(t), this.options.single && !this.options.singleRadio && (s = "hide-radio "), t.selected && (s += "selected "), "optgroup" === t.type) {
						var l = this.options.styler(t),
							a = l ? 'style="'.concat(l, '"') : "",
							c = [],
							h = this.options.hideOptgroupCheckboxes || this.options.single ? "<span ".concat(this.selectGroupName, ' data-key="').concat(t._key, '"></span>') : '<input type="checkbox"\n          '.concat(this.selectGroupName, '\n          data-key="').concat(t._key, '"\n          ').concat(t.selected ? ' checked="checked"' : "", "\n          ").concat(t.disabled ? ' disabled="disabled"' : "", "\n        >");
						return s.includes("hide-radio") || !this.options.hideOptgroupCheckboxes && !this.options.single || (s += "hide-radio "), c.push('\n        <li class="group '.concat(s, '" ').concat(a, '>\n        <label class="optgroup').concat(this.options.single || t.disabled ? " disabled" : "", '">\n        ').concat(h).concat(t.label, "\n        </label>\n        </li>\n      ")), t.children.forEach((function(t) {
							c.push.apply(c, o(e.initListItem(t, 1)))
						})), c
					}
					var f = this.options.styler(t),
						p = f ? 'style="'.concat(f, '"') : "";
					return s += t.classes || "", n && this.options.single && (s += "option-level-".concat(n, " ")), ['\n      <li class="'.concat(r, " ").concat(s, '" ').concat(i, " ").concat(p, '>\n      <label class="').concat(t.disabled ? "disabled" : "", '">\n      <input type="').concat(u, '"\n        value="').concat(t.value, '"\n        data-key="').concat(t._key, '"\n        ').concat(this.selectItemName, "\n        ").concat(t.selected ? ' checked="checked"' : "", "\n        ").concat(t.disabled ? ' disabled="disabled"' : "", "\n      >\n      <span>").concat(t.text, "</span>\n      </label>\n      </li>\n    ")]
				}
			}, {
				key: "events",
				value: function() {
					var e = this;
					this.$searchInput = this.$drop.find(".ms-search input"), this.$selectAll = this.$drop.find("input[".concat(this.selectAllName, "]")), this.$selectGroups = this.$drop.find("input[".concat(this.selectGroupName, "],span[").concat(this.selectGroupName, "]")), this.$selectItems = this.$drop.find("input[".concat(this.selectItemName, "]:enabled")), this.$disableItems = this.$drop.find("input[".concat(this.selectItemName, "]:disabled")), this.$noResults = this.$drop.find(".ms-no-results");
					var n = function(n) {
						n.preventDefault(), t(n.target).hasClass("icon-close") || e[e.options.isOpen ? "close" : "open"]()
					};
					this.$label && this.$label.length && this.$label.off("click").on("click", (function(t) {
						"label" === t.target.nodeName.toLowerCase() && (n(t), e.options.filter && e.options.isOpen || e.focus(), t.stopPropagation())
					})), this.$choice.off("click").on("click", n).off("focus").on("focus", this.options.onFocus).off("blur").on("blur", this.options.onBlur), this.$parent.off("keydown").on("keydown", (function(t) {
						27 !== t.which || e.options.keepOpen || (e.close(), e.$choice.focus())
					})), this.$close.off("click").on("click", (function(t) {
						t.preventDefault(), e._checkAll(!1, !0), e.initSelected(!1), e.updateSelected(), e.update(), e.options.onClear()
					})), this.$searchInput.off("keydown").on("keydown", (function(t) {
						9 === t.keyCode && t.shiftKey && e.close()
					})).off("keyup").on("keyup", (function(t) {
						if (e.options.filterAcceptOnEnter && [13, 32].includes(t.which) && e.$searchInput.val()) {
							if (e.options.single) {
								var n = e.$selectItems.closest("li").filter(":visible");
								n.length && e.setSelects([n.first().find("input[".concat(e.selectItemName, "]")).val()])
							} else e.$selectAll.click();
							return e.close(), void e.focus()
						}
						e.filter()
					})), this.$selectAll.off("click").on("click", (function(n) {
						e._checkAll(t(n.currentTarget).prop("checked"))
					})), this.$selectGroups.off("click").on("click", (function(n) {
						var i = t(n.currentTarget),
							r = i.prop("checked"),
							u = ir(e.data, "_key", i.data("key"));
						e._checkGroup(u, r), e.options.onOptgroupClick(rr({
							label: u.label,
							selected: u.selected,
							data: u._data,
							children: u.children.map((function(t) {
								return rr({
									text: t.text,
									value: t.value,
									selected: t.selected,
									disabled: t.disabled,
									data: t._data
								})
							}))
						}))
					})), this.$selectItems.off("click").on("click", (function(n) {
						var i = t(n.currentTarget),
							r = i.prop("checked"),
							u = ir(e.data, "_key", i.data("key"));
						e._check(u, r), e.options.onClick(rr({
							text: u.text,
							value: u.value,
							selected: u.selected,
							data: u._data
						})), e.options.single && e.options.isOpen && !e.options.keepOpen && e.close()
					}))
				}
			}, {
				key: "initView",
				value: function() {
					var t;
					window.getComputedStyle ? "auto" === (t = window.getComputedStyle(this.$el[0]).width) && (t = this.$drop.outerWidth() + 20) : t = this.$el.outerWidth() + 20, this.$parent.css("width", this.options.width || t), this.$el.show().addClass("ms-offscreen")
				}
			}, {
				key: "open",
				value: function() {
					if (!this.$choice.hasClass("disabled")) {
						if (this.options.isOpen = !0, this.$choice.find(">div").addClass("open"), this.$drop[this.animateMethod("show")](), this.$selectAll.parent().show(), this.$noResults.hide(), this.data.length || (this.$selectAll.parent().hide(), this.$noResults.show()), this.options.container) {
							var e = this.$drop.offset();
							this.$drop.appendTo(t(this.options.container)), this.$drop.offset({
								top: e.top,
								left: e.left
							}).css("min-width", "auto").outerWidth(this.$parent.outerWidth())
						}
						var n = this.options.maxHeight;
						"row" === this.options.maxHeightUnit && (n = this.$drop.find(">ul>li").first().outerHeight() * this.options.maxHeight), this.$drop.find(">ul").css("max-height", "".concat(n, "px")), this.$drop.find(".multiple").css("width", "".concat(this.options.multipleWidth, "px")), this.data.length && this.options.filter && (this.$searchInput.val(""), this.$searchInput.focus(), this.filter(!0)), this.options.onOpen()
					}
				}
			}, {
				key: "close",
				value: function() {
					this.options.isOpen = !1, this.$choice.find(">div").removeClass("open"), this.$drop[this.animateMethod("hide")](), this.options.container && (this.$parent.append(this.$drop), this.$drop.css({
						top: "auto",
						left: "auto"
					})), this.options.onClose()
				}
			}, {
				key: "animateMethod",
				value: function(t) {
					return {
						show: {
							fade: "fadeIn",
							slide: "slideDown"
						},
						hide: {
							fade: "fadeOut",
							slide: "slideUp"
						}
					}[t][this.options.animate] || t
				}
			}, {
				key: "update",
				value: function(t) {
					var e = this.getSelects(),
						n = this.getSelects("text");
					this.options.displayValues && (n = e);
					var i = this.$choice.find(">span"),
						r = e.length,
						u = "";
					0 === r ? i.addClass("placeholder").html(this.options.placeholder) : u = r < this.options.minimumCountSelected ? n.join(this.options.displayDelimiter) : this.options.formatAllSelected() && r === this.dataTotal ? this.options.formatAllSelected() : this.options.ellipsis && r > this.options.minimumCountSelected ? "".concat(n.slice(0, this.options.minimumCountSelected).join(this.options.displayDelimiter), "...") : this.options.formatCountSelected() && r > this.options.minimumCountSelected ? this.options.formatCountSelected(r, this.dataTotal) : n.join(this.options.displayDelimiter), u && i.removeClass("placeholder").html(u), this.options.displayTitle && i.prop("title", this.getSelects("text")), this.$el.val(this.getSelects()), t || this.$el.trigger("change")
				}
			}, {
				key: "updateSelected",
				value: function() {
					for (var t = this.updateDataStart; t < this.updateDataEnd; t++) {
						var e = this.updateData[t];
						this.$drop.find("input[data-key=".concat(e._key, "]")).prop("checked", e.selected).closest("li").toggleClass("selected", e.selected)
					}
					var n = 0 === this.data.filter((function(t) {
						return t.visible
					})).length;
					this.$selectAll.length && this.$selectAll.prop("checked", this.allSelected).closest("li").toggle(!n), this.$noResults.toggle(n), this.virtualScroll && (this.virtualScroll.rows = this.getListRows())
				}
			}, {
				key: "getOptions",
				value: function() {
					var e = t.extend({}, this.options);
					return delete e.data, t.extend(!0, {}, e)
				}
			}, {
				key: "refreshOptions",
				value: function(e) {
					(function(t, e, n) {
						var i = Object.keys(t),
							r = Object.keys(e);
						if (n && i.length !== r.length) return !1;
						for (var u = 0, o = i; u < o.length; u++) {
							var s = o[u];
							if (r.includes(s) && t[s] !== e[s]) return !1
						}
						return !0
					})(this.options, e, !0) || (this.options = t.extend(this.options, e), this.destroy(), this.init())
				}
			}, {
				key: "getSelects",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "value",
						e = [],
						n = !0,
						i = !1,
						r = void 0;
					try {
						for (var u, s = this.data[Symbol.iterator](); !(n = (u = s.next()).done); n = !0) {
							var l = u.value;
							if ("optgroup" === l.type) {
								var a = l.children.filter((function(t) {
									return t.selected
								}));
								if (!a.length) continue;
								if ("value" === t || this.options.single) e.push.apply(e, o(a.map((function(e) {
									return "value" === t && e._value || e[t]
								}))));
								else {
									var c = [];
									c.push("["), c.push(l.label), c.push(": ".concat(a.map((function(e) {
										return e[t]
									})).join(", "))), c.push("]"), e.push(c.join(""))
								}
							} else l.selected && e.push("value" === t && l._value || l[t])
						}
					} catch (t) {
						i = !0, r = t
					} finally {
						try {
							n || null == s.return || s.return()
						} finally {
							if (i) throw r
						}
					}
					return e
				}
			}, {
				key: "setSelects",
				value: function(t, e) {
					var n = !1,
						i = function(e) {
							var i = !0,
								r = !1,
								u = void 0;
							try {
								for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
									var l = o.value,
										a = t.includes(l._value || l.value);
									a || l.value !== +l.value + "" || (a = t.includes(+l.value)), l.selected !== a && (n = !0), l.selected = a
								}
							} catch (t) {
								r = !0, u = t
							} finally {
								try {
									i || null == s.return || s.return()
								} finally {
									if (r) throw u
								}
							}
						},
						r = !0,
						u = !1,
						o = void 0;
					try {
						for (var s, l = this.data[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
							var a = s.value;
							"optgroup" === a.type ? i(a.children) : i([a])
						}
					} catch (t) {
						u = !0, o = t
					} finally {
						try {
							r || null == l.return || l.return()
						} finally {
							if (u) throw o
						}
					}
					n && (this.initSelected(e), this.updateSelected(), this.update(e))
				}
			}, {
				key: "enable",
				value: function() {
					this.$choice.removeClass("disabled")
				}
			}, {
				key: "disable",
				value: function() {
					this.$choice.addClass("disabled")
				}
			}, {
				key: "check",
				value: function(t) {
					var e = ir(this.data, "value", t);
					e && this._check(e, !0)
				}
			}, {
				key: "uncheck",
				value: function(t) {
					var e = ir(this.data, "value", t);
					e && this._check(e, !1)
				}
			}, {
				key: "_check",
				value: function(t, e) {
					this.options.single && this._checkAll(!1, !0), t.selected = e, this.initSelected(), this.updateSelected(), this.update()
				}
			}, {
				key: "checkAll",
				value: function() {
					this._checkAll(!0)
				}
			}, {
				key: "uncheckAll",
				value: function() {
					this._checkAll(!1)
				}
			}, {
				key: "_checkAll",
				value: function(t, e) {
					var n = !0,
						i = !1,
						r = void 0;
					try {
						for (var u, o = this.data[Symbol.iterator](); !(n = (u = o.next()).done); n = !0) {
							var s = u.value;
							"optgroup" === s.type ? this._checkGroup(s, t, !0) : s.disabled || !e && !s.visible || (s.selected = t)
						}
					} catch (t) {
						i = !0, r = t
					} finally {
						try {
							n || null == o.return || o.return()
						} finally {
							if (i) throw r
						}
					}
					e || (this.initSelected(), this.updateSelected(), this.update())
				}
			}, {
				key: "_checkGroup",
				value: function(t, e, n) {
					t.selected = e, t.children.forEach((function(t) {
						t.disabled || !n && !t.visible || (t.selected = e)
					})), n || (this.initSelected(), this.updateSelected(), this.update())
				}
			}, {
				key: "checkInvert",
				value: function() {
					if (!this.options.single) {
						var t = !0,
							e = !1,
							n = void 0;
						try {
							for (var i, r = this.data[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
								var u = i.value;
								if ("optgroup" === u.type) {
									var o = !0,
										s = !1,
										l = void 0;
									try {
										for (var a, c = u.children[Symbol.iterator](); !(o = (a = c.next()).done); o = !0) {
											var h = a.value;
											h.selected = !h.selected
										}
									} catch (t) {
										s = !0, l = t
									} finally {
										try {
											o || null == c.return || c.return()
										} finally {
											if (s) throw l
										}
									}
								} else u.selected = !u.selected
							}
						} catch (t) {
							e = !0, n = t
						} finally {
							try {
								t || null == r.return || r.return()
							} finally {
								if (e) throw n
							}
						}
						this.initSelected(), this.updateSelected(), this.update()
					}
				}
			}, {
				key: "focus",
				value: function() {
					this.$choice.focus(), this.options.onFocus()
				}
			}, {
				key: "blur",
				value: function() {
					this.$choice.blur(), this.options.onBlur()
				}
			}, {
				key: "refresh",
				value: function() {
					this.destroy(), this.init()
				}
			}, {
				key: "filter",
				value: function(e) {
					var n = t.trim(this.$searchInput.val()),
						i = n.toLowerCase();
					if (this.filterText !== i) {
						this.filterText = i;
						var r = !0,
							u = !1,
							o = void 0;
						try {
							for (var s, l = this.data[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
								var a = s.value;
								if ("optgroup" === a.type)
									if (this.options.filterGroup) {
										var c = this.options.customFilter(nr(a.label.toLowerCase()), nr(i), a.label, n);
										a.visible = c;
										var h = !0,
											f = !1,
											p = void 0;
										try {
											for (var d, v = a.children[Symbol.iterator](); !(h = (d = v.next()).done); h = !0) {
												d.value.visible = c
											}
										} catch (t) {
											f = !0, p = t
										} finally {
											try {
												h || null == v.return || v.return()
											} finally {
												if (f) throw p
											}
										}
									} else {
										var g = !0,
											y = !1,
											E = void 0;
										try {
											for (var b, m = a.children[Symbol.iterator](); !(g = (b = m.next()).done); g = !0) {
												var A = b.value;
												A.visible = this.options.customFilter(nr(A.text.toLowerCase()), nr(i), A.text, n)
											}
										} catch (t) {
											y = !0, E = t
										} finally {
											try {
												g || null == m.return || m.return()
											} finally {
												if (y) throw E
											}
										}
										a.visible = a.children.filter((function(t) {
											return t.visible
										})).length > 0
									}
								else a.visible = this.options.customFilter(nr(a.text.toLowerCase()), nr(i), a.text, n)
							}
						} catch (t) {
							u = !0, o = t
						} finally {
							try {
								r || null == l.return || l.return()
							} finally {
								if (u) throw o
							}
						}
						this.initListItems(), this.initSelected(e), this.updateSelected(), e || this.options.onFilter(i)
					}
				}
			}, {
				key: "destroy",
				value: function() {
					this.$parent && (this.$el.before(this.$parent).removeClass("ms-offscreen"), null !== this.tabIndex && this.$el.attr("tabindex", this.tabIndex), this.$parent.remove(), this.fromHtml && (delete this.options.data, this.fromHtml = !1))
				}
			}]), i
		}();
	t.fn.multipleSelect = function(n) {
		for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) r[u - 1] = arguments[u];
		var o;
		return this.each((function(i, u) {
			var s = t(u),
				l = s.data("multipleSelect"),
				a = t.extend({}, s.data(), "object" === e(n) && n);
			if (l || (l = new ur(s, a), s.data("multipleSelect", l)), "string" == typeof n) {
				var c;
				if (t.inArray(n, pe.METHODS) < 0) throw new Error("Unknown method: ".concat(n));
				o = (c = l)[n].apply(c, r), "destroy" === n && s.removeData("multipleSelect")
			} else l.init()
		})), void 0 !== o ? o : this
	}, t.fn.multipleSelect.defaults = pe.DEFAULTS, t.fn.multipleSelect.locales = pe.LOCALES, t.fn.multipleSelect.methods = pe.METHODS
}));