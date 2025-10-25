import { BrowserRouter, Route, Routes } from "react-router";

import PageComponents from "./pages/page-components";
import PageHome from "./pages/page-home";
import LayoutMain from "./pages/layout-main";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
