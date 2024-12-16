import React from "react";

function Lazyloading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg m-2"></span>
        <div className="typing-writer">
          <span className="writer-content">Loading Kanda</span>
          <span className="writer-caret">......</span>
        </div>
      </div>
    </>
  );
}

export default Lazyloading;
