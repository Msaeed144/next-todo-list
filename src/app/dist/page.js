'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
function Home() {
    var _a = react_1.useState([]), jobs = _a[0], setJobs = _a[1];
    var _b = react_1.useState(null), editMode = _b[0], setEditMode = _b[1];
    var _c = react_1.useState(''), editedTitle = _c[0], setEditedTitle = _c[1];
    react_1.useEffect(function () {
        var savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
        setJobs(savedJobs);
    }, []);
    var handleCheckboxChange = function (index) {
        var updatedJobs = jobs.map(function (job, i) {
            if (i === index) {
                return __assign(__assign({}, job), { status: !job.status });
            }
            return job;
        });
        setJobs(updatedJobs);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    };
    var handleDelete = function (index) {
        var updatedJobs = jobs.filter(function (_, i) { return i !== index; });
        setJobs(updatedJobs);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    };
    var handleEdit = function (index) {
        setEditMode(index);
        setEditedTitle(jobs[index].title);
    };
    var handleEditChange = function (e) {
        setEditedTitle(e.target.value);
    };
    var handleEditSubmit = function (index) {
        var updatedJobs = jobs.map(function (job, i) {
            if (i === index) {
                return __assign(__assign({}, job), { title: editedTitle });
            }
            return job;
        });
        setJobs(updatedJobs);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        setEditMode(null);
    };
    return (React.createElement("main", { className: "w-3/4 sm:w-1/2 mx-auto mt-2 flex flex-col items-center" },
        React.createElement("div", { className: "text-center" },
            React.createElement("h1", { className: "text-2xl mb-2 text-slate-800" }, "\u0635\u0641\u062D\u0647 \u06CC \u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0634\u062E\u0635\u06CC"),
            React.createElement("h2", { className: "text-xl mt-1 text-slate-800" }, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0647\u0627"),
            React.createElement("p", { className: "text-xs" }, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A")),
        React.createElement("div", { className: "mt-3 w-full bg-gray-300 shadow-md border-1 border-gray-400 rounded-lg" },
            React.createElement("h1", { className: "text-center" }, "\u0644\u06CC\u0633\u062A \u06A9\u0627\u0631 \u0647\u0627"),
            React.createElement("ul", { className: "list-none" }, jobs &&
                jobs.map(function (job, index) { return (React.createElement("li", { className: "m-2 flex items-center justify-between " + (job.status ? 'line-through' : ''), key: job.id },
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement("input", { type: "checkbox", className: "me-3", checked: job.status, onChange: function () { return handleCheckboxChange(index); } }),
                        editMode === index ? (React.createElement("input", { type: "text", value: editedTitle, onChange: handleEditChange, onBlur: function () { return handleEditSubmit(index); }, className: "text-purple-700 p-1 rounded-lg" })) : (React.createElement(link_1["default"], { href: "/" + job.id },
                            React.createElement("p", { className: "text-purple-700 p-1 rounded-lg hover:text-purple-500 hover:bg-purple-100" }, job.title)))),
                    React.createElement("div", { className: ' flex flex-row-reverse items-center' },
                        React.createElement("svg", { onClick: function () { return handleDelete(index); }, className: " mx-1 hover:cursor-pointer hover:fill-purple-400", fill: "#7e22ce", height: "20px", width: "20px", version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 330 330", stroke: "#7e22ce" },
                            React.createElement("g", { id: "SVGRepo_bgCarrier", "stroke-width": "0" }),
                            React.createElement("g", { id: "SVGRepo_tracerCarrier", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            React.createElement("g", { id: "SVGRepo_iconCarrier" },
                                React.createElement("g", { id: "XMLID_6_" },
                                    React.createElement("g", { id: "XMLID_11_" },
                                        React.createElement("path", { d: "M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105 C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75 S266.355,300,225,300z" })),
                                    React.createElement("g", { id: "XMLID_18_" },
                                        React.createElement("path", { d: "M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45 H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z" })),
                                    React.createElement("g", { id: "XMLID_23_" },
                                        React.createElement("path", { d: "M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606 c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225 l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z" }))))),
                        React.createElement("svg", { onClick: function () { return handleEdit(index); }, width: "26px", height: "26px", viewBox: "0 -0.5 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("g", { id: "SVGRepo_bgCarrier", "stroke-width": "0" }),
                            React.createElement("g", { id: "SVGRepo_tracerCarrier", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            React.createElement("g", { id: "SVGRepo_iconCarrier" },
                                " ",
                                React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.7 5.12758L19.266 6.37458C19.4172 6.51691 19.5025 6.71571 19.5013 6.92339C19.5002 7.13106 19.4128 7.32892 19.26 7.46958L18.07 8.89358L14.021 13.7226C13.9501 13.8037 13.8558 13.8607 13.751 13.8856L11.651 14.3616C11.3755 14.3754 11.1356 14.1751 11.1 13.9016V11.7436C11.1071 11.6395 11.149 11.5409 11.219 11.4636L15.193 6.97058L16.557 5.34158C16.8268 4.98786 17.3204 4.89545 17.7 5.12758Z", stroke: "#7e22ce", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                                " ",
                                React.createElement("path", { d: "M12.033 7.61865C12.4472 7.61865 12.783 7.28287 12.783 6.86865C12.783 6.45444 12.4472 6.11865 12.033 6.11865V7.61865ZM9.23301 6.86865V6.11865L9.23121 6.11865L9.23301 6.86865ZM5.50001 10.6187H6.25001L6.25001 10.617L5.50001 10.6187ZM5.50001 16.2437L6.25001 16.2453V16.2437H5.50001ZM9.23301 19.9937L9.23121 20.7437H9.23301V19.9937ZM14.833 19.9937V20.7437L14.8348 20.7437L14.833 19.9937ZM18.566 16.2437H17.816L17.816 16.2453L18.566 16.2437ZM19.316 12.4937C19.316 12.0794 18.9802 11.7437 18.566 11.7437C18.1518 11.7437 17.816 12.0794 17.816 12.4937H19.316ZM15.8863 6.68446C15.7282 6.30159 15.2897 6.11934 14.9068 6.2774C14.5239 6.43546 14.3417 6.87397 14.4998 7.25684L15.8863 6.68446ZM18.2319 9.62197C18.6363 9.53257 18.8917 9.13222 18.8023 8.72777C18.7129 8.32332 18.3126 8.06792 17.9081 8.15733L18.2319 9.62197ZM8.30001 16.4317C7.8858 16.4317 7.55001 16.7674 7.55001 17.1817C7.55001 17.5959 7.8858 17.9317 8.30001 17.9317V16.4317ZM15.767 17.9317C16.1812 17.9317 16.517 17.5959 16.517 17.1817C16.517 16.7674 16.1812 16.4317 15.767 16.4317V17.9317ZM12.033 6.11865H9.23301V7.61865H12.033V6.11865ZM9.23121 6.11865C6.75081 6.12461 4.7447 8.13986 4.75001 10.6203L6.25001 10.617C6.24647 8.96492 7.58269 7.62262 9.23481 7.61865L9.23121 6.11865ZM4.75001 10.6187V16.2437H6.25001V10.6187H4.75001ZM4.75001 16.242C4.7447 18.7224 6.75081 20.7377 9.23121 20.7437L9.23481 19.2437C7.58269 19.2397 6.24647 17.8974 6.25001 16.2453L4.75001 16.242ZM9.23301 20.7437H14.833V19.2437H9.23301V20.7437ZM14.8348 20.7437C17.3152 20.7377 19.3213 18.7224 19.316 16.242L17.816 16.2453C17.8195 17.8974 16.4833 19.2397 14.8312 19.2437L14.8348 20.7437ZM19.316 16.2437V12.4937H17.816V16.2437H19.316ZM14.4998 7.25684C14.6947 7.72897 15.0923 8.39815 15.6866 8.91521C16.2944 9.44412 17.1679 9.85718 18.2319 9.62197L17.9081 8.15733C17.4431 8.26012 17.0391 8.10369 16.6712 7.7836C16.2897 7.45165 16.0134 6.99233 15.8863 6.68446L14.4998 7.25684ZM8.30001 17.9317H15.767V16.4317H8.30001V17.9317Z", fill: "#7e22ce" }),
                                " "))))); })))));
}
exports["default"] = Home;
