import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reduceres/expenses';
import filtersReducer from '../reduceres/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
};