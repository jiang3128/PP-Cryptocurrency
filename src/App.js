import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Theme,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import Cypto from "./components/Crypto.js";
import "./App.css";
import stocksPNG from "./logo.png";
import { height } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    marginLeft: "1rem",
  },
  logo: {
    width: "2.5vw",
    height: "5vh",
  },
}));

function App() {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  const cryptoURL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase());
  useEffect(() => {
    axios
      .get(cryptoURL)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => alert("Woops! Developer needs a Coffee!"));
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <img
            src={stocksPNG}
            alt="logo"
            edge="start"
            className={classes.logo}
          ></img>
          <Typography variant="h5" className={classes.title}>
            My Cryptocurrency App
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>My Cryptocurrency App</h1>
      <div className="titleRow">
        <div>Name</div>
        <div>Image</div>
        <div>Symbol</div>
        <div>Market Cap</div>
        <div>Total Supply</div>
        <div>Current Price</div>
        <div>24h Percentage</div>
      </div>
      {filteredCoins.map((cypto) => {
        return (
          <Cypto
            key={cypto.id}
            name={cypto.name}
            image={cypto.image}
            symbol={cypto.symbol}
            volumn={cypto.market_cap}
            supply={cypto.total_supply}
            price={cypto.current_price}
            priceChanged={cypto.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
