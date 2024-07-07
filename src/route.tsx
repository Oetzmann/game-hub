import { createBrowserRouter } from "react-router-dom";
import GamesOverview from "./components/GamesOverview";
import GameDetailPage from "./pages/GameDetailPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
