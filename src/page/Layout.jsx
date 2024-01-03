import Footer from "../section/Footer";

import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  let navigate = useNavigate();
  return (
    <div className="body">
      <Link onClick={(e)=>{
        e.preventDefault();
        navigate('/');
      }} >
      <h1>도심 속 공원</h1>
      </Link>
      <div className="mw">
        <Outlet></Outlet>
        <Footer />
      </div>
    </div>
  );
}
