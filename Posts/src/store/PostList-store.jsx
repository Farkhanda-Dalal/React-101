import { Children, createContext, useReducer } from "react";

//Creating  Context Hook
const DEFAULT_CONTEXT = {
  postListArrPlaceHolder: [],
  addPost: () => { },
  deletePost: () => { }
}

export const PostList = createContext({
  DEFAULT_CONTEXT
});


//Reducer method to mpdify list
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === 'DELETE_POST') {
    newPostList = currentPostList.filter(post => post.id != action.payload.postId)
  }
  else if(action.type=='ADD_POST'){
    newPostList=[...currentPostList, action.payload.obj];
    alert("New Post was uploaded!");
  }
  return newPostList;
}


const PostListProvider = ({ children }) => {

  const addPost = (obj) => {
    console.log(`Title : ${obj.title}`)
    console.log(`Body : ${obj.body}`)
    console.log(`User Id : ${obj.userId}`)
    console.log(`Tags : ${obj.tags}`)

    dispatchPostListArr({
      type: 'ADD_POST',
      payload: {
        obj
      }
    })
  }

  const deletePost = (postId) => {
    dispatchPostListArr({
      type: 'DELETE_POST',
      payload: {
        postId
      }
    })
  }

  const DEFAULT_POST_LIST = [{
    id: "1",
    title: "Going to Spain",
    body: "Hala Madrid!!!!!!!!!!!",
    reactions: "1000",
    userId: "far123",
    tags: ["madrid", "real"]
  },
  {
    id: "2",
    title: "Viscal bARCA",
    body: "BLAUGRANA VISCAL CATALUNIYA",
    reactions: "10",
    userId: "barcaBitches123",
    tags: ["penalty a favor Real De Madrid"]
  },
  {
    id: "3",
    title: "Atleti ",
    body: "Hala Madrid!!!!!!!!!!!",
    reactions: "1000",
    userId: "far123",
    tags: ["madrid", "real"]
  },]

  //Use reduce Hook:
  // This provides array with a current state and the dispatch func that will be used to dispatch actions to modify the state 
  //It takes 2 args:
  // postListReducer: The reducer function that updates the state.
  // DEFAULT_POST_LIST: The initial state for the post list.
  const [postListArr, dispatchPostListArr] = useReducer(postListReducer, DEFAULT_POST_LIST);

  //This component provides the context to the child components. It wraps the child components that need access to the post list data.
  return <PostList.Provider value={{ postListArr, addPost, deletePost }}>
    {children}
  </PostList.Provider>
}

export default PostListProvider;