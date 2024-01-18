import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Items = lazy(() => import('../cards/cards'));
const Details = lazy(() => import('../details/details'));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Items></Items>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
      </Routes>
    </Suspense>
  );
}
