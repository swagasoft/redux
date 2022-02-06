const toast =  store => next => action => {
    if(action.type === 'error')
        console.log('Toast error', action.payload.message);
    else
        next(action)
};


export default toast;