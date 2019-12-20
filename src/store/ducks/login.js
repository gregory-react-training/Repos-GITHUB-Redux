//DUCK PATTERN -> FORMA DE UNIR REDUCER E ACTION NO MESMO ARQUIVO!

/**
 * Action Types
 */
export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  username: null,
  error: false,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  const data = action.payload;
  switch (action.type) {
    case Types.REQUEST:
      return {...state, loading: true};
    case Types.SUCCESS:
      return {...state, username: data.username, error: false, loading: false};
    case Types.FAILURE:
      return {...state, error: true, loading: false};
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  // O saga deve ouvir essa action e ele mesmo disparar as actions a baixo, baseado no resultado da chamada à API;
  loginRequest: username => ({
    type: Types.REQUEST,
    payload: {username},
  }),

  loginSuccess: username => ({
    type: Types.SUCCESS,
    payload: {username},
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),
};
