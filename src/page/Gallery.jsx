import GalleryImg from "../component/GalleryImg";
import "../css/gallery.css";
export default function Gallery() {
  return (
    <>
      <div className="PageFour">
        <header>
          <div>
            <img src={`${process.env.PUBLIC_URL}/img/image4.jpg`} alt="이미지4" />
          </div>
        </header>
        <div className="Gallery_contents">
          <div className="mainSec">
            <h2>갤러리</h2>
            <GalleryImg />
          </div>
        </div>
      </div>
    </>
  );
}
