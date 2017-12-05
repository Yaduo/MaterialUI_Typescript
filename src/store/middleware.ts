import { Store , Dispatch,  } from 'react-redux'
import { MiddlewareAPI , Middleware } from 'redux';

/**
 * for suprivise actions and catch action error 
 * @return Action
 */

export const loggerMiddleware: Middleware =
  <S>({getState}: MiddlewareAPI<S>) =>
    (next: Dispatch<any>) =>
      (action: any): any => {
        console.log('will dispatch', action)
        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)
        console.log('state after dispatch', getState())
        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
      }