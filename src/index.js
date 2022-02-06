
import {bugAdded, bugResolved, bugRemoved, bugAssignToUser, 
    getUnresolveBugs, getBugsByUser} from "./store/bug";
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/project";
import { userAdded } from "./store/users";



const store = configureStore();

// store.subscribe(()=> {
//     console.log('Store changed!')
// })

store.dispatch((dispatch, getState)=> {
//  call external api
dispatch({type:'error', payload:{message:' error getting data'}})
})



  




