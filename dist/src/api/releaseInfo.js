"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.album = exports.single = void 0;
var singleReleaseInfo_json_1 = __importDefault(require("../../public/singleReleaseInfo.json"));
exports.single = function (req, res) {
    res.json({
        message: singleReleaseInfo_json_1.default,
    });
};
exports.album = function (req, res) {
    res.json({
        message: "album",
    });
};
