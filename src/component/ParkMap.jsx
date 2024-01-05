import { useEffect, useRef } from "react";
export default function ParkMap({ data }) {
  const mapRef = useRef(null);
  const setCenterRef = useRef(null);
  const panToRef = useRef(null);

  useEffect(
    () => {
      if (window.kakao && mapRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(37.5575833, 126.86115),
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options); // 지도 생성

        function setCenter() {
          var moveLatLon = new window.kakao.maps.LatLng(37.5575833, 126.86115);
          map.setCenter(moveLatLon);
        }

        function panTo() {
          var moveLatLon = new window.kakao.maps.LatLng(37.5575833, 126.86115);
          map.panTo(moveLatLon);
        }

        setCenterRef.current = setCenter;
        panToRef.current = panTo;
      }
      if (window.kakao && mapRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(37.5575833, 126.86115),
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options); // 지도 생성

        // 지도를 클릭한 위치에 표출할 마커입니다
        var marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            var latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
            var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            message += "경도는 " + latlng.getLng() + " 입니다";
            var resultDiv = document.getElementById("clickLatlng");
            resultDiv.innerHTML = message;
          }
        );
      }
    },
    [mapRef]
  );

  return (
    <div className="box">
      <div ref={mapRef} className="map"></div>
      <button onClick={() => setCenterRef.current()}>setCenter</button>
      <button onClick={() => panToRef.current()}>panTo</button>
      <div id="clickLatlng"></div>
    </div>
  );
}
