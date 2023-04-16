import "@progress/kendo-theme-default/dist/all.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import { BeerCardsPage, BeerGridPage, MemberPage } from "./pages";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<BeerGridPage />} />
          <Route path="/Grid" element={<BeerGridPage />} />
          <Route path="/Cards" element={<BeerCardsPage />} />
          <Route path="/Member" element={<MemberPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
