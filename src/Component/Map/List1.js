import React from "react";

const desserts = [
  {
    title: "Cake",
    description: "My Cake",
    calories: 500,
  },
];

const newDessert = desserts.map((dessert) => {
  return {
    title: dessert.title.toUpperCase(),
    ...dessert,
    kCal: dessert.calories / 1000,
  };
});
console.log("new", newDessert);

const List1 = () => {
  return <>Hello</>;
};

export default List1;
