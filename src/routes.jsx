import C1 from "./pages/challenges/c1";
import Home from "./pages/home";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        // not done
        path: "/challenge",

    },
    {
        path: "/challenge/1",
        element: <C1 />
    }
]

export default routes;