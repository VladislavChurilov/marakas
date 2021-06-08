import { createUseStyles } from 'react-jss';
import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getAllProducts,
  getFilter,
  getCurrentPage,
} from '../../redux/selectors';
import { fetchFilteredProducts } from '../../redux/operations';
import { fetchNextPage } from '../../redux/operations';

import Filter from '../Filter';

export default function Product() {
  const classes = useStyles();
  const products = useSelector(getAllProducts);
  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  //////Filter///////
  const filter = useSelector(getFilter);
  useMemo(() => {
    dispatch(fetchFilteredProducts(filter));
  }, [dispatch, filter]);

  ///////  PAGINATION   ////////
  let [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchNextPage(page));
  }, [dispatch, page]);

  const nextPage = () => {
    page < 20 && setPage(page + 1);
  };

  const prevPage = () => {
    page > 1 && setPage(page - 1);
  };

  return (
    <div className={classes.product}>
      <Filter />
      <ul className={classes.productList}>
        {products &&
          products.map(({ id, title, price, thumbnail }) => (
            <li key={id} className={classes.productItem}>
              <img src={thumbnail} alt="product" width="150" height="150" />
              <div>
                <h3>{title}</h3> Price:{price}
              </div>
            </li>
          ))}
      </ul>
      {(products === undefined || products.length === 0) && (
        <p>We couldn’t find any products matching</p>
      )}
      <div className={classes.pagination}>
        {page > 1 && (
          <button
            type="button"
            onClick={prevPage}
            className={classes.pagButton}
          >
            Back
          </button>
        )}
        {page !== 20 && (
          <button
            type="button"
            onClick={nextPage}
            className={classes.pagButton}
          >
            Next
          </button>
        )}
        <p className={classes.page}>Page:{currentPage}</p>
      </div>
    </div>
  );
}

export const useStyles = createUseStyles({
  product: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    border: '1px solid rgb(230, 230, 230)',
    margin: 'auto',
  },
  filterButton: {
    '&:hover': {
      background: '#e0f7d4',
    },
    '&:checked': {
      background: '#e0f7d4',
    },
    border: 'none',
    width: '200px',
    height: '30px',
    borderRadius: '10%',
    marginBottom: '10px',
    background: '#f0f5ae',
  },

  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    padding: '20px',
    margin: '0',
    width: '100%',
  },
  productItem: {
    marginBottom: '20px',
  },
  pagination: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '40px',
    borderTop: '2px solid rgb(21 97 0)',
  },
  pagButton: {
    '&:hover': {
      background: '#e0f7d4',
    },
    border: 'none',
    width: '200px',
    height: '30px',
    borderRadius: '10%',
    marginRight: '15px',
    background: '#f0f5ae',
  },

  page: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    height: '30px',
    margin: '0px',
  },
});
