import {LOGIN, LOGOUT} from '../Types/customerType';

const initialState = {
  customer : {},
  token : "" 
};


const customerReducer = (state = initialState, action) => {

  switch(action.type){

    case LOGIN : 
      return{
        ...state,
        customer : action.payload.customer,
        token : action.payload.token
      };

    case LOGOUT :
      return {
        ...state,
        customer : initialState
      }

    default : 
      return state

  };
};


export default customerReducer;