import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

function PostDetail() {
const[post,setPost]= useState([]);
const {postId} = useParams();
useEffect(()=>{
 async function getd(){
    const docRef = doc(db, "blogs", postId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    setPost(docSnap.data())
    console.log(post.title);
  }
getd();
},[])
    return (
      <div className="post-detail">
   {/* <h1>{post.title}</h1> */}
   <h1>{post.title}</h1>
   <p>{post.content}</p>
      </div>
    );
  }
  
  export default PostDetail;
  