import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`error`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form
      className={classes.formStyle}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label>Email</label>

      <input
        className={classes.input}
        type="email"
        name="email"
        value={email}
        required
        onChange={handleChange}
      ></input>
      <label>Password</label>

      <input
        className={classes.input}
        type="password"
        name="password"
        value={password}
        minLength="6"
        title="Password must contain latin lowercase letters and numbers"
        required
        onChange={handleChange}
      />
      <button className={classes.button} type="submit">
        Log in
      </button>
    </form>
  );
}
export const useStyles = createUseStyles({
  formStyle: {
    border: '1px solid rgb(21 97 0)',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '10px',
  },
  input: {
    marginBottom: '20px',
  },

  button: {
    '&:hover': {
      background: '#e0f7d4',
    },
    border: 'none',
  },
});
