import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./components/pages/Dashboard";
// import ChatWidget from "./components/chat/ChatWidget";





const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="ml-64 flex-1">
        <Header />
        <Dashboard />
      </main>
      <ChatWidget isOpen={isChatOpen} onToggle={setIsChatOpen} />
    </div>
  );
};

export default App;
