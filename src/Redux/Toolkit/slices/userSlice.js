import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

//create async thunk =will create a action 
// vere library slice lo action s ni handle ceyadaneki extra reducer ni use cestamu


export var fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    return res.data
  })
})
console.log(fetchUsers)




var initialState = {
  loading: false,
  users: [],
  error:''
}



var userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state,action) => {
        state.loading = false;
        state.users=action.payload
      })
      .addCase(fetchUsers.rejected, (state,action) => {
        state.loading = false
        state.error=action.payload
    })
    
  }

  
})

export default userSlice.reducer
// export  var {fetchUsers}=userSlice.actions