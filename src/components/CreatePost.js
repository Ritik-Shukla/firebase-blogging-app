import { useState } from "react";
import  {db} from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { useFormInput } from "../hooks";

function CreatePost() {
  const title = useFormInput('');
  const content= useFormInput('');
  const subTitle = useFormInput('')

async function handleSubmit(e){
  e.preventDefault()
  const docRef = await addDoc(collection(db, "blogs"), {
   title:title.value,
   subTitle:subTitle.value,
   content:content.value,
   createdOn:new Date()
  });
}

    return (
      <div className="create-post">
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit}>
<div className="form-field">
  <label>Title</label>
  {/* <input value = {title} onChange={(e)=>setTitle(e.target.value)}/> */}
  <input {...title}/>
</div>

<div className="form-field">
  <label>Sub Title</label>
  {/* <input value = {subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}
  <input {...subTitle}/>
</div>

<div className="form-field">
  <label>Content</label>
  {/* <textarea value = {content} onChange={(e)=>setContent(e.target.value)}></textarea> */}
  <textarea {...content}></textarea>
</div>

<button className="create-post-btn">Create Post</button>

    </form>
      </div>
    );
  }
  
  export default CreatePost;
  