function initTmap(){
    // map 생성
    // Tmapv2.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
    var map = new Tmapv2.Map("map", { // 지도가 생성될 div
        width : "100%", // 지도의 넓이
        height : "400px" // 지도의 높이
    });
} 

// const initTmap = function(){
//     const map = new Tmapv2.Map("map",{
//         width : "100%",
//         height : "400px",
//     })
// }

// document.querySelector("body")
// .addEventListener("DOMContentLoaded", initTmap)
