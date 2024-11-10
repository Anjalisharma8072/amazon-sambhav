import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  FileText,
  BarChart2,
  MessageCircle,
  Globe,
} from "lucide-react";

const navigationItems = [
  { icon: <Home />, label: "Dashboard", path: "/" },
  { icon: <Package />, label: "Shipments", path: "/shipments", count: 12 },
  { icon: <FileText />, label: "Documents", path: "/documents", count: 5 },
  { icon: <Globe />, label: "Compliance", path: "/compliance" },
  { icon: <BarChart2 />, label: "Analytics", path: "/analytics" },
  { icon: <MessageCircle />, label: "Support", path: "/support" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-lg fixed h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">ExportEase</h1>
      </div>
      <nav className="mt-6">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
              location.pathname === item.path ? "bg-blue-50 text-blue-600" : ""
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            <span className="ml-3">{item.label}</span>
            {item.count && (
              <span className="ml-auto bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                {item.count}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
