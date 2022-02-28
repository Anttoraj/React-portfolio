import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [username, setusername] = useState("");
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    console.log(response);
    if (response.status === 200) {
      setDisplay(true);
      setusername(response.data);
    }
  };

  return (
    <div className="App">
      {display ? (
        <h1>Data is succesfully returned from backend</h1>
      ) : (
        <h1>No data retuened from the backend server</h1>
      )}
      <h1>result :{username}</h1>
    </div>
  );
}

export default App;
