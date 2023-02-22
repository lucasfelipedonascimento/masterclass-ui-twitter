import { createBrowserRouter } from 'react-router-dom';
import { Default } from './layouts/Default';
import { Status } from './pages/Status/Status';
import { Timeline } from './pages/Timeline/Timeline';

// localhosto:5173/path

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/status',
        element: <Status />
      },
    ]
  }
])