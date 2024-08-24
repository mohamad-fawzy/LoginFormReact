import MainCard from "./componant/mincard";
import "./cssProject.css";
import { Route, Routes } from "react-router";
import { HomePage } from "./componant/homePage";
import DataProvider from "./componant/dataProvider";
import FormsArea from "./componant/FormsArea";
import ErrorMaseg from "./componant/errorMassage";

function AllComponant() {
  return (
    <div className="AllComponant">
      <DataProvider>
        <Routes>
          <Route path="" element={<MainCard />} />
          <Route path="homePage" element={<HomePage />} />
          <Route path="ErrorMaseg" element={<ErrorMaseg />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default AllComponant;
