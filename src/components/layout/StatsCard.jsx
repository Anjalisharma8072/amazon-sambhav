// src/components/layout/StatsCard.jsx
import React from "react";

const StatsCard = ({ title, value, subtitle, icon, trend }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
        {trend && <p className="text-green-500">Trending</p>}
      </div>
    </div>
  );
};

export default StatsCard;
