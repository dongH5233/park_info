import "../css/park_information.css";
import Dobong from "../component/Dodong";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
export default function Park_information() {
    let[isOne, setIsOne] = useState(false)
    let[isTwo, setIsTwo] = useState(false)
    let[isThree, setIsThree] = useState(false)
    let[isFour, setIsFour] = useState(false)
    let[isFive, setIsFive] = useState(false)
    let navigate = useNavigate();

  return (
    <>
      <div className="PageTwo">
        <header>
          <div></div>
        </header>
        <div className="Park_info_contents">
          <div className="mainSec">
            <div className="park_wrap">
             
                  <ul className ="park_loca">
                    <li>
                      <div onClick={()=>{
                        setIsOne(true)
                        setIsTwo(false)
                        setIsThree(false)
                        setIsFour(false)
                        setIsFive(false)
                      }}>도심생활권</div>
                      <ul className ={`sub ${isOne && 'on'}`}>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Jung');
                        }} >중구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Jongno');
                        }}>용산구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Yongsan');
                        }}>종로구</Link></li>
                      </ul>
                    </li>
                    <li>
                      <div onClick={()=>{
                        setIsOne(false)
                        setIsTwo(true)
                        setIsThree(false)
                        setIsFour(false)
                        setIsFive(false)
                      }}>동북생활권</div>
                      <ul className ={`sub ${isTwo && 'on'}`}>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Dongdaemun');
                        }} >동대문구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Seongdong');
                        }} >성동구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Gwangjin');
                        }} >광진구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Jungnang');
                        }} >중랑구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Seongbuk');
                        }} >성북구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Gangbuk');
                        }} >강북구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Dodong');
                        }} >도봉구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Nowon');
                        }} >노원구</Link></li>
                      </ul>
                    </li>
                    <li>
                      <div onClick={()=>{
                        setIsOne(false)
                        setIsTwo(false)
                        setIsThree(true)
                        setIsFour(false)
                        setIsFive(false)
                      }}>동남생활권</div>
                      <ul className ={`sub ${isThree && 'on'}`}>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Seocho');
                        }} >서초구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Gangnam');
                        }} >강남구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Songpa');
                        }} >송파구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Gangdong');
                        }} >강동구</Link></li>
                      </ul>
                    </li>
                    <li>
                      <div onClick={()=>{
                        setIsOne(false)
                        setIsTwo(false)
                        setIsThree(false)
                        setIsFour(true)
                        setIsFive(false)
                      }}>서북생활권</div>
                      <ul className ={`sub ${isFour && 'on'}`}>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Eunpyeong');
                        }} >은평구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Seodaemun');
                        }} >서대문구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Mapo');
                        }} >마포구</Link></li>
                      </ul>
                    </li>
                    <li>
                      <div onClick={()=>{
                        setIsOne(false)
                        setIsTwo(false)
                        setIsThree(false)
                        setIsFour(false)
                        setIsFive(true)
                      }}>서남생활권</div>
                      <ul className ={`sub ${isFive && 'on'}`}>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Yangcheon');
                        }} >양천구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Gangseo');
                        }} >강서구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Guro');
                        }} >구로구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Geumcheon');
                        }} >금천구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Youndeungpo');
                        }} >영등포구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Dongjak');
                        }} >동작구</Link></li>
                        <li><Link onClick={(e)=>{
                            e.preventDefault();
                            navigate('/Park_information/Gwanak');
                        }} >관악구</Link></li>
                      </ul>
                      <div className="etc" onClick={()=>{
                        setIsOne(false)
                        setIsTwo(false)
                        setIsThree(false)
                        setIsFour(false)
                        setIsFive(false)
                      }}><Link onClick={(e)=>{
                        e.preventDefault();
                        navigate('/Park_information/Etc')
                      }}>기타</Link></div>
                    </li>
                  </ul>
           
                <div className="park_contents">
                    <div >
                      <h2>공원소개</h2>
                      <div className="park_menu">
                        <ul>
                          <li>공원이름</li>
                          <li>공원주소</li>
                          <li>공원사진</li>
                        </ul>
                      </div>
                      <div className="park_zone"></div>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
