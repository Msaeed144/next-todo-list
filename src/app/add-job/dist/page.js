'use client';
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var uuid_1 = require("uuid");
function AddJob() {
    var _a = react_1.useState(''), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(''), desc = _b[0], setDesc = _b[1];
    var _c = react_1.useState(false), status = _c[0], setStatus = _c[1];
    var _d = react_1.useState([]), jobs = _d[0], setJobs = _d[1];
    var _e = react_1.useState(false), showPopup = _e[0], setShowPopup = _e[1];
    var _f = react_1.useState(null), error = _f[0], setError = _f[1];
    react_1.useEffect(function () {
        var savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
        setJobs(savedJobs);
    }, []);
    react_1.useEffect(function () {
        if (jobs.length > 0) {
            localStorage.setItem('jobs', JSON.stringify(jobs));
        }
    }, [jobs]);
    var titleHandler = function (event) {
        setTitle(event.target.value);
    };
    var descHandler = function (event) {
        setDesc(event.target.value);
    };
    var addJobHandler = function (e) {
        e.preventDefault();
        setError(null);
        if (title.trim() === '' || desc.trim() === '') {
            setError('عنوان و توضیحات باید پر شوند!');
            setTimeout(function () { return setError(null); }, 2000);
            return;
        }
        var newJob = { id: uuid_1.v4(), title: title, desc: desc, status: status };
        setJobs(function (prevJobs) { return __spreadArrays(prevJobs, [newJob]); });
        setTitle('');
        setDesc('');
        setShowPopup(true);
        setTimeout(function () { return setShowPopup(false); }, 2000);
    };
    return (React.createElement("div", { className: "relative" },
        React.createElement("form", { className: " w-11/12 mx-auto mt-3 shadow-2xl p-3 rounded-xl", onSubmit: addJobHandler },
            React.createElement("h2", { className: "text-center mb-4" }, "\u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u062A\u0633\u06A9"),
            React.createElement("div", { className: "flex flex-col" },
                React.createElement("div", { className: "flex sm:flex-row flex-col justify-around mb-3" },
                    React.createElement("div", { className: 'flex sm:flex-row flex-col' },
                        React.createElement("label", { htmlFor: "title" }, "\u0639\u0646\u0648\u0627\u0646:"),
                        React.createElement("input", { className: "bg-gray-400 rounded p-1 focus:border-none mr-2 placeholder:text-slate-700", placeholder: "\u0639\u0646\u0648\u0627\u0646 \u06A9\u0627\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", type: "text", name: "title", id: "title", onChange: titleHandler, value: title })),
                    React.createElement("div", { className: 'flex sm:flex-row flex-col' },
                        React.createElement("label", { htmlFor: "desc" }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A:"),
                        React.createElement("input", { className: "bg-gray-400 rounded p-1 focus:border-none mr-2 placeholder:text-slate-700", placeholder: "\u062C\u0632\u0626\u06CC\u0627\u062A \u06A9\u0627\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", type: "text", name: "desc", id: "desc", onChange: descHandler, value: desc }))),
                React.createElement("button", { type: "submit", className: "w-2/3 mx-auto my-3 bg-green-800 p-1 rounded text-sm align-center text-center text-white" }, "\u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646"))),
        showPopup && (React.createElement("div", { className: "absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75" },
            React.createElement("div", { className: "bg-white p-4 rounded-lg shadow-lg text-center" },
                React.createElement("p", { className: "text-lg font-semibold text-green-600" }, "\u062A\u0633\u06A9 \u062C\u062F\u06CC\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0636\u0627\u0641\u0647 \u0634\u062F!")))),
        error && (React.createElement("div", { className: "absolute top-0 left-0 w-full flex items-center justify-center bg-red-800 bg-opacity-75" },
            React.createElement("div", { className: "bg-white p-4 rounded-lg shadow-lg text-center" },
                React.createElement("p", { className: "text-lg font-semibold text-red-600" }, error))))));
}
exports["default"] = AddJob;
