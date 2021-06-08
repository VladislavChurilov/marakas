import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const AuthNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.AuthNavConteiner}>
      <NavLink
        to="/login"
        exact
        className={classes.authNav}
        activeClassName={classes.activeLink}
      >
        LogIn
      </NavLink>
    </div>
  );
};
export default AuthNav;
const useStyles = createUseStyles({
  navigation: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '10px',
  },
  authNav: {
    marginRight: '20px',
  },
  activeLink: {
    fontSize: '20px',
    color: 'rgb(180, 70, 6)',
  },
});
