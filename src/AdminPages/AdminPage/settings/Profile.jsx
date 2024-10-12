import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src="https://us.123rf.com/450wm/huyelah/huyelah2401/huyelah240100289/231289786-cute-cartoon-chicken-vector-illustration-isolated-on-white-background.jpg?ver=6"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">HuuPhuc</h3>
          <p className="text-gray-400">HuuPhuc@example.com</p>
        </div>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
