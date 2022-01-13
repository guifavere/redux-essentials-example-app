import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from '../features/api/apiSlice';
import { notificationsReducer } from '../features/notifications/notificationsSlice';
import { postsReducer } from '../features/posts/postsSlice';
import { usersReducer } from '../features/users/usersSlice';

export default configureStore({
  reducer: {
    notifications: notificationsReducer,
    posts: postsReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
