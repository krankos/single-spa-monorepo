// import React from "react";
// export default function App() {
//   const [count, setCount] = React.useState(0);
//   return (
//     <div>
//       <p>{count}</p>
//       {/* increment and decrement buttons */}
//       <button onClick={() => setCount(count + 1)}>+ Increment</button>
//       <button onClick={() => setCount(count - 1)}>- Decrement</button>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Stack, Button } from "@mui/material";
import { getState, setState, subscribe } from "@org/root-config";
function App() {
  const [count, setCount] = useState(getState().count);
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setCount(getState().count);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>{count}</p>
          {/* increment and decrement buttons */}
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => getState().increment()}>
              <AddIcon />
            </Button>
            <Button variant="contained" onClick={() => getState().reset()}>
              <RefreshIcon />
            </Button>
            <Button variant="contained" onClick={() => getState().decrement()}>
              <RemoveIcon />
            </Button>
          </Stack>
        </div>
      </header>
    </div>
  );
}

export default App;
