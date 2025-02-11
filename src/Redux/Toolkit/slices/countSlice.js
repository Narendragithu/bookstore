import { createSlice } from "@reduxjs/toolkit";
var initialState = {
  count:100
}

var countslice = createSlice({
  name: 'count',
  initialState: initialState,
  reducers: {
    
    increase: (state) => {
      state.count+=10
    },
    decrease: (state, action) => {
      state.count-=10
    }
  }
})

export const { increase, decrease } = countslice.actions;
export default countslice.reducer