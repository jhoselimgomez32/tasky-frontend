import { PublicPage, HomePage, AboutPage, DummyPage } from "../pages";

const MainRoutes = {
  path: "/",
  element: <PublicPage />,
  children: [
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "dummies",
      element: <DummyPage />,
    },
  ],
};

export default MainRoutes;
