import { useState } from "react";
import axios from "axios";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [sum, setSum] = useState("");

  const addNumbers = async () => {
    try {
      const res = await axios.post("http://localhost:3000/add", {
        a: Number(a),
        b: Number(b),
      });

      setSum(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Two Numbers</h1>

      <input
        type="number"
        placeholder="First Number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Second Number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br /><br />

      <button onClick={addNumbers}>Add</button>

      <h2>Sum = {sum}</h2>
    </div>
  );
}

export default App;