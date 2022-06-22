import React from 'react'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
const navbar = () => {
  return (
   <>

   <nav >
       <ul className={styles.bar}>
           <li > <Link  href='/'>HOME</Link> </li>
           <li> <Link href='/about'>ABOUT</Link> </li>
           <li> <Link href='/blog'>Blogs</Link> </li>
           <li> <Link href='/conatct'>CONTACT</Link> </li>
       </ul>


   </nav>
   </>
  )
}

export default navbar