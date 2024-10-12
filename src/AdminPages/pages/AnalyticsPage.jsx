import Header from "../AdminPage/common/Header";

import OverviewCards from "../AdminPage/analytics/OverviewCards";
import RevenueChart from "../AdminPage/analytics/RevenueChart";
import ChannelPerformance from "../AdminPage/analytics/ChannelPerformance";
import ProductPerformance from "../AdminPage/analytics/ProductPerformance";
import UserRetention from "../AdminPage/analytics/UserRetention";
import CustomerSegmentation from "../AdminPage/analytics/CustomerSegmentation";
import AIPoweredInsights from "../AdminPage/analytics/AIPoweredInsights";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-white-900">
      <Header title={"Analytics Dashboard"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />
        <RevenueChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>

        <AIPoweredInsights />
      </main>
    </div>
  );
};
export default AnalyticsPage;
