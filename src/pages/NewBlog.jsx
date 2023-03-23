import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import upload from "../hooks/upload";
import back from "../images/back.svg";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState();
  const [convertedText, setConvertedText] = useState("Enter Content Here");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [authName, setauthname] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function Handle(e) {
    e.preventDefault();
    if (cover.size <= 1000000 && avatar.size <= 1000000) {
      upload(title, cover, avatar, bio, convertedText, authName, pass);

      navigate("/Loading");
    } else {
      navigate("/Alert");
    }
  }
  return (
    <div>
      <button
        className="back-btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={back} alt="back" />
      </button>
      <form className="allform" onSubmit={Handle}>
        <h3>Cover</h3>
        <div className="upload-btn-wrapper">
          <button className="btn">Upload a file</button>
          <input
            type="file"
            name="cover"
            className="coverForm"
            accept="image/png, image/jpeg"
            required={true}
            onChange={(e) => setCover(e.target.files[0])}
          />
        </div>
        <h3>Title</h3>
        <input
          type="text"
          required={true}
          name="title"
          className="titleForm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3>Content</h3>
        <ReactQuill
          theme="snow"
          value={convertedText}
          onChange={setConvertedText}
          style={{ color: "#8e2ad6", border: "1px solid blueviolet" }}
        />
        <h3>Avatar</h3>
        <div className="upload-btn-wrapper">
          <button className="btn">Upload a file</button>
          <input
            type="file"
            accept="image/png, image/jpeg"
            name="avatar"
            className="avatarForm"
            onChange={(e) => setAvatar(e.target.files[0])}
            required={true}
          />
        </div>
        <h3>Author Name</h3>
        <input
          type="text"
          name="name"
          className="bioForm"
          value={authName}
          onChange={(e) => setauthname(e.target.value)}
          required={true}
        />
        <h3>Author Bio</h3>
        <input
          type="text"
          name="bio"
          className="bioForm bioinp"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required={true}
        />
        <h3 style={{ marginBottom: "0px" }}>Password</h3>
        <h6 style={{ marginTop: "0px", marginBottom: "0px" }}>
          (For feature edits)
        </h6>
        <input
          type="password"
          name="password"
          className="bioForm"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required={true}
        />

        <input
          type="submit"
          value="Submit"
          className="submitbtn"
          style={{ marginTop: "25px" }}
        />
      </form>
    </div>
  );
};

export default NewBlog;
