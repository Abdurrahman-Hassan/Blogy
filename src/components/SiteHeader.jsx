import React from "react";
import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <div className="siteheader">
      <Link to="/">
        <h1>Blogy</h1>
      </Link>
    </div>
  );
}
