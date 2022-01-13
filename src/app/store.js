import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from '../features/api/apiSlice';
import { notificationsReducer } from '../features/notifications/notificationsSlice';

export default configureStore({
  reducer: {
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
