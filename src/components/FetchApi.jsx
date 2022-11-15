import React from "react";
import axios from "axios";
import { useState, useEffect, useReducer } from "react";

const FetchApi = () => {
  const count = 1;
  const reducer = (state, action) => {
    switch (action) {
      case "next":
        return state + 1;
      case "prev":
        return state - 1;
      default:
        return state;
    }
  };

  const [state, setState] = useState({});
  const [num, dispatch] = useReducer(reducer, count);
  const [activePrev, setActivePrev] = useState(true);
  const [activeNext, setActiveNext] = useState(false);

  const disableButtonOne = (num) => {
    if (num === 1) {
      setActivePrev(true);
      setActiveNext(false);
    } else if (num > 1) {
      setActivePrev(false);
      setActiveNext(false);
    } else if (num === 9) {
      setActivePrev(false);
      setActiveNext(true);
    }
  };

  const disableButtonTwo = (num) => {
    if (num === 1) {
      setActivePrev(true);
      setActiveNext(false);
    } else if (num > 1) {
      setActivePrev(false);
      setActiveNext(false);
    } else if (num === 9) {
      setActivePrev(false);
      setActiveNext(true);
    }
  };

  useEffect(() => {
    // async await
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${num}`)
      .then((res) => {
        setState(res.data);
        // console.log(num);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [num]);

  return (
    <div style={{ border: "3px solid blue" }}>
      <h1>User Data</h1>
      <h3>Name: {state.name}</h3>
      <h3>Website: {state.website}</h3>
      <h3>Email: {state.email}</h3>
      <h3>Phone: {state.phone}</h3>

      <button
        disabled={activePrev}
        onClick={() => {
          dispatch("prev");
          disableButtonOne(num);
        }}
      >
        Prev
      </button>
      <button
        disabled={activeNext}
        onClick={() => {
          dispatch("next");
          disableButtonTwo(num);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default FetchApi;
