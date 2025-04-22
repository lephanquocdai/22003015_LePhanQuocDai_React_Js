import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import todoReducer from '../features/todoSlice';
import themeReducer from '../features/themeSlice';
 
export default configureStore({
   reducer: {
     counter: counterReducer,
     todo:todoReducer,
     theme: themeReducer,
   },
 });