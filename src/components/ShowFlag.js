import React from "react";

function ShowFlag(generatedFlag) {
  return (
    <div className="flag_image_container">
      <img src={generatedFlag.flag.image} alt={generatedFlag.flag.name} />
    </div>
  );
}

export default ShowFlag;
