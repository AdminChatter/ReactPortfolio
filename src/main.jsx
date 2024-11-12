import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
    {
        path: "/",
        element: App,
        children: [
            {
                index: true,
                element: <AboutMe />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/Portfolio",
                element: <Portfolio />
            },
            {
                path: "/Resume",
                element: <Resume />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);