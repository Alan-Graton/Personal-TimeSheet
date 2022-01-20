import React, { useState } from "react";

import Dashboard from "./pages/Dashboard/index";
import Login from "./pages/Login/index";

function App() {
  const [user, setUser] = useState(false);
  const handleSetUser = (event) => {
    event.preventDefault();
    setUser(!user);
  };
  if (user) {
    return <Dashboard />;
  } else {
    return <Login SetUserEvent={handleSetUser} />;
  }
}

export default App;
