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
        title: "emloyees_title__XwgAF",
        container: "emloyees_container__3p7ts",
        section: "emloyees_section__2BbBu",
        sectionLetter: "emloyees_sectionLetter__aRQLY",
        sectionName: "emloyees_sectionName__19m-_",
      };
    },
    31: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        c = n(0),
        s = n.n(c),
        r = n(7),
        i = n.n(r),
        o = (n(23), n(13)),
        l = n.n(o),
        u = n(2),
        d = n(4),
        j = n(15),
        m = n(16),
        h = n(5),
        b = "SELECT_USER",
        p = "REMOVE_USER",
        f = [];
      var y = function (e) {
          return function (t) {
            t({ type: b, payload: e });
          };
        },
        O = function (e) {
          return function (t) {
            t({ type: p, payload: e });
          };
        },
        _ = n(12),
        v = n.n(_),
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
              a = t.payload;
            switch (n) {
              case N:
                return [].concat(Object(h.a)(e), Object(h.a)(a));
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
              a = t.payload;
            switch (n) {
              case b:
                return [].concat(Object(h.a)(e), [a]);
              case p:
                var c = e.indexOf(a);
                return [].concat(
                  Object(h.a)(e.slice(0, c)),
                  Object(h.a)(e.slice(c + 1))
                );
              default:
                return e;
            }
          },
        }),
        S = Object(d.createStore)(
          C,
          Object(j.composeWithDevTools)(Object(d.applyMiddleware)(m.a))
        ),
        w = n(3),
        E = n.n(w),
        L = function (e) {
          var t = e.user,
            n = Object(u.b)();
          return Object(a.jsxs)(
            "div",
            {
              className: E.a.sectionName,
              children: [
                t.lastName,
                " ",
                t.firstName,
                Object(a.jsx)("input", {
                  type: "checkbox",
                  onChange: function (e) {
                    e.target.checked ? n(y(t)) : n(O(t));
                  },
                }),
              ],
            },
            t.id
          );
        },
        M = function (e) {
          var t = e.char,
            n = Object(u.c)(function (e) {
              return e.users;
            })
              .filter(function (e) {
                return e.lastName[0].toLowerCase() === t.toLowerCase();
              })
              .map(function (e) {
                return Object(a.jsx)(L, { user: e }, e.id);
              });
          return Object(a.jsxs)(
            "div",
            {
              className: E.a.section,
              children: [
                Object(a.jsx)("div", {
                  className: E.a.sectionLetter,
                  children: t.toUpperCase(),
                }),
                0 === n.length ? "---" : n,
              ],
            },
            t
          );
        },
        k = function () {
          var e = "abcdefghijklmnopqrstuvwxyz".split("").map(function (e) {
            return Object(a.jsx)(M, { char: e }, e);
          });
          return Object(a.jsxs)("div", {
            className: E.a.mainContainer,
            children: [
              Object(a.jsx)("h1", {
                className: E.a.title,
                children: "Employees",
              }),
              Object(a.jsx)("div", { className: E.a.container, children: e }),
            ],
          });
        },
        F = n(6),
        D = n.n(F),
        R = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        J = function (e) {
          var t = new Date(e.date),
            n = t.getDate(),
            c = R[t.getMonth()],
            s = t.getFullYear();
          return Object(a.jsx)("div", {
            children: "".concat(n, " ").concat(c, ", ").concat(s, " year"),
          });
        };
      var T = function () {
        var e = (function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              for (
                var n, a = new Date(e.dob), c = R[a.getMonth()], s = 0;
                s < t.length;
                s++
              )
                if (t[s].name === c) {
                  n = t[s];
                  break;
                }
              n ? n.users.push(e) : t.push({ name: c, users: [e] });
            }),
            t
          );
        })(
          Object(u.c)(function (e) {
            return e.selectedUsers;
          })
        ).map(function (e) {
          var t = e.users.map(function (e) {
            return Object(a.jsxs)(
              "div",
              {
                className: D.a.section,
                children: [
                  Object(a.jsxs)("div", {
                    className: D.a.sectionName,
                    children: [e.lastName, " ", e.firstName, " -"],
                  }),
                  Object(a.jsx)(J, { date: e.dob }),
                ],
              },
              e.id
            );
          });
          return Object(a.jsxs)(
            "div",
            {
              children: [
                Object(a.jsx)("div", {
                  className: D.a.month,
                  children: e.name,
                }),
                t,
              ],
            },
            e.name
          );
        });
        return Object(a.jsxs)("div", {
          className: D.a.mainContainer,
          children: [
            Object(a.jsx)("h1", {
              className: D.a.title,
              children: "Employees Birthday",
            }),
            0 !== e.length
              ? e
              : Object(a.jsx)("div", {
                  className: D.a.selectedStatus,
                  children: "No selected employees",
                }),
          ],
        });
      };
      var U = function () {
          return Object(a.jsx)(u.a, {
            store: S,
            children: Object(a.jsx)(A, {
              children: Object(a.jsxs)("div", {
                className: l.a.container,
                children: [Object(a.jsx)(k, {}), Object(a.jsx)(T, {})],
              }),
            }),
          });
        },
        A = function (e) {
          var t = Object(u.b)();
          return (
            Object(c.useEffect)(function () {
              t(
                (function () {
                  var e = Object(x.a)(
                    v.a.mark(function e(t) {
                      var n, a;
                      return v.a.wrap(function (e) {
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
                              (a = e.sent), t({ type: N, payload: a });
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
            Object(a.jsx)("div", { children: e.children })
          );
        },
        B = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 32))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  c = t.getFCP,
                  s = t.getLCP,
                  r = t.getTTFB;
                n(e), a(e), c(e), s(e), r(e);
              });
        };
      i.a.render(
        Object(a.jsx)(s.a.StrictMode, { children: Object(a.jsx)(U, {}) }),
        document.getElementById("root")
      ),
        B();
    },
    6: function (e, t, n) {
      e.exports = {
        mainContainer: "employees-birthday_mainContainer__14lOM",
        title: "employees-birthday_title__y_ZND",
        selectedStatus: "employees-birthday_selectedStatus__SMFZG",
        month: "employees-birthday_month__3IRYh",
        section: "employees-birthday_section__3Pgqy",
        sectionName: "employees-birthday_sectionName__3Ani6",
      };
    },
  },
  [[31, 1, 2]],
]);
//# sourceMappingURL=main.d25f4879.chunk.js.map
