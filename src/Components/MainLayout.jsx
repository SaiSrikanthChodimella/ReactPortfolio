import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
