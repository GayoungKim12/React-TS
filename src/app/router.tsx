import ButtonPage from "@/pages/ButtonPage";
import MainPage from "@/pages/MainPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/button" element={<ButtonPage />} />
      </Route>
    </Routes>
  );
}
