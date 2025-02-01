import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-12">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
