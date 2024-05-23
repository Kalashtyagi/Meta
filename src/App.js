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
import ImageSize from "./Component/ImageExceed/ImageSize";
import StateHook from "./Component/useState/StateHook";
import Goal from "./Component/useState/Goal";
import Memo from "./Memo/Memo";
import Memo1 from "./Memo/Memo1";
import Callback from "./Component/Callback/Callback";
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
      {/* <ImageSize/> */}
      {/* <StateHook/> */}
      {/* <Goal/> */}
      {/* <Memo/> */}
      {/* <Memo1/> */}
      <Callback/>
    </>
  );
}

export default App;
