
import * as actions from "./store/bug";
import configureStore from "./store/configureStore";


const store = configureStore();

store.subscribe(()=> {
    console.log('Store changed!')
})

store.dispatch(actions.bugAdded({description: "Bug 1"}));
store.dispatch(actions.bugAdded({desctiption:"Bug 2"}));
store.dispatch(actions.bugAdded({description:"Bug 3"}));
store.dispatch(actions.bugRemoved({id:1}));

console.log(store.getState())




