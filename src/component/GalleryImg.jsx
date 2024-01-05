import axios from "axios";
import { useEffect, useState } from "react";
import cssStyle from "../css/galleryImg.module.css";

export default function GalleryImg() {
  const [data, setData] = useState(null);

  useEffect(() => {


    const fetchData = async () => {

      const url = `http://openAPI.seoul.go.kr:8088/58755454426a6a7932396f744b764a/json/SearchParkInfoService/10/18/`;
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
    <div className={cssStyle.container}>
      {data &&
        data.map((item) => (
          <div className={cssStyle.galleryImg} key={item.P_IDX}>
              <div className={cssStyle.item}>
                  <img src={item.P_IMG} alt="이미지" />
                  <div>{item.P_PARK}</div>
              </div>
            </div>
        ))}
    </div>
  );
}
