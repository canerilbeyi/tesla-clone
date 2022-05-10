import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
    </div>
  );
}

export default App;
