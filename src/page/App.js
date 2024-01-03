import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Informaion from "./Informaion";
import MainPage from "./MainPage";
import Park_information from "./Park_information";
import Gallery from "./Gallery";
import Location from "./Location";
import Dobong from "../component/Dodong";
import Jung from "../component/Jung";
import Jongno from "../component/Jongno";
import Yongsan from "../component/Yongsan";
import Dongdaemun from "../component/Dongdaemun";
import Seongdong from "../component/Seongdong";
import Gwangjin from "../component/Gwangjin";
import Jungnang from "../component/Jungnang";
import Seongbuk from "../component/Seongbuk";
import Gangbuk from "../component/Gangbuk";
import Nowon from "../component/Nowon";
import Seocho from "../component/Seocho";
import Gangnam from "../component/Gangnam";
import Songpa from "../component/Songpa";
import Gangdong from "../component/Gangdong";
import Eunpyeong from "../component/Eunpyeong";
import Seodaemun from "../component/Seodaemun";
import Mapo from "../component/Mapo";
import Yangcheon from "../component/Yangcheon";
import Gangseo from "../component/Gangseo";
import Guro from "../component/Guro";
import Geumcheon from "../component/Geumcheon";
import Youndeungpo from "../component/Youndeungpo";
import Dongjak from "../component/Dongjak";
import Gwanak from "../component/Gwanak";
import Etc from "../component/Etc";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="Information" element={<Informaion />} />
          <Route path="Park_information" element={<Park_information />}>
            <Route path="Jung" element={<Jung />} />
            <Route path="Jongno" element={<Jongno />} />
            <Route path="Yongsan" element={<Yongsan />} />
            <Route path="Dongdaemun" element={<Dongdaemun />} />
            <Route path="Seongdong" element={<Seongdong />} />
            <Route path="Gwangjin" element={<Gwangjin />} />
            <Route path="Jungnang" element={<Jungnang />} />
            <Route path="Seongbuk" element={<Seongbuk />} />
            <Route path="Gangbuk" element={<Gangbuk />} />
            <Route path="Dodong" element={<Dobong />} />
            <Route path="Nowon" element={<Nowon />} />
            <Route path="Seocho" element={<Seocho />} />
            <Route path="Gangnam" element={<Gangnam />} />
            <Route path="Songpa" element={<Songpa />} />
            <Route path="Gangdong" element={<Gangdong />} />
            <Route path="Eunpyeong" element={<Eunpyeong />} />
            <Route path="Seodaemun" element={<Seodaemun />} />
            <Route path="Mapo" element={<Mapo />} />
            <Route path="Yangcheon" element={<Yangcheon />} />
            <Route path="Gangseo" element={<Gangseo />} />
            <Route path="Guro" element={<Guro />} />
            <Route path="Geumcheon" element={<Geumcheon />} />
            <Route path="Youndeungpo" element={<Youndeungpo />} />
            <Route path="Dongjak" element={<Dongjak />} />
            <Route path="Gwanak" element={<Gwanak />} />
            <Route path="Etc" element={<Etc />} />
          </Route>
          <Route path="Location" element={<Location />} />
          <Route path="Gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </div>
  );
}
