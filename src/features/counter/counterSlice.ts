import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  pageValue: number;
  subpageValue: number;
}

const initialState: CounterState = {
  pageValue: 1,
  subpageValue: 1,
};

function randomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setRandomPageValue: (state) => {
      state.pageValue = randomNumber(1, 549);
    },
    setRandomSubpageValue: (state) => {
      state.subpageValue = randomNumber(1, 20);
    },
  },
});

export const selectPageValue = (state: RootState) => state.counter.pageValue;
export const selectSubpageValue = (state: RootState) =>
  state.counter.subpageValue;

export const { setRandomPageValue, setRandomSubpageValue } =
  counterSlice.actions;

export default counterSlice.reducer;
