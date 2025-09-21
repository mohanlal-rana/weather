import React from "react";

export default function Details({wind,name,unit}) {
  return (
    <li>
      <p>{name}</p>
      <span>{wind}<span className="unit">{unit}</span></span>
    </li>
  );
}
