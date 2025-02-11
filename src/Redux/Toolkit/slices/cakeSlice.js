import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  noOfCakes:1000
}
var cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.noOfCakes-=10
    }
  }

})
export let {buyCake}=cakeSlice.actions
export default cakeSlice.reducer