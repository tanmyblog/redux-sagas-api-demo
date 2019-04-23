import React from 'react';
import HomePage from './pages/home-page/HomePage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import UserListPage from './pages/user-list-page/UserListPage';
import UserActionPage from './pages/user-action-page/UserActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/user-list',
        exact: false,
        main: () => <UserListPage />
    },
    {
        path: '/user/add',
        exact: false,
        main: ({history}) => <UserActionPage history={history} />
    },
    {
        path: '/user/:id/edit', // :id - truyen id vao url
        exact: false,
        main: ({match, history}) => <UserActionPage match={match} history={history}/>
    },
    {
        path: '/',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;