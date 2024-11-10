import QuickStats from "../layout/QuickStats";
// import Shipmentmap from "../layout/Shipmentmap"; // Or `ShipmentMap` if the file is named that way
import DocumentManager from "../layout/DocumentManager";
import AIRecommendations from "../layout/AIRecommendations";

const Dashboard = () => {
  return (
    <div className="p-6">
      <QuickStats />
      {/* <ShipmentMap /> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentManager />
        <AIRecommendations />
      </div>
    </div>
  );
};

export default Dashboard;
