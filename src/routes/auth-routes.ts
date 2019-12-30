
import AuthPopup from '../authentication/auth-popup';
import {AuthRoute} from './../types';

import {START, IN} from './../constants/auth';

export const AuthRoutes: AuthRoute[] = [
    {
        id:'1',
        path: START,
        component: AuthPopup,
        description: IN,
        exact: true
    }
];