import { useNavigate } from "react-router-dom";
import cssStyle from "../css/park_info.module.css";

export default function ParkList({ data }) {
  let navigate = useNavigate();
  return (
    <>
      {data &&
        data.map((item) => (
          <div className={cssStyle.park_info} key={item.P_IDX}>
            <div
              className={cssStyle.link}
              onClick={(e) => {
                navigate(`/detail/${item.P_IDX}`, { state: item });
              }}
            >
              {item.P_PARK}
            </div>
            <div>{item.P_ADDR}</div>
            <div>
              <img src={item.P_IMG} alt="이미지" />
            </div>
          </div>
        ))}
    </>
  );
}
