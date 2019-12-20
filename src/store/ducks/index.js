import {combineReducers} from 'redux';

import login from './login';
import repositories from './repositories';

// anteriormente, com 1 reducer: retorno -> state['Fazer café', 'Estudar React Native']
// nesse projeto, com 2 funcionalidades, o state do redux fica dessa forma: {login: {}, repositories:[]}

export default combineReducers({
  login,
  repositories,
});
