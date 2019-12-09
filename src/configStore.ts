import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import  {StoreStructure}  from './types';

//Сохранение состояния во время перезагрузки
import { save, load } from "redux-localstorage-simple"

import {rootReducer} from './reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(save(),logger)(createStore);

export default function configureStore(initialState?:StoreStructure) {
  return createStoreWithMiddleware(rootReducer, load());
}
