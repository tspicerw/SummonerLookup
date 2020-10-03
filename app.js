const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const morgan = require("morgan");
// const url = require('url');
// const querystring = require('querystring');
var cors = require("cors");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  const rotationDisplay = () => {
    const championsDataUrl =
      "http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json";
    request({ url: championsDataUrl, json: true }, (error, response1) => {
      let objectArray = Object.values(response1.body.data);

      let rotationUrl =
        "https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=<api-key>";

      request({ url: rotationUrl, json: true }, (error, response) => {
        if (error) {
          console.log(error);
        } else if (response.body.error) {
          console.log(response.body.error);
        } else if (response.body) {
          const dKey = objectArray.reduce((accu, cv) => {
            accu[Number(cv.key)] = cv;
            return accu;
          }, {});

          const rotationData = response.body.freeChampionIds;
          const freeChamp = rotationData.map((cFree) => {
            let cImgName = dKey[cFree].image.full;
            const cImgUrl = `http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${cImgName}`;
            return cImgUrl;
          });

          res.send(freeChamp);
        }
      });
    });
  };
  rotationDisplay();
});

app.post("/dashboard", (req, res) => {
  let summoner = req.body.summonerName;

  // res.send("test");

  const api_key = "";
  const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${api_key}`;

  const summonerLookup = () => {
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        console.log(error);
      } else if (response.body.error) {
        console.log(response.body.error);
      } else if (response.body) {
        const data = response.body;
        //matchList(data.accountId);
        //console.log(data)
        res.send(data);
        //res.redirect('/client/app/src/components/Dashboard.vue')
        //res.render('/Dashboard', data);
      }
    });
  };

  const matchList = (accountId) => {
    const matchListUrl = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${api_key}`;

    request({ url: matchListUrl, json: true }, (error, response) => {
      if (error) {
        console.log(error);
      } else if (response.body.error) {
        console.log(response.body.error);
      } else if (response.body) {
        const matchData = response.body.matches;

        matchData.map((match) => {
          singleMatch(match.gameId);
        });
        console.log(matchData);
        //res.send(matchData);
      }
    });
  };

  const singleMatch = (gameId) => {
    const matchUrl = `https://na1.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${api_key}`;
    request({ url: matchUrl, json: true }, (error, response) => {
      if (error) {
        console.log(error);
      } else if (response.body.error) {
        console.log(response.body.error);
      } else if (response.body) {
        const singleMatchData = response.body;
        //res.send(singleMatchData);
      }
    });
  };

  summonerLookup();
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
