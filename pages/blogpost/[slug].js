import { useRouter } from 'next/router'
import React, { useState } from 'react'
import * as fs from 'fs';
const Slug = (props) => {

  // function createMarkup(c) {
  //   return {__html: c};
  // }
  const router = useRouter();
  const [bloga, setBloga] = useState(props.myblog)






  return (
    <>

      <style jsx>
        {`
  h1{
    text-align: center;
  }
  p
  {
    text-align: center;

  }
  
  
  `}
      </style>
      <div>
        <h1> {bloga && bloga.title} </h1>
         {/* {bloga && <div dangerouslySetInnerHTML={createMarkup(bloga.content)}></div> } */}

        <p>
           {bloga &&  bloga.content }
          </p>
         
  
      </div>

    </>
  )
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-c' } },
      { params: { slug: 'how-to-learn-html' } },
      { params: { slug: 'how-to-learn-javascript' } }
    ],
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;



  let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')



  return {
    props: { myblog: JSON.parse(myblog) },
  };
}

export default Slug;