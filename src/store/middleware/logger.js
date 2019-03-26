export const logger = store => next => action => {

  // You can access the state before the reducer executes
  console.log('[Logger: Initial State]', store.getState());

  // Calling next is required in order to pass control back to the reducer
  console.log('[Logger]', action);
  const result = next(action);  // Storing the result is optional
  
  // You can inspect the state of the store (remember that reducer is synchronous...)
  console.log('[Logger: Result]', result);
  console.log('[Logger: Next State]', store.getState());
  return result;
}