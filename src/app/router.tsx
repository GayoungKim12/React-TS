import ButtonPage from "@/pages/ButtonPage";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ButtonPage />} />
    </Routes>
  );
};

export default AppRouter;
