
import {bugAdded, bugResolved, bugRemoved, bugAssignToUser, 
    getUnresolveBugs, getBugsByUser} from "./store/bug";
import configureStore from "./store/configureStore";
import { projectAdded } from "./store/project";
import { userAdded } from "./store/users";



const store = configureStore();

store.subscribe(()=> {
    console.log('Store changed!')
})

store.dispatch(projectAdded({name:" project 1"}))
store.dispatch(bugAdded({description: "Bug 1"}));
store.dispatch(bugAdded({description:"Bug 2"}));
store.dispatch(bugAdded({description:"Bug 3"}));
store.dispatch(userAdded({name:"Simon Jerry"}))
store.dispatch(bugAssignToUser({userId: 1, bugId: 1}))
store.dispatch(bugResolved({id:1}))


console.log(store.getState())

const bugs = getBugsByUser(1)(store.getState())
console.log(bugs)


  




