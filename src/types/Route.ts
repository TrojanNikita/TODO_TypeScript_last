

export interface AppRoute {
    id: string;
    path: string;
    component: any;
    description: string;
    exact: boolean;
}

export interface AuthRoute {
    id: string;
    path: string;
    component: any;
    description: string;
    exact: boolean;
}