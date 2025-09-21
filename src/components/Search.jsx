import React, { useState } from "react";

export default function Search({onSearch}) {
  const[input,setInput]=useState("");
    const handleInputChange = (event) => {
    setInput(event.target.value);
  };
    const handleOnSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };
  return (
    <form action="" onSubmit={handleOnSubmit}>
      <input type="text" value={input} onChange={handleInputChange} />
      <button type="submit">search</button>
    </form>
  );
}
