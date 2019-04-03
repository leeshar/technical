import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";
import { Provider } from "react-redux";
import CountApp from "../client/reducers";

const app = express();
const port = 3000;

app.get("/", function(req, res) {
  const store = CountApp.getStore();
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  res.send(html);
});

app.listen(port, function() {
  console.log("listening " + port);
});
