import { React, useEffect } from "react";

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

			///// 지도 생성 /////

			var lat = 37.566681;
			var lng = 126.978453;
			var markers1 = [];

			var positions = [//다중 마커 저장 배열
				{
					 title: 'SKT타워', 
					 lonlat: new Tmapv2.LatLng(37.566369,126.984895)//좌표 지정
				 },
				 {
					 title: '호텔', 
					 lonlat: new Tmapv2.LatLng(37.564432,126.979979)
				 },
				 {
					 title: '명동성당', 
					 lonlat: new Tmapv2.LatLng(37.5632423,126.987210)
				 },
				 {
					 title: '을지로3가역',
					 lonlat: new Tmapv2.LatLng(37.566337,126.992703)
				 },
				 {
					 title: '덕수궁',
					 lonlat: new Tmapv2.LatLng(37.565861,126.975194)
				 }
			];

			for (var i = 0; i< positions.length; i++){//for문을 통하여 배열 안에 있는 값을 마커 생성
				var lonlat = positions[i].lonlat;
				var title = positions[i].title;
				//Marker 객체 생성.
				marker = new Tmapv2.Marker({
					position : lonlat, //Marker의 중심좌표 설정.
					map : map, //Marker가 표시될 Map 설정.
					title : title //Marker 타이틀.
				});
			}

			markerCluster = new Tmapv2.extension.MarkerCluster({
				markers: marker, // 마커들이 담긴 배열
				map: map // 지도 객체
			});

			///// 마커 생성 /////

			var epsg3857 = new Tmapv2.Point(14135906, 4518356);
		// WGS84 좌표계로 변환합니다
		var wgs84 = Tmapv2.Projection.convertEPSG3857ToWGS84GEO(epsg3857);
		
		// 마커를 생성합니다.
		var marker1 = new Tmapv2.Marker({
			position: wgs84,
			icon: 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_a.png',
			map: map
            });
		
		// 지도를 이동시킵니다.
		map.setCenter(wgs84);
		
		///// 좌표 /////



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
      }}
    />
  );
}

export default TMap;
