import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { Top } from "../components/pages/Top";
import { HeaderOnly } from "../components/templates/HeaderOnly";
import { Users } from "../components/pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="/users"
          element={
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
