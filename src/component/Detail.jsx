import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const Pdata = location.state;
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://openAPI.seoul.go.kr:8088/58755454426a6a7932396f744b764a/json/SearchParkInfoService/1/132`;
      try {
        const response = await axios.get(url);
        setData(response.data.SearchParkInfoService.row);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="box">
      <div>
        {data &&
          data
            .filter((e) => e === Pdata)
            .map((item) => (
              <div key={item.P_IDX}>
                <div>{item.P_IDX}</div>
                <div>{item.P_PARK}</div>
                <div>{item.P_LIST_CONTENT}</div>
              </div>
            ))}
      </div>
    </div>
  );
}
