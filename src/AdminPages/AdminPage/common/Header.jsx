const Header = ({ title }) => {
  return (
    <header className="bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-400">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-300">{title}</h1>
      </div>
    </header>
  );
};
export default Header;
