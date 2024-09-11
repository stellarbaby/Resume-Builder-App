
import React from 'react';

const BackgroundWrapper = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661344287754-5b54e8feb18b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
