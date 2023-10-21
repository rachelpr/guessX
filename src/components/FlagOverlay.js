import React from "react";

function FlagOverlay({ opacity }) {
  return (
    <div className="overlay" style={{ opacity }}>
      <div className="grid_section"></div>
    </div>
  );
}

export default FlagOverlay;
