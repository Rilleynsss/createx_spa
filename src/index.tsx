import ReactDOM from "react-dom/client";
import "./style/index.module.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={routes} />);
