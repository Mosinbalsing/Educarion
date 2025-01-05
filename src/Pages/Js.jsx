
import { Routes, Route } from "react-router-dom";

function Js() {
  return (
    <Routes>
      <Route path="/" element={<div>Select a JavaScript Topic</div>} />
      <Route path="/variables" element={<div>JavaScript Variables</div>} />
      <Route path="/functions" element={<div>JavaScript Functions</div>} />
      <Route path="/objects" element={<div>JavaScript Objects</div>} />
    </Routes>
  );
}

export default Js;
