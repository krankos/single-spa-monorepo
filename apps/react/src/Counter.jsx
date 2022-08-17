import React, { useState, useEffect } from "react";
import { getState, setState, subscribe } from "@org/root-config";
export default function Counter() {
  //   getState().increment();
  //   console.log(getState());
  const [count, setCount] = useState(getState().count);
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setCount(getState().count);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          getState().increment();
          // console.log(getState().count);
        }}
      >
        +
      </button>
    </div>
  );
}
