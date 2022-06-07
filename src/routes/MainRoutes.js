import React from 'react';
import {
  PublicPage, HomePage, AboutPage, DummyPage, TaskListPage,
} from '../pages';

const MainRoutes = {
  path: '/',
  element: <PublicPage />,
  children: [
    {
      path: 'home',
      element: <HomePage />,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      path: 'dummies',
      element: <DummyPage />,
    },
    {
      path: 'tasklist',
      element: <TaskListPage />,
    },
  ],
};

export default MainRoutes;
