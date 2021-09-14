import { Chart } from "react-charts";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [payload, setPayload] = useState();
  useEffect(() => {
    axios.get("http://localhost:4000").then((resp) => {
      setPayload(JSON.stringify(resp));
    });
  });
  return <div className="App">{payload ? payload : null}</div>;
}

export default App;
