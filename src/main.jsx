import { createRoot } from "react-dom/client";
// import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

createRoot(document.getElementById("root")).render(
  <div>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </div>
);
