import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>Error</h1>
      <Link to={"/"}>
        <h4>Go back</h4>
      </Link>
    </div>
  );
}
