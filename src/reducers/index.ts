import { combineReducers } from 'redux';

import {TodoReduce} from './todo-reduce';

export const rootReducer = combineReducers({
  TodoReduce
})

export type RootState = ReturnType<typeof rootReducer>