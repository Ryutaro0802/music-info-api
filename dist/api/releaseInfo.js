"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.album = exports.single = void 0;
exports.single = function (req, res) {
    res.json({
        message: "single",
    });
};
exports.album = function (req, res) {
    res.json({
        message: "album",
    });
};
