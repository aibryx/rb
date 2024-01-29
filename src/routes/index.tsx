import { useRoutes } from 'react-router';
import { commonRoutes } from './common';

export const RoutesContainer = () => {
  const notFound = [{ path: '*', element: <>NotFound</> }];
  const element = useRoutes([...commonRoutes, ...notFound]);
  return <>{element}</>;
};
