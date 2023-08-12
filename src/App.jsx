import { Suspense } from "react";
import "./App.css";

import Website from "./pages/Website";
import Layout from "./components/Layout/Layout";
import Apartments from "./pages/Apartments/Apartments"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apartment from "./components/Apartment/Apartment.jsx";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/Apartments">

              {/* // on the properties path, if there is no "propertyId" appended to its end, go to the properties page. if there is propertyId appended to its end, go to that particular property page */}
              <Route index element={<Apartments />} />
              <Route path=":id" element={<Apartment />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
