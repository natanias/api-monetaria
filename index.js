const axios = require("axios");
const express = require("express");
const app = express();

let url;

app.get("/exchangerate", async (req, res) => {
  await axios
    .get("https://economia.awesomeapi.com.br/json/list/USD-BRL/2")
    .then(function (response) {
      url = response;
      console.log(response);
    });

  const hoje = (parseFloat(url.data[0].high) + parseFloat(url.data[0].low)) / 2;
  const ontem =
    (parseFloat(url.data[1].high) + parseFloat(url.data[1].low)) / 2;
  const media = (parseFloat(hoje) + parseFloat(ontem)) / 2;

  return res.json({
    name: `${url.data[0].code}-${url.data[0].codein}`,
    highValue: `R$${parseFloat(url.data[0].high).toFixed(2)} `,
    lowValue: `R$${parseFloat(url.data[0].low).toFixed(2)}`,
    bid: `R$${parseFloat(url.data[0].bid).toFixed(2)}`,
    averageCurrentDay: `R$${parseFloat(hoje).toFixed(2)}`,
    averageLastTwoDays: `R$${parseFloat(media).toFixed(2)}`,
  });
});

app.listen(3333, () => {
  console.log("Conectado");
});
