import { configureStore } from '@reduxjs/toolkit';
// Reducers
import globalReducer from './slices/globalSlice';

export default configureStore({
	reducer: {
		global: globalReducer
	}
});
