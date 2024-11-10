import React from "react";
import { TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIRecommendations = () => {
  const recommendations = [
    {
      title: "Route Optimization",
      description:
        "Switch to sea freight for bulk shipments to reduce costs by 23%",
      icon: <TrendingUp className="text-green-500" />,
    },
    {
      title: "Compliance Alert",
      description: "New regulation for EU exports effective next month",
      icon: <AlertTriangle className="text-orange-500" />,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((item) => (
            <div key={item.title} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start">
                <div className="h-6 w-6 mr-3">{item.icon}</div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
