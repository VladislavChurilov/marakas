import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth/authSelectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /products
 * - В противном случае рендерит компонент
 */
export default function PublicRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
