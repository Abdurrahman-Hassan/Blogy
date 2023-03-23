import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import back from "../images/back.svg";
import PasswordOverlay from "../components/PasswordOverlay";
import editimg from "../images/edit.svg";

export default function BlogsDetails() {
  const navigate = useNavigate();
  const imgurl = process.env.REACT_APP_IMAGE_CDN;
  const baseurl = process.env.REACT_APP_BASE_URL;

  const { id } = useParams();
  const { loading, data, error } = useFetch(
    `${baseurl}/data/query/production?query=*[_id == "${id}"]`
  );
  const [showPasswordOverlay, setShowPasswordOverlay] = useState(false);

  function handlePasswordSubmit(password) {
    console.log("Password submitted:", password);
    setShowPasswordOverlay(false);
  }

  function handlePasswordCancel() {
    setShowPasswordOverlay(false);
  }

  function handleClick() {
    setShowPasswordOverlay(true);
  }
  if (error) {
    navigate("/error");
  }
  if (loading) {
    return <div className="spinner"></div>;
  }
  if (data) {
    return (
      <div className="blogdetails">
        <div className="bothbtn">
          <button
            className="back-btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={back} alt="back" />
          </button>
          <button onClick={handleClick} className="editbtn">
            <img src={editimg} alt="Edit" />
          </button>
          {showPasswordOverlay && (
            <PasswordOverlay
              onSubmit={handlePasswordSubmit}
              onCancel={handlePasswordCancel}
            />
          )}
        </div>
        <div className="overlay">
          <img
            className="blogcover"
            src={`${imgurl}${data.result[0].coverimg.asset._ref
              .slice(6)
              .replace("-jpg", ".jpg")}?auto=format`}
            alt={data.result[0].coverimg.asset._ref}
          />
        </div>
        <div className="details">
          <h2 className="detailtitle">{data.result[0].title}</h2>
          <h4 className="detailtitle">
            {data.result[0]._createdAt.slice(0, 10)}
          </h4>
          <div className="detailbody">{parse(data.result[0].richtext)}</div>
          <img
            src={`${imgurl}${data.result[0].avatarimage.asset._ref
              .slice(6)
              .replace("-jpg", ".jpg")}?auto=format`}
            alt={data.result[0].avatarimage.asset._ref}
            className="detailavatar"
          />
          <h4 className="authorname">{data.result[0].authorname}</h4>
          <p className="authorbio">{data.result[0].biography}</p>
        </div>
      </div>
    );
  }
}
