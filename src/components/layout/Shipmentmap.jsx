import React from "react";
import { Map } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShipmentMap = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Live Shipment Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <Map className="h-8 w-8 text-gray-400" />
          <span className="ml-2 text-gray-500">Interactive Map View</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShipmentMap;
