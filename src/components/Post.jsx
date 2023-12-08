import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post_List_Store";

export default function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-body" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary hashtag">
            {tags}
          </span>
        ))}
        <div
          className="alert alert-success reaction"
          style={{ margin: "15px 0 0 0" }}
          role="alert"
        >
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
}
