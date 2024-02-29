import React from "react";
import List from "./Component/Map/List";
import List1 from "./Component/Map/List1";
import ControlledForm from "./Component/Form/Form";
import RegistrationForm from "./Component/Form/RegistrationForm/RegistrationForm";
import StateList from "./Component/GetState";
import Break from "./Component/BreakingNews/Break";
import Internalisation from "./Component/Internalisation/Internalisation";
import HtmlString from "./Component/HtmlTostring/HtmlString";
import Table from "./Component/table";
import Dashboard from "./Responsive";
function App() {
  const person = {
    name: "kalash",
    age: 23,
  };
  localStorage.setItem("person", JSON.stringify(person));
  const a = JSON.parse(localStorage.getItem("person"));
  console.log(a);
  return (
    <>
      {/* <List /> */}
      {/* <List1 /> */}
      {/* <ControlledForm /> */}
      {/* <RegistrationForm /> */}
      {/* <StateList /> */}
      {/* <Break /> */}
      {/* <Internalisation /> */}
      {/* <HtmlString /> */}
      {/* <Table /> */}
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
