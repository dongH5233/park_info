import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Informaion from "./Informaion";
import MainPage from "./MainPage";
import Park_information from "./Park_information";
import Gallery from "./Gallery";
import Location from "./Location";
import Detail from "../component/Detail";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="Information" element={<Informaion />} />
          <Route path="Park_information" element={<Park_information />}></Route>
          <Route path="Location" element={<Location />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}
