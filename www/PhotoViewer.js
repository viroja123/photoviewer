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
// @ts-ignore
var exec = require('cordova/exec');
var ACTION = {
    NONE: 0,
    DOWNLOAD: 1,
    SHARE: 2,
    COPY_LINK: 3,
    COPY_DATA: 4
};
var SHOW_AS_ACTION = {
    NEVER: 0,
    IF_ROOM: 1,
    ALWAYS: 2,
    WITH_TEXT: 4,
    COLLAPSE_ACTION_VIEW: 8,
};
var DEFAULT_OPTIONS = {
    url: '',
    title: '',
    subtitle: '',
    maxWidth: 0,
    maxHeight: 0,
    menu: [],
    share: false,
    closeButton: true,
    copyToReference: false,
    headers: '',
    picasso: {
        fit: true,
        centerInside: true,
        centerCrop: false
    }
};
var PhotoViewer = /** @class */ (function () {
    function PhotoViewer() {
    }
    PhotoViewer.show = function (options) {
        if (options === void 0) { options = DEFAULT_OPTIONS; }
        options = __assign({}, DEFAULT_OPTIONS, options);
        if (!options.url) {
            // Do nothing
            return;
        }
        var args = [
            options.url,
            options.title,
            options.subtitle,
            options.maxWidth,
            options.maxHeight,
            options.menu,
            options.share,
            options.closeButton,
            options.copyToReference,
            options.headers,
            options.picasso
        ];
        exec(function () { }, function () { }, "PhotoViewer", "show", args);
    };
    PhotoViewer.Action = ACTION;
    PhotoViewer.ShowAsAction = SHOW_AS_ACTION;
    return PhotoViewer;
}());
// @ts-ignore
module.exports = PhotoViewer;
