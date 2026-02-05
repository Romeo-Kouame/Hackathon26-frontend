import { useEffect } from "react";
import api from "./services/axios";

function App() {
  useEffect(() => {
    api.get("/")
      .then(res => {
        console.log("BACK CONNECTÉ ✅", res.data);
      })
      .catch(err => {
        console.error("BACK NON CONNECTÉ ❌", err);
      });
  }, []);

  return (
    <div>
      Mon application
    </div>
  );
}

export default App;

