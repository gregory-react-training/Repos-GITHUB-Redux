/*
  takeLatest -> Dispara apenas 1 requisição (última) para a API se o usuário clicar várias vezes seguidas;
  takeEvery -> Dispara todas
  takeLeading -> Dispara apenas a primeira
*/
import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import api from '~/services/api';
import {navigate} from '~/services/navigation';

import {
  Creators as LoginActions,
  Types as LoginTypes,
} from '~/store/ducks/login';
import {
  Creators as RepositoriesActions,
  Types as RepositoriesTypes,
} from '~/store/ducks/repositories';

// Função generator -> * é como um async; Assim, todo lugar que usa yield -> await
function* login(action) {
  try {
    const {username} = action.payload;

    yield call(api.get, `/users/${username}`);

    yield put(LoginActions.loginSuccess(username));

    navigate('Repositories');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories() {
  try {
    const {username} = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`);

    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

// Utiliza isso e não o async e await pois: eles são feitos em cima do generator
// (no fim, o babel converte para generator) e não possuem todas as funcionalidades do generator
export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.REQUEST, login),
    takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRepositories),
  ]);
}
