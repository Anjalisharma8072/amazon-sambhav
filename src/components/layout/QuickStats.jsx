import React from "react";
import { TrendingUp, Package, CheckCircle } from "lucide-react";
import StatsCard from "./StatsCard";

const QuickStats = () => {
  const stats = [
    {
      title: "Export Volume",
      value: "$1.2M",
      subtitle: "+15% from last month",
      icon: <TrendingUp className="h-4 w-4 text-green-500" />,
      trend: true,
    },
    {
      title: "Active Shipments",
      value: "24",
      subtitle: "12 in transit",
      icon: <Package className="h-4 w-4 text-blue-500" />,
      trend: false,
    },
    {
      title: "Compliance Status",
      value: "98%",
      subtitle: "All documents valid",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      trend: true,
    },
    {
      title: "Cost Savings",
      value: "$45K",
      subtitle: "Optimized routes",
      icon: <TrendingUp className="h-4 w-4 text-green-500" />,
      trend: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => (
        <StatsCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default QuickStats;
