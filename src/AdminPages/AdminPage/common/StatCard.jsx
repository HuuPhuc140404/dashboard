import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg
            rounded-xl p-6 border border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px hsl(200, 30%, 32%)" }}>
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-300">
          <Icon size={25} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-white">{value}</p>
      </div>
    </motion.div>
  );
};
export default StatCard;
