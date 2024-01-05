import { useState } from "react";
import "../css/Information.css";
export default function Informaion() {
  let [isPurpose, setIsPurpose] = useState(true);
  let [isRange, setIsRange] = useState(false);
  let [isAPI, setIsAPI] = useState(false);
  return (
    <>
      <div className="PageOne">
        <header>
          <div>
            <img src={`${process.env.PUBLIC_URL}/img/image1.jpg`} alt="이미지1" />
          </div>
        </header>
        <div className="info_contents">
          <div className="mainSec">
            <h2>소개</h2>
            <div class="contents_title">
              <div
                onClick={() => {
                  setIsPurpose(true);
                  setIsRange(false);
                  setIsAPI(false);
                }}
              >
                목적
              </div>
              <div
                onClick={() => {
                  setIsPurpose(false);
                  setIsRange(true);
                  setIsAPI(false);
                }}
              >
                범위
              </div>
              <div
                onClick={() => {
                  setIsPurpose(false);
                  setIsRange(false);
                  setIsAPI(true);
                }}
              >
                API
              </div>
            </div>
            <div className="content">
              <div className={`purpose ${isPurpose && "on"}`}>
                <p>
                  ● 서울에 위치한 다양한 공원에 대한 정보를 제공하고 다양한
                  이용자가 목적에 맞게 공원을 이용할 수 있도록 하고자 한다.
                </p>
                <p>
                  ● 공원에서의 다양한 활동을 제안하고 이를 통해 공원을 이용하는
                  시민들의 건강 증진을 위해 노력한다.
                </p>
              </div>
              <div className={`range ${isRange && "on"}`}>
                <p>
                  ● 공원에 대한 다양한 정보를 제공하고 공원 내 다양한 시설을
                  이용할 수 있도록 정보를 제공한다
                </p>
                <p>● 지역에 따른 공원에 대한 정보를 제공</p>
                <p>● 공원 내 각종 편의시설에 대한 정보를 제공</p>
                <p>● 현재 내 위치와 가까운 순서대로 공원의 위치 정보를 제공</p>
              </div>
              <div className={`API ${isAPI && "on"}`}>
                <p>
                  ● 서울 주요 공원 현황:
                  <br />
                  http://openapi.seoul.go.kr:8088/58755454426a6a7932396f744b764a/xml/SearchParkInfoService/1/132/
                </p>
                <p>● 획득처: 서울 열린 데이터 광장</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
