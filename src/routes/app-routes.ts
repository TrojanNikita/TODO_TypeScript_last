import { ALL,ACTIVE,DONE } from '../constants/routes';
import {All,Active,Done} from '../components/containers/containers';
import {AppRoute} from './../types';

import {ALL as AllStatus,DONE as DoneStatus,ACTIVE as ActiveStatus} from './../constants/status';

export const AppRoutes: AppRoute[] = [
    {
        id:'1',
        path: ALL,
        component: All,
        description: AllStatus,
        exact: true
    },
    {
        id:'2',
        path: ACTIVE,
        component: Active,
        description: DoneStatus,
        exact: true
    },
    {
        id:'3',
        path: DONE,
        component: Done,
        description: ActiveStatus,
        exact: true
    }
];