import './src/styles/global.css';
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.css";

import React from "react";
import { ThemeProvider } from './src/context';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{ element }</ThemeProvider>
);