import { useEffect, useState } from "react";
import axios from "axios";
import "../css/park_information.css";
import ParkList from "../component/ParkList";
import Detail from "../component/Detail";
export default function Park_information() {
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
      <div className="PageTwo">
        <header>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/image2.jpg`}
              alt="이미지2"
            />
          </div>
        </header>
        <div className="Park_info_contents">
          <div className="mainSec">
            <div className="park_wrap">
              <ul className="park_loca">
                {uniquePZone.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={activeMenu === i ? "on" : ""} //css에서 on 클래스를 만들어서 활성화 시키기
                      onClick={() => {
                        setActiveMenu(i);

                        const newFilteredData = data.filter(
                          (dataItem) => dataItem.P_ZONE === item // 강사 : 지역명이 일치하는 데이터만 필터링
                        );
                        setFilteredData(newFilteredData);
                      }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              <div className="park_contents">
                <div>
                  <h2>공원소개</h2>
                  <div className="park_menu">
                    <ul>
                      <li>공원이름</li>
                      <li>공원주소</li>
                      <li>공원사진</li>
                    </ul>
                  </div>
                  {/* 강사 : 아래 요소의 역할은 */}
                  <div className="park_zone">
                    <ParkList data={filteredData} />
                    <Detail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 강사 : 아래 컴포넌트는 재사용성을 고려해서 따로 분리하는 했으니 styling은 따로 하세요.
