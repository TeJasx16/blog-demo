import React from "react";
import styles from "../styles/about.module.css";

import Link from "next/link";
const about = () => {
  // <styles
  return (
    <>
      <div className={styles.men}>
        <h2>Welcome To Learn New Things</h2>
        <p className={styles.pp}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis
          recusandae voluptatem praesentium, amet a reiciendis veniam eos
          distinctio quisquam illum officiis culpa, aliquam libero quaerat
          voluptates nulla. Beatae, expedita.
        </p>

        <h3 className={styles.hh3}>build by :- TEJAS KHARADE</h3>
      </div>
      <div className={styles.men}>
        <h4>visit agian</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem quo quibusdam animi fugit modi perspiciatis recusandae
          delectus, dolore sequi. Quaerat libero aliquam dolores dignissimos?
          Doloremque impedit nisi ipsam nostrum aut.lorem
        </p>
      <h5 className={styles.pp}> all right recieve 2022</h5>
      </div>

    </>
  );
};

export default about;
