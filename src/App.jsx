// src/App.jsx
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import MailboxList from "./components/MailboxList.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";
import MailboxForm from "./components/MailboxForm.jsx";
import { useState, useEffect } from "react";

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    { _id: 1,
      boxSize: "Small", 
      boxHolder: "Alex" },
  ]);
  // console.log(mailboxes);
      const addMailbox = (newmailbox) => {
        newmailbox._id = mailboxes[mailboxes.length-1]._id +1;
        setMailboxes((prevMailboxes) => [...prevMailboxes, newmailbox]);
      };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1> Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};
export default App;
