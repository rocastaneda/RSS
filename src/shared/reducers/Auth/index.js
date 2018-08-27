import Immutable from 'immutable'

const initialState = Immutable.Map({}).set('Auth', new Immutable.Map({}))

/* Types */
export const AUTH = 'AUTH'

/* Reducer */
export default (state = initialState, action) => {

  switch (action.type) {
    case AUTH:
      return state.set('Auth', new Immutable.Map(action.Obj))
    default:
      return state;
  }
}

/* Action Creators */
export const auth = (user) => {

  if (user) {
    return (dispatch) => {

      const userObj = {
        name: user.displayName,
        photoURL: user.photoURL
      }

        	dispatch({ type: AUTH, Obj: userObj })
        	return Promise.resolve()
    	}	
  } else {
    return (dispatch) => {
	        dispatch({ type: AUTH, Obj: {} })
	        return Promise.resolve()
	    }
  }
}

