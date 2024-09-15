"use client";
import Axios from "axios";
import { useState } from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  // Button Function
  function createNewUser(event: { preventDefault: () => void }) {
    if (name && age && email) {
      Axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/createuser`, {
        name,
        age,
        email,
      }).then(res => {
        res.data;
      });
    } else {
      // form will no longer reload the page when the button is clicked.
      event.preventDefault();
      alert("Fill in all Inputs");
    }
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={e => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={createNewUser}>Create User</button>
      </form>
    </>
  );
}
