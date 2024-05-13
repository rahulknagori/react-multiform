'use client'

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import multiFormReducer from "@/app/GlobalRedux/Features/MultiForm/multiFormSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const persistConfg = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    multiForm:multiFormReducer
})

const persistedReducer = persistReducer(persistConfg, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;