(this["webpackJsonpyalantis-test"] =
  this["webpackJsonpyalantis-test"] || []).push([
  [0],
  {
    13: function (e, t, n) {
      e.exports = { container: "App_container__eSJ6i" };
    },
    23: function (e, t, n) {},
    3: function (e, t, n) {
      e.exports = {
        mainContainer: "emloyees_mainContainer__2YhfT",
        container: "emloyees_container__3p7ts",
        section: "emloyees_section__2BbBu",
        sectionLetter: "emloyees_sectionLetter__aRQLY",
        sectionName: "emloyees_sectionName__19m-_",
      };
    },
    31: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(1),
        a = n(0),
        s = n.n(a),
        r = n(7),
        i = n.n(r),
        o = (n(23), n(13)),
        l = n.n(o),
        u = n(2),
        d = n(4),
        j = n(15),
        h = n(16),
        b = n(5),
        m = "SELECT_USER",
        p = "REMOVE_USER",
        f = [];
      var O = function (e) {
          return function (t) {
            t({ type: m, payload: e });
          };
        },
        y = function (e) {
          return function (t) {
            t({ type: p, payload: e });
          };
        },
        v = n(12),
        _ = n.n(v),
        x = n(17),
        N = "GET_USERS",
        g = [];
      var C = Object(d.combineReducers)({
          users: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : g,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              c = t.payload;
            switch (n) {
              case N:
                return [].concat(Object(b.a)(e), Object(b.a)(c));
              default:
                return e;
            }
          },
          selectedUsers: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : f,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              c = t.payload;
            switch (n) {
              case m:
                return [].concat(Object(b.a)(e), [c]);
              case p:
                var a = e.indexOf(c);
                return [].concat(
                  Object(b.a)(e.slice(0, a)),
                  Object(b.a)(e.slice(a + 1))
                );
              default:
                return e;
            }
          },
        }),
        E = Object(d.createStore)(
          C,
          Object(j.composeWithDevTools)(Object(d.applyMiddleware)(h.a))
        ),
        w = n(3),
        L = n.n(w),
        S = function (e) {
          var t = e.user,
            n = Object(u.b)();
          return Object(c.jsxs)(
            "div",
            {
              className: L.a.sectionName,
              children: [
                t.lastName,
                " ",
                t.firstName,
                Object(c.jsx)("input", {
                  type: "checkbox",
                  onChange: function (e) {
                    e.target.checked ? n(O(t)) : n(y(t));
                  },
                }),
              ],
            },
            t.id
          );
        },
        k = function (e) {
          var t = e.char,
            n = Object(u.c)(function (e) {
              return e.users;
            })
              .filter(function (e) {
                return e.lastName[0].toLowerCase() === t.toLowerCase();
              })
              .map(function (e) {
                return Object(c.jsx)(S, { user: e });
              });
          return Object(c.jsxs)(
            "div",
            {
              className: L.a.section,
              children: [
                Object(c.jsx)("div", {
                  className: L.a.sectionLetter,
                  children: t.toUpperCase(),
                }),
                0 === n.length ? "---" : n,
              ],
            },
            t
          );
        },
        R = function () {
          var e = "abcdefghijklmnopqrstuvwxyz".split("").map(function (e) {
            return Object(c.jsx)(k, { char: e });
          });
          return Object(c.jsxs)("div", {
            className: L.a.mainContainer,
            children: [
              Object(c.jsx)("h1", { children: "Employees" }),
              Object(c.jsx)("div", { className: L.a.container, children: e }),
            ],
          });
        },
        T = n(6),
        U = n.n(T),
        B = function (e) {
          var t = Object(u.c)(function (e) {
            return e.selectedUsers;
          }).map(function (e) {
            return Object(c.jsxs)(
              "div",
              {
                className: U.a.section,
                children: [
                  Object(c.jsxs)("div", {
                    className: U.a.sectionName,
                    children: [e.firstName, " ", e.lastName, " -"],
                  }),
                  Object(c.jsx)("div", { children: e.dob }),
                ],
              },
              e.id
            );
          });
          return Object(c.jsxs)("div", {
            className: U.a.mainContainer,
            children: [
              Object(c.jsx)("h1", { children: "Employees Birthday" }),
              Object(c.jsx)("div", { className: U.a.month, children: "March" }),
              t,
            ],
          });
        };
      var M = function () {
          return Object(c.jsx)(u.a, {
            store: E,
            children: Object(c.jsx)(F, {
              children: Object(c.jsxs)("div", {
                className: l.a.container,
                children: [Object(c.jsx)(R, {}), Object(c.jsx)(B, {})],
              }),
            }),
          });
        },
        F = function (e) {
          var t = Object(u.b)();
          return (
            Object(a.useEffect)(function () {
              t(
                (function () {
                  var e = Object(x.a)(
                    _.a.mark(function e(t) {
                      var n, c;
                      return _.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                fetch(
                                  "https://yalantis-react-school-api.yalantis.com/api/task0/users"
                                )
                              );
                            case 2:
                              return (n = e.sent), (e.next = 5), n.json();
                            case 5:
                              (c = e.sent), t({ type: N, payload: c });
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            }, []),
            Object(c.jsx)("div", { children: e.children })
          );
        },
        I = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 32))
              .then(function (t) {
                var n = t.getCLS,
                  c = t.getFID,
                  a = t.getFCP,
                  s = t.getLCP,
                  r = t.getTTFB;
                n(e), c(e), a(e), s(e), r(e);
              });
        };
      i.a.render(
        Object(c.jsx)(s.a.StrictMode, { children: Object(c.jsx)(M, {}) }),
        document.getElementById("root")
      ),
        I();
    },
    6: function (e, t, n) {
      e.exports = {
        mainContainer: "employees-birthday_mainContainer__14lOM",
        month: "employees-birthday_month__3IRYh",
        section: "employees-birthday_section__3Pgqy",
        sectionName: "employees-birthday_sectionName__3Ani6",
      };
    },
  },
  [[31, 1, 2]],
]);
//# sourceMappingURL=main.f7d6c191.chunk.js.map
