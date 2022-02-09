import './src/styles/global.css';

import React from "react";
import { ThemeProvider } from './src/context';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{ element }</ThemeProvider>
);