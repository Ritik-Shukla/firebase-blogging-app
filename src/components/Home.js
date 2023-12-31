import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection,getDocs } from "firebase/firestore"; 

function Home() {
  const [posts,setPosts] = useState([]);

useEffect(()=>{
  async function fetchData(){
    const snapshot = await getDocs(collection(db, "blogs"));
   const blogs= snapshot.docs.map((doc)=>{
    return{
      id:doc.id,
      ...doc.data()
    }
   })
   console.log(blogs);
   setPosts(blogs);
  }
  fetchData();
},[])

    return (
      <div className="home">
    <h1>Tech Blog</h1>
    <div id="blog-by">Ritik</div>
    {posts.map((post,index)=>(
      <div className="post"key={`post-${index}`}>
<Link to={`/post/${post.id}`}>
  <h3>{post.title}</h3>
</Link>
<p>{post.subTitle}</p>
      </div>
    ))}
      </div>
    );
  }
  
  export default Home;
  