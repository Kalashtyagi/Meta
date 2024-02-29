import React from "react";
import "./Break.css";

export default function Break() {
  return (
    <>
      <div className="news red full-width">
        <span>Breaking News</span>
        <ul className="scrollLeft">
          <li>
            <a href="#">Text 1 - Short Description</a>
          </li>
          <li>
            <a href="#">Text 2 - Short Description</a>
          </li>
          <li>
            <a href="#">Text 3 - Short Description</a>
          </li>
          <li>
            <a href="#">Text 4 - Short Description</a>
          </li>
        </ul>
      </div>
    </>
  );
}
