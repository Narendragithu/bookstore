var initialState={
  count:10
}


 export var laptopReducer = (state = initialState, action) => {
   switch (action.type) { 
     case 'BUY_LAPTOP':
       return {
         count: state.count - 2
       }
       break;
    
     
      
    default:
      return state

  }
}