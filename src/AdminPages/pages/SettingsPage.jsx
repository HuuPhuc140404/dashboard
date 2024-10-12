import Header from "../AdminPage/common/Header";
import ConnectedAccounts from "../AdminPage/settings/ConnectedAccounts";
import DangerZone from "../AdminPage/settings/DangerZone";
import Notifications from "../AdminPage/settings/Notifications";
import Profile from "../AdminPage/settings/Profile";
import Security from "../AdminPage/settings/Security";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
};
export default SettingsPage;