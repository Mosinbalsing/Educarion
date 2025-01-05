
import { Routes, Route } from "react-router-dom";

function Python() {
  return (
    <Routes>
      <Route path="/" element={<div>Select a Python Topic</div>} />
      <Route path="/syntax" element={<div>Python Syntax</div>} />
      <Route path="/data-types" element={<div>Python Data Types</div>} />
      <Route path="/functions" element={<div>Python Functions</div>} />
    </Routes>
  );
}

export default Python;
