
import { Routes, Route } from "react-router-dom";

function Html() {
  return (
    <Routes>
      <Route path="/" element={<div>Select an HTML Topic</div>} />
      <Route path="/elements" element={<div>HTML Elements</div>} />
      <Route path="/attributes" element={<div>HTML Attributes</div>} />
      <Route path="/forms" element={<div>HTML Forms</div>} />
    </Routes>
  );
}

export default Html;
