import axios from "axios";
import { useEffect, useState } from "react";
import cssStyle from '../css/maingallery.module.css'

export default function MainGallery() {
  const [data, setData] = useState(null);

  useEffect(() => {


    const fetchData = async () => {
      const url = `http://openAPI.seoul.go.kr:8088/58755454426a6a7932396f744b764a/json/SearchParkInfoService/10/13/`;
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
    <div className={cssStyle.mainGcontainer}>
      {data &&
        data.map((item) => (
          <div className={cssStyle.mainGallery} key={item.P_IDX}>
              <div className={cssStyle.mainGalleryItem}>
                  <img src={item.P_IMG} alt="이미지" />
              </div>
            </div>
        ))}
    </div>
  );
}