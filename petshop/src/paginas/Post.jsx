import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/post.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  let history = useHistory();

  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch(() => {
      history.push("/404");
    });
  }, [id, history]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="caratao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
