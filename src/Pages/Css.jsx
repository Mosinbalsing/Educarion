import { Routes, Route } from "react-router-dom";
import Flex from "./cSS/Flex";
import Grid from "./cSS/Grid";
import Position from "./cSS/Position";
function Css() {
  return (
    <Routes>
      <Route path="/" element={<div>Select a CSS Topic</div>} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/flex" element={<Flex />} />
      <Route path="/position" element={<Position />} />
    </Routes>
  );
}

export default Css;
