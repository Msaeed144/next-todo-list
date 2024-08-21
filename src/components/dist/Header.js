'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
function Header() {
    var _a = react_1.useState(false), hambur = _a[0], setHambur = _a[1];
    var hamburgerHandler = function () {
        if (hambur == false) {
            setHambur(true);
        }
        else {
            setHambur(false);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "w-full mx-auto  py-2 text-xs sm:flex hidden" },
            React.createElement("div", null,
                React.createElement("ul", { className: "" },
                    React.createElement("li", { className: "xl:mx-8 lg:mx-8 text-white bg-purple-700 p-3 rounded-xl hover:bg-purple-500 hover:cursor-pointer md:text-sm md:mx-3" },
                        React.createElement(link_1["default"], { href: "/" }, "\u0646\u0633\u06CC\u0628\u0627 \u062A\u0648\u062F\u0648\uD83D\uDCD1")))),
            React.createElement("div", null,
                React.createElement("ul", { className: "flex justify-around" },
                    React.createElement("li", { className: " lg:mx-9 xl:mx-9 md:mx-1 p-3 rounded-xl hover:bg-purple-700 hover:cursor-pointer hover:text-white transition-all" },
                        React.createElement(link_1["default"], { href: "/" }, "\u062E\u0627\u0646\u0647")),
                    React.createElement("li", { className: "mx-9 p-3 rounded-xl hover:bg-purple-700 hover:cursor-pointer hover:text-white transition-all" },
                        React.createElement(link_1["default"], { href: "/add-job" }, "\u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u0633\u06A9")),
                    React.createElement("li", { className: "mx-9 p-3 rounded-xl hover:bg-purple-700 hover:cursor-pointer hover:text-white transition-all" },
                        React.createElement(link_1["default"], { href: "/about-us" }, "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"))))),
        React.createElement("header", { className: " flex sm:hidden m-4 justify-end z-10 relative" },
            React.createElement("div", { id: "hamberger", onClick: hamburgerHandler },
                React.createElement("span", { className: " bg-purple-700 w-5 h-1 block rounded-xl mb-1 " + (hambur ? "rotate-45 translate-y-2" : "") + " transition-all" }),
                React.createElement("span", { className: " bg-purple-700 w-5 h-1 block rounded-xl mb-1 " + (hambur ? "hidden" : "") + " transition-all" }),
                React.createElement("span", { className: " bg-purple-700 w-5 h-1 block rounded-xl " + (hambur ? "rotate-135 " : "") + " transition-all" }))),
        React.createElement("div", { className: "h-full w-full absolute " + (hambur ? "block" : "hidden transition-all") + " block sm:hidden bg-white top-0 z-0" },
            React.createElement("ul", null,
                React.createElement("li", { className: "my-4 text-2xl" },
                    React.createElement(link_1["default"], { href: "/" },
                        React.createElement("p", null, "\u062E\u0627\u0646\u0647"))),
                React.createElement("li", { className: "mb-4 text-2xl" },
                    React.createElement(link_1["default"], { href: "/add-job" },
                        React.createElement("p", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u0633\u06A9"))),
                React.createElement("li", { className: "text-2xl" },
                    React.createElement(link_1["default"], { href: "/about-us" },
                        React.createElement("p", null, "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627")))))));
}
exports["default"] = Header;
