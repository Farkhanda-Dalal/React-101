import { useContext, useRef } from "react";
import { PostList } from "../store/PostList-store";

const CreatePost = () => {

  const {addPost}=useContext(PostList);

  const userId=useRef();
  const title=useRef();
  const body=useRef();
  const tags=useRef();

  const callAddPost=()=>{
    const obj = {
      userId: userId.current.value, 
      title: title.current.value,
      body: body.current.value,
      tags: tags.current.value.split(",") 
    };
    addPost(obj)
  }

  return <form onSubmit={callAddPost}>
    <div className="mb-3">
      <label className="form-label">User Id</label>
      <input className="form-control" ref={userId}/>
    </div>
    <div className="mb-3">
      <label className="form-label">Title</label>
      <input className="form-control" ref={title}/>
    </div>
    <div className="mb-3">
      <label className="form-label">Body</label>
      <input className="form-control" ref={body}/>
    </div>
    <div className="mb-3">
      <label className="form-label">Tags</label>
      <input className="form-control" ref={tags}/>
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
}

export default CreatePost;