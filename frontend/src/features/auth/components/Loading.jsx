import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h1 className="text-2xl font-semibold mt-6 text-white">
          Loading...
        </h1>

        <p className="text-gray-400 mt-2">
          Please wait a moment
        </p>
      </div>
    </div>
  );
};

export default Loading;