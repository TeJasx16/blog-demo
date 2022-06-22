import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const conatct = () => {
  const handlonsubmit = (e) => {
    
    e.preventDefault();
    // console.log(name, phno, mail, desc);

    const data = { name , phno , mail ,desc};

    fetch('http://localhost:3000/api/postcontact/', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert('WE WILL CONTACT WITH YOU ASAP');
        setDesc('')
        setMail('')
        setName('')
        setPhno('')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const hoc = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "phno") {
      setPhno(e.target.value);
    } else if (e.target.name == "mail") {
      setMail(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };

  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [mail, setMail] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
    <div className={styles.in}>

      <h2 >Fill The Form</h2>
      <p >we will inform you ASAP</p>
    </div>
<hr />
      <form onSubmit={handlonsubmit} className={styles.cont}>
        <div className={styles.pd}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            value={name}
            onChange={hoc}
            name="name"
            className={styles.hw}
            id="name"
            required
          />
        </div>
        <div className={styles.pd}>
          <label htmlFor="phno">PHno : </label>
          <input
            type="number"
            value={phno}
            onChange={hoc}
            name="phno"
            className={styles.hw}
            id="phno"
            required
          />
        </div>
        <div className={styles.pd}>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            value={mail}
            onChange={hoc}
            name="mail"
            className={styles.hw}
            id="email"
            required
          />
        </div>
        <div className={styles.pd}>
          <label htmlFor="desc">Desc : </label>
          <textarea

            name="desc"
            value={desc}
            onChange={hoc}
            className={styles.hw}
            id="desc"
            rows="3"
            required
          ></textarea>
        </div>

        <div className={styles.pd}>
          <input className={styles.sb} type="submit" />
        </div>
      </form>
    </>
  );
};

export default conatct;
