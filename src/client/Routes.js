import HomePage from './pages/Home/view';
import UsersListsPage from './pages/Users/view';
import App from './App';

export default [ 
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true,
            },
            {
                ...UsersListsPage,
                path: '/users',
            },
        ],
    },
];