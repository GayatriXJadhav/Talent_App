import {configureStore} from '@reduxjs/toolkit';
import talentReducer from '../features/talents/talentSlice'

export const store=configureStore({
    reducer:{
        talents:talentReducer,
    },
     devTools: process.env.NODE_ENV !== "production",
});
export default store;