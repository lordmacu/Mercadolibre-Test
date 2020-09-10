import React from "react";
import { Global, css } from "@emotion/core";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import { Provider } from "react-redux";
import store from "./redux/store";
import Helmet from "react-helmet";

function App() {
  return (
    <Provider store={store}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            :focus {
              outline: none;
            }
          }
          html {
            font-family: "Lucida Sans", sans-serif;
          }

          ul {
            list-style: none;
            margin: 0px;
            padding: 0px;
          }

          body {
            margin: 0;
            background: #eeeeee;
          }
          .row::after {
            content: "";
            clear: both;
            display: table;
          }

          [class*="col-"] {
            float: left;
            position: relative;
            min-height: 1px;
            padding-right: 16px;
            padding-left: 16px;
          }

          .col-1 {
            width: 10%;
          }
          .col-2 {
            width: 20%;
          }
          .col-3 {
            width: 30%;
          }
          .col-4 {
            width: 40%;
          }
          .col-5 {
            width: 50%;
          }
          .col-6 {
            width: 60%;
          }
          .col-7 {
            width: 70%;
          }
          .col-8 {
            width: 80%;
          }
          .col-9 {
            width: 90%;
          }
          .col-10 {
            width: 100%;
          }
          .col-11 {
            width: 91.66%;
          }
          .col-12 {
            width: 100%;
          }
          .row {
            margin-right: -15px;
            margin-left: -15px;
          }

          .container {
            max-width: 986px;
            padding-right: 16px;
            padding-left: 16px;
            margin-right: auto;
            margin-left: auto;
          }

          .header {
            background-color: #ffe600;
          }

          .menu ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          .menu li {
            padding: 8px;
            margin-bottom: 7px;
            background-color: #33b5e5;
            color: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
          }

          .menu li:hover {
            background-color: #0099cc;
          }

          .pl-0 {
            padding-left: 0px;
          }
          .card {
            background-color: white;
            margin-bottom: 62px;
          }

          .btn-primary {
            width: 100%;
            height: 48px;
            margin: 0;
            padding: 8px 24px;
            line-height: 28px;
            font-size: 18px;
            font-weight: 400;
            background: #3483fa;
            border: 1px solid #3483fa;
            text-align: center;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
            &:focus {
              outline: none;
              -webkit-box-shadow: 0 0 10px 0 hsla(0, 0%, 60%, 0.5);
              box-shadow: 0 0 10px 0 hsla(0, 0%, 60%, 0.5);
            }
          }
        `}
      ></Global>
      <Helmet>
        <title>Alquiler Directo</title>
        <link
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.1/mercadolibre/favicon.svg"
          rel="icon"
          data-head-react="true"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route path="/items/:id">
          <Detail />
        </Route>
        <Route path="/items">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
