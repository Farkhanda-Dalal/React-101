import { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { PostList } from "../store/PostList-store";

const Post = ({ postData }) => {
  const tags = postData.tags;
  const {deletePost}=useContext(PostList);

  return <div className="card post-list-container" style={{ width: "100vw", display: "flex", flexDirection: "row" }}>
    <div className="post-card" key={postData.id}>
      <h5 className="card-title">{postData.title}</h5>
      <p className="card-text">{postData.body}</p>
      <button type="button" className="btn btn-primary position-relative">
        Reactions
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {postData.reactions}
        </span>
      </button> <br />
      {tags.map((item) => (
        <span className="badge text-bg-primary m-2">{item}</span>
      ))}
      <IoTrashOutline onClick={()=>deletePost(postData.id)} />
    </div>
  </div>
}

export default Post;