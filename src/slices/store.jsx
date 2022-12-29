import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import menuSlice from './MenuSlice';
import mapSlice from './MapSlice';
import commonSlice from './CommonSlice';

const printConsole1 = (next) => {
  console.log('call meddleware1');
};

const printConsole2 = () => {
  console.log('call meddleware2');
};

const testCostomMiddleware = (storeApi) => (next) => (action) => {
  // console.log('store/setLocalStorage()/store', storeApi);
  // console.log('store/setLocalStorage()/next', next);
  // console.log('store/setLocalStorage()/action', action);
  return next(action);
};

const store = configureStore({
  reducer: {
    menuSlice,
    mapSlice,
    commonSlice,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(testCostomMiddleware, logger),
  devTools: true,
});

export default store;
