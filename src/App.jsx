import { Route, Routes } from "react-router-dom";

import Sidebar from "././AdminPages/AdminPage/common/Sidebar";

import OverviewPage from "././AdminPages/pages/OverviewPage";
import ProductsPage from "./AdminPages/pages/ProductsPage";
import UsersPage from "./AdminPages/pages/UsersPage";
import SalesPage from "./AdminPages/pages/SalesPage";
import OrdersPage from "./AdminPages/pages/OrdersPage";
import AnalyticsPage from "./AdminPages/pages/AnalyticsPage";
import SettingsPage from "./AdminPages/pages/SettingsPage";

function App() {
	return (
		<div className='flex h-screen bg-slate-50 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

			<Sidebar />
			<Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	);
}

export default App;
