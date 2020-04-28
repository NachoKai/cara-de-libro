import React from "react";
import "./Share.scss";

const Share = () => {
  return (
    <div className="share">
      <div className="share-box">
        <div className="share-a">
          <div className="share-a_a">
            <i class="fas fa-universal-access" aria-hidden="true"></i>
          </div>
          <div className="share-a_b">
            <input placeholder="¿Que esta pasando?" />
          </div>
        </div>
        <div className="share-b">
          <div className="share-b_icon-a">
            <i class="fas fa-images"></i>
          </div>
          <div className="share-b_icon-b">
            <i class="fas fa-user-check"></i>
          </div>
          <div className="share-b_icon-c">
            <i class="far fa-smile-wink"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
