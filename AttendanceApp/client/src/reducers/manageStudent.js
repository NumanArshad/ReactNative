import {manage_Actions} from '../constants/ManageStudent'
import {manage_Status} from '../constants/ManageStudent'
 const manage_initialState = {
    manage_Status: manage_Status.manage_student.NEW,
    userId:""

  };

  export default function (state = manage_initialState, action) {
   console.log(action.type);
    switch(action.type) {

      case manage_Actions.manage_student.NEW:// start fetching posts and set loading = true
        console.log("I am from Reduce new..");
        return { ...state, manage_Status: manage_Status.manage_student.NEW};
   
        
        case manage_Actions.manage_student.ADDSTUDENT:// start fetching posts and set loading = true
        console.log("I am from Reduce new..");
        return { ...state, manage_Status: manage_Status.manage_student.ADDSTUDENT};
        default:
      console.log("Manage Student is firing")

        return {...state};

    }
  };
