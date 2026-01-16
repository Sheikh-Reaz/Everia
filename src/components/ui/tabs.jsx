"use client";

import * as React from "react";

const TabsContext = React.createContext();

function Tabs({ defaultValue, className = "", children }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ className = "", children }) {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}>
      {children}
    </div>
  );
}

function TabsTrigger({ value, className = "", children }) {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, className = "", children }) {
  const { activeTab } = React.useContext(TabsContext);

  if (activeTab !== value) return null;

  return <div className={className}>{children}</div>;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
