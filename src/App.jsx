import { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Conteiner from './components/Conteiner';
import routes from './routes';
import AppBar from './components/Header/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { getCurrentProducts } from './redux/auth/authOperations';

const Home = lazy(() =>
  import('./components/Home' /* webpackChunkName: "Home" */),
);
const Login = lazy(() =>
  import('./components/Login' /* webpackChunkName: "Login" */),
);

const Product = lazy(() =>
  import('./components/Product' /* webpackChunkName: "Product" */),
);
const NotFound = lazy(() =>
  import('./components/NotFound' /* webpackChunkName: "NotFound" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProducts());
  }, [dispatch]);

  return (
    <Conteiner>
      <AppBar />
      <Suspense fallback={<h1>Load...</h1>}>
        <Switch>
          <PublicRoute exact path={routes.home}>
            <Home />
          </PublicRoute>
          <PublicRoute path={routes.login} redirectTo="/products" restricted>
            <Login />
          </PublicRoute>
          <PrivateRoute path={routes.products} redirectTo="/login">
            <Product />
          </PrivateRoute>
          <PublicRoute>
            <NotFound />
          </PublicRoute>
        </Switch>
      </Suspense>
    </Conteiner>
  );
}
