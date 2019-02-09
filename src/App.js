import React from "react";
import { Ideas } from "containers/Ideas";
import { AppWrapper, GlobalStyles } from "./styles";

export const App = () => (
  <AppWrapper>
    <GlobalStyles />
    <Ideas />
  </AppWrapper>
);
