"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PORT = process.env.PORT || 5000;
var app = express();
var releaseInfoSingle = require("./api/releaseInfo");
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/api/v1/releaseInfo/single", releaseInfoSingle.single);
app.get("/api/v1/releaseInfo/album", releaseInfoSingle.album);
app.get("/api/v1/releaseInfo", function (req, res) {
    res.json({
        "2020/07/03": [
            {
                title: "人生ふたり坂",
                artist: "内川ひろ美",
                migSrc: "https://m.media-amazon.com/images/I/318h4iu0jKL._SL160_.jpg",
                price: "1,200円",
            },
            {
                title: "リヴィング・イン・ア・ゴースト・タウン",
                artist: "ザ・ローリング・ストーンズ",
                migSrc: "https://m.media-amazon.com/images/I/51Mv2OA7hAL._SL160_.jpg",
                price: "2,420円",
            },
        ],
        "20202/01/12": [
            {
                title: "大衆は我々を裁けない(Type B)",
                artist: "SHIVA",
                migSrc: "https://m.media-amazon.com/images/I/61kkT939T-L._SL160_.jpg",
                price: "1,650円",
            },
            {
                title: "THE IDOLM@STER CINDERELLA MASTER 3chord for the Rock!",
                artist: "ゲーム・ミュージック",
                migSrc: "https://m.media-amazon.com/images/I/61Bvjt7JMJL._SL160_.jpg",
                price: "1,540円",
            },
        ],
    });
});
app.listen(PORT, function () { return console.log("Listening on " + PORT); });
