import Mainslide from "../component/Mainslide";
import Nav from "../component/Nav";
export default function Header() {
  return (
    <>
      <Nav />
      <div className="contain">
        <Mainslide />
      </div>
        <p className="slideTitle"> 공원의 사계</p>
    </>
  );
}
