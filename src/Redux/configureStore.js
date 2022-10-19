import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greeting';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;
