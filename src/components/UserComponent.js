import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Redux/Toolkit/slices/userSlice'
// import { fetchUsers } from '../Redux/users/userActions'

function UserComponent() {
  var dispatch=useDispatch()
  var userState = useSelector((state) => state.user)
  console.log(userState)
  useEffect(() => {
    dispatch(fetchUsers())
    
  },[])
  return (
    <div>
      <h3>UsersComponent</h3>
      {userState.loading ? (
        <h3>Loading...</h3>
      ) : userState.error ? (
        <h3>{userState.error.message}</h3>
      ) : (
        <div>
          {userState.users.map((user) => {
            return <h2 key={user.id}>{user.name}</h2>;
          })}
        </div>
      )}
    </div>
  );
}

export default UserComponent