import { Outlet } from 'react-router';

import Header from './Header';
import Categories from '../../ui/Categories/Categories';

const Layout = () => {
    return (
        <main>
            <Header />
            <div className="flex">
                <div className="fixed top-[56px] h-dvh w-[250px] bg-slate-500 p-6">
                    <Categories />
                </div>

                <div className="ml-[250px] mt-[56px] flex-1 bg-slate-200 p-6">
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default Layout;
