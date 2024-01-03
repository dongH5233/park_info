import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Nav() {
  let [isActive, setIsActive] = useState(true);
  let [isActive1, setIsActive1] = useState(false);
  let [isActive2, setIsActive2] = useState(false);
  let [isActive3, setIsActive3] = useState(false);
  let navigate = useNavigate();
  return (
    <div className="nav">
      <div className={`box ${isActive === true ? "on" : ""}`}>
        <div
          className="title"
          onClick={(e) => {
            console.log(e.target);
            setIsActive(true);
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(false);
          }}
        >
          <h2>소개</h2>
        </div>
        <img src="/img/image1.jpg" alt="공원" />
        <div className="link">
          <Link
            onClick={(e) => {
              e.preventDefault();
              navigate("/Information");
            }}
          >
            view →
          </Link>
        </div>
      </div>
      <div className={`box ${isActive1 === true ? "on" : ""}`}>
        <div
          className="title"
          onClick={() => {
            setIsActive(false);
            setIsActive1(true);
            setIsActive2(false);
            setIsActive3(false);
          }}
        >
          <h2>공원소개</h2>
        </div>
        <img src="/img/image2.jpg" alt="공원" />
        <div className="link">
          <Link
            onClick={(e) => {
              e.preventDefault();
              navigate("/Park_information");
            }}
          >
            view →
          </Link>
        </div>
      </div>
      <div className={`box ${isActive2 === true ? "on" : ""}`}>
        <div
          className="title"
          onClick={() => {
            setIsActive(false);
            setIsActive1(false);
            setIsActive2(true);
            setIsActive3(false);
          }}
        >
          <h2>위치검색</h2>
        </div>
        <img src="/img/image3.jpg" alt="공원" />
        <div className="link">
          <Link
            onClick={(e) => {
              e.preventDefault();
              navigate("/Location");
            }}
          >
            view →
          </Link>
        </div>
      </div>
      <div className={`box ${isActive3 === true ? "on" : ""}`}>
        <div
          className="title"
          onClick={() => {
            setIsActive(false);
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(true);
          }}
        >
          <h2>갤러리</h2>
        </div>
        <img src="/img/image4.jpg" alt="공원" />
        <div className="link">
          <Link
            onClick={(e) => {
              e.preventDefault();
              navigate("/Gallery");
            }}
          >
            view →
          </Link>
        </div>
      </div>
    </div>
  );
}
