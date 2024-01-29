import { DefaultLayout } from '@/components/Layouts/Default/DefaultLayout';
import { Landing } from '@/features/misc';

export const commonRoutes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '', element: <Landing /> }],
  },
];
