import React, { useEffect, useState } from "react";
import axios from "axios";

const Practice6 = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [active, setActive] = useState(true);
  const [newId, setNewId] = useState(0);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${Number(newId)}`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newId]);

  const onClick = () => {
    setNewId(id);
  };

  const stopHere = (e) => {
    if (e.target.value < 1 || e.target.value > 100) {
      setMessage(`Please input correct value`);
      setActive(false);
    } else {
      setMessage("");
      setActive(true);
    }
    if (e.target.value.length === 0) {
      setMessage("");
      setId("");
    }
  };

  return (
    <div style={{ border: "3px solid black" }}>
      <h2>Input a number from 1 - 100</h2>
      <input
        type="number"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
          stopHere(e);
        }}
      />
      <button onClick={() => onClick()}>Search Post</button>

      <h1>{message}</h1>

      {active ? <h1>{posts.title}</h1> : ""}
      {active ? <h3>{posts.body}</h3> : ""}
    </div>
  );
};

export default Practice6;
