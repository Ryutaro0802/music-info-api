const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const releaseInfoSingle = require('./api/releaseInfo')

app.get("/api/v1/releaseInfo/single", releaseInfoSingle.single)

app.get("/api/v1/releaseInfo/album", releaseInfoSingle.album)

app.get("/api/v1/releaseInfo",  (req, res) => {
  res.json([
    {
      title: "人生ふたり坂",
      artist: "内川ひろ美",
      releaseDate: "2020/07/03",
      migSrc: "https://m.media-amazon.com/images/I/318h4iu0jKL._SL160_.jpg",
      price: "1,200円",
    },
    {
      title: "リヴィング・イン・ア・ゴースト・タウン",
      artist: "ザ・ローリング・ストーンズ",
      releaseDate: "2020/07/03",
      migSrc: "https://m.media-amazon.com/images/I/51Mv2OA7hAL._SL160_.jpg",
      price: "2,420円",
    },
    {
      title: "向日葵～美美津より～",
      artist: "福田真悠実",
      releaseDate: "2020/07/01",
      migSrc: "https://m.media-amazon.com/images/I/51tqSm8q6sL._SL160_.jpg",
      price: "1,300円",
    },
    {
      title: "大衆は我々を裁けない(Type B)",
      artist: "SHIVA",
      releaseDate: "2020/07/01",
      migSrc: "https://m.media-amazon.com/images/I/61kkT939T-L._SL160_.jpg",
      price: "1,650円",
    },
    {
      title: "THE IDOLM@STER CINDERELLA MASTER 3chord for the Rock!",
      artist: "ゲーム・ミュージック",
      releaseDate: "2020/07/01",
      migSrc: "https://m.media-amazon.com/images/I/61Bvjt7JMJL._SL160_.jpg",
      price: "1,540円",
    },
  ]);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .get('/releaseInfo', (req, res) => res.json({
//     'hoge': 'hoge'
//   }))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
