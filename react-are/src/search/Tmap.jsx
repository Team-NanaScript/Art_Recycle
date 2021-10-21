import { React, useEffect } from "react";

function TMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `   
		var map,marker;  
         function initTmap() {
            map = new Tmapv2.Map("TMapApp", {
               center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
               width: "616px",
               height: "280px",
               zoom:7
            });

			///// 지도 생성 /////

			const sampleData = [
				{
				  title: "호텔",
				  lonlat: new Tmapv2.LatLng(37.564432, 126.979979),
				},
				{
				  title: "명동성당",
				  lonlat: new Tmapv2.LatLng(37.5632423, 126.98721),
				},
				{
				  title: "덕수궁",
				  lonlat: new Tmapv2.LatLng(37.565861, 126.975194),
				},
			  ];

			var lat = 37.566681;
			var lng = 126.978453;
			var markers1 = [];

			var positions = sampleData  //다중 마커 저장 배열
								// 여기 어캐함?? 데이터를 만들어서 싹 추가를 해줘야 하는 부분..?
				 
			

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
		// map.setCenter(wgs84);
         
		}

		initTmap(); 

		///// 좌표 /////

		function loadGetAddressFromLonLat(param) {

			// TData 객체 생성
			var tData = new Tmapv2.extension.TData();
		  
			var optionObj = {
			  coordType: "WGS84GEO", //응답좌표 타입 옵션 설정 입니다.
			};
		  
			var params = {
			  onComplete: onComplete, //데이터 로드가 성공적으로 완료 되었을때 실행하는 함수 입니다.
			  onProgress: onProgress, //데이터 로드 중에 실행하는 함수 입니다.
			  onError: onError, //데이터 로드가 실패했을때 실행하는 함수 입니다.
			};

			var options = {
				numResults : 1,
			};

			const datas = [
				[
					"서울",
					"은평",
					"갈현",
					"397"
				],
				[
					"광주",
					"서구",
					"치평동",
					"1200"
				],
				[
					"용인시",
					"처인구",
					"삼가동",
					"556"
				],
				[
					"대구광역시", "중구", "동인동1가", "2-1"
				]
			]

			const data = datas.filter((_datas) => {
				return _datas[0].includes(param)
			})
			
			// 천재적인 코드 ㅁㅊ
			tData.getGeoFromAddressJson(data[0][0], data[0][1], data[0][2], data[0][3] , optionObj, params);
			if(param === "전체"){
				map.setZoom(7)
			}

			// 무한 if문 지옥 해결?한듯
			// } else if (param === "광주"){
			// 	tData.getGeoFromAddressJson(data, optionObj, params);
			// } else if (param === "경기"){
			// 	tData.getGeoFromAddressJson("용인시", "처인구", "삼가동", "556" , optionObj, params);
			// } else if (param === "대구"){
			// 	tData.getGeoFromAddressJson("대구광역시", "중구", "동인동1가", "2-1" , optionObj, params);	
			// } else if (param === "대전"){
			// 	tData.getGeoFromAddressJson("용인시", "처인구", "중부대로", "1199" , optionObj, params);
			// } else if (param === "부산"){
			// 	tData.getGeoFromAddressJson("용인시", "처인구", "중부대로", "1199" , optionObj, params);
			
			
			
			
		  }

		    
		  
		  function onComplete() {
			console.log(this._responseData); //json으로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.
			
			var lon = this._responseData.coordinateInfo.lon; //json으로 데이터를 받은 정보에서 경도정보를 추출합니다.
			var lat = this._responseData.coordinateInfo.lat; //json으로 데이터를 받은 정보에서 위도정보를 추출합니다.
			
		  
			var marker = new Tmapv2.Marker({
			  position: new Tmapv2.LatLng(lat, lon),
			});
		  
			marker.setMap(map);
			map.setCenter(new Tmapv2.LatLng(lat, lon));
			map.setZoom(9)
		  }
		  
		  //데이터 로드중 실행하는 함수입니다.
		  function onProgress() {

		  }
		  
		  //데이터 로드 중 에러가 발생시 실행하는 함수입니다.
		  function onError() {
			alert("onError");
		  }

		var local_map = document.querySelector("div.local_box")
	  if (local_map) {
		local_map.addEventListener("click", (e) => {
			let active = document.querySelector("div.active")
			if(active){
				active.classList.remove("active")
			}
			let cName = e.target.className
			let param = e.target.textContent
			if( cName === "tag local" ){
				e.target.classList.add("active")
				loadGetAddressFromLonLat(param)
			}
			
		})

		}
	  		
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
