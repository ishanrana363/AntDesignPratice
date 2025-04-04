import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ButtonPage from "../pages/Button/ButtonPage";
import Typography from "../pages/Typography/Typography";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            { path : "button", element : <ButtonPage></ButtonPage> },
            { path : "typography", element : <Typography></Typography> },
            { path : "/contact", element : <h1>Contact</h1> },
            { path : "*", element : <h1>Not Found</h1> }
        ]
    }
]);