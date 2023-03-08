import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Root from './Root';

// All layouts/containers
import DefaultLayout from '../layouts/Default';
import DetachedLayout from '../layouts/Detached';

// lazy load all the views

// pages
const AppStore = React.lazy(() => import('../pages/appstore'));
const MyApps = React.lazy(() => import('../pages/myapps'));
const ErrorPageNotFound = React.lazy(() => import('../pages/error/PageNotFound'));
const ServerError = React.lazy(() => import('../pages/error/ServerError'));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>,
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        { path: '/', element: <Root /> },
        {
            // public routes
            path: '/',
            element: <DefaultLayout />,
            children: [
                {
                    path: 'error-404',
                    element: <LoadComponent component={ErrorPageNotFound} />,
                },
                {
                    path: 'error-500',
                    element: <LoadComponent component={ServerError} />,
                }
            ],
        },
        {
            path: '/',
            element: <DetachedLayout />,
            children: [
                {
                    path: 'appstore',
                    element: <LoadComponent component={AppStore} />,
                },
                {
                    path: 'myapps',
                    element: <LoadComponent component={MyApps} />,
                }
            ],
        }
    ]);
};

export { AllRoutes };
