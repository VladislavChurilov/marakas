import { createUseStyles } from 'react-jss';

const Conteiner = ({ children }) => {
  const { conteiner } = useStyles();
  return <div className={conteiner}>{children}</div>;
};

export default Conteiner;

const useStyles = createUseStyles({
  conteiner: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 'auto',
    width: '600px',
    border: '1px solid rgb(230, 230, 230)',
  },
});
