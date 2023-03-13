import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, BrowserRouter as Router, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
   <BrowserRouter>
     <Routes>
        <Route path="*" element={<App />} />
     </Routes>
   </BrowserRouter>
    
  </React.StrictMode>
);
