import axios from "axios";
import { useState, useEffect } from "react";
import cssStyle from "../css/park_info.module.css";

export default function Gangnam() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 서울 공원 정보 API
    // https://data.seoul.go.kr/dataList/OA-394/S/1/datasetView.do

    const fetchData = async () => {
      // 아래 서비스키는 강사의 키이므로 본인의 키로 변경해야 함
      const url = `http://openAPI.seoul.go.kr:8088/58755454426a6a7932396f744b764a/json/SearchParkInfoService/1/132/`;
      try {
        const response = await axios.get(url);
        setData(response.data.SearchParkInfoService.row);

        // 정보구조 참고
        // console.log(response.data.SearchParkInfoService.row);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
      <div >
        {data &&
          data
            .filter((item) => item.P_ZONE === "강남구")
            .map((item) => (
              <div className={cssStyle.park_info} key={item.P_IDX}>
                <div>{item.P_PARK}</div>
                <div>{item.P_ADDR}</div>
                <div>
                  <img src={item.P_IMG} alt="이미지" />
                </div>
              </div>
            ))}
      </div>
  );
}
