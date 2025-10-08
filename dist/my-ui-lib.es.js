import H, { forwardRef as ce, useState as M, useEffect as X, createContext as ie, useCallback as q, useContext as ue } from "react";
var N = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function de() {
  if (z) return k;
  z = 1;
  var n = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function l(u, a, o) {
    var f = null;
    if (o !== void 0 && (f = "" + o), a.key !== void 0 && (f = "" + a.key), "key" in a) {
      o = {};
      for (var m in a)
        m !== "key" && (o[m] = a[m]);
    } else o = a;
    return a = o.ref, {
      $$typeof: n,
      type: u,
      key: f,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return k.Fragment = d, k.jsx = l, k.jsxs = l, k;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function fe() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case A:
          return "Profiler";
        case O:
          return "StrictMode";
        case re:
          return "Suspense";
        case te:
          return "SuspenseList";
        case ae:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case S:
            return "Portal";
          case K:
            return e.displayName || "Context";
          case b:
            return (e._context.displayName || "Context") + ".Consumer";
          case ee:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ne:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case P:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function l(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var s = r.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), d(e);
      }
    }
    function u(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = $.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function s() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function C() {
      var e = n(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, r, s, c, g, W) {
      var i = s.ref;
      return e = {
        $$typeof: h,
        type: e,
        key: r,
        props: s,
        _owner: c
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: C
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, s, c, g, W) {
      var i = r.children;
      if (i !== void 0)
        if (c)
          if (se(i)) {
            for (c = 0; c < i.length; c++)
              y(i[c]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(i);
      if (B.call(r, "key")) {
        i = n(e);
        var v = Object.keys(r).filter(function(le) {
          return le !== "key";
        });
        c = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", V[i + c] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          i,
          v,
          i
        ), V[i + c] = !0);
      }
      if (i = null, s !== void 0 && (l(s), i = "" + s), f(r) && (l(r.key), i = "" + r.key), "key" in r) {
        s = {};
        for (var I in r)
          I !== "key" && (s[I] = r[I]);
      } else s = r;
      return i && m(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(
        e,
        i,
        s,
        a(),
        g,
        W
      );
    }
    function y(e) {
      x(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === P && (e._payload.status === "fulfilled" ? x(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function x(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    var _ = H, h = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), K = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), $ = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, se = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var F, D = {}, L = _.react_stack_bottom_frame.bind(
      _,
      o
    )(), U = Y(u(o)), V = {};
    R.Fragment = w, R.jsx = function(e, r, s) {
      var c = 1e4 > $.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        s,
        !1,
        c ? Error("react-stack-top-frame") : L,
        c ? Y(u(e)) : U
      );
    }, R.jsxs = function(e, r, s) {
      var c = 1e4 > $.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        s,
        !0,
        c ? Error("react-stack-top-frame") : L,
        c ? Y(u(e)) : U
      );
    };
  })()), R;
}
var G;
function me() {
  return G || (G = 1, process.env.NODE_ENV === "production" ? N.exports = de() : N.exports = fe()), N.exports;
}
var t = me();
const pe = "_wrapper_14jjn_1", _e = "_label_14jjn_3", be = "_inputWrap_14jjn_5", he = "_input_14jjn_5", ve = "_iconButton_14jjn_9", je = "_clearButton_14jjn_11", j = {
  wrapper: pe,
  label: _e,
  inputWrap: be,
  input: he,
  iconButton: ve,
  clearButton: je
}, Ee = ce((n, d) => {
  const { type: l = "text", clearable: u = !1, label: a, value: o, defaultValue: f, onChange: m, ...C } = n, [E, T] = M(l === "password"), [y, x] = M(
    () => typeof o == "string" ? o : typeof f == "string" ? f : ""
  ), _ = o !== void 0, h = _ ? o : y, S = () => {
    _ || x(""), m && m({ target: { value: "" } });
  }, w = (b) => {
    _ || x(b.target.value), m && m(b);
  }, O = () => T((b) => !b), A = l === "password" ? E ? "password" : "text" : l;
  return /* @__PURE__ */ t.jsxs("div", { className: j.wrapper, children: [
    a && /* @__PURE__ */ t.jsx("label", { className: j.label, children: a }),
    /* @__PURE__ */ t.jsxs("div", { className: j.inputWrap, children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          ref: d,
          className: j.input,
          type: A,
          value: h,
          onChange: w,
          ...C
        }
      ),
      l === "password" && /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          "aria-label": E ? "Show password" : "Hide password",
          onClick: O,
          className: j.iconButton,
          children: E ? (
            // eye icon
            /* @__PURE__ */ t.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": !0, children: [
              /* @__PURE__ */ t.jsx("path", { d: "M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z", stroke: "currentColor", strokeWidth: "1.5" }),
              /* @__PURE__ */ t.jsx("circle", { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.5" })
            ] })
          ) : (
            // eye-off
            /* @__PURE__ */ t.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": !0, children: [
              /* @__PURE__ */ t.jsx("path", { d: "M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a19.8 19.8 0 0 1 4.11-4.86", stroke: "currentColor", strokeWidth: "1.5" }),
              /* @__PURE__ */ t.jsx("path", { d: "M1 1l22 22", stroke: "currentColor", strokeWidth: "1.5" })
            ] })
          )
        }
      ),
      u && h && h.length > 0 && /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Clear",
          onClick: S,
          className: j.clearButton,
          children: "×"
        }
      )
    ] })
  ] });
});
Ee.displayName = "Input";
function xe({ id: n, message: d, type: l = "info", duration: u = 3e3, onClose: a, canClose: o = !0 }) {
  return X(() => {
    const f = setTimeout(() => a(n), u);
    return () => clearTimeout(f);
  }, [n, u, a]), /* @__PURE__ */ t.jsxs("div", { className: `toast toast-${l}`, role: "status", "aria-live": "polite", children: [
    /* @__PURE__ */ t.jsx("div", { className: "toast-body", children: d }),
    o && /* @__PURE__ */ t.jsx("button", { className: "toast-close", "aria-label": "Close", onClick: () => a(n), children: "×" })
  ] });
}
const Z = ie(null), Pe = () => {
  const n = ue(Z);
  if (!n) throw new Error("useToasts must be used within ToastProvider");
  return n;
}, $e = ({ children: n }) => {
  const [d, l] = M([]), u = q((o) => {
    const f = Math.random().toString(36).slice(2, 9);
    l((m) => [...m, { id: f, ...o }]);
  }, []), a = q((o) => {
    l((f) => f.filter((m) => m.id !== o));
  }, []);
  return /* @__PURE__ */ t.jsxs(Z.Provider, { value: { push: u }, children: [
    n,
    /* @__PURE__ */ t.jsx("div", { className: "toast-wrapper", "aria-live": "polite", "aria-atomic": "true", children: d.map((o) => /* @__PURE__ */ t.jsx("div", { className: "toast-show", children: /* @__PURE__ */ t.jsx(
      xe,
      {
        id: o.id,
        message: o.message,
        type: o.type,
        duration: o.duration,
        onClose: a,
        canClose: o.canClose
      }
    ) }, o.id)) })
  ] });
}, we = "_backdrop_111m7_1", ke = "_show_111m7_3", Re = "_panel_111m7_7", Te = "_open_111m7_9", ye = "_menu_111m7_13", ge = "_item_111m7_15", Ne = "_row_111m7_17", Ce = "_labelBtn_111m7_19", Se = "_arrow_111m7_21", Oe = "_sub_111m7_23", p = {
  backdrop: we,
  show: ke,
  panel: Re,
  open: Te,
  menu: ye,
  item: ge,
  row: Ne,
  labelBtn: Ce,
  arrow: Se,
  sub: Oe
};
function Ye({ open: n, onClose: d, items: l, width: u = 320 }) {
  return X(() => (n ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [n]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `${p.backdrop} ${n ? p.show : ""}`,
        onClick: d,
        "data-testid": "backdrop"
      }
    ),
    /* @__PURE__ */ t.jsx("aside", { className: `${p.panel} ${n ? p.open : ""}`, style: { width: u }, children: /* @__PURE__ */ t.jsx("nav", { children: /* @__PURE__ */ t.jsx("ul", { className: p.menu, children: l.map((a) => /* @__PURE__ */ t.jsx(Q, { node: a }, a.id)) }) }) })
  ] });
}
const Q = ({ node: n }) => {
  const [d, l] = H.useState(!1), u = n.children && n.children.length > 0;
  return /* @__PURE__ */ t.jsxs("li", { className: p.item, children: [
    /* @__PURE__ */ t.jsxs("div", { className: p.row, children: [
      /* @__PURE__ */ t.jsx("button", { className: p.labelBtn, onClick: () => {
        n.onClick && n.onClick(), u && l((a) => !a);
      }, children: n.label }),
      u && /* @__PURE__ */ t.jsx("button", { className: p.arrow, onClick: () => l((a) => !a), "aria-expanded": d, children: d ? "▾" : "▸" })
    ] }),
    u && d && /* @__PURE__ */ t.jsx("ul", { className: p.sub, children: n.children.map((a) => /* @__PURE__ */ t.jsx(Q, { node: a }, a.id)) })
  ] });
};
export {
  Ee as Input,
  Ye as SidebarMenu,
  $e as ToastProvider,
  Pe as useToasts
};
