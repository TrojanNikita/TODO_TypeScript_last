import { ALL,ACTIVE,DONE } from '../constants/routes';
import {All,Active,Done} from '../components/containers/containers';


export interface AppRoute {
    id: number;
    path: string;
    component: any;
    description: string;
    exact: boolean;
}
export const AppRoutes: AppRoute[] = [
    {
        id:1,
        path: ALL,
        component: All,
        description: 'All',
        exact: true
    },
    {
        id:2,
        path: ACTIVE,
        component: Active,
        description: 'Active',
        exact: true
    },
    {
        id:3,
        path: DONE,
        component: Done,
        description: 'Done',
        exact: true
    }
];