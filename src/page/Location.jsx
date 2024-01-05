import { useEffect, useState } from "react";
import ParkMap from "../component/ParkMap";
import "../css/location.css";
import axios from "axios";
export default function Location() {
  const [activeMenu, setActiveMenu] = useState(0);

  // 강사 : 메뉴 생성 부분이 반복되고 있어요.
  // api에서 받아온 데이터를 이용해서 메뉴를 생성하는 것이 좋겠죠?

  const [data, setData] = useState(null);
  const [uniquePZone, setUniquePZone] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://openAPI.seoul.go.kr:8088/58755454426a6a7932396f744b764a/json/SearchParkInfoService/1/132/`;
      try {
        const response = await axios.get(url);

        setData(response.data.SearchParkInfoService.row); // 강사 : 초기 데이터 수집.
        setUniquePZone([
          ...new Set(
            response.data.SearchParkInfoService.row.map((item) => item.P_ZONE)
          ),
        ]); // 강사 : 중복되지 않는 지역명을 수집.
        setFilteredData(response.data.SearchParkInfoService.row);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="PageThree">
        <header>
          <div>
            <img src={`${process.env.PUBLIC_URL}/img/image3.jpg`} alt="이미지3" />
          </div>
        </header>
        <div className="Location_contents">
          <div className="mainSec">
            <h2>위치검색</h2>
            <div className="loca_wrap">
              <div>
                <ul className="loca">
                  {uniquePZone.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={activeMenu === i ? "on" : ""}
                        onClick={() => {
                          setActiveMenu(i);

                          const newFilteredData = data.filter(
                            (dataItem) => dataItem.P_ZONE === item
                          );
                          setFilteredData(newFilteredData);
                        }}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="map">
                <ParkMap data={filteredData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
