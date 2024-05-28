import {configureStore} from '@reduxjs/toolkit';
import sideSlice from './sideSlice';
import sideFilterSlice from './sideFilterSlice';
import userDataSlice from './userDataSlice';
import userItemCardSlice from './userItemCardSlice';
const store = configureStore({
    reducer:{
        side:sideSlice,
        filter:sideFilterSlice,
        userData:userDataSlice,
        card:userItemCardSlice,
    }
});

export default store;
