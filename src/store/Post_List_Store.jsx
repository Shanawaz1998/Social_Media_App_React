import React, { createContext, useReducer } from "react";

//In the postList variable the value will be store with the help of the useReducer default value
//The variables inside is basically used for the auto complete
export const PostList = createContext({
  postList: [],
  addInitialPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.post;
  }
  return newPostList;
};

export default function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addInitialPost = (post) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: { post },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };
  return (
    <PostList.Provider value={{ postList, addInitialPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
}
const DEFAULT_POST_LIST = [
  // {
  //   id: "1",
  //   title: "Going to Mumbai",
  //   body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
  //   reactions: 2,
  //   userId: "user-9",
  //   tags: ["vacation", "Mumbai", "Enjoying"],
  // },
  // {
  //   id: "2",
  //   title: "Paas ho bhai",
  //   body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
  //   reactions: 15,
  //   userId: "user-12",
  //   tags: ["Graduating", "Unbelievable"],
  // },
];
