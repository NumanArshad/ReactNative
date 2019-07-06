
import {manage_Actions} from '../constants/ManageStudent'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';

export const manageStudentServer = {
handleSignIn: handleSignIn
}

export function handleSignIn(username,password)
{
  alert("in  server"+password)
  var user ={'username':username,'password':password}
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/SignIn', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
      
   }).then((response)=>{
    alert('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.signInStatus )
    if(data.signInStatus=='failure'){
      store.dispatch({type:manage_Actions.manage_student.FAILURE,payload:data});
      return ;
      }
    else if(data.signInStatus=='authorized') {
      store.dispatch({type:manage_Actions.manage_student.AUTHORIZED,payload:data});
      return ;
    }
    else if(data.signInStatus == 'not_authorized'){
      store.dispatch({type:manage_Actions.manage_student.NOT_AUTHORIZED,payload:data});
      return ;
    }

     });
   })


return {type:manage_Actions.manage_student.NEW,payload:'none'};

};
