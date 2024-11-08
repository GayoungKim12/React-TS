import ButtonPage from "@/pages/ButtonPage";
import MainPage from "@/pages/MainPage";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/button" element={<ButtonPage />} />
    </Routes>
  );
};

export default AppRouter;
