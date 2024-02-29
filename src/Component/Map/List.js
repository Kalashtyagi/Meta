import React, { useState } from "react";
import data from "./data.json";

const List = () => {
  const [show, setShow] = useState(false);
  const topDesserts = data.data.map((dessert, index) => {
    return (
      <div key={dessert.id}>
        <p>
          <strong>
            {index + 1}. {dessert.title}
          </strong>{" "}
          - {dessert.description}
        </p>
        <p>Price: {dessert.price}</p>
      </div>
    );
  });

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "hide dessert" : "show dessert"}
      </button>

      {show && (
        <div>
          <h1>Top Desserts</h1>
          {topDesserts}
        </div>
      )}
    </div>
  );
};

export default List;
