type StateValuesType = {
    firstname:string;
    lastname:string;
    email:string;
    password:string;
  }


export function reducerFn(state:StateValuesType,action:{type:string,payload:string}){
    switch (action.type) {
      case 'FIRSTNAME':
        return {...state,firstname:action.payload}
        break;
      case 'LASTNAME':
        return {...state,lastname:action.payload}
        break;
      case 'EMAIL':
        return {...state,email:action.payload}
        break;
      case 'PASSWORD':
        return {...state,password:action.payload}
        break;
      default:
        return state
        break;
    }
  }