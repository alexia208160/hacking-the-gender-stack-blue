import { Outlet, Route, createRoutesFromElements } from 'react-router';

import Comparison from './comparison/Comparison';
import ErrorPage from './error-page/ErrorPage';
import Home from './home/Home';
import { withMainLayout } from './layout/main/Main';

const comparison = (
  <Route path="comparison">
    <Route index element={<Comparison />}></Route>
  </Route>
);
export default createRoutesFromElements(
  <Route path="/" element={withMainLayout(<Outlet />)} errorElement={withMainLayout(<ErrorPage />)}>
    <Route index element={<Home />} />
    {comparison}
  </Route>
);
