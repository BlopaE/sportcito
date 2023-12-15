import React, { useState } from "react";
import "./PostCard.css";

const PostCard = ({ title, text, image }) => {

  const [opened, setOpened] = useState(false);

  function handleComents() {
    setOpened(!opened)
  }

  return (
    <div className="post">
      <h2 className="post__title">{title}</h2>
      <div className="post__content">
        <div className="post__left">
          <p className="post-text">{text}</p>
        </div>
        <div className="post__right">
          <img src={image} alt="Imagen del post" className="post-img" />
        </div>
      </div>
      <div className="post__tools">
        <img src="" alt="" className="post__reacts" />
        <button className="post__coments">Comentarios</button>
      </div>
    </div>
  );
};

export default PostCard;
