import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/PostList-store";

const PostList = () => {

  const {addInitialPostList}=useContext(PostListContext)
  const { postListArr } = useContext(PostListContext);

  return <>
    {postListArr.length === 0 && addInitialPostList()
    }
    {postListArr.map((item) => (
      <Post key={item.id} postData={item}></Post>
    ))}
  </>
}

export default PostList;