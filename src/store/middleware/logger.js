
// SNA
const logger = param =>  store => next =>  action => {
    console.log('loggin ', param)
    console.log('next ', next)
    console.log('action ', action)
    next(action);
};

export default logger;