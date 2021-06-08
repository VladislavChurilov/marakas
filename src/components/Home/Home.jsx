import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import {
  getIsAuthenticated,
  getUserName,
} from '../../redux/auth/authSelectors';

export default function Home() {
  const classes = useStyles();
  const name = useSelector(getUserName);
  const isAuthenticated = useSelector(getIsAuthenticated);

  return isAuthenticated ? (
    <div className={classes.homePage}>
      <h1>Welcome, {name} </h1>
    </div>
  ) : (
    <div className={classes.homePage}>
      <h1>Do you want to see our product? Please, log in.</h1>
    </div>
  );
}
const useStyles = createUseStyles({
  homePage: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '20px',
    fontSize: '10px',
  },
});
