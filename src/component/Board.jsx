import { useState } from "react";
import MainGallery from "./MainGallery";

export default function Board() {
  let [openNotice, setOpenNotice] = useState(true);
  let [openEvent, setOpenEvent] = useState(false);
  return (
    <>
      <div className="sec">
        <h2>게시판</h2>
        <hr></hr>
        <div className="wrap">
          <div className="board">
            <div className="sec_hd">
              <h3>알림글</h3>
              <div>
                <button
                  onClick={() => {
                    setOpenNotice(true);
                    setOpenEvent(false);
                  }}
                >
                  공지사항
                </button>
                <button
                  onClick={() => {
                    setOpenNotice(false);
                    setOpenEvent(true);
                  }}
                >
                  이벤트
                </button>
              </div>
            </div>
            <div className={`notice ${openNotice && "on"}`}>
              <p>- 공지사항 1</p>
              <p>- 공지사항 2</p>
              <p>- 공지사항 3</p>
              <p>- 공지사항 4</p>
              <p>- 공지사항 5</p>
            </div>
            <div className={`event ${openEvent && "on"}`}>
              <p>- 이벤트 1</p>
              <p>- 이벤트 2</p>
              <p>- 이벤트 3</p>
              <p>- 이벤트 4</p>
              <p>- 이벤트 5</p>
            </div>
          </div>
          <div className="gallery">
            <h3>갤러리</h3>
            <div>
              <MainGallery />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
