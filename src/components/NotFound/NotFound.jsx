import { createUseStyles } from 'react-jss';

const NotFound = () => {
  const classes = useStyles();

  return <h1 className={classes.notFound}> Error 404 page not found</h1>;
};
export default NotFound;

const useStyles = createUseStyles({
  notFound: {
    display: 'flex',
    justifyContent: 'center',
  },
});
