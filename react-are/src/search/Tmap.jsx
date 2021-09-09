import {React, useEffect} from 'react'

function TMap() {
    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = `         
         function initTmap() {
            var map = new Tmapv2.Map("TMapApp", {
               center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
               width: "616px",
               height: "280px",
               zoom:15
            });
         }
         
         initTmap();
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
				position:"fixed",
            }}
        />
    );
}

export default TMap;
