import React from "react";
import { MessageCircle, MessageSquare, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChatWidget = ({ isOpen, onToggle }) => {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${isOpen ? "w-80" : "w-auto"}`}
    >
      {isOpen ? (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm">Customer Support</CardTitle>
            <X
              className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => onToggle(false)}
            />
          </CardHeader>
          <CardContent className="h-96">
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Chat messages would go here */}
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <button
          onClick={() => onToggle(true)}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
