import { combineReducers } from 'redux';

import {TodoReduce} from './todo-reduce';
import {ModeStatusReducer} from './status-mode-reducer';

export const rootReducer = combineReducers({
  TodoReduce,
  ModeStatusReducer
})

export type RootState = ReturnType<typeof rootReducer>