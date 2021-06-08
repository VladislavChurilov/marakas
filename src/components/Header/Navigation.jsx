import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { getIsAuthenticated } from '../../redux/auth/authSelectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  const classes = useStyles();

  return (
    <nav className={classes.navigation}>
      <NavLink
        to="/"
        exact
        className={classes.titleHead}
        activeClassName={classes.activeLink}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={classes.productLink}
          activeClassName={classes.activeLink}
          to="/products"
          exact
        >
          Products
        </NavLink>
      )}
    </nav>
  );
}

const useStyles = createUseStyles({
  navigation: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    width: '100%',
  },
  titleHead: {
    marginRight: '20px',
  },
  activeLink: {
    fontSize: '20px',
    color: 'rgb(180, 70, 6)',
  },
});
