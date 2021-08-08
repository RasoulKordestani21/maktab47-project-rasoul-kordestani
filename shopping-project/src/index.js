import React from "react";
import { App } from "./pages/terminal";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from "@material-ui/core/styles";
import RtlTheme from "./assets/style/materialUI_styles/rtlTheme";
import "./assets/fonts/font.css";

import styles from "./assets/style/style.module.css";
import { style } from "@material-ui/system";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
