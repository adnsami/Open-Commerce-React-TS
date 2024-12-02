import { createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout/Layout';
import ProductListPage from './pages/ProductListPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: HomePage,
            },
            {
                path: '/products/:category',
                Component: ProductListPage,
            },
        ],
    },
]);

export default router;
