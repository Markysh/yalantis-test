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
        m = n(16),
        h = n(5),
        b = "SELECT_USER",
        f = "REMOVE_USER",
        p = JSON.parse(localStorage.getItem("selectedUsers")) || [];
      var y = function (e) {
          return function (t) {
            t({ type: b, payload: e });
          };
        },
        O = function (e) {
          return function (t) {
            t({ type: f, payload: e });
          };
        },
        v = n(12),
        _ = n.n(v),
        x = n(17),
        g = "GET_USERS",
        N = [];
      var S = Object(d.combineReducers)({
          users: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : N,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              c = t.payload;
            switch (n) {
              case g:
                return [].concat(Object(h.a)(e), Object(h.a)(c));
              default:
                return e;
            }
          },
          selectedUsers: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : p,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              c = t.payload;
            switch (n) {
              case b:
                return [].concat(Object(h.a)(e), [c]);
              case f:
                for (var a = -1, s = 0; s < e.length; s++)
                  if (c.id === e[s].id) {
                    a = s;
                    break;
                  }
                return [].concat(
                  Object(h.a)(e.slice(0, a)),
                  Object(h.a)(e.slice(a + 1))
                );
              default:
                return e;
            }
          },
        }),
        C = Object(d.createStore)(
          S,
          Object(j.composeWithDevTools)(Object(d.applyMiddleware)(m.a))
        );
      C.subscribe(function () {
        var e = C.getState().selectedUsers;
        localStorage.setItem("selectedUsers", JSON.stringify(e));
      });
      var w = n(3),
        E = n.n(w),
        k = function (e) {
          var t = e.user,
            n = Object(u.b)(),
            a = Object(u.c)(function (e) {
              return e.selectedUsers;
            }).some(function (e) {
              return e.id === t.id;
            });
          return Object(c.jsxs)(
            "div",
            {
              className: E.a.sectionName,
              children: [
                t.lastName,
                " ",
                t.firstName,
                Object(c.jsx)("input", {
                  type: "checkbox",
                  onChange: function (e) {
                    console.log(e.target.checked),
                      e.target.checked ? n(y(t)) : n(O(t));
                  },
                  checked: a,
                }),
              ],
            },
            t.id
          );
        },
        U = function (e) {
          var t = e.char,
            n = Object(u.c)(function (e) {
              return e.users;
            })
              .filter(function (e) {
                return e.lastName[0].toLowerCase() === t.toLowerCase();
              })
              .map(function (e) {
                return Object(c.jsx)(k, { user: e }, e.id);
              });
          return Object(c.jsxs)(
            "div",
            {
              className: E.a.section,
              children: [
                Object(c.jsx)("div", {
                  className: E.a.sectionLetter,
                  children: t.toUpperCase(),
                }),
                0 === n.length ? "---" : n,
              ],
            },
            t
          );
        },
        L = function () {
          var e = "abcdefghijklmnopqrstuvwxyz".split("").map(function (e) {
            return Object(c.jsx)(U, { char: e }, e);
          });
          return Object(c.jsxs)("div", {
            className: E.a.mainContainer,
            children: [
              Object(c.jsx)("h1", {
                className: E.a.title,
                children: "Employees",
              }),
              Object(c.jsx)("div", { className: E.a.container, children: e }),
            ],
          });
        },
        M = n(6),
        F = n.n(M),
        J = [
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
        D = function (e) {
          var t = new Date(e.date),
            n = t.getDate(),
            a = J[t.getMonth()],
            s = t.getFullYear();
          return Object(c.jsx)("div", {
            children: "".concat(n, " ").concat(a, ", ").concat(s, " year"),
          });
        };
      var R = function () {
        var e = (function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              for (
                var n, c = new Date(e.dob), a = J[c.getMonth()], s = 0;
                s < t.length;
                s++
              )
                if (t[s].name === a) {
                  n = t[s];
                  break;
                }
              n ? n.users.push(e) : t.push({ name: a, users: [e] });
            }),
            t
          );
        })(
          Object(u.c)(function (e) {
            return e.selectedUsers;
          })
        ).map(function (e) {
          var t = e.users.map(function (e) {
            return Object(c.jsxs)(
              "div",
              {
                className: F.a.section,
                children: [
                  Object(c.jsxs)("div", {
                    className: F.a.sectionName,
                    children: [e.lastName, " ", e.firstName, " -"],
                  }),
                  Object(c.jsx)(D, { date: e.dob }),
                ],
              },
              e.id
            );
          });
          return Object(c.jsxs)(
            "div",
            {
              children: [
                Object(c.jsx)("div", {
                  className: F.a.month,
                  children: e.name,
                }),
                t,
              ],
            },
            e.name
          );
        });
        return Object(c.jsxs)("div", {
          className: F.a.mainContainer,
          children: [
            Object(c.jsx)("h1", {
              className: F.a.title,
              children: "Employees Birthday",
            }),
            0 !== e.length
              ? e
              : Object(c.jsx)("div", {
                  className: F.a.selectedStatus,
                  children: "No selected employees",
                }),
          ],
        });
      };
      var T = function () {
          return Object(c.jsx)(u.a, {
            store: C,
            children: Object(c.jsx)(A, {
              children: Object(c.jsxs)("div", {
                className: l.a.container,
                children: [Object(c.jsx)(L, {}), Object(c.jsx)(R, {})],
              }),
            }),
          });
        },
        A = function (e) {
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
                              (c = e.sent), t({ type: g, payload: c });
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
        B = function (e) {
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
        Object(c.jsx)(s.a.StrictMode, { children: Object(c.jsx)(T, {}) }),
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
//# sourceMappingURL=main.a1fcfac2.chunk.js.map
