import { React, useEffect } from "react";
import tmap from "../tmap.js";

function TMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = ` 
		${tmap}
      `;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="TMapApp"
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  );
}

export default TMap;
