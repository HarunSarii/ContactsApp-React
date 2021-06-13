import React, { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Form from "./components/form/Form";
import { addInfo, updateHandler } from "./utils/functions";
import { ToastContainer } from "react-toastify";

const initialValues = { username: "", phoneNumber: "", gender: "" };

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      updateHandler(info);
    } else {
      addInfo(info);
    }
    setInfo(initialValues);
  };

  const updateFormHandler = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };
  return (
    <div className="App">
      <Form
        className="form"
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts className="contacts" updateFormHandler={updateFormHandler} />
      <ToastContainer />
    </div>
  );
}

export default App;
