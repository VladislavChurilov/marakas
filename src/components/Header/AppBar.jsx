import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import Navigation from './Navigation';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import UserMenu from '../UserMenu';

export default function AppBar() {
  const { header } = useStyles();
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <header className={header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid rgb(21 97 0)',
    width: '100%',
    padding: '10px',
  },
});
