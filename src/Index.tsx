// import modules/packages
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import app
import App from "./components/App";

// configure app rendering
const root = createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);