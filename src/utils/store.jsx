import {configureStore} from '@reduxjs/toolkit';
import sideSlice from './sideSlice';
import sideFilterSlice from './sideFilterSlice';
import userDataSlice from './userDataSlice';
const store = configureStore({
    reducer:{
        side:sideSlice,
        filter:sideFilterSlice,
        userData:userDataSlice,
    }
});

export default store;
