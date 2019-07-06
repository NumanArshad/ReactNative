import {class_Actions} from '../constants/Class'
import {class_Status} from '../constants/Class'
 const register_initialState = {
    class_Status: class_Status.class_handle.SHOWCLASSES,

  };

  export default function (state = register_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case class_Actions.class_handle.SHOWCLASSES:// start fetching posts and set loading = true
        console.log("I am from Reduce New..");
        return { ...state, class_Status: class_Status.class_handle.SHOWCLASSES};
  
      case class_Actions.class_handle.CLASSCREATED:
         console.log("I am from Reducer created..");
         alert("in reducer created");
        return {...state, class_Status: class_Status.class_handle.CREATEDSUCCESS}
     
          
default:
      console.log("Register is firing") 

        return {...state,class_Status: class_Status.class_handle.SHOWCLASSES};

    }
  };
