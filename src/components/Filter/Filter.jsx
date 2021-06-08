import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { fetchFilteredProducts } from '../../redux/operations';
import { getFilter } from '../../redux/selectors';

export default function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  let [title, setTitle] = useState('');
  let [from, setFrom] = useState('');
  let [to, setTo] = useState('');
  let [priceFrom, setPriceFrom] = useState('');
  let [priceTo, setPriceTo] = useState('');

  const onfilterChange = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'from':
        setFrom(e.target.value);
        break;
      case 'to':
        setTo(e.target.value);
        break;
      case 'priceFrom':
        setPriceFrom(e.target.value);
        break;
      case 'priceTo':
        setPriceTo(e.target.value);
        break;
      default:
        console.log('error');
        break;
    }
  };

  const onFilterParSubmit = e => {
    e.preventDefault();
    dispatch(fetchFilteredProducts({ title, from, to, priceFrom, priceTo }));
    dispatch(changeFilter({ title, from, to, priceFrom, priceTo }));
  };

  return (
    <form className={classes.filterForm} onSubmit={onFilterParSubmit}>
      <button className={classes.filterButton} type="submit">
        Search
      </button>

      <input
        className={classes.filterInputSearch}
        type="text"
        onChange={onfilterChange}
        placeholder={value.title}
        name="title"
      />
      <div className={classes.filterConteiner}>
        from
        <input
          className={classes.filterInput}
          type="date"
          onChange={onfilterChange}
          placeholder={value.from}
          title={`previous:${value.from}`}
          name="from"
          min="2020-12-01"
          max="2020-12-29"
        />
        to
        <input
          className={classes.filterInput}
          type="date"
          onChange={onfilterChange}
          placeholder={value.to}
          title={`previous:${value.to}`}
          name="to"
          min="2020-12-01"
          max="2020-12-29"
        />
      </div>
      <div className={classes.filterConteiner}>
        Price from
        <input
          className={classes.filterInput}
          type="number"
          onChange={onfilterChange}
          placeholder={value.priceFrom}
          name="priceFrom"
          min="10000"
          max="14999"
        />
        to
        <input
          className={classes.filterInput}
          type="number"
          onChange={onfilterChange}
          placeholder={value.priceTo}
          name="priceTo"
          min="10001"
          max="15000"
        />
      </div>
    </form>
  );
}

export const useStyles = createUseStyles({
  filterForm: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop: '20px',
    paddingLeft: '20px',
    borderBottom: '2px solid rgb(21 97 0)',
  },

  filterButton: {
    '&:hover': {
      background: '#e0f7d4',
    },
    '&:checked': {
      background: '#e0f7d4',
    },
    border: 'none',
    width: '80px',
    borderRadius: '10%',
    marginBottom: '10px',
    background: '#f0f5ae',
  },

  filterInputSearch: {
    width: '200px',
    marginBottom: '10px',
    '&::placeholder': {
      color: '#b7b6a0',
    },
  },

  filterConteiner: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
  },

  filterInput: {
    marginLeft: '10px',
    '&::placeholder': {
      color: '#b7b6a0',
    },
  },
});
