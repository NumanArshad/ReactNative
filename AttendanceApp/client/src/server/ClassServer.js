
import {class_Actions} from '../constants/Class'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';

export const classServer = {
handleRegister: handleRegister
}

export function handleRegister(username,password)
{

 alert('in server callle');
 //alert("in server"+username)
  var user ={'username':username,'password':password}

  const postRequest =  fetch(ROOT_URL+'/api/Accounts/Register', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
    body: JSON.stringify(user)
   }).then((response)=>{
    alert('********'+response.status);
    response.json().then(data=>{
      alert("data:......" + data.registerStatus )
    if(data.registerStatus=='failure'){
      store.dispatch({type:class_Actions.register_Create.FAILURE,payload:data});
      return ;
      }
    else if(data.registerStatus=='created') {
      alert("Save success")
      store.dispatch({type:class_Actions.register_Create.CREATED,payload:data});
      return ;
    }
    else if(data.registerStatus=='existing') {
      store.dispatch({type:class_Actions.register_Create.EXISTING,payload:data});
      return ;
    }
     });
   })


return {type:class_Actions.register_Create.NEW,payload:'none'};

};
