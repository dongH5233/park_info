import Footer from "../section/Footer";

import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  let navigate = useNavigate();
  return (
    <div className="body">
      <h1>도심 속 공원</h1>
      <Link
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
        >
        <div>
          <p class='home'>Home</p>
        </div>
      </Link>
      <div className="mw">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
