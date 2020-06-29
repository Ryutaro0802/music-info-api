const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

app.get("/api/v1", function (req, res) {
  res.json({
    message: "Hello,world",
  })
})

app.get("/api/v1/releaseInfo", function (req, res) {
  res.json([
    {
      title: "人生ふたり坂",
      artist: "内川ひろ美",
      releaseDate: "2020/07/03",
      price: "1,200円"
    },
    {
      title: "リヴィング・イン・ア・ゴースト・タウン",
      artist: "内川ひろ美",
      releaseDate: "2020/07/03",
      price: "2,420円"
    },
    {
      title: "向日葵～美美津より～",
      artist: "福田真悠実",
      releaseDate: "2020/07/01",
      price: "1,300円"
    },
    {
      title: "大衆は我々を裁けない(Type B)",
      artist: "SHIVA",
      releaseDate: "2020/07/01",
      price: "1,650円"
    },
    {
      title: "THE IDOLM@STER CINDERELLA MASTER 3chord for the Rock!",
      artist: "ゲーム・ミュージック",
      releaseDate: "2020/07/01",
      price: "1,540円"
    }
  ])
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .get('/releaseInfo', (req, res) => res.json({
//     'hoge': 'hoge'
//   }))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
