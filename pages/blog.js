import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";
// import { count } from "console";
const Blog = (props) => {
  const [bloga, setBloga] = useState(props.allblogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d= await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`);
    setCount(count + 2);
    let data = await d.json();
    setBloga(data);
    
  };

  return (
    <>
      <h2 className={styles.bhed}>All Traniding Blogs</h2>
      <div className={styles.main}>
        <InfiniteScroll
          dataLength={bloga.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== bloga.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {bloga.map((blogitem) => {
            return (
              <div key={blogitem.slug}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h2 className={styles.po}>{blogitem.title}</h2>
                </Link>
                <p className={styles.pd}>
                  {" "}
                  {blogitem.content.substr(0, 100)}...{" "}
                </p>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
   let allCount = data.length;
  let myfile;
  let allblogs = [];
  for (let index = 0; index < 5 ; index++) {
    const item = data[index];

    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allblogs.push(JSON.parse(myfile));
  }
  return {
    props: { allblogs , allCount }, // will be passed to the page component as props
  };
}                       

export default Blog;
