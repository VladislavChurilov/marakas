import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';

import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

export default function UserMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar =
    'https://cdn.pixabay.com/photo/2013/07/13/12/16/horse-159512_960_720.png';

  const onLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={classes.userMenu}>
      <img src={avatar} alt="" width="32" height="32" />
      <span className={classes.welcome}>Welcome, {name}</span>
      <button type="button" className={classes.button} onClick={onLogOut}>
        LogOut
      </button>
    </div>
  );
}
const useStyles = createUseStyles({
  userMenu: {
    display: 'flex',
  },
  welcome: {
    marginLeft: '10px',
  },
  button: {
    '&:hover': {
      background: '#e0f7d4',
    },
    border: 'none',
    borderRadius: '20%',
    marginLeft: '10px',
  },
});
