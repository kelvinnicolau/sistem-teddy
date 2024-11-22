import React from "react";
import { createRoot } from 'react-dom/client'
import AppRoutes from "./routes";
import { GlobalStyles } from "./styles/globalStyles";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>
);
