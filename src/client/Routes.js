import HomePage from './pages/Home/view';
import UsersListsPage from './pages/Users/view';

export default [ 
    {
        ...HomePage,
        path: '/',
        exact: true,
    },
    {
        ...UsersListsPage,
        path: '/users',
    },
];
