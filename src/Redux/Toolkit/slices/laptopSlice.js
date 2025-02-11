import { createSlice } from "@reduxjs/toolkit";


var initialState =
{
  count:1000
}

var laptopSlice = createSlice({
  name: 'laptop',
  initialState,
  reducers: {
    buylaptop: (state, action) => {
      state.count-=100
    }
  }

})

export let {buylaptop}=laptopSlice.actions

export default laptopSlice.reducer