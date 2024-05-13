import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MultiFormType } from "@/utils/types/multiFormType";
import { MultiFormIntial } from "@/utils/data/MultiFormIntial";

const initialState: MultiFormType = MultiFormIntial;

const multiFormSlice = createSlice({
    name: 'multiForm',
    initialState,
    reducers: {
        setMultiFormData: (state, action: PayloadAction<Partial<MultiFormType>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setMultiFormData } = multiFormSlice.actions;

export default multiFormSlice.reducer;
